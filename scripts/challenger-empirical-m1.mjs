/**
 * Comprehensive Empirical Stress Test Suite for Milestone 1
 *
 * Scope:
 * 1. Concurrency stress testing on `src/lib/telegram.js` (HTTPS agent pool, warm sockets, parallel bursts).
 * 2. Adversarial payload testing on `/api/telegram/webhook` (malformed JSON, empty/invalid payloads, unknown commands, unauthorized senders, stale callbacks).
 * 3. Process signal handling (SIGINT/SIGTERM/--once) in `scripts/telegram-polling-bridge.mjs`.
 */

import { spawn } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

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

const WEBHOOK_URL = 'http://localhost:3000/api/telegram/webhook';
const SECRET_TOKEN = process.env.TELEGRAM_WEBHOOK_SECRET || 'fai_telegram_secret_token_2026';
const ALLOWED_USER_ID = Number(process.env.TELEGRAM_ALLOWED_USER_ID || '2050406425');

const results = {
  passed: 0,
  failed: 0,
  details: [],
};

function record(name, pass, info) {
  if (pass) {
    results.passed++;
    console.log(`  ✅ [PASS] ${name}${info ? ` -> ${info}` : ''}`);
  } else {
    results.failed++;
    console.error(`  ❌ [FAIL] ${name}${info ? ` -> ${info}` : ''}`);
  }
  results.details.push({ name, pass, info });
}

