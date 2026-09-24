/**
 * EMPIRICAL TEST HARNESS - MILESTONE 2
 * Author: challenger_m2_gem_1
 * Verifies:
 * 1. generateFallbackArticleOptions directly
 * 2. generateArticleOptions with GEMINI_API_KEY=""
 * 3. 3 required FPT Aptech topics:
 *    - "Wireframing – Thiết kế từ góc nhìn của người dùng"
 *    - "AI-first software developer: Làm chủ ai để phát triển phần mềm và kiến tạo giá trị cho doanh nghiệp"
 *    - "Học sinh THPT chinh phục AI tại FPT Aptech: Tự tay phát triển ứng dụng điều khiển bằng cử chỉ"
 * 4. Generic topic(s) and adversarial stress inputs
 * 5. Strict Assertions:
 *    - option1.title.length <= 100 && option2.title.length <= 100
 *    - option1.excerpt.length >= 120 && option1.excerpt.length <= 220
 *    - option2.excerpt.length >= 120 && option2.excerpt.length <= 220
 *    - contentHtml includes <h3> and does NOT include <h1> or <h2> (case-insensitive)
 *    - generateArticleOptions never throws when GEMINI_API_KEY is empty
 */

import { generateFallbackArticleOptions } from '../src/lib/contentFallback.js';
import { generateArticleOptions } from '../src/lib/gemini.js';

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;
const failures = [];

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

function validateArticleOption(option, optionName, topicLabel) {
  // Title assertions: non-empty, <= 100 chars
  assert(
    typeof option.title === 'string' && option.title.length > 0 && option.title.length <= 100,
    `[${topicLabel}] ${optionName}.title length <= 100 (actual: ${option.title?.length}, value: "${option.title}")`,
    `Invalid title length: ${option.title?.length}`
  );

  // Excerpt assertions: between 120 and 220 chars
  assert(
    typeof option.excerpt === 'string' && option.excerpt.length >= 120 && option.excerpt.length <= 220,
    `[${topicLabel}] ${optionName}.excerpt length between 120 and 220 (actual: ${option.excerpt?.length}, value: "${option.excerpt}")`,
    `Invalid excerpt length: ${option.excerpt?.length}`
  );

  // ReadTime assertions: non-empty string
  assert(
    typeof option.readTime === 'string' && option.readTime.length > 0,
    `[${topicLabel}] ${optionName}.readTime is defined (actual: "${option.readTime}")`
  );

  // HTML semantic heading assertions: must include <h3>, must NOT include <h1> or <h2>
  const html = option.contentHtml || '';
  const hasH3 = /<h3[^>]*>.*?<\/h3>/is.test(html);
  const hasH1 = /<h1[^>]*>/i.test(html);
  const hasH2 = /<h2[^>]*>/i.test(html);

  assert(
    hasH3,
    `[${topicLabel}] ${optionName}.contentHtml contains <h3> tags`,
    `Missing <h3> tag in HTML`
  );

  assert(
    !hasH1,
    `[${topicLabel}] ${optionName}.contentHtml does NOT contain <h1> tags`,
    `Contains forbidden <h1> tag`
  );

  assert(
    !hasH2,
    `[${topicLabel}] ${optionName}.contentHtml does NOT contain <h2> tags`,
    `Contains forbidden <h2> tag`
  );
}

