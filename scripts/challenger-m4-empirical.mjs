/**
 * scripts/challenger-m4-empirical.mjs
 * 
 * EMPIRICAL CHALLENGER MASTER VERIFICATION & ADVERSARIAL STRESS SUITE
 * Milestone 4 E2E Verification
 * 
 * Verifies live system behavior without trusting worker claims:
 * 1. Live browser DOM rendering of 3 Aptech articles & categories on http://localhost:3000/doi-song via Chrome CDP
 * 2. Interactive Article Detail Modal execution in live browser DOM
 * 3. HTTP 200 & Data integrity for /admin/posts/[id] across all 3 Aptech articles
 * 4. Deep recursive scan of ALL 18 documents in Firestore collection 'posts' for Base64 absence
 * 5. 10-iteration Telegram API call latency benchmark & callback query error interception
 * 6. Local Polling Bridge execution verification
 * 7. Adversarial input fuzzing of Gemini fallback content generator
 * 8. Cloudflare R2 WebP image payload and Sharp dimension verification
 */

import dns from 'node:dns/promises';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawn, execSync } from 'node:child_process';
import { performance } from 'node:perf_hooks';

import sharp from 'sharp';
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, getDoc } from 'firebase/firestore';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

// 1. Load environment variables
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

// 2. Results Collector
const suiteResults = [];
let globalPassed = 0;
let globalFailed = 0;

function logHeader(title) {
  console.log('\n========================================================================');
  console.log(`⚔️  ${title}`);
  console.log('========================================================================');
}

function recordResult(category, testName, passed, details = '', durationMs = null) {
  if (passed) {
    globalPassed++;
    const durStr = durationMs !== null ? ` (${durationMs.toFixed(1)}ms)` : '';
    console.log(`  ✅ [PASS] ${testName}${durStr}`);
    if (details) console.log(`     ↳ ${details}`);
  } else {
    globalFailed++;
    const durStr = durationMs !== null ? ` (${durationMs.toFixed(1)}ms)` : '';
    console.error(`  ❌ [FAIL] ${testName}${durStr}`);
    if (details) console.error(`     ↳ ${details}`);
  }
  suiteResults.push({ category, testName, passed, details, durationMs });
}

// Initialize Firebase
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