// =========================================================================
// SUITE 1: Concurrency & HTTPS Agent Connection Pool Stress Test
// =========================================================================
async function testConcurrency() {
  console.log('\n=================================================================');
  console.log('⚡ SUITE 1: Concurrency & HTTPS Agent Connection Pool Stress Test');
  console.log('=================================================================');

  const { callTelegramApi, answerCallbackQuery, telegramAgent } = await import('../src/lib/telegram.js');

  // Test 1.1: Sequential baseline latency
  console.log('\n[1.1] Sequential Baseline Latency Check (3 calls)...');
  const seqTimes = [];
  for (let i = 0; i < 3; i++) {
    const t0 = performance.now();
    await callTelegramApi('getMe');
    const dt = performance.now() - t0;
    seqTimes.push(dt);
  }
  console.log(`  Sequential latencies: ${seqTimes.map((t) => t.toFixed(1) + 'ms').join(', ')}`);
  const minLatency = Math.min(...seqTimes);
  record('Sequential Baseline Latency', seqTimes.length === 3 && minLatency < 3000, `Warmest: ${minLatency.toFixed(1)}ms`);

  // Test 1.2: 5 Parallel Requests Burst (getMe)
  console.log('\n[1.2] Concurrency Burst: 5 Parallel calls to getMe()...');
  const tBurst5_start = performance.now();
  const burst5Promises = Array.from({ length: 5 }, (_, idx) => {
    const t0 = performance.now();
    return callTelegramApi('getMe').then((res) => ({
      idx,
      success: !!res.id,
      duration: performance.now() - t0,
    }));
  });
  const burst5Results = await Promise.all(burst5Promises);
  const totalBurst5Time = performance.now() - tBurst5_start;
  const burst5Successes = burst5Results.filter((r) => r.success).length;
  const burst5Durations = burst5Results.map((r) => r.duration);
  const burst5Avg = burst5Durations.reduce((a, b) => a + b, 0) / burst5Durations.length;
  const burst5Max = Math.max(...burst5Durations);

  record(
    '5 Parallel getMe() burst',
    burst5Successes === 5,
    `${burst5Successes}/5 ok, avg: ${burst5Avg.toFixed(1)}ms, max: ${burst5Max.toFixed(1)}ms, total wall: ${totalBurst5Time.toFixed(1)}ms`
  );

  // Test 1.3: 10 Parallel Mixed Requests Burst (5 getMe + 5 getWebhookInfo)
  console.log('\n[1.3] Concurrency Burst: 10 Parallel mixed calls (5 getMe + 5 getWebhookInfo)...');
  const tBurst10_start = performance.now();
  const burst10Promises = Array.from({ length: 10 }, (_, idx) => {
    const t0 = performance.now();
    const method = idx % 2 === 0 ? 'getMe' : 'getWebhookInfo';
    return callTelegramApi(method).then(() => ({
      idx,
      method,
      success: true,
      duration: performance.now() - t0,
    })).catch((err) => ({
      idx,
      method,
      success: false,
      error: err.message,
      duration: performance.now() - t0,
    }));
  });
  const burst10Results = await Promise.all(burst10Promises);
  const totalBurst10Time = performance.now() - tBurst10_start;
  const burst10Successes = burst10Results.filter((r) => r.success).length;
  const burst10Durations = burst10Results.map((r) => r.duration);
  const burst10Avg = burst10Durations.reduce((a, b) => a + b, 0) / burst10Durations.length;
  const burst10Max = Math.max(...burst10Durations);

  record(
    '10 Parallel Mixed Calls Burst',
    burst10Successes === 10,
    `${burst10Successes}/10 ok, avg: ${burst10Avg.toFixed(1)}ms, max: ${burst10Max.toFixed(1)}ms, total wall: ${totalBurst10Time.toFixed(1)}ms`
  );

  // Test 1.4: 15 Parallel Requests over Warm Pool
  console.log('\n[1.4] Concurrency Burst: 15 Parallel calls over warm pool...');
  const tBurst15_start = performance.now();
  const burst15Promises = Array.from({ length: 15 }, (_, idx) => {
    const t0 = performance.now();
    return callTelegramApi('getMe').then((res) => ({
      idx,
      success: !!res.id,
      duration: performance.now() - t0,
    })).catch((err) => ({
      idx,
      success: false,
      error: err.message,
      duration: performance.now() - t0,
    }));
  });
  const burst15Results = await Promise.all(burst15Promises);
  const totalBurst15Time = performance.now() - tBurst15_start;
  const burst15Successes = burst15Results.filter((r) => r.success).length;
  const burst15Durations = burst15Results.map((r) => r.duration);
  const burst15Avg = burst15Durations.reduce((a, b) => a + b, 0) / burst15Durations.length;
  const burst15Min = Math.min(...burst15Durations);

  record(
    '15 Parallel Calls Warm Pool Burst',
    burst15Successes === 15,
    `${burst15Successes}/15 ok, min: ${burst15Min.toFixed(1)}ms, avg: ${burst15Avg.toFixed(1)}ms, wall: ${totalBurst15Time.toFixed(1)}ms`
  );

  // Test 1.5: Concurrent Resilient Callback Queries (10 parallel stale query IDs)
  console.log('\n[1.5] Concurrency Resilience: 10 Parallel answerCallbackQuery() with expired IDs...');
  const tCbStart = performance.now();
  const cbPromises = Array.from({ length: 10 }, (_, idx) => {
    return answerCallbackQuery(`stale_concurrent_query_${Date.now()}_${idx}`, 'test')
      .then((res) => ({
        idx,
        handled: res.ok === false && (res.ignored === true || res.error === true),
        res,
      }))
      .catch((err) => ({
        idx,
        handled: false,
        error: err.message,
      }));
  });
  const cbResults = await Promise.all(cbPromises);
  const totalCbTime = performance.now() - tCbStart;
  const cbHandledCount = cbResults.filter((r) => r.handled).length;

  record(
    '10 Parallel Expired Callback Queries',
    cbHandledCount === 10,
    `${cbHandledCount}/10 caught & swallowed gracefully, wall time: ${totalCbTime.toFixed(1)}ms`
  );

  // Test 1.6: Connection Pool Socket Inspection
  console.log('\n[1.6] Inspect HTTPS Agent Connection Pool State...');
  const activeSockets = Object.values(telegramAgent.sockets || {}).reduce((acc, arr) => acc + (arr ? arr.length : 0), 0);
  const freeSockets = Object.values(telegramAgent.freeSockets || {}).reduce((acc, arr) => acc + (arr ? arr.length : 0), 0);
  console.log(`  Agent pool state -> active sockets: ${activeSockets}, free (keep-alive) sockets: ${freeSockets}`);
  record(
    'Agent Pool Configuration & Liveness',
    telegramAgent.options.keepAlive === true && telegramAgent.options.family === 4,
    `keepAlive: ${telegramAgent.options.keepAlive}, family: ${telegramAgent.options.family}, maxSockets: ${telegramAgent.options.maxSockets}, freeSockets: ${freeSockets}`
  );
}

