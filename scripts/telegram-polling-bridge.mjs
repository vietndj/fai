#!/usr/bin/env node

/**
 * Autonomous Local Polling Bridge for FAI Telegram Bot (@FAI_dang_tin_bot)
 *
 * Responsibilities:
 * 1. Loads environment variables from .env.local
 * 2. Deletes active webhook (drop_pending_updates: false) so Telegram routes updates to getUpdates
 * 3. Long-polls Telegram API using persistent keep-alive IPv4 HTTPS Agent
 * 4. Forwards each update to local webhook (http://localhost:3000/api/telegram/webhook) with secret token header
 * 5. Handles network disconnects with exponential backoff retry logic
 * 6. Supports `--once` flag for single-poll verification
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import dns from 'node:dns';

// Enforce IPv4 DNS resolution across this process
try {
  dns.setDefaultResultOrder('ipv4first');
} catch {
  // Ignore if unsupported
}

let isRunning = true;
let activeTelegramAgent = null;

// Graceful shutdown handling registered synchronously at module startup
const shutdown = () => {
  if (!isRunning) return;
  console.log('\n🛑 [PollingBridge] Received termination signal. Shutting down cleanly...');
  isRunning = false;
  try {
    activeTelegramAgent?.destroy();
  } catch {}
  process.exit(0);
};

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

// 1. Resolve paths & Load environment variables from .env.local
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const envPath = path.join(projectRoot, '.env.local');

if (fs.existsSync(envPath)) {
  try {
    process.loadEnvFile(envPath);
  } catch {
    // Fallback .env parser
    const envContent = fs.readFileSync(envPath, 'utf8');
    for (const line of envContent.split('\n')) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const eqIdx = trimmed.indexOf('=');
      if (eqIdx > 0) {
        const key = trimmed.slice(0, eqIdx).trim();
        let val = trimmed.slice(eqIdx + 1).trim();
        if (
          (val.startsWith('"') && val.endsWith('"')) ||
          (val.startsWith("'") && val.endsWith("'"))
        ) {
          val = val.slice(1, -1);
        }
        if (!process.env[key]) {
          process.env[key] = val;
        }
      }
    }
  }
}

// Import optimized Telegram client functions
const {
  callTelegramApi,
  deleteWebhook,
  getWebhookInfo,
  getUpdates,
  telegramAgent,
} = await import('../src/lib/telegram.js');

activeTelegramAgent = telegramAgent;

const botToken = process.env.TELEGRAM_BOT_TOKEN;
const webhookSecret = process.env.TELEGRAM_WEBHOOK_SECRET;
const webhookUrl = process.env.LOCAL_WEBHOOK_URL || 'http://localhost:3000/api/telegram/webhook';
const isOnce = process.argv.includes('--once');

if (!botToken) {
  console.error('❌ [PollingBridge] Fatal: TELEGRAM_BOT_TOKEN is not set in environment or .env.local');
  process.exit(1);
}

if (!webhookSecret) {
  console.error('❌ [PollingBridge] Fatal: TELEGRAM_WEBHOOK_SECRET is not set in environment or .env.local');
  process.exit(1);
}

function formatUpdateSummary(update) {
  if (update.message) {
    const msg = update.message;
    const from = msg.from
      ? `${msg.from.first_name || ''} (@${msg.from.username || msg.from.id})`
      : 'unknown';
    const text = msg.text || msg.caption || (msg.photo ? '[Photo]' : '[Message]');
    return `Message from ${from}: "${text.slice(0, 60)}"`;
  }
  if (update.callback_query) {
    const cb = update.callback_query;
    const from = cb.from
      ? `${cb.from.first_name || ''} (@${cb.from.username || cb.from.id})`
      : 'unknown';
    return `CallbackQuery from ${from}: data="${cb.data}" (queryId: ${cb.id})`;
  }
  return `Update #${update.update_id}`;
}

async function forwardUpdate(update) {
  const t0 = performance.now();
  const summary = formatUpdateSummary(update);

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-telegram-bot-api-secret-token': webhookSecret,
      },
      body: JSON.stringify(update),
    });

    const duration = (performance.now() - t0).toFixed(1);
    let result = {};
    try {
      result = await response.json();
    } catch {
      // Ignored
    }

    if (response.ok) {
      console.log(`  ✅ [Forwarded ${duration}ms] #${update.update_id} -> HTTP ${response.status} | ${summary}`);
      return { ok: true, status: response.status, result };
    } else {
      console.warn(`  ⚠️ [Forwarded ${duration}ms] #${update.update_id} -> HTTP ${response.status} (FAILED) | ${summary}`);
      return { ok: false, status: response.status, result };
    }
  } catch (err) {
    const duration = (performance.now() - t0).toFixed(1);
    console.error(`  ❌ [Forward Error ${duration}ms] #${update.update_id} -> ${err.message} | ${summary}`);
    return { ok: false, error: err.message };
  }
}

async function main() {
  console.log('════════════════════════════════════════════════════════════');
  console.log('🚀 FAI Telegram Autonomous Local Polling Bridge');
  console.log('════════════════════════════════════════════════════════════');
  console.log(`📍 Webhook Target: ${webhookUrl}`);
  console.log(`🔑 Secret Token:   ${webhookSecret.slice(0, 6)}...${webhookSecret.slice(-4)}`);
  console.log(`⚡ Mode:           ${isOnce ? 'Single Run (--once)' : 'Continuous Long-Polling'}`);

  // Check bot identity
  try {
    const botInfo = await callTelegramApi('getMe');
    console.log(`🤖 Bot Identity:   @${botInfo.username} (${botInfo.first_name}, ID: ${botInfo.id})`);
  } catch (err) {
    console.error(`❌ [PollingBridge] Failed to verify Bot Token via getMe: ${err.message}`);
    process.exit(1);
  }

  // Ensure webhook is cleared so getUpdates receives incoming traffic
  try {
    const webhookInfo = await getWebhookInfo();
    if (webhookInfo.url) {
      console.log(`⚠️ Active webhook detected: "${webhookInfo.url}". Deleting webhook...`);
      await deleteWebhook({ drop_pending_updates: false });
      console.log('✅ Webhook cleared successfully.');
    } else {
      console.log('ℹ️ Webhook is already empty (ready for long-polling).');
    }
  } catch (err) {
    console.warn(`⚠️ [PollingBridge] Webhook cleanup warning: ${err.message}`);
  }

  let offset = 0;
  let backoffDelayMs = 1000;
  const MAX_BACKOFF_MS = 30000;

  console.log('📡 Starting update loop (timeout: 25s, IPv4 enforced)...\n');

  while (isRunning) {
    try {
      const pollTimeout = isOnce ? 0 : 25;
      const updates = await getUpdates({
        offset,
        timeout: pollTimeout,
        allowed_updates: ['message', 'callback_query'],
      });

      // Reset exponential backoff on successful communication
      backoffDelayMs = 1000;

      if (Array.isArray(updates) && updates.length > 0) {
        console.log(`📩 [${new Date().toLocaleTimeString()}] Received ${updates.length} update(s)`);
        for (const update of updates) {
          let forwardSuccess = false;
          let retries = 0;
          const MAX_FORWARD_RETRIES = 3;

          while (!forwardSuccess && retries < MAX_FORWARD_RETRIES && isRunning) {
            const fwdResult = await forwardUpdate(update);
            if (fwdResult.ok) {
              forwardSuccess = true;
            } else if (fwdResult.status && fwdResult.status >= 400 && fwdResult.status < 500) {
              // Client-side rejection (e.g. 401 Unauthorized, 400 Bad Request) - non-retryable
              forwardSuccess = true;
            } else {
              // Server offline (fetch error / ECONNREFUSED) or 5xx server error
              retries++;
              if (retries < MAX_FORWARD_RETRIES && isRunning) {
                console.warn(`  🔄 [Retry ${retries}/${MAX_FORWARD_RETRIES}] Local webhook unavailable. Retrying in 1s...`);
                await new Promise((r) => setTimeout(r, 1000));
              }
            }
          }

          if (forwardSuccess) {
            offset = update.update_id + 1;
          } else {
            console.error(`  ⚠️ [PollingBridge] Update #${update.update_id} could not be delivered to local webhook. Preserving offset for redelivery.`);
            break;
          }
        }
      }

      if (isOnce) {
        console.log('\n✅ [PollingBridge] Single-poll verification complete (--once). Exiting.');
        telegramAgent.destroy();
        process.exit(0);
      }
    } catch (err) {
      if (!isRunning) break;

      const isConflict = err.errorCode === 409 || err.message?.includes('409');
      if (isConflict) {
        console.error(`❌ [PollingBridge] Conflict Error (409): Another instance or webhook is active. Exiting.`);
        process.exit(1);
      }

      console.warn(`⚠️ [PollingBridge] Polling network issue: ${err.message}`);
      console.log(`⏳ Backing off for ${(backoffDelayMs / 1000).toFixed(1)}s before retry...`);
      await new Promise((r) => setTimeout(r, backoffDelayMs));
      backoffDelayMs = Math.min(backoffDelayMs * 2, MAX_BACKOFF_MS);

      if (isOnce) {
        console.error('❌ [PollingBridge] Single-poll failed with error.');
        process.exit(1);
      }
    }
  }
}

main().catch((err) => {
  console.error('💥 [PollingBridge] Unhandled fatal error:', err);
  process.exit(1);
});
