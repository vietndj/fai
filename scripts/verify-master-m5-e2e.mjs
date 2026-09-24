/**
 * scripts/verify-master-m5-e2e.mjs
 * 
 * Master E2E Integration & Verification Runner for Milestone 5:
 * Runs all Milestone 5 tests and outputs a unified execution summary:
 * 1. Dynamic Single Source of Truth (SSoT) Propagation Test
 * 2. Full 15-Route Health Probing
 * 3. Responsive & Layout Safeguards Audit
 * 4. Targeted ESLint Verification
 * 5. Next.js Production Build (34/34 routes)
 */

import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const suiteResults = [];

function runSuite(suiteName, command) {
  console.log(`\n========================================================================`);
  console.log(`🚀 RUNNING: ${suiteName}`);
  console.log(`   Command: ${command}`);
  console.log(`========================================================================\n`);

  const startTime = Date.now();
  try {
    const output = execSync(command, {
      cwd: projectRoot,
      stdio: 'inherit',
      env: { ...process.env, CI: 'true' }
    });
    const duration = ((Date.now() - startTime) / 1000).toFixed(2);
    suiteResults.push({ name: suiteName, passed: true, duration: `${duration}s` });
    console.log(`\n✅ SUITE PASSED: ${suiteName} (${duration}s)\n`);
  } catch (err) {
    const duration = ((Date.now() - startTime) / 1000).toFixed(2);
    suiteResults.push({ name: suiteName, passed: false, duration: `${duration}s`, error: err.message });
    console.error(`\n❌ SUITE FAILED: ${suiteName} (${duration}s)\n`);
    throw err;
  }
}

async function main() {
  const masterStart = Date.now();
  console.log('╔══════════════════════════════════════════════════════════════════════╗');
  console.log('║        MILESTONE 5 MASTER E2E INTEGRATION & VERIFICATION             ║');
  console.log('╚══════════════════════════════════════════════════════════════════════╝');

  try {
    // 1. SSoT Propagation
    runSuite('Task 1: SSoT Dynamic Propagation Test', 'node scripts/verify-ssot-propagation.mjs');

    // 2. 15-Route Health Probing
    runSuite('Task 2: Full 15-Route Health Probing', 'node scripts/verify-route-health.mjs');

    // 3. Responsive & Layout Safeguards
    runSuite('Task 3: Responsive & Layout Safeguards Audit', 'node scripts/verify-responsive-safeguards.mjs');

    // 4. Targeted ESLint
    runSuite(
      'Task 4A: Targeted ESLint Code Quality',
      'npx eslint src/data/ src/components/tuyen-sinh/ src/components/ve-fai/ src/components/course/ src/components/Footer.jsx src/app/tuyen-sinh/ src/app/ve-fai/ src/app/dao-tao/'
    );

    // 5. Next.js Production Build
    runSuite('Task 4B: Next.js Production Build (34 Routes)', 'npm run build');

    const totalDuration = ((Date.now() - masterStart) / 1000).toFixed(2);

    console.log('\n╔══════════════════════════════════════════════════════════════════════╗');
    console.log('║                    MASTER VERIFICATION SUMMARY                       ║');
    console.log('╚══════════════════════════════════════════════════════════════════════╝');
    suiteResults.forEach((s, idx) => {
      const icon = s.passed ? '✅ PASS' : '❌ FAIL';
      console.log(` ${icon} [${idx + 1}/5] ${s.name.padEnd(50)} | ${s.duration}`);
    });
    console.log('------------------------------------------------------------------------');
    console.log(` Total Time: ${totalDuration}s | All 5 Suites Passed Cleanly: 100%`);
    console.log('========================================================================\n');
  } catch (error) {
    console.error('\n❌ MASTER VERIFICATION ABORTED DUE TO SUITE FAILURE.');
    process.exit(1);
  }
}

main();
