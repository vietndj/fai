/**
 * Empirical Verification Suite for Milestone 2:
 * Telegram Bot Webhook, Security & AI 2-Option Publishing Flow
 */

import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// 1. Manually parse .env.local to ensure full environment availability
const envLocalPath = path.join(process.cwd(), '.env.local');
if (fs.existsSync(envLocalPath)) {
  const content = fs.readFileSync(envLocalPath, 'utf8');
  content.split('\n').forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) return;
    const eqIdx = trimmed.indexOf('=');
    if (eqIdx !== -1) {
      const key = trimmed.slice(0, eqIdx).trim();
      const val = trimmed.slice(eqIdx + 1).trim();
      if (!process.env[key]) {
        process.env[key] = val;
      }
    }
  });
}

import { getCategories, createPost, getPostById, deletePost } from '../src/lib/firestore.js';
import { processImage } from '../src/lib/imageProcessor.js';
import { uploadToStorage, deleteFromStorage } from '../src/lib/cloudStorage.js';
import { getTelegramSession, setTelegramSession, clearTelegramSession } from '../src/lib/telegramSession.js';
import * as telegramClient from '../src/lib/telegram.js';
import { generateArticleOptions } from '../src/lib/gemini.js';

const WEBHOOK_URL = 'http://localhost:3000/api/telegram/webhook';

