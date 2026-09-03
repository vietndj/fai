import { S3Client, PutObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3';
import crypto from 'crypto';

const R2_ACCOUNT_ID = process.env.R2_ACCOUNT_ID || '2dae0527b790faa880c1cfb57247640a';
const R2_ACCESS_KEY_ID = process.env.R2_ACCESS_KEY_ID || 'ef3e4fbcd874fb204ed9c291608f9d75';
const R2_SECRET_ACCESS_KEY = process.env.R2_SECRET_ACCESS_KEY || '2426f986845501c6d30416a312a69e4be6cc478dc6a861c3aa7dad5dce9a436a';
const BUCKET = process.env.R2_BUCKET_NAME || 'vietndjmedia';
const PUBLIC_BASE_URL = (process.env.R2_PUBLIC_URL || 'https://pub-447bd44dfdac4938912655c855b8631c.r2.dev').replace(/\/+$/, '');

const r2Client = new S3Client({
  region: 'auto',
  endpoint: `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: R2_ACCESS_KEY_ID,
    secretAccessKey: R2_SECRET_ACCESS_KEY,
  },
});

/**
 * Generate a standardized storage key for uploaded assets
 * @param {string} filename 
 * @param {string} extension 
 * @returns {string} S3 Object key
 */
export function generateStorageKey(filename = 'image', extension = 'webp') {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const uuid = crypto.randomBytes(6).toString('hex');
  const sanitized = (filename || 'image')
    .toLowerCase()
    .replace(/\.[^/.]+$/, '')
    .replace(/[^a-z0-9\-]/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 40);

  const cleanName = sanitized.length > 0 ? sanitized : 'img';
  return `fai/posts/${year}/${month}/${uuid}-${cleanName}.${extension}`;
}

/**
 * Upload image buffer to Cloudflare R2 Cloud Storage
 * @param {Buffer|Uint8Array} buffer - File buffer
 * @param {string} filenameOrKey - Filename or full S3 key
 * @param {string} [contentType='image/webp'] - MIME type
 * @returns {Promise<{ url: string, key: string, toString: () => string }>}
 */
export async function uploadToStorage(buffer, filenameOrKey, contentType = 'image/webp') {
  if (!buffer) {
    throw new Error('uploadToStorage requires a buffer');
  }

  // Determine key
  let key;
  if (filenameOrKey && filenameOrKey.startsWith('fai/')) {
    key = filenameOrKey;
  } else {
    const ext = contentType === 'image/jpeg' ? 'jpg' : (contentType === 'image/png' ? 'png' : 'webp');
    key = generateStorageKey(filenameOrKey, ext);
  }

  const putCommand = new PutObjectCommand({
    Bucket: BUCKET,
    Key: key,
    Body: buffer,
    ContentType: contentType,
    CacheControl: 'public, max-age=31536000, immutable',
  });

  await r2Client.send(putCommand);

  const url = `${PUBLIC_BASE_URL}/${key}`;

  return {
    url,
    key,
    toString: () => url,
    valueOf: () => url,
  };
}

/**
 * Delete object from Cloudflare R2 storage
 * @param {string} keyOrUrl - Full CDN URL or S3 key
 */
export async function deleteFromStorage(keyOrUrl) {
  if (!keyOrUrl) return;
  let key = keyOrUrl;
  if (key.startsWith('http')) {
    try {
      const parsed = new URL(keyOrUrl);
      key = parsed.pathname.replace(/^\/+/, '');
    } catch {
      return;
    }
  }

  try {
    await r2Client.send(
      new DeleteObjectCommand({
        Bucket: BUCKET,
        Key: key,
      })
    );
  } catch (err) {
    console.error('Failed to delete object from R2:', err);
  }
}

export { r2Client };
