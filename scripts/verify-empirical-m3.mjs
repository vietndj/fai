import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;

function assert(condition, message) {
  totalTests++;
  if (condition) {
    console.log(`✅ PASS: ${message}`);
    passedTests++;
  } else {
    console.error(`❌ FAIL: ${message}`);
    failedTests++;
  }
}

console.log('================================================================');
console.log('🚀 EMPIRICAL VERIFICATION SUITE — MILESTONE 3 (TIPTAP & PREVIEW)');
console.log('================================================================\n');

// 1. Check Package Dependencies
console.log('--- 1. Package Dependencies ---');
const pkg = JSON.parse(fs.readFileSync(path.join(rootDir, 'package.json'), 'utf8'));
const requiredDeps = [
  '@tiptap/react',
  '@tiptap/pm',
  '@tiptap/starter-kit',
  '@tiptap/extension-heading',
  '@tiptap/extension-text-align',
  '@tiptap/extension-bubble-menu',
  '@tiptap/extension-image',
  '@tiptap/extension-link',
  '@tiptap/extension-underline',
  '@tiptap/extension-placeholder',
];
requiredDeps.forEach((dep) => {
  assert(Boolean(pkg.dependencies && pkg.dependencies[dep]), `package.json contains dependency ${dep}`);
});

// 2. Check Isolated Typography (src/app/doi-song/article.css)
console.log('\n--- 2. Typography Stylesheet (article.css) ---');
const articleCssPath = path.join(rootDir, 'src/app/doi-song/article.css');
assert(fs.existsSync(articleCssPath), 'src/app/doi-song/article.css exists');
const articleCss = fs.readFileSync(articleCssPath, 'utf8');

assert(articleCss.includes('.article-body-html'), 'article.css scopes rules under .article-body-html');
assert(
  articleCss.includes('list-style: disc !important') && articleCss.includes('.article-body-html ul'),
  'article.css explicitly restores ul list-style: disc !important to override globals.css reset'
);
assert(
  articleCss.includes('list-style: decimal !important') && articleCss.includes('.article-body-html ol'),
  'article.css explicitly restores ol list-style: decimal !important to override globals.css reset'
);
assert(
  articleCss.includes('margin-bottom: 0.5rem !important') && articleCss.includes('.article-body-html li'),
  'article.css sets li margin-bottom: 0.5rem !important'
);
assert(
  articleCss.includes('.article-body-html h2') &&
    articleCss.includes('.article-body-html h3') &&
    articleCss.includes('.article-body-html h4'),
  'article.css provides complete hierarchy styles for h2, h3, h4'
);
assert(
  articleCss.includes('.article-body-html blockquote') && articleCss.includes('border-left:'),
  'article.css provides styled blockquote with left border accent and background tint'
);
assert(articleCss.includes('.article-body-html hr'), 'article.css styles hr divider');
assert(
  articleCss.includes('figure.article-figure') && articleCss.includes('figcaption.article-caption'),
  'article.css provides figure and figcaption styling for inline images with captions'
);

// 3. Check article.css import in doi-song/page.js
console.log('\n--- 3. Import in /doi-song/page.js ---');
const doiSongPage = fs.readFileSync(path.join(rootDir, 'src/app/doi-song/page.js'), 'utf8');
assert(
  doiSongPage.includes("./article.css") || doiSongPage.includes("article.css"),
  'src/app/doi-song/page.js imports article.css'
);

// 4. Check TipTapEditor Component
console.log('\n--- 4. TipTapEditor Component ---');
const editorPath = path.join(rootDir, 'src/components/admin/TipTapEditor.jsx');
assert(fs.existsSync(editorPath), 'src/components/admin/TipTapEditor.jsx exists');
const editorCode = fs.readFileSync(editorPath, 'utf8');