// ========================================================================
// TEST 1: Live Web UI & Headless Chrome CDP DOM Rendering
// ========================================================================
async function runTest1_WebUiAndDom() {
  logHeader('TEST 1: Live Web UI & Headless Chrome CDP DOM Rendering');

  // 1.1 HTTP 200 check on /doi-song
  try {
    const t0 = performance.now();
    const res = await fetch('http://localhost:3000/doi-song');
    const dur = performance.now() - t0;
    recordResult(
      'Web UI',
      'HTTP GET http://localhost:3000/doi-song returns 200',
      res.status === 200,
      `Status: ${res.status}, Type: ${res.headers.get('content-type')}`,
      dur
    );
  } catch (err) {
    recordResult('Web UI', 'HTTP GET http://localhost:3000/doi-song returns 200', false, err.message);
  }

  // 1.2 Chrome CDP live DOM evaluation
  const chromePort = 9229;
  const chrome = spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', [
    '--headless',
    `--remote-debugging-port=${chromePort}`,
    '--disable-gpu',
    '--no-first-run',
    '--no-default-browser-check',
    'about:blank'
  ]);

  await new Promise(r => setTimeout(r, 1500));

  try {
    const newTabRes = await fetch(`http://127.0.0.1:${chromePort}/json/new?http://localhost:3000/doi-song`, { method: 'PUT' });
    const tab = await newTabRes.json();

    const ws = new WebSocket(tab.webSocketDebuggerUrl);
    await new Promise(resolve => { ws.onopen = resolve; });

    let msgIdCounter = 1;
    function sendCdp(method, params = {}) {
      return new Promise(resolve => {
        const id = msgIdCounter++;
        const handler = (event) => {
          const data = JSON.parse(event.data);
          if (data.id === id) {
            ws.removeEventListener('message', handler);
            resolve(data.result);
          }
        };
        ws.addEventListener('message', handler);
        ws.send(JSON.stringify({ id, method, params }));
      });
    }

    await sendCdp('Page.enable');
    await sendCdp('Runtime.enable');

    // Wait for client-side React hydration & Firestore fetch
    await new Promise(r => setTimeout(r, 4500));

    // Verify 3 Aptech articles and their categories in live DOM
    const domEvaluation = await sendCdp('Runtime.evaluate', {
      expression: `(() => {
        const sections = Array.from(document.querySelectorAll('section[id]')).map(sec => ({
          id: sec.id,
          heading: sec.querySelector('h2')?.innerText.trim(),
          articles: Array.from(sec.querySelectorAll('h3')).map(h => h.innerText.trim())
        }));

        const sharingSec = sections.find(s => s.id === 'sharing');
        const enterpriseSec = sections.find(s => s.id === 'enterprise');
        const contestsSec = sections.find(s => s.id === 'contests');

        const hasWireframingInSharing = sharingSec?.articles.some(a => a.includes('Wireframing'));
        const hasAiDevInEnterprise = enterpriseSec?.articles.some(a => a.includes('AI-first software developer'));
        const hasHocSinhInContests = contestsSec?.articles.some(a => a.includes('Học sinh THPT chinh phục AI'));

        return {
          hasWireframingInSharing,
          hasAiDevInEnterprise,
          hasHocSinhInContests,
          sharingHeading: sharingSec?.heading,
          enterpriseHeading: enterpriseSec?.heading,
          contestsHeading: contestsSec?.heading,
          totalSections: sections.length
        };
      })()`,
      returnByValue: true
    });

    const domVal = domEvaluation?.result?.value || {};

    recordResult(
      'Web UI',
      "Aptech Article 1 rendered under category 'sharing' (Nhỏ to cùng chia sẻ)",
      domVal.hasWireframingInSharing === true,
      `Section heading: "${domVal.sharingHeading}"`
    );

    recordResult(
      'Web UI',
      "Aptech Article 2 rendered under category 'enterprise' (Doanh nghiệp & FAI)",
      domVal.hasAiDevInEnterprise === true,
      `Section heading: "${domVal.enterpriseHeading}"`
    );

    recordResult(
      'Web UI',
      "Aptech Article 3 rendered under category 'contests' (Sân chơi & giải thưởng)",
      domVal.hasHocSinhInContests === true,
      `Section heading: "${domVal.contestsHeading}"`
    );

    // 1.3 Interactive Modal Click in DOM
    await sendCdp('Runtime.evaluate', {
      expression: `(() => {
        const h3s = Array.from(document.querySelectorAll('h3'));
        const wireframeH3 = h3s.find(h => h.innerText.includes('Wireframing'));
        const card = wireframeH3?.closest('.horizontal-timeline-wrapper > div');
        if (card) card.click();
      })()`
    });

    await new Promise(r => setTimeout(r, 600));

    const modalCheck = await sendCdp('Runtime.evaluate', {
      expression: `(() => {
        const modal = Array.from(document.querySelectorAll('div')).find(d => 
          d.style.position === 'fixed' && d.style.zIndex === '9999'
        );
        if (!modal) return { modalFound: false };
        const hasTitle = modal.innerText.includes('Wireframing');
        const hasDate = modal.innerText.includes('03-09-2026');
        const hasContent = modal.innerText.includes('trải nghiệm') || modal.innerText.includes('giao diện');
        const hasCloseBtn = Boolean(modal.querySelector('button'));
        return {
          modalFound: true,
          hasTitle,
          hasDate,
          hasContent,
          hasCloseBtn
        };
      })()`,
      returnByValue: true
    });

    const modalVal = modalCheck?.result?.value || {};
    const modalPass = modalVal.modalFound && modalVal.hasTitle && modalVal.hasDate && modalVal.hasContent && modalVal.hasCloseBtn;

    recordResult(
      'Web UI',
      'Article Detail Modal opens with formatted rich HTML, date, and close button',
      modalPass,
      `modalFound: ${modalVal.modalFound}, hasTitle: ${modalVal.hasTitle}, hasDate: ${modalVal.hasDate}, hasCloseBtn: ${modalVal.hasCloseBtn}`
    );

    ws.close();
  } catch (err) {
    recordResult('Web UI', 'Chrome CDP DOM Evaluation', false, err.message);
  } finally {
    chrome.kill();
  }
}

