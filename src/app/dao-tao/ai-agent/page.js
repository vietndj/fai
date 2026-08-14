'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ParticleCanvas from '@/components/ParticleCanvas';
import ScholarshipFormSection from '@/components/ScholarshipFormSection';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check, Award, BookOpen, Clock, Trophy, Sparkles } from 'lucide-react';

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

      {/* Section 0: Hero Section (🌙 DARK CYBER THEME) */}
      <section className="beau-hero">
        <ParticleCanvas className="beau-hero-particles" />
        <div className="beau-hero-bg-text">AI AGENT</div>
        <div className="container beau-hero-inner" data-reveal>
          <span className="beau-hero-brand" style={{ backgroundColor: '#0066b3', color: '#ffffff', fontWeight: 800 }}>
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
              <h3 style={{ color: '#38bdf8' }}>784 Giờ Học</h3>
              <p>Thời lượng học tập tối ưu, cập nhật liên tục công nghệ đỉnh cao.</p>
            </div>
            <div className="beau-stat-item">
              <h3 style={{ color: '#38bdf8' }}>100h Dự Án</h3>
              <p>Thực hành dự án thực tế xuyên suốt dưới sự hướng dẫn của chuyên gia.</p>
            </div>
            <div className="beau-stat-item">
              <h3 style={{ color: '#38bdf8' }}>Jetking AD</h3>
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

      {/* Section 1: Lộ Trình Đào Tạo (☀️ LIGHT BRIGHT THEME) */}
      <section 
        className="beau-section"
        style={{ 
          backgroundColor: '#F8FAFC', 
          color: '#0f172a',
          padding: '110px 0 120px 0',
          borderTop: 'none'
        }}
      >
        <div className="container" data-reveal>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{ color: '#0066b3', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '0.85rem' }}>
              LỘ TRÌNH ĐÀO TẠO
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, color: 'var(--secondary)', lineHeight: '1.2', marginTop: '10px', fontFamily: 'var(--font-sans)', letterSpacing: '-0.02em' }}>
              Lộ trình đào tạo 24 tháng theo chuẩn Jetking
            </h2>
            <p style={{ color: '#64748b', maxWidth: '720px', margin: '14px auto 0', fontSize: '1.05rem', lineHeight: '1.7' }}>
              Chương trình áp dụng mô hình kim tự tháp: nền tảng khoa học dữ liệu ở học kỳ 1, chuyên sâu máy học ở học kỳ 2-3 và phát triển AI Agent cao cấp ở học kỳ 4.
            </p>
          </div>

          {/* 4 Semester Cards in Modern Light Theme */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            {/* Semester 1 */}
            <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '24px', padding: '36px 30px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column' }}>
              <span style={{ color: '#0066b3', fontWeight: 900, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>
                HỌC KỲ 01
              </span>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '14px', fontFamily: 'var(--font-sans)', lineHeight: '1.3' }}>
                Foundations & Python — Nền tảng lập trình & Dữ liệu
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', lineHeight: '1.65', marginBottom: '24px', flexGrow: 1 }}>
                Trang bị tư duy lập trình bằng Python chuyên sâu, kỹ năng quản trị và khai thác dữ liệu qua SQL và Power BI. Nắm vững toán học nền móng cho học máy.
              </p>
              <div style={{ borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '20px' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#0066b3', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '12px' }}>
                  Môn học trọng tâm
                </span>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#0066b3', flexShrink: 0 }} />Lập trình Python chuyên sâu từ cơ bản đến nâng cao</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#0066b3', flexShrink: 0 }} />Toán học ứng dụng trong AI (Đại số, Thống kê)</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#0066b3', flexShrink: 0 }} />Truy vấn và quản trị cơ sở dữ liệu với SQL</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#0066b3', flexShrink: 0 }} />Trực quan hóa dữ liệu và báo cáo trên Power BI</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#0066b3', flexShrink: 0 }} />Đồ án Phân tích Dữ liệu và Dự báo e-Project</li>
                </ul>
              </div>
            </div>

            {/* Semester 2 */}
            <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '24px', padding: '36px 30px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column' }}>
              <span style={{ color: '#0066b3', fontWeight: 900, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>
                HỌC KỲ 02
              </span>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '14px', fontFamily: 'var(--font-sans)', lineHeight: '1.3' }}>
                Machine Learning & Deep Learning — Trí tuệ nhân tạo chuyên sâu
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', lineHeight: '1.65', marginBottom: '24px', flexGrow: 1 }}>
                Khám phá bản chất của học máy và học sâu. Tự tay xây dựng, huấn luyện và tinh chỉnh các mô hình dự đoán, phân loại dữ liệu và mạng nơ-ron nhân tạo nâng cao.
              </p>
              <div style={{ borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '20px' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#0066b3', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '12px' }}>
                  Môn học trọng tâm
                </span>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#0066b3', flexShrink: 0 }} />Thuật toán Học máy (Scikit-Learn)</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#0066b3', flexShrink: 0 }} />Kiến trúc mạng Nơ-ron và Học sâu (Deep Learning)</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#0066b3', flexShrink: 0 }} />Sử dụng thư viện tính toán: TensorFlow, PyTorch</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#0066b3', flexShrink: 0 }} />Kỹ thuật tối ưu hóa và Đánh giá hiệu năng mô hình</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#0066b3', flexShrink: 0 }} />Đồ án Huấn luyện & Triển khai Học sâu e-Project</li>
                </ul>
              </div>
            </div>

            {/* Semester 3 */}
            <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '24px', padding: '36px 30px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column' }}>
              <span style={{ color: '#0066b3', fontWeight: 900, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>
                HỌC KỲ 03
              </span>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '14px', fontFamily: 'var(--font-sans)', lineHeight: '1.3' }}>
                NLP, Computer Vision & GenAI — Thị giác máy tính & AI tạo sinh
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', lineHeight: '1.65', marginBottom: '24px', flexGrow: 1 }}>
                Làm chủ giao tiếp tự nhiên và nhận diện thị giác. Tiếp cận công nghệ Generative AI mới nhất, làm việc với các mô hình ngôn ngữ lớn (LLMs) qua Prompt Engineering và Fine-tuning.
              </p>
              <div style={{ borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '20px' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#0066b3', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '12px' }}>
                  Môn học trọng tâm
                </span>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#0066b3', flexShrink: 0 }} />Xử lý ngôn ngữ tự nhiên (NLP) & Nhận diện giọng nói</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#0066b3', flexShrink: 0 }} />Thị giác máy tính (CV): Nhận diện vật thể, khuôn mặt</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#0066b3', flexShrink: 0 }} />Generative AI & Kỹ nghệ thiết kế Prompt tối ưu</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#0066b3', flexShrink: 0 }} />Fine-tuning các mô hình mã nguồn mở Llama / Mistral</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#0066b3', flexShrink: 0 }} />Đồ án Ứng dụng AI Tạo sinh e-Project</li>
                </ul>
              </div>
            </div>

            {/* Semester 4 */}
            <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '24px', padding: '36px 30px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column' }}>
              <span style={{ color: '#0066b3', fontWeight: 900, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>
                HỌC KỲ 04
              </span>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '14px', fontFamily: 'var(--font-sans)', lineHeight: '1.3' }}>
                AI Agents Architecture — Kiến trúc Nhân sự AI đa nhiệm
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', lineHeight: '1.65', marginBottom: '24px', flexGrow: 1 }}>
                Đỉnh cao của công nghệ AI tự hành. Xây dựng Autonomous Multi-Agents, hệ thống bộ nhớ ngắn/dài hạn (Vector Database), tích hợp công cụ APIs và đưa AI vào quy trình sản xuất thực tế (MLOps).
              </p>
              <div style={{ borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '20px' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#0066b3', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '12px' }}>
                  Môn học trọng tâm
                </span>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#0066b3', flexShrink: 0 }} />Khung kiến trúc Agent: LangChain, CrewAI, AutoGen</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#0066b3', flexShrink: 0 }} />Bộ nhớ ngữ cảnh & Cơ sở dữ liệu Vector (Chroma, Pinecone)</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#0066b3', flexShrink: 0 }} />Tự động hóa tác vụ và gọi hàm mở rộng (Function Calling)</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#0066b3', flexShrink: 0 }} />Quy trình MLOps & Đóng gói Agent trên Cloud / Docker</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#0066b3', flexShrink: 0 }} />Đồ án tốt nghiệp Hệ thống Multi-AI Agent tự hành</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Công Cụ & Thư Viện AI (🌙 DARK TECH THEME) */}
      <section className="beau-section" style={{ padding: '100px 0 110px 0' }}>
        <div className="container" data-reveal>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="beau-section-eyebrow" style={{ color: '#38bdf8' }}>AI FRAMEWORKS & TOOLS</span>
            <h2 className="beau-section-title" style={{ marginBottom: '10px' }}>Làm chủ hệ sinh thái AI hiện đại nhất</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', maxWidth: '650px', margin: '0 auto', fontSize: '1.05rem', lineHeight: '1.7' }}>
              Trải nghiệm các framework hàng đầu của thế giới AI và điện toán đám mây
            </p>
          </div>

          <div className="beau-tech-grid">
            <div className="beau-tech-item" data-reveal data-reveal-delay="0.05">
              <span className="beau-tech-icon" style={{ color: '#38bdf8' }}>Py</span>
              <span className="beau-tech-name">Python 3 & Poetry</span>
            </div>
            <div className="beau-tech-item" data-reveal data-reveal-delay="0.1">
              <span className="beau-tech-icon" style={{ color: '#ff6f00' }}>TF</span>
              <span className="beau-tech-name">TensorFlow & Keras</span>
            </div>
            <div className="beau-tech-item" data-reveal data-reveal-delay="0.15">
              <span className="beau-tech-icon" style={{ color: '#ee4c2c' }}>PyTorch</span>
              <span className="beau-tech-name">PyTorch Deep Learning</span>
            </div>
            <div className="beau-tech-item" data-reveal data-reveal-delay="0.2">
              <span className="beau-tech-icon" style={{ color: '#00d2ff' }}>Lang</span>
              <span className="beau-tech-name">LangChain & LangGraph</span>
            </div>
            <div className="beau-tech-item" data-reveal data-reveal-delay="0.25">
              <span className="beau-tech-icon" style={{ color: '#a855f7' }}>CrewAI</span>
              <span className="beau-tech-name">CrewAI Multi-Agents</span>
            </div>
            <div className="beau-tech-item" data-reveal data-reveal-delay="0.3">
              <span className="beau-tech-icon" style={{ color: '#10a37f' }}>OpenAI</span>
              <span className="beau-tech-name">OpenAI API & Anthropic</span>
            </div>
            <div className="beau-tech-item" data-reveal data-reveal-delay="0.35">
              <span className="beau-tech-icon" style={{ color: '#ffd21e' }}>HF</span>
              <span className="beau-tech-name">Hugging Face Transformers</span>
            </div>
            <div className="beau-tech-item" data-reveal data-reveal-delay="0.4">
              <span className="beau-tech-icon" style={{ color: '#2496ed' }}>Docker</span>
              <span className="beau-tech-name">Docker & MLOps Cloud</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Cơ Hội Nghề Nghiệp (☀️ LIGHT BRIGHT THEME) */}
      <section 
        className="beau-section"
        style={{ 
          backgroundColor: '#F8FAFC', 
          color: '#0f172a',
          padding: '100px 0 110px 0',
          borderTop: 'none'
        }}
      >
        <div className="container" data-reveal>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span style={{ color: '#0066b3', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '0.85rem' }}>
              CAREERS
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, color: 'var(--secondary)', lineHeight: '1.2', marginTop: '10px', fontFamily: 'var(--font-sans)', letterSpacing: '-0.02em' }}>
              Cơ hội việc làm kỷ nguyên AI
            </h2>
            <p style={{ color: '#64748b', maxWidth: '650px', margin: '14px auto 0', fontSize: '1.05rem', lineHeight: '1.7' }}>
              Đón đầu làn sóng khát nhân lực AI kỹ nghệ cao với mức thu nhập vượt trội
            </p>
          </div>

          <div className="beau-careers-grid">
            <div className="beau-career-card" style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderLeft: '5px solid #0066b3', boxShadow: '0 8px 25px rgba(0,0,0,0.02)' }}>
              <h3 className="career-title" style={{ color: 'var(--secondary)' }}>AI Agent Developer</h3>
              <p className="career-desc" style={{ color: '#64748b' }}>Trực tiếp thiết kế và lập trình các tác tử AI tự hành (Autonomous Agents) phục vụ vận hành tự động cho doanh nghiệp.</p>
            </div>
            <div className="beau-career-card" style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderLeft: '5px solid #0066b3', boxShadow: '0 8px 25px rgba(0,0,0,0.02)' }}>
              <h3 className="career-title" style={{ color: 'var(--secondary)' }}>Machine Learning Engineer</h3>
              <p className="career-desc" style={{ color: '#64748b' }}>Xây dựng thuật toán, huấn luyện mô hình học máy và tối ưu hóa hệ thống xử lý dữ liệu lớn.</p>
            </div>
            <div className="beau-career-card" style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderLeft: '5px solid #0066b3', boxShadow: '0 8px 25px rgba(0,0,0,0.02)' }}>
              <h3 className="career-title" style={{ color: 'var(--secondary)' }}>Prompt & GenAI Specialist</h3>
              <p className="career-desc" style={{ color: '#64748b' }}>Kỹ nghệ tối ưu câu lệnh, tinh chỉnh mô hình LLMs (Fine-tuning) và phát triển giải pháp RAG cho doanh nghiệp.</p>
            </div>
            <div className="beau-career-card" style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderLeft: '5px solid #0066b3', boxShadow: '0 8px 25px rgba(0,0,0,0.02)' }}>
              <h3 className="career-title" style={{ color: 'var(--secondary)' }}>Computer Vision / NLP Engineer</h3>
              <p className="career-desc" style={{ color: '#64748b' }}>Xử lý các bài toán nhận diện giọng nói, thị giác máy tính, phân tích tài liệu thông minh và Chatbot đàm thoại.</p>
            </div>
            <div className="beau-career-card" style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderLeft: '5px solid #0066b3', boxShadow: '0 8px 25px rgba(0,0,0,0.02)' }}>
              <h3 className="career-title" style={{ color: 'var(--secondary)' }}>MLOps / AI Deployment Engineer</h3>
              <p className="career-desc" style={{ color: '#64748b' }}>Đóng gói và triển khai các hệ thống AI lên hạ tầng đám mây (AWS, GCP, Azure), giám sát và duy trì hiệu năng 24/7.</p>
            </div>
            <div className="beau-career-card" style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderLeft: '5px solid #0066b3', boxShadow: '0 8px 25px rgba(0,0,0,0.02)' }}>
              <h3 className="career-title" style={{ color: 'var(--secondary)' }}>AI Solutions Consultant</h3>
              <p className="career-desc" style={{ color: '#64748b' }}>Tư vấn chiến lược ứng dụng trí tuệ nhân tạo và chuyển đổi số quy trình vận hành cho các tổ chức, doanh nghiệp.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Ưu đãi tuyển sinh đặc quyền (🌙 DARK TECH THEME) */}
      <section className="beau-section" style={{ padding: '100px 0 110px 0' }}>
        <div className="container" data-reveal>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="beau-section-eyebrow" style={{ color: '#38bdf8' }}>HỌC BỔNG & CHÍNH SÁCH</span>
            <h2 className="beau-section-title" style={{ marginBottom: '10px' }}>Ưu đãi tuyển sinh đặc quyền FPT Jetking</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', maxWidth: '650px', margin: '0 auto', fontSize: '1.05rem', lineHeight: '1.7' }}>
              Quỹ học bổng Tài năng Trí tuệ Nhân tạo FPT tiếp sức thế hệ chuyên gia công nghệ tương lai
            </p>
          </div>
          
          <div className="beau-incentives-grid">
            <div className="beau-incentive-card" style={{ '--accent': '#0066b3' }} data-reveal data-reveal-delay="0.05">
              <span className="incentive-badge">HỌC BỔNG TÀI NĂNG</span>
              <h3 className="incentive-value">Lên tới 50%</h3>
              <p className="incentive-desc">Học bổng Tiên phong Kỹ nghệ AI hỗ trợ tài năng công nghệ trẻ xuất sắc bứt phá sự nghiệp.</p>
            </div>
            <div className="beau-incentive-card" style={{ '--accent': '#0066b3' }} data-reveal data-reveal-delay="0.1">
              <span className="incentive-badge">QUÀ TẶNG AI</span>
              <h3 className="incentive-value">Gói Cloud GPU</h3>
              <p className="incentive-desc">Tặng ngay gói điện toán đám mây GPU tính toán cao cấp phục vụ huấn luyện mô hình AI thực tế.</p>
            </div>
            <div className="beau-incentive-card" style={{ '--accent': '#0066b3' }} data-reveal data-reveal-delay="0.15">
              <span className="incentive-badge">TRẢ GÓP</span>
              <h3 className="incentive-value">0% Lãi Suất</h3>
              <p className="incentive-desc">Hỗ trợ chia nhỏ học phí đóng theo từng tháng qua thẻ tín dụng ngân hàng đối tác.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Chuyển hướng nhanh ngành học & Tin tức (☀️ LIGHT BRIGHT THEME) */}
      <section 
        className="beau-section"
        style={{ 
          backgroundColor: '#F8FAFC', 
          color: '#0f172a',
          padding: '100px 0 110px 0',
          borderTop: 'none'
        }}
      >
        <div className="container" data-reveal>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span style={{ color: '#0066b3', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '0.85rem' }}>
              KHÁM PHÁ CÁC NGÀNH HỌC KHÁC
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, color: 'var(--secondary)', lineHeight: '1.2', marginTop: '10px', fontFamily: 'var(--font-sans)', letterSpacing: '-0.02em' }}>
              Hệ sinh thái đào tạo FPT
            </h2>
          </div>
          
          <div className="beau-other-programs-grid">
            <Link href="/dao-tao/chip-design" className="beau-other-program-card" style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 8px 25px rgba(0,0,0,0.02)' }} data-reveal data-reveal-delay="0.05">
              <div>
                <span className="other-prog-tag" style={{ color: '#f37021' }}>✦ JETKING CHIP DESIGN</span>
                <h3 className="other-prog-title" style={{ color: 'var(--secondary)' }}>Thiết Kế Vi Mạch Bán Dẫn</h3>
                <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Làm chủ ngôn ngữ Verilog/VHDL, công cụ thiết kế EDA chuẩn quốc tế và công nghệ vi mạch tích hợp AI.
                </p>
              </div>
              <span className="other-prog-link" style={{ color: '#f37021', display: 'inline-flex', alignItems: 'center', gap: '8px', fontWeight: 700 }}>
                Khám phá Vi Mạch
                <ArrowRight size={18} />
              </span>
            </Link>

            <Link href="/dao-tao/aptech/2-nam" className="beau-other-program-card" style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 8px 25px rgba(0,0,0,0.02)' }} data-reveal data-reveal-delay="0.1">
              <div>
                <span className="other-prog-tag" style={{ color: '#f37021' }}>◈ APTECH ACCP AI</span>
                <h3 className="other-prog-title" style={{ color: 'var(--secondary)' }}>Software Engineering & AI</h3>
                <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Lập trình viên Quốc tế ACCP AI — Làm chủ ngôn ngữ Java, Python, Web/Mobile Fullstack, Cloud và Vibe Coding.
                </p>
              </div>
              <span className="other-prog-link" style={{ color: '#f37021', display: 'inline-flex', alignItems: 'center', gap: '8px', fontWeight: 700 }}>
                Khám phá Lập Trình
                <ArrowRight size={18} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 6: Bottom CTA Section (🌙 DARK CYBER THEME) */}
      <section className="beau-cta-section">
        <div className="beau-cta-bg-circle"></div>
        <div className="container beau-cta-inner" data-reveal>
          <h2 className="beau-cta-title">Trở thành Chuyên gia AI Agent cùng FPT Jetking</h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.1rem', maxWidth: '680px', margin: '14px auto 36px', lineHeight: '1.7' }}>
            Nắm vững kỹ nghệ trí tuệ nhân tạo và đón đầu làn sóng cách mạng công nghệ mới nhất.
          </p>
          <a href="#dang-ky-ai-agent" className="beau-cta-btn" style={{ background: 'linear-gradient(135deg, #0066b3 0%, #0284c7 100%)', color: '#ffffff', fontWeight: 800 }}>
            Đăng Ký Tư Vấn & Nhận Học Bổng
            <ArrowRight size={22} strokeWidth={2.5} />
          </a>
        </div>
      </section>

      {/* Section 7: Scholarship Application Form (☀️ LIGHT THEME) */}
      <div id="dang-ky-ai-agent">
        <ScholarshipFormSection programName="FPT Jetking AI Agent" />
      </div>

      <Footer />
    </div>
  );
}
