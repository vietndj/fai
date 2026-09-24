import { db } from './src/lib/firebase.js';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

async function main() {
  try {
    const title = "Bài viết mô phỏng từ Admin Web - Antigravity";
    const slug = "bai-viet-mo-phong-admin-" + Date.now();
    
    console.log("Đang kết nối Firebase và tạo bài viết mới...");
    
    const docRef = await addDoc(collection(db, 'posts'), {
      title: title,
      slug: slug,
      categoryId: 'doi-song',
      group: 'doi-song',
      excerpt: "Đây là một đoạn mô tả ngắn (excerpt) được tạo ra bằng cách mô phỏng thao tác của người dùng trên trang Admin của website.",
      contentHtml: "<h2>Giới thiệu</h2><p>Nội dung này được thêm trực tiếp vào CSDL Firestore bằng script mô phỏng dữ liệu giống hệt với payload gửi lên từ form React (Admin Web).</p><p>Hệ thống không cần build lại vì Next.js sẽ tự động lấy dữ liệu mới nhất từ CSDL.</p>",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      sourceUrl: "",
      author: "Antigravity Agent",
      readTime: "2",
      order: 0,
      published: true,
      date: new Date().toISOString().split('T')[0].split('-').reverse().join('-'), // DD-MM-YYYY
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
    
    console.log("✅ Đã tạo bài viết thành công!");
    console.log("📄 Document ID:", docRef.id);
    console.log("🔗 Slug:", slug);
    console.log("💡 Bạn có thể kiểm tra trên trang chủ hoặc trang đời sống của website.");
    
    process.exit(0);
  } catch (err) {
    console.error("Lỗi:", err);
    process.exit(1);
  }
}

main();
