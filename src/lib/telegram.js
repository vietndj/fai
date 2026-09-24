/**
 * Telegram Bot API client optimized for Next.js App Router & Node.js environments
 * Features:
 * - Forced IPv4 DNS resolution to prevent 15-second macOS IPv6 connection timeouts
 * - Persistent HTTPS Agent with keepAlive, family: 4, and connection pooling
 * - TLS/Certificate error tolerance for local development environments
 * - Graceful handling of expired callback queries (HTTP 400 "query is too old")
 * - Zero-dependency multipart uploads and file downloads via keep-alive socket pool
 */

import dns from 'node:dns';
import https from 'node:https';
import tls from 'node:tls';

// 1. Enforce IPv4 DNS resolution across the process to prevent macOS IPv6 black holes
try {
  dns.setDefaultResultOrder('ipv4first');
} catch {
  // Ignore in environments where setDefaultResultOrder is unavailable
}

// 2. Environment-aware TLS validation configuration
// In local development or if insecure TLS is explicitly allowed, permit self-signed certificates.
// In production, enforce strict certificate verification unless explicitly overridden.
const shouldRejectUnauthorized =
  process.env.NODE_ENV === 'production' &&
  process.env.ALLOW_INSECURE_TLS !== 'true' &&
  process.env.TELEGRAM_INSECURE_TLS !== 'true'
    ? true
    : false;

if (!shouldRejectUnauthorized) {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
}

// 3. Persistent HTTPS agent configured with keepAlive, family: 4, and configurable TLS validation
export const telegramAgent = new https.Agent({
  keepAlive: true,
  keepAliveMsecs: 15000,
  maxSockets: 50,
  maxFreeSockets: 10,
  family: 4,
  rejectUnauthorized: shouldRejectUnauthorized,
});

// Enforce IPv4 family and TLS settings on every socket created by the agent
telegramAgent.createConnection = function (options, cb) {
  return tls.connect(
    {
      ...options,
      family: 4,
      autoSelectFamily: false,
      rejectUnauthorized: shouldRejectUnauthorized,
      servername: options.host || options.servername || 'api.telegram.org',
    },
    cb
  );
};

function getBotToken() {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  if (!token) {
    throw new Error('TELEGRAM_BOT_TOKEN is missing from environment variables.');
  }
  return token;
}

function getApiBaseUrl() {
  return `https://api.telegram.org/bot${getBotToken()}`;
}

function getFileBaseUrl() {
  return `https://api.telegram.org/file/bot${getBotToken()}`;
}

/**
 * Execute Telegram Bot API method using persistent IPv4 HTTPS Agent
 * @param {string} method - API method name (e.g., 'sendMessage', 'getUpdates')
 * @param {Object} payload - JSON payload
 * @param {Object} [callOptions] - Additional execution options
 * @param {number} [callOptions.timeoutMs=35000] - Request timeout in ms
 * @returns {Promise<Object>} API response result
 */
export async function callTelegramApi(method, payload = {}, callOptions = {}) {
  const token = getBotToken();
  const postData = JSON.stringify(payload || {});
  const timeoutMs = callOptions.timeoutMs || 35000;

  const controller = new AbortController();
  const timer = setTimeout(() => {
    controller.abort(new Error(`Telegram API request timeout [${method}] after ${timeoutMs}ms`));
  }, timeoutMs);

  return new Promise((resolve, reject) => {
    const req = https.request(
      {
        hostname: 'api.telegram.org',
        port: 443,
        path: `/bot${token}/${method}`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(postData),
        },
        agent: telegramAgent,
        family: 4,
        rejectUnauthorized: shouldRejectUnauthorized,
        signal: controller.signal,
      },
      (res) => {
        let body = '';
        res.on('data', (chunk) => {
          body += chunk;
        });
        res.on('end', () => {
          clearTimeout(timer);
          try {
            const data = JSON.parse(body);
            if (!data.ok) {
              const errorMsg = `Telegram API error [${method}]: ${data.description || 'Unknown error'} (code: ${data.error_code})`;
              const err = new Error(errorMsg);
              err.errorCode = data.error_code;
              err.description = data.description;
              err.response = data;
              return reject(err);
            }
            resolve(data.result);
          } catch (parseErr) {
            reject(new Error(`Failed to parse Telegram API response [${method}]: ${parseErr.message} (body: ${body.slice(0, 100)})`));
          }
        });
      }
    );

    req.on('error', (err) => {
      clearTimeout(timer);
      reject(err);
    });

    req.write(postData);
    req.end();
  });
}

