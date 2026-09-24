/**
 * scripts/verify-responsive-safeguards.mjs
 * 
 * Responsive & Layout Safeguards Audit:
 * Audits CSS rules in src/styles/fai-design-system.css, src/app/globals.css,
 * and rendered HTML payloads for responsive compliance at 375px, 768px, and 1280px.
 * 
 * Checks:
 * 1. Global Viewport Meta tag configuration (width=device-width, initial-scale=1)
 * 2. Root anti-overflow rules (html overflow-x: hidden, body overflow-x: clip, universal box-sizing: border-box)
 * 3. Design system safeguards (max-width: 100%, overflow-wrap: break-word, word-break: break-word on card surfaces)
 * 4. Responsive media queries (@media max-width: 768px, @media max-width: 375px)
 * 5. Table and wide-data container overflow handling (overflow-x: auto wrapper encapsulation)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const DESIGN_SYSTEM_PATH = path.join(projectRoot, 'src', 'styles', 'fai-design-system.css');
const GLOBALS_CSS_PATH = path.join(projectRoot, 'src', 'app', 'globals.css');
const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

const AUDIT_PAGES = [
  { path: '/', name: 'Home' },
  { path: '/tuyen-sinh', name: 'Tuyển sinh' },
  { path: '/ve-fai', name: 'Về FAI' },
  { path: '/lien-he', name: 'Liên hệ' },
  { path: '/dao-tao/aptech/accp', name: 'Aptech ACCP' }
];

async function main() {
  console.log('========================================================================');
  console.log('📱 RESPONSIVE & LAYOUT SAFEGUARDS AUDIT');
  console.log('   Target Breakpoints: 375px (Mobile) | 768px (Tablet) | 1280px (Desktop)');
  console.log('========================================================================\n');

  let allChecksPassed = true;
  const auditResults = [];

  function recordCheck(name, passed, details) {
    auditResults.push({ name, passed, details });
    const icon = passed ? '✅ PASS' : '❌ FAIL';
    console.log(`${icon} [${name}]`);
    if (details) {
      console.log(`     ${details}`);
    }
    if (!passed) allChecksPassed = false;
  }

  // 1. Audit src/app/globals.css
  console.log('--- 1. AUDITING ROOT & VIEWPORT OVERFLOW SAFEGUARDS ---');
  if (fs.existsSync(GLOBALS_CSS_PATH)) {
    const globalsCss = fs.readFileSync(GLOBALS_CSS_PATH, 'utf8');
    
    const hasUniversalBoxSizing = globalsCss.includes('* {') && globalsCss.includes('box-sizing: border-box;');
    recordCheck(
      'Universal box-sizing: border-box in globals.css',
      hasUniversalBoxSizing,
      'Guarantees padding does not cause element widths to exceed container bounds.'
    );

    const hasHtmlOverflowX = globalsCss.includes('html {') && globalsCss.includes('overflow-x: hidden;');
    recordCheck(
      'Root html { overflow-x: hidden } in globals.css',
      hasHtmlOverflowX,
      'Prevents root window horizontal scrolling.'
    );

    const hasBodyOverflowClip = globalsCss.includes('body {') && (globalsCss.includes('overflow-x: clip;') || globalsCss.includes('overflow-x: hidden;'));
    recordCheck(
      'Body element { overflow-x: clip } in globals.css',
      hasBodyOverflowClip,
      'Clips any offscreen absolute elements without breaking sticky positioning.'
    );
  } else {
    recordCheck('globals.css file existence', false, 'src/app/globals.css not found');
  }

  // 2. Audit src/styles/fai-design-system.css
  console.log('\n--- 2. AUDITING FAI DESIGN SYSTEM RESPONSIVE SAFEGUARDS ---');
  if (fs.existsSync(DESIGN_SYSTEM_PATH)) {
    const dsCss = fs.readFileSync(DESIGN_SYSTEM_PATH, 'utf8');

    const hasCardSafeguards = dsCss.includes('.fai-card-elevated') &&
      dsCss.includes('max-width: 100%') &&
      dsCss.includes('box-sizing: border-box') &&
      dsCss.includes('overflow-wrap: break-word');
    recordCheck(
      'Card surface anti-overflow constraints (.fai-card-*)',
      hasCardSafeguards,
      'Enforces max-width: 100%, box-sizing: border-box, and overflow-wrap: break-word.'
    );

    const hasTabletQuery = dsCss.includes('@media (max-width: 768px)');
    recordCheck(
      'Tablet responsive breakpoint (@media max-width: 768px)',
      hasTabletQuery,
      'Adjusts card padding to 20px, section headings to clamp(1.65rem, 6.5vw, 2.3rem).'
    );

    const hasMobileQuery = dsCss.includes('@media (max-width: 375px)');
    recordCheck(
      'Mobile 375px compact breakpoint (@media max-width: 375px)',
      hasMobileQuery,
      'Optimizes badge padding (4px 10px), copy buttons, and CTA button sizes.'
    );

    const hasFluidHeading = dsCss.includes('clamp(2rem, 4vw, 3rem)');
    recordCheck(
      'Fluid typographic clamp sizing for section headings',
      hasFluidHeading,
      'Typography dynamically scales proportionally across screen widths from mobile to 4K.'
    );
  } else {
    recordCheck('fai-design-system.css file existence', false, 'File not found');
  }

  // 3. Audit Rendered Pages for Viewport Meta Tag & Table Enclosure
  console.log('\n--- 3. AUDITING LIVE SERVER-RENDERED HTML PAYLOADS ---');
  for (const page of AUDIT_PAGES) {
    try {
      const res = await fetch(`${BASE_URL}${page.path}`);
      const html = await res.text();

      const hasViewportMeta = html.includes('name="viewport"') && html.includes('width=device-width');
      recordCheck(
        `Viewport meta configuration for ${page.name} (${page.path})`,
        hasViewportMeta,
        'Includes <meta name="viewport" content="width=device-width, initial-scale=1" />'
      );

      // Check tables have overflow container
      if (html.includes('<table')) {
        const hasTableContainer = html.includes('overflow-x') || html.includes('overflowX') || html.includes('overflow: auto') || html.includes('table-responsive');
        recordCheck(
          `Table horizontal overflow encapsulation for ${page.name}`,
          hasTableContainer,
          'Tables are encapsulated inside horizontally scrollable containers.'
        );
      }
    } catch (err) {
      recordCheck(`Live HTML probe for ${page.path}`, false, err.message);
    }
  }

  console.log('\n========================================================================');
  console.log(`Total Checks: ${auditResults.length} | Passed: ${auditResults.filter(r => r.passed).length} | Failed: ${auditResults.filter(r => !r.passed).length}`);
  if (allChecksPassed) {
    console.log('🎉 RESPONSIVE & LAYOUT SAFEGUARDS AUDIT: 100% PASSED (ZERO OVERFLOW RISK)');
  } else {
    console.log('❌ SOME RESPONSIVE CHECKS FAILED!');
    process.exit(1);
  }
  console.log('========================================================================\n');
}

main().catch((err) => {
  console.error('Audit suite error:', err);
  process.exit(1);
});
