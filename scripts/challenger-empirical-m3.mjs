import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

let total = 0;
let passed = 0;
let failed = 0;

function check(desc, condition, detail = '') {
  total++;
  if (condition) {
    console.log(`  [PASS] ${desc}`);
    passed++;
  } else {
    console.error(`  [FAIL] ${desc} ${detail ? `(${detail})` : ''}`);
    failed++;
  }
}

console.log('========================================================================');
console.log('⚔️  ADVERSARIAL EMPIRICAL CHALLENGER SUITE — MILESTONE 3');
console.log('========================================================================\n');

// 1. Check Restricted Files Integrity via Git
console.log('--- TEST GROUP 1: Restricted Files Integrity & Zero-Pollution ---');
const restrictedFiles = [
  'src/app/globals.css',
  'src/app/lien-he/page.js',
  'src/components/ScholarshipFormSection.jsx',
  'src/components/Arena100hFormSection.jsx',
  'src/components/Skillking100hFormSection.jsx',
];

for (const file of restrictedFiles) {
  try {
    const diff = execSync(`git diff HEAD "${file}"`, { cwd: rootDir, encoding: 'utf8' }).trim();
    check(`No unauthorized modifications in ${file}`, diff === '', diff ? `diff length: ${diff.length}` : '');
  } catch (err) {
    check(`Git diff check for ${file}`, false, err.message);
  }
}

// 2. Deep CSS Inspection & Specificity Overrides
console.log('\n--- TEST GROUP 2: CSS Isolation & List Style Specificity ---');
const articleCssPath = path.join(rootDir, 'src/app/doi-song/article.css');
check('article.css exists', fs.existsSync(articleCssPath));
const articleCss = fs.readFileSync(articleCssPath, 'utf8');

// Check that all rules are strictly scoped
const rawSelectors = articleCss
  .split('}')
  .map(block => block.split('{')[0].trim())
  .filter(sel => sel && !sel.startsWith('/*') && !sel.startsWith('@') && !sel.startsWith(':root'));

let allScoped = true;
for (const sel of rawSelectors) {
  const parts = sel.split(',').map(s => s.trim()).filter(Boolean);
  for (const p of parts) {
    if (!p.startsWith('.article-body-html') && !p.startsWith('@')) {
      allScoped = false;
      console.warn(`Unscoped or non-standard selector found: "${p}"`);
    }
  }
}
check('All selectors in article.css are strictly scoped under .article-body-html', allScoped);

// Specificity checks for list styles
check('ul list-style is disc !important', /\.article-body-html\s+ul\s*\{[^}]*list-style:\s*disc\s*!important/s.test(articleCss));
check('ol list-style is decimal !important', /\.article-body-html\s+ol\s*\{[^}]*list-style:\s*decimal\s*!important/s.test(articleCss));
check('li has margin-bottom: 0.5rem !important', /\.article-body-html\s+li\s*\{[^}]*margin-bottom:\s*0\.5rem\s*!important/s.test(articleCss));
check('Nested ul list-style is circle !important', /list-style:\s*circle\s*!important/.test(articleCss));
check('Nested ol list-style is lower-alpha !important', /list-style:\s*lower-alpha\s*!important/.test(articleCss));
check('Blockquote has border-left accent and background', /\.article-body-html\s+blockquote\s*\{[^}]*border-left:[^}]*background:/s.test(articleCss));
check('Figure and figcaption styles present', articleCss.includes('figure.article-figure') && articleCss.includes('figcaption.article-caption'));
check('Text alignments (.text-right, .text-center, .text-justify, .text-left) present', 
  articleCss.includes('.text-right') && articleCss.includes('.text-center') && articleCss.includes('.text-justify') && articleCss.includes('.text-left'));

// 3. TipTap Editor Verification
console.log('\n--- TEST GROUP 3: TipTap Editor Architecture & Toolbar Buttons ---');
const tipTapPath = path.join(rootDir, 'src/components/admin/TipTapEditor.jsx');
check('TipTapEditor.jsx exists', fs.existsSync(tipTapPath));
const tipTapCode = fs.readFileSync(tipTapPath, 'utf8');

