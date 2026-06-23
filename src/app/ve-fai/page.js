import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Giới thiệu về FAI - FPT Academy International',
  description: 'Tìm hiểu về lịch sử hình thành, đội ngũ giảng viên, thành tựu và mạng lưới campus của FAI.',
};

export default function VeFai() {
  return (
    <>
      <Header />
      <main className="sub-page-main">
        {/* Banner Section */}
        <section className="sub-page-hero">
          <div className="container">
            <span className="sub-hero-tag">VỀ CHÚNG TÔI</span>
            <h1 className="sub-hero-title">FPT Academy International</h1>
            <p className="sub-hero-desc">Kiến tạo tương lai số bằng chất lượng giáo dục quốc tế hàng đầu từ Tập đoàn FPT.</p>
          </div>
        </section>

        {/* Content Structure like Thang Long subpages */}
        <div className="container sub-page-layout">
          {/* Main Content Area */}
          <div className="sub-content-body">
            
            {/* Section 1: Giới thiệu */}
            <section id="gioi-thieu" className="sub-section">
              <h2 className="sub-section-title">Giới thiệu chung</h2>
              <div className="rich-text-content">
                <p>
                  Viện Đào tạo Quốc tế FPT (FPT Academy International - FAI) được thành lập với sứ mệnh mang đến cho học sinh, sinh viên Việt Nam cơ hội tiếp cận với các chương trình đào tạo nghề công nghệ chuẩn quốc tế chuyển giao trực tiếp từ các đối tác giáo dục danh tiếng trên toàn cầu.
                </p>
                <p>
                  Được hậu thuẫn bởi Tập đoàn FPT - tập đoàn công nghệ hàng đầu Việt Nam, FAI quy tụ ba phân hệ đào tạo nghề danh giá chuyên sâu:
                </p>
                <ul className="styled-list">
                  <li><strong>Arena Multimedia:</strong> Đào tạo chuyên gia Mỹ thuật đa phương tiện, Thiết kế Đồ họa, Web, Kỹ xảo Điện ảnh, Làm game & Hoạt hình 3D.</li>
                  <li><strong>Aptech:</strong> Đào tạo lập trình viên quốc tế, chuyên sâu Lập trình ứng dụng, Trí tuệ nhân tạo (AI), Khoa học dữ liệu (Data Science).</li>
                  <li><strong>FPT Skillking:</strong> Hợp tác quốc tế đào tạo chuyên sâu về Tiếp thị số (Digital Marketing) thực chiến chuẩn quốc tế.</li>
                </ul>
              </div>
            </section>

            {/* Section 2: Đội ngũ giảng viên */}
            <section id="giang-vien" className="sub-section">
              <h2 className="sub-section-title">Đội ngũ giảng viên</h2>
              <div className="rich-text-content">
                <p>
                  Tại FAI, chúng tôi tin rằng người thầy giỏi không chỉ dạy lý thuyết, họ truyền cảm hứng và hướng dẫn thực chiến. 100% giảng viên tại FAI là các chuyên gia có từ 5-10 năm kinh nghiệm thực chiến tại các tập đoàn lớn trong và ngoài nước (như FPT Software, VNG, các agency sáng tạo...).
                </p>
                <div className="team-grid">
                  <div className="team-card">
                    <h4>TS. Nguyễn Văn A</h4>
                    <p className="team-role">Trưởng ngành Công nghệ Thông tin - Aptech</p>
                    <p className="team-desc">Cựu kỹ sư giải pháp phần mềm tại Microsoft châu Á, 15 năm kinh nghiệm giảng dạy.</p>
                  </div>
                  <div className="team-card">
                    <h4>ThS. Trần Thị B</h4>
                    <p className="team-role">Chuyên gia Thiết kế Mỹ thuật - Arena</p>
                    <p className="team-desc">Art Director tại Creative Agency hàng đầu, người đứng sau nhiều chiến dịch truyền thông lớn.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Thành tựu & Con số */}
            <section id="thanh-tuu" className="sub-section">
              <h2 className="sub-section-title">Thành tựu và Con số</h2>
              <div className="rich-text-content">
                <p>
                  Hơn hai thập kỷ phát triển, FAI đã khẳng định vị thế dẫn đầu trong đào tạo nghề công nghệ chất lượng cao tại Việt Nam:
                </p>
                <div className="bullets-grid">
                  <div className="bullet-item">
                    <h5>25+ năm</h5>
                    <p>Aptech có mặt tại Việt Nam, đào tạo hơn 100.000 lập trình viên.</p>
                  </div>
                  <div className="bullet-item">
                    <h5>20+ năm</h5>
                    <p>Arena Multimedia đồng hành khai mở ngành Thiết kế đồ họa & Mỹ thuật số.</p>
                  </div>
                  <div className="bullet-item">
                    <h5>98%</h5>
                    <p>Sinh viên có việc làm ngay trong năm đầu tiên sau tốt nghiệp.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: Hệ thống Campus */}
            <section id="campus" className="sub-section">
              <h2 className="sub-section-title">Hệ thống Campus toàn quốc</h2>
              <div className="rich-text-content">
                <p>FAI sở hữu hệ thống phòng Lab thực hành đạt chuẩn quốc tế, trang thiết bị hiện đại tại các thành phố lớn:</p>
                <ul className="styled-list">
                  <li><strong>Campus Hà Nội:</strong> Số 8 Tôn Thất Thuyết, Mỹ Đình, Nam Từ Liêm.</li>
                  <li><strong>Campus TP. Hồ Chí Minh:</strong> 391A Nam Kỳ Khởi Nghĩa, Võ Thị Sáu, Quận 3.</li>
                  <li><strong>Campus Đà Nẵng:</strong> 130 Điện Biên Phủ, Thanh Khê.</li>
                </ul>
              </div>
            </section>
          </div>

          {/* Side Navigation Index Bar like Thang Long */}
          <aside className="sub-sidebar">
            <div className="sidebar-index-card">
              <h4>MỤC LỤC</h4>
              <ul className="sidebar-index-list">
                <li><a href="#gioi-thieu">Giới thiệu chung</a></li>
                <li><a href="#giang-vien">Đội ngũ giảng viên</a></li>
                <li><a href="#thanh-tuu">Thành tựu và con số</a></li>
                <li><a href="#campus">Hệ thống Campus</a></li>
              </ul>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
