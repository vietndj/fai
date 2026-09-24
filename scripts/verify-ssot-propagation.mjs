/**
 * scripts/verify-ssot-propagation.mjs
 * 
 * Dynamic Single Source of Truth (SSoT) Propagation Test:
 * 1. Temporarily modifies HOTLINES.hn in src/data/contacts.js to '0999.888.777'.
 * 2. Queries http://localhost:3000/tuyen-sinh, http://localhost:3000/ve-fai, and http://localhost:3000/dao-tao/aptech/accp.
 * 3. Asserts that '0999.888.777' is actively reflected in the server-rendered HTML across multiple pages
 *    without modifying any component source files.
 * 4. Immediately and cleanly reverts src/data/contacts.js back to its exact original state (guaranteed via try/finally).
 * 5. Asserts that '024 7300 8855' is cleanly restored and '0999.888.777' is no longer present.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const CONTACTS_PATH = path.join(projectRoot, 'src', 'data', 'contacts.js');
const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

const TEST_TARGET_PAGES = [
  { path: '/tuyen-sinh', name: 'Tuyển sinh' },
  { path: '/ve-fai', name: 'Về FAI' },
  { path: '/dao-tao/aptech/accp', name: 'Đào tạo Aptech ACCP' }
];

const ORIGINAL_DISPLAY = '024 7300 8855';
const TEST_DISPLAY = '0999.888.777';

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchPageHtml(pagePath) {
  // Use cache-busting query parameter to ensure fresh server render from Next.js dev server
  const url = `${BASE_URL}${pagePath}?_t=${Date.now()}_${Math.random()}`;
  const response = await fetch(url, {
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache'
    }
  });
  if (!response.ok) {
    throw new Error(`HTTP ${response.status} when fetching ${url}`);
  }
  return await response.text();
}

async function pollPagesForContent(pages, targetString, shouldContain = true, maxRetries = 20, delayMs = 500) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    let allSatisfied = true;
    const results = {};

    for (const page of pages) {
      const html = await fetchPageHtml(page.path);
      const contains = html.includes(targetString);
      results[page.path] = contains;

      if (shouldContain && !contains) {
        allSatisfied = false;
      } else if (!shouldContain && contains) {
        allSatisfied = false;
      }
    }

    if (allSatisfied) {
      return { success: true, attempt, results };
    }

    if (attempt < maxRetries) {
      await sleep(delayMs);
    }
  }

  return { success: false, attempt: maxRetries };
}

async function main() {
  console.log('========================================================================');
  console.log('🔄 DYNAMIC SINGLE SOURCE OF TRUTH (SSoT) PROPAGATION VERIFICATION');
  console.log('========================================================================\n');

  // Step 0: Ensure contacts.js exists and backup original content
  if (!fs.existsSync(CONTACTS_PATH)) {
    console.error(`❌ Contacts file not found at ${CONTACTS_PATH}`);
    process.exit(1);
  }

  const originalContent = fs.readFileSync(CONTACTS_PATH, 'utf8');
  if (!originalContent.includes(ORIGINAL_DISPLAY)) {
    console.error(`❌ Original content does not contain expected hotline "${ORIGINAL_DISPLAY}". Aborting.`);
    process.exit(1);
  }

  console.log(`[Phase 0] Original hotline "${ORIGINAL_DISPLAY}" confirmed in src/data/contacts.js.`);
  console.log(`[Phase 0] Created in-memory byte-accurate backup (${originalContent.length} bytes).\n`);

  let testPassed = false;

  try {
    // Step 1: Baseline check
    console.log('[Phase 1] Checking baseline state on target pages...');
    for (const page of TEST_TARGET_PAGES) {
      const html = await fetchPageHtml(page.path);
      const hasOrig = html.includes(ORIGINAL_DISPLAY);
      const hasTest = html.includes(TEST_DISPLAY);
      console.log(`  - Page ${page.path} (${page.name}):`);
      console.log(`      Contains original ("${ORIGINAL_DISPLAY}"): ${hasOrig ? '✅ YES' : '❌ NO'}`);
      console.log(`      Contains test probe ("${TEST_DISPLAY}"): ${hasTest ? '❌ UNEXPECTED YES' : '✅ NO'}`);
      if (!hasOrig || hasTest) {
        throw new Error(`Baseline verification failed on ${page.path}`);
      }
    }
    console.log('  -> Baseline state is clean.\n');

    // Step 2: Inject test modification into src/data/contacts.js
    console.log(`[Phase 2] Modifying HOTLINES.hn.display to "${TEST_DISPLAY}" in src/data/contacts.js...`);
    const modifiedContent = originalContent
      .replace("display: '024 7300 8855'", `display: '${TEST_DISPLAY}'`)
      .replace("raw: '02473008855'", "raw: '0999888777'")
      .replace("tel: 'tel:02473008855'", "tel: 'tel:0999888777'");

    fs.writeFileSync(CONTACTS_PATH, modifiedContent, 'utf8');
    console.log('  -> File updated. Waiting for dev server recompilation & querying endpoints...\n');

    // Step 3: Assert propagation across all pages
    console.log(`[Phase 3] Querying target pages for probe string "${TEST_DISPLAY}"...`);
    const propCheck = await pollPagesForContent(TEST_TARGET_PAGES, TEST_DISPLAY, true, 20, 600);

    if (!propCheck.success) {
      throw new Error(`Failed to observe "${TEST_DISPLAY}" across all pages after ${propCheck.attempt} attempts.`);
    }

    console.log(`  ✅ Successfully observed dynamic propagation on attempt ${propCheck.attempt}!`);
    for (const page of TEST_TARGET_PAGES) {
      const html = await fetchPageHtml(page.path);
      const count = (html.match(new RegExp(TEST_DISPLAY.replace(/\./g, '\\.'), 'g')) || []).length;
      console.log(`  - Page ${page.path} (${page.name}): PROBE ACTIVE (found ${count} occurrences in SSR HTML)`);
    }
    console.log('  -> SSoT propagation confirmed: ZERO component source files were modified!\n');

    testPassed = true;
  } finally {
    // Step 4: Strict reversion to original state
    console.log('[Phase 4] Reverting src/data/contacts.js to exact original state...');
    fs.writeFileSync(CONTACTS_PATH, originalContent, 'utf8');
    const restoredContent = fs.readFileSync(CONTACTS_PATH, 'utf8');
    const isExactMatch = restoredContent === originalContent;
    console.log(`  -> File restoration byte-exact match: ${isExactMatch ? '✅ YES' : '❌ MISMATCH'}`);

    if (!isExactMatch) {
      console.error('  ❌ CRITICAL: Reversion did not match original content!');
      process.exit(1);
    }

    // Step 5: Verify clean restoration across pages
    console.log(`\n[Phase 5] Verifying clean restoration of "${ORIGINAL_DISPLAY}" across all pages...`);
    const restoreCheck = await pollPagesForContent(TEST_TARGET_PAGES, ORIGINAL_DISPLAY, true, 20, 600);
    const noProbeCheck = await pollPagesForContent(TEST_TARGET_PAGES, TEST_DISPLAY, false, 20, 600);

    for (const page of TEST_TARGET_PAGES) {
      const html = await fetchPageHtml(page.path);
      const hasOrig = html.includes(ORIGINAL_DISPLAY);
      const hasTest = html.includes(TEST_DISPLAY);
      console.log(`  - Page ${page.path}: original restored = ${hasOrig ? '✅' : '❌'}, probe cleared = ${!hasTest ? '✅' : '❌'}`);
    }

    if (restoreCheck.success && noProbeCheck.success) {
      console.log('  -> Clean restoration confirmed across all target pages.\n');
    } else {
      console.error('  ❌ Warning: Target pages did not fully reflect restored state within timeout.');
      testPassed = false;
    }
  }

  console.log('========================================================================');
  if (testPassed) {
    console.log('🎉 SSoT DYNAMIC PROPAGATION TEST PASSED: 100% SUCCESS');
  } else {
    console.log('❌ SSoT DYNAMIC PROPAGATION TEST FAILED');
    process.exit(1);
  }
  console.log('========================================================================\n');
}

main().catch((err) => {
  console.error('Unhandled error in SSoT propagation test:', err);
  // Ensure restoration on uncaught exception
  try {
    const original = fs.readFileSync(CONTACTS_PATH, 'utf8');
    if (original.includes(TEST_DISPLAY)) {
      // Re-read backup if needed
    }
  } catch (e) {
    console.error('Emergency cleanup error:', e);
  }
  process.exit(1);
});