async function runMilestone2Verification() {
  console.log('====================================================');
  console.log('MILESTONE 2: EMPIRICAL VERIFICATION SUITE');
  console.log('====================================================\n');

  const testResults = [];

  // ----------------------------------------------------
  // TEST 1: Environment Credentials Configuration
  // ----------------------------------------------------
  console.log('--- TEST 1: Environment Credentials Configuration ---');
  const hasToken = Boolean(process.env.TELEGRAM_BOT_TOKEN);
  const hasUserId = Boolean(process.env.TELEGRAM_ALLOWED_USER_ID);
  const hasSecret = Boolean(process.env.TELEGRAM_WEBHOOK_SECRET);

  console.log(`- TELEGRAM_BOT_TOKEN: ${hasToken ? 'CONFIGURED' : 'MISSING'}`);
  console.log(`- TELEGRAM_ALLOWED_USER_ID: ${hasUserId ? 'CONFIGURED (' + process.env.TELEGRAM_ALLOWED_USER_ID + ')' : 'MISSING'}`);
  console.log(`- TELEGRAM_WEBHOOK_SECRET: ${hasSecret ? 'CONFIGURED (' + process.env.TELEGRAM_WEBHOOK_SECRET + ')' : 'MISSING'}`);

  const t1_pass = hasToken && hasUserId && hasSecret;
  testResults.push({
    name: 'Environment Credentials Configuration',
    pass: t1_pass,
    details: `Token: ${hasToken}, UserID: ${hasUserId}, Secret: ${hasSecret}`,
  });

  // ----------------------------------------------------
  // TEST 2: Webhook Secret Token Validation (401 vs Authorized)
  // ----------------------------------------------------
  console.log('\n--- TEST 2: Webhook Secret Token Validation ---');

  // Request with invalid secret
  const badRes = await fetch(WEBHOOK_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Telegram-Bot-Api-Secret-Token': 'wrong_secret_token_123',
    },
    body: JSON.stringify({ update_id: 999 }),
  });

  const badStatus = badRes.status;
  const badJson = await badRes.json();
  const badTokenPass = badStatus === 401 && badJson.error?.includes('Unauthorized secret token');
  console.log(`- Bad secret token HTTP status: ${badStatus} (expected 401): ${badTokenPass ? 'PASS' : 'FAIL'}`);

  // Request with missing secret header
  const missingRes = await fetch(WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ update_id: 999 }),
  });
  const missingStatus = missingRes.status;
  const missingPass = missingStatus === 401;
  console.log(`- Missing secret header HTTP status: ${missingStatus} (expected 401): ${missingPass ? 'PASS' : 'FAIL'}`);

  const t2_pass = badTokenPass && missingPass;
  testResults.push({
    name: 'Webhook Secret Token Rejection (401)',
    pass: t2_pass,
    details: `Bad token: ${badStatus}, Missing token: ${missingStatus}`,
  });

  // ----------------------------------------------------
  // TEST 3: Unauthorized User Rejection
  // ----------------------------------------------------
  console.log('\n--- TEST 3: Unauthorized User Rejection ---');
  let t3_pass = false;
  try {
    const unauthRes = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Telegram-Bot-Api-Secret-Token': process.env.TELEGRAM_WEBHOOK_SECRET,
      },
      body: JSON.stringify({
        update_id: 1001,
        message: {
          message_id: 1,
          from: { id: 999999999, first_name: 'Attacker' },
          chat: { id: 999999999 },
          text: '/start',
        },
      }),
    });
    const unauthStatus = unauthRes.status;
    const unauthJson = await unauthRes.json();
    console.log(`- Unauthorized request response status: ${unauthStatus}, body:`, unauthJson);
    t3_pass = unauthStatus === 200 && unauthJson.unauthorized === true;
    console.log(`- Unauthorized filtering check: ${t3_pass ? 'PASS' : 'FAIL'}`);
  } catch (err) {
    console.log(`- Unauthorized request error: ${err.message}`);
  }

  testResults.push({
    name: 'Unauthorized User Rejection Flow',
    pass: t3_pass,
    details: `Successfully filtered sender 999999999 against whitelist ${process.env.TELEGRAM_ALLOWED_USER_ID}`,
  });

  // ----------------------------------------------------
  // TEST 4: Category Listing Retrieval from Firestore ('doi-song')
  // ----------------------------------------------------
  console.log('\n--- TEST 4: Category Listing Retrieval from Firestore ---');
  const categories = await getCategories('doi-song');
  console.log(`- Fetched ${categories.length} categories from group 'doi-song':`);
  categories.forEach((cat) => {
    console.log(`  * [${cat.id}] order: ${cat.order} - title: "${cat.title?.replace('\n', ' ')}"`);
  });

  const hasExpectedCats = categories.some((c) => c.id === 'graduation') &&
                          categories.some((c) => c.id === 'enterprise') &&
                          categories.some((c) => c.id === 'sharing');
  const t4_pass = categories.length >= 5 && hasExpectedCats;
  console.log(`- Category retrieval verification: ${t4_pass ? 'PASS' : 'FAIL'}`);

  testResults.push({
    name: 'Category Listing Retrieval from Firestore',
    pass: t4_pass,
    details: `Retrieved ${categories.length} categories; verified graduation, enterprise, sharing`,
  });

  // ----------------------------------------------------
  // TEST 5: Telegram Session Lifecycle (State Machine)
  // ----------------------------------------------------
  console.log('\n--- TEST 5: Telegram Session Lifecycle in Firestore ---');
  const mockChatId = 'test_chat_empirical_session_888';
  const samplePayload = {
    step: 'AWAITING_PHOTO_CONTENT',
    selectedCategoryId: 'sharing',
    selectedCategoryTitle: 'Nhỏ to cùng chia sẻ',
    userId: 2050406425,
  };

  await setTelegramSession(mockChatId, samplePayload);
  const retrievedSession = await getTelegramSession(mockChatId);
  const sessionValid = retrievedSession &&
                       retrievedSession.step === samplePayload.step &&
                       retrievedSession.selectedCategoryId === samplePayload.selectedCategoryId;
  console.log(`- Session set & get verification: ${sessionValid ? 'PASS' : 'FAIL'}`);

  await clearTelegramSession(mockChatId);
  const deletedSession = await getTelegramSession(mockChatId);
  const sessionCleared = deletedSession === null;
  console.log(`- Session clear verification: ${sessionCleared ? 'PASS' : 'FAIL'}`);

  const t5_pass = sessionValid && sessionCleared;
  testResults.push({
    name: 'Telegram Session State Lifecycle in Firestore',
    pass: t5_pass,
    details: `Verified set, get and delete operations on collection 'telegram_sessions'`,
  });

  // ----------------------------------------------------
  // TEST 6: Telegram Client Module Structure
  // ----------------------------------------------------
  console.log('\n--- TEST 6: Telegram Native Fetch Client Module ---');
  const expectedMethods = [
    'sendMessage',
    'sendPhoto',
    'answerCallbackQuery',
    'editMessageText',
    'getFile',
    'downloadFileBuffer',
  ];
  const missingMethods = expectedMethods.filter((m) => typeof telegramClient[m] !== 'function');
  const t6_pass = missingMethods.length === 0;
  console.log(`- Telegram Client methods check: ${t6_pass ? 'PASS' : 'FAIL'} (missing: ${missingMethods.join(', ') || 'none'})`);

  testResults.push({
    name: 'Telegram Native Fetch Client Interface',
    pass: t6_pass,
    details: `Verified exports: ${expectedMethods.join(', ')}`,
  });

  // ----------------------------------------------------
  // TEST 7: Gemini Article Generation Module Structure & Schema
  // ----------------------------------------------------
  console.log('\n--- TEST 7: Gemini 2.5 Flash Generator Module ---');
  const hasGenerateFn = typeof generateArticleOptions === 'function';
  console.log(`- generateArticleOptions function exists: ${hasGenerateFn ? 'PASS' : 'FAIL'}`);

  let geminiCallPass = false;
  let geminiCallDetails = '';

  if (process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY.length > 10) {
    console.log('- Live GEMINI_API_KEY detected. Testing live generation call...');
    try {
      const dummyImg = await sharp({
        create: {
          width: 200,
          height: 150,
          channels: 3,
          background: { r: 255, g: 102, b: 0 },
        },
      }).jpeg().toBuffer();

      const options = await generateArticleOptions(
        dummyImg,
        'image/jpeg',
        'Lễ khai giảng tân sinh viên FAI năm học mới 2026 rực rỡ sắc cam'
      );

      const hasOpt1 = options.option1 && options.option1.title && options.option1.contentHtml;
      const hasOpt2 = options.option2 && options.option2.title && options.option2.contentHtml;
      geminiCallPass = hasOpt1 && hasOpt2;
      geminiCallDetails = `Live generation successful: Opt 1 "${options.option1.title.slice(0, 30)}...", Opt 2 "${options.option2.title.slice(0, 30)}..."`;
      console.log(`  * Option 1: ${options.option1.title}`);
      console.log(`  * Option 2: ${options.option2.title}`);
    } catch (err) {
      console.log(`- Live Gemini call error: ${err.message}`);
      geminiCallPass = false;
      geminiCallDetails = `Live call failed: ${err.message}`;
    }
  } else {
    // When GEMINI_API_KEY is not yet populated, verify that generateArticleOptions properly enforces the contract and errors gracefully
    try {
      await generateArticleOptions(null, null, 'Test without API key');
      geminiCallPass = false;
      geminiCallDetails = 'Expected error when GEMINI_API_KEY is missing, but function succeeded';
    } catch (err) {
      const isExpectedError = err.message.includes('GEMINI_API_KEY is missing');
      geminiCallPass = isExpectedError;
      geminiCallDetails = `Validated API key enforcement: "${err.message}"`;
      console.log(`- Successfully verified API key guard: ${err.message}`);
    }
  }

  const t7_pass = hasGenerateFn && geminiCallPass;
  testResults.push({
    name: 'Gemini 2.5 Flash Generator Interface & Verification',
    pass: t7_pass,
    details: geminiCallDetails,
  });

  // ----------------------------------------------------
  // TEST 8: Full End-to-End Publishing Pipeline (Image + R2 + Firestore Posts)
  // ----------------------------------------------------
  console.log('\n--- TEST 8: Full Publishing Pipeline (Image -> R2 -> Firestore posts) ---');

  // Create synthetic test photo
  const testSvg = `
    <svg width="1200" height="800">
      <rect width="100%" height="100%" fill="#ff6600" />
      <text x="600" y="400" font-size="48" text-anchor="middle" fill="white" font-family="sans-serif">
        FAI TELEGRAM PUBLISHING TEST
      </text>
    </svg>
  `;
  const rawTestBuffer = await sharp(Buffer.from(testSvg)).png().toBuffer();

  // Run M1 image processing pipeline (WebP + Watermark + <350KB)
  const processed = await processImage(rawTestBuffer, {
    maxWidth: 1600,
    quality: 82,
    watermark: true,
  });

  console.log(`- Image processed: ${processed.width}x${processed.height}, format: ${processed.format}, size: ${processed.sizeBytes} bytes`);

  // Upload to Cloudflare R2
  const uploaded = await uploadToStorage(processed.buffer, 'empirical-telegram-test', 'image/webp');
  console.log(`- Uploaded to Cloudflare R2: ${uploaded.url}`);

  // Verify URL is public and accessible via HTTP GET
  const cdnRes = await fetch(uploaded.url, { method: 'HEAD' });
  const cdnAccessible = cdnRes.status === 200;
  console.log(`- Public CDN accessibility check: ${cdnAccessible ? 'PASS' : 'FAIL'} (HTTP ${cdnRes.status})`);

  // Create test post in Firestore
  const testPostData = {
    title: 'Test Telegram Post Empirical Verification',
    slug: `test-telegram-post-${Date.now().toString().slice(-4)}`,
    categoryId: 'sharing',
    date: '03-09-2026',
    image: uploaded.url,
    excerpt: 'Đây là bài viết kiểm thử tự động quy trình xuất bản Telegram Webhook.',
    contentHtml: '<h3>Tiêu đề đoạn 1</h3><p>Nội dung đoạn văn bản kiểm thử.</p><blockquote>Trích dẫn phát biểu tâm đắc.</blockquote>',
    sourceUrl: '',
    author: 'FAI Editorial',
    readTime: '3 phút',
    order: 999,
    published: true,
    group: 'doi-song',
  };

  const createdPost = await createPost(testPostData);
  console.log(`- Created test post in Firestore 'posts': ID = ${createdPost.id}`);

  // Retrieve post from Firestore
  const fetchedPost = await getPostById(createdPost.id);
  const postValid = fetchedPost &&
                    fetchedPost.title === testPostData.title &&
                    fetchedPost.image === uploaded.url &&
                    !fetchedPost.image.startsWith('data:image') &&
                    fetchedPost.group === 'doi-song' &&
                    fetchedPost.published === true;
  console.log(`- Firestore post validation (Zero Base64, public R2 URL): ${postValid ? 'PASS' : 'FAIL'}`);

  // Cleanup test post and test image
  await deletePost(createdPost.id);
  await deleteFromStorage(uploaded.key);
  console.log(`- Cleaned up test post ${createdPost.id} and R2 key ${uploaded.key}`);

  const t8_pass = cdnAccessible && postValid;
  testResults.push({
    name: 'Full Publishing Pipeline (Image -> R2 -> Firestore posts)',
    pass: t8_pass,
    details: `Image: ${processed.sizeBytes} B WebP, R2 CDN: HTTP ${cdnRes.status}, Post: ${createdPost.id}, Zero Base64`,
  });

  // ----------------------------------------------------
  // SUMMARY REPORT
  // ----------------------------------------------------
  console.log('\n====================================================');
  console.log('SUMMARY RESULTS:');
  console.log('====================================================');
  let allPass = true;
  testResults.forEach((t, i) => {
    console.log(`[${t.pass ? 'PASS' : 'FAIL'}] Test ${i + 1}: ${t.name}`);
    if (t.details) console.log(`       Details: ${t.details}`);
    if (!t.pass) allPass = false;
  });

  console.log('====================================================');
  console.log(`OVERALL STATUS: ${allPass ? 'ALL TESTS PASSED ✅' : 'FAILURES DETECTED ❌'}`);
  console.log('====================================================');

  if (!allPass) {
    process.exit(1);
  }
  process.exit(0);
}

runMilestone2Verification().catch((err) => {
  console.error('Unhandled verification error:', err);
  process.exit(1);
});
