/**
 * scripts/verify-route-health.mjs
 * 
 * Full Route Health Probing:
 * Verifies all 15 key routes on http://localhost:3000:
 * 1.  / (Home)
 * 2.  /tuyen-sinh
 * 3.  /ve-fai
 * 4.  /lien-he
 * 5.  /dao-tao/aptech/accp
 * 6.  /dao-tao/aptech/1-nam
 * 7.  /dao-tao/aptech/6-thang
 * 8.  /dao-tao/aptech/100-200h
 * 9.  /dao-tao/arena/amsp
 * 10. /dao-tao/arena/6-18-thang
 * 11. /dao-tao/arena/100h
 * 12. /dao-tao/skillking/18-thang
 * 13. /dao-tao/skillking/100h
 * 14. /dao-tao/chip-design
 * 15. /dao-tao/ai-agent
 * 
 * Asserts:
 * - HTTP Status 200
 * - Non-empty HTML payload (> 10KB)
 * - Valid HTML structure (<html, <body, </html>)
 * - Zero hydration error signatures in SSR payload
 */

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

const KEY_ROUTES = [
  { path: '/', name: 'Home' },
  { path: '/tuyen-sinh', name: 'Tuyển sinh' },
  { path: '/ve-fai', name: 'Về FAI' },
  { path: '/lien-he', name: 'Liên hệ' },
  { path: '/dao-tao/aptech/accp', name: 'Aptech ACCP' },
  { path: '/dao-tao/aptech/1-nam', name: 'Aptech 1 Năm' },
  { path: '/dao-tao/aptech/6-thang', name: 'Aptech 6 Tháng' },
  { path: '/dao-tao/aptech/100-200h', name: 'Aptech 100-200h' },
  { path: '/dao-tao/arena/amsp', name: 'Arena AMSP' },
  { path: '/dao-tao/arena/6-18-thang', name: 'Arena 6-18 Tháng' },
  { path: '/dao-tao/arena/100h', name: 'Arena 100h' },
  { path: '/dao-tao/skillking/18-thang', name: 'Skillking 18 Tháng' },
  { path: '/dao-tao/skillking/100h', name: 'Skillking 100h' },
  { path: '/dao-tao/chip-design', name: 'Jetking Chip Design' },
  { path: '/dao-tao/ai-agent', name: 'Jetking AI Agent' }
];

async function probeRoute(route) {
  const startTime = Date.now();
  const url = `${BASE_URL}${route.path}`;
  const response = await fetch(url);
  const latency = Date.now() - startTime;
  const html = await response.text();

  const is200 = response.status === 200;
  const isHtml = (response.headers.get('content-type') || '').includes('text/html');
  const sizeBytes = Buffer.byteLength(html, 'utf8');
  const isNonEmpty = sizeBytes > 10000;
  const hasValidTags = html.includes('<html') && html.includes('<body') && html.includes('</html>');
  const hasHydrationError = html.includes('Hydration failed') || html.includes('Minified React error #418') || html.includes('Minified React error #423');

  const passed = is200 && isNonEmpty && hasValidTags && !hasHydrationError;

  return {
    route: route.path,
    name: route.name,
    status: response.status,
    passed,
    sizeBytes,
    latencyMs: latency,
    isHtml,
    hasValidTags,
    hasHydrationError
  };
}

async function main() {
  console.log('========================================================================');
  console.log('🌐 FULL 15-ROUTE HEALTH PROBING SUITE');
  console.log(`Base URL: ${BASE_URL}`);
  console.log('========================================================================\n');

  const results = [];
  let allPassed = true;

  for (let i = 0; i < KEY_ROUTES.length; i++) {
    const route = KEY_ROUTES[i];
    try {
      const res = await probeRoute(route);
      results.push(res);
      const icon = res.passed ? '✅ PASS' : '❌ FAIL';
      const sizeKB = (res.sizeBytes / 1024).toFixed(1);
      console.log(
        `${icon} [${String(i + 1).padStart(2, '0')}/15] ${route.path.padEnd(28)} | HTTP ${res.status} | ${sizeKB.padStart(6)} KB | ${String(res.latencyMs).padStart(4)}ms | ${route.name}`
      );
      if (!res.passed) {
        allPassed = false;
        console.error(`     -> Detail: status=${res.status}, size=${res.sizeBytes}, validTags=${res.hasValidTags}, hydrationErr=${res.hasHydrationError}`);
      }
    } catch (err) {
      allPassed = false;
      console.error(`❌ FAIL [${String(i + 1).padStart(2, '0')}/15] ${route.path.padEnd(28)} | ERROR: ${err.message}`);
      results.push({ route: route.path, name: route.name, passed: false, error: err.message });
    }
  }

  console.log('\n------------------------------------------------------------------------');
  console.log(`Total Routes Tested: ${KEY_ROUTES.length}`);
  console.log(`Passed: ${results.filter((r) => r.passed).length}/${KEY_ROUTES.length}`);
  console.log(`Failed: ${results.filter((r) => !r.passed).length}/${KEY_ROUTES.length}`);
  console.log('========================================================================');

  if (allPassed) {
    console.log('🎉 ALL 15 KEY ROUTES RETURNED HTTP 200 WITH VALID HTML PAYLOADS!');
  } else {
    console.log('❌ SOME ROUTES FAILED HEALTH CHECK!');
    process.exit(1);
  }
  console.log('========================================================================\n');
}

main().catch((err) => {
  console.error('Fatal probing suite error:', err);
  process.exit(1);
});