async function runEmpiricalSuite() {
  console.log('================================================================');
  console.log('EMPIRICAL VERIFICATION HARNESS: MILESTONE 2 (GEMINI & FALLBACK)');
  console.log('================================================================\n');

  // Test Set 1: Required FPT Aptech Topics + Generic Topics
  const coreTopics = [
    {
      id: 'APTECH_1_WIREFRAMING',
      topic: 'Wireframing – Thiết kế từ góc nhìn của người dùng',
      expectedDomain: 'UI/UX & Product Design',
    },
    {
      id: 'APTECH_2_AI_FIRST',
      topic: 'AI-first software developer: Làm chủ ai để phát triển phần mềm và kiến tạo giá trị cho doanh nghiệp',
      expectedDomain: 'AI-First Software Engineering',
    },
    {
      id: 'APTECH_3_THPT_AI',
      topic: 'Học sinh THPT chinh phục AI tại FPT Aptech: Tự tay phát triển ứng dụng điều khiển bằng cử chỉ',
      expectedDomain: 'Youth Technology & Gesture AI',
    },
    {
      id: 'GENERIC_1_GRADUATION',
      topic: 'Lễ Tốt Nghiệp và Trao Bằng Tân Khoa FAI 2026',
      expectedDomain: 'FAI Campus & Student Life',
    },
    {
      id: 'GENERIC_2_SEMINAR',
      topic: 'Hội thảo Trí tuệ Nhân tạo và Xu hướng Tuyển dụng Công nghệ 2026',
      expectedDomain: 'FAI Campus & Student Life',
    },
    {
      id: 'GENERIC_3_CLUB',
      topic: 'Sinh hoạt CLB Sáng tạo Trẻ FAI cuối tuần',
      expectedDomain: 'FAI Campus & Student Life',
    },
  ];

  console.log('--- SUITE 1: Direct generateFallbackArticleOptions on Topics ---');
  for (const item of coreTopics) {
    console.log(`\nTesting fallback generator for: "${item.topic}"`);
    const res = generateFallbackArticleOptions(item.topic);

    assert(res.isFallback === true, `[${item.id}] isFallback is true`);
    assert(res.domain === item.expectedDomain, `[${item.id}] domain matches expected (actual: "${res.domain}", expected: "${item.expectedDomain}")`);
    assert(typeof res.brand === 'string' && res.brand.length > 0, `[${item.id}] brand is defined: "${res.brand}"`);

    validateArticleOption(res.option1, 'option1', item.id);
    validateArticleOption(res.option2, 'option2', item.id);

    // Verify distinct titles and content between option1 and option2
    assert(res.option1.title !== res.option2.title, `[${item.id}] Option 1 and Option 2 have distinct titles`);
    assert(res.option1.contentHtml !== res.option2.contentHtml, `[${item.id}] Option 1 and Option 2 have distinct content`);
  }

  console.log('\n--- SUITE 2: generateArticleOptions with GEMINI_API_KEY="" ---');
  // Explicitly ensure process.env.GEMINI_API_KEY is empty
  const oldEnvKey = process.env.GEMINI_API_KEY;
  process.env.GEMINI_API_KEY = '';

  for (const item of coreTopics) {
    console.log(`\nTesting generateArticleOptions (empty key) for: "${item.topic}"`);
    let res;
    let threw = false;

    try {
      res = await generateArticleOptions(null, null, item.topic, { apiKey: '' });
    } catch (err) {
      threw = true;
      assert(false, `[${item.id}] generateArticleOptions must never throw`, err.message);
    }

    if (!threw && res) {
      assert(true, `[${item.id}] generateArticleOptions executed without throwing`);
      assert(res.isFallback === true, `[${item.id}] isFallback is true when GEMINI_API_KEY is empty`);
      validateArticleOption(res.option1, 'option1', `API_${item.id}`);
      validateArticleOption(res.option2, 'option2', `API_${item.id}`);
    }
  }

  console.log('\n--- SUITE 3: Adversarial Edge Cases & Stress Inputs ---');
  const adversarialCases = [
    { label: 'EMPTY_STRING', input: '' },
    { label: 'WHITESPACE_ONLY', input: '   \n\t  \r\n   ' },
    { label: 'VERY_LONG_STRING_500', input: 'AI-First Software Developer '.repeat(20) },
    { label: 'HTML_INJECTION', input: '<h1>Fake Title</h1><script>alert(1)</script><h2>Subtitle</h2>' },
    { label: 'MARKDOWN_HEADINGS', input: '# Heading 1\n## Heading 2\n### Heading 3\nSome raw text' },
    { label: 'UNICODE_AND_EMOJIS', input: '🎉🚀 Học sinh THPT chinh phục AI tại FPT Aptech 🤖🔥' },
    { label: 'NEWLINES_SPLIT', input: 'Dòng 1: Tiêu đề đầu\nDòng 2: Nội dung mở rộng\nDòng 3: Kết luận' },
    { label: 'SPECIAL_CHARS', input: '!@#$%^&*()_+~`|}{[]:;?><,./-=' },
    { label: 'SURROGATE_PAIR_EMOJI', input: '👨‍💻👩‍💻🧑‍🎓 AI Developer 2026' },
  ];

  for (const adv of adversarialCases) {
    console.log(`\nAdversarial test: [${adv.label}]`);
    let res;
    let threw = false;

    try {
      res = await generateArticleOptions(null, null, adv.input, { apiKey: '' });
    } catch (err) {
      threw = true;
      assert(false, `[${adv.label}] Must not throw on adversarial input`, err.message);
    }

    if (!threw && res) {
      assert(true, `[${adv.label}] Executed cleanly without throw`);
      assert(res.isFallback === true, `[${adv.label}] isFallback is true`);
      validateArticleOption(res.option1, 'option1', adv.label);
      validateArticleOption(res.option2, 'option2', adv.label);
    }
  }

  console.log('\n--- SUITE 4: Invalid API Key Resilience (API Failure Emulation) ---');
  console.log('Testing with bogus API key to simulate network/API refusal...');
  let apiFailRes;
  let apiFailThrew = false;
  try {
    apiFailRes = await generateArticleOptions(
      Buffer.from('fake_image_bytes'),
      'image/jpeg',
      'AI-first software developer: Làm chủ ai để phát triển phần mềm',
      { apiKey: 'AIzaSy_BOGUS_INVALID_KEY_FOR_TESTING_123456789' }
    );
  } catch (err) {
    apiFailThrew = true;
    assert(false, 'generateArticleOptions should catch API error and fallback instead of throwing', err.message);
  }

  if (!apiFailThrew && apiFailRes) {
    assert(true, 'generateArticleOptions cleanly intercepted API failure');
    assert(apiFailRes.isFallback === true, 'Returned fallback result when API call failed');
    assert(Boolean(apiFailRes.fallbackReason), `Fallback reason recorded: "${apiFailRes.fallbackReason}"`);
    validateArticleOption(apiFailRes.option1, 'option1', 'API_FAIL_RESILIENCE');
    validateArticleOption(apiFailRes.option2, 'option2', 'API_FAIL_RESILIENCE');
  }

  // Restore environment
  process.env.GEMINI_API_KEY = oldEnvKey;

  console.log('\n================================================================');
  console.log(`SUMMARY: Total: ${totalTests} | Passed: ${passedTests} | Failed: ${failedTests}`);
  console.log('================================================================');

  if (failedTests > 0) {
    console.error('\nFAILURES DETECTED:');
    failures.forEach((f) => console.error(f));
    process.exit(1);
  } else {
    console.log('\nALL EMPIRICAL ASSERTIONS PASSED PERFECTLY!');
    process.exit(0);
  }
}

runEmpiricalSuite().catch((err) => {
  console.error('Fatal unhandled error in test suite:', err);
  process.exit(1);
});
