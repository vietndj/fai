'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ParticleCanvas from '@/components/ParticleCanvas';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check } from 'lucide-react';

export default function ArenaSubpage() {
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
    <div className={`beau-subpage-container theme-arena active-sec-${activeSection}`}>
      <Header />

      {/* Section 0: Hero Section */}
      <section className="beau-hero">
        <ParticleCanvas className="beau-hero-particles" />
        <div className="beau-hero-bg-text">ARENA</div>
        <div className="container beau-hero-inner" data-reveal>
          <span className="beau-hero-brand" style={{ backgroundColor: '#ffb600', color: '#ffffff' }}>
            FPT ARENA MULTIMEDIA
          </span>
          <h1 className="beau-hero-title">
            Mỹ Thuật<br />Đa Phương Tiện
          </h1>
          <div className="beau-hero-logo" style={{ marginTop: '20px', display: 'flex', alignItems: 'center' }}>
            <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="120" height="20" rx="3" fill="#e31a22"/>
              <text x="22" y="15" fill="white" fontSize="11" fontWeight="900" fontFamily="sans-serif" letterSpacing="2">ARENA</text>
              <rect y="22" width="120" height="18" rx="3" fill="#ffcc00"/>
              <text x="12" y="35" fill="black" fontSize="9" fontWeight="800" fontFamily="sans-serif" letterSpacing="1">MULTIMEDIA</text>
            </svg>
          </div>
          <p className="beau-hero-desc">
            Chương trình đào tạo Mỹ thuật Đa phương tiện chuẩn quốc tế (AMSP) hàng đầu thế giới. Nơi sáng tạo gặp gỡ công nghệ kỹ thuật số. Trang bị toàn diện kỹ năng từ thiết kế đồ họa 2D, giao diện web UI/UX đến làm phim kỹ thuật số, kỹ xảo điện ảnh và hoạt hình 3D đỉnh cao.
          </p>

          <div className="beau-stats-bar">
            <div className="beau-stat-item">
              <h3 style={{ color: '#ffb600' }}>15+ Năm</h3>
              <p>Khởi nguồn giáo dục mỹ thuật đa phương tiện đầu tiên tại Việt Nam.</p>
            </div>
            <div className="beau-stat-item">
              <h3 style={{ color: '#ffb600' }}>AMSP</h3>
              <p>Hệ thống chứng chỉ danh tiếng quốc tế do tập đoàn Aptech Ấn Độ cấp.</p>
            </div>
            <div className="beau-stat-item">
              <h3 style={{ color: '#ffb600' }}>20+</h3>
              <p>Quốc gia sở hữu mạng lưới trung tâm liên kết Arena toàn cầu.</p>
            </div>
          </div>

          {/* Banner Image */}
          <div className="beau-hero-banner">
            <Image
              src="/banner_arena_sub_v2.png"
              alt="Tuyển sinh Arena Multimedia"
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
              <div className="beau-sticky-label" style={{ color: '#ffb600', opacity: 0.15 }}>AMSP</div>
              <p className="beau-sticky-desc">
                Giáo trình cập nhật liên tục các xu hướng sáng tạo mới nhất: UI/UX di động, kỹ xảo CGI điện ảnh, diễn hoạt hoạt hình 3D và môi trường thiết kế game chuẩn Unreal.
              </p>
            </div>

            {/* Right semester cards */}
            <div className="beau-split-right">
              {/* Semester 1 */}
              <div className="beau-sem-card" data-reveal data-reveal-delay="0.1">
                <span className="sem-num" style={{ color: '#ffb600' }}>Học Kỳ 01</span>
                <h3 className="sem-title">Graphic Design — Thiết kế đồ họa thương hiệu</h3>
                <p className="sem-desc">
                  Đặt nền móng tư duy thẩm mỹ vững chắc. Học viên làm quen với nguyên lý thiết kế, bố cục chữ (Typography), quản lý màu sắc và thành thạo bộ công cụ Photoshop, Illustrator, InDesign để tạo ra các ấn phẩm truyền thông ấn tượng.
                </p>
                <span className="sem-modules-title">Môn học trọng tâm</span>
                <ul className="sem-modules-list">
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Nguyên lý thiết kế & Bố cục thị giác</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Xử lý hình ảnh kỹ thuật số với Adobe Photoshop</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Thiết kế minh họa vector bằng Adobe Illustrator</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Nghệ thuật Typography & Thiết kế chữ ứng dụng</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Dàn trang chuyên nghiệp với Adobe InDesign</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Đồ án Nhận diện Thương hiệu e-Project</li>
                </ul>
              </div>

              {/* Semester 2 */}
              <div className="beau-sem-card" data-reveal data-reveal-delay="0.1">
                <span className="sem-num" style={{ color: '#ffb600' }}>Học Kỳ 02</span>
                <h3 className="sem-title">Web & UI/UX Design — Thiết kế Web & Trải nghiệm người dùng</h3>
                <p className="sem-desc">
                  Tiến vào thế giới giao diện số tương tác. Học viên học cách nghiên cứu hành vi người dùng, vẽ phác thảo luồng trải nghiệm, thiết kế giao diện ứng dụng di động trên Figma và code HTML5/CSS3/Bootstrap để đưa giao diện vào thực tế.
                </p>
                <span className="sem-modules-title">Môn học trọng tâm</span>
                <ul className="sem-modules-list">
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Tư duy thiết kế trải nghiệm người dùng (UX Design)</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Thiết kế giao diện ứng dụng (UI Design) trên Figma</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Lập trình Front-end cơ bản với HTML5 & CSS3</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Thiết kế Website responsive với Bootstrap</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Xây dựng nội dung tương tác kỹ thuật số</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Đồ án Thiết kế Web & App tương tác e-Project</li>
                </ul>
              </div>

              {/* Semester 3 */}
              <div className="beau-sem-card" data-reveal data-reveal-delay="0.1">
                <span className="sem-num" style={{ color: '#ffb600' }}>Học Kỳ 03</span>
                <h3 className="sem-title">Filmmaking & Game Design — Kỹ xảo, Làm phim & Thiết kế Game</h3>
                <p className="sem-desc">
                  Làm chủ chuyển động và câu chuyện hình ảnh. Học viên học quy trình biên kịch, quay phim chuyên nghiệp, biên tập hậu kỳ âm thanh hình ảnh bằng Premiere, kỹ xảo CGI phức tạp bằng After Effects và lên ý tưởng thiết kế game 3D.
                </p>
                <span className="sem-modules-title">Môn học trọng tâm</span>
                <ul className="sem-modules-list">
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Kỹ thuật quay phim & Kịch bản phân cảnh hình ảnh</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Biên tập video & hậu kỳ với Adobe Premiere Pro</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Kỹ xảo chuyển động & hiệu ứng hình ảnh (After Effects)</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Thiết kế âm thanh số và lồng tiếng hậu kỳ</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Nền tảng Thiết kế Game 3D & Sáng tạo thế giới</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Đồ án Phim ngắn kỹ thuật số e-Project</li>
                </ul>
              </div>

              {/* Semester 4 */}
              <div className="beau-sem-card" data-reveal data-reveal-delay="0.1">
                <span className="sem-num" style={{ color: '#ffb600' }}>Học Kỳ 04</span>
                <h3 className="sem-title">3D Animation — Hoạt hình 3D chuyên sâu</h3>
                <p className="sem-desc">
                  Thổi hồn cho các mô hình kỹ thuật số. Học viên học cách tạo hình nhân vật 3D (Modeling), dựng khung xương (Rigging), tạo chuyển động (Animation) và kết xuất ánh sáng (Rendering) chuyên nghiệp bằng Autodesk Maya.
                </p>
                <span className="sem-modules-title">Môn học trọng tâm</span>
                <ul className="sem-modules-list">
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Dựng hình nhân vật 3D chuyên sâu (3D Modeling)</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Thiết kế vật liệu & Vẽ bản đồ họa bề mặt nhân vật</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Thiết lập khung xương & khớp chuyển động (Rigging)</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Diễn hoạt nhân vật & biểu cảm khuôn mặt 3D</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Kỹ thuật ánh sáng & Kết xuất hình ảnh (Rendering)</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Đồ án tốt nghiệp phim Hoạt hình 3D hoàn chỉnh</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Công Cụ & Công Nghệ */}
      <section className="beau-section beau-full-viewport">
        <div className="container" data-reveal>
          <span className="beau-section-eyebrow">CREATIVE TOOLS</span>
          <h2 className="beau-section-title">Làm Chủ Công Cụ Sáng Tạo</h2>

          <div className="beau-tech-grid">
            <div className="beau-tech-item" data-reveal data-reveal-delay="0.05">
              <span className="beau-tech-icon">Ps</span>
              <span className="beau-tech-name">Adobe Photoshop</span>
            </div>
            <div className="beau-tech-item" data-reveal data-reveal-delay="0.1">
              <span className="beau-tech-icon">Ai</span>
              <span className="beau-tech-name">Adobe Illustrator</span>
            </div>
            <div className="beau-tech-item" data-reveal data-reveal-delay="0.15">
              <span className="beau-tech-icon">Fg</span>
              <span className="beau-tech-name">Figma UI/UX</span>
            </div>
            <div className="beau-tech-item" data-reveal data-reveal-delay="0.2">
              <span className="beau-tech-icon">Pr</span>
              <span className="beau-tech-name">Adobe Premiere Pro</span>
            </div>
            <div className="beau-tech-item" data-reveal data-reveal-delay="0.25">
              <span className="beau-tech-icon">Ae</span>
              <span className="beau-tech-name">Adobe After Effects</span>
            </div>
            <div className="beau-tech-item" data-reveal data-reveal-delay="0.3">
              <span className="beau-tech-icon">My</span>
              <span className="beau-tech-name">Autodesk Maya</span>
            </div>
            <div className="beau-tech-item" data-reveal data-reveal-delay="0.35">
              <span className="beau-tech-icon">Bl</span>
              <span className="beau-tech-name">Blender 3D</span>
            </div>
            <div className="beau-tech-item" data-reveal data-reveal-delay="0.4">
              <span className="beau-tech-icon">UE</span>
              <span className="beau-tech-name">Unreal Engine</span>
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
            <div className="beau-career-card" style={{ borderLeftColor: '#ffb600' }} data-reveal data-reveal-delay="0.05">
              <h3 className="career-title">Graphic Designer</h3>
              <p className="career-desc">Thiết kế bộ nhận diện thương hiệu sản phẩm, bao bì nhãn mác và chiến dịch quảng bá truyền thông cho doanh nghiệp.</p>
            </div>
            <div className="beau-career-card" style={{ borderLeftColor: '#ffb600' }} data-reveal data-reveal-delay="0.1">
              <h3 className="career-title">UI/UX Designer</h3>
              <p className="career-desc">Nghiên cứu trải nghiệm và thiết kế giao diện trực quan cho các ứng dụng di động, website và phần mềm số.</p>
            </div>
            <div className="beau-career-card" style={{ borderLeftColor: '#ffb600' }} data-reveal data-reveal-delay="0.15">
              <h3 className="career-title">Motion Graphic Artist</h3>
              <p className="career-desc">Sáng tạo video đồ hoạ động phục vụ các chiến dịch quảng cáo mạng xã hội, intro phim và truyền thông số.</p>
            </div>
            <div className="beau-career-card" style={{ borderLeftColor: '#ffb600' }} data-reveal data-reveal-delay="0.2">
              <h3 className="career-title">3D Character Animator</h3>
              <p className="career-desc">Thiết lập chuyển động nhân vật 3D, biểu cảm gương mặt chuyên sâu cho các dự án hoạt hình và phim quảng cáo.</p>
            </div>
            <div className="beau-career-card" style={{ borderLeftColor: '#ffb600' }} data-reveal data-reveal-delay="0.25">
              <h3 className="career-title">Video Editor & VFX Specialist</h3>
              <p className="career-desc">Biên tập dàn dựng phim, xử lý kỹ xảo CGI hậu kỳ cho các thước phim ngắn quảng cáo, MV và điện ảnh chuyên nghiệp.</p>
            </div>
            <div className="beau-career-card" style={{ borderLeftColor: '#ffb600' }} data-reveal data-reveal-delay="0.3">
              <h3 className="career-title">Game Environment Artist</h3>
              <p className="career-desc">Thiết kế bối cảnh không gian 3D, kiến trúc môi trường, bản đồ và ánh sáng cho các dự án game đa nền tảng.</p>
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
            <div className="beau-incentive-card" style={{ '--accent': '#ffb600' }} data-reveal data-reveal-delay="0.05">
              <span className="incentive-badge">HỌC BỔNG</span>
              <h3 className="incentive-value">Lên tới 50%</h3>
              <p className="incentive-desc">Học bổng Tài năng sáng tạo hỗ trợ thế hệ nhà thiết kế trẻ phát triển tư duy nghệ thuật vượt trội.</p>
            </div>
            <div className="beau-incentive-card" style={{ '--accent': '#ffb600' }} data-reveal data-reveal-delay="0.1">
              <span className="incentive-badge">NHẬP HỌC SỚM</span>
              <h3 className="incentive-value">Tặng Wacom</h3>
              <p className="incentive-desc">Ưu đãi tặng ngay Bảng vẽ Wacom thế hệ mới cho học viên hoàn thành thủ tục nhập học sớm đợt này.</p>
            </div>
            <div className="beau-incentive-card" style={{ '--accent': '#ffb600' }} data-reveal data-reveal-delay="0.15">
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

            <Link href="/dao-tao/skillking" className="beau-other-program-card" data-reveal data-reveal-delay="0.1">
              <div>
                <span className="other-prog-tag" style={{ color: '#16a34a' }}>◈ SKILLKING</span>
                <h3 className="other-prog-title">Digital Marketing & Growth</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Chiến lược tiếp thị số thực chiến 100% — Tối ưu SEO, Google/Meta Ads, và quản trị chiến dịch tổng thể.
                </p>
              </div>
              <span className="other-prog-link" style={{ color: '#16a34a', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                Khám phá Tiếp Thị Số
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
            <Link href="/tin-tuc/trien-lam-do-an-arena-multimedia" className="beau-news-link-card" data-reveal data-reveal-delay="0.1">
              <span className="news-link-date">18 Tháng 6, 2026</span>
              <h4 className="news-link-title">Triển lãm đồ án Arena Multimedia tốt nghiệp thu hút hơn 30 doanh nghiệp săn đón</h4>
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
          <h2 className="beau-cta-title">Khai Phóng Tư Duy Sáng Tạo</h2>
          <Link href="/tuyen-sinh#dang-ky" className="beau-cta-btn">
            Đăng Ký Nhập Học Arena
            <ArrowRight size={24} strokeWidth={2.5} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