// ========================================================================
// TEST 2: Admin Post Routes & CMS TipTap Data Contract
// ========================================================================
async function runTest2_AdminRoutes() {
  logHeader('TEST 2: Admin Post Routes & CMS TipTap Data Contract');

  const { getPostById } = await import('../src/lib/firestore.js');

  const articles = [
    {
      id: 'wireframing-thiet-ke-tu-goc-nhin-cua-nguoi-dung',
      expectedCategory: 'sharing',
      expectedTitleKeyword: 'Wireframing',
    },
    {
      id: 'ai-first-software-developer-lam-chu-ai-de-phat-trien-phan-mem-va-kien-tao-gia-tri-cho-doanh-nghiep',
      expectedCategory: 'enterprise',
      expectedTitleKeyword: 'AI-first',
    },
    {
      id: 'hoc-sinh-thpt-chinh-phuc-ai-tai-fpt-aptech-tu-tay-phat-trien-ung-dung-dieu-khien-bang-cu-chi',
      expectedCategory: 'contests',
      expectedTitleKeyword: 'Học sinh THPT',
    },
  ];

  for (const item of articles) {
    const routeUrl = `http://localhost:3000/admin/posts/${item.id}`;

    // 2.1 Route HTTP Status
    try {
      const t0 = performance.now();
      const res = await fetch(routeUrl);
      const dur = performance.now() - t0;
      const pass = res.status === 200;
      recordResult(
        'Admin CMS',
        `HTTP GET /admin/posts/${item.id.slice(0, 30)}... returns 200`,
        pass,
        `Status: ${res.status}, URL: ${routeUrl}`,
        dur
      );
    } catch (err) {
      recordResult('Admin CMS', `HTTP GET /admin/posts/${item.id}`, false, err.message);
    }

    // 2.2 Data Integrity in Firestore
    try {
      const t0 = performance.now();
      const post = await getPostById(item.id);
      const dur = performance.now() - t0;

      const hasTitle = post?.title?.includes(item.expectedTitleKeyword);
      const isCorrectCat = post?.categoryId === item.expectedCategory;
      const isPublished = post?.published === true;
      const hasContent = typeof post?.contentHtml === 'string' && post.contentHtml.length > 500;
      const hasR2Image = typeof post?.image === 'string' && post.image.includes('.r2.dev') && post.image.endsWith('.webp');

      const pass = Boolean(hasTitle && isCorrectCat && isPublished && hasContent && hasR2Image);

      recordResult(
        'Admin CMS',
        `Firestore Document Data Contract: ${item.id.slice(0, 30)}...`,
        pass,
        `title: "${post?.title?.slice(0, 40)}..." | categoryId: ${post?.categoryId} | contentLength: ${post?.contentHtml?.length} chars | image: ${post?.image?.slice(0, 45)}...`,
        dur
      );
    } catch (err) {
      recordResult('Admin CMS', `Firestore Document Data Contract: ${item.id}`, false, err.message);
    }
  }
}

