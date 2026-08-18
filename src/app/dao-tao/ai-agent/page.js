'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ParticleCanvas from '@/components/ParticleCanvas';
import JetkingProgramSwitcher from '@/components/JetkingProgramSwitcher';
import ScholarshipFormSection from '@/components/ScholarshipFormSection';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check, Award, BookOpen, Clock, Trophy, Sparkles, Bot, Brain, Network, Zap, Briefcase } from 'lucide-react';

export default function AiAgentSubpage() {
  const [activeSection, setActiveSection] = useState(0);
  const [activeTab, setActiveTab] = useState(0);

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

  const semesters = [
    {
      num: 'HỌC KỲ 01',
      shortTitle: 'Python & ML Foundations',
      title: 'Python, Data Engineering & Machine Learning Foundations',
      subtitle: '(Lập trình Python chuyên sâu, Xử lý Dữ liệu lớn & Nền tảng Học máy)',
      desc: 'Thiết lập nền tảng kỹ thuật AI vững chắc. Làm chủ ngôn ngữ Python cho AI, giải tích ma trận, xác suất thống kê, kỹ thuật thu thập xử lý dữ liệu và xây dựng các mô hình học máy (Machine Learning) có giám sát & không giám sát.',
      coreStack: [
        'Lập trình Python nâng cao & OOP cho AI Systems',
        'Đại số tuyến tính, Xác suất thống kê & Tối ưu hóa',
        'Xử lý và trực quan hóa dữ liệu (Pandas, NumPy, Matplotlib)',
        'Thuật toán Machine Learning kinh điển (Scikit-learn)',
        'Quy trình xây dựng Pipeline Dữ liệu tự động'
      ],
      aiTools: [
        'Jupyter Notebook & Google Colab Pro',
        'VS Code AI Extensions & GitHub Copilot',
        'Scikit-learn Machine Learning Library',
        'Weights & Biases (W&B) Experiment Tracking',
        'Streamlit Rapid AI App Prototyping'
      ],
      careers: [
        'AI Data Engineer (Kỹ sư Dữ liệu AI)',
        'Junior Python AI Developer',
        'Machine Learning Associate',
        'Đồ án eProject: Hệ thống Dự báo & Phân loại dữ liệu thông minh'
      ]
    },
    {
      num: 'HỌC KỲ 02',
      shortTitle: 'Deep Learning & Vision/NLP',
      title: 'Deep Learning, Computer Vision & Natural Language Processing',
      subtitle: '(Học sâu Mạng nơ-ron, Thị giác máy tính & Xử lý ngôn ngữ tự nhiên)',
      desc: 'Nắm vững cốt lõi của Trí tuệ nhân tạo hiện đại. Xây dựng mạng nơ-ron tích chập (CNN) nhận diện hình ảnh, mạng nơ-ron hồi quy & kiến trúc Transformer để xử lý văn bản, và đóng gói mô hình thành dịch vụ API với FastAPI/Docker.',
      coreStack: [
        'Kiến trúc mạng nơ-ron nhân tạo (ANN, CNN, RNN, LSTM)',
        'Thị giác máy tính (Computer Vision & Object Detection YOLO)',
        'Xử lý ngôn ngữ tự nhiên (NLP, Embeddings, Tokenization)',
        'Kiến trúc Transformer & Cơ chế Attention',
        'Đóng gói và triển khai RESTful AI API (FastAPI & Docker)'
      ],
      aiTools: [
        'PyTorch Deep Learning Framework',
        'TensorFlow & Keras Ecosystem',
        'Hugging Face Transformers & Datasets',
        'OpenCV Computer Vision Library',
        'FastAPI & Docker Containerization'
      ],
      careers: [
        'Deep Learning Engineer (Kỹ sư Học sâu)',
        'Computer Vision Specialist (Chuyên viên Thị giác máy tính)',
        'NLP Engineer (Kỹ sư Xử lý ngôn ngữ tự nhiên)',
        'Đồ án eProject: Ứng dụng Nhận diện thị giác & Trợ lý đàm thoại'
      ]
    },
    {
      num: 'HỌC KỲ 03',
      shortTitle: 'GenAI & RAG Systems',
      title: 'Generative AI, Advanced RAG & LLM Fine-tuning',
      subtitle: '(Mô hình ngôn ngữ lớn LLM, Hệ thống truy xuất RAG & Tinh chỉnh chuyên sâu)',
      desc: 'Làm chủ kỷ nguyên GenAI tạo sinh. Thiết kế Prompt Engineering nâng cao, xây dựng hệ thống hỏi đáp tri thức doanh nghiệp RAG với Vector Database, và kỹ thuật tinh chỉnh tham số hiệu quả (PEFT, LoRA/QLoRA) trên mô hình mã nguồn mở.',
      coreStack: [
        'Kiến trúc Large Language Models (GPT, Claude, Llama 3)',
        'Kỹ thuật Prompt Engineering chuyên sâu (CoT, ReAct, Few-Shot)',
        'Kiến trúc RAG nâng cao (HyDE, Reranking, Hybrid Search)',
        'Cơ sở dữ liệu Vector & Cơ chế Semantic Search',
        'Fine-tuning mô hình ngôn ngữ lớn (LoRA, QLoRA, Axolotl)'
      ],
      aiTools: [
        'LangChain & LlamaIndex Frameworks',
        'Vector Databases (Pinecone, ChromaDB, Milvus, Qdrant)',
        'Ollama & vLLM High-Performance Inference',
        'Hugging Face PEFT & TRL Fine-tuning',
        'OpenAI API & Anthropic Claude APIs'
      ],
      careers: [
        'Generative AI Engineer (Kỹ sư AI Tạo sinh)',
        'RAG Solutions Architect (Kiến trúc sư Giải pháp RAG)',
        'LLM Specialist & Prompt Architect',
        'Đồ án eProject: Trợ lý Tri thức Doanh nghiệp RAG đa dữ liệu'
      ]
    },
    {
      num: 'HỌC KỲ 04',
      shortTitle: 'Multi-Agent & Autonomous AI',
      title: 'Multi-Agent Systems & Autonomous AI Agent Orchestration',
      subtitle: '(Kiến trúc Tác tử AI Đa nhiệm, Tự động hóa Quy trình Doanh nghiệp)',
      desc: 'Đỉnh cao của AI hiện đại: Xây dựng các mạng lưới tác tử AI tự động lập kế hoạch, sử dụng công cụ (Tool Use/Function Calling), tương tác và cộng tác để giải quyết các bài toán kinh doanh phức tạp mà không cần con người can thiệp.',
      coreStack: [
        'Kiến trúc Tác tử AI tự hành (Autonomous AI Agent Architectures)',
        'Điều phối đa tác tử (Multi-Agent Orchestration & Collaboration)',
        'Tích hợp công cụ, API & Cơ chế tự phản chiếu (Self-Reflection)',
        'Quản lý trạng thái và bộ nhớ tác tử (Graph-based State Management)',
        'Bảo mật AI, Đánh giá hiệu năng Agent & Triển khai Enterprise Cloud'
      ],
      aiTools: [
        'CrewAI Enterprise Multi-Agent Framework',
        'LangGraph State Machine for Agents',
        'Microsoft AutoGen Multi-Agent Conversation',
        'Semantic Kernel & MCP (Model Context Protocol)',
        'Kubernetes, AWS Bedrock & Azure OpenAI'
      ],
      careers: [
        'AI Agent Architect (Kiến trúc sư Tác tử AI)',
        'Enterprise AI Automation Engineer',
        'Lead AI Solutions Consultant',
        'Đồ án Tốt nghiệp: Hệ thống Multi-Agent Doanh nghiệp tự vận hành'
      ]
    }
  ];

  return (
    <div className={`beau-subpage-container theme-ai-agent active-sec-${activeSection}`}>
      <Header />

      {/* Sticky Program Switcher Bar */}
      <JetkingProgramSwitcher activePath="/dao-tao/ai-agent" />

      {/* Section 0: Hero Section (🌙 DARK CYBER THEME) */}
      <section className="beau-hero">
        <ParticleCanvas className="beau-hero-particles" />
        <div className="beau-hero-bg-text">AI AGENT</div>
        <div className="container beau-hero-inner" data-reveal>
          <span className="beau-hero-brand" style={{ backgroundColor: '#f37021', color: '#ffffff', fontWeight: 800 }}>
            FPT JETKING — CHUYÊN GIA AI AGENT (6 THÁNG - 2 NĂM)
          </span>
          <h1 className="beau-hero-title" style={{ marginTop: '16px', fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: '1.25', textWrap: 'balance', textTransform: 'uppercase' }}>
            CHƯƠNG TRÌNH ĐÀO TẠO CHUYÊN NGÀNH AI AGENT
          </h1>
          <div className="beau-hero-logo" style={{ marginTop: '20px', display: 'flex', alignItems: 'center' }}>
            <svg width="120" height="38" viewBox="0 0 120 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 8 L22 8 L18 28 L6 28 Z" fill="#f37021"/>
              <path d="M24 14 L34 14 L31 28 L21 28 Z" fill="#0066b3"/>
              <text x="40" y="25" fill="#ffffff" fontSize="16" fontWeight="bold" fontFamily="sans-serif">Jetking</text>
            </svg>
          </div>
          <p className="beau-hero-desc">
            Trong làn sóng chuyển đổi số toàn cầu, trí tuệ nhân tạo (AI) đang trở thành động lực cốt lõi thúc đẩy năng suất, sáng tạo và hiệu quả trong mọi lĩnh vực – từ y tế, tài chính, giáo dục đến sản xuất, thương mại điện tử. Một trong những ứng dụng đột phá nhất của AI hiện nay là AI Agent – những “tác nhân thông minh” có khả năng quan sát, ra quyết định và hành động một cách tự động mà không cần can thiệp con người.<br /><br />
            AI Agent không còn là khái niệm xa vời. Chúng hiện diện trong chatbot, trợ lý ảo, hệ thống đề xuất, dịch vụ khách hàng tự động, và dần dần tiến tới xây dựng các hệ thống đa tác nhân (Multi-Agent Systems) có thể phối hợp giải quyết các bài toán phức tạp như con người. Theo dự báo của Diễn đàn Kinh tế Thế giới, đến năm 2025, AI có thể tạo ra hơn 97 triệu việc làm mới – đặc biệt là các vị trí liên quan đến AI Agent, NLP và học máy.
          </p>

          <div className="beau-stats-bar">
            <div className="beau-stat-item">
              <h3 style={{ color: '#f37021' }}>04 Kỳ Học</h3>
              <p>Lộ trình từ lập trình Python đến phát triển Multi-Agent Systems.</p>
            </div>
            <div className="beau-stat-item">
              <h3 style={{ color: '#f37021' }}>Jetking AD</h3>
              <p>Bằng Advanced Diploma quốc tế công nhận toàn cầu từ Jetking Ấn Độ.</p>
            </div>
            <div className="beau-stat-item">
              <h3 style={{ color: '#f37021' }}>Autonomous AI</h3>
              <p>Thực chiến xây dựng Agent tự ra quyết định và phối hợp đa tác tử.</p>
            </div>
          </div>

          {/* Banner Image */}
          <div className="beau-hero-banner" style={{ marginTop: '40px' }}>
            <Image
              src="/banner_jetking_sub_v2.png"
              alt="Tuyển sinh FPT Jetking AI Agent"
              width={1200}
              height={400}
              priority
              style={{ borderRadius: '16px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* Section 1: HÀNH TRÌNH TỔNG QUAN (☀️ LIGHT BRIGHT THEME) */}
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
          <div style={{ textAlign: 'center', marginBottom: '54px' }}>
            <span style={{ color: '#f37021', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '0.85rem' }}>
              HÀNH TRÌNH TỔNG QUAN
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, color: 'var(--secondary)', lineHeight: '1.2', marginTop: '10px', fontFamily: 'var(--font-sans)', letterSpacing: '-0.02em' }}>
              Lộ trình đào tạo Chuyên gia AI Agent
            </h2>
          </div>

          {/* 4 Stats Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
            <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '20px', padding: '32px 24px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
              <BookOpen size={34} style={{ color: '#f37021', marginBottom: '14px' }} />
              <h3 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--secondary)', margin: 0, lineHeight: 1 }}>25</h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', marginTop: '10px', margin: 0, fontWeight: 600 }}>Môn học</p>
            </div>
            <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '20px', padding: '32px 24px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
              <Clock size={34} style={{ color: '#f37021', marginBottom: '14px' }} />
              <h3 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--secondary)', margin: 0, lineHeight: 1 }}>04</h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', marginTop: '10px', margin: 0, fontWeight: 600 }}>Học kỳ</p>
            </div>
            <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '20px', padding: '32px 24px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
              <Trophy size={34} style={{ color: '#f37021', marginBottom: '14px' }} />
              <h3 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--secondary)', margin: 0, lineHeight: 1 }}>04</h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', marginTop: '10px', margin: 0, fontWeight: 600 }}>Project</p>
            </div>
            <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '20px', padding: '32px 24px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
              <Briefcase size={34} style={{ color: '#f37021', marginBottom: '14px' }} />
              <h3 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--secondary)', margin: 0, lineHeight: 1 }}>01</h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', marginTop: '10px', margin: 0, fontWeight: 600 }}>Portfolio</p>
            </div>
          </div>

          {/* Time banner */}
          <div style={{ 
            marginTop: '36px', 
            background: '#ffffff', 
            border: '1px solid rgba(243, 112, 33, 0.3)', 
            borderLeft: '6px solid #f37021',
            borderRadius: '20px', 
            padding: '32px 40px',
            boxShadow: '0 12px 35px rgba(0, 0, 0, 0.03)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px'
          }}>
            <div>
              <span style={{ fontSize: '0.82rem', color: '#f37021', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Tổng thời lượng đào tạo</span>
              <h4 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--secondary)', margin: '6px 0 0', fontFamily: 'var(--font-sans)' }}>900 Giờ học thực chiến AI</h4>
            </div>
            <div style={{ display: 'flex', gap: '36px', flexWrap: 'wrap' }}>
              <div>
                <span style={{ color: '#64748b', fontSize: '0.88rem', display: 'block', fontWeight: 600 }}>Nền tảng &amp; Deep Learning</span>
                <strong style={{ color: 'var(--secondary)', fontSize: '1.3rem', fontWeight: 800 }}>300 giờ</strong>
              </div>
              <div style={{ borderLeft: '1px solid rgba(0,0,0,0.08)', paddingLeft: '36px' }}>
                <span style={{ color: '#64748b', fontSize: '0.88rem', display: 'block', fontWeight: 600 }}>GenAI, RAG &amp; Multi-Agent</span>
                <strong style={{ color: 'var(--secondary)', fontSize: '1.3rem', fontWeight: 800 }}>400 giờ</strong>
              </div>
              <div style={{ borderLeft: '1px solid rgba(0,0,0,0.08)', paddingLeft: '36px' }}>
                <span style={{ color: '#f37021', fontSize: '1.3rem', fontWeight: 800 }}>Đồ án Agent eProject</span>
                <strong style={{ color: '#f37021', fontSize: '1.3rem', fontWeight: 800 }}>200 giờ</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: CHI TIẾT CHƯƠNG TRÌNH HỌC (4 HỌC KỲ) - DẠNG TAB TƯƠNG TÁC (🌙 DARK CYBER THEME) */}
      <section className="beau-section" style={{ padding: '100px 0 110px 0' }}>
        <div className="container" data-reveal>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="beau-section-eyebrow" style={{ color: '#f37021' }}>NỘI DUNG ĐÀO TẠO</span>
            <h2 className="beau-section-title">Chi tiết chương trình học (4 học kỳ)</h2>
          </div>

          {/* Segmented Semester Tabs */}
          <div 
            style={{ 
              position: 'sticky', 
              top: '80px', 
              zIndex: 90, 
              padding: '12px 0',
              marginBottom: '36px',
              maxWidth: '1100px',
              margin: '0 auto 36px'
            }}
          >
            <div 
              style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', 
                gap: '14px'
              }}
            >
              {semesters.map((sem, idx) => {
                const isActive = activeTab === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    style={{
                      padding: '14px 18px',
                      borderRadius: '16px',
                      border: isActive ? '1px solid #f37021' : '1px solid rgba(255, 255, 255, 0.12)',
                      background: isActive 
                        ? 'linear-gradient(135deg, #f37021 0%, #d85d0d 100%)' 
                        : 'rgba(13, 33, 55, 0.75)',
                      color: '#ffffff',
                      cursor: 'pointer',
                      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      textAlign: 'left',
                      boxShadow: isActive ? '0 10px 28px rgba(243, 112, 33, 0.45)' : '0 4px 15px rgba(0,0,0,0.2)',
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)'
                    }}
                  >
                    <span 
                      style={{ 
                        fontSize: '0.78rem', 
                        fontWeight: 900, 
                        color: isActive ? '#ffffff' : '#f37021',
                        background: isActive ? 'rgba(0, 0, 0, 0.25)' : 'rgba(243, 112, 33, 0.15)',
                        padding: '4px 9px',
                        borderRadius: '10px',
                        flexShrink: 0
                      }}
                    >
                      {sem.num}
                    </span>
                    <span 
                      style={{ 
                        fontSize: '0.92rem', 
                        fontWeight: isActive ? 800 : 600, 
                        lineHeight: '1.3',
                        color: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.85)'
                      }}
                    >
                      {sem.shortTitle}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Tab Card Content */}
          <div style={{ 
            background: 'linear-gradient(135deg, rgba(13, 33, 55, 0.88) 0%, rgba(22, 43, 74, 0.92) 100%)', 
            border: '1px solid rgba(243, 112, 33, 0.3)', 
            borderRadius: '24px', 
            padding: '44px',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            boxShadow: '0 24px 60px rgba(0, 0, 0, 0.45)',
            maxWidth: '1100px',
            margin: '0 auto'
          }}>
            <div style={{ marginBottom: '28px' }}>
              <span style={{ color: '#f37021', fontSize: '0.88rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                {semesters[activeTab].num}
              </span>
              <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, color: '#ffffff', margin: '8px 0 4px', fontFamily: 'var(--font-sans)' }}>
                {semesters[activeTab].title}
              </h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.65)', fontSize: '0.98rem', margin: '0 0 16px' }}>
                {semesters[activeTab].subtitle}
              </p>
              <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.05rem', lineHeight: '1.7', margin: 0 }}>
                {semesters[activeTab].desc}
              </p>
            </div>

            <hr style={{ borderColor: 'rgba(255, 255, 255, 0.1)', margin: '30px 0' }} />

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '36px' }}>
              {/* Col 1 */}
              <div>
                <h4 style={{ color: '#f37021', fontSize: '0.9rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '18px' }}>
                  CÔNG NGHỆ &amp; THUẬT TOÁN LÕI
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {semesters[activeTab].coreStack.map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.96rem', lineHeight: '1.5' }}>
                      <Check size={18} style={{ color: '#f37021', flexShrink: 0, marginTop: '2px' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Col 2 */}
              <div>
                <h4 style={{ color: '#f37021', fontSize: '0.9rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '18px' }}>
                  FRAMEWORKS &amp; NỀN TẢNG AI
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {semesters[activeTab].aiTools.map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.96rem', lineHeight: '1.5' }}>
                      <Check size={18} style={{ color: '#f37021', flexShrink: 0, marginTop: '2px' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Col 3 */}
              <div>
                <h4 style={{ color: '#f37021', fontSize: '0.9rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '18px' }}>
                  CƠ HỘI NGHỀ NGHIỆP &amp; ĐỒ ÁN
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {semesters[activeTab].careers.map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.96rem', lineHeight: '1.5' }}>
                      <Check size={18} style={{ color: '#f37021', flexShrink: 0, marginTop: '2px' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: TẠI SAO NÊN CHỌN FPT JETKING? (☀️ LIGHT WARM CREAM THEME) */}
      <section 
        className="beau-section"
        style={{ 
          backgroundColor: '#F8FAFC', 
          color: '#0f172a',
          padding: '100px 0 120px 0' 
        }}
      >
        <div className="container" data-reveal>
          <div style={{ textAlign: 'center', marginBottom: '54px' }}>
            <span className="beau-section-eyebrow" style={{ color: '#f37021', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em' }}>
              ĐẶC QUYỀN ĐÀO TẠO
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 2.8rem)', fontWeight: 800, color: 'var(--secondary)', lineHeight: '1.25', marginTop: '10px', fontFamily: 'var(--font-sans)', letterSpacing: '-0.02em' }}>
              Tại sao học AI Agent nên chọn FPT Jetking?
            </h2>
            <p style={{ color: '#64748b', maxWidth: '850px', margin: '16px auto 0', fontSize: '1.05rem', lineHeight: '1.75' }}>
              Chương trình tiên phong tại Việt Nam đào tạo bài bản về kiến trúc tác tử AI tự hành (Autonomous Multi-Agent), kỹ thuật RAG doanh nghiệp và tối ưu hóa các mô hình ngôn ngữ lớn (LLM).
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            <div 
              style={{ 
                background: '#ffffff', 
                border: '1px solid rgba(0, 0, 0, 0.06)', 
                borderRadius: '20px', 
                padding: '36px 30px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.02)',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{ marginBottom: '18px' }}><Bot size={32} style={{ color: '#f37021' }} /></div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '12px', fontFamily: 'var(--font-sans)' }}>
                Đón đầu kỷ nguyên Autonomous AI Agent
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', lineHeight: '1.7', margin: 0 }}>
                Học tập và làm chủ các framework tác tử hàng đầu thế giới: CrewAI, LangGraph, AutoGen, Semantic Kernel và giao thức MCP.
              </p>
            </div>

            <div 
              style={{ 
                background: '#ffffff', 
                border: '1px solid rgba(0, 0, 0, 0.06)', 
                borderRadius: '20px', 
                padding: '36px 30px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.02)',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{ marginBottom: '18px' }}><Brain size={32} style={{ color: '#f37021' }} /></div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '12px', fontFamily: 'var(--font-sans)' }}>
                Hạ tầng GPU &amp; Cloud AI Lab
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', lineHeight: '1.7', margin: 0 }}>
                Thực hành huấn luyện fine-tuning mô hình ngôn ngữ lớn (LoRA, QLoRA) và xây dựng hệ thống Vector DB RAG trên hạ tầng server AI hiện đại.
              </p>
            </div>

            <div 
              style={{ 
                background: '#ffffff', 
                border: '1px solid rgba(0, 0, 0, 0.06)', 
                borderRadius: '20px', 
                padding: '36px 30px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.02)',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{ marginBottom: '18px' }}><Briefcase size={32} style={{ color: '#f37021' }} /></div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '12px', fontFamily: 'var(--font-sans)' }}>
                Cơ hội việc làm AI đỉnh cao
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', lineHeight: '1.7', margin: 0 }}>
                Kết nối trực tiếp vào các trung tâm AI của FPT Software, FPT Smart Cloud và các tập đoàn công nghệ hàng đầu với mức đãi ngộ hấp dẫn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Bottom CTA Section (🌙 DARK CYBER THEME) */}
      <section className="beau-cta-section">
        <div className="beau-cta-bg-circle"></div>
        <div className="container beau-cta-inner" data-reveal>
          <h2 className="beau-cta-title">Làm chủ kỷ nguyên AI Agent tự hành cùng FPT Jetking</h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.1rem', maxWidth: '680px', margin: '14px auto 36px', lineHeight: '1.7' }}>
            Trở thành chuyên gia phát triển hệ thống AI tác tử tiên phong tại Việt Nam.
          </p>
          <a href="#dang-ky-ai-agent" className="beau-cta-btn" style={{ background: 'linear-gradient(135deg, #f37021 0%, #d85d0d 100%)', color: '#ffffff', fontWeight: 800 }}>
            Đăng Ký Tư Vấn &amp; Nhận Học Bổng
            <ArrowRight size={22} strokeWidth={2.5} />
          </a>
        </div>
      </section>

      {/* Section 4: Scholarship Application Form (☀️ LIGHT THEME) */}
      <div id="dang-ky-ai-agent">
        <ScholarshipFormSection programName="FPT Jetking Chuyên Gia AI Agent" />
      </div>

      <Footer />
    </div>
  );
}