// =========================================================================
// SUITE 2: Adversarial Payloads, Malformed JSON & Unknown Commands on Webhook
// =========================================================================
async function testWebhookAdversarial() {
  console.log('\n=================================================================');
  console.log('🛡️ SUITE 2: Adversarial Payloads & Webhook Stress Testing');
  console.log('=================================================================');

  async function sendToWebhook(rawBody, headers = {}) {
    const defaultHeaders = {
      'Content-Type': 'application/json',
      'x-telegram-bot-api-secret-token': SECRET_TOKEN,
      ...headers,
    };
    if (headers['x-telegram-bot-api-secret-token'] === null) {
      delete defaultHeaders['x-telegram-bot-api-secret-token'];
    }

    const t0 = performance.now();
    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: defaultHeaders,
        body: typeof rawBody === 'string' ? rawBody : JSON.stringify(rawBody),
      });
      const duration = performance.now() - t0;
      let json = null;
      try {
        json = await response.json();
      } catch {}
      return { ok: response.ok, status: response.status, json, duration };
    } catch (fetchErr) {
      return { ok: false, status: 0, error: fetchErr.message };
    }
  }

  // 2.1: Authentication / Secret Token Validation
  console.log('\n[2.1] Secret Token Authorization Security...');
  const resNoSecret = await sendToWebhook({ update_id: 1 }, { 'x-telegram-bot-api-secret-token': null });
  record('Missing Secret Token -> HTTP 401', resNoSecret.status === 401, `HTTP ${resNoSecret.status}`);

  const resWrongSecret = await sendToWebhook({ update_id: 1 }, { 'x-telegram-bot-api-secret-token': 'wrong_secret_123' });
  record('Invalid Secret Token -> HTTP 401', resWrongSecret.status === 401, `HTTP ${resWrongSecret.status}`);

  // 2.2: Malformed JSON Syntax
  console.log('\n[2.2] Malformed JSON & Non-JSON Bodies...');
  const malformedJsonBodies = [
    { label: 'Broken JSON syntax', body: '{"update_id": 123, "message": {"text": "unclosed' },
    { label: 'Empty body string', body: '' },
    { label: 'Single primitive number', body: '12345' },
    { label: 'Primitive string without object', body: '"just a string"' },
    { label: 'Null JSON value', body: 'null' },
    { label: 'Empty JSON array', body: '[]' },
  ];

  for (const tc of malformedJsonBodies) {
    const res = await sendToWebhook(tc.body);
    // Server must respond with a valid HTTP status (400, 500, or 200) without crashing the process
    const serverSurvived = res.status > 0;
    record(`Malformed Payload Handled: ${tc.label}`, serverSurvived, `HTTP ${res.status}`);
  }

  // 2.3: Incomplete / Missing Update Structures
  console.log('\n[2.3] Truncated / Missing Update Fields...');
  const missingFieldCases = [
    { label: 'Empty Object {}', body: {} },
    { label: 'Update with only update_id', body: { update_id: 99999 } },
    { label: 'Message without from or chat', body: { update_id: 99999, message: {} } },
    { label: 'Message with chat but no from', body: { update_id: 99999, message: { chat: { id: ALLOWED_USER_ID } } } },
    { label: 'Empty callback_query', body: { update_id: 99999, callback_query: {} } },
    { label: 'Callback without data or id', body: { update_id: 99999, callback_query: { from: { id: ALLOWED_USER_ID }, message: { chat: { id: ALLOWED_USER_ID } } } } },
  ];

  for (const tc of missingFieldCases) {
    const res = await sendToWebhook(tc.body);
    record(`Missing Fields: ${tc.label}`, res.status === 200 && res.json?.ok === true, `HTTP ${res.status}, json: ${JSON.stringify(res.json)}`);
  }

  // 2.4: Unauthorized Sender Whitelist Enforcement
  console.log('\n[2.4] Sender Whitelist Enforcement...');
  const resUnauthorizedSender = await sendToWebhook({
    update_id: 8888,
    message: {
      from: { id: 999999999, first_name: 'Attacker' },
      chat: { id: 999999999 },
      text: '/start',
    },
  });
  record(
    'Unauthorized Sender Blocked',
    resUnauthorizedSender.status === 200 && resUnauthorizedSender.json?.unauthorized === true,
    `HTTP ${resUnauthorizedSender.status}, unauthorized: ${resUnauthorizedSender.json?.unauthorized}`
  );

  // 2.5: Unknown Commands & Extreme Text Inputs
  console.log('\n[2.5] Unknown Commands & Extreme Text Inputs...');
  const edgeTextCases = [
    { label: 'Unknown command /hack_fai_server', text: '/hack_fai_server' },
    { label: 'Gibberish /xyz123', text: '/xyz123' },
    { label: 'Emoji payload', text: '🔥🔥🔥🚀🚀🚀🎉🎉🎉🇻🇳🇻🇳' },
    { label: 'SQL Injection probe', text: "'; DROP TABLE posts; --" },
    { label: 'XSS HTML probe', text: '<script>alert("xss")</script><img src=x onerror=alert(1)>' },
    { label: 'Large 50KB string', text: 'A'.repeat(50000) },
  ];

  for (const tc of edgeTextCases) {
    const res = await sendToWebhook({
      update_id: 7777,
      message: {
        from: { id: ALLOWED_USER_ID, first_name: 'Admin' },
        chat: { id: ALLOWED_USER_ID },
        text: tc.text,
      },
    });
    record(`Edge Input: ${tc.label}`, res.status === 200 && res.json?.ok === true, `HTTP ${res.status}`);
  }

  // 2.6: Adversarial / Unhandled Callback Data
  console.log('\n[2.6] Adversarial Callback Queries...');
  const callbackCases = [
    { label: 'Unknown callback data', data: 'unknown_random_action_999' },
    { label: 'Non-existent category ID', data: 'cat_non_existent_category_id_12345' },
    { label: 'Option selection with NO active session', data: 'opt_1' },
    { label: 'Option 2 with NO active session', data: 'opt_2' },
    { label: 'Cancel callback', data: 'cancel' },
  ];

  for (const tc of callbackCases) {
    const res = await sendToWebhook({
      update_id: 6666,
      callback_query: {
        id: `adversarial_cb_${Date.now()}_${Math.random()}`,
        from: { id: ALLOWED_USER_ID, first_name: 'Admin' },
        message: { chat: { id: ALLOWED_USER_ID } },
        data: tc.data,
      },
    });
    record(`Callback Query: ${tc.label}`, res.status === 200 && res.json?.ok === true, `HTTP ${res.status}`);
  }

  // 2.7: Malformed Photo Payloads
  console.log('\n[2.7] Malformed Photo Payloads...');
  const photoCases = [
    { label: 'Empty photo array []', photo: [] },
    { label: 'Photo array with empty object [{}]', photo: [{}] },
    { label: 'Photo array with null entry', photo: [null] },
  ];

  for (const tc of photoCases) {
    const res = await sendToWebhook({
      update_id: 5555,
      message: {
        from: { id: ALLOWED_USER_ID, first_name: 'Admin' },
        chat: { id: ALLOWED_USER_ID },
        photo: tc.photo,
      },
    });
    // Server must respond and not crash
    record(`Photo Payload Handled: ${tc.label}`, res.status > 0, `HTTP ${res.status}`);
  }

  // 2.8: Overall Server Health Check
  console.log('\n[2.8] Post-Attack Server Health Verification...');
  const healthCheck = await fetch('http://localhost:3000/');
  record('Server Survived All Adversarial Attacks', healthCheck.status === 200, `HTTP ${healthCheck.status}`);
}

