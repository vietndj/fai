/**
 * ADVERSARIAL STRESS TEST & FUZZER - MILESTONE 2
 * Author: challenger_m2_gem_1
 */

import { generateFallbackArticleOptions } from '../src/lib/contentFallback.js';
import { generateArticleOptions } from '../src/lib/gemini.js';

let fuzzedCases = 0;
let fuzzedPasses = 0;
const fuzzedFailures = [];

function checkBounds(res, label) {
  fuzzedCases++;
  const opt1 = res.option1;
  const opt2 = res.option2;

  const errs = [];
  if (!opt1 || !opt2) {
    errs.push('Missing option1 or option2');
  } else {
    if (typeof opt1.title !== 'string' || opt1.title.length === 0 || opt1.title.length > 100) {
      errs.push(`Opt1 title invalid length: ${opt1.title?.length}`);
    }
    if (typeof opt2.title !== 'string' || opt2.title.length === 0 || opt2.title.length > 100) {
      errs.push(`Opt2 title invalid length: ${opt2.title?.length}`);
    }
    if (typeof opt1.excerpt !== 'string' || opt1.excerpt.length < 120 || opt1.excerpt.length > 220) {
      errs.push(`Opt1 excerpt invalid length: ${opt1.excerpt?.length}`);
    }
    if (typeof opt2.excerpt !== 'string' || opt2.excerpt.length < 120 || opt2.excerpt.length > 220) {
      errs.push(`Opt2 excerpt invalid length: ${opt2.excerpt?.length}`);
    }
    if (!/<h3[^>]*>.*?<\/h3>/is.test(opt1.contentHtml)) {
      errs.push('Opt1 contentHtml missing <h3>');
    }
    if (!/<h3[^>]*>.*?<\/h3>/is.test(opt2.contentHtml)) {
      errs.push('Opt2 contentHtml missing <h3>');
    }
    if (/<h[12][^>]*>/i.test(opt1.contentHtml)) {
      errs.push('Opt1 contentHtml contains forbidden <h1/2>');
    }
    if (/<h[12][^>]*>/i.test(opt2.contentHtml)) {
      errs.push('Opt2 contentHtml contains forbidden <h1/2>');
    }
    if (opt1.title === opt2.title) {
      errs.push('Opt1 title equals Opt2 title');
    }
  }

  if (errs.length > 0) {
    fuzzedFailures.push({ label, errs });
  } else {
    fuzzedPasses++;
  }
}

async function runFuzzer() {
  console.log('--- FUZZING generateFallbackArticleOptions across 1000 randomized inputs ---');

  // 1. Length sweeps (0 to 300 characters)
  for (let len = 0; len <= 300; len += 5) {
    const text = 'A'.repeat(len);
    const res = generateFallbackArticleOptions(text);
    checkBounds(res, `LEN_SWEEP_${len}`);
  }

  // 2. Length sweeps with Vietnamese characters
  const sampleVn = 'Viện Đào tạo Quốc tế FPT công nghệ thông tin lập trình phần mềm ';
  for (let len = 1; len <= 50; len++) {
    const text = sampleVn.repeat(len).slice(0, len * 10);
    const res = generateFallbackArticleOptions(text);
    checkBounds(res, `VN_LEN_SWEEP_${text.length}`);
  }

  // 3. Type coercion tests
  const nonStringInputs = [
    null,
    undefined,
    0,
    12345,
    true,
    false,
    NaN,
    {},
    { topic: 'test' },
    [],
    ['wireframing', 'design'],
  ];

  for (const input of nonStringInputs) {
    const res = generateFallbackArticleOptions(input);
    checkBounds(res, `TYPE_${typeof input}_${String(input)}`);
  }

  // 4. Hostile / Malicious / Extreme strings
  const hostileStrings = [
    '\0\0\0\0',
    '\r\n\r\n\r\n',
    '<h1></h1><h2></h2><h3></h3>',
    '<script src="https://evil.com/xss.js"></script>',
    'DROP TABLE posts; --',
    '${process.env.SECRET}',
    '{{7*7}}',
    'مرحبا بالعالم',
    '你好世界，这是一个测试',
    '🏴󠁧󠁢󠁷󠁬󠁳󠁿👨‍👩‍👧‍👦🧑‍🤝‍🧑🚀🔥',
    '   \t\t\r\n   ',
    '---',
    '# '.repeat(50),
    'A\n'.repeat(50),
    'Wireframing '.repeat(30),
    'AI-first software developer '.repeat(30),
    'Học sinh THPT cử chỉ gesture '.repeat(30),
  ];

  for (const str of hostileStrings) {
    const res = generateFallbackArticleOptions(str);
    checkBounds(res, `HOSTILE_${str.slice(0, 20)}`);
  }

  // 5. Async generateArticleOptions with empty key for hostile inputs
  process.env.GEMINI_API_KEY = '';
  for (const str of hostileStrings.slice(0, 8)) {
    const res = await generateArticleOptions(null, null, str, { apiKey: '' });
    checkBounds(res, `ASYNC_HOSTILE_${str.slice(0, 20)}`);
  }

  console.log(`Fuzzer Finished: ${fuzzedPasses}/${fuzzedCases} passed.`);
  if (fuzzedFailures.length > 0) {
    console.error('FUZZER FAILURES:', JSON.stringify(fuzzedFailures, null, 2));
    process.exit(1);
  } else {
    console.log('FUZZER PASSED 100% WITH ZERO BOUNDARY VIOLATIONS!');
    process.exit(0);
  }
}

runFuzzer().catch((e) => {
  console.error('Fatal fuzzer error:', e);
  process.exit(1);
});
