import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

const DEFAULT_MAX_WIDTH = 1600;
const DEFAULT_MAX_HEIGHT = 1600;
const TARGET_MAX_BYTES = 350 * 1024; // 350 KB = 358,400 bytes

// Minimum dimensions required to apply watermark logo safely without boundary violation
const MIN_WATERMARK_IMAGE_WIDTH = 160;
const MIN_WATERMARK_IMAGE_HEIGHT = 60;

/**
 * Locate watermark file in public/logo_fpt_fai.png
 */
function resolveWatermarkPath(customPath) {
  if (customPath && fs.existsSync(customPath)) {
    return customPath;
  }
  const primaryPath = path.join(process.cwd(), 'public', 'logo_fpt_fai.png');
  if (fs.existsSync(primaryPath)) {
    return primaryPath;
  }
  return null;
}


/**
 * Process, resize, watermark, and compress image to WebP < 350KB
 * @param {Buffer|ArrayBuffer|Uint8Array} inputBuffer
 * @param {Object} [options]
 * @param {number} [options.maxWidth=1600]
 * @param {number} [options.maxHeight=1600]
 * @param {number} [options.quality=82]
 * @param {number} [options.watermarkOpacity=0.85]
 * @param {boolean} [options.watermark=true]
 * @param {string} [options.watermarkPath]
 * @param {number} [options.targetMaxBytes=358400]
 * @returns {Promise<{ buffer: Buffer, format: 'webp', width: number, height: number, sizeBytes: number, size: number }>}
 */
export async function processImage(inputBuffer, options = {}) {
  const maxWidth = options.maxWidth || DEFAULT_MAX_WIDTH;
  const maxHeight = options.maxHeight || DEFAULT_MAX_HEIGHT;
  const targetMaxBytes = options.targetMaxBytes || TARGET_MAX_BYTES;
  const opacity = options.watermarkOpacity ?? 0.85;
  const applyWatermark = options.watermark !== false;

  // Ensure input is a Node Buffer
  const rawBuffer = Buffer.isBuffer(inputBuffer)
    ? inputBuffer
    : Buffer.from(inputBuffer);

  // 1. Load image and auto-orient based on EXIF
  const image = sharp(rawBuffer).rotate();

  // 2. Resize base image down to max dimensions (maintain aspect ratio, no enlargement)
  const resizedBuffer = await image
    .resize({
      width: maxWidth,
      height: maxHeight,
      fit: 'inside',
      withoutEnlargement: true,
    })
    .toBuffer();

  const resizedMeta = await sharp(resizedBuffer).metadata();
  const actualW = resizedMeta.width;
  const actualH = resizedMeta.height;

  // 3. Prepare watermark composite operation (with boundary safety guards)
  const compositeOperations = [];
  const watermarkPath = resolveWatermarkPath(options.watermarkPath);

  // Only apply watermark if enabled, file exists, and image meets minimum dimensions
  if (
    applyWatermark &&
    watermarkPath &&
    actualW >= MIN_WATERMARK_IMAGE_WIDTH &&
    actualH >= MIN_WATERMARK_IMAGE_HEIGHT
  ) {
    // Dynamic margin: 2% - 4% of image dimensions, clamped between 4px and 16px
    const maxMarginX = Math.floor(actualW * 0.04);
    const maxMarginY = Math.floor(actualH * 0.04);
    const wmMargin = Math.max(4, Math.min(16, maxMarginX, maxMarginY));

    // Watermark bounding box strictly within image minus safe margins
    const maxAllowedW = actualW - 2 * wmMargin;
    const maxAllowedH = actualH - 2 * wmMargin;

    // Watermark width: ~20% of image width, clamped between 80px and 320px
    let targetW = Math.round(actualW * 0.20);
    targetW = Math.min(Math.max(targetW, 80), 320, maxAllowedW);

    // Ensure watermark height does not breach maxAllowedH (native aspect ratio ~4.75:1)
    const estimatedH = Math.ceil(targetW / 4.5);
    if (estimatedH > maxAllowedH) {
      targetW = Math.floor(maxAllowedH * 4.5);
    }

    if (targetW >= 40 && maxAllowedW > 0 && maxAllowedH > 0) {
      const { data, info } = await sharp(watermarkPath)
        .resize({
          width: targetW,
          height: maxAllowedH,
          fit: 'inside',
        })
        .ensureAlpha()
        .raw()
        .toBuffer({ resolveWithObject: true });

      // Multiply alpha channel for subtle opacity (85% default)
      if (opacity < 1.0) {
        for (let i = 3; i < data.length; i += 4) {
          data[i] = Math.round(data[i] * opacity);
        }
      }

      const left = Math.max(0, actualW - info.width - wmMargin);
      const top = Math.max(0, actualH - info.height - wmMargin);

      compositeOperations.push({
        input: data,
        raw: { width: info.width, height: info.height, channels: 4 },
        left,
        top,
        blend: 'over',
      });
    }
  }

  // 4. Initial compression to WebP
  let quality = options.quality || 82;
  let webpBuffer = await sharp(resizedBuffer)
    .composite(compositeOperations)
    .webp({ quality, effort: 4 })
    .toBuffer();

  // Stage 1: Adaptive quality reduction loop down to floor quality 35
  while (webpBuffer.length > targetMaxBytes && quality > 35) {
    quality = Math.max(35, quality - 10);
    webpBuffer = await sharp(resizedBuffer)
      .composite(compositeOperations)
      .webp({ quality, effort: 4 })
      .toBuffer();
  }

  // Stage 2: Spatial downscaling for high-entropy images (textures, noise) still exceeding limit
  if (webpBuffer.length > targetMaxBytes) {
    let bakedBuffer = resizedBuffer;
    if (compositeOperations.length > 0) {
      bakedBuffer = await sharp(resizedBuffer)
        .composite(compositeOperations)
        .png()
        .toBuffer();
    }

    let currentW = actualW;
    let currentH = actualH;

    while (webpBuffer.length > targetMaxBytes && currentW > 200 && currentH > 200) {
      currentW = Math.round(currentW * 0.85);
      currentH = Math.round(currentH * 0.85);

      webpBuffer = await sharp(bakedBuffer)
        .resize({ width: currentW, height: currentH, fit: 'inside' })
        .webp({ quality: Math.min(quality, 45), effort: 4 })
        .toBuffer();
    }
  }

  const finalMeta = await sharp(webpBuffer).metadata();

  return {
    buffer: webpBuffer,
    format: 'webp',
    width: finalMeta.width,
    height: finalMeta.height,
    sizeBytes: webpBuffer.length,
    size: webpBuffer.length,
  };
}

// Alias for backward-compatibility with explorer specifications
export const processAndWatermarkImage = processImage;
