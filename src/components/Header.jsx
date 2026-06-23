import Link from 'next/link';
import { Search, Zap, Palette, Megaphone } from 'lucide-react';

export default function Header() {
  return (
    <header className="header-container">

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
                        <Link href="/ve-fai#thanh-tuu" className="megamenu-link">Thành tựu & Con số</Link>
                        <Link href="/ve-fai#campus" className="megamenu-link">Hệ thống Campus toàn quốc</Link>
                        <Link href="/ve-fai#doanh-nghiep" className="megamenu-link">Đối tác doanh nghiệp</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

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
                        <div className="program-cat brand-aptech">
                          <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Zap size={18} style={{ color: '#1a6ed8' }} />
                            APTECH — Công Nghệ
                          </h4>
                          <Link href="/dao-tao/aptech" className="megamenu-link">Lập trình viên Quốc tế (ADSE)</Link>
                          <Link href="/dao-tao/aptech" className="megamenu-link">Trí tuệ Nhân tạo (AI)</Link>
                          <Link href="/dao-tao/aptech" className="megamenu-link">Khoa học Dữ liệu</Link>
                        </div>
                        <div className="program-cat brand-arena">
                          <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Palette size={18} style={{ color: '#e8741e' }} />
                            ARENA — Sáng Tạo
                          </h4>
                          <Link href="/dao-tao/arena" className="megamenu-link">Mỹ thuật Đa phương tiện</Link>
                          <Link href="/dao-tao/arena" className="megamenu-link">Thiết kế Đồ họa & Web</Link>
                          <Link href="/dao-tao/arena" className="megamenu-link">Kỹ xảo & Hoạt hình 3D</Link>
                        </div>
                        <div className="program-cat brand-skillking">
                          <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Megaphone size={18} style={{ color: '#16a34a' }} />
                            SKILLKING — Marketing
                          </h4>
                          <Link href="/dao-tao/skillking" className="megamenu-link">Digital Marketing chuyên sâu</Link>
                          <Link href="/dao-tao/skillking" className="megamenu-link">Social Media & SEO</Link>
                          <Link href="/dao-tao/skillking" className="megamenu-link">Quản trị chiến dịch số</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

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
                        <Link href="/tuyen-sinh#faq" className="megamenu-link">Câu hỏi thường gặp (FAQ)</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className="menu-item has-megamenu">
                <Link href="/doi-song" className="menu-link">Đời sống Sinh viên</Link>
                <div className="megamenu">
                  <div className="container megamenu-grid">
                    <div className="megamenu-title-col">
                      <h3>Trải nghiệm Sinh viên</h3>
                      <p>Phát triển toàn diện với hoạt động ngoại khoá đa dạng, câu lạc bộ sôi động và dự án cộng đồng.</p>
                    </div>
                    <div className="megamenu-links-col">
                      <div className="megamenu-links-grid">
                        <Link href="/doi-song#san-choi" className="megamenu-link">Câu lạc bộ & Sân chơi học thuật</Link>
                        <Link href="/doi-song#doanh-nghiep" className="megamenu-link">Liên kết & Trải nghiệm Doanh nghiệp</Link>
                        <Link href="/doi-song#su-kien" className="megamenu-link">Hoạt động Sự kiện & Teambuilding</Link>
                        <Link href="/doi-song#viec-lam" className="megamenu-link">Dịch vụ Hỗ trợ việc làm (Job Hub)</Link>
                        <Link href="/doi-song#alumni" className="megamenu-link">Cựu sinh viên tiêu biểu</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className="menu-item">
                <Link href="/tin-tuc" className="menu-link">Tin tức - Sự kiện</Link>
              </li>
              <li className="menu-item">
                <Link href="/lien-he" className="menu-link">Liên hệ</Link>
              </li>
            </ul>
          </nav>

          {/* Right actions */}
          <div className="nav-actions">
            <button className="search-btn" aria-label="Search" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Search size={20} />
            </button>
            <Link href="/tuyen-sinh" className="nav-cta-btn">
              <span className="nav-cta-pulse"></span>
              Đăng Ký Tư Vấn
            </Link>
            <button className="mobile-menu-toggle" aria-label="Toggle menu">
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