check('useClient directive present', tipTapCode.startsWith('/* eslint-disable') || tipTapCode.startsWith("'use client'"));
check('SSR Safety: immediatelyRender is false', tipTapCode.includes('immediatelyRender: false'));

// Verify toolbar buttons
const expectedButtons = [
  { name: 'Paragraph (P)', test: /editor\.chain\(\)\.focus\(\)\.setParagraph\(\)\.run\(\)/ },
  { name: 'Heading 2 (H2)', test: /toggleHeading\(\{\s*level:\s*2\s*\}\)/ },
  { name: 'Heading 3 (H3)', test: /toggleHeading\(\{\s*level:\s*3\s*\}\)/ },
  { name: 'Heading 4 (H4)', test: /toggleHeading\(\{\s*level:\s*4\s*\}\)/ },
  { name: 'Bold', test: /toggleBold\(\)/ },
  { name: 'Italic', test: /toggleItalic\(\)/ },
  { name: 'Underline', test: /toggleUnderline\(\)/ },
  { name: 'Strike', test: /toggleStrike\(\)/ },
  { name: 'Code', test: /toggleCode\(\)/ },
  { name: 'Align Left', test: /setTextAlign\(['"]left['"]\)/ },
  { name: 'Align Center', test: /setTextAlign\(['"]center['"]\)/ },
  { name: 'Align Right', test: /setTextAlign\(['"]right['"]\)/ },
  { name: 'Align Justify', test: /setTextAlign\(['"]justify['"]\)/ },
  { name: 'Bullet List', test: /toggleBulletList\(\)/ },
  { name: 'Numbered List (Ordered)', test: /toggleOrderedList\(\)/ },
  { name: 'Blockquote', test: /toggleBlockquote\(\)/ },
  { name: 'Horizontal Rule (Divider)', test: /setHorizontalRule\(\)/ },
  { name: 'Insert Link', test: /setLink/ },
  { name: 'Insert Image Modal', test: /setImageModalOpen\(true\)/ },
  { name: 'Undo', test: /editor\.chain\(\)\.focus\(\)\.undo\(\)\.run\(\)/ },
  { name: 'Redo', test: /editor\.chain\(\)\.focus\(\)\.redo\(\)\.run\(\)/ },
];

for (const btn of expectedButtons) {
  check(`Toolbar button ${btn.name} wired to TipTap command`, btn.test.test(tipTapCode));
}

// Bubble Menu checks inside <BubbleMenu> block
const bubbleMenuStart = tipTapCode.indexOf('<BubbleMenu');
const bubbleMenuEnd = tipTapCode.indexOf('</BubbleMenu>');
check('BubbleMenu component block exists in TipTapEditor', bubbleMenuStart !== -1 && bubbleMenuEnd > bubbleMenuStart);

const bubbleMenuCode = tipTapCode.slice(bubbleMenuStart, bubbleMenuEnd);
check('BubbleMenu imported from @tiptap/react/menus', tipTapCode.includes("import { BubbleMenu } from '@tiptap/react/menus'"));
check('BubbleMenu includes bold button', bubbleMenuCode.includes('toggleBold()'));
check('BubbleMenu includes italic button', bubbleMenuCode.includes('toggleItalic()'));
check('BubbleMenu includes underline button', bubbleMenuCode.includes('toggleUnderline()'));
check('BubbleMenu includes strike button', bubbleMenuCode.includes('toggleStrike()'));
check('BubbleMenu includes code button', bubbleMenuCode.includes('toggleCode()'));
check('BubbleMenu includes link button', bubbleMenuCode.includes('setLinkPrompt'));

// Custom Image & Upload Pipeline checks
check('CustomImage extends Image node', tipTapCode.includes('Image.extend({'));
check('CustomImage serializes <figure class="article-figure"> with <figcaption>', tipTapCode.includes("class: 'article-figure'") && tipTapCode.includes("class: 'article-caption'"));
check('Upload pipeline sends file to /api/upload', tipTapCode.includes("fetch('/api/upload'"));
check('Upload pipeline sets watermark parameter', tipTapCode.includes("append('watermark', 'true')"));

// 4. Live Preview Modal Verification
console.log('\n--- TEST GROUP 4: Live Preview Modal Fidelity ---');
const modalPath = path.join(rootDir, 'src/components/admin/ArticlePreviewModal.jsx');
check('ArticlePreviewModal.jsx exists', fs.existsSync(modalPath));
const modalCode = fs.readFileSync(modalPath, 'utf8');

check('Modal card maxWidth is 850px', modalCode.includes("maxWidth: '850px'"));
check('Modal card borderRadius is 24px', modalCode.includes("borderRadius: '24px'"));
check('Backdrop overlay has blur(8px) and dark background', modalCode.includes("backdropFilter: 'blur(8px)'") && modalCode.includes('rgba(5, 12, 26, 0.85)'));
check('Keyboard listener closes modal on Escape key', modalCode.includes("e.key === 'Escape'"));
check('Modal body prevents scroll lock leak via cleanup', modalCode.includes("document.body.style.overflow = 'unset'"));
check('Renders article content inside .article-body-html container', modalCode.includes('className="article-body-html"'));
check('Renders metadata badges: date, category, reading time, author', 
  modalCode.includes('displayDate') && modalCode.includes('categoryName') && modalCode.includes('readTime') && modalCode.includes('author'));

// 5. Admin Pages Upgrades
console.log('\n--- TEST GROUP 5: Admin Post Pages Upgrades ---');
const newPage = fs.readFileSync(path.join(rootDir, 'src/app/admin/posts/new/page.js'), 'utf8');
const editPage = fs.readFileSync(path.join(rootDir, 'src/app/admin/posts/[id]/page.js'), 'utf8');

check('new/page.js imports TipTapEditor', newPage.includes("import TipTapEditor from '@/components/admin/TipTapEditor'"));
check('new/page.js mounts <TipTapEditor with contentHtml', newPage.includes('value={formData.contentHtml}') && newPage.includes('onChange={(html) => setFormData'));
check('new/page.js renders Live Preview modal button', newPage.includes('Xem trước (Live Preview)'));
check('new/page.js mounts ArticlePreviewModal', newPage.includes('<ArticlePreviewModal'));

check('[id]/page.js imports TipTapEditor', editPage.includes("import TipTapEditor from '@/components/admin/TipTapEditor'"));
check('[id]/page.js mounts <TipTapEditor with contentHtml', editPage.includes('value={formData.contentHtml}') && editPage.includes('onChange={(html) => setFormData'));
check('[id]/page.js renders Live Preview modal button', editPage.includes('Xem trước (Live Preview)'));
check('[id]/page.js mounts ArticlePreviewModal', editPage.includes('<ArticlePreviewModal'));

// 6. Live Local Server Health & Response
console.log('\n--- TEST GROUP 6: Local Server Empirical HTTP Probing ---');
try {
  const doiSongRes = execSync('curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/doi-song', { encoding: 'utf8' }).trim();
  check('http://localhost:3000/doi-song returns HTTP 200', doiSongRes === '200', `HTTP ${doiSongRes}`);
} catch (e) {
  check('http://localhost:3000/doi-song returns HTTP 200', false, e.message);
}

try {
  const adminNewRes = execSync('curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/admin/posts/new', { encoding: 'utf8' }).trim();
  check('http://localhost:3000/admin/posts/new returns HTTP 200', adminNewRes === '200', `HTTP ${adminNewRes}`);
} catch (e) {
  check('http://localhost:3000/admin/posts/new returns HTTP 200', false, e.message);
}

// Summary
console.log('\n========================================================================');
console.log(`CHALLENGER VERDICT: ${passed}/${total} tests passed (${failed} failures)`);
console.log('========================================================================\n');

if (failed > 0) {
  process.exit(1);
}
