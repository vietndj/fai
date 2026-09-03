import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

const DEFAULT_MAX_WIDTH = 1600;
const DEFAULT_MAX_HEIGHT = 1600;
const TARGET_MAX_BYTES = 350 * 1024; // 350 KB

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

  // 3. Prepare watermark composite operation
  const compositeOperations = [];
  const watermarkPath = resolveWatermarkPath(options.watermarkPath);

  if (applyWatermark && watermarkPath) {
    // Watermark width: ~20% of actual image width, clamped between 140px and 320px
    const wmWidth = Math.round(Math.min(Math.max(actualW * 0.20, 140), 320));
    // Watermark margin: 2% of actual image width, clamped between 16px and 32px
    const wmMargin = Math.round(Math.min(Math.max(actualW * 0.02, 16), 32));

    const { data, info } = await sharp(watermarkPath)
      .resize({ width: wmWidth, fit: 'inside' })
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });

    // Multiply alpha channel for subtle opacity (85% default)
    if (opacity < 1.0) {
      for (let i = 3; i < data.length; i += 4) {
        data[i] = Math.round(data[i] * opacity);
      }
    }

    const subtleWmBuffer = await sharp(data, {
      raw: { width: info.width, height: info.height, channels: 4 },
    })
      .png()
      .toBuffer();

    const left = Math.max(0, actualW - info.width - wmMargin);
    const top = Math.max(0, actualH - info.height - wmMargin);

    compositeOperations.push({
      input: subtleWmBuffer,
      left,
      top,
      blend: 'over',
    });
  }

  // 4. Composite watermark and compress to WebP with initial quality 82
  let quality = options.quality || 82;
  let webpBuffer = await sharp(resizedBuffer)
    .composite(compositeOperations)
    .webp({ quality, effort: 4 })
    .toBuffer();

  // Adaptive compression loop to guarantee file size < 350KB
  while (webpBuffer.length > targetMaxBytes && quality > 40) {
    quality -= 10;
    webpBuffer = await sharp(resizedBuffer)
      .composite(compositeOperations)
      .webp({ quality, effort: 4 })
      .toBuffer();
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
