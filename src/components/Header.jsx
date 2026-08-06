'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Zap, Palette, Megaphone, ChevronDown, Cpu } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedCats, setExpandedCats] = useState({});

  const toggleCategory = (cat) => {
    setExpandedCats(prev => ({
      ...prev,
      [cat]: !prev[cat]
    }));
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setExpandedCats({});
  };

  return (
    <header className="header-container">
      {/* Main Header navigation */}
      <div className="main-nav-container">
        <div className="container main-nav-content">
          {/* Logo */}
          <Link href="/" className="logo" onClick={closeMenu} style={{ display: 'flex', alignItems: 'center', height: '68px', padding: '2px 0' }}>
            <Image src="/logo_fpt_fai.png" alt="FPT FAI Logo" width={280} height={64} style={{ objectFit: 'contain', height: '100%', width: 'auto' }} />
          </Link>

          {/* Desktop Navigation Menu */}
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
                <div className="megamenu megamenu-light">
                  <div className="container megamenu-grid">
                    <div className="megamenu-title-col">
                      <h3>Chương trình Đào tạo</h3>
                      <p>Hệ thống chương trình chuẩn quốc tế chuyển giao trực tiếp từ đối tác nước ngoài hàng đầu.</p>
                    </div>
                    <div className="megamenu-links-col">
                      <div className="megamenu-links-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
                        <div className="program-cat brand-aptech">
                          <div style={{ marginBottom: '16px', height: '46px', display: 'flex', alignItems: 'center' }}>
                            <Image src="/logo_aptech.png" alt="FPT Aptech" width={160} height={38} style={{ objectFit: 'contain', objectPosition: 'left', width: 'auto', height: '38px', maxWidth: '160px' }} />
                          </div>
                          <Link href="/dao-tao/aptech" className="megamenu-link">Lập trình Fullstack 2 năm</Link>
                          <Link href="/dao-tao/aptech" className="megamenu-link">Lập trình Back end 1 năm</Link>
                          <Link href="/dao-tao/aptech" className="megamenu-link">Lập trình Front end 6 tháng</Link>
                          <Link href="/dao-tao/aptech" className="megamenu-link">Lập trình ngắn hạn 100-200h</Link>
                        </div>
                        <div className="program-cat brand-arena">
                          <div style={{ marginBottom: '16px', height: '46px', display: 'flex', alignItems: 'center' }}>
                            <Image src="/logo_arena.png" alt="FPT Arena" width={160} height={38} style={{ objectFit: 'contain', objectPosition: 'left', width: 'auto', height: '38px', maxWidth: '160px' }} />
                          </div>
                          <Link href="/dao-tao/arena" className="megamenu-link">Arena Multimedia Specialist Program (2 năm)</Link>
                          <Link href="/dao-tao/arena" className="megamenu-link">Thiết kế 2D, 3D, Game và App (6–18 tháng)</Link>
                          <Link href="/dao-tao/arena" className="megamenu-link">Các khóa học ngắn hạn (100 giờ)</Link>
                        </div>
                        <div className="program-cat brand-skillking">
                          <div style={{ marginBottom: '16px', height: '46px', display: 'flex', alignItems: 'center' }}>
                            <Image src="/logo_skillking.png" alt="FPT Skillking" width={160} height={38} style={{ objectFit: 'contain', objectPosition: 'left', width: 'auto', height: '38px', maxWidth: '160px' }} />
                          </div>
                          <Link href="/dao-tao/skillking" className="megamenu-link">Fullstack Digital Marketing With AI (18 tháng)</Link>
                          <Link href="/dao-tao/skillking" className="megamenu-link">Bộ khóa học Digital Marketing thực chiến (100 giờ)</Link>
                        </div>
                        <div className="program-cat brand-jetking">
                          <div style={{ marginBottom: '16px', height: '46px', display: 'flex', alignItems: 'center' }}>
                            <Image src="/logo_jetking.png" alt="FPT Jetking" width={160} height={38} style={{ objectFit: 'contain', objectPosition: 'left', width: 'auto', height: '38px', maxWidth: '160px' }} />
                          </div>
                          <Link href="/dao-tao/chip-design" className="megamenu-link">Thiết kế vi mạch bán dẫn quốc tế tích hợp AI (2 năm)</Link>
                          <Link href="/dao-tao/ai-agent" className="megamenu-link">Lập trình AI Agent (6 tháng - 2 năm)</Link>
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
                <Link href="/doi-song" className="menu-link">Trải nghiệm Sinh viên</Link>
                <div className="megamenu">
                  <div className="container megamenu-grid">
                    <div className="megamenu-title-col">
                      <h3>Trải nghiệm Sinh viên</h3>
                      <p>Phát triển toàn diện với hoạt động ngoại khoá đa dạng, câu lạc bộ sôi động và dự án cộng đồng.</p>
                    </div>
                    <div className="megamenu-links-col">
                      <div className="megamenu-links-grid">
                        <Link href="/doi-song#nhip-song" className="megamenu-link">Mỗi FAIer một nhịp sống (4 Trụ cột)</Link>
                        <Link href="/doi-song#graduation" className="megamenu-link">Lễ Tốt nghiệp & Vinh danh</Link>
                        <Link href="/doi-song#enterprise" className="megamenu-link">Doanh nghiệp & FAI</Link>
                        <Link href="/doi-song#sharing" className="megamenu-link">Nhỏ to cùng chia sẻ</Link>
                        <Link href="/doi-song#contests" className="megamenu-link">Sân chơi & Giải thưởng</Link>
                        <Link href="/doi-song#community" className="megamenu-link">FAI & Cộng đồng</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className="menu-item">
                <Link href="/tin-tuc" className="menu-link">Tin tức - Sự kiện</Link>
              </li>
            </ul>
          </nav>

          {/* Right actions */}
          <div className="nav-actions">
            <button className="search-btn" aria-label="Search" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Search size={20} />
            </button>
            <Link href="/tuyen-sinh" className="nav-cta-btn" onClick={closeMenu}>
              <span className="nav-cta-pulse"></span>
              Đăng Ký Tư Vấn
            </Link>
            <button 
              className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`} 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-menu-drawer ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-inner">
          <ul className="mobile-menu-list">
            <li className="mobile-menu-item">
              <div className="mobile-category-header" onClick={() => toggleCategory('ve-fai')}>
                <span>Về FAI</span>
                <ChevronDown size={18} className={expandedCats['ve-fai'] ? 'rotate' : ''} />
              </div>
              <ul className={`mobile-submenu ${expandedCats['ve-fai'] ? 'open' : ''}`}>
                <li><Link href="/ve-fai#gioi-thieu" onClick={closeMenu}>Giới thiệu chung</Link></li>
                <li><Link href="/ve-fai#giang-vien" onClick={closeMenu}>Đội ngũ giảng viên</Link></li>
                <li><Link href="/ve-fai#thanh-tuu" onClick={closeMenu}>Thành tựu & Con số</Link></li>
                <li><Link href="/ve-fai#campus" onClick={closeMenu}>Hệ thống Campus toàn quốc</Link></li>
                <li><Link href="/ve-fai#doanh-nghiep" onClick={closeMenu}>Đối tác doanh nghiệp</Link></li>
              </ul>
            </li>

            <li className="mobile-menu-item">
              <div className="mobile-category-header" onClick={() => toggleCategory('dao-tao')}>
                <span>Chương trình Đào tạo</span>
                <ChevronDown size={18} className={expandedCats['dao-tao'] ? 'rotate' : ''} />
              </div>
              <ul className={`mobile-submenu ${expandedCats['dao-tao'] ? 'open' : ''}`}>
                <li className="mobile-submenu-section-title" style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '4px' }}>APTECH — Công Nghệ</li>
                <li><Link href="/dao-tao/aptech" onClick={closeMenu}>Lập trình viên Quốc tế (ADSE)</Link></li>
                <li><Link href="/dao-tao/aptech" onClick={closeMenu}>Trí tuệ Nhân tạo (AI)</Link></li>
                <li><Link href="/dao-tao/aptech" onClick={closeMenu}>Khoa học Dữ liệu</Link></li>
                
                <li className="mobile-submenu-section-title" style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--accent-orange, #e8741e)', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '12px' }}>ARENA — Sáng Tạo</li>
                <li><Link href="/dao-tao/arena" onClick={closeMenu}>Mỹ thuật Đa phương tiện</Link></li>
                <li><Link href="/dao-tao/arena" onClick={closeMenu}>Thiết kế Đồ họa & Web</Link></li>
                <li><Link href="/dao-tao/arena" onClick={closeMenu}>Kỹ xảo & Hoạt hình 3D</Link></li>
                
                <li className="mobile-submenu-section-title" style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--success, #16a34a)', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '12px' }}>SKILLKING — Marketing</li>
                <li><Link href="/dao-tao/skillking" onClick={closeMenu}>Digital Marketing chuyên sâu</Link></li>
                <li><Link href="/dao-tao/skillking" onClick={closeMenu}>Social Media & SEO</Link></li>
                <li><Link href="/dao-tao/skillking" onClick={closeMenu}>Quản trị chiến dịch số</Link></li>

                <li className="mobile-submenu-section-title" style={{ fontSize: '0.8rem', fontWeight: 800, color: '#8b5cf6', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '12px' }}>JETKING — Công Nghệ Mới</li>
                <li><Link href="/dao-tao/chip-design" onClick={closeMenu}>Thiết kế Vi mạch Bán dẫn</Link></li>
                <li><Link href="/dao-tao/ai-agent" onClick={closeMenu}>Chuyên gia AI Agent</Link></li>
              </ul>
            </li>

            <li className="mobile-menu-item">
              <div className="mobile-category-header" onClick={() => toggleCategory('tuyen-sinh')}>
                <span>Tuyển sinh</span>
                <ChevronDown size={18} className={expandedCats['tuyen-sinh'] ? 'rotate' : ''} />
              </div>
              <ul className={`mobile-submenu ${expandedCats['tuyen-sinh'] ? 'open' : ''}`}>
                <li><Link href="/tuyen-sinh#thong-tin" onClick={closeMenu}>Thông tin tuyển sinh 2026</Link></li>
                <li><Link href="/tuyen-sinh#hoc-bong" onClick={closeMenu}>Học bổng & Ưu đãi nhập học</Link></li>
                <li><Link href="/tuyen-sinh#hoc-phi" onClick={closeMenu}>Chính sách học phí</Link></li>
                <li><Link href="/tuyen-sinh#dang-ky" onClick={closeMenu}>Đăng ký tuyển sinh trực tuyến</Link></li>
                <li><Link href="/tuyen-sinh#faq" onClick={closeMenu}>Câu hỏi thường gặp (FAQ)</Link></li>
              </ul>
            </li>

            <li className="mobile-menu-item">
              <div className="mobile-category-header" onClick={() => toggleCategory('doi-song')}>
                <span>Trải nghiệm Sinh viên</span>
                <ChevronDown size={18} className={expandedCats['doi-song'] ? 'rotate' : ''} />
              </div>
              <ul className={`mobile-submenu ${expandedCats['doi-song'] ? 'open' : ''}`}>
                <li><Link href="/doi-song#nhip-song" onClick={closeMenu}>Mỗi FAIer một nhịp sống (4 Trụ cột)</Link></li>
                <li><Link href="/doi-song#graduation" onClick={closeMenu}>Lễ Tốt nghiệp & Vinh danh</Link></li>
                <li><Link href="/doi-song#enterprise" onClick={closeMenu}>Doanh nghiệp & FAI</Link></li>
                <li><Link href="/doi-song#sharing" onClick={closeMenu}>Nhỏ to cùng chia sẻ</Link></li>
                <li><Link href="/doi-song#contests" onClick={closeMenu}>Sân chơi & Giải thưởng</Link></li>
                <li><Link href="/doi-song#community" onClick={closeMenu}>FAI & Cộng đồng</Link></li>
              </ul>
            </li>

            <li className="mobile-menu-item-single" style={{ padding: '8px 0', borderBottom: '1px solid rgba(13,33,55,0.05)' }}>
              <Link href="/tin-tuc" className="mobile-single-link" style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--secondary)' }} onClick={closeMenu}>Tin tức - Sự kiện</Link>
            </li>
          </ul>

          <div className="mobile-menu-actions">
            <Link href="/tuyen-sinh" className="nav-cta-btn" onClick={closeMenu}>
              Đăng Ký Tư Vấn
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
