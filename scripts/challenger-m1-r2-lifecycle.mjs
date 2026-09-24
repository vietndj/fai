/**
 * Empirical Verification Harness: Process Lifecycle & Polling Bridge Resilience
 * Agent: challenger_m1_r2_2
 *
 * Scope:
 * 1. scripts/telegram-polling-bridge.mjs --once executes cleanly with code 0.
 * 2. Early signal interception during startup across all lifecycle stages:
 *    - Banner / pre-network startup stage
 *    - In-flight getMe pre-flight stage
 *    - In-flight webhook configuration stage
 *    - In-flight long-polling stage
 *    - Fast shutdown latency (< 500ms)
 * 3. Socket pool cleanup and keep-alive latency < 1s:
 *    - Cold vs warm keep-alive latency distribution (avg < 1s, max < 1s)
 *    - Socket reuse verification
 *    - Sockets destroyed verification
 *    - Clean event loop drain without hanging handles
 */

import { spawn } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const bridgeScript = path.join(projectRoot, 'scripts', 'telegram-polling-bridge.mjs');

// Load environment variables from .env.local
const envPath = path.join(projectRoot, '.env.local');
if (fs.existsSync(envPath)) {
  try {
    process.loadEnvFile(envPath);
  } catch {
    const envContent = fs.readFileSync(envPath, 'utf8');
    for (const line of envContent.split('\n')) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const eqIdx = trimmed.indexOf('=');
      if (eqIdx > 0) {
        const key = trimmed.slice(0, eqIdx).trim();
        let val = trimmed.slice(eqIdx + 1).trim();
        if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
          val = val.slice(1, -1);
        }
        if (!process.env[key]) process.env[key] = val;
      }
    }
  }
}

let passedCount = 0;
let failedCount = 0;
const results = [];

function check(title, condition, details = '') {
  if (condition) {
    passedCount++;
    console.log(`  ✅ [PASS] ${title}${details ? ` -> ${details}` : ''}`);
  } else {
    failedCount++;
    console.error(`  ❌ [FAIL] ${title}${details ? ` -> ${details}` : ''}`);
  }
  results.push({ title, pass: !!condition, details });
}

// -------------------------------------------------------------
// SECTION 1: Verification of telegram-polling-bridge.mjs --once
// -------------------------------------------------------------
async function verifyOnceExecution() {
  console.log('\n===============================================================');
  console.log('📌 SECTION 1: Verification of telegram-polling-bridge.mjs --once');
  console.log('===============================================================');

  const runBridgeOnce = (extraEnv = {}) =>
    new Promise((resolve) => {
      const t0 = performance.now();
      const proc = spawn('node', [bridgeScript, '--once'], {
        cwd: projectRoot,
        env: { ...process.env, ...extraEnv },
      });

      let stdout = '';
      let stderr = '';

      proc.stdout.on('data', (d) => (stdout += d.toString()));
      proc.stderr.on('data', (d) => (stderr += d.toString()));

      const timer = setTimeout(() => {
        proc.kill('SIGKILL');
        resolve({ code: -1, timeout: true, stdout, stderr, durationMs: performance.now() - t0 });
      }, 30000);

      proc.on('close', (code, signal) => {
        clearTimeout(timer);
        resolve({ code, signal, stdout, stderr, durationMs: performance.now() - t0 });
      });
    });

  // Test 1.1: Standard run
  const res1 = await runBridgeOnce();
  check(
    'Bridge --once terminates with code 0',
    res1.code === 0 && !res1.timeout,
    `code=${res1.code}, duration=${res1.durationMs.toFixed(0)}ms`
  );
  check(
    'Bridge --once logs completion banner',
    res1.stdout.includes('Single-poll verification complete (--once). Exiting.'),
    `completion banner verified in stdout`
  );
  check(
    'Bridge --once performs identity verification and webhook check',
    res1.stdout.includes('Bot Identity:') && (res1.stdout.includes('Webhook cleared') || res1.stdout.includes('Webhook is already empty')),
    `bot identity and webhook pre-flight validated`
  );

  // Test 1.2: Second run (repeatability and idempotence)
  const res2 = await runBridgeOnce();
  check(
    'Bridge --once second consecutive run terminates with code 0',
    res2.code === 0 && !res2.timeout,
    `code=${res2.code}, duration=${res2.durationMs.toFixed(0)}ms`
  );

  // Test 1.3: Clean failure with exit code 1 when BOT TOKEN is missing
  const resMissingToken = await runBridgeOnce({ TELEGRAM_BOT_TOKEN: '' });
  check(
    'Bridge --once cleanly rejects missing TELEGRAM_BOT_TOKEN with exit code 1',
    resMissingToken.code === 1 && resMissingToken.stderr.includes('TELEGRAM_BOT_TOKEN is not set'),
    `code=${resMissingToken.code}, stderr caught missing token`
  );

  // Test 1.4: Clean failure with exit code 1 when WEBHOOK_SECRET is missing
  const resMissingSecret = await runBridgeOnce({ TELEGRAM_WEBHOOK_SECRET: '' });
  check(
    'Bridge --once cleanly rejects missing TELEGRAM_WEBHOOK_SECRET with exit code 1',
    resMissingSecret.code === 1 && resMissingSecret.stderr.includes('TELEGRAM_WEBHOOK_SECRET is not set'),
    `code=${resMissingSecret.code}, stderr caught missing secret`
  );
}