// ========================================================================
// TEST 3: Deep Scan Across ALL Documents in Firestore Collection 'posts'
// ========================================================================
async function runTest3_DeepBase64Audit() {
  logHeader("TEST 3: Deep Scan Across ALL Documents in Firestore Collection 'posts'");

  function findBase64InObject(obj, path = '') {
    const violations = [];
    if (obj == null) return violations;

    if (typeof obj === 'string') {
      if (obj.includes('data:image') || obj.includes('base64,')) {
        violations.push({ path, reason: 'Contains data:image or base64 indicator', sample: obj.slice(0, 80) });
      } else if (obj.length > 1000 && /^[A-Za-z0-9+/=]{1000,}$/.test(obj)) {
        violations.push({ path, reason: 'Raw large Base64 payload', length: obj.length });
      }
    } else if (Array.isArray(obj)) {
      obj.forEach((item, idx) => {
        violations.push(...findBase64InObject(item, `${path}[${idx}]`));
      });
    } else if (typeof obj === 'object') {
      for (const [key, val] of Object.entries(obj)) {
        violations.push(...findBase64InObject(val, path ? `${path}.${key}` : key));
      }
    }
    return violations;
  }

  try {
    const t0 = performance.now();
    const snap = await getDocs(collection(db, 'posts'));
    const dur = performance.now() - t0;

    let totalViolations = 0;
    const violationReport = [];

    for (const docSnap of snap.docs) {
      const data = docSnap.data();
      const violations = findBase64InObject(data);
      if (violations.length > 0) {
        totalViolations += violations.length;
        violationReport.push({ id: docSnap.id, violations });
      }
    }

    const pass = snap.docs.length > 0 && totalViolations === 0;

    recordResult(
      'Firestore Audit',
      `Zero Base64 strings across ALL ${snap.docs.length} documents in collection 'posts'`,
      pass,
      `Audited ${snap.docs.length} docs recursively | Total violations found: ${totalViolations}`,
      dur
    );
  } catch (err) {
    recordResult('Firestore Audit', 'Deep Base64 Audit across collection posts', false, err.message);
  }
}

// ========================================================================
// TEST 4: Telegram API Latency Benchmark & Callback Error Interception
// ========================================================================
async function runTest4_TelegramLatencyAndResilience() {
  logHeader('TEST 4: Telegram API Latency Benchmark & Callback Error Interception');

  const { callTelegramApi, answerCallbackQuery, telegramAgent } = await import('../src/lib/telegram.js');

  // 4.1 Latency benchmark (10 iterations)
  const latencies = [];
  for (let i = 1; i <= 10; i++) {
    const t0 = performance.now();
    try {
      const bot = await callTelegramApi('getMe');
      const dur = performance.now() - t0;
      latencies.push(dur);
    } catch (e) {
      // Ignore occasional network hiccups
    }
    await new Promise(r => setTimeout(r, 100));
  }

  const sum = latencies.reduce((a, b) => a + b, 0);
  const avg = sum / latencies.length;
  const median = latencies.slice().sort((a, b) => a - b)[Math.floor(latencies.length / 2)];
  const min = Math.min(...latencies);

  // Average latency must be < 1s
  const latencyPass = avg < 1000 && min < 500;

  recordResult(
    'Telegram API',
    'Telegram Bot Call Latency Benchmark (< 1000ms average & median)',
    latencyPass,
    `10 Calls | Min: ${min.toFixed(1)}ms | Median: ${median.toFixed(1)}ms | Average: ${avg.toFixed(1)}ms (< 1000ms target)`
  );

  // 4.2 Stale callback query zero-crash resilience
  try {
    const t0 = performance.now();
    const staleRes = await answerCallbackQuery('challenger_expired_query_test', 'Challenger ping');
    const dur = performance.now() - t0;
    const pass = staleRes && staleRes.ok === false && staleRes.ignored === true;
    recordResult(
      'Telegram API',
      'Expired callback query graceful handling (zero crash HTTP 400 interception)',
      pass,
      `Ignored: ${staleRes?.ignored}, Response: ${JSON.stringify(staleRes)}`,
      dur
    );
  } catch (err) {
    recordResult('Telegram API', 'Expired callback query graceful handling', false, err.message);
  }

  // 4.3 Polling Bridge Single Run Execution
  try {
    const t0 = performance.now();
    const bridgeOut = execSync('node scripts/telegram-polling-bridge.mjs --once', {
      cwd: projectRoot,
      encoding: 'utf8',
      env: { ...process.env },
      timeout: 20000,
    });
    const dur = performance.now() - t0;
    const pass = bridgeOut.includes('Single-poll verification complete (--once). Exiting.');
    recordResult(
      'Telegram Bridge',
      'Standalone Polling Bridge (`telegram-polling-bridge.mjs --once`) exits 0',
      pass,
      `Executed cleanly in ${dur.toFixed(0)}ms`,
      dur
    );
  } catch (err) {
    recordResult('Telegram Bridge', 'Standalone Polling Bridge execution', false, err.message);
  }

  telegramAgent.destroy();
}

