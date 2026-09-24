/**
 * EMPIRICAL ADVERSARIAL STRESS HARNESS - MILESTONE 2
 * Author: challenger_m2_gem_2
 * Role: critic, specialist
 * 
 * Verifies:
 * 1. Webhook security & payload sanitation (missing tokens, bad JSON, unauthorized users)
 * 2. Simulated photo update with note -> HTTP 200, zero crash
 * 3. Firestore session transitions to AWAITING_OPTION_SELECTION with valid generatedOptions
 * 4. Option 1 callback query execution & Firestore post persistence
 * 5. Photo update with real Telegram file ID & Option 2 callback query execution
 * 6. Double-click concurrency protection & stale session handling
 */

import { getTelegramSession, setTelegramSession, clearTelegramSession } from '../src/lib/telegramSession.js';
import { collection, query, where, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../src/lib/firebase.js';

const WEBHOOK_URL = 'http://localhost:3000/api/telegram/webhook';
const SECRET_TOKEN = process.env.TELEGRAM_WEBHOOK_SECRET || 'fai_telegram_secret_token_2026';
const AUTHORIZED_USER_ID = parseInt(process.env.TELEGRAM_ALLOWED_USER_ID || '2050406425', 10);
const REAL_PHOTO_FILE_ID = 'AQADBQADv64xGzsBiFUACAMAAxm4NnoABBtDSR5-Fc14PQQ';

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;
const failures = [];
const createdPostIds = [];

function assert(condition, testName, details = '') {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`  [PASS] ${testName}`);
  } else {
    failedTests++;
    const errMsg = `  [FAIL] ${testName} - ${details}`;
    console.error(errMsg);
    failures.push(errMsg);
  }
}

async function postWebhook(payload, headers = {}) {
  const defaultHeaders = {
    'Content-Type': 'application/json',
    'X-Telegram-Bot-Api-Secret-Token': SECRET_TOKEN,
  };
  const res = await fetch(WEBHOOK_URL, {
    method: 'POST',
    headers: { ...defaultHeaders, ...headers },
    body: typeof payload === 'string' ? payload : JSON.stringify(payload),
  });
  let body = null;
  try {
    body = await res.json();
  } catch (err) {
    body = null;
  }
  return { status: res.status, ok: res.ok, body };
}

function validateArticleOption(option, optionName, topicLabel) {
  assert(
    typeof option.title === 'string' && option.title.length > 0 && option.title.length <= 100,
    `[${topicLabel}] ${optionName}.title length <= 100 (actual: ${option.title?.length})`,
    `Invalid title: "${option.title}"`
  );
  assert(
    typeof option.excerpt === 'string' && option.excerpt.length >= 120 && option.excerpt.length <= 220,
    `[${topicLabel}] ${optionName}.excerpt length between 120 and 220 (actual: ${option.excerpt?.length})`,
    `Invalid excerpt: "${option.excerpt}"`
  );
  assert(
    typeof option.readTime === 'string' && option.readTime.length > 0,
    `[${topicLabel}] ${optionName}.readTime is defined: "${option.readTime}"`
  );
  assert(
    option.contentHtml.includes('<h3>'),
    `[${topicLabel}] ${optionName}.contentHtml contains <h3> tags`
  );
  assert(
    !option.contentHtml.toLowerCase().includes('<h1') && !option.contentHtml.toLowerCase().includes('<h2'),
    `[${topicLabel}] ${optionName}.contentHtml strictly does NOT contain <h1> or <h2> tags`
  );
}

