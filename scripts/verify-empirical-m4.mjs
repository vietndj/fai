/**
 * Master Empirical End-to-End Challenger Verification Suite for Milestone 4
 * Covers Requirements R1, R2, R3, R4 and Acceptance Criteria
 */

import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { execSync } from 'child_process';

// 1. Load .env.local
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

import { collection, getDocs } from 'firebase/firestore';
import { db } from '../src/lib/firebase.js';
import { getCategories, createPost, getPostById, deletePost } from '../src/lib/firestore.js';
import { processImage } from '../src/lib/imageProcessor.js';
import { uploadToStorage, deleteFromStorage } from '../src/lib/cloudStorage.js';
import * as telegramClient from '../src/lib/telegram.js';
import { generateArticleOptions } from '../src/lib/gemini.js';

const BASE_URL = 'http://localhost:3000';
const WEBHOOK_URL = `${BASE_URL}/api/telegram/webhook`;
const UPLOAD_URL = `${BASE_URL}/api/upload`;
const SECRET_TOKEN = process.env.TELEGRAM_WEBHOOK_SECRET || 'fai_telegram_secret_token_2026';
const ALLOWED_USER_ID = parseInt(process.env.TELEGRAM_ALLOWED_USER_ID || '2050406425', 10);

const testResults = [];

function recordResult(name, pass, details = {}) {
  testResults.push({ name, pass, details });
  const icon = pass ? '✅ PASS' : '❌ FAIL';
  console.log(`${icon} [${name}]`);
  if (Object.keys(details).length > 0) {
    console.log(`   ${JSON.stringify(details, null, 2).replace(/\n/g, '\n   ')}`);
  }
}

