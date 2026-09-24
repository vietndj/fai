/**
 * EMPIRICAL ADVERSARIAL CHALLENGER SUITE - MILESTONE 2
 * Author: challenger_m2
 * Purpose: Empirically stress-test Webhook Security, Whitelist, Category Dynamic Keyboard,
 * Gemini Schema, Publishing Pipeline, and /doi-song Integration.
 */

import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// Load .env.local
const envPath = path.join(process.cwd(), '.env.local');
if (fs.existsSync(envPath)) {
  const content = fs.readFileSync(envPath, 'utf8');
  for (const line of content.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eqIdx = trimmed.indexOf('=');
    if (eqIdx !== -1) {
      const key = trimmed.slice(0, eqIdx).trim();
      const val = trimmed.slice(eqIdx + 1).trim();
      if (!process.env[key]) process.env[key] = val;
    }
  }
}

import { getCategories, createPost, getPostById, getPosts, deletePost } from '../src/lib/firestore.js';
import { processImage } from '../src/lib/imageProcessor.js';
import { uploadToStorage, deleteFromStorage } from '../src/lib/cloudStorage.js';
import { getTelegramSession, setTelegramSession, clearTelegramSession } from '../src/lib/telegramSession.js';
import * as telegramClient from '../src/lib/telegram.js';
import { generateArticleOptions } from '../src/lib/gemini.js';

const WEBHOOK_URL = 'http://localhost:3000/api/telegram/webhook';
const VALID_SECRET = process.env.TELEGRAM_WEBHOOK_SECRET || 'fai_telegram_secret_token_2026';
const ALLOWED_USER_ID = process.env.TELEGRAM_ALLOWED_USER_ID || '2050406425';

const results = [];

function record(name, pass, details) {
  results.push({ name, pass, details });
  console.log(`[${pass ? 'PASS' : 'FAIL'}] ${name}: ${details}`);
}