// -------------------------------------------------------------
// SECTION 2: Early Signal Interception During Startup
// -------------------------------------------------------------
async function verifyEarlySignalInterception() {
  console.log('\n===============================================================');
  console.log('📌 SECTION 2: Early Signal Interception During Startup');
  console.log('===============================================================');

  const runSignalTestOnTrigger = ({ signal, triggerText, delayAfterTriggerMs = 0, label }) =>
    new Promise((resolve) => {
      const t0 = performance.now();
      const proc = spawn('node', [bridgeScript], {
        cwd: projectRoot,
        env: { ...process.env },
      });

      let stdout = '';
      let stderr = '';
      let signalSent = false;
      let sentTime = 0;

      proc.stdout.on('data', (d) => {
        const s = d.toString();
        stdout += s;
        if (!signalSent && s.includes(triggerText)) {
          signalSent = true;
          if (delayAfterTriggerMs === 0) {
            sentTime = performance.now();
            proc.kill(signal);
          } else {
            setTimeout(() => {
              sentTime = performance.now();
              proc.kill(signal);
            }, delayAfterTriggerMs);
          }
        }
      });
      proc.stderr.on('data', (d) => (stderr += d.toString()));

      const timer = setTimeout(() => {
        proc.kill('SIGKILL');
        resolve({ label, code: -1, timeout: true, shutdownLatency: -1, stdout, stderr });
      }, 30000);

      proc.on('close', (code, sig) => {
        clearTimeout(timer);
        const shutdownLatency = sentTime > 0 ? performance.now() - sentTime : -1;
        resolve({
          label,
          code,
          sig,
          timeout: false,
          shutdownLatency,
          totalDuration: performance.now() - t0,
          stdout,
          stderr,
        });
      });
    });

  // Stage 1: Signal intercepted at Startup Banner (pre-network phase)
  const sigintBanner = await runSignalTestOnTrigger({
    signal: 'SIGINT',
    triggerText: 'Autonomous Local Polling Bridge',
    label: 'SIGINT at Startup Banner (Pre-network initialization)',
  });
  check(
    'Early SIGINT at Startup Banner exits with code 0',
    sigintBanner.code === 0 && sigintBanner.stdout.includes('Shutting down cleanly'),
    `code=${sigintBanner.code}, latency=${(sigintBanner.shutdownLatency || 0).toFixed(1)}ms`
  );

  const sigtermBanner = await runSignalTestOnTrigger({
    signal: 'SIGTERM',
    triggerText: 'Autonomous Local Polling Bridge',
    label: 'SIGTERM at Startup Banner (Pre-network initialization)',
  });
  check(
    'Early SIGTERM at Startup Banner exits with code 0',
    sigtermBanner.code === 0 && sigtermBanner.stdout.includes('Shutting down cleanly'),
    `code=${sigtermBanner.code}, latency=${(sigtermBanner.shutdownLatency || 0).toFixed(1)}ms`
  );

  // Stage 2: Signal intercepted during getMe pre-flight network request
  const sigintGetMe = await runSignalTestOnTrigger({
    signal: 'SIGINT',
    triggerText: 'Mode:',
    delayAfterTriggerMs: 15,
    label: 'SIGINT during getMe network call',
  });
  check(
    'SIGINT during getMe() pre-flight network call exits with code 0',
    sigintGetMe.code === 0 && sigintGetMe.stdout.includes('Shutting down cleanly'),
    `code=${sigintGetMe.code}, latency=${(sigintGetMe.shutdownLatency || 0).toFixed(1)}ms`
  );

  // Stage 3: Signal intercepted during getWebhookInfo / deleteWebhook
  const sigintWebhookCheck = await runSignalTestOnTrigger({
    signal: 'SIGINT',
    triggerText: 'Bot Identity:',
    delayAfterTriggerMs: 15,
    label: 'SIGINT during getWebhookInfo/deleteWebhook call',
  });
  check(
    'SIGINT during getWebhookInfo() pre-flight network call exits with code 0',
    sigintWebhookCheck.code === 0 && sigintWebhookCheck.stdout.includes('Shutting down cleanly'),
    `code=${sigintWebhookCheck.code}, latency=${(sigintWebhookCheck.shutdownLatency || 0).toFixed(1)}ms`
  );

  // Stage 4: Signal intercepted during active update polling loop
  const sigintUpdateLoop = await runSignalTestOnTrigger({
    signal: 'SIGINT',
    triggerText: 'Starting update loop',
    delayAfterTriggerMs: 100,
    label: 'SIGINT during active update long-polling',
  });
  check(
    'SIGINT during active long-polling loop exits with code 0',
    sigintUpdateLoop.code === 0 && sigintUpdateLoop.stdout.includes('Shutting down cleanly'),
    `code=${sigintUpdateLoop.code}, latency=${(sigintUpdateLoop.shutdownLatency || 0).toFixed(1)}ms`
  );

  const sigtermUpdateLoop = await runSignalTestOnTrigger({
    signal: 'SIGTERM',
    triggerText: 'Starting update loop',
    delayAfterTriggerMs: 100,
    label: 'SIGTERM during active update long-polling',
  });
  check(
    'SIGTERM during active long-polling loop exits with code 0',
    sigtermUpdateLoop.code === 0 && sigtermUpdateLoop.stdout.includes('Shutting down cleanly'),
    `code=${sigtermUpdateLoop.code}, latency=${(sigtermUpdateLoop.shutdownLatency || 0).toFixed(1)}ms`
  );

  // Stage 5: Shutdown latency benchmark
  const measuredLatencies = [
    sigintBanner.shutdownLatency,
    sigtermBanner.shutdownLatency,
    sigintGetMe.shutdownLatency,
    sigintWebhookCheck.shutdownLatency,
    sigintUpdateLoop.shutdownLatency,
    sigtermUpdateLoop.shutdownLatency,
  ].filter((l) => l > 0);

  const maxShutdownLatency = measuredLatencies.length > 0 ? Math.max(...measuredLatencies) : 999;
  const avgShutdownLatency = measuredLatencies.length > 0 ? measuredLatencies.reduce((a, b) => a + b, 0) / measuredLatencies.length : 999;

  check(
    'Signal shutdown latency is sub-second across all stages (< 500ms)',
    maxShutdownLatency < 500,
    `avg=${avgShutdownLatency.toFixed(1)}ms, max=${maxShutdownLatency.toFixed(1)}ms (threshold < 500ms)`
  );
}

