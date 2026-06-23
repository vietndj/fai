import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export const metadata = {
  title: 'Đời sống Sinh viên - FAI FPT',
  description: 'Trải nghiệm cuộc sống sinh viên đầy màu sắc tại FPT Academy International thông qua các hoạt động câu lạc bộ, sự kiện ngoại khóa và kết nối doanh nghiệp.',
};

export default function DoiSong() {
  return (
    <>
      <Header />
      <main className="sub-page-main">
        {/* Banner Section */}
        <section className="sub-page-hero">
          <div className="container">
            <span className="sub-hero-tag">TRẢI NGHIỆM</span>
            <h1 className="sub-hero-title">Đời sống năng động tại FAI</h1>
            <p className="sub-hero-desc">Kết nối bạn bè, phát triển bản thân và trải nghiệm môi trường sáng tạo thực tế.</p>
          </div>
        </section>

        {/* Content Structure like Thang Long subpages */}
        <div className="container sub-page-layout">
          {/* Main Content Area */}
          <div className="sub-content-body">
            
            {/* Section 1: Sân chơi học thuật */}
            <section id="sân-chơi" className="sub-section">
              <h2 className="sub-section-title">Câu lạc bộ & Sân chơi học thuật</h2>
              <div className="rich-text-content">
                <p>
                  Tại FAI, sinh viên được tham gia các câu lạc bộ chuyên ngành để cùng phát triển kỹ năng chuyên môn và giao lưu kết nối:
                </p>
                <ul className="styled-list">
                  <li><strong>CLB Lập trình Aptech Developer Club:</strong> Nơi các bạn sinh viên IT cùng thảo luận thuật toán, chia sẻ kinh nghiệm viết app, làm game và tham gia thi Hackathon.</li>
                  <li><strong>CLB Mỹ thuật Arena Design Studio:</strong> Sân chơi giao lưu cho các nghệ sĩ trẻ đam mê ký họa, thiết kế minh họa 2D, và dựng mô hình nhân vật 3D.</li>
                  <li><strong>CLB Marketing Skillking Pulse:</strong> Thực hành làm các campaign nhỏ, chạy thử ngân sách thật và phân tích số liệu quảng cáo digital.</li>
                </ul>
              </div>
            </section>

            {/* Section 2: Trải nghiệm doanh nghiệp */}
            <section id="doanh-nghiep" className="sub-section">
              <h2 className="sub-section-title">Liên kết & Trải nghiệm Doanh nghiệp</h2>
              <div className="rich-text-content">
                <p>
                  Ngay từ học kỳ đầu tiên, học viên FAI đã được hòa mình vào môi trường doanh nghiệp thực tế:
                </p>
                <div className="semester-box">
                  <h5>Company Visit (Kiến tập doanh nghiệp)</h5>
                  <p>Tham quan trực tiếp các văn phòng của FPT Software, các studio làm phim, game art lớn để hiểu rõ quy trình làm việc thực tế.</p>
                </div>
                <div className="semester-box">
                  <h5>Tuyển dụng trực tiếp (Job Fair)</h5>
                  <p>Ngày hội tuyển dụng định kỳ kết nối trực tiếp hàng trăm doanh nghiệp đối tác với các sinh viên chuẩn bị tốt nghiệp của FAI.</p>
                </div>
              </div>
            </section>

            {/* Section 3: Teambuilding */}
            <section id="su-kien" className="sub-section">
              <h2 className="sub-section-title">Sự kiện & Hoạt động Teambuilding</h2>
              <div className="rich-text-content">
                <p>Cuộc sống sinh viên tại FAI luôn rực rỡ sắc màu với các sự kiện văn hóa, thể thao lớn:</p>
                <ul className="styled-list">
                  <li><strong>Giải bóng đá FAI Champion League:</strong> Sân chơi thể thao gắn kết tinh thần đồng đội cho học viên toàn quốc.</li>
                  <li><strong>Lễ hội Halloween & Prom Night:</strong> Đêm hội hóa trang nghệ thuật đầy sáng tạo và cá tính của các học viên mỹ thuật Arena.</li>
                  <li><strong>Chiến dịch tình nguyện mùa hè xanh:</strong> Đem công nghệ và sức trẻ FAI hỗ trợ cộng đồng tại các khu vực khó khăn.</li>
                </ul>
              </div>
            </section>
          </div>

          {/* Side Navigation Index Bar like Thang Long */}
          <aside className="sub-sidebar">
            <div className="sidebar-index-card">
              <h4>MỤC LỤC</h4>
              <ul className="sidebar-index-list">
                <li><a href="#s%C3%A2n-ch%C6%A1i">Sân chơi học thuật</a></li>
                <li><a href="#doanh-nghiep">Trải nghiệm doanh nghiệp</a></li>
                <li><a href="#su-kien">Hoạt động sự kiện</a></li>
              </ul>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