async function runMilestone4Verification() {
  console.log('========================================================================');
  console.log('🎯 MASTER EMPIRICAL CHALLENGER VERIFICATION SUITE — MILESTONE 4');
  console.log('========================================================================\n');

  // ========================================================================
  // R1: Cloud Storage & Image Optimization Pipeline
  // ========================================================================
  console.log('--- SECTION 1: R1 Storage & Image Optimization Pipeline ---');

  // Test 1.1: Live Upload to /api/upload
  try {
    const testSvg = `
      <svg width="1800" height="1200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#ff6600"/>
            <stop offset="100%" style="stop-color:#003399"/>
          </linearGradient>
        </defs>
        <rect width="1800" height="1200" fill="url(#g)"/>
        <circle cx="900" cy="600" r="300" fill="white" opacity="0.5"/>
        <text x="900" y="600" font-size="48" fill="#1e293b" text-anchor="middle" font-family="sans-serif">
          E2E M4 CHALLENGER IMAGE
        </text>
      </svg>
    `;
    const testPngBuffer = await sharp(Buffer.from(testSvg)).png().toBuffer();

    const formData = new FormData();
    const blob = new Blob([testPngBuffer], { type: 'image/png' });
    formData.append('file', blob, 'e2e-challenger-m4.png');
    formData.append('watermark', 'true');

    const uploadRes = await fetch(UPLOAD_URL, {
      method: 'POST',
      body: formData,
    });
    const uploadData = await uploadRes.json();

    const isHttp200 = uploadRes.status === 200;
    const isSuccess = uploadData.success === true;
    const isWebp = uploadData.format === 'webp';
    const isUnder350K = (uploadData.sizeBytes || uploadData.size) < 350 * 1024;
    const hasR2Url = typeof uploadData.url === 'string' && uploadData.url.includes('r2.dev');

    recordResult('R1.1 Live Upload via /api/upload', isHttp200 && isSuccess && isWebp && isUnder350K && hasR2Url, {
      status: uploadRes.status,
      url: uploadData.url,
      format: uploadData.format,
      sizeBytes: uploadData.sizeBytes,
      under350KB: isUnder350K,
      width: uploadData.width,
      height: uploadData.height,
    });

    // Test 1.2: Verify CDN Availability & WebP Decode
    if (uploadData.url) {
      const cdnRes = await fetch(uploadData.url, { method: 'HEAD' });
      const cdnGetRes = await fetch(uploadData.url);
      const cdnBuf = Buffer.from(await cdnGetRes.arrayBuffer());
      const metadata = await sharp(cdnBuf).metadata();

      const cdnPass = cdnRes.status === 200 && cdnRes.headers.get('content-type') === 'image/webp' && metadata.format === 'webp';
      recordResult('R1.2 Public R2 CDN Fetch & Valid WebP', cdnPass, {
        headStatus: cdnRes.status,
        contentType: cdnRes.headers.get('content-type'),
        decodedFormat: metadata.format,
        width: metadata.width,
        height: metadata.height,
      });

      // Cleanup uploaded R2 test image
      if (uploadData.key) {
        await deleteFromStorage(uploadData.key).catch(() => {});
      }
    }
  } catch (err) {
    recordResult('R1.1 Live Upload via /api/upload', false, { error: err.message });
  }

  // Test 1.3: Deep Database Scan — Zero Base64 in Firestore 'posts'
  try {
    const postsSnapshot = await getDocs(collection(db, 'posts'));
    let totalPosts = 0;
    let base64Violations = [];

    postsSnapshot.forEach((docSnap) => {
      totalPosts++;
      const data = docSnap.data();
      const docId = docSnap.id;

      // Check thumbnail
      if (typeof data.thumbnail === 'string' && data.thumbnail.startsWith('data:image/')) {
        base64Violations.push({ id: docId, field: 'thumbnail', snippet: data.thumbnail.slice(0, 40) });
      }
      // Check featuredImage
      if (typeof data.featuredImage === 'string' && data.featuredImage.startsWith('data:image/')) {
        base64Violations.push({ id: docId, field: 'featuredImage', snippet: data.featuredImage.slice(0, 40) });
      }
      // Check contentHtml
      if (typeof data.contentHtml === 'string' && data.contentHtml.includes('data:image/')) {
        base64Violations.push({ id: docId, field: 'contentHtml', snippet: 'data:image found in HTML' });
      }
      // Check content
      if (typeof data.content === 'string' && data.content.includes('data:image/')) {
        base64Violations.push({ id: docId, field: 'content', snippet: 'data:image found in content' });
      }
    });

    const zeroBase64 = base64Violations.length === 0;
    recordResult('R1.3 Zero Base64 Strings in Firestore posts Collection', zeroBase64, {
      totalPostsScanned: totalPosts,
      base64ViolationsCount: base64Violations.length,
      violations: base64Violations,
    });
  } catch (err) {
    recordResult('R1.3 Zero Base64 Strings in Firestore posts Collection', false, { error: err.message });
  }

  // ========================================================================
  // R2: Telegram Bot Webhook & AI 2-Option Flow
  // ========================================================================
  console.log('\n--- SECTION 2: R2 Telegram Bot Webhook & AI 2-Option Flow ---');

  // Test 2.1: Secret Token Header Validation (401 on missing or invalid)
  try {
    const missingSecretRes = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ update_id: 90001, message: { text: 'ping' } }),
    });
    const invalidSecretRes = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Telegram-Bot-Api-Secret-Token': 'wrong_secret_token_12345',
      },
      body: JSON.stringify({ update_id: 90002, message: { text: 'ping' } }),
    });

    const secret401Pass = missingSecretRes.status === 401 && invalidSecretRes.status === 401;
    recordResult('R2.1 Secret Token Validation (401 on Missing/Invalid)', secret401Pass, {
      missingStatus: missingSecretRes.status,
      invalidStatus: invalidSecretRes.status,
    });
  } catch (err) {
    recordResult('R2.1 Secret Token Validation (401 on Missing/Invalid)', false, { error: err.message });
  }

  // Test 2.2: Sender Whitelist Protection (Reject unauthorized, allow 2050406425)
  try {
    const unauthPayload = {
      update_id: 90003,
      message: {
        message_id: 1,
        from: { id: 999999999, first_name: 'Attacker' },
        chat: { id: 999999999, type: 'private' },
        text: '/start',
      },
    };
    const unauthRes = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Telegram-Bot-Api-Secret-Token': SECRET_TOKEN,
      },
      body: JSON.stringify(unauthPayload),
    });
    const unauthData = await unauthRes.json();
    const unauthBlocked = unauthRes.status === 200 && unauthData.unauthorized === true;

    recordResult('R2.2 Sender Whitelist Enforcement', unauthBlocked && ALLOWED_USER_ID === 2050406425, {
      unauthorizedSender: 999999999,
      responseStatus: unauthRes.status,
      unauthorizedFlag: unauthData.unauthorized,
      allowedUserIdConfigured: ALLOWED_USER_ID,
    });
  } catch (err) {
    recordResult('R2.2 Sender Whitelist Enforcement', false, { error: err.message });
  }

  // Test 2.3: Category Listing from Firestore for 'doi-song'
  try {
    const categories = await getCategories('doi-song');
    const hasRequiredCategories = categories.length >= 5;
    const categorySlugs = categories.map((c) => c.id || c.slug);
    const expectedCategories = ['graduation', 'enterprise', 'sharing', 'contests', 'community'];
    const allExpectedPresent = expectedCategories.every((cat) => categorySlugs.includes(cat));

    recordResult('R2.3 Category Listing Retrieval for doi-song', hasRequiredCategories && allExpectedPresent, {
      totalCategories: categories.length,
      categories: categories.map((c) => ({ id: c.id, title: c.title, order: c.order })),
      expectedCovered: allExpectedPresent,
    });
  } catch (err) {
    recordResult('R2.3 Category Listing Retrieval for doi-song', false, { error: err.message });
  }

  // Test 2.4: Gemini 2.5 Flash Article Generator Specification & Error Handling
  try {
    const fnExists = typeof generateArticleOptions === 'function';
    let apiKeyGuardWorks = false;
    let guardMessage = '';

    const origApiKey = process.env.GEMINI_API_KEY;
    delete process.env.GEMINI_API_KEY;
    try {
      await generateArticleOptions(null, null, 'Test article topic');
    } catch (err) {
      if (err.message.includes('GEMINI_API_KEY is missing')) {
        apiKeyGuardWorks = true;
        guardMessage = err.message;
      }
    } finally {
      if (origApiKey) process.env.GEMINI_API_KEY = origApiKey;
    }

    recordResult('R2.4 Gemini 2.5 Flash Generator Contract & Guard', fnExists && apiKeyGuardWorks, {
      functionExists: fnExists,
      apiKeyGuardWorks,
      guardMessage,
    });
  } catch (err) {
    recordResult('R2.4 Gemini 2.5 Flash Generator Contract & Guard', false, { error: err.message });
  }

  // Test 2.5: Publishing Flow Saves Post to Firestore with R2 URL
  let testPostId = null;
  let testR2Key = null;
  try {
    const dummySvg = `<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg"><rect width="800" height="600" fill="#f97316"/><text x="400" y="300" font-size="30" fill="white" text-anchor="middle">E2E Publish Test</text></svg>`;
    const dummyBuf = await sharp(Buffer.from(dummySvg)).png().toBuffer();
    const processed = await processImage(dummyBuf, { maxWidth: 1200, watermark: true });
    const filename = `fai/posts/2026/09/e2e-m4-publish-${Date.now()}.webp`;
    const storageRes = await uploadToStorage(processed.buffer, filename, 'image/webp');
    testR2Key = storageRes.key;

    const createdPost = await createPost({
      title: 'E2E Challenger M4 Test Publication',
      excerpt: 'Empirical verification test publication for Milestone 4',
      content: 'Detailed empirical test publication content.',
      contentHtml: '<h3>Điểm nhấn</h3><p>Nội dung bài viết được sinh tự động.</p><blockquote>Trích dẫn xuất sắc</blockquote>',
      thumbnail: storageRes.url,
      featuredImage: storageRes.url,
      categoryId: 'graduation',
      group: 'doi-song',
      published: true,
      author: 'Challenger M4 Bot',
      readTime: '3 phút',
      order: 9999,
    });
    testPostId = createdPost.id;

    // Verify stored post
    const fetched = await getPostById(testPostId);
    const postValid = Boolean(
      fetched &&
      fetched.title === 'E2E Challenger M4 Test Publication' &&
      fetched.thumbnail.startsWith('https://') &&
      !fetched.thumbnail.includes('data:image/') &&
      fetched.published === true
    );

    recordResult('R2.5 End-to-End Publishing Pipeline (Image -> R2 -> Firestore)', postValid, {
      postId: testPostId,
      thumbnailUrl: fetched.thumbnail,
      zeroBase64: !fetched.thumbnail.includes('data:image/'),
      published: fetched.published,
    });
  } catch (err) {
    recordResult('R2.5 End-to-End Publishing Pipeline (Image -> R2 -> Firestore)', false, { error: err.message });
  } finally {
    if (testPostId) {
      await deletePost(testPostId).catch(() => {});
    }
    if (testR2Key) {
      await deleteFromStorage(testR2Key).catch(() => {});
    }
  }

  // ========================================================================
  // R3: WordPress-Grade CMS TipTap Editor
  // ========================================================================
  console.log('\n--- SECTION 3: R3 WordPress-Grade CMS TipTap Editor ---');

  // Test 3.1: TipTap Editor Architecture & Gutenberg Controls
  try {
    const editorPath = path.join(process.cwd(), 'src/components/admin/TipTapEditor.jsx');
    const editorContent = fs.readFileSync(editorPath, 'utf8');

    const hasUseClient = editorContent.includes("'use client'");
    const hasSSRDisable = editorContent.includes('immediatelyRender: false');
    const hasGutenbergToolbar =
      editorContent.includes('toggleHeading') &&
      editorContent.includes('toggleBulletList') &&
      editorContent.includes('toggleOrderedList') &&
      editorContent.includes('toggleBlockquote') &&
      editorContent.includes('setHorizontalRule') &&
      editorContent.includes('setTextAlign');
    const hasBubbleMenu = editorContent.includes('<BubbleMenu') && editorContent.includes('editor.isActive');
    const hasCaptions = editorContent.includes('article-figure') && editorContent.includes('figcaption');

    recordResult('R3.1 TipTap Editor Toolbar, Bubble Menu & Captions', hasUseClient && hasSSRDisable && hasGutenbergToolbar && hasBubbleMenu && hasCaptions, {
      useClient: hasUseClient,
      ssrSafe: hasSSRDisable,
      gutenbergToolbar: hasGutenbergToolbar,
      bubbleMenu: hasBubbleMenu,
      inlineCaptions: hasCaptions,
    });
  } catch (err) {
    recordResult('R3.1 TipTap Editor Toolbar, Bubble Menu & Captions', false, { error: err.message });
  }

  // Test 3.2: Isolated Typography (article.css)
  try {
    const cssPath = path.join(process.cwd(), 'src/app/doi-song/article.css');
    const cssContent = fs.readFileSync(cssPath, 'utf8');
    const doiSongPagePath = path.join(process.cwd(), 'src/app/doi-song/page.js');
    const doiSongContent = fs.readFileSync(doiSongPagePath, 'utf8');

    const hasUlDisc = cssContent.includes('list-style: disc !important');
    const hasOlDecimal = cssContent.includes('list-style: decimal !important');
    const hasScope = cssContent.includes('.article-body-html');
    const hasPageImport = doiSongContent.includes("import './article.css'") || doiSongContent.includes('article.css');

    recordResult('R3.2 Isolated Typography Restoring Lists & Formatting', hasUlDisc && hasOlDecimal && hasScope && hasPageImport, {
      scopedUnderArticleBodyHtml: hasScope,
      ulDiscRestored: hasUlDisc,
      olDecimalRestored: hasOlDecimal,
      importedInDoiSongPage: hasPageImport,
    });
  } catch (err) {
    recordResult('R3.2 Isolated Typography Restoring Lists & Formatting', false, { error: err.message });
  }

  // Test 3.3: ArticlePreviewModal 1:1 Modal Match
  try {
    const modalPath = path.join(process.cwd(), 'src/components/admin/ArticlePreviewModal.jsx');
    const modalContent = fs.readFileSync(modalPath, 'utf8');

    const matches850 = modalContent.includes('850px');
    const matches24 = modalContent.includes('24px');
    const hasEscape = modalContent.includes("'Escape'") || modalContent.includes('"Escape"');
    const hasBackdrop = modalContent.includes('rgba(15, 23, 42') || modalContent.includes('backdropFilter');
    const hasArticleClass = modalContent.includes('article-body-html');

    recordResult('R3.3 ArticlePreviewModal 1:1 Fidelity with /doi-song', matches850 && matches24 && hasEscape && hasArticleClass, {
      maxWidth850px: matches850,
      borderRadius24px: matches24,
      escapeListener: hasEscape,
      articleBodyHtmlScoped: hasArticleClass,
    });
  } catch (err) {
    recordResult('R3.3 ArticlePreviewModal 1:1 Fidelity with /doi-song', false, { error: err.message });
  }

  // ========================================================================
  // R4: Security & Local Development Rules
  // ========================================================================
  console.log('\n--- SECTION 4: R4 Security & Local Development Rules ---');

  // Test 4.1: Admin Route Auth Guard
  try {
    const adminLayoutPath = path.join(process.cwd(), 'src/app/admin/layout.js');
    const adminLayoutContent = fs.readFileSync(adminLayoutPath, 'utf8');

    const usesOnAuthStateChanged = adminLayoutContent.includes('onAuthStateChanged');
    const redirectsToLogin = adminLayoutContent.includes("router.push('/admin/login')");
    const blocksNonAuth = adminLayoutContent.includes('if (!user)') && adminLayoutContent.includes('return null');

    recordResult('R4.1 Admin Layout Client Auth Guard', usesOnAuthStateChanged && redirectsToLogin && blocksNonAuth, {
      onAuthStateChanged: usesOnAuthStateChanged,
      redirectsToLogin,
      blocksUnauthorizedRender: blocksNonAuth,
    });
  } catch (err) {
    recordResult('R4.1 Admin Layout Client Auth Guard', false, { error: err.message });
  }

  // Test 4.2: Local Development Rule — Zero Commits & Zero Pushes
  try {
    const gitStatus = execSync('git status --porcelain', { encoding: 'utf8' }).trim();
    const gitBranch = execSync('git rev-parse --abbrev-ref HEAD', { encoding: 'utf8' }).trim();
    const gitHead = execSync('git rev-parse HEAD', { encoding: 'utf8' }).trim();
    const gitOriginHead = execSync('git rev-parse origin/main', { encoding: 'utf8' }).trim();

    const noPushedAhead = gitHead === gitOriginHead;
    recordResult('R4.2 Zero Unrequested Commits/Pushes (Main Branch In Sync)', noPushedAhead, {
      branch: gitBranch,
      headCommit: gitHead,
      originMainCommit: gitOriginHead,
      inSyncWithOrigin: noPushedAhead,
      unstagedLocalChangesPresent: gitStatus.length > 0,
    });
  } catch (err) {
    recordResult('R4.2 Zero Unrequested Commits/Pushes (Main Branch In Sync)', false, { error: err.message });
  }

  // Test 4.3: Restricted Files Untouched
  try {
    const diffGlobals = execSync('git status --porcelain src/app/globals.css', { encoding: 'utf8' }).trim();
    const diffLienHe = execSync('git status --porcelain src/app/lien-he/page.js', { encoding: 'utf8' }).trim();
    const diffFonts = execSync('git status --porcelain public/fonts/', { encoding: 'utf8' }).trim();

    const untouched = diffGlobals === '' && diffLienHe === '' && diffFonts === '';
    recordResult('R4.3 Restricted Files Untouched (No Conflicts with Parallel Threads)', untouched, {
      globalsCssUntouched: diffGlobals === '',
      lienHeUntouched: diffLienHe === '',
      fontsUntouched: diffFonts === '',
    });
  } catch (err) {
    recordResult('R4.3 Restricted Files Untouched (No Conflicts with Parallel Threads)', false, { error: err.message });
  }

  // ========================================================================
  // Local Server Endpoints HTTP Probing
  // ========================================================================
  console.log('\n--- SECTION 5: Local Endpoints Live HTTP Probing ---');

  const endpoints = ['/doi-song', '/admin/posts', '/admin/posts/new'];
  for (const ep of endpoints) {
    try {
      const res = await fetch(`${BASE_URL}${ep}`, { method: 'HEAD' });
      recordResult(`Endpoint Probe: ${ep}`, res.status === 200, {
        endpoint: ep,
        httpStatus: res.status,
        contentType: res.headers.get('content-type'),
      });
    } catch (err) {
      recordResult(`Endpoint Probe: ${ep}`, false, { error: err.message });
    }
  }

  // ========================================================================
  // FINAL SUMMARY
  // ========================================================================
  console.log('\n========================================================================');
  console.log('📊 MASTER VERIFICATION SUITE SUMMARY');
  console.log('========================================================================');

  const passedCount = testResults.filter((r) => r.pass).length;
  const failedCount = testResults.filter((r) => !r.pass).length;

  console.log(`TOTAL CHECKS: ${testResults.length}`);
  console.log(`PASSED: ${passedCount}`);
  console.log(`FAILED: ${failedCount}`);

  if (failedCount === 0) {
    console.log('\n🏆 ALL ACCEPTANCE CRITERIA VERIFIED EMPIRICALLY! VERDICT: APPROVE ✅');
  } else {
    console.log('\n⚠️ FAILURES DETECTED! VERDICT: REQUEST_CHANGES ❌');
  }
}

runMilestone4Verification().catch((err) => {
  console.error('Fatal execution error:', err);
  process.exit(1);
});