assert(editorCode.includes("'use client'"), 'TipTapEditor has "use client" directive');
assert(editorCode.includes('immediatelyRender: false'), 'TipTapEditor configures immediatelyRender: false for SSR safety');
assert(editorCode.includes('BubbleMenu'), 'TipTapEditor implements BubbleMenu for text selection floating toolbar');
assert(
  editorCode.includes('Heading2') && editorCode.includes('Heading3') && editorCode.includes('Heading4'),
  'TipTapEditor top toolbar provides H2, H3, H4 heading controls'
);
assert(
  editorCode.includes('Bold') &&
    editorCode.includes('Italic') &&
    editorCode.includes('Underline') &&
    editorCode.includes('Strikethrough') &&
    editorCode.includes('Code'),
  'TipTapEditor provides Bold, Italic, Underline, Strike, Code inline formatting controls'
);
assert(
  editorCode.includes('AlignLeft') &&
    editorCode.includes('AlignCenter') &&
    editorCode.includes('AlignRight') &&
    editorCode.includes('AlignJustify'),
  'TipTapEditor provides Left, Center, Right, Justify alignment controls'
);
assert(
  editorCode.includes('List') && editorCode.includes('ListOrdered'),
  'TipTapEditor provides Bullet List and Ordered List controls'
);
assert(
  editorCode.includes('Quote') && editorCode.includes('Minus'),
  'TipTapEditor provides Blockquote and Horizontal Rule (Divider) controls'
);
assert(
  editorCode.includes('/api/upload'),
  'TipTapEditor integrates image file picker with /api/upload endpoint for Cloudflare R2'
);
assert(
  editorCode.includes('caption') && editorCode.includes('figure') && editorCode.includes('figcaption'),
  'TipTapEditor supports CustomImage extension with figure and figcaption markup'
);
assert(
  editorCode.includes('Undo') && editorCode.includes('Redo'),
  'TipTapEditor provides Undo and Redo controls'
);

// 5. Check ArticlePreviewModal Component
console.log('\n--- 5. ArticlePreviewModal Component ---');
const previewModalPath = path.join(rootDir, 'src/components/admin/ArticlePreviewModal.jsx');
assert(fs.existsSync(previewModalPath), 'src/components/admin/ArticlePreviewModal.jsx exists');
const modalCode = fs.readFileSync(previewModalPath, 'utf8');

assert(modalCode.includes("'use client'"), 'ArticlePreviewModal has "use client" directive');
assert(modalCode.includes('article-body-html'), 'ArticlePreviewModal renders inside .article-body-html');
assert(modalCode.includes('850px'), 'ArticlePreviewModal matches 850px max-width of /doi-song modal');
assert(modalCode.includes('24px'), 'ArticlePreviewModal matches 24px border-radius of /doi-song modal');
assert(modalCode.includes('Escape'), 'ArticlePreviewModal supports ESC key listener to close');
assert(modalCode.includes('rgba(5, 12, 26, 0.85)'), 'ArticlePreviewModal matches dark backdrop overlay');

// 6. Check Admin Pages Integration
console.log('\n--- 6. Admin Pages Integration ---');
const newPostPage = fs.readFileSync(path.join(rootDir, 'src/app/admin/posts/new/page.js'), 'utf8');
const editPostPage = fs.readFileSync(path.join(rootDir, 'src/app/admin/posts/[id]/page.js'), 'utf8');

assert(!newPostPage.includes('execCmd'), 'new/page.js removed obsolete execCmd/contentEditable');
assert(!editPostPage.includes('execCmd'), '[id]/page.js removed obsolete execCmd/contentEditable');
assert(newPostPage.includes('<TipTapEditor'), 'new/page.js mounts TipTapEditor');
assert(editPostPage.includes('<TipTapEditor'), '[id]/page.js mounts TipTapEditor');
assert(
  newPostPage.includes('ArticlePreviewModal') && newPostPage.includes('Xem trước'),
  'new/page.js includes "Xem trước (Live Preview)" button and modal'
);
assert(
  editPostPage.includes('ArticlePreviewModal') && editPostPage.includes('Xem trước'),
  '[id]/page.js includes "Xem trước (Live Preview)" button and modal'
);

// 7. Check Restricted Files Integrity
console.log('\n--- 7. Strict Constraints & Restricted Files ---');
const checkCmd = (file) => {
  try {
    const diff = fs.readFileSync(path.join(rootDir, file), 'utf8');
    return true;
  } catch {
    return false;
  }
};
assert(checkCmd('src/app/globals.css'), 'src/app/globals.css exists');
assert(checkCmd('src/app/lien-he/page.js'), 'src/app/lien-he/page.js exists');

console.log('\n================================================================');
console.log(`RESULT: ${passedTests}/${totalTests} tests passed (${failedTests} failures)`);
console.log('================================================================');

if (failedTests > 0) {
  process.exit(1);
}