// -------------------------------------------------------------
// SECTION 3: Socket Pool Cleanup and Keep-Alive Latency < 1s
// -------------------------------------------------------------
async function verifySocketPoolAndKeepAlive() {
  console.log('\n===============================================================');
  console.log('📌 SECTION 3: Socket Pool Cleanup & Keep-Alive Latency (< 1s)');
  console.log('===============================================================');

  const { callTelegramApi, telegramAgent } = await import('../src/lib/telegram.js');

  // Test 3.1: Sequential request latencies over keep-alive agent
  console.log('\nMeasuring sequential request latencies over persistent socket pool...');
  const latencies = [];

  // Request 1: Cold TLS handshake
  const t0Cold = performance.now();
  const botInfo = await callTelegramApi('getMe');
  const coldLatency = performance.now() - t0Cold;
  latencies.push(coldLatency);
  console.log(`  [Call 1 - Cold Handshake]: ${coldLatency.toFixed(1)}ms (@${botInfo.username})`);

  // Requests 2-6: Warm keep-alive requests
  const warmLatencies = [];
  for (let i = 2; i <= 6; i++) {
    const t0 = performance.now();
    await callTelegramApi('getWebhookInfo');
    const dt = performance.now() - t0;
    warmLatencies.push(dt);
    latencies.push(dt);
    console.log(`  [Call ${i} - Keep-Alive Warm]: ${dt.toFixed(1)}ms`);
  }

  const avgWarmLatency = warmLatencies.reduce((a, b) => a + b, 0) / warmLatencies.length;
  const maxWarmLatency = Math.max(...warmLatencies);
  const minWarmLatency = Math.min(...warmLatencies);

  check(
    'Keep-alive average latency < 1000ms',
    avgWarmLatency < 1000,
    `avg=${avgWarmLatency.toFixed(1)}ms (threshold < 1000ms)`
  );

  check(
    'Keep-alive maximum latency < 1000ms',
    maxWarmLatency < 1000,
    `max=${maxWarmLatency.toFixed(1)}ms (threshold < 1000ms)`
  );

  check(
    'Warm keep-alive shows fast response',
    minWarmLatency < 500,
    `fastest warm call=${minWarmLatency.toFixed(1)}ms`
  );

  // Test 3.2: Verify socket reuse in HTTPS Agent
  const allFreeSockets = Object.values(telegramAgent.freeSockets || {}).flat();
  const allActiveSockets = Object.values(telegramAgent.sockets || {}).flat();
  const totalSocketsBefore = allFreeSockets.length + allActiveSockets.length;

  console.log(`\nSocket pool state before cleanup: free=${allFreeSockets.length}, active=${allActiveSockets.length}`);

  check(
    'Agent maintains warm keep-alive socket in pool',
    totalSocketsBefore > 0,
    `total pool sockets=${totalSocketsBefore}`
  );

  // Test 3.3: Verify socket destruction and pool cleanup on agent.destroy()
  console.log('Invoking telegramAgent.destroy() to verify clean teardown...');
  telegramAgent.destroy();

  // Every socket must have destroyed === true immediately
  const destroyedStates = [...allFreeSockets, ...allActiveSockets].map((s) => s.destroyed);
  const allMarkedDestroyed = destroyedStates.length > 0 && destroyedStates.every((d) => d === true);

  check(
    'All sockets in pool marked destroyed=true immediately upon destroy()',
    allMarkedDestroyed,
    `destroyed=${JSON.stringify(destroyedStates)}`
  );

  // After socket close events propagate, the socket pool collections are cleared
  await new Promise((r) => setTimeout(r, 60));
  const freeSocketsAfter = Object.values(telegramAgent.freeSockets || {}).reduce(
    (acc, arr) => acc + (arr ? arr.length : 0),
    0
  );
  const activeSocketsAfter = Object.values(telegramAgent.sockets || {}).reduce(
    (acc, arr) => acc + (arr ? arr.length : 0),
    0
  );

  check(
    'Socket pool collections fully drained after close propagation',
    freeSocketsAfter === 0 && activeSocketsAfter === 0,
    `freeSockets=${freeSocketsAfter}, activeSockets=${activeSocketsAfter}`
  );

  // Test 3.4: Verify process doesn't hang after destroy (event loop naturally drains)
  const testCleanExitAfterDestroy = () =>
    new Promise((resolve) => {
      const scriptCode = `
        import { callTelegramApi, telegramAgent } from './src/lib/telegram.js';
        async function run() {
          await callTelegramApi('getMe');
          telegramAgent.destroy();
          // Event loop must naturally drain without process.exit()
        }
        run();
      `;

      const t0 = performance.now();
      const proc = spawn('node', ['--input-type=module', '-e', scriptCode], {
        cwd: projectRoot,
        env: { ...process.env },
      });

      const timer = setTimeout(() => {
        proc.kill('SIGKILL');
        resolve({ hung: true, duration: performance.now() - t0 });
      }, 6000);

      proc.on('close', (code) => {
        clearTimeout(timer);
        resolve({ hung: false, code, duration: performance.now() - t0 });
      });
    });

  const drainRes = await testCleanExitAfterDestroy();
  check(
    'Event loop naturally drains and exits after telegramAgent.destroy() (no hanging sockets)',
    !drainRes.hung && drainRes.code === 0,
    `hung=${drainRes.hung}, exitCode=${drainRes.code}, elapsed=${drainRes.duration.toFixed(0)}ms`
  );
}

// -------------------------------------------------------------
// Main Runner
// -------------------------------------------------------------
async function main() {
  console.log('===============================================================');
  console.log('🧪 EMPIRICAL CHALLENGER VERIFICATION HARNESS (challenger_m1_r2_2)');
  console.log(`⏰ Timestamp: ${new Date().toISOString()}`);
  console.log('===============================================================');

  await verifyOnceExecution();
  await verifyEarlySignalInterception();
  await verifySocketPoolAndKeepAlive();

  console.log('\n===============================================================');
  console.log(`Summary: ${passedCount} passed, ${failedCount} failed`);
  const verdict = failedCount === 0 ? 'APPROVE' : 'REJECT';
  console.log(`FINAL EMPIRICAL VERDICT: ${verdict}`);
  console.log('===============================================================\n');

  if (failedCount > 0) {
    process.exit(1);
  }
}

main().catch((err) => {
  console.error('Fatal test harness failure:', err);
  process.exit(1);
});
