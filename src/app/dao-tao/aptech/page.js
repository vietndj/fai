'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ParticleCanvas from '@/components/ParticleCanvas';
import ScholarshipFormSection from '@/components/ScholarshipFormSection';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  Check, 
  BookOpen, 
  Clock, 
  Trophy, 
  Briefcase, 
  Sparkles, 
  Code, 
  Cpu, 
  Layers, 
  Globe, 
  Zap, 
  Terminal,
  ShieldCheck,
  BrainCircuit,
  Wrench,
  FolderGit2
} from 'lucide-react';

export default function AptechSubpage() {
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
      shortTitle: 'AI & Web Foundations',
      fullTitle: 'AI-Driven Web Foundations',
      subTitle: 'Nền tảng Web tích hợp AI',
      desc: 'Xây dựng website responsive tích hợp AI Chatbot hoặc trình tạo nội dung tự động. Kết nối Database cơ bản.',
      coreStack: ['React 18.x', 'Node.js 20', 'SQL Server 2022', 'MongoDB 8.0', 'HTML5/CSS3'],
      aiTools: ['Windsurf', 'Tabnine', 'Framer AI', 'Wix AI'],
      careers: ['Front-end Web Dev (AI-Assisted)', 'Junior Node.js Developer', 'Web Designer (UI/UX)', 'Database Assistant']
    },
    {
      num: 'HỌC KỲ 02',
      shortTitle: 'Python, Data & MLOps',
      fullTitle: 'Python, Data & MLOps Essentials',
      subTitle: 'Nền tảng Python, Dữ liệu & MLOps',
      desc: 'Phát triển ứng dụng Python Backend tích hợp AI/NLP, xây dựng Dashboard phân tích dữ liệu trực quan và triển khai trên nền tảng Docker/Kubernetes.',
      coreStack: ['Python 3.x', 'Flask/Django', 'Docker', 'Kubernetes', 'SQL/NoSQL'],
      aiTools: ['OpenAI Tools', 'LangChain & RAG', 'PowerBI (AI)', 'Google Colab'],
      careers: ['Python Web Developer', 'Data Analyst', 'NLP Assistant / AI Dev', 'MLOps Trainee']
    },
    {
      num: 'HỌC KỲ 03',
      shortTitle: 'Java & Mobile AI',
      fullTitle: 'Java Microservices & Mobile with AI',
      subTitle: 'Hệ thống Java Microservices & Mobile AI',
      desc: 'Phát triển hệ thống Microservices quy mô doanh nghiệp tích hợp AI (Backend) và ứng dụng đa nền tảng Flutter (Frontend) với tính năng thông minh.',
      coreStack: ['Java SE 24', 'Spring Boot/Cloud', 'Jakarta EE 10/11', 'Flutter 3.32', 'Dart 3.9'],
      aiTools: ['Vibe Coding (ChatGPT)', 'OpenAI API', 'Hugging Face', 'AI in NetBeans'],
      careers: ['Java Microservices Developer', 'AI-Integrated Java Web Dev', 'Flutter Mobile Developer']
    },
    {
      num: 'HỌC KỲ 04',
      shortTitle: '.NET, Azure & Web3',
      fullTitle: '.NET GenAI, Azure & Web3',
      subTitle: 'Hệ thống .NET GenAI, Đám mây & Blockchain',
      desc: 'Phát triển hệ thống doanh nghiệp trên nền tảng .NET tích hợp Generative AI (RAG, Semantic Kernel) và module Blockchain bảo mật. Đáp ứng các yêu cầu phức tạp nhất của hệ sinh thái công nghệ đa dạng.',
      coreStack: ['ASP.NET Core', 'C#', 'Go 23', 'Go-Ethereum', 'HyperLedger', 'Azure Cloud'],
      aiTools: ['ChatGPT Vibe Coding', 'Semantic Kernel', 'Azure OpenAI', 'Hugging Face', 'VS Studio 2022 AI'],
      careers: ['.NET Fullstack Dev (AI-Integrated)', 'Solution Architect Trainee', 'Blockchain Developer']
    }
  ];

  const whyChooseUs = [
    {
      icon: <ShieldCheck size={28} style={{ color: '#f37021' }} />,
      title: 'Cam kết việc làm hệ sinh thái FPT+',
      desc: 'Đảm bảo cơ hội việc làm rộng mở tại FPT Software, FPT AI, FPT Smart Cloud và hàng trăm doanh nghiệp công nghệ liên kết.'
    },
    {
      icon: <BrainCircuit size={28} style={{ color: '#f37021' }} />,
      title: 'Chương trình tích hợp AI chuyên sâu',
      desc: 'Đón đầu công nghệ tương lai với Vibe Coding, AI-driven Apps, NLP (Xử lý ngôn ngữ tự nhiên) và Generative AI (AI tạo sinh).'
    },
    {
      icon: <Zap size={28} style={{ color: '#f37021' }} />,
      title: 'Làm chủ công cụ AI & Vibe Coding mới nhất',
      desc: 'Ứng dụng thành thạo ChatGPT, Github Copilot, Tabnine và Windsurf trực tiếp vào quy trình coding thực tế.'
    },
    {
      icon: <Globe size={28} style={{ color: '#f37021' }} />,
      title: 'Hệ sinh thái học tập 24/7',
      desc: 'Đặc quyền truy cập các nền tảng học tập dành riêng cho sinh viên FPT: Onlinevarsity, Aptech ProConnect, Coursera, Udemy và kết nối trực tiếp với cộng đồng Dev toàn cầu.'
    },
    {
      icon: <Wrench size={28} style={{ color: '#f37021' }} />,
      title: 'Đào tạo đa kỹ năng thực chiến',
      desc: 'Không chỉ là code, sinh viên được trang bị trọn bộ kỹ năng toàn diện: Code, BA (Phân tích nghiệp vụ), Tester, DevOps và Thiết kế hệ thống chuẩn doanh nghiệp.'
    },
    {
      icon: <FolderGit2 size={28} style={{ color: '#f37021' }} />,
      title: 'Học qua dự án (Project Based)',
      desc: 'Thực hành liên tục qua các đồ án (eProject) mỗi học kỳ. Tích hợp ngay công nghệ mới nhất để xây dựng Portfolio cá nhân ấn tượng trước cả khi tốt nghiệp.'
    }
  ];

  return (
    <div className={`beau-subpage-container theme-aptech active-sec-${activeSection}`}>
      <Header />

      {/* Section 0: Hero Section */}
      <section className="beau-hero" style={{ paddingBottom: '60px' }}>
        <ParticleCanvas className="beau-hero-particles" />
        <div className="beau-hero-bg-text">FPT APTECH</div>
        <div className="container beau-hero-inner" data-reveal>
          <span className="beau-hero-brand" style={{ backgroundColor: '#f37021', color: '#ffffff', letterSpacing: '0.08em', padding: '8px 20px', borderRadius: '30px' }}>
            FPT APTECH ACCP AI 2026
          </span>
          <h1 className="beau-hero-title" style={{ marginTop: '16px', fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: '1.25', textWrap: 'balance' }}>
            CHƯƠNG TRÌNH LẬP TRÌNH VIÊN QUỐC TẾ<br />AI ĐA KỸ NĂNG
          </h1>
          <div style={{ color: '#f37021', fontSize: '1.25rem', fontWeight: 800, marginTop: '8px', letterSpacing: '0.04em' }}>
            Đón đầu xu hướng – Nắm bắt cơ hội thực chiến
          </div>

          <div style={{ maxWidth: '900px', marginTop: '24px', color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.05rem', lineHeight: '1.75' }}>
            <p style={{ marginBottom: '16px' }}>
              Ngành CNTT Việt Nam đang trong giai đoạn bùng nổ. Theo dự báo của TopDev, từ 2023 – 2026, thị trường sẽ thiếu hụt từ 150.000 – 200.000 lập trình viên. Cơ hội nghề nghiệp vô cùng rộng mở, nhưng sẽ chỉ dành cho những ứng viên sở hữu kỹ năng thực chiến và khả năng ứng dụng công nghệ mới.
            </p>
            <p>
              Tại FPT Aptech, chúng tôi không ngừng đổi mới để sinh viên luôn đi trước một bước. Chương trình Lập trình Full-Stack tích hợp AI được thiết kế với triết lý: <strong>Học nhanh – Đi làm sớm</strong>, tối ưu hóa thời gian, tăng cường trải nghiệm thực tế và đáp ứng chính xác nhu cầu khắt khe của doanh nghiệp.
            </p>
          </div>

          {/* 🌟 ĐIỂM KHÁC BIỆT CỐT LÕI Banner (Redesigned Premium Glassmorphism) */}
          <div style={{ 
            marginTop: '48px', 
            marginBottom: '48px',
            padding: '36px 44px', 
            background: 'linear-gradient(135deg, rgba(232, 116, 30, 0.18) 0%, rgba(13, 33, 55, 0.82) 40%, rgba(22, 43, 74, 0.9) 100%)', 
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(232, 116, 30, 0.35)', 
            borderLeft: '6px solid #e8741e', 
            borderRadius: '24px',
            maxWidth: '1050px',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.2), 0 0 32px rgba(232, 116, 30, 0.12)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              display: 'inline-block',
              padding: '6px 16px',
              borderRadius: '20px',
              background: 'rgba(232, 116, 30, 0.2)',
              border: '1px solid rgba(232, 116, 30, 0.4)',
              color: '#f37021', 
              fontWeight: 800, 
              fontSize: '0.95rem', 
              letterSpacing: '0.08em',
              marginBottom: '14px',
              textTransform: 'uppercase'
            }}>
              ĐIỂM KHÁC BIỆT CỐT LÕI
            </div>
            <p style={{ margin: 0, color: 'rgba(255, 255, 255, 0.95)', fontSize: '1.15rem', lineHeight: '1.8', fontWeight: 400 }}>
              Mỗi sinh viên được định hướng và thiết kế một lộ trình cá nhân hóa dựa trên kỹ năng, sở thích và mục tiêu nghề nghiệp. Giúp bạn tối ưu thời gian học tập, phát huy tối đa thế mạnh và sẵn sàng hòa nhập ngay vào môi trường doanh nghiệp.
            </p>
          </div>

          {/* Banner Image */}
          <div className="beau-hero-banner" style={{ marginTop: '40px' }}>
            <Image
              src="/banner_aptech_sub_v2.png"
              alt="Chương trình Lập trình viên Quốc tế FPT Aptech ACCP AI"
              width={1200}
              height={420}
              priority
              style={{ borderRadius: '16px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* Section 1: LỘ TRÌNH ĐÀO TẠO TỔNG QUAN (Stats Bar) */}
      <section className="beau-section">
        <div className="container" data-reveal>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="beau-section-eyebrow" style={{ color: '#f37021' }}>HÀNH TRÌNH TỔNG QUAN</span>
            <h2 className="beau-section-title">Lộ trình đào tạo tổng quan</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', maxWidth: '650px', margin: '12px auto 0', fontSize: '1rem' }}>
              Một hành trình toàn diện được đúc kết qua những con số biết nói
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', 
            gap: '20px' 
          }}>
            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(243, 112, 33, 0.2)', borderRadius: '16px', padding: '24px', textAlign: 'center' }}>
              <BookOpen size={32} style={{ color: '#f37021', marginBottom: '12px' }} />
              <h3 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>26</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginTop: '6px', margin: 0 }}>Môn học chuẩn quốc tế</p>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(243, 112, 33, 0.2)', borderRadius: '16px', padding: '24px', textAlign: 'center' }}>
              <Clock size={32} style={{ color: '#f37021', marginBottom: '12px' }} />
              <h3 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>4</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginTop: '6px', margin: 0 }}>Học kỳ chuyên sâu</p>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(243, 112, 33, 0.2)', borderRadius: '16px', padding: '24px', textAlign: 'center' }}>
              <Trophy size={32} style={{ color: '#f37021', marginBottom: '12px' }} />
              <h3 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>4</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginTop: '6px', margin: 0 }}>Đồ án thực tế (eProject)</p>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(243, 112, 33, 0.2)', borderRadius: '16px', padding: '24px', textAlign: 'center' }}>
              <Briefcase size={32} style={{ color: '#f37021', marginBottom: '12px' }} />
              <h3 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>1</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginTop: '6px', margin: 0 }}>Portfolio chuyên nghiệp</p>
            </div>
          </div>

          {/* 992 Giờ học chi tiết */}
          <div style={{ 
            marginTop: '30px', 
            background: 'rgba(243, 112, 33, 0.06)', 
            border: '1px solid rgba(243, 112, 33, 0.25)', 
            borderRadius: '16px', 
            padding: '24px 30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px'
          }}>
            <div>
              <span style={{ fontSize: '0.85rem', color: '#f37021', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Tổng thời lượng đào tạo</span>
              <h4 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#ffffff', margin: '4px 0 0' }}>992 Giờ học chuẩn quốc tế</h4>
            </div>
            <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
              <div>
                <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', display: 'block' }}>Lý thuyết</span>
                <strong style={{ color: '#ffffff', fontSize: '1.2rem' }}>386 giờ</strong>
              </div>
              <div style={{ borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '30px' }}>
                <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', display: 'block' }}>Thực hành</span>
                <strong style={{ color: '#ffffff', fontSize: '1.2rem' }}>446 giờ</strong>
              </div>
              <div style={{ borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '30px' }}>
                <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', display: 'block' }}>Đồ án thực tế</span>
                <strong style={{ color: '#ffffff', fontSize: '1.2rem' }}>160 giờ</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: CHI TIẾT CHƯƠNG TRÌNH HỌC (Interactive Tabs) */}
      <section className="beau-section">
        <div className="container" data-reveal>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="beau-section-eyebrow" style={{ color: '#f37021' }}>NỘI DUNG ĐÀO TẠO</span>
            <h2 className="beau-section-title">Chi tiết chương trình học (4 học kỳ)</h2>
          </div>

          {/* Sticky 2-Line Responsive Semester Tabs Bar */}
          <div 
            style={{ 
              position: 'sticky', 
              top: '72px', 
              zIndex: 90, 
              background: 'rgba(8, 14, 25, 0.95)', 
              backdropFilter: 'blur(16px)', 
              WebkitBackdropFilter: 'blur(16px)',
              padding: '14px 0',
              margin: '0 0 40px',
              borderTop: '1px solid rgba(243, 112, 33, 0.25)',
              borderBottom: '1px solid rgba(243, 112, 33, 0.25)',
              boxShadow: '0 12px 30px rgba(0, 0, 0, 0.6)'
            }}
          >
            <div 
              style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', 
                gap: '10px', 
                alignItems: 'stretch'
              }}
            >
              {semesters.map((sem, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  style={{
                    padding: '10px 14px',
                    borderRadius: '14px',
                    border: '1px solid',
                    borderColor: activeTab === idx ? '#f37021' : 'rgba(255, 255, 255, 0.12)',
                    background: activeTab === idx ? 'linear-gradient(135deg, #f37021 0%, #c8500e 100%)' : 'rgba(255, 255, 255, 0.04)',
                    color: '#ffffff',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    boxShadow: activeTab === idx ? '0 6px 18px rgba(243, 112, 33, 0.4)' : 'none'
                  }}
                >
                  <span style={{ 
                    fontSize: '0.72rem', 
                    fontWeight: 800, 
                    letterSpacing: '0.08em', 
                    color: activeTab === idx ? '#ffffff' : '#f37021',
                    textTransform: 'uppercase',
                    marginBottom: '3px'
                  }}>
                    {sem.num}
                  </span>
                  <span style={{ 
                    fontSize: '0.88rem', 
                    fontWeight: 700, 
                    lineHeight: '1.25',
                    color: '#ffffff',
                    wordBreak: 'break-word'
                  }}>
                    {sem.shortTitle}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Active Tab Card Content */}
          <div style={{ 
            background: 'rgba(15, 10, 5, 0.8)', 
            border: '1px solid rgba(243, 112, 33, 0.3)', 
            borderRadius: '24px', 
            padding: '40px',
            boxShadow: '0 20px 50px rgba(0,0,0,0.4)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px', marginBottom: '24px' }}>
              <div>
                <span style={{ fontSize: '0.9rem', color: '#f37021', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  {semesters[activeTab].num}
                </span>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff', margin: '4px 0' }}>
                  {semesters[activeTab].fullTitle}
                </h3>
                <h4 style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)', fontWeight: 600, margin: 0 }}>
                  ({semesters[activeTab].subTitle})
                </h4>
              </div>
            </div>

            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '32px' }}>
              {semesters[activeTab].desc}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px' }}>
              {/* Core Stack */}
              <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '16px', padding: '24px', border: '1px solid rgba(255,255,255,0.06)' }}>
                <h4 style={{ fontSize: '1.05rem', color: '#f37021', fontWeight: 800, margin: '0 0 16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Code size={20} /> Công nghệ lõi (Core Stack)
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {semesters[activeTab].coreStack.map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem', marginBottom: '10px' }}>
                      <Check size={16} style={{ color: '#f37021' }} /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* AI & Support Tools */}
              <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '16px', padding: '24px', border: '1px solid rgba(255,255,255,0.06)' }}>
                <h4 style={{ fontSize: '1.05rem', color: '#f37021', fontWeight: 800, margin: '0 0 16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Sparkles size={20} /> Công cụ AI & Hỗ trợ
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {semesters[activeTab].aiTools.map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem', marginBottom: '10px' }}>
                      <Zap size={16} style={{ color: '#f37021' }} /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Careers */}
              <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '16px', padding: '24px', border: '1px solid rgba(255,255,255,0.06)' }}>
                <h4 style={{ fontSize: '1.05rem', color: '#f37021', fontWeight: 800, margin: '0 0 16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Briefcase size={20} /> Cơ hội nghề nghiệp
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {semesters[activeTab].careers.map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem', marginBottom: '10px' }}>
                      <ArrowRight size={16} style={{ color: '#f37021' }} /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: TẠI SAO HỌC LẬP TRÌNH NÊN CHỌN FPT APTECH? */}
      <section className="beau-section">
        <div className="container" data-reveal>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="beau-section-eyebrow" style={{ color: '#f37021' }}>ĐẶC QUYỀN ĐÀO TẠO</span>
            <h2 className="beau-section-title">Tại sao học lập trình nên chọn FPT Aptech?</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', maxWidth: '850px', margin: '16px auto 0', fontSize: '1.05rem', lineHeight: '1.75' }}>
              FPT Aptech mang đến môi trường học tập chuẩn Quốc Tế với chương trình ACCP AI mới nhất. Chúng tôi cam kết giới thiệu việc làm và kết nối trực tiếp sinh viên với hệ sinh thái công nghệ FPT cùng hàng trăm doanh nghiệp công nghệ hàng đầu.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {whyChooseUs.map((item, idx) => (
              <div 
                key={idx} 
                style={{ 
                  background: 'rgba(255, 255, 255, 0.03)', 
                  border: '1px solid rgba(255, 255, 255, 0.08)', 
                  borderRadius: '20px', 
                  padding: '30px',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ marginBottom: '16px' }}>{item.icon}</div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', marginBottom: '10px' }}>
                  {item.title}
                </h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.95rem', lineHeight: '1.65', margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Bottom CTA Section */}
      <section className="beau-cta-section">
        <div className="beau-cta-bg-circle"></div>
        <div className="container beau-cta-inner" data-reveal>
          <h2 className="beau-cta-title">Sẵn sàng trở thành lập trình viên AI đa kỹ năng?</h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', marginBottom: '30px' }}>
            Đăng ký nhận tư vấn lộ trình học cá nhân hóa và thông tin học bổng mới nhất từ FPT Aptech
          </p>
          <a 
            href="https://zalo.me/fptaptech" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="beau-cta-btn" 
            style={{ background: '#f37021' }}
          >
            Tư vấn ngay
            <ArrowRight size={24} strokeWidth={2.5} />
          </a>
        </div>
      </section>

      {/* Section 5: Form nhận thông tin học bổng & Google Sheet */}
      <ScholarshipFormSection 
        programName="FPT Aptech" 
        googleSheetScriptUrl="https://script.google.com/macros/s/AKfycbwfPoh5H-YB8CcPWw9GijIv44YjXtHbrwdLX7XCMWnhTmg5ocW-aGt3PnCIMiC_pvSKrw/exec"
      />

      <Footer />
    </div>
  );
}
