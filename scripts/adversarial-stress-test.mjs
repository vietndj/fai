/**
 * scripts/adversarial-stress-test.mjs
 * 
 * Adversarial Stress Harness for FAI Web:
 * 1. Webhook Security & Perimeter Probing (No secret header, forged secret, malformed JSON, unauthorized sender)
 * 2. Fallback Pipeline Stress (Empty input, whitespace, 10k chars, XSS payloads, emoji storm, regex special chars)
 * 3. Image Processor Boundary Stress (Micro-image 40x20px below watermark threshold, extreme aspect ratio 10x1200px)
 * 4. Client-side Data Retrieval & SSR Route Verification for /doi-song
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

// Load .env.local
const envPath = path.join(projectRoot, '.env.local');
if (fs.existsSync(envPath)) {
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
      if (!process.env[key]) {
        process.env[key] = val;
      }
    }
  }
}

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    passed++;
    console.log(`  ✅ [PASS] ${message}`);
  } else {
    failed++;
    console.error(`  ❌ [FAIL] ${message}`);
  }
}

async function runAdversarialSuite() {
  console.log('╔══════════════════════════════════════════════════════════════════════╗');
  console.log('║        ADVERSARIAL STRESS & SECURITY HARNESS — FAI WEB               ║');
  console.log('╚══════════════════════════════════════════════════════════════════════╝\n');

  // =========================================================================
  // 1. Webhook Security & Perimeter Probing
  // =========================================================================
  console.log('--- 1. WEBHOOK SECURITY & AUTH PROBING ---');
  const webhookUrl = 'http://localhost:3000/api/telegram/webhook';
  const validSecret = process.env.TELEGRAM_WEBHOOK_SECRET || 'test-secret';

  // 1.1 Request with NO secret header
  try {
    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: { text: '/start' } }),
    });
    assert(res.status === 401, `No secret header rejected with 401 Unauthorized (got ${res.status})`);
  } catch (err) {
    assert(false, `No secret header test failed: ${err.message}`);
  }

  // 1.2 Request with WRONG secret header
  try {
    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Telegram-Bot-Api-Secret-Token': 'attacker-forged-token-123',
      },
      body: JSON.stringify({ message: { text: '/start' } }),
    });
    assert(res.status === 401, `Forged secret token rejected with 401 Unauthorized (got ${res.status})`);
  } catch (err) {
    assert(false, `Forged secret token test failed: ${err.message}`);
  }

  // 1.3 Request with MALFORMED JSON
  try {
    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Telegram-Bot-Api-Secret-Token': validSecret,
      },
      body: '{{malformed json payload###',
    });
    assert(res.status === 400, `Malformed JSON payload rejected with 400 Bad Request (got ${res.status})`);
  } catch (err) {
    assert(false, `Malformed JSON test failed: ${err.message}`);
  }

  // 1.4 Request with UNREGISTERED / ATTACKER TELEGRAM USER ID
  try {
    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Telegram-Bot-Api-Secret-Token': validSecret,
      },
      body: JSON.stringify({
        message: {
          from: { id: 9999999999, username: 'evil_intruder' },
          chat: { id: 9999999999 },
          text: '/dangbai',
        },
      }),
    });
    const json = await res.json();
    assert(json.unauthorized === true, `Unauthorized sender blocked: ${JSON.stringify(json)}`);
  } catch (err) {
    assert(false, `Unauthorized sender test failed: ${err.message}`);
  }

  // =========================================================================
  // 2. Content Fallback Pipeline Stress Testing
  // =========================================================================
  console.log('\n--- 2. CONTENT FALLBACK STRESS & BOUNDARY TESTING ---');
  const { generateFallbackArticleOptions } = await import('../src/lib/contentFallback.js');

  const adversarialCases = [
    { name: 'Empty string', input: '' },
    { name: 'Pure whitespace & newlines', input: '   \n\n\t  \r\n   ' },
    { name: 'Massive 10,000-char string', input: 'Trí tuệ nhân tạo '.repeat(600) },
    { name: 'XSS & HTML Injection payload', input: '<script>alert("xss")</script><iframe src="evil.com"></iframe>' },
    { name: 'Emoji storm & non-Latin symbols', input: '🚀🤖🔥⚡️🎉💥✨🦾 ٩(◕‿◕｡)۶ (╯°□°)╯︵ ┻━┻' },
    { name: 'Special regex characters', input: '.*+?^${}()|[]\\\\\\\\\\\\\\\\(?' },
  ];

  for (const tc of adversarialCases) {
    try {
      const result = generateFallbackArticleOptions(tc.input);
      const opt1 = result.option1;
      const opt2 = result.option2;

      const opt1TitleValid = opt1.title.length > 0 && opt1.title.length < 100;
      const opt2TitleValid = opt2.title.length > 0 && opt2.title.length < 100;
      const opt1ExcerptValid = opt1.excerpt.length >= 120 && opt1.excerpt.length <= 220;
      const opt2ExcerptValid = opt2.excerpt.length >= 120 && opt2.excerpt.length <= 220;
      const noH1H2 = !/<h[12][^>]*>/i.test(opt1.contentHtml) && !/<h[12][^>]*>/i.test(opt2.contentHtml);
      const valid = opt1TitleValid && opt2TitleValid && opt1ExcerptValid && opt2ExcerptValid && noH1H2;

      assert(
        valid,
        `Adversarial Input [${tc.name}]: Titles < 100 (${opt1.title.length}, ${opt2.title.length}), Excerpts in [120,220] (${opt1.excerpt.length}, ${opt2.excerpt.length}), NO H1/H2: ${noH1H2}`
      );
    } catch (err) {
      assert(false, `Adversarial Input [${tc.name}] threw exception: ${err.message}`);
    }
  }

  // =========================================================================
  // 3. Image Processor Micro-Image & Boundary Stress
  // =========================================================================
  console.log('\n--- 3. IMAGE PROCESSOR BOUNDARY & EDGE TESTING ---');
  const { processImage } = await import('../src/lib/imageProcessor.js');

  // 3.1 Micro-image (40x20 pixels): Below MIN_WATERMARK_IMAGE_WIDTH (160)
  try {
    const microBuffer = await sharp({
      create: {
        width: 40,
        height: 20,
        channels: 3,
        background: { r: 255, g: 100, b: 50 },
      },
    })
      .png()
      .toBuffer();

    const result = await processImage(microBuffer, { watermark: true });
    assert(
      result.format === 'webp' && result.width === 40 && result.height === 20 && result.sizeBytes < 350 * 1024,
      `Micro-image (40x20px) handled gracefully without watermark overflow crash (Size: ${result.sizeBytes} bytes, Format: ${result.format})`
    );
  } catch (err) {
    assert(false, `Micro-image test failed: ${err.message}`);
  }

  // 3.2 Extreme Aspect Ratio (10x1200 pixels)
  try {
    const thinBuffer = await sharp({
      create: {
        width: 10,
        height: 1200,
        channels: 3,
        background: { r: 50, g: 150, b: 250 },
      },
    })
      .png()
      .toBuffer();

    const result = await processImage(thinBuffer, { watermark: true });
    assert(
      result.format === 'webp' && result.sizeBytes < 350 * 1024,
      `Extreme vertical banner (10x1200px) processed cleanly (Size: ${result.sizeBytes} bytes, Format: ${result.format})`
    );
  } catch (err) {
    assert(false, `Extreme aspect ratio test failed: ${err.message}`);
  }

  // =========================================================================
  // 4. Data Layer & Client Retrieval Contract on /doi-song
  // =========================================================================
  console.log('\n--- 4. CLIENT DATA LAYER & SSR ROUTE VERIFICATION ---');
  try {
    // 4.1 SSR response check
    const res = await fetch('http://localhost:3000/doi-song');
    const html = await res.text();
    assert(res.status === 200, `SSR Route /doi-song returns HTTP 200 (length: ${html.length})`);
    assert(html.includes('student-life-page-container'), 'SSR HTML contains client component container root');

    // 4.2 Client Data Layer Query Check: Validate that getCategories & getPosts loads the 3 Aptech articles
    const { getCategories, getPosts } = await import('../src/lib/firestore.js');
    const categories = await getCategories('doi-song');
    const categoryIds = categories.map((c) => c.id);

    assert(
      categoryIds.includes('sharing') && categoryIds.includes('enterprise') && categoryIds.includes('contests'),
      `Categories fetched for doi-song contains sharing, enterprise, contests (${categoryIds.join(', ')})`
    );

    const sharingPosts = await getPosts({ categoryId: 'sharing', published: true });
    const enterprisePosts = await getPosts({ categoryId: 'enterprise', published: true });
    const contestsPosts = await getPosts({ categoryId: 'contests', published: true });

    const wireframingPost = sharingPosts.find((p) => p.id === 'wireframing-thiet-ke-tu-goc-nhin-cua-nguoi-dung');
    const aiFirstPost = enterprisePosts.find(
      (p) => p.id === 'ai-first-software-developer-lam-chu-ai-de-phat-trien-phan-mem-va-kien-tao-gia-tri-cho-doanh-nghiep'
    );
    const thptPost = contestsPosts.find(
      (p) => p.id === 'hoc-sinh-thpt-chinh-phuc-ai-tai-fpt-aptech-tu-tay-phat-trien-ung-dung-dieu-khien-bang-cu-chi'
    );

    assert(Boolean(wireframingPost), 'Article 1 "Wireframing" retrieved from Firestore under category sharing');
    assert(Boolean(aiFirstPost), 'Article 2 "AI-first software developer" retrieved from Firestore under category enterprise');
    assert(Boolean(thptPost), 'Article 3 "Học sinh THPT chinh phục AI" retrieved from Firestore under category contests');

    assert(
      wireframingPost.image.includes('.r2.dev') &&
        aiFirstPost.image.includes('.r2.dev') &&
        thptPost.image.includes('.r2.dev'),
      'All 3 retrieved articles possess valid Cloudflare R2 CDN WebP image URLs'
    );
  } catch (err) {
    assert(false, `Data layer & SSR verification failed: ${err.message}`);
  }

  // =========================================================================
  // Summary
  // =========================================================================
  console.log('\n══════════════════════════════════════════════════════════════════════');
  console.log(`Adversarial Checks Total  : ${passed + failed}`);
  console.log(`Adversarial Checks Passed : ${passed} ✅`);
  console.log(`Adversarial Checks Failed : ${failed} ${failed === 0 ? '' : '❌'}`);
  console.log('══════════════════════════════════════════════════════════════════════\n');

  if (failed > 0) {
    process.exit(1);
  } else {
    process.exit(0);
  }
}

runAdversarialSuite();