/**
 * Send text message to a chat
 * @param {string|number} chatId - Target chat ID
 * @param {string} text - Message text
 * @param {Object} [options] - Additional parameters (parse_mode, reply_markup, etc.)
 */
export async function sendMessage(chatId, text, options = {}) {
  return callTelegramApi('sendMessage', {
    chat_id: chatId,
    text,
    ...options,
  });
}

/**
 * Send photo to a chat (supports URL or binary buffer)
 * @param {string|number} chatId - Target chat ID
 * @param {string|Buffer|Uint8Array} photo - Image URL or buffer
 * @param {string} [caption] - Photo caption
 * @param {Object} [options] - Additional parameters
 */
export async function sendPhoto(chatId, photo, caption = '', options = {}) {
  if (typeof photo === 'string' && (photo.startsWith('http://') || photo.startsWith('https://'))) {
    return callTelegramApi('sendPhoto', {
      chat_id: chatId,
      photo,
      caption,
      ...options,
    });
  }

  // Binary upload via multipart/form-data using keep-alive IPv4 agent
  const rawBuffer = Buffer.isBuffer(photo) ? photo : Buffer.from(photo);
  const boundary = '----TelegramBoundary' + Math.random().toString(36).substring(2);
  const crlf = '\r\n';

  const fields = {
    chat_id: String(chatId),
    caption: caption || undefined,
    parse_mode: options.parse_mode,
    reply_markup: options.reply_markup ? JSON.stringify(options.reply_markup) : undefined,
  };

  const parts = [];
  for (const [key, val] of Object.entries(fields)) {
    if (val !== undefined && val !== null) {
      parts.push(
        Buffer.from(
          `--${boundary}${crlf}` +
          `Content-Disposition: form-data; name="${key}"${crlf}${crlf}` +
          `${val}${crlf}`
        )
      );
    }
  }

  parts.push(
    Buffer.from(
      `--${boundary}${crlf}` +
      `Content-Disposition: form-data; name="photo"; filename="photo.jpg"${crlf}` +
      `Content-Type: image/jpeg${crlf}${crlf}`
    )
  );
  parts.push(rawBuffer);
  parts.push(Buffer.from(crlf));
  parts.push(Buffer.from(`--${boundary}--${crlf}`));

  const postBody = Buffer.concat(parts);
  const token = getBotToken();

  const controller = new AbortController();
  const timer = setTimeout(() => {
    controller.abort(new Error('Telegram sendPhoto timeout after 35s'));
  }, 35000);

  return new Promise((resolve, reject) => {
    const req = https.request(
      {
        hostname: 'api.telegram.org',
        port: 443,
        path: `/bot${token}/sendPhoto`,
        method: 'POST',
        headers: {
          'Content-Type': `multipart/form-data; boundary=${boundary}`,
          'Content-Length': postBody.length,
        },
        agent: telegramAgent,
        family: 4,
        rejectUnauthorized: shouldRejectUnauthorized,
        signal: controller.signal,
      },
      (res) => {
        let body = '';
        res.on('data', (chunk) => {
          body += chunk;
        });
        res.on('end', () => {
          clearTimeout(timer);
          try {
            const data = JSON.parse(body);
            if (!data.ok) {
              return reject(new Error(`Telegram sendPhoto error: ${data.description || 'Unknown error'}`));
            }
            resolve(data.result);
          } catch (e) {
            reject(new Error(`Failed to parse sendPhoto response: ${e.message}`));
          }
        });
      }
    );

    req.on('error', (err) => {
      clearTimeout(timer);
      reject(err);
    });
    req.write(postBody);
    req.end();
  });
}

/**
 * Answer callback query from inline keyboard
 * Resilient implementation: swallows expired / HTTP 400 errors gracefully
 * so stale button clicks never crash the webhook or session handler.
 * @param {string} callbackQueryId - Callback query ID
 * @param {string} [text] - Notification text
 * @param {Object} [options] - Additional options (showAlert, etc.)
 */
