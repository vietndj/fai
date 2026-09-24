import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, setDoc, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function addTestPost() {
  try {
    const postRef = doc(collection(db, 'posts'), 'bai-test-nghiem-thu');
    await setDoc(postRef, {
      id: 'bai-test-nghiem-thu',
      slug: 'bai-test-nghiem-thu',
      title: 'Bài đăng test nghiệm thu',
      categoryId: 'tin-tuc',
      group: 'doi-song',
      published: true,
      contentHtml: '<p>Đây là bài test nghiệm thu.</p>',
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });
    console.log("Post added successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Error adding post:", error);
    process.exit(1);
  }
}

addTestPost();