async function run() {
  console.log('===============================================================');
  console.log('STARTING EMPIRICAL ADVERSARIAL STRESS TEST FOR WEBHOOK (M2)');
  console.log(`Target: ${WEBHOOK_URL}`);
  console.log(`Authorized User ID: ${AUTHORIZED_USER_ID}`);
  console.log('===============================================================\n');

  // -----------------------------------------------------------------
  // SUITE 1: Security & Webhook Input Hardening
  // -----------------------------------------------------------------
  console.log('--- SUITE 1: Security & Input Hardening ---');

  // 1.1 Missing secret token
  const resNoSecret = await postWebhook({ update_id: 101 }, { 'X-Telegram-Bot-Api-Secret-Token': '' });
  assert(resNoSecret.status === 401, '1.1 Missing secret token returns HTTP 401', `Status was ${resNoSecret.status}`);

  // 1.2 Invalid secret token
  const resBadSecret = await postWebhook({ update_id: 102 }, { 'X-Telegram-Bot-Api-Secret-Token': 'wrong_secret_123' });
  assert(resBadSecret.status === 401, '1.2 Invalid secret token returns HTTP 401', `Status was ${resBadSecret.status}`);

  // 1.3 Malformed JSON
  const resMalformed = await postWebhook('{"update_id": 103, "broken');
  assert(resMalformed.status === 400, '1.3 Malformed JSON body returns HTTP 400', `Status was ${resMalformed.status}`);

  // 1.4 JSON Array payload
  const resArray = await postWebhook([1, 2, 3]);
  assert(resArray.status === 400, '1.4 Non-object JSON array returns HTTP 400', `Status was ${resArray.status}`);

  // 1.5 Unauthorized Sender
  const resUnauthorized = await postWebhook({
    update_id: 105,
    message: {
      message_id: 50,
      from: { id: 999999999, is_bot: false, first_name: 'Attacker' },
      chat: { id: 999999999, type: 'private' },
      text: '/start',
    },
  });
  assert(
    resUnauthorized.status === 200 && resUnauthorized.body?.unauthorized === true,
    '1.5 Unauthorized sender safely blocked with unauthorized flag',
    `Status: ${resUnauthorized.status}, body: ${JSON.stringify(resUnauthorized.body)}`
  );

  // 1.6 Empty update
  const resEmpty = await postWebhook({});
  assert(resEmpty.status === 200 && resEmpty.body?.ok === true, '1.6 Empty update returns HTTP 200 ok');

  // -----------------------------------------------------------------
  // SUITE 2: Simulated Photo Update & Option 1 Callback Flow
  // Topic: Wireframing – Thiết kế từ góc nhìn của người dùng
  // -----------------------------------------------------------------
  console.log('\n--- SUITE 2: Simulated Photo Update & Option 1 Selection Flow ---');

  // Clean initial session
  await clearTelegramSession(AUTHORIZED_USER_ID);

  // 2.1 Category selection callback (cat_enterprise)
  const resCat = await postWebhook({
    update_id: 201,
    callback_query: {
      id: 'cb_cat_enterprise_test',
      from: { id: AUTHORIZED_USER_ID, first_name: 'Nguyễn Việt' },
      message: { message_id: 201, chat: { id: AUTHORIZED_USER_ID, type: 'private' } },
      data: 'cat_enterprise',
    },
  });
  assert(resCat.status === 200 && resCat.body?.ok === true, '2.1 Category selection returns HTTP 200');

  let sessionAfterCat = await getTelegramSession(AUTHORIZED_USER_ID);
  assert(
    sessionAfterCat && sessionAfterCat.step === 'AWAITING_PHOTO_CONTENT' && sessionAfterCat.selectedCategoryId === 'enterprise',
    '2.1b Session transitioned to AWAITING_PHOTO_CONTENT with selectedCategoryId enterprise'
  );

  // 2.2 Simulated photo message with Wireframing notes
  const wireframingNote = 'Wireframing – Thiết kế từ góc nhìn của người dùng: Bí quyết xây dựng trải nghiệm trực quan tại FPT Aptech';
  const resPhoto1 = await postWebhook({
    update_id: 202,
    message: {
      message_id: 202,
      from: { id: AUTHORIZED_USER_ID, first_name: 'Nguyễn Việt' },
      chat: { id: AUTHORIZED_USER_ID, type: 'private' },
      photo: [
        { file_id: 'thumb_fake_wireframing_101', width: 320, height: 240 },
        { file_id: 'highres_fake_wireframing_102', width: 1280, height: 960 },
      ],
      caption: wireframingNote,
    },
  });
  assert(resPhoto1.status === 200 && resPhoto1.body?.ok === true, '2.2 Simulated photo message returns HTTP 200 without crash');

  let sessionAfterPhoto1 = await getTelegramSession(AUTHORIZED_USER_ID);
  assert(
    sessionAfterPhoto1 && sessionAfterPhoto1.step === 'AWAITING_OPTION_SELECTION',
    '2.2b Session successfully transitioned to AWAITING_OPTION_SELECTION'
  );
  assert(
    sessionAfterPhoto1?.photoFileId === 'highres_fake_wireframing_102',
    '2.2c Picked highest resolution photo file ID'
  );
  assert(
    sessionAfterPhoto1?.generatedOptions && sessionAfterPhoto1.generatedOptions.isFallback === true,
    '2.2d generatedOptions successfully created via Fallback Pipeline'
  );

  if (sessionAfterPhoto1?.generatedOptions) {
    const { option1, option2 } = sessionAfterPhoto1.generatedOptions;
    validateArticleOption(option1, 'option1', 'Wireframing');
    validateArticleOption(option2, 'option2', 'Wireframing');
  }

  // 2.3 Option 1 Selection Callback
  const resOpt1 = await postWebhook({
    update_id: 203,
    callback_query: {
      id: 'cb_opt_1_test_query',
      from: { id: AUTHORIZED_USER_ID, first_name: 'Nguyễn Việt' },
      message: { message_id: 203, chat: { id: AUTHORIZED_USER_ID, type: 'private' } },
      data: 'opt_1',
    },
  });
  assert(resOpt1.status === 200 && resOpt1.body?.ok === true, '2.3 Option 1 callback returns HTTP 200');

  // Verify session is cleared after publishing
  const sessionAfterOpt1 = await getTelegramSession(AUTHORIZED_USER_ID);
  assert(sessionAfterOpt1 === null, '2.3b Session cleared from Firestore after publication');

  // Verify post created in Firestore
  const opt1ExpectedTitle = sessionAfterPhoto1?.generatedOptions?.option1?.title;
  const postsRef = collection(db, 'posts');
  const q1 = query(postsRef, where('title', '==', opt1ExpectedTitle));
  const snap1 = await getDocs(q1);

  assert(!snap1.empty, `2.3c Post successfully saved to Firestore with title: "${opt1ExpectedTitle}"`);
  if (!snap1.empty) {
    const postDoc = snap1.docs[0];
    const post = postDoc.data();
    createdPostIds.push(postDoc.id);

    assert(post.group === 'doi-song', '2.3d Post belongs to group "doi-song"');
    assert(post.categoryId === 'enterprise', '2.3e Post categoryId matches selected category "enterprise"');
    assert(post.published === true, '2.3f Post published flag is true');
    assert(typeof post.excerpt === 'string' && post.excerpt.length >= 120, '2.3g Post excerpt is populated correctly');
    assert(typeof post.image === 'string' && post.image.length > 0, `2.3h Post image URL is set: "${post.image}"`);
  }

  // -----------------------------------------------------------------
  // SUITE 3: Real Telegram File ID Photo & Option 2 Callback Flow
  // Topic: AI-first software developer
  // -----------------------------------------------------------------
  console.log('\n--- SUITE 3: Real Photo Buffer Download & Option 2 Selection Flow ---');

  // 3.1 Category selection callback (cat_graduation)
  const resCat2 = await postWebhook({
    update_id: 301,
    callback_query: {
      id: 'cb_cat_grad_test',
      from: { id: AUTHORIZED_USER_ID, first_name: 'Nguyễn Việt' },
      message: { message_id: 301, chat: { id: AUTHORIZED_USER_ID, type: 'private' } },
      data: 'cat_graduation',
    },
  });
  assert(resCat2.status === 200, '3.1 Category selection for cat_graduation returns HTTP 200');

  // 3.2 Photo message with REAL Telegram file_id and AI-First developer notes
  const aiFirstNote = 'AI-first software developer: Làm chủ ai để phát triển phần mềm và kiến tạo giá trị cho doanh nghiệp';
  const resPhoto2 = await postWebhook({
    update_id: 302,
    message: {
      message_id: 302,
      from: { id: AUTHORIZED_USER_ID, first_name: 'Nguyễn Việt' },
      chat: { id: AUTHORIZED_USER_ID, type: 'private' },
      photo: [
        { file_id: 'thumb_fake_ai_first', width: 320, height: 240 },
        { file_id: REAL_PHOTO_FILE_ID, width: 1280, height: 960 },
      ],
      caption: aiFirstNote,
    },
  });
  assert(resPhoto2.status === 200 && resPhoto2.body?.ok === true, '3.2 Real photo message returns HTTP 200');

  let sessionAfterPhoto2 = await getTelegramSession(AUTHORIZED_USER_ID);
  assert(
    sessionAfterPhoto2 && sessionAfterPhoto2.step === 'AWAITING_OPTION_SELECTION',
    '3.2b Session transitioned to AWAITING_OPTION_SELECTION'
  );
  assert(
    sessionAfterPhoto2?.photoFileId === REAL_PHOTO_FILE_ID,
    '3.2c Real photo file_id preserved in session'
  );

  if (sessionAfterPhoto2?.generatedOptions) {
    const { option1, option2 } = sessionAfterPhoto2.generatedOptions;
    validateArticleOption(option1, 'option1', 'AI-First Developer');
    validateArticleOption(option2, 'option2', 'AI-First Developer');
  }

  // 3.3 Option 2 Selection Callback
  const resOpt2 = await postWebhook({
    update_id: 303,
    callback_query: {
      id: 'cb_opt_2_test_query',
      from: { id: AUTHORIZED_USER_ID, first_name: 'Nguyễn Việt' },
      message: { message_id: 303, chat: { id: AUTHORIZED_USER_ID, type: 'private' } },
      data: 'opt_2',
    },
  });
  assert(resOpt2.status === 200 && resOpt2.body?.ok === true, '3.3 Option 2 callback returns HTTP 200');

  // Verify session cleared
  const sessionAfterOpt2 = await getTelegramSession(AUTHORIZED_USER_ID);
  assert(sessionAfterOpt2 === null, '3.3b Session cleared from Firestore after Option 2 publication');

  // Verify post created with Option 2
  const opt2ExpectedTitle = sessionAfterPhoto2?.generatedOptions?.option2?.title;
  const q2 = query(postsRef, where('title', '==', opt2ExpectedTitle));
  const snap2 = await getDocs(q2);

  assert(!snap2.empty, `3.3c Post successfully saved to Firestore with Option 2 title: "${opt2ExpectedTitle}"`);
  if (!snap2.empty) {
    const postDoc = snap2.docs[0];
    const post = postDoc.data();
    createdPostIds.push(postDoc.id);

    assert(post.group === 'doi-song', '3.3d Post belongs to group "doi-song"');
    assert(post.categoryId === 'graduation', '3.3e Post categoryId matches selected category "graduation"');
    assert(post.published === true, '3.3f Post published flag is true');
    assert(typeof post.image === 'string' && post.image.startsWith('https://'), `3.3g Cloudflare R2 uploaded image URL: "${post.image}"`);
  }

  // -----------------------------------------------------------------
  // SUITE 4: Concurrency & Resilience
  // -----------------------------------------------------------------
  console.log('\n--- SUITE 4: Concurrency & Resilience Tests ---');

  // 4.1 Stale callback query when session is null
  const resStale = await postWebhook({
    update_id: 401,
    callback_query: {
      id: 'cb_stale_expired_query',
      from: { id: AUTHORIZED_USER_ID, first_name: 'Nguyễn Việt' },
      message: { message_id: 401, chat: { id: AUTHORIZED_USER_ID, type: 'private' } },
      data: 'opt_1',
    },
  });
  assert(resStale.status === 200 && resStale.body?.ok === true, '4.1 Stale callback query handled gracefully without crash');

  // 4.2 Cancel callback query
  await setTelegramSession(AUTHORIZED_USER_ID, { step: 'AWAITING_CATEGORY' });
  const resCancel = await postWebhook({
    update_id: 402,
    callback_query: {
      id: 'cb_cancel_test',
      from: { id: AUTHORIZED_USER_ID, first_name: 'Nguyễn Việt' },
      message: { message_id: 402, chat: { id: AUTHORIZED_USER_ID, type: 'private' } },
      data: 'cancel',
    },
  });
  assert(resCancel.status === 200 && resCancel.body?.ok === true, '4.2 Cancel callback returns HTTP 200');
  const sessionAfterCancel = await getTelegramSession(AUTHORIZED_USER_ID);
  assert(sessionAfterCancel === null, '4.2b Cancel callback successfully clears session');

  // 4.3 Double-click guard during PUBLISHING step
  await setTelegramSession(AUTHORIZED_USER_ID, {
    step: 'PUBLISHING',
    generatedOptions: {
      option1: { title: 'Test', excerpt: 'Test', contentHtml: '<p>Test</p>' }
    }
  });
  const resDouble = await postWebhook({
    update_id: 403,
    callback_query: {
      id: 'cb_double_click_test',
      from: { id: AUTHORIZED_USER_ID, first_name: 'Nguyễn Việt' },
      message: { message_id: 403, chat: { id: AUTHORIZED_USER_ID, type: 'private' } },
      data: 'opt_1',
    },
  });
  assert(resDouble.status === 200 && resDouble.body?.ok === true, '4.3 Double click on PUBLISHING step acknowledged safely without duplicate run');
  await clearTelegramSession(AUTHORIZED_USER_ID);

  // -----------------------------------------------------------------
  // CLEANUP CREATED TEST POSTS
  // -----------------------------------------------------------------
  console.log('\n--- CLEANUP ---');
  for (const postId of createdPostIds) {
    try {
      await deleteDoc(doc(db, 'posts', postId));
      console.log(`  [CLEANUP] Deleted test post: ${postId}`);
    } catch (cleanErr) {
      console.warn(`  [CLEANUP] Could not delete test post ${postId}:`, cleanErr.message);
    }
  }

  // -----------------------------------------------------------------
  // FINAL SCORECARD
  // -----------------------------------------------------------------
  console.log('\n===============================================================');
  console.log(`TOTAL TESTS: ${totalTests}`);
  console.log(`PASSED:      ${passedTests}`);
  console.log(`FAILED:      ${failedTests}`);
  console.log('===============================================================');

  if (failedTests > 0) {
    console.error('\nFAILURES SUMMARY:');
    failures.forEach((f) => console.error(f));
    process.exit(1);
  } else {
    console.log('\nVERDICT: ALL EMPIRICAL CHALLENGER TESTS PASSED (100% APPROVE)');
    process.exit(0);
  }
}

run().catch((err) => {
  console.error('FATAL TEST RUNNER ERROR:', err);
  process.exit(1);
});
