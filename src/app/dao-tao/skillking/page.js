'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ParticleCanvas from '@/components/ParticleCanvas';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check } from 'lucide-react';

export default function SkillkingSubpage() {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const sections = document.querySelectorAll('.beau-hero, .beau-section, .beau-cta-section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Array.from(sections).indexOf(entry.target);
          if (index !== -1) {
            setActiveSection(index);
          }
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '-10% 0px -30% 0px'
    });

    sections.forEach(sec => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`beau-subpage-container theme-skillking active-sec-${activeSection}`}>
      <Header />

      {/* Section 0: Hero Section */}
      <section className="beau-hero">
        <ParticleCanvas className="beau-hero-particles" />
        <div className="beau-hero-bg-text">SKILLKING</div>
        <div className="container beau-hero-inner" data-reveal>
          <span className="beau-hero-brand" style={{ backgroundColor: '#09529c', color: '#ffffff' }}>
            FPT SKILLKING
          </span>
          <h1 className="beau-hero-title">
            Tiếp Thị<br />Kỹ Thuật Số
          </h1>
          <div className="beau-hero-logo" style={{ marginTop: '20px', display: 'flex', alignItems: 'center' }}>
            <svg width="130" height="40" viewBox="0 0 130 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 10 L22 17 L29 10 L26 25 L18 25 Z" fill="#f37021"/>
              <path d="M18 25 H26 V28 H18 Z" fill="#09529c"/>
              <text x="36" y="26" fill="#09529c" fontSize="16" fontWeight="bold" fontFamily="sans-serif">skillking</text>
            </svg>
          </div>
          <p className="beau-hero-desc">
            Chương trình đào tạo Chuyên gia Digital Marketing chuẩn quốc tế thực chiến 100%. Được phát triển trên nền tảng liên kết giữa Viện Giáo dục Quốc tế FPT và tập đoàn đào tạo công nghệ Jetking Ấn Độ. Trang bị kiến thức toàn diện từ Social Media, SEO, Performance Marketing đến quản trị dữ liệu số và hoạch định chiến dịch số.
          </p>

          <div className="beau-stats-bar">
            <div className="beau-stat-item">
              <h3 style={{ color: '#09529c' }}>Google &amp; Meta</h3>
              <p>Hệ thống kiến thức chuẩn chứng chỉ quảng cáo toàn cầu trực quan nhất.</p>
            </div>
            <div className="beau-stat-item">
              <h3 style={{ color: '#09529c' }}>25+ Năm</h3>
              <p>Kinh nghiệm đào tạo quốc tế uy tín chuyển giao trực tiếp từ Ấn Độ.</p>
            </div>
            <div className="beau-stat-item">
              <h3 style={{ color: '#09529c' }}>100%</h3>
              <p>Thời lượng thực chiến học đi đôi với hành thông qua dự án doanh nghiệp thực tế.</p>
            </div>
          </div>

          {/* Banner Image */}
          <div className="beau-hero-banner">
            <Image
              src="/banner_skillking_sub_v2.png"
              alt="Tuyển sinh FPT Skillking"
              width={1200}
              height={400}
              priority
            />
          </div>
        </div>
      </section>

      {/* Section 1: Lộ Trình Đào Tạo */}
      <section className="beau-section beau-full-viewport">
        <div className="container" data-reveal>
          <span className="beau-section-eyebrow">LỘ TRÌNH ĐÀO TẠO</span>
          <h2 className="beau-section-title">4 Học Kỳ Chuyên Sâu</h2>

          <div className="beau-split-grid">
            {/* Left label */}
            <div className="beau-split-left">
              <div className="beau-sticky-label" style={{ color: '#09529c', opacity: 0.15 }}>DIGITAL</div>
              <p className="beau-sticky-desc">
                Giáo trình cập nhật liên tục theo các thuật toán phân tích hành vi và quảng cáo đa nền tảng: SEO Google, Meta Ads, TikTok Ads, dữ liệu marketing CRM HubSpot.
              </p>
            </div>

            {/* Right semester cards */}
            <div className="beau-split-right">
              {/* Semester 1 */}
              <div className="beau-sem-card" data-reveal data-reveal-delay="0.1">
                <span className="sem-num" style={{ color: '#09529c' }}>Học Kỳ 01</span>
                <h3 className="sem-title">Social Media &amp; Content Strategy — Tiếp thị mạng xã hội</h3>
                <p className="sem-desc">
                  Thấu hiểu hành vi khách hàng trực tuyến. Học viên làm quen với nghiên cứu thị trường, viết nội dung sáng tạo chuẩn SEO, thiết kế ấn phẩm đồ họa tiếp thị bằng Canva, xây dựng thương hiệu cá nhân và quản trị các nền tảng mạng xã hội Facebook, TikTok, Instagram, Youtube.
                </p>
                <span className="sem-modules-title">Môn học trọng tâm</span>
                <ul className="sem-modules-list">
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Nghiên cứu thị trường & Chân dung khách hàng</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Sáng tạo nội dung (Copywriting & Content Strategy)</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Thiết kế hình ảnh tiếp thị truyền thông với Canva</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Quản trị và tối ưu hoá trang mạng xã hội thương hiệu</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Lập kế hoạch nội dung mạng xã hội tổng thể</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Đồ án Kế hoạch Tiếp thị Mạng xã hội e-Project</li>
                </ul>
              </div>

              {/* Semester 2 */}
              <div className="beau-sem-card" data-reveal data-reveal-delay="0.1">
                <span className="sem-num" style={{ color: '#09529c' }}>Học Kỳ 02</span>
                <h3 className="sem-title">Search Engine Optimization — Tối ưu hóa công cụ tìm kiếm</h3>
                <p className="sem-desc">
                  Chinh phục thứ hạng tìm kiếm tự nhiên của Google. Học viên học cách nghiên cứu từ khóa (Keywords Research), tối ưu Onpage/Offpage website, viết bài chuẩn SEO, phân tích kỹ thuật website (Technical SEO) và đo lường lượng truy cập qua Google Search Console, Google Analytics.
                </p>
                <span className="sem-modules-title">Môn học trọng tâm</span>
                <ul className="sem-modules-list">
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Nghiên cứu từ khóa & Phân tích đối thủ cạnh tranh</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Tối ưu cấu trúc & kỹ thuật On-page Website</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Xây dựng liên kết ngoài (Off-page Link building)</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Sử dụng các công cụ phân tích SEO (Semrush, Ahrefs)</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Đo lường website với Google Analytics & Console</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Đồ án Tối ưu hóa SEO Website doanh nghiệp</li>
                </ul>
              </div>

              {/* Semester 3 */}
              <div className="beau-sem-card" data-reveal data-reveal-delay="0.1">
                <span className="sem-num" style={{ color: '#09529c' }}>Học Kỳ 03</span>
                <h3 className="sem-title">Performance Marketing &amp; Google/Meta Ads — Tối ưu quảng cáo</h3>
                <p className="sem-desc">
                  Tận dụng tối đa ngân sách truyền thông số. Học viên học kỹ năng thiết lập tài khoản quảng cáo doanh nghiệp, đấu thầu từ khóa Google Search Ads, chạy quảng cáo hiển thị, tối ưu hóa chiến dịch quảng cáo Facebook/Instagram và tiếp thị lại (Remarketing).
                </p>
                <span className="sem-modules-title">Môn học trọng tâm</span>
                <ul className="sem-modules-list">
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Quản trị quảng cáo tìm kiếm Google Search Ads</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Quảng cáo hiển thị Google Display & YouTube Ads</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Thiết lập và vận hành Facebook Ads chuyên sâu</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Tối ưu phễu chuyển đổi quảng cáo số (CPA, CTR, ROI)</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Remarketing đa kênh và tối ưu hóa tệp đối tượng</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Đồ án Chạy chiến dịch Performance Marketing</li>
                </ul>
              </div>

              {/* Semester 4 */}
              <div className="beau-sem-card" data-reveal data-reveal-delay="0.1">
                <span className="sem-num" style={{ color: '#09529c' }}>Học Kỳ 04</span>
                <h3 className="sem-title">Digital Marketing Strategy &amp; Data Analytics — Hoạch định chiến lược</h3>
                <p className="sem-desc">
                  Trở thành nhà quản trị tiếp thị số toàn diện. Học viên học cách tích hợp dữ liệu khách hàng (CRM HubSpot), xây dựng phễu Marketing automation, phân bổ ngân sách tổng thể và viết kế hoạch Digital Marketing chi tiết cho doanh nghiệp lớn.
                </p>
                <span className="sem-modules-title">Môn học trọng tâm</span>
                <ul className="sem-modules-list">
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Quản trị quan hệ khách hàng với CRM HubSpot</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Marketing tự động hóa (Marketing Automation)</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Phân tích dữ liệu tiếp thị số và trực quan hóa</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Phân bổ ngân sách chiến dịch đa kênh tối ưu</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Hoạch định Kế hoạch Tiếp thị số tổng thể</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Đồ án tốt nghiệp Kế hoạch Tiếp thị số Doanh nghiệp</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Công Cụ & Công Nghệ */}
      <section className="beau-section beau-full-viewport">
        <div className="container" data-reveal>
          <span className="beau-section-eyebrow">MARKETING TOOLS</span>
          <h2 className="beau-section-title">Làm Chủ Công Cụ Tiếp Thị</h2>

          <div className="beau-tech-grid">
            <div className="beau-tech-item" data-reveal data-reveal-delay="0.05">
              <span className="beau-tech-icon">Ga</span>
              <span className="beau-tech-name">Google Analytics</span>
            </div>
            <div className="beau-tech-item" data-reveal data-reveal-delay="0.1">
              <span className="beau-tech-icon">Ad</span>
              <span className="beau-tech-name">Google Ads</span>
            </div>
            <div className="beau-tech-item" data-reveal data-reveal-delay="0.15">
              <span className="beau-tech-icon">Fb</span>
              <span className="beau-tech-name">Facebook Ads Manager</span>
            </div>
            <div className="beau-tech-item" data-reveal data-reveal-delay="0.2">
              <span className="beau-tech-icon">Tk</span>
              <span className="beau-tech-name">TikTok Ads</span>
            </div>
            <div className="beau-tech-item" data-reveal data-reveal-delay="0.25">
              <span className="beau-tech-icon">Sm</span>
              <span className="beau-tech-name">SEMrush SEO</span>
            </div>
            <div className="beau-tech-item" data-reveal data-reveal-delay="0.3">
              <span className="beau-tech-icon">Hs</span>
              <span className="beau-tech-name">HubSpot CRM</span>
            </div>
            <div className="beau-tech-item" data-reveal data-reveal-delay="0.35">
              <span className="beau-tech-icon">Wp</span>
              <span className="beau-tech-name">WordPress CMS</span>
            </div>
            <div className="beau-tech-item" data-reveal data-reveal-delay="0.4">
              <span className="beau-tech-icon">Cv</span>
              <span className="beau-tech-name">Canva Design</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Cơ Hội Nghề Nghiệp */}
      <section className="beau-section beau-full-viewport">
        <div className="container" data-reveal>
          <span className="beau-section-eyebrow">CAREERS</span>
          <h2 className="beau-section-title">Vị Trí Việc Làm Hậu Tốt Nghiệp</h2>

          <div className="beau-careers-grid">
            <div className="beau-career-card" style={{ borderLeftColor: '#09529c' }} data-reveal data-reveal-delay="0.05">
              <h3 className="career-title">Digital Marketing Executive</h3>
              <p className="career-desc">Setup và vận hành các chiến dịch quảng cáo, quản lý và chăm sóc nội dung đa kênh cho sản phẩm của doanh nghiệp.</p>
            </div>
            <div className="beau-career-card" style={{ borderLeftColor: '#09529c' }} data-reveal data-reveal-delay="0.1">
              <h3 className="career-title">SEO Specialist</h3>
              <p className="career-desc">Tối ưu hóa công cụ tìm kiếm, viết bài chuẩn SEO, đẩy từ khóa website thương hiệu lên vị trí top đầu Google.</p>
            </div>
            <div className="beau-career-card" style={{ borderLeftColor: '#09529c' }} data-reveal data-reveal-delay="0.15">
              <h3 className="career-title">Content Creator & Strategy</h3>
              <p className="career-desc">Sáng tạo kịch bản, sản xuất nội dung bài viết hình ảnh, video xu hướng trên mạng xã hội TikTok, Facebook.</p>
            </div>
            <div className="beau-career-card" style={{ borderLeftColor: '#09529c' }} data-reveal data-reveal-delay="0.2">
              <h3 className="career-title">Performance Marketing Specialist</h3>
              <p className="career-desc">Thiết lập tài khoản, tối ưu ngân sách chạy quảng cáo Google Ads, Meta Ads chuyên sâu mang lại chuyển đổi mua hàng cao.</p>
            </div>
            <div className="beau-career-card" style={{ borderLeftColor: '#09529c' }} data-reveal data-reveal-delay="0.25">
              <h3 className="career-title">Social Media Manager</h3>
              <p className="career-desc">Quản lý định hướng thương hiệu trực tuyến trên các kênh mạng xã hội lớn, phân tích báo cáo tương tác người dùng.</p>
            </div>
            <div className="beau-career-card" style={{ borderLeftColor: '#09529c' }} data-reveal data-reveal-delay="0.3">
              <h3 className="career-title">Growth Hacker / Marketing Planner</h3>
              <p className="career-desc">Lên kế hoạch và thử nghiệm các kênh tăng trưởng traffic, tối ưu phễu chuyển đổi số tổng thể cho startup và doanh nghiệp.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Ưu Đãi Tuyển Sinh Đặc Quyền (Split section) */}
      <section className="beau-section beau-full-viewport">
        <div className="container" data-reveal>
          <span className="beau-section-eyebrow">HỌC BỔNG & CHÍNH SÁCH</span>
          <h2 className="beau-section-title" style={{ marginBottom: '60px' }}>Ưu Đãi Tuyển Sinh Đặc Quyền</h2>
          
          <div className="beau-incentives-grid">
            <div className="beau-incentive-card" style={{ '--accent': '#09529c' }} data-reveal data-reveal-delay="0.05">
              <span className="incentive-badge">HỌC BỔNG</span>
              <h3 className="incentive-value">Lên tới 50%</h3>
              <p className="incentive-desc">Học bổng Tài năng Marketing hỗ trợ thế hệ planners nhạy bén, khai phóng tư duy tiếp thị số đỉnh cao.</p>
            </div>
            <div className="beau-incentive-card" style={{ '--accent': '#09529c' }} data-reveal data-reveal-delay="0.1">
              <span className="incentive-badge">NHẬP HỌC SỚM</span>
              <h3 className="incentive-value">Tặng Khoá Học</h3>
              <p className="incentive-desc">Ưu đãi tặng ngay khoá học AI Marketing / ChatGPT Automation bổ trợ cho học viên hoàn thành thủ tục sớm.</p>
            </div>
            <div className="beau-incentive-card" style={{ '--accent': '#09529c' }} data-reveal data-reveal-delay="0.15">
              <span className="incentive-badge">TRẢ GÓP</span>
              <h3 className="incentive-value">0% Lãi Suất</h3>
              <p className="incentive-desc">Hỗ trợ chia nhỏ học phí đóng theo từng tháng qua thẻ tín dụng ngân hàng đối tác.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Chuyển Hướng Nhanh Ngành Học (Split section) */}
      <section className="beau-section beau-full-viewport">
        <div className="container" data-reveal>
          <span className="beau-section-eyebrow">KHÁM PHÁ CÁC NGÀNH HỌC KHÁC</span>
          <h2 className="beau-section-title" style={{ marginBottom: '60px' }}>Chuyển Hướng Nhanh Ngành Học</h2>
          
          <div className="beau-other-programs-grid">
            <Link href="/dao-tao/aptech" className="beau-other-program-card" data-reveal data-reveal-delay="0.05">
              <div>
                <span className="other-prog-tag" style={{ color: '#1a6ed8' }}>✦ APTECH</span>
                <h3 className="other-prog-title">Software Engineering &amp; Technology</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Lập trình viên Quốc tế ADSE — Làm chủ ngôn ngữ Java, Python, lập trình Web/Mobile Fullstack, điện toán đám mây và AI/ML.
                </p>
              </div>
              <span className="other-prog-link" style={{ color: '#1a6ed8', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                Khám phá Công Nghệ
                <ArrowRight size={18} />
              </span>
            </Link>

            <Link href="/dao-tao/arena" className="beau-other-program-card" data-reveal data-reveal-delay="0.1">
              <div>
                <span className="other-prog-tag" style={{ color: '#e8741e' }}>◈ ARENA</span>
                <h3 className="other-prog-title">Multimedia Design &amp; Creative</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Thiết kế &amp; Nghệ thuật kỹ thuật số — Làm chủ thiết kế đồ hoạ, UI/UX web, làm phim kỹ thuật số, kỹ xảo 3D &amp; game.
                </p>
              </div>
              <span className="other-prog-link" style={{ color: '#e8741e', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                Khám phá Sáng Tạo
                <ArrowRight size={18} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 6: Có Thể Bạn Quan Tâm (Split section) */}
      <section className="beau-section beau-full-viewport">
        <div className="container" data-reveal>
          <span className="beau-section-eyebrow">TIN TỨC & SỰ KIỆN NỔI BẬT</span>
          <h2 className="beau-section-title" style={{ marginBottom: '60px' }}>Có Thể Bạn Quan Tâm</h2>
          
          <div className="beau-news-links-grid">
            <Link href="/tin-tuc/le-tot-nghiep-fai-2026-vinh-danh-tan-khoa" className="beau-news-link-card" data-reveal data-reveal-delay="0.05">
              <span className="news-link-date">23 Tháng 6, 2026</span>
              <h4 className="news-link-title">Lễ tốt nghiệp FAI 2026: Vinh danh 500+ tân khoa xuất sắc từ các phân hệ đào tạo</h4>
              <span className="news-link-action" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                Đọc tiếp <ArrowRight size={14} />
              </span>
            </Link>
            <Link href="/tin-tuc/fpt-skillking-hoi-thao-seo-ads" className="beau-news-link-card" data-reveal data-reveal-delay="0.1">
              <span className="news-link-date">15 Tháng 6, 2026</span>
              <h4 className="news-link-title">FPT Skillking tổ chức chuỗi hội thảo SEO &amp; Ads thực chiến cùng chuyên gia</h4>
              <span className="news-link-action" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                Đọc tiếp <ArrowRight size={14} />
              </span>
            </Link>
            <Link href="/tin-tuc/dai-nhac-hoi-fai-soundwave-2026" className="beau-news-link-card" data-reveal data-reveal-delay="0.15">
              <span className="news-link-date">23 Tháng 6, 2026</span>
              <h4 className="news-link-title">Đại nhạc hội FAI SoundWave 2026 kỷ niệm hành trình kiến tạo công nghệ sáng tạo</h4>
              <span className="news-link-action" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                Đọc tiếp <ArrowRight size={14} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 7: Bottom CTA Section */}
      <section className="beau-cta-section beau-full-viewport">
        <div className="beau-cta-bg-circle"></div>
        <div className="container beau-cta-inner" data-reveal>
          <h2 className="beau-cta-title">Chinh Phục Thị Trường Kỹ Thuật Số</h2>
          <Link href="/tuyen-sinh#dang-ky" className="beau-cta-btn">
            Đăng Ký Nhập Học Skillking
            <ArrowRight size={24} strokeWidth={2.5} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
