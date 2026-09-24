import sharp from 'sharp';
import crypto from 'crypto';
import fs from 'fs';

const BASE_URL = 'http://localhost:3000';
const TARGET_MAX_BYTES = 350 * 1024; // 358,400 bytes

async function runAdversarialSuite() {
  console.log('================================================================');
  console.log('CHALLENGER M1 R2: ADVERSARIAL VERIFICATION SUITE');
  console.log('================================================================\n');

  const report = [];

  function record(category, testName, passed, details) {
    report.push({ category, testName, passed, details });
    const mark = passed ? '✅ PASS' : '❌ FAIL';
    console.log(`${mark} [${category}] ${testName}`);
    if (details) console.log(`   Details: ${JSON.stringify(details, null, 2)}`);
  }

  // =========================================================================
  // 1. MICRO / THIN IMAGES (Defect 1)
  // =========================================================================
  console.log('\n--- 1. MICRO / THIN IMAGES VERIFICATION ---');

  // 1a: 100x100 thumbnail
  try {
    const thumbBuf = await sharp({
      create: { width: 100, height: 100, channels: 3, background: { r: 255, g: 80, b: 0 } },
    }).png().toBuffer();

    const fd = new FormData();
    fd.append('file', new Blob([thumbBuf], { type: 'image/png' }), 'thumb_100x100.png');

    const res = await fetch(`${BASE_URL}/api/upload`, { method: 'POST', body: fd });
    const data = await res.json();
    const passed = res.status === 200 && data.success === true && data.format === 'webp';
    record('Micro/Thin Images', '100x100 thumbnail upload', passed, {
      status: res.status,
      success: data.success,
      format: data.format,
      dimensions: `${data.width}x${data.height}`,
      sizeBytes: data.sizeBytes,
      url: data.url,
    });
  } catch (err) {
    record('Micro/Thin Images', '100x100 thumbnail upload', false, { error: err.message });
  }

  // 1b: 300x25 banner
  try {
    const bannerBuf = await sharp({
      create: { width: 300, height: 25, channels: 3, background: { r: 0, g: 150, b: 255 } },
    }).png().toBuffer();

    const fd = new FormData();
    fd.append('file', new Blob([bannerBuf], { type: 'image/png' }), 'banner_300x25.png');

    const res = await fetch(`${BASE_URL}/api/upload`, { method: 'POST', body: fd });
    const data = await res.json();
    const passed = res.status === 200 && data.success === true && data.format === 'webp';
    record('Micro/Thin Images', '300x25 banner upload', passed, {
      status: res.status,
      success: data.success,
      format: data.format,
      dimensions: `${data.width}x${data.height}`,
      sizeBytes: data.sizeBytes,
      url: data.url,
    });
  } catch (err) {
    record('Micro/Thin Images', '300x25 banner upload', false, { error: err.message });
  }

  // 1c: Extreme thin ratio 500x10 horizontal line
  try {
    const thinBuf = await sharp({
      create: { width: 500, height: 10, channels: 3, background: { r: 50, g: 200, b: 50 } },
    }).png().toBuffer();

    const fd = new FormData();
    fd.append('file', new Blob([thinBuf], { type: 'image/png' }), 'line_500x10.png');

    const res = await fetch(`${BASE_URL}/api/upload`, { method: 'POST', body: fd });
    const data = await res.json();
    const passed = res.status === 200 && data.success === true;
    record('Micro/Thin Images', '500x10 extreme horizontal line', passed, {
      status: res.status,
      success: data.success,
      dimensions: `${data.width}x${data.height}`,
    });
  } catch (err) {
    record('Micro/Thin Images', '500x10 extreme horizontal line', false, { error: err.message });
  }

  // 1d: Extreme thin ratio 15x500 vertical sliver
  try {
    const vertBuf = await sharp({
      create: { width: 15, height: 500, channels: 3, background: { r: 200, g: 50, b: 200 } },
    }).png().toBuffer();

    const fd = new FormData();
    fd.append('file', new Blob([vertBuf], { type: 'image/png' }), 'sliver_15x500.png');

    const res = await fetch(`${BASE_URL}/api/upload`, { method: 'POST', body: fd });
    const data = await res.json();
    const passed = res.status === 200 && data.success === true;
    record('Micro/Thin Images', '15x500 extreme vertical sliver', passed, {
      status: res.status,
      success: data.success,
      dimensions: `${data.width}x${data.height}`,
    });
  } catch (err) {
    record('Micro/Thin Images', '15x500 extreme vertical sliver', false, { error: err.message });
  }

  // =========================================================================
  // 2. HIGH-ENTROPY IMAGES (Defect 2)
  // =========================================================================
  console.log('\n--- 2. HIGH-ENTROPY NOISE VERIFICATION ---');

  let highEntropyUrl = null;
  // 2a: 1600x1200 random RGB noise
  try {
    console.log('Generating 1600x1200 random noise buffer (5.76 MB raw)...');
    const noiseBytes = crypto.randomBytes(1600 * 1200 * 3);
    const noisePng = await sharp(noiseBytes, { raw: { width: 1600, height: 1200, channels: 3 } })
      .png()
      .toBuffer();

    console.log(`Sending 1600x1200 noise (${noisePng.length} bytes PNG) to /api/upload...`);
    const fd = new FormData();
    fd.append('file', new Blob([noisePng], { type: 'image/png' }), 'noise_1600x1200.png');

    const startTime = Date.now();
    const res = await fetch(`${BASE_URL}/api/upload`, { method: 'POST', body: fd });
    const elapsedMs = Date.now() - startTime;
    const data = await res.json();

    highEntropyUrl = data.url;
    const sizePass = data.sizeBytes <= TARGET_MAX_BYTES;
    const statusPass = res.status === 200 && data.success === true;
    const passed = statusPass && sizePass;

    record('High Entropy', '1600x1200 random noise <= 350KB', passed, {
      status: res.status,
      success: data.success,
      outputSizeBytes: data.sizeBytes,
      outputSizeKB: (data.sizeBytes / 1024).toFixed(2),
      targetMaxBytes: TARGET_MAX_BYTES,
      underLimitBy: TARGET_MAX_BYTES - data.sizeBytes,
      dimensions: `${data.width}x${data.height}`,
      elapsedMs,
      url: data.url,
    });
  } catch (err) {
    record('High Entropy', '1600x1200 random noise <= 350KB', false, { error: err.message });
  }

  // 2b: 1600x1600 maximum square random RGB noise
  try {
    console.log('Generating 1600x1600 random noise buffer (7.68 MB raw)...');
    const noiseBytes = crypto.randomBytes(1600 * 1600 * 3);
    const noisePng = await sharp(noiseBytes, { raw: { width: 1600, height: 1600, channels: 3 } })
      .png()
      .toBuffer();

    const fd = new FormData();
    fd.append('file', new Blob([noisePng], { type: 'image/png' }), 'noise_1600x1600.png');

    const res = await fetch(`${BASE_URL}/api/upload`, { method: 'POST', body: fd });
    const data = await res.json();

    const sizePass = data.sizeBytes <= TARGET_MAX_BYTES;
    const statusPass = res.status === 200 && data.success === true;
    const passed = statusPass && sizePass;

    record('High Entropy', '1600x1600 max square noise <= 350KB', passed, {
      status: res.status,
      success: data.success,
      outputSizeBytes: data.sizeBytes,
      outputSizeKB: (data.sizeBytes / 1024).toFixed(2),
      targetMaxBytes: TARGET_MAX_BYTES,
      underLimitBy: TARGET_MAX_BYTES - data.sizeBytes,
      dimensions: `${data.width}x${data.height}`,
    });
  } catch (err) {
    record('High Entropy', '1600x1600 max square noise <= 350KB', false, { error: err.message });
  }

  // =========================================================================
  // 3. NEGATIVE TESTING ON /api/upload (Defect 4)
  // =========================================================================
  console.log('\n--- 3. NEGATIVE ADVERSARIAL TESTING ON /api/upload ---');

  // 4a: text/plain file
  try {
    const textBlob = new Blob(['Hello World Plain Text'], { type: 'text/plain' });
    const fd = new FormData();
    fd.append('file', textBlob, 'document.txt');
    const res = await fetch(`${BASE_URL}/api/upload`, { method: 'POST', body: fd });
    const data = await res.json();
    const passed = res.status === 400 && data.success === false;
    record('Negative Testing', 'text/plain upload returns 400', passed, {
      status: res.status,
      success: data.success,
      error: data.error,
    });
  } catch (err) {
    record('Negative Testing', 'text/plain upload returns 400', false, { error: err.message });
  }

  // 4b: PDF file
  try {
    const pdfBlob = new Blob(['%PDF-1.4\n%...\n%%EOF'], { type: 'application/pdf' });
    const fd = new FormData();
    fd.append('file', pdfBlob, 'contract.pdf');
    const res = await fetch(`${BASE_URL}/api/upload`, { method: 'POST', body: fd });
    const data = await res.json();
    const passed = res.status === 400 && data.success === false;
    record('Negative Testing', 'application/pdf upload returns 400', passed, {
      status: res.status,
      success: data.success,
      error: data.error,
    });
  } catch (err) {
    record('Negative Testing', 'application/pdf upload returns 400', false, { error: err.message });
  }

  // 4c: binary garbage with application/octet-stream
  try {
    const binBlob = new Blob([crypto.randomBytes(1024)], { type: 'application/octet-stream' });
    const fd = new FormData();
    fd.append('file', binBlob, 'garbage.bin');
    const res = await fetch(`${BASE_URL}/api/upload`, { method: 'POST', body: fd });
    const data = await res.json();
    const passed = res.status === 400 && data.success === false;
    record('Negative Testing', 'binary garbage (octet-stream) returns 400', passed, {
      status: res.status,
      success: data.success,
      error: data.error,
    });
  } catch (err) {
    record('Negative Testing', 'binary garbage (octet-stream) returns 400', false, { error: err.message });
  }

  // 4d: corrupted image (disguised as image/png)
  try {
    const fakeImgBlob = new Blob([crypto.randomBytes(512)], { type: 'image/png' });
    const fd = new FormData();
    fd.append('file', fakeImgBlob, 'corrupt.png');
    const res = await fetch(`${BASE_URL}/api/upload`, { method: 'POST', body: fd });
    const data = await res.json();
    const passed = res.status === 400 && data.success === false;
    record('Negative Testing', 'corrupted image buffer (disguised PNG) returns 400', passed, {
      status: res.status,
      success: data.success,
      error: data.error,
    });
  } catch (err) {
    record('Negative Testing', 'corrupted image buffer (disguised PNG) returns 400', false, { error: err.message });
  }

  // 4e: empty POST request
  try {
    const res = await fetch(`${BASE_URL}/api/upload`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: '{}',
    });
    const data = await res.json();
    const passed = res.status === 400 && data.success === false;
    record('Negative Testing', 'empty JSON POST body returns 400', passed, {
      status: res.status,
      success: data.success,
      error: data.error,
    });
  } catch (err) {
    record('Negative Testing', 'empty JSON POST body returns 400', false, { error: err.message });
  }

  // 4f: malformed multipart boundary
  try {
    const res = await fetch(`${BASE_URL}/api/upload`, {
      method: 'POST',
      headers: { 'Content-Type': 'multipart/form-data; boundary=----MalformedBoundary' },
      body: '----MalformedBoundary\r\nContent-Disposition: form-data; name="file"\r\n\r\nBadData',
    });
    const data = await res.json();
    const passed = res.status === 400 && data.success === false;
    record('Negative Testing', 'malformed multipart boundary returns 400', passed, {
      status: res.status,
      success: data.success,
      error: data.error,
    });
  } catch (err) {
    record('Negative Testing', 'malformed multipart boundary returns 400', false, { error: err.message });
  }

  // 4g: empty file (0 bytes)
  try {
    const emptyBlob = new Blob([], { type: 'image/png' });
    const fd = new FormData();
    fd.append('file', emptyBlob, 'empty.png');
    const res = await fetch(`${BASE_URL}/api/upload`, { method: 'POST', body: fd });
    const data = await res.json();
    const passed = res.status === 400 && data.success === false;
    record('Negative Testing', 'empty file (0 bytes) returns 400', passed, {
      status: res.status,
      success: data.success,
      error: data.error,
    });
  } catch (err) {
    record('Negative Testing', 'empty file (0 bytes) returns 400', false, { error: err.message });
  }

  // 4h: file > 25MB (test with 26 MB allocation)
  try {
    console.log('Testing oversized file (>25MB: 26MB)...');
    const hugeBuf = Buffer.alloc(26 * 1024 * 1024, 0);
    const hugeBlob = new Blob([hugeBuf], { type: 'image/png' });
    const fd = new FormData();
    fd.append('file', hugeBlob, 'oversized_26mb.png');

    const res = await fetch(`${BASE_URL}/api/upload`, { method: 'POST', body: fd });
    const data = await res.json();
    const passed = res.status === 400 && data.success === false;
    record('Negative Testing', 'file > 25MB returns 400 Bad Request', passed, {
      status: res.status,
      success: data.success,
      error: data.error,
    });
  } catch (err) {
    record('Negative Testing', 'file > 25MB returns 400 Bad Request', false, { error: err.message });
  }

  // =========================================================================
  // 4. LIVE R2 UPLOAD & PUBLIC CDN VERIFICATION (Defect 5)
  // =========================================================================
  console.log('\n--- 4. LIVE R2 UPLOAD & PUBLIC CDN VERIFICATION ---');

  try {
    const normalBuf = await sharp({
      create: { width: 1200, height: 800, channels: 3, background: { r: 30, g: 140, b: 90 } },
    }).png().toBuffer();

    const fd = new FormData();
    fd.append('file', new Blob([normalBuf], { type: 'image/png' }), 'challenger_cdn_verify.png');

    const uploadRes = await fetch(`${BASE_URL}/api/upload`, { method: 'POST', body: fd });
    const uploadData = await uploadRes.json();

    const uploadPass = uploadRes.status === 200 && uploadData.success === true && !!uploadData.url;
    record('Live R2 & CDN', 'Live upload to R2 bucket', uploadPass, {
      status: uploadRes.status,
      url: uploadData.url,
      key: uploadData.key,
      sizeBytes: uploadData.sizeBytes,
    });

    if (uploadData.url) {
      // Fetch public CDN URL directly via GET and HEAD
      const cdnHeadRes = await fetch(uploadData.url, { method: 'HEAD' });
      const cdnStatus = cdnHeadRes.status;
      const cdnType = cdnHeadRes.headers.get('content-type');
      const cdnCache = cdnHeadRes.headers.get('cache-control');
      const cdnLen = parseInt(cdnHeadRes.headers.get('content-length') || '0', 10);

      const headPass = cdnStatus === 200 && (cdnType?.includes('image/webp') ?? false);
      record('Live R2 & CDN', 'Public CDN HEAD returns 200 OK & image/webp', headPass, {
        status: cdnStatus,
        contentType: cdnType,
        cacheControl: cdnCache,
        contentLength: cdnLen,
      });

      // Fetch body and verify with Sharp
      const cdnGetRes = await fetch(uploadData.url);
      const cdnArrayBuf = await cdnGetRes.arrayBuffer();
      const downloadedBuf = Buffer.from(cdnArrayBuf);
      const meta = await sharp(downloadedBuf).metadata();

      const getPass = cdnGetRes.status === 200 && meta.format === 'webp' && downloadedBuf.length === uploadData.sizeBytes;
      record('Live R2 & CDN', 'Public CDN GET returns valid decodable WebP buffer', getPass, {
        status: cdnGetRes.status,
        decodedFormat: meta.format,
        decodedWidth: meta.width,
        decodedHeight: meta.height,
        downloadedBytes: downloadedBuf.length,
        matchesReportedSize: downloadedBuf.length === uploadData.sizeBytes,
      });
    }
  } catch (err) {
    record('Live R2 & CDN', 'Live R2 upload & CDN check', false, { error: err.message });
  }

  // Also check highEntropyUrl CDN fetch if available
  if (highEntropyUrl) {
    try {
      const cdnRes = await fetch(highEntropyUrl, { method: 'HEAD' });
      const cdnLen = parseInt(cdnRes.headers.get('content-length') || '0', 10);
      const passed = cdnRes.status === 200 && cdnLen <= TARGET_MAX_BYTES;
      record('Live R2 & CDN', 'High-entropy CDN file size <= 350KB verification', passed, {
        status: cdnRes.status,
        measuredCdnContentLength: cdnLen,
        targetMaxBytes: TARGET_MAX_BYTES,
        underLimitBy: TARGET_MAX_BYTES - cdnLen,
      });
    } catch (err) {
      record('Live R2 & CDN', 'High-entropy CDN file size check', false, { error: err.message });
    }
  }

  // =========================================================================
  // 5. SUMMARY & VERDICT
  // =========================================================================
  console.log('\n================================================================');
  console.log('ADVERSARIAL VERIFICATION SUMMARY');
  console.log('================================================================');

  const failedTests = report.filter(r => !r.passed);
  console.log(`Total tests: ${report.length}`);
  console.log(`Passed: ${report.length - failedTests.length}`);
  console.log(`Failed: ${failedTests.length}`);

  if (failedTests.length > 0) {
    console.log('\n❌ FAILED TESTS:');
    failedTests.forEach(f => console.log(`  - [${f.category}] ${f.testName}: ${JSON.stringify(f.details)}`));
    console.log('\nVERDICT: REQUEST_CHANGES');
  } else {
    console.log('\n✅ ALL ADVERSARIAL TESTS PASSED EMPIRICALLY!');
    console.log('VERDICT: APPROVE');
  }

  return {
    success: failedTests.length === 0,
    total: report.length,
    passedCount: report.length - failedTests.length,
    failedCount: failedTests.length,
    report,
  };
}

runAdversarialSuite().catch(console.error);
