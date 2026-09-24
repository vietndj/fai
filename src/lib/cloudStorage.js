import { S3Client, PutObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3';
import crypto from 'crypto';

const BUCKET = process.env.R2_BUCKET_NAME || 'vietndjmedia';
const PUBLIC_BASE_URL = (process.env.R2_PUBLIC_URL || 'https://pub-447bd44dfdac4938912655c855b8631c.r2.dev').replace(/\/+$/, '');

let _r2ClientInstance = null;

/**
 * Initialize or retrieve Cloudflare R2 S3 Client instance strictly from process.env
 * Throws explicit Error if credentials are missing
 */
export function getR2Client() {
  if (!_r2ClientInstance) {
    const accessKeyId = process.env.R2_ACCESS_KEY_ID;
    const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY;
    const accountId = process.env.R2_ACCOUNT_ID;

    if (!accessKeyId || !secretAccessKey) {
      throw new Error('Cloudflare R2 credentials (R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY) are missing from process.env.');
    }
    if (!accountId) {
      throw new Error('Cloudflare R2 account ID (R2_ACCOUNT_ID) is missing from process.env.');
    }

    _r2ClientInstance = new S3Client({
      region: 'auto',
      endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
      credentials: {
        accessKeyId,
        secretAccessKey,
      },
    });
  }
  return _r2ClientInstance;
}

// Backward-compatible lazy proxy for direct `r2Client.send(...)` callers
export const r2Client = new Proxy({}, {
  get(target, prop) {
    const client = getR2Client();
    const val = client[prop];
    return typeof val === 'function' ? val.bind(client) : val;
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

  const client = getR2Client();
  await client.send(putCommand);

  const url = `${PUBLIC_BASE_URL}/${key}`;

  return {
    url,
    key,
    toString: () => url,
    valueOf: () => url,
  };
}

/**
 * Delete object from Cloudflare R2 storage with scoped key validation
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

  // Security guard: ensure key is within fai/posts/ prefix to prevent arbitrary deletion
  if (!key.startsWith('fai/posts/')) {
    console.warn(`[deleteFromStorage] Rejected attempt to delete unscoped key: ${key}`);
    return;
  }

  try {
    const client = getR2Client();
    await client.send(
      new DeleteObjectCommand({
        Bucket: BUCKET,
        Key: key,
      })
    );
  } catch (err) {
    console.error('Failed to delete object from R2:', err);
  }
}