// =========================================================================
// SUITE 3: Process Signal Handling in scripts/telegram-polling-bridge.mjs
// =========================================================================
async function testProcessSignals() {
  console.log('\n=================================================================');
  console.log('🛑 SUITE 3: Process Signal Handling & Lifecycle Verification');
  console.log('=================================================================');

  const bridgeScript = path.join(projectRoot, 'scripts', 'telegram-polling-bridge.mjs');

  // Test 3.1: Verify --once flag runs and exits with code 0 cleanly
  console.log('\n[3.1] Testing bridge with --once flag...');
  const runOnce = () =>
    new Promise((resolve) => {
      const proc = spawn('node', [bridgeScript, '--once'], {
        cwd: projectRoot,
        env: { ...process.env },
      });

      let stdout = '';
      let stderr = '';

      proc.stdout.on('data', (d) => (stdout += d.toString()));
      proc.stderr.on('data', (d) => (stderr += d.toString()));

      proc.on('close', (code, signal) => {
        resolve({ code, signal, stdout, stderr });
      });
    });

  const onceRes = await runOnce();
  const oncePass = onceRes.code === 0 && onceRes.stdout.includes('Single-poll verification complete');
  record('--once Flag Clean Exit', oncePass, `Exit code: ${onceRes.code}, verified: ${onceRes.stdout.includes('Single-poll verification complete')}`);

  // Test 3.2: Verify SIGINT signal handling
  console.log('\n[3.2] Testing SIGINT Graceful Shutdown...');
  const runSignalTest = (signalName) =>
    new Promise((resolve) => {
      const proc = spawn('node', [bridgeScript], {
        cwd: projectRoot,
        env: { ...process.env },
      });

      let stdout = '';
      let stderr = '';
      let signalSent = false;

      proc.stdout.on('data', (d) => {
        const str = d.toString();
        stdout += str;

        // When polling loop has started, send signal
        if (!signalSent && str.includes('Starting update loop')) {
          signalSent = true;
          setTimeout(() => {
            proc.kill(signalName);
          }, 300);
        }
      });

      proc.stderr.on('data', (d) => (stderr += d.toString()));

      const timeoutTimer = setTimeout(() => {
        if (!proc.killed) {
          proc.kill('SIGKILL');
          resolve({ code: -1, timeout: true, stdout, stderr });
        }
      }, 30000);

      proc.on('close', (code, signal) => {
        clearTimeout(timeoutTimer);
        resolve({ code, signal, stdout, stderr, timeout: false });
      });
    });

  const sigintRes = await runSignalTest('SIGINT');
  const sigintPass =
    sigintRes.code === 0 &&
    sigintRes.stdout.includes('Received termination signal. Shutting down cleanly...');
  record(
    'SIGINT Signal Handling',
    sigintPass,
    `Exit code: ${sigintRes.code}, caught clean shutdown: ${sigintRes.stdout.includes('Shutting down cleanly')}`
  );

  // Test 3.3: Verify SIGTERM signal handling
  console.log('\n[3.3] Testing SIGTERM Graceful Shutdown...');
  const sigtermRes = await runSignalTest('SIGTERM');
  const sigtermPass =
    sigtermRes.code === 0 &&
    sigtermRes.stdout.includes('Received termination signal. Shutting down cleanly...');
  record(
    'SIGTERM Signal Handling',
    sigtermPass,
    `Exit code: ${sigtermRes.code}, caught clean shutdown: ${sigtermRes.stdout.includes('Shutting down cleanly')}`
  );
}

// =========================================================================
// Main Runner
// =========================================================================
async function main() {
  const tStart = performance.now();
  console.log('=================================================================');
  console.log('🚀 STARTING EMPIRICAL CHALLENGER VERIFICATION (MILESTONE 1)');
  console.log(`⏰ Time: ${new Date().toISOString()}`);
  console.log('=================================================================');

  try {
    await testConcurrency();
    await testWebhookAdversarial();
    await testProcessSignals();
  } catch (err) {
    console.error('💥 Fatal error during verification run:', err);
    record('Suite Fatal Exception', false, err.message);
  }

  const duration = ((performance.now() - tStart) / 1000).toFixed(2);
  console.log('\n=================================================================');
  console.log('📊 EMPIRICAL VERIFICATION SUMMARY');
  console.log('=================================================================');
  console.log(`Total Duration: ${duration}s`);
  console.log(`Passed Checks:  ${results.passed}`);
  console.log(`Failed Checks:  ${results.failed}`);
  console.log(`Verdict:        ${results.failed === 0 ? 'APPROVE' : 'REJECT'}`);
  console.log('=================================================================\n');

  if (results.failed > 0) {
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
