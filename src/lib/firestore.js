import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from './firebase';

// ==========================================
// CATEGORIES
// ==========================================

/**
 * Get categories filtered by group, ordered by order field
 * @param {string} [group] - Group filter (e.g., 'doi-song')
 * @returns {Promise<Array>} Array of category objects with doc id
 */
export async function getCategories(group) {
  const colRef = collection(db, 'categories');
  const constraints = [];

  if (group) {
    constraints.push(where('group', '==', group));
  }

  constraints.push(orderBy('order', 'asc'));

  try {
    const q = query(colRef, ...constraints);
    const snapshot = await getDocs(q);
    return snapshot.docs.map((docSnap) => ({
      id: docSnap.id,
      ...docSnap.data(),
    }));
  } catch (err) {
    // Fallback if composite index is missing in Firestore
    const fallbackConstraints = [];
    if (group) {
      fallbackConstraints.push(where('group', '==', group));
    }
    const fallbackQ = query(colRef, ...fallbackConstraints);
    const snapshot = await getDocs(fallbackQ);
    const categories = snapshot.docs.map((docSnap) => ({
      id: docSnap.id,
      ...docSnap.data(),
    }));
    return categories.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
  }
}

/**
 * Get single category by ID
 * @param {string} id
 * @returns {Promise<Object|null>}
 */
export async function getCategoryById(id) {
  if (!id) return null;
  const docRef = doc(db, 'categories', id);
  const snap = await getDoc(docRef);
  if (!snap.exists()) return null;
  return { id: snap.id, ...snap.data() };
}

/**
 * Create new category
 * @param {Object} data - { title, eyebrow, desc, group, isLight, order }
 * @returns {Promise<Object>} Created category object with doc id
 */
export async function createCategory(data) {
  const colRef = collection(db, 'categories');
  const payload = {
    title: data.title || '',
    eyebrow: data.eyebrow || '',
    desc: data.desc || '',
    group: data.group || '',
    isLight: data.isLight ?? false,
    order: data.order ?? 0,
    ...data,
  };
  const docRef = await addDoc(colRef, payload);
  return { id: docRef.id, ...payload };
}

/**
 * Update category by ID
 * @param {string} id
 * @param {Object} data
 */
export async function updateCategory(id, data) {
  const docRef = doc(db, 'categories', id);
  await updateDoc(docRef, data);
  return { id, ...data };
}

/**
 * Delete category by ID
 * @param {string} id
 */
export async function deleteCategory(id) {
  const docRef = doc(db, 'categories', id);
  await deleteDoc(docRef);
}

// ==========================================
// POSTS
// ==========================================

/**
 * Get posts with optional filters
 * @param {Object} [filters] - { categoryId, group, published, limit, orderByField }
 * @returns {Promise<Array>}
 */
export async function getPosts(filters = {}) {
  const colRef = collection(db, 'posts');
  let constraints = [];

  // When filtering by group, first get category IDs for that group
  if (filters.group) {
    const groupCategories = await getCategories(filters.group);
    const categoryIds = groupCategories.map((c) => c.id);
    if (categoryIds.length === 0) {
      return [];
    }
    constraints.push(where('categoryId', 'in', categoryIds.slice(0, 30)));
  } else if (filters.categoryId) {
    constraints.push(where('categoryId', '==', filters.categoryId));
  }

  if (filters.published !== undefined && filters.published !== null) {
    constraints.push(where('published', '==', filters.published));
  }

  if (filters.orderByField) {
    constraints.push(orderBy(filters.orderByField, 'asc'));
  } else {
    constraints.push(orderBy('order', 'asc'));
  }

  if (filters.limit) {
    constraints.push(limit(filters.limit));
  }

  let posts = [];
  try {
    const q = query(colRef, ...constraints);
    const snapshot = await getDocs(q);
    posts = snapshot.docs.map((docSnap) => ({
      id: docSnap.id,
      ...docSnap.data(),
    }));
  } catch (err) {
    // Fallback if composite index is missing in Firestore
    const simpleConstraints = [];
    if (filters.group) {
      const groupCategories = await getCategories(filters.group);
      const categoryIds = groupCategories.map((c) => c.id);
      if (categoryIds.length === 0) return [];
      simpleConstraints.push(where('categoryId', 'in', categoryIds.slice(0, 30)));
    } else if (filters.categoryId) {
      simpleConstraints.push(where('categoryId', '==', filters.categoryId));
    }
    if (filters.published !== undefined && filters.published !== null) {
      simpleConstraints.push(where('published', '==', filters.published));
    }

    const fallbackQ = query(colRef, ...simpleConstraints);
    const snapshot = await getDocs(fallbackQ);
    posts = snapshot.docs.map((docSnap) => ({
      id: docSnap.id,
      ...docSnap.data(),
    }));
  }

  // Order by order asc then createdAt desc by default
  if (!filters.orderByField) {
    posts.sort((a, b) => {
      const orderA = a.order ?? 0;
      const orderB = b.order ?? 0;
      if (orderA !== orderB) return orderA - orderB;

      const getTime = (val) => {
        if (!val) return 0;
        if (typeof val.toMillis === 'function') return val.toMillis();
        if (typeof val.toDate === 'function') return val.toDate().getTime();
        return new Date(val).getTime() || 0;
      };

      return getTime(b.createdAt) - getTime(a.createdAt);
    });
  }

  if (filters.limit && posts.length > filters.limit) {
    posts = posts.slice(0, filters.limit);
  }

  return posts;
}

/**
 * Get single post by document ID
 * @param {string} id
 * @returns {Promise<Object|null>}
 */
export async function getPostById(id) {
  if (!id) return null;
  const docRef = doc(db, 'posts', id);
  const snap = await getDoc(docRef);
  if (!snap.exists()) return null;
  return { id: snap.id, ...snap.data() };
}

/**
 * Get single post by slug field
 * @param {string} slug
 * @returns {Promise<Object|null>}
 */
export async function getPostBySlug(slug) {
  if (!slug) return null;
  const colRef = collection(db, 'posts');
  const q = query(colRef, where('slug', '==', slug), limit(1));
  const snapshot = await getDocs(q);
  if (snapshot.empty) return null;
  const docSnap = snapshot.docs[0];
  return { id: docSnap.id, ...docSnap.data() };
}

/**
 * Create new post, auto-setting createdAt/updatedAt timestamps
 * @param {Object} data
 * @returns {Promise<Object>} Created post with doc id
 */
export async function createPost(data) {
  const colRef = collection(db, 'posts');
  const payload = {
    ...data,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  };
  const docRef = await addDoc(colRef, payload);
  return { id: docRef.id, ...payload };
}

/**
 * Update existing post, auto-setting updatedAt
 * @param {string} id
 * @param {Object} data
 */
export async function updatePost(id, data) {
  const docRef = doc(db, 'posts', id);
  const payload = {
    ...data,
    updatedAt: serverTimestamp(),
  };
  await updateDoc(docRef, payload);
  return { id, ...payload };
}

/**
 * Delete post by ID
 * @param {string} id
 */
export async function deletePost(id) {
  const docRef = doc(db, 'posts', id);
  await deleteDoc(docRef);
}

// ==========================================
// IMAGE UPLOAD / STORAGE
// ==========================================

/**
 * Convert file to base64 data URL
 * @param {File|Blob} file
 * @returns {Promise<string>} Base64 data URL
 */
export async function uploadImage(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

/**
 * Delete file from Firebase Storage
 * @param {string} path - Storage path or download URL
 */
export async function deleteImage(path) {
  // No-op for base64 images
  return;
}
