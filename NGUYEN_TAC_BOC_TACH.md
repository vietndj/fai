# Nguyên tắc bóc tách và Tối ưu giao diện (Scraping & UI/UX Logic)

Tài liệu này lưu trữ toàn bộ nguyên tắc hoạt động của lõi Scraper (`src/lib/scraper.js`) và các khối (Blocks) UI/UX đã được hệ thống Antigravity tối ưu cho website FAI.

## 1. Nguyên tắc Xử lý Dữ liệu gốc (Scraping Logic)

*   **Chống rác Header (Header Clean-up):**
    Hệ thống tự động loại bỏ các khối `.entry-header` và các thẻ `header` chứa tiêu đề lặp lại hoặc thẻ meta không cần thiết từ trang gốc.
*   **Bảo toàn Ảnh Gốc (Hotlink Protocol):**
    Tất cả hình ảnh (bao gồm ảnh bìa và ảnh nội dung) đều lấy trực tiếp từ link gốc của website bị cào (ví dụ: `https://skillking.fpt.edu.vn/...`). TUYỆT ĐỐI KHÔNG tải về để tiết kiệm dung lượng R2 và tăng tốc độ xử lý lên 10x.
*   **Phá vỡ Lazy-load (Anti Lazy-load):**
    Xử lý triệt để hiện tượng "Khung trống" bằng cách tìm các thuộc tính `data-src` hoặc `data-lazy-src` ẩn trong thẻ `<img>` và ghi đè lại vào thuộc tính `src` chính thức.
*   **Dọn dẹp khoảng trắng tàng hình (Zero-spacing):**
    Hệ thống tự động quét và xóa bỏ toàn bộ các thẻ `<p>` vô nghĩa chỉ chứa `<br>` hoặc dấu cách tàng hình `&nbsp;` (Mã unicode `\xa0`) để chống hiện tượng dãn chữ (Text stretching).

## 2. Nguyên tắc trình bày

Bảng dưới đây liệt kê các khối UI/UX đã được tối ưu và cách AI/Scraper nên ứng dụng chúng vào bài viết:

| STT | Khối UI/UX (Block) | Class CSS | Nhận diện & Ứng dụng (Khi nào dùng) | Xử lý Kỹ thuật |
| :--- | :--- | :--- | :--- | :--- |
| **#1** | **Đoạn Sapo (Lead Paragraph)** | `p.lead` | Đoạn văn bản đầu tiên của bài viết, mang tính chất tóm tắt hoặc mở bài. | Tự động gán class `.lead` cho thẻ `<p>` đầu tiên dài hơn 50 ký tự. |
| **#2** | **Khối Hình ảnh Editorial** | `figure.image-editorial` | Mọi hình ảnh đi kèm trong bài viết. | Đổi `<p><img></p>` thành `<figure class="image-editorial"><img></figure>`. Thêm CSS góc bo tròn, shadow. |
| **#3** | **Khối Video YouTube** | `div.block-video-wrapper` | Khi nội dung nhắc đến video hoặc link YouTube. | Bọc iframe bằng `div.block-video-wrapper` để responsive 16:9 hoàn hảo. |
| **#4** | **Khối Thẻ Điểm nhấn** | `div.block-highlight-card` | Những câu trích dẫn quan trọng, key takeaway hoặc kết luận. | Bọc thẻ `div` với viền cam nhạt, nền gradient. |
| **#5** | **Khối Dòng thời gian (Timeline)** | `div.block-timeline` | Liệt kê các danh sách phân cấp (VD: Lớp 1, Lớp 2, Lớp 3), các mốc sự kiện, lộ trình các bước (Bước 1, Bước 2). | Cấu trúc: Bọc ngoài bằng `div.block-timeline`. Bên trong mỗi mục dùng `<div class="timeline-item"><p>Nội dung</p></div>`. Khối này sẽ tự vẽ đường kẻ dọc và chấm tròn. |
| **#6** | **Nhịp đọc (Reading Rhythm)**| `.rich-editorial-content p` | Áp dụng cho toàn bộ nội dung chữ trong bài. | Fix cứng `margin-bottom: 20px` để tạo nhịp đọc chặt chẽ. |
