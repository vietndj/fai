'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ParticleCanvas from '@/components/ParticleCanvas';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check } from 'lucide-react';

export default function AptechSubpage() {
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
    <div className={`beau-subpage-container theme-aptech active-sec-${activeSection}`}>
      <Header />

      {/* Section 0: Hero Section */}
      <section className="beau-hero">
        <ParticleCanvas className="beau-hero-particles" />
        <div className="beau-hero-bg-text">APTECH</div>
        <div className="container beau-hero-inner" data-reveal>
          <span className="beau-hero-brand" style={{ backgroundColor: '#e31a22', color: '#ffffff' }}>
            APTECH COMPUTER EDUCATION
          </span>
          <h1 className="beau-hero-title">
            Công Nghệ<br />Phần Mềm
          </h1>
          <div className="beau-hero-logo" style={{ marginTop: '20px', display: 'flex', alignItems: 'center' }}>
            <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="120" height="40" rx="6" fill="#e31a22"/>
              <text x="14" y="26" fill="white" fontSize="18" fontWeight="bold" fontFamily="sans-serif" letterSpacing="1">Aptech</text>
            </svg>
          </div>
          <p className="beau-hero-desc">
            Chương trình Lập trình viên Quốc tế (ADSE) hàng đầu thế giới. Trang bị tư duy thuật toán vững chắc, kỹ năng lập trình thực chiến toàn diện từ thiết kế cơ sở dữ liệu, phát triển ứng dụng di động, web doanh nghiệp đến tích hợp trí tuệ nhân tạo (AI) và công nghệ điện toán đám mây.
          </p>

          <div className="beau-stats-bar">
            <div className="beau-stat-item">
              <h3 style={{ color: '#e31a22' }}>28+ Năm</h3>
              <p>Phát triển giáo trình lập trình viên quốc tế uy tín toàn cầu.</p>
            </div>
            <div className="beau-stat-item">
              <h3 style={{ color: '#e31a22' }}>ADSE</h3>
              <p>Bằng cấp Advanced Diploma do tập đoàn Aptech Ấn Độ cấp, giá trị toàn cầu.</p>
            </div>
            <div className="beau-stat-item">
              <h3 style={{ color: '#e31a22' }}>40+</h3>
              <p>Quốc gia công nhận chứng chỉ Aptech và cho phép liên thông đại học quốc tế.</p>
            </div>
          </div>

          {/* Banner Image */}
          <div className="beau-hero-banner">
            <Image
              src="/banner_aptech_sub_v2.png"
              alt="Tuyển sinh Aptech Computer Education"
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
              <div className="beau-sticky-label" style={{ color: '#e31a22', opacity: 0.15 }}>ADSE</div>
              <p className="beau-sticky-desc">
                Giáo trình cập nhật liên tục các công nghệ mới nhất: Cloud Computing, Big Data, Machine Learning, Python và lập trình hướng đối tượng chuyên sâu.
              </p>
            </div>

            {/* Right semester cards */}
            <div className="beau-split-right">
              {/* Semester 1 */}
              <div className="beau-sem-card" data-reveal data-reveal-delay="0.1">
                <span className="sem-num" style={{ color: '#e31a22' }}>Học Kỳ 01</span>
                <h3 className="sem-title">Programming Basics & Database — Nền tảng lập trình</h3>
                <p className="sem-desc">
                  Xây dựng tư duy thuật toán vững chắc, làm quen với ngôn ngữ C/C++ và kiến trúc cơ sở dữ liệu quan hệ SQL Server. Sinh viên học cách thiết kế cấu trúc dữ liệu và phát triển website cơ bản.
                </p>
                <span className="sem-modules-title">Môn học trọng tâm</span>
                <ul className="sem-modules-list">
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Nhập môn lập trình & Logic thuật toán (C Language)</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Thiết kế Cơ sở dữ liệu quan hệ với SQL Server</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Thiết kế giao diện Web với HTML5, CSS3, Bootstrap</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Lập trình kịch bản client-side bằng JavaScript</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Xây dựng Website chuyên nghiệp & Đưa lên Hosting</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Đồ án phát triển Website tĩnh e-Project</li>
                </ul>
              </div>

              {/* Semester 2 */}
              <div className="beau-sem-card" data-reveal data-reveal-delay="0.1">
                <span className="sem-num" style={{ color: '#e31a22' }}>Học Kỳ 02</span>
                <h3 className="sem-title">Enterprise App Development with Java — Lập trình Java chuyên sâu</h3>
                <p className="sem-desc">
                  Chuyên sâu về lập trình hướng đối tượng (OOP) thông qua công nghệ Java. Sinh viên học phát triển các ứng dụng phần mềm quản lý doanh nghiệp quy mô lớn, an toàn bảo mật dữ liệu cao.
                </p>
                <span className="sem-modules-title">Môn học trọng tâm</span>
                <ul className="sem-modules-list">
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Lập trình hướng đối tượng với Java SE</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Cơ sở dữ liệu nâng cao & Tối ưu hóa truy vấn</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Phát triển ứng dụng Web doanh nghiệp (Servlet/JSP)</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Lập trình Java kết nối cơ sở dữ liệu (JDBC)</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Bảo mật hệ thống thông tin ứng dụng doanh nghiệp</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Đồ án Hệ thống Quản trị Doanh nghiệp Java e-Project</li>
                </ul>
              </div>

              {/* Semester 3 */}
              <div className="beau-sem-card" data-reveal data-reveal-delay="0.1">
                <span className="sem-num" style={{ color: '#e31a22' }}>Học Kỳ 03</span>
                <h3 className="sem-title">Fullstack Web & Mobile Development — Lập trình Web & Di động</h3>
                <p className="sem-desc">
                  Làm chủ các Framework hiện đại nhất đang được doanh nghiệp săn đón. Lập trình Fullstack Web (MERN Stack) và thiết kế ứng dụng di động đa nền tảng cho Android và iOS.
                </p>
                <span className="sem-modules-title">Môn học trọng tâm</span>
                <ul className="sem-modules-list">
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Phát triển Frontend Web tương tác nâng cao bằng React.js</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Xây dựng Backend Server & RESTful API với Node.js / Express</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Làm việc với Cơ sở dữ liệu phi quan hệ (NoSQL MongoDB)</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Lập trình ứng dụng di động đa nền tảng (React Native)</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Quản lý mã nguồn dự án với Git & GitHub</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Đồ án Ứng dụng Di động / Web App e-Project</li>
                </ul>
              </div>

              {/* Semester 4 */}
              <div className="beau-sem-card" data-reveal data-reveal-delay="0.1">
                <span className="sem-num" style={{ color: '#e31a22' }}>Học Kỳ 04</span>
                <h3 className="sem-title">Cloud Computing & AI/ML — Điện toán đám mây & Trí tuệ nhân tạo</h3>
                <p className="sem-desc">
                  Tiến vào biên giới của cách mạng công nghiệp 4.0. Học viên học cách triển khai ứng dụng lên các nền tảng đám mây (AWS/Azure) và lập trình tích hợp các mô hình máy học, Trí tuệ nhân tạo (AI/ML).
                </p>
                <span className="sem-modules-title">Môn học trọng tâm</span>
                <ul className="sem-modules-list">
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Lập trình phân tích dữ liệu & AI bằng ngôn ngữ Python</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Nhập môn Machine Learning & Deep Learning</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Triển khai hạ tầng Cloud Computing với AWS / Azure</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Tích hợp các dịch vụ AI thông minh (OpenAI API, Vision, NLP)</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Quy trình phát triển phần mềm chuẩn Agile/Scrum & DevOps</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Đồ án tốt nghiệp ứng dụng tích hợp AI e-Project</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Công Cụ & Công Nghệ */}
      <section className="beau-section beau-full-viewport">
        <div className="container" data-reveal>
          <span className="beau-section-eyebrow">TECH STACK & TOOLS</span>
          <h2 className="beau-section-title">Làm Chủ Công Nghệ Đầu Ngành</h2>

          <div className="beau-tech-grid">
            <div className="beau-tech-item" data-reveal data-reveal-delay="0.05">
              <span className="beau-tech-icon">Java</span>
              <span className="beau-tech-name">Java SE & EE</span>
            </div>
            <div className="beau-tech-item" data-reveal data-reveal-delay="0.1">
              <span className="beau-tech-icon">Py</span>
              <span className="beau-tech-name">Python</span>
            </div>
            <div className="beau-tech-item" data-reveal data-reveal-delay="0.15">
              <span className="beau-tech-icon">JS</span>
              <span className="beau-tech-name">JavaScript ES6</span>
            </div>
            <div className="beau-tech-item" data-reveal data-reveal-delay="0.2">
              <span className="beau-tech-icon">Re</span>
              <span className="beau-tech-name">React & React Native</span>
            </div>
            <div className="beau-tech-item" data-reveal data-reveal-delay="0.25">
              <span className="beau-tech-icon">Nd</span>
              <span className="beau-tech-name">Node.js / Express</span>
            </div>
            <div className="beau-tech-item" data-reveal data-reveal-delay="0.3">
              <span className="beau-tech-icon">SQL</span>
              <span className="beau-tech-name">MS SQL Server</span>
            </div>
            <div className="beau-tech-item" data-reveal data-reveal-delay="0.35">
              <span className="beau-tech-icon">Mg</span>
              <span className="beau-tech-name">MongoDB</span>
            </div>
            <div className="beau-tech-item" data-reveal data-reveal-delay="0.4">
              <span className="beau-tech-icon">AWS</span>
              <span className="beau-tech-name">Amazon Web Services</span>
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
            <div className="beau-career-card" style={{ borderLeftColor: '#e31a22' }} data-reveal data-reveal-delay="0.05">
              <h3 className="career-title">Frontend Developer</h3>
              <p className="career-desc">Thiết kế và phát triển giao diện người dùng tương tác phức tạp cho các sản phẩm web sử dụng React/Next.js.</p>
            </div>
            <div className="beau-career-card" style={{ borderLeftColor: '#e31a22' }} data-reveal data-reveal-delay="0.1">
              <h3 className="career-title">Backend Developer</h3>
              <p className="career-desc">Xây dựng kiến trúc máy chủ, lập trình RESTful API, thiết kế cơ sở dữ liệu và quản trị logic nghiệp vụ phần mềm.</p>
            </div>
            <div className="beau-career-card" style={{ borderLeftColor: '#e31a22' }} data-reveal data-reveal-delay="0.15">
              <h3 className="career-title">Fullstack Developer</h3>
              <p className="career-desc">Quản lý toàn vẹn từ Frontend đến Backend, tạo ra các ứng dụng Web/App hoàn chỉnh một cách độc lập.</p>
            </div>
            <div className="beau-career-card" style={{ borderLeftColor: '#e31a22' }} data-reveal data-reveal-delay="0.2">
              <h3 className="career-title">Mobile App Developer</h3>
              <p className="career-desc">Lập trình phát triển ứng dụng chạy trên hệ điều hành Android và iOS sử dụng các công nghệ Native hoặc Hybrid.</p>
            </div>
            <div className="beau-career-card" style={{ borderLeftColor: '#e31a22' }} data-reveal data-reveal-delay="0.25">
              <h3 className="career-title">Cloud Engineer</h3>
              <p className="career-desc">Thiết kế và vận hành hạ tầng đám mây cho doanh nghiệp, đảm bảo tính sẵn sàng cao và an toàn bảo mật phần mềm.</p>
            </div>
            <div className="beau-career-card" style={{ borderLeftColor: '#e31a22' }} data-reveal data-reveal-delay="0.3">
              <h3 className="career-title">AI Integration Specialist</h3>
              <p className="career-desc">Lập trình tích hợp các mô hình trí tuệ nhân tạo, máy học vào sản phẩm phần mềm hiện có để tối ưu hóa quy trình.</p>
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
            <div className="beau-incentive-card" style={{ '--accent': '#e31a22' }} data-reveal data-reveal-delay="0.05">
              <span className="incentive-badge">HỌC BỔNG</span>
              <h3 className="incentive-value">Lên tới 50%</h3>
              <p className="incentive-desc">Học bổng Tài năng công nghệ hỗ trợ thế hệ lập trình viên xuất sắc phát triển bản thân.</p>
            </div>
            <div className="beau-incentive-card" style={{ '--accent': '#e31a22' }} data-reveal data-reveal-delay="0.1">
              <span className="incentive-badge">NHẬP HỌC SỚM</span>
              <h3 className="incentive-value">Tặng Laptop</h3>
              <p className="incentive-desc">Ưu đãi tặng ngay Laptop học tập trị giá 15.000.000đ cho học viên hoàn thành thủ tục nhập học sớm.</p>
            </div>
            <div className="beau-incentive-card" style={{ '--accent': '#e31a22' }} data-reveal data-reveal-delay="0.15">
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
            <Link href="/dao-tao/arena" className="beau-other-program-card" data-reveal data-reveal-delay="0.05">
              <div>
                <span className="other-prog-tag" style={{ color: '#e8741e' }}>✦ ARENA</span>
                <h3 className="other-prog-title">Multimedia Design & Creative</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Thiết kế & Nghệ thuật kỹ thuật số — Làm chủ thiết kế đồ hoạ, UI/UX web, làm phim kỹ thuật số, kỹ xảo 3D & game.
                </p>
              </div>
              <span className="other-prog-link" style={{ color: '#e8741e', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                Khám phá Sáng Tạo
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
            <Link href="/tin-tuc/dai-nhac-hoi-fai-soundwave-2026" className="beau-news-link-card" data-reveal data-reveal-delay="0.1">
              <span className="news-link-date">23 Tháng 6, 2026</span>
              <h4 className="news-link-title">Đại nhạc hội FAI SoundWave 2026 kỷ niệm hành trình kiến tạo công nghệ sáng tạo</h4>
              <span className="news-link-action" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                Đọc tiếp <ArrowRight size={14} />
              </span>
            </Link>
            <Link href="/tin-tuc/hoc-vien-aptech-techwiz-toan-cau" className="beau-news-link-card" data-reveal data-reveal-delay="0.15">
              <span className="news-link-date">21 Tháng 6, 2026</span>
              <h4 className="news-link-title">Học viên Aptech xuất sắc chinh phục giải nhì Hackathon TechWiz toàn cầu</h4>
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
          <h2 className="beau-cta-title">Chinh Phục Thế Giới Công Nghệ Số</h2>
          <Link href="/tuyen-sinh#dang-ky" className="beau-cta-btn">
            Đăng Ký Nhập Học Aptech
            <ArrowRight size={24} strokeWidth={2.5} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
