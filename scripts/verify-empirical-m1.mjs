import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { processImage } from '../src/lib/imageProcessor.js';

const TARGET_MAX_BYTES = 350 * 1024; // 358,400 bytes

async function runTests() {
  console.log('====================================================');
  console.log('M1 EMPIRICAL CHALLENGER VERIFICATION SUITE');
  console.log('====================================================\n');

  const results = [];

  // ----------------------------------------------------
  // TEST 1: Large Image (>1600px width)
  // ----------------------------------------------------
  console.log('--- TEST 1: Large Image (>1600px width) ---');
  const largeWidth = 2400;
  const largeHeight = 1600;
  // Create a 2400x1600 gradient image
  const largeSvg = `
    <svg width="${largeWidth}" height="${largeHeight}">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:rgb(255,102,0);stop-opacity:1" />
          <stop offset="100%" style="stop-color:rgb(0,51,153);stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad)" />
      <circle cx="1200" cy="800" r="400" fill="white" opacity="0.3" />
    </svg>
  `;
  const largeInputBuffer = await sharp(Buffer.from(largeSvg)).png().toBuffer();
  const largeProcessed = await processImage(largeInputBuffer);

  console.log(`Input: ${largeWidth}x${largeHeight}, size: ${largeInputBuffer.length} bytes`);
  console.log(`Output: ${largeProcessed.width}x${largeProcessed.height}, format: ${largeProcessed.format}, size: ${largeProcessed.sizeBytes} bytes`);

  const t1_width_pass = largeProcessed.width <= 1600;
  const t1_size_pass = largeProcessed.sizeBytes <= TARGET_MAX_BYTES;
  const t1_format_pass = largeProcessed.format === 'webp';
  const t1_aspect_pass = Math.abs((largeProcessed.width / largeProcessed.height) - (largeWidth / largeHeight)) < 0.02;

  console.log(`- Max width <= 1600: ${t1_width_pass ? 'PASS' : 'FAIL'} (${largeProcessed.width})`);
  console.log(`- Aspect ratio preserved: ${t1_aspect_pass ? 'PASS' : 'FAIL'}`);
  console.log(`- Format is WebP: ${t1_format_pass ? 'PASS' : 'FAIL'}`);
  console.log(`- Size < 350KB: ${t1_size_pass ? 'PASS' : 'FAIL'} (${largeProcessed.sizeBytes} / ${TARGET_MAX_BYTES})`);

  results.push({
    name: 'Large Image (2400x1600)',
    pass: t1_width_pass && t1_size_pass && t1_format_pass && t1_aspect_pass,
    details: `${largeProcessed.width}x${largeProcessed.height}, ${largeProcessed.sizeBytes} bytes, format: ${largeProcessed.format}`,
  });

  // ----------------------------------------------------
  // TEST 2: Small Image (<500px width)
  // ----------------------------------------------------
  console.log('\n--- TEST 2: Small Image (<500px width: 400x300) ---');
  const smallWidth = 400;
  const smallHeight = 300;
  const smallSvg = `
    <svg width="${smallWidth}" height="${smallHeight}">
      <rect width="100%" height="100%" fill="#2b5797" />
      <text x="50%" y="50%" fill="white" font-size="20" text-anchor="middle">Small 400x300</text>
    </svg>
  `;
  const smallInputBuffer = await sharp(Buffer.from(smallSvg)).png().toBuffer();
  const smallProcessed = await processImage(smallInputBuffer);

  console.log(`Input: ${smallWidth}x${smallHeight}, size: ${smallInputBuffer.length} bytes`);
  console.log(`Output: ${smallProcessed.width}x${smallProcessed.height}, format: ${smallProcessed.format}, size: ${smallProcessed.sizeBytes} bytes`);

  const t2_no_enlarge_pass = smallProcessed.width === smallWidth && smallProcessed.height === smallHeight;
  const t2_size_pass = smallProcessed.sizeBytes <= TARGET_MAX_BYTES;
  const t2_format_pass = smallProcessed.format === 'webp';

  console.log(`- Without enlargement: ${t2_no_enlarge_pass ? 'PASS' : 'FAIL'} (${smallProcessed.width}x${smallProcessed.height})`);
  console.log(`- Format is WebP: ${t2_format_pass ? 'PASS' : 'FAIL'}`);
  console.log(`- Size < 350KB: ${t2_size_pass ? 'PASS' : 'FAIL'} (${smallProcessed.sizeBytes} / ${TARGET_MAX_BYTES})`);

  results.push({
    name: 'Small Image (400x300)',
    pass: t2_no_enlarge_pass && t2_size_pass && t2_format_pass,
    details: `${smallProcessed.width}x${smallProcessed.height}, ${smallProcessed.sizeBytes} bytes, format: ${smallProcessed.format}`,
  });

  // ----------------------------------------------------
  // TEST 3: Watermark Inspection (Presence, Location, Opacity)
  // ----------------------------------------------------
  console.log('\n--- TEST 3: Watermark Inspection (Presence, Location, Opacity) ---');
  // Process a 1000x800 black image with watermark, and another without watermark
  const baseBlack = await sharp({
    create: { width: 1000, height: 800, channels: 3, background: { r: 0, g: 0, b: 0 } },
  }).png().toBuffer();

  const wmProcessed = await processImage(baseBlack, { watermark: true });
  const noWmProcessed = await processImage(baseBlack, { watermark: false });

  // Inspect pixels of wmProcessed
  const wmMeta = await sharp(wmProcessed.buffer).metadata();
  const rawWm = await sharp(wmProcessed.buffer).raw().toBuffer();
  const rawNoWm = await sharp(noWmProcessed.buffer).raw().toBuffer();

  let diffTopLeft = 0;
  let diffBottomRight = 0;
  const channels = wmMeta.channels;
  const width = wmMeta.width;
  const height = wmMeta.height;

  // Check top-left 100x100 pixels (should be black, diff ~ 0)
  for (let y = 0; y < 100; y++) {
    for (let x = 0; x < 100; x++) {
      const idx = (y * width + x) * channels;
      diffTopLeft += Math.abs(rawWm[idx] - rawNoWm[idx]);
    }
  }

  // Check bottom-right region (around x: 750..950, y: 700..770)
  for (let y = height - 100; y < height - 25; y++) {
    for (let x = width - 250; x < width - 25; x++) {
      const idx = (y * width + x) * channels;
      diffBottomRight += Math.abs(rawWm[idx] - rawNoWm[idx]);
    }
  }

  console.log(`Top-left diff (should be near 0): ${diffTopLeft}`);
  console.log(`Bottom-right watermark diff (must be high): ${diffBottomRight}`);

  const wm_presence_pass = diffTopLeft < 50 && diffBottomRight > 10000;
  console.log(`- Watermark presence at bottom-right: ${wm_presence_pass ? 'PASS' : 'FAIL'}`);

  // Test opacity 0.85: Check watermark pixel intensity vs 100% opacity watermark
  const wmFullOpacity = await processImage(baseBlack, { watermark: true, watermarkOpacity: 1.0 });
  const rawFull = await sharp(wmFullOpacity.buffer).raw().toBuffer();

  // Sample brightest watermark pixel in bottom-right
  let maxFullVal = 0;
  let corresponding85Val = 0;
  for (let y = height - 100; y < height - 25; y++) {
    for (let x = width - 250; x < width - 25; x++) {
      const idx = (y * width + x) * channels;
      if (rawFull[idx] > maxFullVal) {
        maxFullVal = rawFull[idx];
        corresponding85Val = rawWm[idx];
      }
    }
  }

  const measuredRatio = corresponding85Val / (maxFullVal || 1);
  console.log(`Max watermark pixel (100% opacity): ${maxFullVal}, at 85%: ${corresponding85Val}, ratio: ${measuredRatio.toFixed(3)} (expected ~0.85)`);
  const opacity_pass = Math.abs(measuredRatio - 0.85) < 0.08;
  console.log(`- Watermark opacity ~85%: ${opacity_pass ? 'PASS' : 'FAIL'} (measured ratio: ${measuredRatio.toFixed(3)})`);

  results.push({
    name: 'Watermark Placement & Opacity',
    pass: wm_presence_pass && opacity_pass,
    details: `Bottom-right diff: ${diffBottomRight}, measured opacity ratio: ${measuredRatio.toFixed(3)}`,
  });

  // ----------------------------------------------------
  // TEST 4: High Complexity / High Entropy Image (Stress Test)
  // ----------------------------------------------------
  console.log('\n--- TEST 4: High Complexity / High Entropy Image ---');
  // High entropy noise: 1600x1200 random bytes
  const noiseBytes = crypto.randomBytes(1600 * 1200 * 3);
  const noiseImg = await sharp(noiseBytes, { raw: { width: 1600, height: 1200, channels: 3 } }).png().toBuffer();
  const noiseProcessed = await processImage(noiseImg);

  console.log(`Noise input size: ${noiseImg.length} bytes`);
  console.log(`Noise output size: ${noiseProcessed.sizeBytes} bytes (${(noiseProcessed.sizeBytes / 1024).toFixed(1)} KB)`);
  console.log(`Target limit: ${TARGET_MAX_BYTES} bytes (350 KB)`);

  const noise_size_pass = noiseProcessed.sizeBytes <= TARGET_MAX_BYTES;
  console.log(`- High entropy size < 350KB: ${noise_size_pass ? 'PASS' : 'FAIL'} (${noiseProcessed.sizeBytes} bytes)`);

  results.push({
    name: 'High Entropy Image (1600x1200 random noise)',
    pass: noise_size_pass,
    details: `Output size ${noiseProcessed.sizeBytes} bytes vs 358400 max (Over limit by ${(noiseProcessed.sizeBytes - TARGET_MAX_BYTES)} bytes)`,
  });

  // ----------------------------------------------------
  // TEST 5: Tiny Image Edge Case (Width < 140px or Height < 30px)
  // ----------------------------------------------------
  console.log('\n--- TEST 5: Tiny Image Edge Cases (<140px width or <30px height) ---');
  let tinyCrash = false;
  let tinyError = '';
  try {
    const tinyBuffer = await sharp({
      create: { width: 100, height: 100, channels: 3, background: { r: 255, g: 0, b: 0 } },
    }).png().toBuffer();
    await processImage(tinyBuffer);
  } catch (err) {
    tinyCrash = true;
    tinyError = err.message;
  }
  console.log(`Tiny 100x100 processing: ${tinyCrash ? 'CRASHED: ' + tinyError : 'HANDLED GRACEFULLY'}`);

  let bannerCrash = false;
  let bannerError = '';
  try {
    const bannerBuffer = await sharp({
      create: { width: 300, height: 25, channels: 3, background: { r: 0, g: 255, b: 0 } },
    }).png().toBuffer();
    await processImage(bannerBuffer);
  } catch (err) {
    bannerCrash = true;
    bannerError = err.message;
  }
  console.log(`Banner 300x25 processing: ${bannerCrash ? 'CRASHED: ' + bannerError : 'HANDLED GRACEFULLY'}`);

  results.push({
    name: 'Tiny Image Edge Cases (<140px width / <30px height)',
    pass: !tinyCrash && !bannerCrash,
    details: tinyCrash ? `Crashes: "${tinyError}"` : 'Handled gracefully',
  });

  // ----------------------------------------------------
  // TEST 6: Live Upload to Cloudflare R2 via /api/upload
  // ----------------------------------------------------
  console.log('\n--- TEST 6: Live Upload to Cloudflare R2 via /api/upload ---');
  try {
    const testUploadBuffer = await sharp({
      create: { width: 800, height: 600, channels: 3, background: { r: 240, g: 100, b: 30 } },
    }).png().toBuffer();

    const formData = new FormData();
    const blob = new Blob([testUploadBuffer], { type: 'image/png' });
    formData.append('file', blob, 'challenger_test_image.png');

    const res = await fetch('http://localhost:3000/api/upload', {
      method: 'POST',
      body: formData,
    });

    const resJson = await res.json();
    console.log('Upload response status:', res.status, resJson);

    const api_success = res.status === 200 && resJson.success === true && !!resJson.url;
    console.log(`- Upload HTTP 200 & success: ${api_success ? 'PASS' : 'FAIL'}`);

    // Verify CDN URL fetch
    let cdn_status = 0;
    let cdn_type = '';
    let cdn_length = 0;
    if (resJson.url) {
      const cdnRes = await fetch(resJson.url, { method: 'HEAD' });
      cdn_status = cdnRes.status;
      cdn_type = cdnRes.headers.get('content-type') || '';
      cdn_length = parseInt(cdnRes.headers.get('content-length') || '0', 10);
      console.log(`CDN HEAD response: status ${cdn_status}, content-type: ${cdn_type}, length: ${cdn_length}`);
    }

    const cdn_pass = cdn_status === 200 && cdn_type.includes('image/webp');
    console.log(`- CDN fetch HTTP 200 & image/webp: ${cdn_pass ? 'PASS' : 'FAIL'}`);

    results.push({
      name: 'Live Upload & CDN Verification',
      pass: api_success && cdn_pass,
      details: `Status: ${cdn_status}, Type: ${cdn_type}, URL: ${resJson.url}`,
    });
  } catch (err) {
    console.error('Upload test failed:', err);
    results.push({
      name: 'Live Upload & CDN Verification',
      pass: false,
      details: err.message,
    });
  }

  // ----------------------------------------------------
  // SUMMARY
  // ----------------------------------------------------
  console.log('\n====================================================');
  console.log('TEST SUMMARY');
  console.log('====================================================');
  let overallPass = true;
  for (const r of results) {
    console.log(`[${r.pass ? 'PASS' : 'FAIL'}] ${r.name}: ${r.details}`);
    if (!r.pass) overallPass = false;
  }
  console.log(`\nOVERALL STATUS: ${overallPass ? 'ALL TESTS PASSED' : 'FAILURES DETECTED'}`);

  return { overallPass, results };
}

runTests().catch(console.error);