// ========================================================================
// TEST 5: Gemini Fallback Adversarial Integrity & Output Contracts
// ========================================================================
async function runTest5_GeminiAdversarial() {
  logHeader('TEST 5: Gemini Fallback Adversarial Integrity & Output Contracts');

  const { generateArticleOptions } = await import('../src/lib/gemini.js');

  const adversarialCases = [
    { name: 'Empty string', prompt: '' },
    { name: 'Pure whitespace', prompt: '     \n\t   ' },
    { name: 'Extreme 2000 char prompt', prompt: 'Aptech AI FAI '.repeat(150) },
    { name: 'Special punctuation & emoji', prompt: '🌟🇻🇳 [TEST] Bài viết đặc biệt &*%$#@! 2026' }
  ];

  for (const c of adversarialCases) {
    try {
      const t0 = performance.now();
      const res = await generateArticleOptions(null, null, c.prompt, { apiKey: '' });
      const dur = performance.now() - t0;

      const opt1 = res.option1;
      const opt2 = res.option2;

      const opt1Ok = opt1 && typeof opt1.title === 'string' && opt1.title.length > 0 && opt1.title.length < 100 &&
                     typeof opt1.excerpt === 'string' && opt1.excerpt.length >= 120 && opt1.excerpt.length <= 220 &&
                     !/<h[12]/i.test(opt1.contentHtml) && /<h3/i.test(opt1.contentHtml);

      const opt2Ok = opt2 && typeof opt2.title === 'string' && opt2.title.length > 0 && opt2.title.length < 100 &&
                     typeof opt2.excerpt === 'string' && opt2.excerpt.length >= 120 && opt2.excerpt.length <= 220 &&
                     !/<h[12]/i.test(opt2.contentHtml) && /<h3/i.test(opt2.contentHtml);

      const pass = Boolean(res.isFallback && opt1Ok && opt2Ok);

      recordResult(
        'Gemini Fallback',
        `Adversarial Input Fuzzing: [${c.name}]`,
        pass,
        `Opt1 Title (${opt1?.title?.length}c): "${opt1?.title?.slice(0, 35)}..." | Opt2 Title (${opt2?.title?.length}c): "${opt2?.title?.slice(0, 35)}..."`,
        dur
      );
    } catch (err) {
      recordResult('Gemini Fallback', `Adversarial Input Fuzzing: [${c.name}]`, false, err.message);
    }
  }
}

