import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const BASE_DIR = '/Users/vietmac/Documents/CODE/WEB- FAI/fai';

console.log('================================================================');
console.log('🚀 M3 COURSE LAYOUT & 11 PAGES EMPIRICAL VERIFICATION SUITE');
console.log('================================================================\n');

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`✅ PASS: ${message}`);
    passed++;
  } else {
    console.error(`❌ FAIL: ${message}`);
    failed++;
  }
}

// 1. Check Component Files in src/components/course/
const componentFiles = [
  'CourseHero.jsx',
  'CourseOverviewStats.jsx',
  'CourseCurriculumTabs.jsx',
  'CourseHighlights.jsx',
  'CourseCTABanner.jsx',
  'CourseLayout.jsx'
];

for (const comp of componentFiles) {
  const compPath = path.join(BASE_DIR, 'src/components/course', comp);
  assert(fs.existsSync(compPath), `src/components/course/${comp} exists`);
}

// 2. Check CourseLayout client boundary
const layoutContent = fs.readFileSync(path.join(BASE_DIR, 'src/components/course/CourseLayout.jsx'), 'utf8');
assert(layoutContent.startsWith("'use client'"), "CourseLayout.jsx starts with 'use client'");

// 3. Check Data Module src/data/courses.js
const coursesDataPath = path.join(BASE_DIR, 'src/data/courses.js');
assert(fs.existsSync(coursesDataPath), 'src/data/courses.js exists');

const coursesContent = fs.readFileSync(coursesDataPath, 'utf8');
const expectedExports = [
  'COURSE_ACCP',
  'COURSE_APTECH_1NAM',
  'COURSE_APTECH_6THANG',
  'COURSE_APTECH_100_200H',
  'COURSE_ARENA_AMSP',
  'COURSE_ARENA_6_18THANG',
  'COURSE_ARENA_100H',
  'COURSE_SKILLKING_18THANG',
  'COURSE_SKILLKING_100H',
  'COURSE_CHIP_DESIGN',
  'COURSE_AI_AGENT'
];

for (const exp of expectedExports) {
  assert(coursesContent.includes(`export const ${exp}`), `courses.js exports ${exp}`);
}

// 4. Check src/data/programs.js re-export
const programsContent = fs.readFileSync(path.join(BASE_DIR, 'src/data/programs.js'), 'utf8');
assert(programsContent.includes("export * from './courses'"), "programs.js re-exports from './courses'");

// 5. Check all 11 course pages in src/app/dao-tao/
const courseRoutes = [
  { path: 'aptech/accp', dataName: 'COURSE_ACCP' },
  { path: 'aptech/1-nam', dataName: 'COURSE_APTECH_1NAM' },
  { path: 'aptech/6-thang', dataName: 'COURSE_APTECH_6THANG' },
  { path: 'aptech/100-200h', dataName: 'COURSE_APTECH_100_200H' },
  { path: 'arena/amsp', dataName: 'COURSE_ARENA_AMSP' },
  { path: 'arena/6-18-thang', dataName: 'COURSE_ARENA_6_18THANG' },
  { path: 'arena/100h', dataName: 'COURSE_ARENA_100H' },
  { path: 'skillking/18-thang', dataName: 'COURSE_SKILLKING_18THANG' },
  { path: 'skillking/100h', dataName: 'COURSE_SKILLKING_100H' },
  { path: 'chip-design', dataName: 'COURSE_CHIP_DESIGN' },
  { path: 'ai-agent', dataName: 'COURSE_AI_AGENT' }
];

let totalPageLines = 0;
for (const cr of courseRoutes) {
  const pagePath = path.join(BASE_DIR, 'src/app/dao-tao', cr.path, 'page.js');
  assert(fs.existsSync(pagePath), `Page file exists: src/app/dao-tao/${cr.path}/page.js`);
  const content = fs.readFileSync(pagePath, 'utf8');
  const lines = content.trim().split('\n').length;
  totalPageLines += lines;

  assert(!content.includes("'use client'"), `${cr.path}/page.js is a Server Component (no 'use client')`);
  assert(content.includes('export const metadata'), `${cr.path}/page.js exports SEO metadata`);
  assert(content.includes('<CourseLayout'), `${cr.path}/page.js renders <CourseLayout />`);
  assert(content.includes(cr.dataName), `${cr.path}/page.js uses ${cr.dataName}`);
  assert(lines <= 30, `${cr.path}/page.js has ${lines} lines (<= 30 lines target)`);
}

console.log(`\n📊 Total course page lines: ${totalPageLines} lines (vs baseline 5,878 lines: ${((1 - totalPageLines / 5878) * 100).toFixed(1)}% reduction)\n`);

// 6. Check curl HTTP 200 & clean SSR on all routes
for (const cr of courseRoutes) {
  const routeUrl = `http://localhost:3000/dao-tao/${cr.path}`;
  try {
    const code = execSync(`curl -s -o /dev/null -w "%{http_code}" "${routeUrl}"`).toString().trim();
    assert(code === '200', `Route ${routeUrl} returns HTTP 200 (Got: ${code})`);

    const html = execSync(`curl -s "${routeUrl}"`).toString();
    const hasError = /hydration|minified react error|internal server error/i.test(html);
    assert(!hasError, `Route ${routeUrl} has clean SSR HTML without hydration errors`);
    assert(html.length > 30000, `Route ${routeUrl} pre-rendered comprehensive HTML (${html.length} bytes)`);
  } catch (err) {
    assert(false, `Curl failed for ${routeUrl}: ${err.message}`);
  }
}

// 7. Check restricted files were NOT modified by M3
try {
  const gitDiff = execSync('git diff --name-only', { cwd: BASE_DIR }).toString();
  const restrictedPatterns = [
    'src/app/globals.css',
    'public/fonts',
    'src/app/lien-he/page.js'
  ];
  for (const pat of restrictedPatterns) {
    assert(!gitDiff.includes(pat), `Restricted target ${pat} is NOT modified in git diff`);
  }
} catch (e) {
  console.warn('Git check warning:', e.message);
}

console.log('\n================================================================');
console.log(`FINAL RESULT: ${passed} passed, ${failed} failed`);
console.log('================================================================');

if (failed > 0) {
  process.exit(1);
}
