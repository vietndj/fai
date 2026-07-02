'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ParticleCanvas from '@/components/ParticleCanvas';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check } from 'lucide-react';

export default function AiAgentSubpage() {
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
    <div className={`beau-subpage-container theme-ai-agent active-sec-${activeSection}`}>
      <Header />

      {/* Section 0: Hero Section */}
      <section className="beau-hero">
        <ParticleCanvas className="beau-hero-particles" />
        <div className="beau-hero-bg-text">AI AGENT</div>
        <div className="container beau-hero-inner" data-reveal>
          <span className="beau-hero-brand" style={{ backgroundColor: '#0066b3', color: '#ffffff' }}>
            FPT JETKING — AI AGENT
          </span>
          <h1 className="beau-hero-title">
            Chuyên Gia Phát Triển<br />Nhân Sự AI (AI Agent)
          </h1>
          <div className="beau-hero-logo" style={{ marginTop: '20px', display: 'flex', alignItems: 'center' }}>
            <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <text x="10" y="26" fill="#0066b3" fontSize="20" fontWeight="bold" fontFamily="sans-serif">Jet</text>
              <text x="40" y="26" fill="#f37021" fontSize="20" fontWeight="bold" fontFamily="sans-serif">king</text>
              <path d="M100 10 L108 17 L100 24" stroke="#f37021" strokeWidth="3" fill="none"/>
            </svg>
          </div>
          <p className="beau-hero-desc">
            Chương trình đào tạo tiên phong về AI Agent và Kỹ nghệ AI thực chiến đầu tiên tại Việt Nam, chuyển giao từ đối tác Jetking Ấn Độ. Sinh viên được trang bị kiến thức sâu rộng từ nền tảng Machine Learning, Deep Learning đến việc trực tiếp thiết kế, triển khai các hệ thống AI Agents đa nhiệm có khả năng lập kế hoạch, tự nhận thức và ra quyết định độc lập.
          </p>

          <div className="beau-stats-bar">
            <div className="beau-stat-item">
              <h3 style={{ color: '#0066b3' }}>784 Giờ Học</h3>
              <p>Thời lượng học tập tối ưu, cập nhật liên tục công nghệ đỉnh cao.</p>
            </div>
            <div className="beau-stat-item">
              <h3 style={{ color: '#0066b3' }}>100h Dự Án</h3>
              <p>Thực hành dự án thực tế xuyên suốt dưới sự hướng dẫn của chuyên gia.</p>
            </div>
            <div className="beau-stat-item">
              <h3 style={{ color: '#0066b3' }}>Jetking AD</h3>
              <p>Nhận chứng chỉ Advanced Diploma in AI Agent chuẩn quốc tế từ Jetking Ấn Độ.</p>
            </div>
          </div>

          {/* Banner Image */}
          <div className="beau-hero-banner">
            <Image
              src="/banner_ai_agent_sub_v2.png"
              alt="Tuyển sinh Chuyên gia AI Agent FPT Jetking"
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
              <div className="beau-sticky-label" style={{ color: '#0066b3', opacity: 0.15 }}>AI</div>
              <p className="beau-sticky-desc">
                Chương trình áp dụng mô hình kim tự tháp: xây dựng nền tảng vững chắc về khoa học dữ liệu ở học kỳ 1, chuyên sâu chuyên môn máy học ở học kỳ 2-3 và kết thúc với phát triển AI Agent cao cấp ở học kỳ 4.
              </p>
            </div>

            {/* Right semester cards */}
            <div className="beau-split-right">
              {/* Semester 1 */}
              <div className="beau-sem-card" data-reveal data-reveal-delay="0.1">
                <span className="sem-num" style={{ color: '#0066b3' }}>Học Kỳ 01</span>
                <h3 className="sem-title">Foundations & Python Elements — Nền tảng lập trình & Khoa học Dữ liệu</h3>
                <p className="sem-desc">
                  Trang bị tư duy lập trình bằng Python chuyên sâu, kỹ năng quản trị và khai thác dữ liệu thông qua ngôn ngữ SQL và công cụ Power BI. Sinh viên hiểu rõ các khái niệm toán học làm nền móng cho học máy.
                </p>
                <span className="sem-modules-title">Môn học trọng tâm</span>
                <ul className="sem-modules-list">
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Lập trình Python chuyên sâu từ cơ bản đến nâng cao</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Toán học ứng dụng trong AI (Đại số tuyến tính, Xác suất thống kê)</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Truy vấn và quản trị cơ sở dữ liệu quan hệ với SQL</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Trực quan hóa dữ liệu và báo cáo thông minh trên Power BI</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Đồ án Phân tích Dữ liệu và Dự báo kinh doanh e-Project</li>
                </ul>
              </div>

              {/* Semester 2 */}
              <div className="beau-sem-card" data-reveal data-reveal-delay="0.1">
                <span className="sem-num" style={{ color: '#0066b3' }}>Học Kỳ 02</span>
                <h3 className="sem-title">Machine Learning & Deep Learning Core — Trí tuệ nhân tạo chuyên sâu</h3>
                <p className="sem-desc">
                  Khám phá bản chất của học máy và học sâu. Sinh viên tự tay xây dựng, huấn luyện và tinh chỉnh các mô hình dự đoán, phân loại dữ liệu, nghiên cứu sâu kiến trúc mạng nơ-ron nhân tạo nâng cao.
                </p>
                <span className="sem-modules-title">Môn học trọng tâm</span>
                <ul className="sem-modules-list">
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Thuật toán Học máy có giám sát & không giám sát (Scikit-Learn)</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Kiến trúc mạng Nơ-ron nhân tạo và Học sâu (Deep Learning)</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Sử dụng các thư viện tính toán lớn: TensorFlow, PyTorch</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Kỹ thuật tối ưu hóa và Đánh giá hiệu năng mô hình AI</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Đồ án Huấn luyện & Triển khai mô hình Học sâu e-Project</li>
                </ul>
              </div>

              {/* Semester 3 */}
              <div className="beau-sem-card" data-reveal data-reveal-delay="0.1">
                <span className="sem-num" style={{ color: '#0066b3' }}>Học Kỳ 03</span>
                <h3 className="sem-title">NLP, Computer Vision & Generative AI — Xử lý ngôn ngữ, Thị giác máy tính & AI tạo sinh</h3>
                <p className="sem-desc">
                  Làm chủ các ứng dụng giao tiếp tự nhiên và nhận diện hình ảnh/video. Tiếp cận công nghệ AI Tạo sinh mới nhất, làm việc với các mô hình ngôn ngữ lớn (LLMs - GPT, Claude, Llama) thông qua kỹ nghệ Prompt và Fine-tuning.
                </p>
                <span className="sem-modules-title">Môn học trọng tâm</span>
                <ul className="sem-modules-list">
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Xử lý ngôn ngữ tự nhiên (NLP) & Nhận diện giọng nói</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Thị giác máy tính (Computer Vision): Nhận diện vật thể, khuôn mặt</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Generative AI & Kỹ thuật thiết kế câu lệnh tối ưu (Prompt Engineering)</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Ứng dụng API LLM và Fine-tuning mô hình ngôn ngữ lớn</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Đồ án Tích hợp ứng dụng Generative AI thông minh e-Project</li>
                </ul>
              </div>

              {/* Semester 4 */}
              <div className="beau-sem-card" data-reveal data-reveal-delay="0.1">
                <span className="sem-num" style={{ color: '#0066b3' }}>Học Kỳ 04</span>
                <h3 className="sem-title">Multi-Agent Systems & Deployment — Hệ thống AI tự hành & Vận hành doanh nghiệp</h3>
                <p className="sem-desc">
                  Học phần cốt lõi nâng cao nhất: Thiết kế các tác nhân AI tự hành (AI Agents). Sinh viên học cách kết nối nhiều Agent (Multi-Agent Systems) để tự động hóa các quy trình doanh nghiệp phức tạp và triển khai lên hạ tầng Cloud.
                </p>
                <span className="sem-modules-title">Môn học trọng tâm</span>
                <ul className="sem-modules-list">
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Thiết kế Tác nhân AI đơn lẻ (Single-Agent Systems)</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Kiến trúc Multi-Agent phối hợp tự hành bằng CrewAI, LangGraph</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Tích hợp Tooling & Function Calling cho AI Agents</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Triển khai & Vận hành hệ thống AI trong môi trường đám mây (MLOps)</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} />Đồ án tốt nghiệp: Phát triển hệ thống Multi-Agent hoàn chỉnh cho doanh nghiệp</li>
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
          <h2 className="beau-section-title">Hệ Sinh Thái Công Nghệ AI</h2>

          <div className="beau-tech-grid">
            <div className="beau-tech-item" data-reveal data-reveal-delay="0.05">
              <span className="beau-tech-icon">Py</span>
              <span className="beau-tech-name">Python Language</span>
            </div>
            <div className="beau-tech-item" data-reveal data-reveal-delay="0.1">
              <span className="beau-tech-icon">TF</span>
              <span className="beau-tech-name">TensorFlow / PyTorch</span>
            </div>
            <div className="beau-tech-item" data-reveal data-reveal-delay="0.15">
              <span className="beau-tech-icon">LLM</span>
              <span className="beau-tech-name">GPT / Claude / Llama</span>
            </div>
            <div className="beau-tech-item" data-reveal data-reveal-delay="0.2">
              <span className="beau-tech-icon">Lc</span>
              <span className="beau-tech-name">LangChain / LangGraph</span>
            </div>
            <div className="beau-tech-item" data-reveal data-reveal-delay="0.25">
              <span className="beau-tech-icon">Cr</span>
              <span className="beau-tech-name">CrewAI Framework</span>
            </div>
            <div className="beau-tech-item" data-reveal data-reveal-delay="0.3">
              <span className="beau-tech-icon">SQL</span>
              <span className="beau-tech-name">SQL Database</span>
            </div>
            <div className="beau-tech-item" data-reveal data-reveal-delay="0.35">
              <span className="beau-tech-icon">BI</span>
              <span className="beau-tech-name">Microsoft Power BI</span>
            </div>
            <div className="beau-tech-item" data-reveal data-reveal-delay="0.4">
              <span className="beau-tech-icon">Cld</span>
              <span className="beau-tech-name">Cloud MLOps</span>
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
            <div className="beau-career-card" style={{ borderLeftColor: '#0066b3' }} data-reveal data-reveal-delay="0.05">
              <h3 className="career-title">AI Agent Developer</h3>
              <p className="career-desc">Thiết kế và phát triển các tác nhân thông minh tự hành giúp tự động hóa quy trình nghiệp vụ phức tạp.</p>
            </div>
            <div className="beau-career-card" style={{ borderLeftColor: '#0066b3' }} data-reveal data-reveal-delay="0.1">
              <h3 className="career-title">Machine Learning Engineer</h3>
              <p className="career-desc">Huấn luyện, triển khai và tối ưu hóa các thuật toán học máy, học sâu và kiến trúc xử lý dữ liệu quy mô lớn.</p>
            </div>
            <div className="beau-career-card" style={{ borderLeftColor: '#0066b3' }} data-reveal data-reveal-delay="0.15">
              <h3 className="career-title">AI Integration Specialist</h3>
              <p className="career-desc">Nghiên cứu tích hợp các giải pháp trí tuệ nhân tạo (LLM, Vision, Chatbot) vào cấu trúc phần mềm hiện hữu.</p>
            </div>
            <div className="beau-career-card" style={{ borderLeftColor: '#0066b3' }} data-reveal data-reveal-delay="0.2">
              <h3 className="career-title">NLP Engineer</h3>
              <p className="career-desc">Xây dựng hệ thống hiểu ngôn ngữ tự nhiên, phân tích cảm xúc, máy dịch và các mô hình chatbot thông minh thế hệ mới.</p>
            </div>
            <div className="beau-career-card" style={{ borderLeftColor: '#0066b3' }} data-reveal data-reveal-delay="0.25">
              <h3 className="career-title">Prompt Engineer</h3>
              <p className="career-desc">Kỹ sư tối ưu hóa câu lệnh, thiết kế ngữ cảnh để các mô hình ngôn ngữ lớn (LLMs) phản hồi chính xác nhất.</p>
            </div>
            <div className="beau-career-card" style={{ borderLeftColor: '#0066b3' }} data-reveal data-reveal-delay="0.3">
              <h3 className="career-title">AI Solutions Architect</h3>
              <p className="career-desc">Kiến trúc sư thiết kế giải pháp tổng thể, quy hoạch hạ tầng lưu trữ và tích hợp các hệ thống AI tự hành cho doanh nghiệp.</p>
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
            <div className="beau-incentive-card" style={{ '--accent': '#0066b3' }} data-reveal data-reveal-delay="0.05">
              <span className="incentive-badge">HỌC BỔNG</span>
              <h3 className="incentive-value">Lên tới 50%</h3>
              <p className="incentive-desc">Học bổng Kiến tạo "AI Pioneer" dành cho các bạn trẻ xuất sắc vượt qua bài thi năng lực đầu vào.</p>
            </div>
            <div className="beau-incentive-card" style={{ '--accent': '#0066b3' }} data-reveal data-reveal-delay="0.1">
              <span className="incentive-badge">NHẬP HỌC SỚM</span>
              <h3 className="incentive-value">Tặng Laptop</h3>
              <p className="incentive-desc">Ưu đãi tặng ngay Laptop học tập cho sinh viên hoàn thành hồ sơ nhập học sớm trong tháng.</p>
            </div>
            <div className="beau-incentive-card" style={{ '--accent': '#0066b3' }} data-reveal data-reveal-delay="0.15">
              <span className="incentive-badge">TRẢ GÓP</span>
              <h3 className="incentive-value">0% Lãi Suất</h3>
              <p className="incentive-desc">Chính sách chia nhỏ học phí trả góp không lãi suất giúp giảm nhẹ gánh nặng tài chính.</p>
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

            <Link href="/dao-tao/chip-design" className="beau-other-program-card" data-reveal data-reveal-delay="0.1">
              <div>
                <span className="other-prog-tag" style={{ color: '#8b5cf6' }}>◈ CHIP DESIGN</span>
                <h3 className="other-prog-title">Semiconductor IC Design</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Thiết kế vi mạch bán dẫn tích hợp AI — Làm chủ ngôn ngữ mô tả phần cứng Verilog/VHDL và công cụ thiết kế EDA Synopsys.
                </p>
              </div>
              <span className="other-prog-link" style={{ color: '#8b5cf6', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                Khám phá Thiết Kế Chip
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
            <Link href="/tin-tuc/ra-mat-nganh-hoc-ai-agent-tien-phong" className="beau-news-link-card" data-reveal data-reveal-delay="0.15">
              <span className="news-link-date">10 Tháng 6, 2026</span>
              <h4 className="news-link-title">FPT Jetking công bố ra mắt ngành học AI Agent tiên phong đón đầu làn sóng nhân sự thông minh</h4>
              <span className="news-link-action" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                Đọc tiếp <ArrowRight size={14} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 7: Bottom CTA Section */}
      <section className="beau-cta-section beau-full-viewport">
        <div className="beau-cta-bg-circle" style={{ backgroundColor: '#0066b3' }}></div>
        <div className="container beau-cta-inner" data-reveal>
          <h2 className="beau-cta-title">Kiến Tạo Tương Lai Cùng Kỹ Nghệ AI</h2>
          <Link href="/tuyen-sinh#dang-ky" className="beau-cta-btn">
            Đăng Ký Nhập Học AI Agent
            <ArrowRight size={24} strokeWidth={2.5} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
