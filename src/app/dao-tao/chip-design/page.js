'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ParticleCanvas from '@/components/ParticleCanvas';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check } from 'lucide-react';

export default function ChipDesignSubpage() {
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
    <div className={`beau-subpage-container theme-chip-design active-sec-${activeSection}`}>
      <Header />

      {/* Section 0: Hero Section */}
      <section className="beau-hero">
        <ParticleCanvas className="beau-hero-particles" />
        <div className="beau-hero-bg-text">CHIP DESIGN</div>
        <div className="container beau-hero-inner" data-reveal>
          <span className="beau-hero-brand" style={{ backgroundColor: '#f37021', color: '#ffffff' }}>
            FPT JETKING — CHIP DESIGN
          </span>
          <h1 className="beau-hero-title">
            Thiết Kế Vi Mạch<br />Bán Dẫn Tích Hợp AI
          </h1>
          <div className="beau-hero-logo" style={{ marginTop: '20px', display: 'flex', alignItems: 'center' }}>
            <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <text x="10" y="26" fill="#0066b3" fontSize="20" fontWeight="bold" fontFamily="sans-serif">Jet</text>
              <text x="40" y="26" fill="#f37021" fontSize="20" fontWeight="bold" fontFamily="sans-serif">king</text>
              <path d="M100 10 L108 17 L100 24" stroke="#f37021" strokeWidth="3" fill="none"/>
            </svg>
          </div>
          <p className="beau-hero-desc">
            Chương trình đào tạo Thiết kế Vi mạch Bán dẫn chuẩn quốc tế đầu tiên tại Việt Nam, chuyển giao từ đối tác Jetking Ấn Độ. Sinh viên được đào tạo chuyên sâu về quy trình thiết kế chip hoàn chỉnh, làm chủ ngôn ngữ mô tả phần cứng Verilog/VHDL, công cụ thiết kế vi mạch EDA hiện đại cùng kỹ năng tích hợp AI để tối ưu hóa quy trình tự động hóa thiết kế (EDA).
          </p>

          <div className="beau-stats-bar">
            <div className="beau-stat-item">
              <h3 style={{ color: '#f37021' }}>70% Thực Hành</h3>
              <p>Học tập thực chiến tại phòng Lab tiêu chuẩn công nghiệp.</p>
            </div>
            <div className="beau-stat-item">
              <h3 style={{ color: '#f37021' }}>Jetking AD</h3>
              <p>Bằng cấp Advanced Diploma do tập đoàn Jetking Ấn Độ cấp, giá trị toàn cầu.</p>
            </div>
            <div className="beau-stat-item">
              <h3 style={{ color: '#f37021' }}>50.000</h3>
              <p>Chỉ tiêu đào tạo kỹ sư bán dẫn Việt Nam đến năm 2030, mở rộng cơ hội việc làm.</p>
            </div>
          </div>

          {/* Banner Image */}
          <div className="beau-hero-banner">
            <Image
              src="/banner_chip_design_sub_v2.png"
              alt="Tuyển sinh Thiết kế vi mạch bán dẫn FPT Jetking"
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
          <h2 className="beau-section-title">Lộ trình học tập 24 tháng</h2>

          <div className="beau-split-grid">
            {/* Left label */}
            <div className="beau-split-left">
              <div className="beau-sticky-label" style={{ color: '#f37021', opacity: 0.15 }}>SEM</div>
              <p className="beau-sticky-desc">
                Chương trình học gồm 4 học kỳ, phân chia logic từ kiến thức cơ bản về phần cứng vi điều khiển đến thiết kế vi mạch chuyên sâu SoC/ASIC/FPGA và ứng dụng trí tuệ nhân tạo (AI/ML) vào chip.
              </p>
            </div>

            {/* Right semester cards */}
            <div className="beau-split-right">
              {/* Semester 1 */}
              <div className="beau-sem-card" data-reveal data-reveal-delay="0.1">
                <span className="sem-num" style={{ color: '#f37021' }}>Học Kỳ 01</span>
                <h3 className="sem-title">Programming Elements and Electronic Circuits — Mạch điện tử và lập trình vi điều khiển</h3>
                <p className="sem-desc">
                  Kiến tạo nền tảng vững chắc với lập trình C/C++, các nguyên lý mạch điện tử cơ bản và linh kiện (Transistor, MOSFET, Diode). Sinh viên bắt đầu làm quen với cách tích hợp AI Driven Design trong cấu trúc Digital Logic.
                </p>
                <span className="sem-modules-title">Môn học trọng tâm</span>
                <ul className="sem-modules-list">
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Cơ bản về lập trình & Thuật toán bằng C/C++</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Nguyên lý mạch điện và Linh kiện điện tử</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Vật lý bán dẫn và các dòng linh kiện MOSFET, Op-Amp</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Mạch điện tử số (Digital Logic) tích hợp AI Driven Design</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Phát triển đồ án Hệ thống vi điều khiển thực tế</li>
                </ul>
              </div>

              {/* Semester 2 */}
              <div className="beau-sem-card" data-reveal data-reveal-delay="0.1">
                <span className="sem-num" style={{ color: '#f37021' }}>Học Kỳ 02</span>
                <h3 className="sem-title">Chip Architecture Framework — Kiến trúc và quy trình thiết kế vi mạch</h3>
                <p className="sem-desc">
                  Đi sâu vào nghiên cứu các hệ thống truyền thông, cấu trúc tín hiệu Analog/Digital và quy trình sản xuất Chip hoàn chỉnh. Học cách ứng dụng AI trong Chip Design thông qua các bài thực hành thiết kế.
                </p>
                <span className="sem-modules-title">Môn học trọng tâm</span>
                <ul className="sem-modules-list">
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Cấu trúc truyền thông & Tín hiệu xử lý Analog/Digital</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Mạch tích hợp tuyến tính & Kiến trúc vi xử lý nâng cao</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Các bước thiết kế và chế tạo IC (Steps to Chip Design)</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Ứng dụng AI tối ưu hóa quy trình và cấu trúc thiết kế chip</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Đồ án Phân tích Kiến trúc vi mạch e-Project</li>
                </ul>
              </div>

              {/* Semester 3 */}
              <div className="beau-sem-card" data-reveal data-reveal-delay="0.1">
                <span className="sem-num" style={{ color: '#f37021' }}>Học Kỳ 03</span>
                <h3 className="sem-title">HDL & EDA Tools — Ngôn ngữ mô tả phần cứng và công cụ thiết kế vi mạch</h3>
                <p className="sem-desc">
                  Làm chủ ngôn ngữ mô tả phần cứng tiêu chuẩn công nghiệp (Verilog/VHDL) cùng các công cụ tự động hóa Electronic Design Automation (EDA). Tích hợp các thuật toán AI nâng cao để tự động tối ưu hóa thiết kế IC.
                </p>
                <span className="sem-modules-title">Môn học trọng tâm</span>
                <ul className="sem-modules-list">
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Lập trình mô tả phần cứng với ngôn ngữ Verilog HDL</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Sử dụng bộ công cụ thiết kế mô phỏng Synopsys / Cadence EDA</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Advanced AI in Chip Design: Tự động hóa thiết kế EDA</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Kỹ thuật kiểm thử & Mô phỏng chức năng vi mạch</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Đồ án Thiết kế hệ thống IC kỹ thuật số e-Project</li>
                </ul>
              </div>

              {/* Semester 4 */}
              <div className="beau-sem-card" data-reveal data-reveal-delay="0.1">
                <span className="sem-num" style={{ color: '#f37021' }}>Học Kỳ 04</span>
                <h3 className="sem-title">Chip Design — Thiết kế SoC / ASIC / FPGA chuyên sâu</h3>
                <p className="sem-desc">
                  Tiến thẳng vào quy trình thiết kế nâng cao: Hệ thống trên một vi mạch (SoC), Mạch tích hợp chuyên dụng (ASIC) và Mạch lập trình FPGA. Tích hợp trực tiếp các công cụ học máy (AI/ML Engine) vào phần cứng vi mạch.
                </p>
                <span className="sem-modules-title">Môn học trọng tâm</span>
                <ul className="sem-modules-list">
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Thiết kế & Tối ưu hóa Hệ thống trên Vi mạch (SoC)</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Quy trình vật lý ASIC: Sắp xếp vị trí & Đi dây (Layout, P&R)</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Lập trình & Phát triển phần cứng trên chip FPGA</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Tích hợp AI/ML Engine trực tiếp vào phần cứng vi mạch</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Đồ án Tốt nghiệp: Thiết kế & Mô phỏng chip hoàn chỉnh</li>
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
          <h2 className="beau-section-title">Công Cụ Thiết Kế Hiện Đại</h2>

          <div className="beau-tech-grid">
            <div className="beau-tech-item" data-reveal data-reveal-delay="0.05">
              <span className="beau-tech-icon">Vl</span>
              <span className="beau-tech-name">Verilog HDL</span>
            </div>
            <div className="beau-tech-item" data-reveal data-reveal-delay="0.1">
              <span className="beau-tech-icon">Vh</span>
              <span className="beau-tech-name">VHDL</span>
            </div>
            <div className="beau-tech-item" data-reveal data-reveal-delay="0.15">
              <span className="beau-tech-icon">EDA</span>
              <span className="beau-tech-name">Synopsys / Cadence</span>
            </div>
            <div className="beau-tech-item" data-reveal data-reveal-delay="0.2">
              <span className="beau-tech-icon">FPGA</span>
              <span className="beau-tech-name">Altera / Xilinx FPGA</span>
            </div>
            <div className="beau-tech-item" data-reveal data-reveal-delay="0.25">
              <span className="beau-tech-icon">SoC</span>
              <span className="beau-tech-name">System on Chip</span>
            </div>
            <div className="beau-tech-item" data-reveal data-reveal-delay="0.3">
              <span className="beau-tech-icon">ASIC</span>
              <span className="beau-tech-name">ASIC Design Flow</span>
            </div>
            <div className="beau-tech-item" data-reveal data-reveal-delay="0.35">
              <span className="beau-tech-icon">Py</span>
              <span className="beau-tech-name">Python for Scripting</span>
            </div>
            <div className="beau-tech-item" data-reveal data-reveal-delay="0.4">
              <span className="beau-tech-icon">AI</span>
              <span className="beau-tech-name">AI-Driven IC Design</span>
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
            <div className="beau-career-card" style={{ borderLeftColor: '#f37021' }} data-reveal data-reveal-delay="0.05">
              <h3 className="career-title">IC Design Engineer</h3>
              <p className="career-desc">Kỹ sư trực tiếp thiết kế cấu trúc logic, sơ đồ mạch và module cho các dòng vi mạch bán dẫn thế hệ mới.</p>
            </div>
            <div className="beau-career-card" style={{ borderLeftColor: '#f37021' }} data-reveal data-reveal-delay="0.1">
              <h3 className="career-title">FPGA Engineer</h3>
              <p className="career-desc">Lập trình phát triển phần cứng, cấu hình mạch logic và tạo nguyên mẫu (prototype) trên các bo mạch FPGA.</p>
            </div>
            <div className="beau-career-card" style={{ borderLeftColor: '#f37021' }} data-reveal data-reveal-delay="0.15">
              <h3 className="career-title">IC Verification Engineer</h3>
              <p className="career-desc">Kỹ sư kiểm thử, mô phỏng và xác thực chức năng mạch, đảm bảo vi mạch hoạt động chính xác trước khi gửi đi chế tạo.</p>
            </div>
            <div className="beau-career-card" style={{ borderLeftColor: '#f37021' }} data-reveal data-reveal-delay="0.2">
              <h3 className="career-title">IC Layout Engineer</h3>
              <p className="career-desc">Kỹ sư thiết kế bố cục vật lý của chip, sắp xếp linh kiện bán dẫn (Transistor) và định tuyến đường dẫn tối ưu hóa diện tích.</p>
            </div>
            <div className="beau-career-card" style={{ borderLeftColor: '#f37021' }} data-reveal data-reveal-delay="0.25">
              <h3 className="career-title">EDA Software Developer</h3>
              <p className="career-desc">Phát triển các công cụ phần mềm hỗ trợ thiết kế vi mạch tự động hóa và tích hợp thuật toán thông minh.</p>
            </div>
            <div className="beau-career-card" style={{ borderLeftColor: '#f37021' }} data-reveal data-reveal-delay="0.3">
              <h3 className="career-title">AI Chip Integration Specialist</h3>
              <p className="career-desc">Chuyên gia nghiên cứu tích hợp các lõi xử lý NPU, bộ xử lý học máy trực tiếp vào các dòng chip đa tác vụ.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Ưu Đãi Tuyển Sinh Đặc Quyền */}
      <section className="beau-section beau-full-viewport">
        <div className="container" data-reveal>
          <span className="beau-section-eyebrow">HỌC BỔNG & CHÍNH SÁCH</span>
          <h2 className="beau-section-title" style={{ marginBottom: '60px' }}>Ưu Đãi Tuyển Sinh Đặc Quyền</h2>
          
          <div className="beau-incentives-grid">
            <div className="beau-incentive-card" style={{ '--accent': '#f37021' }} data-reveal data-reveal-delay="0.05">
              <span className="incentive-badge">HỌC BỔNG</span>
              <h3 className="incentive-value">Lên tới 50%</h3>
              <p className="incentive-desc">Học bổng Tài năng "Silicon Pioneer" hỗ trợ các sinh viên đam mê công nghệ bán dẫn.</p>
            </div>
            <div className="beau-incentive-card" style={{ '--accent': '#f37021' }} data-reveal data-reveal-delay="0.1">
              <span className="incentive-badge">NHẬP HỌC SỚM</span>
              <h3 className="incentive-value">Tặng Laptop</h3>
              <p className="incentive-desc">Ưu đãi tặng ngay Laptop cấu hình cao phục vụ lập trình thiết kế chip cho sinh viên nhập học sớm.</p>
            </div>
            <div className="beau-incentive-card" style={{ '--accent': '#f37021' }} data-reveal data-reveal-delay="0.15">
              <span className="incentive-badge">TRẢ GÓP</span>
              <h3 className="incentive-value">0% Lãi Suất</h3>
              <p className="incentive-desc">Hỗ trợ trả góp học phí không lãi suất thông qua liên kết hệ thống ngân hàng uy tín.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Chuyển Hướng Nhanh Ngành Học */}
      <section className="beau-section beau-full-viewport">
        <div className="container" data-reveal>
          <span className="beau-section-eyebrow">KHÁM PHÁ CÁC NGÀNH HỌC KHÁC</span>
          <h2 className="beau-section-title" style={{ marginBottom: '60px' }}>Chuyển Hướng Nhanh Ngành Học</h2>
          
          <div className="beau-other-programs-grid">
            <Link href="/dao-tao/aptech" className="beau-other-program-card" data-reveal data-reveal-delay="0.05">
              <div>
                <span className="other-prog-tag" style={{ color: '#1a6ed8' }}>✦ APTECH</span>
                <h3 className="other-prog-title">Software Engineering</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Lập trình viên Quốc tế — Phát triển phần mềm doanh nghiệp lớn, ứng dụng di động, điện toán đám mây và AI tích hợp.
                </p>
              </div>
              <span className="other-prog-link" style={{ color: '#1a6ed8', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                Khám phá Công Nghệ
                <ArrowRight size={18} />
              </span>
            </Link>

            <Link href="/dao-tao/ai-agent" className="beau-other-program-card" data-reveal data-reveal-delay="0.1">
              <div>
                <span className="other-prog-tag" style={{ color: '#6366f1' }}>◈ AI AGENT</span>
                <h3 className="other-prog-title">AI Agent & Intelligent Systems</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Đào tạo Kỹ sư AI Agent hàng đầu — Làm chủ NLP, Computer Vision, Generative AI, Large Language Models & Multi-Agent.
                </p>
              </div>
              <span className="other-prog-link" style={{ color: '#6366f1', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                Khám phá AI Agent
                <ArrowRight size={18} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 6: Có Thể Bạn Quan Tâm */}
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
            <Link href="/tin-tuc/ky-ket-hop-tac-ban-dan-fpt-jetking-quest-global" className="beau-news-link-card" data-reveal data-reveal-delay="0.15">
              <span className="news-link-date">18 Tháng 6, 2026</span>
              <h4 className="news-link-title">FPT Jetking ký kết hợp tác cùng Quest Global mở rộng đầu ra thực tập ngành thiết kế vi mạch</h4>
              <span className="news-link-action" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                Đọc tiếp <ArrowRight size={14} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 7: Bottom CTA Section */}
      <section className="beau-cta-section beau-full-viewport">
        <div className="beau-cta-bg-circle" style={{ backgroundColor: '#f37021' }}></div>
        <div className="container beau-cta-inner" data-reveal>
          <h2 className="beau-cta-title">Gia Nhập Lực Lượng Bán Dẫn Toàn Cầu</h2>
          <Link href="/tuyen-sinh#dang-ky" className="beau-cta-btn">
            Đăng Ký Nhập Học Chip Design
            <ArrowRight size={24} strokeWidth={2.5} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