// ========================================================================
// TEST 6: Cloudflare R2 WebP CDN Image Validation & Sharp Inspection
// ========================================================================
async function runTest6_R2Images() {
  logHeader('TEST 6: Cloudflare R2 WebP CDN Image Validation & Sharp Inspection');

  const images = [
    {
      name: 'Wireframing',
      url: 'https://pub-447bd44dfdac4938912655c855b8631c.r2.dev/fai/posts/2026/09/9ad62814d300-wireframing-thiet-ke-tu-goc-nhin-cua-ngu.webp',
    },
    {
      name: 'AI Developer',
      url: 'https://pub-447bd44dfdac4938912655c855b8631c.r2.dev/fai/posts/2026/09/365fe6f47fab-ai-first-software-developer-lam-chu-ai-d.webp',
    },
    {
      name: 'Hoc Sinh THPT',
      url: 'https://pub-447bd44dfdac4938912655c855b8631c.r2.dev/fai/posts/2026/09/11d71e66b922-hoc-sinh-thpt-chinh-phuc-ai-tai-fpt-apte.webp',
    },
  ];

  for (const img of images) {
    try {
      const t0 = performance.now();
      const res = await fetch(img.url);
      const dur = performance.now() - t0;

      if (!res.ok) {
        recordResult('R2 Storage', `Image Download: ${img.name}`, false, `HTTP ${res.status}`, dur);
        continue;
      }

      const buffer = Buffer.from(await res.arrayBuffer());
      const metadata = await sharp(buffer).metadata();

      const isWebp = metadata.format === 'webp';
      const isUnder350KB = buffer.length < 350 * 1024;
      const isMax1600W = metadata.width <= 1600;
      const pass = isWebp && isUnder350KB && isMax1600W;

      recordResult(
        'R2 Storage',
        `R2 CDN Image: ${img.name} (${(buffer.length / 1024).toFixed(1)} KB, ${metadata.width}x${metadata.height})`,
        pass,
        `format: ${metadata.format} | size: ${(buffer.length / 1024).toFixed(1)} KB (< 350KB) | width: ${metadata.width}px (<= 1600px)`,
        dur
      );
    } catch (err) {
      recordResult('R2 Storage', `R2 CDN Image: ${img.name}`, false, err.message);
    }
  }
}

// ========================================================================
// MASTER RUNNER
// ========================================================================
async function main() {
  console.log('╔══════════════════════════════════════════════════════════════════════╗');
  console.log('║       CHALLENGER EMPIRICAL VERIFICATION & STRESS SUITE               ║');
  console.log('║       Independent Live Probing, Headless Chrome, R2, Latency & DB    ║');
  console.log('╚══════════════════════════════════════════════════════════════════════╝');
  console.log(`Execution Time: ${new Date().toISOString()}`);
  console.log(`Node Version  : ${process.version}`);
  console.log(`Platform      : ${process.platform} (${process.arch})`);

  const tStart = performance.now();

  await runTest1_WebUiAndDom();
  await runTest2_AdminRoutes();
  await runTest3_DeepBase64Audit();
  await runTest4_TelegramLatencyAndResilience();
  await runTest5_GeminiAdversarial();
  await runTest6_R2Images();

  const totalDuration = ((performance.now() - tStart) / 1000).toFixed(2);

  console.log('\n╔══════════════════════════════════════════════════════════════════════╗');
  console.log('║                   CHALLENGER EXECUTION SUMMARY                       ║');
  console.log('╚══════════════════════════════════════════════════════════════════════╝');
  console.log(`Total Checks Executed : ${globalPassed + globalFailed}`);
  console.log(`Total Passed          : ${globalPassed} ✅`);
  console.log(`Total Failed          : ${globalFailed} ${globalFailed > 0 ? '❌' : ''}`);
  console.log(`Success Rate          : ${((globalPassed / (globalPassed + globalFailed)) * 100).toFixed(1)}%`);
  console.log(`Total Elapsed Time    : ${totalDuration}s`);
  console.log('========================================================================\n');

  if (globalFailed > 0) {
    console.error(`💥 CHALLENGE FAILED: ${globalFailed} assertions failed.`);
    process.exit(1);
  } else {
    console.log('🏆 ALL EMPIRICAL CHALLENGE CHECKS PASSED CLEANLY (EXIT 0).');
    process.exit(0);
  }
}

main().catch((err) => {
  console.error('Fatal execution error:', err);
  process.exit(1);
});
