import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export const metadata = {
  title: 'Tin tức & Sự kiện - FAI FPT',
  description: 'Cập nhật tin tức giáo dục công nghệ, thông tin sự kiện, hội thảo hướng nghiệp và gương mặt sinh viên tiêu biểu tại FPT Academy International.',
};

const allNews = [
  {
    title: 'Đại nhạc hội FAI SoundWave 2026 kỷ niệm hành trình kiến tạo công nghệ sáng tạo',
    date: '23-06-2026',
    category: 'SỰ KIỆN',
    image: '/fai_student_life_2.png',
    desc: 'Đêm nhạc bùng nổ quy tụ hàng ngàn sinh viên và các ca sĩ trẻ nổi tiếng chào đón tân sinh viên khoá mới.',
  },
  {
    title: 'Học viên Aptech xuất sắc chinh phục giải nhì Hackathon TechWiz toàn cầu',
    date: '21-06-2026',
    category: 'TIN TỨC',
    image: '/fai_banner_aptech.png',
    desc: 'Đội tuyển sinh viên FAI vượt qua hơn 300 đối thủ quốc tế để phát triển thành công ứng dụng hỗ trợ y tế thông minh.',
  },
  {
    title: 'Triển lãm đồ án Arena Multimedia tốt nghiệp thu hút hơn 30 doanh nghiệp săn đón',
    date: '18-06-2026',
    category: 'TIN TỨC',
    image: '/fai_banner_arena.png',
    desc: 'Nơi trưng bày các tác phẩm thiết kế, phim ngắn và mô hình 3D đỉnh cao do chính tay học viên Arena hoàn thiện.',
  },
  {
    title: 'FPT Skillking tổ chức chuỗi hội thảo SEO & Ads thực chiến cùng chuyên gia',
    date: '15-06-2026',
    category: 'HỘI THẢO',
    image: '/fai_banner_skillking.png',
    desc: 'Chia sẻ các giải pháp quảng cáo thông minh tối ưu chi phí và tăng trưởng lượng traffic tự nhiên bền vững.',
  }
];

export default function TinTuc() {
  return (
    <>
      <Header />
      <main className="sub-page-main">
        {/* Banner Section */}
        <section className="sub-page-hero">
          <div className="container">
            <span className="sub-hero-tag">TIN MỚI NHẤT</span>
            <h1 className="sub-hero-title">Tin tức & Sự kiện FAI</h1>
            <p className="sub-hero-desc">Cập nhật nhanh nhất các thông tin đào tạo, hoạt động ngoại khóa và thành tích sinh viên.</p>
          </div>
        </section>

        {/* Layout like Thang Long news feed */}
        <div className="container news-feed-layout-container">
          <div className="news-feed-grid">
            {allNews.map((news, idx) => (
              <div key={idx} className="feed-card">
                <div className="feed-card-image">
                  <Image src={news.image} alt={news.title} fill style={{ objectFit: 'cover' }} />
                  <span className="feed-cat-tag">{news.category}</span>
                </div>
                <div className="feed-card-body">
                  <span className="feed-date">{news.date}</span>
                  <h3 className="feed-title">{news.title}</h3>
                  <p className="feed-desc">{news.desc}</p>
                  <a href="#" className="feed-btn">Xem chi tiết →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