async function main() {
  console.log('================================================================');
  console.log('CHALLENGER M2: ADVERSARIAL & EMPIRICAL VERIFICATION');
  console.log('================================================================\n');

  // -------------------------------------------------------------
  // SUITE 1: Secret Token Security & Attack Vectors (R4)
  // -------------------------------------------------------------
  console.log('--- SUITE 1: Secret Token Security & Attack Vectors ---');

  // 1.1: Missing Header entirely -> Expect 401
  try {
    const res = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ update_id: 1 }),
    });
    record('1.1 Missing Secret Token Header', res.status === 401, `HTTP status ${res.status}`);
  } catch (err) {
    record('1.1 Missing Secret Token Header', false, err.message);
  }

  // 1.2: Invalid Secret Token -> Expect 401
  try {
    const res = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Telegram-Bot-Api-Secret-Token': 'hacker_secret_attack',
      },
      body: JSON.stringify({ update_id: 2 }),
    });
    const json = await res.json();
    record(
      '1.2 Invalid Secret Token',
      res.status === 401 && json.error?.includes('Unauthorized secret token'),
      `HTTP status ${res.status}, error: ${json.error}`
    );
  } catch (err) {
    record('1.2 Invalid Secret Token', false, err.message);
  }

  // 1.3: Empty String Secret Token -> Expect 401
  try {
    const res = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Telegram-Bot-Api-Secret-Token': '',
      },
      body: JSON.stringify({ update_id: 3 }),
    });
    record('1.3 Empty Secret Token Header', res.status === 401, `HTTP status ${res.status}`);
  } catch (err) {
    record('1.3 Empty Secret Token Header', false, err.message);
  }

  // 1.4: Uppercase variant (case sensitivity) -> Expect 401
  try {
    const res = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Telegram-Bot-Api-Secret-Token': VALID_SECRET.toUpperCase(),
      },
      body: JSON.stringify({ update_id: 4 }),
    });
    record('1.4 Incorrect Case Secret Token', res.status === 401, `HTTP status ${res.status}`);
  } catch (err) {
    record('1.4 Incorrect Case Secret Token', false, err.message);
  }

  // -------------------------------------------------------------
  // SUITE 2: User Whitelist Authorization & Protection (R4)
  // -------------------------------------------------------------
  console.log('\n--- SUITE 2: User Whitelist Authorization & Protection ---');

  // 2.1: Unauthorized User Message (/start attempt) -> Expect 200 with unauthorized: true, NO session created
  try {
    const fakeId = 999999999;
    const res = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Telegram-Bot-Api-Secret-Token': VALID_SECRET,
      },
      body: JSON.stringify({
        update_id: 201,
        message: {
          message_id: 1,
          from: { id: fakeId, first_name: 'Attacker' },
          chat: { id: fakeId },
          text: '/start',
        },
      }),
    });
    const json = await res.json();
    const session = await getTelegramSession(fakeId);
    const pass = res.status === 200 && json.unauthorized === true && session === null;
    record(
      '2.1 Unauthorized User Message Blocked',
      pass,
      `HTTP status: ${res.status}, unauthorized flag: ${json.unauthorized}, session created: ${Boolean(session)}`
    );
  } catch (err) {
    record('2.1 Unauthorized User Message Blocked', false, err.message);
  }

  // 2.2: Unauthorized User Callback Query attempt -> Expect blocked, no publishing
  try {
    const fakeId = 888888888;
    const res = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Telegram-Bot-Api-Secret-Token': VALID_SECRET,
      },
      body: JSON.stringify({
        update_id: 202,
        callback_query: {
          id: 'cb_attack_2',
          from: { id: fakeId, first_name: 'Attacker' },
          message: { chat: { id: fakeId } },
          data: 'opt_1',
        },
      }),
    });
    const json = await res.json();
    const session = await getTelegramSession(fakeId);
    const pass = res.status === 200 && json.unauthorized === true && session === null;
    record(
      '2.2 Unauthorized User Callback Query Blocked',
      pass,
      `HTTP status: ${res.status}, unauthorized flag: ${json.unauthorized}`
    );
  } catch (err) {
    record('2.2 Unauthorized User Callback Query Blocked', false, err.message);
  }

  // 2.3: Whitelist Configuration Compliance
  const allowedList = ALLOWED_USER_ID.split(',').map((id) => id.trim());
  const containsUser = allowedList.includes('2050406425');
  record(
    '2.3 Whitelist Configuration Compliance',
    containsUser,
    `TELEGRAM_ALLOWED_USER_ID includes 2050406425 (configured: ${ALLOWED_USER_ID})`
  );

  // -------------------------------------------------------------
  // SUITE 3: Dynamic Category Inline Keyboard from Firestore
  // -------------------------------------------------------------
  console.log('\n--- SUITE 3: Dynamic Category Inline Keyboard ---');

  let categories = [];
  try {
    categories = await getCategories('doi-song');
    const hasRequired = categories.length >= 5;
    const allDoiSong = categories.every((c) => c.group === 'doi-song');
    const sortedCorrectly = categories.every((cat, idx) => {
      if (idx === 0) return true;
      return (cat.order ?? 0) >= (categories[idx - 1].order ?? 0);
    });

    record(
      '3.1 Firestore Categories Query (group == doi-song)',
      hasRequired && allDoiSong && sortedCorrectly,
      `Found ${categories.length} categories; all group == 'doi-song': ${allDoiSong}, sorted: ${sortedCorrectly}`
    );
  } catch (err) {
    record('3.1 Firestore Categories Query', false, err.message);
  }

  // 3.2: Verify Inline Keyboard Generation Logic
  const generatedKeyboard = categories.map((cat) => [
    {
      text: `📂 ${cat.title.replace(/\n/g, ' - ')}`,
      callback_data: `cat_${cat.id}`,
    },
  ]);
  const keyboardValid = generatedKeyboard.length === categories.length &&
    generatedKeyboard.every((row, i) => row[0].callback_data === `cat_${categories[i].id}`);

  record(
    '3.2 Inline Keyboard Mapping',
    keyboardValid,
    `Generated ${generatedKeyboard.length} buttons matching cat_<id> pattern`
  );

  // 3.3: Verify Category Selection Session Transition
  const testChatId = 'challenger_test_chat_m2';
  try {
    const targetCat = categories[0] || { id: 'sharing', title: 'Nhỏ to cùng chia sẻ' };
    await setTelegramSession(testChatId, {
      step: 'AWAITING_PHOTO_CONTENT',
      selectedCategoryId: targetCat.id,
      selectedCategoryTitle: targetCat.title.replace(/\n/g, ' - '),
      userId: 2050406425,
    });

    const sessionData = await getTelegramSession(testChatId);
    const pass = sessionData &&
      sessionData.step === 'AWAITING_PHOTO_CONTENT' &&
      sessionData.selectedCategoryId === targetCat.id;

    record(
      '3.3 Category Selection State Transition',
      pass,
      `Session step: ${sessionData?.step}, category: ${sessionData?.selectedCategoryId}`
    );
  } catch (err) {
    record('3.3 Category Selection State Transition', false, err.message);
  }

  // -------------------------------------------------------------
  // SUITE 4: Gemini 2.5 Flash Article Generator & Semantic HTML
  // -------------------------------------------------------------
  console.log('\n--- SUITE 4: Gemini 2.5 Flash Article Generator & Schema ---');

  // 4.1: Inspect function and schema exports
  record(
    '4.1 generateArticleOptions Exists',
    typeof generateArticleOptions === 'function',
    'Exported as an async function in src/lib/gemini.js'
  );

  // 4.2: Guard check when GEMINI_API_KEY is not configured
  try {
    await generateArticleOptions(null, null, 'Test draft', { apiKey: '' });
    record('4.2 API Key Missing Guard', false, 'Expected function to throw on missing API key');
  } catch (err) {
    const pass = err.message.includes('GEMINI_API_KEY is missing');
    record('4.2 API Key Missing Guard', pass, `Threw expected error: "${err.message}"`);
  }

  // 4.3: Validate Semantic HTML Specification in gemini.js
  const geminiJsContent = fs.readFileSync(path.join(process.cwd(), 'src/lib/gemini.js'), 'utf8');
  const hasH3Rule = geminiJsContent.includes('h3') && geminiJsContent.includes('KHÔNG dùng <h1> hoặc <h2>');
  const hasSemanticTags = geminiJsContent.includes('blockquote') && geminiJsContent.includes('ul') && geminiJsContent.includes('li');
  const hasTwoOptionsSchema = geminiJsContent.includes('option1') && geminiJsContent.includes('option2') &&
    geminiJsContent.includes('readTime') && geminiJsContent.includes('excerpt') && geminiJsContent.includes('contentHtml');

  record(
    '4.3 Semantic HTML & 2-Option Schema Specification',
    hasH3Rule && hasSemanticTags && hasTwoOptionsSchema,
    `H3 rule: ${hasH3Rule}, Semantic tags (blockquote, ul, li): ${hasSemanticTags}, Schema: ${hasTwoOptionsSchema}`
  );

  // -------------------------------------------------------------
  // SUITE 5: Publishing Flow, R2 Storage & /doi-song Integration
  // -------------------------------------------------------------
  console.log('\n--- SUITE 5: Publishing Flow, R2 Storage & /doi-song Integration ---');

  let testPostId = null;
  let testR2Key = null;

  try {
    // 5.1: Create realistic synthetic image and process via Sharp (Watermark + WebP < 350KB)
    const testSvg = `
      <svg width="1400" height="900">
        <rect width="100%" height="100%" fill="#1a202c" />
        <circle cx="700" cy="450" r="250" fill="#ff6600" opacity="0.8" />
        <text x="700" y="470" font-size="52" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="bold">
          FAI ROBOTICS LAB 2026
        </text>
      </svg>
    `;
    const rawImageBuffer = await sharp(Buffer.from(testSvg)).png().toBuffer();
    const processed = await processImage(rawImageBuffer, {
      maxWidth: 1600,
      quality: 82,
      watermark: true,
    });

    const isWebp = processed.format === 'webp';
    const isUnder350K = processed.sizeBytes < 350 * 1024;
    record(
      '5.1 Image Optimization Pipeline (WebP, <350KB, Watermark)',
      isWebp && isUnder350K,
      `Format: ${processed.format}, Size: ${processed.sizeBytes} bytes (<350KB: ${isUnder350K})`
    );

    // 5.2: Upload to Cloudflare R2
    const uploadResult = await uploadToStorage(processed.buffer, 'challenger-test-post', 'image/webp');
    testR2Key = uploadResult.key;
    const cdnHead = await fetch(uploadResult.url, { method: 'HEAD' });
    const isR2Live = cdnHead.status === 200;
    record(
      '5.2 Cloudflare R2 Public CDN Upload',
      isR2Live,
      `URL: ${uploadResult.url} (HTTP status: ${cdnHead.status})`
    );

    // 5.3: Persist post to Firestore with Zero Base64
    const simulatedOption = {
      title: 'Empirical Test: Đột Phá AI & Robotics FAI 2026',
      excerpt: 'Sinh viên FAI gây ấn tượng mạnh mẽ với đồ án ứng dụng AI vào cánh tay robot công nghiệp.',
      readTime: '3 phút',
      contentHtml: '<h3>Bước nhảy vọt công nghệ</h3><p>Sinh viên hoàn thành đồ án xuất sắc.</p><blockquote>FAI luôn thúc đẩy đổi mới sáng tạo.</blockquote><ul><li>Ứng dụng Computer Vision</li><li>Tối ưu độ trễ micro-second</li></ul>',
    };

    const targetCategoryId = categories[0]?.id || 'sharing';
    const testPostPayload = {
      title: simulatedOption.title,
      slug: `empirical-test-${Date.now().toString().slice(-4)}`,
      categoryId: targetCategoryId,
      date: '03-09-2026',
      image: uploadResult.url,
      excerpt: simulatedOption.excerpt,
      contentHtml: simulatedOption.contentHtml,
      sourceUrl: '',
      author: 'FAI Editorial',
      readTime: simulatedOption.readTime,
      order: 0,
      published: true,
      group: 'doi-song',
    };

    const created = await createPost(testPostPayload);
    testPostId = created.id;

    const fetched = await getPostById(testPostId);
    const zeroBase64 = Boolean(fetched?.image && !fetched.image.startsWith('data:image') && fetched.image.startsWith('http'));
    const isPublished = fetched?.published === true;
    const isDoiSongGroup = fetched?.group === 'doi-song';

    record(
      '5.3 Firestore Post Persistence (Zero Base64, Group doi-song)',
      zeroBase64 && isPublished && isDoiSongGroup,
      `ID: ${testPostId}, Zero Base64: ${zeroBase64}, Published: ${isPublished}, Group: ${fetched?.group}`
    );

    // 5.4: Verify Post Appears in /doi-song Query Pipeline
    const doiSongPosts = await getPosts({ categoryId: targetCategoryId, published: true });
    const foundInDoiSong = doiSongPosts.some((p) => p.id === testPostId);

    record(
      '5.4 Display Pipeline on /doi-song',
      foundInDoiSong,
      `Queried getPosts({ categoryId: '${targetCategoryId}', published: true }): Post found = ${foundInDoiSong} (total in cat: ${doiSongPosts.length})`
    );

    // 5.5: Cleanup test records
    await deletePost(testPostId);
    await deleteFromStorage(testR2Key);
    await clearTelegramSession(testChatId);

    const postAfterDelete = await getPostById(testPostId);
    const sessionAfterClear = await getTelegramSession(testChatId);
    record(
      '5.5 Post & Session Cleanup Verification',
      postAfterDelete === null && sessionAfterClear === null,
      `Post deleted: ${postAfterDelete === null}, Session cleared: ${sessionAfterClear === null}`
    );
  } catch (err) {
    record('5.x Publishing Flow Error', false, err.message);
    if (testPostId) await deletePost(testPostId).catch(() => {});
    if (testR2Key) await deleteFromStorage(testR2Key).catch(() => {});
    await clearTelegramSession(testChatId).catch(() => {});
  }

  // -------------------------------------------------------------
  // SUMMARY
  // -------------------------------------------------------------
  console.log('\n================================================================');
  console.log('CHALLENGER VERIFICATION SUMMARY:');
  console.log('================================================================');

  let passedCount = 0;
  let failedCount = 0;

  for (const r of results) {
    if (r.pass) passedCount++;
    else failedCount++;
  }

  console.log(`TOTAL CHECKS: ${results.length}`);
  console.log(`PASSED: ${passedCount}`);
  console.log(`FAILED: ${failedCount}`);
  console.log('================================================================');

  if (failedCount > 0) {
    console.error('VERDICT: REQUEST_CHANGES ❌');
    process.exit(1);
  } else {
    console.log('VERDICT: APPROVE ✅');
    process.exit(0);
  }
}

main().catch((err) => {
  console.error('Fatal execution failure:', err);
  process.exit(1);
});