export async function answerCallbackQuery(callbackQueryId, text = '', options = {}) {
  if (!callbackQueryId) {
    return { ok: false, ignored: true, reason: 'Missing callbackQueryId' };
  }

  try {
    return await callTelegramApi('answerCallbackQuery', {
      callback_query_id: callbackQueryId,
      text,
      show_alert: options.showAlert || options.show_alert || false,
      ...options,
    });
  } catch (error) {
    const desc = error.description || error.message || '';
    // Telegram returns code 400 when query is expired (> 20-30s) or invalid
    if (
      desc.includes('query is too old') ||
      desc.includes('query ID is invalid') ||
      desc.includes('response timeout expired') ||
      error.errorCode === 400
    ) {
      console.warn(`[telegram.js] Gracefully handled expired callback query [${callbackQueryId}]: ${desc}`);
      return { ok: false, ignored: true, description: desc };
    }

    // Shield against any unexpected network/callback query failures
    console.warn(`[telegram.js] Non-fatal answerCallbackQuery error [${callbackQueryId}]: ${desc}`);
    return { ok: false, error: true, description: desc };
  }
}

/**
 * Edit existing text message
 * @param {string|number} chatId - Chat ID
 * @param {number} messageId - Message ID to edit
 * @param {string} text - New message text
 * @param {Object} [options] - Additional options
 */
export async function editMessageText(chatId, messageId, text, options = {}) {
  return callTelegramApi('editMessageText', {
    chat_id: chatId,
    message_id: messageId,
    text,
    ...options,
  });
}

/**
 * Get file information by file_id
 * @param {string} fileId - Telegram file_id
 * @returns {Promise<{ file_id: string, file_unique_id: string, file_size?: number, file_path?: string }>}
 */
export async function getFile(fileId) {
  return callTelegramApi('getFile', { file_id: fileId });
}

/**
 * Download file buffer directly from Telegram servers using keep-alive IPv4 agent
 * @param {string} fileId - Telegram file_id
 * @returns {Promise<Buffer>} Binary file buffer
 */
export async function downloadFileBuffer(fileId) {
  const fileInfo = await getFile(fileId);
  if (!fileInfo || !fileInfo.file_path) {
    throw new Error(`Failed to resolve file_path for Telegram file_id: ${fileId}`);
  }

  const token = getBotToken();
  const filePath = fileInfo.file_path;

  const controller = new AbortController();
  const timer = setTimeout(() => {
    controller.abort(new Error(`Timeout downloading Telegram file: ${filePath}`));
  }, 30000);

  return new Promise((resolve, reject) => {
    const req = https.request(
      {
        hostname: 'api.telegram.org',
        port: 443,
        path: `/file/bot${token}/${filePath}`,
        method: 'GET',
        agent: telegramAgent,
        family: 4,
        rejectUnauthorized: shouldRejectUnauthorized,
        signal: controller.signal,
      },
      (res) => {
        if (res.statusCode < 200 || res.statusCode >= 300) {
          clearTimeout(timer);
          return reject(new Error(`Failed to download Telegram file: HTTP ${res.statusCode} ${res.statusMessage}`));
        }
        const chunks = [];
        res.on('data', (chunk) => chunks.push(chunk));
        res.on('end', () => {
          clearTimeout(timer);
          resolve(Buffer.concat(chunks));
        });
      }
    );

    req.on('error', (err) => {
      clearTimeout(timer);
      reject(err);
    });
    req.end();
  });
}

/**
 * Delete webhook configuration to allow getUpdates long polling
 * @param {Object} [options]
 * @param {boolean} [options.drop_pending_updates=false]
 */
export async function deleteWebhook(options = { drop_pending_updates: false }) {
  return callTelegramApi('deleteWebhook', options);
}

/**
 * Get current webhook status
 */
export async function getWebhookInfo() {
  return callTelegramApi('getWebhookInfo', {});
}

/**
 * Receive incoming updates using long polling
 * @param {Object} [options]
 * @param {number} [options.offset]
 * @param {number} [options.limit]
 * @param {number} [options.timeout]
 * @param {string[]} [options.allowed_updates]
 */
export async function getUpdates(options = {}) {
  // If timeout is specified for long polling, adjust request timeout accordingly
  const reqTimeoutMs = options.timeout ? (options.timeout + 10) * 1000 : 25000;
  return callTelegramApi('getUpdates', options, { timeoutMs: reqTimeoutMs });
}

// Backward-compatibility aliases
export const sendTelegramMessage = sendMessage;
export const editTelegramMessage = editMessageText;
export const getTelegramFile = getFile;
export const downloadTelegramFileBuffer = downloadFileBuffer;
