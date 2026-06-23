import Link from 'next/link';

export default function Header() {
  return (
    <header className="header-container">
      {/* Top Utilities Bar */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="top-bar-left">
            <span>Chào mừng bạn đến với FPT Academy International (FAI)</span>
          </div>
          <div className="top-bar-right">
            <a href="#" className="top-link">Tra cứu tuyển sinh</a>
            <span className="divider">|</span>
            <a href="#" className="top-link">E-Learning</a>
            <span className="divider">|</span>
            <a href="#" className="top-link">Thông tin - Tài liệu</a>
            <span className="divider">|</span>
            <span className="lang-switch">ENGLISH</span>
          </div>
        </div>
      </div>

      {/* Main Header navigation */}
      <div className="main-nav-container">
        <div className="container main-nav-content">
          {/* Logo */}
          <Link href="/" className="logo">
            <span className="logo-fpt">FPT</span>
            <span className="logo-fai">FAI</span>
            <div className="logo-divider"></div>
            <span className="logo-sub">ACADEMY<br/>INTERNATIONAL</span>
          </Link>

          {/* Navigation Menu */}
          <nav className="desktop-menu">
            <ul className="menu-list">
              {/* Menu Item: Về FAI */}
              <li className="menu-item has-megamenu">
                <Link href="/ve-fai" className="menu-link">Về FAI</Link>
                <div className="megamenu">
                  <div className="container megamenu-grid">
                    <div className="megamenu-title-col">
                      <h3>Về FAI</h3>
                      <p>Khởi nguồn từ nỗ lực liên kết giáo dục quốc tế của Tập đoàn FPT, FAI tự hào đào tạo nguồn nhân lực chất lượng cao chuẩn toàn cầu.</p>
                    </div>
                    <div className="megamenu-links-col">
                      <div className="megamenu-links-grid">
                        <Link href="/ve-fai#gioi-thieu" className="megamenu-link">Giới thiệu chung</Link>
                        <Link href="/ve-fai#giang-vien" className="megamenu-link">Đội ngũ giảng viên</Link>
                        <Link href="/ve-fai#thanh-tuu" className="megamenu-link">Thành tựu và con số</Link>
                        <Link href="/ve-fai#campus" className="megamenu-link">Hệ thống Campus toàn quốc</Link>
                        <Link href="/ve-fai#doanh-nghiep" className="megamenu-link">Đối tác doanh nghiệp</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* Menu Item: Đào tạo */}
              <li className="menu-item has-megamenu">
                <Link href="/dao-tao" className="menu-link">Chương trình Đào tạo</Link>
                <div className="megamenu">
                  <div className="container megamenu-grid">
                    <div className="megamenu-title-col">
                      <h3>Ngành Đào tạo</h3>
                      <p>Hệ thống chương trình chuẩn quốc tế chuyển giao trực tiếp từ đối tác nước ngoài hàng đầu.</p>
                    </div>
                    <div className="megamenu-links-col">
                      <div className="megamenu-links-grid">
                        <div className="program-cat">
                          <h4>ARENA MULTIMEDIA</h4>
                          <Link href="/dao-tao#arena" className="megamenu-link">Mỹ thuật đa phương tiện</Link>
                          <Link href="/dao-tao#arena" className="megamenu-link">Thiết kế đồ họa & Web</Link>
                          <Link href="/dao-tao#arena" className="megamenu-link">Kỹ xảo & Hoạt hình 3D</Link>
                        </div>
                        <div className="program-cat">
                          <h4>APTECH COMPUTER EDUCATION</h4>
                          <Link href="/dao-tao#aptech" className="megamenu-link">Lập trình viên quốc tế (ADSE)</Link>
                          <Link href="/dao-tao#aptech" className="megamenu-link">Trí tuệ nhân tạo (AI)</Link>
                          <Link href="/dao-tao#aptech" className="megamenu-link">Khoa học dữ liệu</Link>
                        </div>
                        <div className="program-cat">
                          <h4>FPT SKILLKING</h4>
                          <Link href="/dao-tao#skillking" className="megamenu-link">Digital Marketing chuyên sâu</Link>
                          <Link href="/dao-tao#skillking" className="megamenu-link">Social Media & SEO</Link>
                          <Link href="/dao-tao#skillking" className="megamenu-link">Quản trị chiến dịch số</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* Menu Item: Tuyển sinh */}
              <li className="menu-item has-megamenu">
                <Link href="/tuyen-sinh" className="menu-link">Tuyển sinh</Link>
                <div className="megamenu">
                  <div className="container megamenu-grid">
                    <div className="megamenu-title-col">
                      <h3>Tuyển sinh 2026</h3>
                      <p>Khởi động tương lai với các suất học bổng tài năng và quy trình ứng tuyển linh hoạt.</p>
                    </div>
                    <div className="megamenu-links-col">
                      <div className="megamenu-links-grid">
                        <Link href="/tuyen-sinh#thong-tin" className="megamenu-link">Thông tin tuyển sinh 2026</Link>
                        <Link href="/tuyen-sinh#hoc-bong" className="megamenu-link">Học bổng & Ưu đãi nhập học</Link>
                        <Link href="/tuyen-sinh#hoc-phi" className="megamenu-link">Chính sách học phí</Link>
                        <Link href="/tuyen-sinh#dang-ky" className="megamenu-link">Đăng ký tuyển sinh trực tuyến</Link>
                        <Link href="/tuyen-sinh#dang-ky" className="megamenu-link">Tư vấn 1:1 cùng chuyên gia</Link>
                        <Link href="/tuyen-sinh#faq" className="megamenu-link">Câu hỏi thường gặp (FAQ)</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* Menu Item: Sinh viên */}
              <li className="menu-item has-megamenu">
                <Link href="/doi-song" className="menu-link">Đời sống Sinh viên</Link>
                <div className="megamenu">
                  <div className="container megamenu-grid">
                    <div className="megamenu-title-col">
                      <h3>Trải nghiệm Sinh viên</h3>
                      <p>Phát triển toàn diện với hoạt động ngoại khóa đa dạng, câu lạc bộ sôi động và dự án cộng đồng.</p>
                    </div>
                    <div className="megamenu-links-col">
                      <div className="megamenu-links-grid">
                        <Link href="/doi-song#sân-chơi" className="megamenu-link">Câu lạc bộ & Sân chơi học thuật</Link>
                        <Link href="/doi-song#doanh-nghiep" className="megamenu-link">Liên kết & Trải nghiệm Doanh nghiệp</Link>
                        <Link href="/doi-song#su-kien" className="megamenu-link">Hoạt động Sự kiện & Teambuilding</Link>
                        <Link href="/doi-song#viec-lam" className="megamenu-link">Dịch vụ Hỗ trợ việc làm (Job Hub)</Link>
                        <Link href="/doi-song#alumni" className="megamenu-link">Cựu sinh viên tiêu biểu</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* Menu Item: Tin tức */}
              <li className="menu-item">
                <Link href="/tin-tuc" className="menu-link">Tin tức - Sự kiện</Link>
              </li>

              {/* Menu Item: Liên hệ */}
              <li className="menu-item">
                <Link href="/lien-he" className="menu-link">Liên hệ</Link>
              </li>
            </ul>
          </nav>

          {/* Right actions: Search icon & Hamburger */}
          <div className="nav-actions">
            <button className="search-btn" aria-label="Search">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </button>
            <button className="mobile-menu-toggle" aria-label="Toggle menu">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
