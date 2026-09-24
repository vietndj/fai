/**
 * Telegram Bot Session Management backed by Firestore collection 'telegram_sessions'
 * Enables stateful multi-step interactions across stateless Serverless requests
 */

import { doc, getDoc, setDoc, deleteDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase.js';

const SESSIONS_COLLECTION = 'telegram_sessions';

/**
 * Retrieve session state for a Telegram chat
 * @param {string|number} chatId
 * @returns {Promise<Object|null>}
 */
export async function getTelegramSession(chatId) {
  if (!chatId) return null;
  const docRef = doc(db, SESSIONS_COLLECTION, String(chatId));
  const snap = await getDoc(docRef);
  if (!snap.exists()) return null;
  return { id: snap.id, ...snap.data() };
}

/**
 * Save or update session state for a Telegram chat
 * @param {string|number} chatId
 * @param {Object} data - Session properties to merge
 */
export async function setTelegramSession(chatId, data) {
  if (!chatId) return;
  const docRef = doc(db, SESSIONS_COLLECTION, String(chatId));
  const payload = {
    ...data,
    chatId: String(chatId),
    updatedAt: serverTimestamp(),
  };
  await setDoc(docRef, payload, { merge: true });
  return payload;
}

/**
 * Reset or remove session state for a Telegram chat
 * @param {string|number} chatId
 */
export async function clearTelegramSession(chatId) {
  if (!chatId) return;
  const docRef = doc(db, SESSIONS_COLLECTION, String(chatId));
  try {
    await deleteDoc(docRef);
  } catch (err) {
    console.warn(`[clearTelegramSession] Could not delete session ${chatId}:`, err);
  }
}
