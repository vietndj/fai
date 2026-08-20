'use client';

import { useEffect, useState } from 'react';
import Footer from '@/components/Footer';
import ParticleCanvas from '@/components/ParticleCanvas';
import ScholarshipFormSection from '@/components/ScholarshipFormSection';
import TechCTAButton from '@/components/TechCTAButton';
import AptechProgramSwitcher from '@/components/AptechProgramSwitcher';
import Image from 'next/image';
import { 
  Check, 
  BookOpen, 
  Clock, 
  Trophy, 
  Briefcase, 
  ShieldCheck,
  BrainCircuit,
  Zap,
  Globe,
  Wrench,
  FolderGit2
} from 'lucide-react';

export default function Fullstack2NamPage() {
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
      careers: ['Java Enterprise Developer', 'Mobile App Developer (Flutter)', 'Microservices Engineer', 'Cloud Software Specialist']
    },
    {
      num: 'HỌC KỲ 04',
      shortTitle: 'Enterprise & Capstone',
      fullTitle: 'Enterprise Integration & Capstone Project',
      subTitle: 'Hệ thống Doanh nghiệp & Đồ án Tốt nghiệp',
      desc: 'Thiết kế kiến trúc hệ thống lớn tích hợp AI End-to-End, giải quyết bài toán nghiệp vụ phức tạp và bảo vệ đồ án tốt nghiệp trước hội đồng chuyên gia FPT.',
      coreStack: ['Full Stack AI Architecture', '.NET Core / Next.js', 'CI/CD & DevOps Pipeline', 'Enterprise Security'],
      aiTools: ['Custom AI Agents', 'Copilot Workspace', 'Claude for Code', 'AI Architecture Reviewer'],
      careers: ['Full-Stack AI Software Engineer', 'AI Integration Specialist', 'Solutions Architect Trainee', 'Tech Lead Assistant']
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
      title: 'Chương trình ACCP AI độc quyền',
      desc: 'Đón đầu kỷ nguyên AI với giáo trình mới nhất từ Tập đoàn Aptech Ấn Độ, tích hợp AI vào từng môn học từ nền tảng đến chuyên sâu.'
    },
    {
      icon: <Zap size={28} style={{ color: '#f37021' }} />,
      title: 'Làm chủ công cụ AI & Vibe Coding mới nhất',
      desc: 'Ứng dụng thành thạo AI vào quy trình phân tích, viết code, kiểm thử và tối ưu hóa dự án, tăng năng suất làm việc gấp 5 lần.'
    },
    {
      icon: <Globe size={28} style={{ color: '#f37021' }} />,
      title: 'Hệ sinh thái học tập 24/7',
      desc: 'Đặc quyền truy cập các nền tảng học tập dành riêng cho sinh viên FPT: Onlinevarsity, Aptech ProConnect, Coursera, Udemy và kết nối trực tiếp với cộng đồng Dev toàn cầu.'
    },
    {
      icon: <Wrench size={28} style={{ color: '#f37021' }} />,
      title: 'Đào tạo đa kỹ năng thực chiến',
      desc: 'Trang bị trọn bộ kỹ năng từ UI/UX, Frontend, Backend, Mobile đến Data & DevOps, tự tin thích ứng với mọi dự án công nghệ.'
    },
    {
      icon: <FolderGit2 size={28} style={{ color: '#f37021' }} />,
      title: 'Học qua dự án (Project Based)',
      desc: 'Thực hành liên tục qua các đồ án (eProject) mỗi học kỳ. Tích hợp ngay công nghệ mới nhất để xây dựng Portfolio cá nhân ấn tượng trước cả khi tốt nghiệp.'
    }
  ];

  return (
    <div className={`beau-subpage-container theme-aptech active-sec-${activeSection}`}>
      
      {/* Sticky Program Switcher Bar (Large & Prominent) */}
      <AptechProgramSwitcher activePath="/dao-tao/aptech/accp" />

      {/* Section 0: Hero Section (🌙 DARK TECH THEME) */}
      <section className="beau-hero">
        <ParticleCanvas className="beau-hero-particles" />
        <div className="beau-hero-bg-text">FPT APTECH</div>
        <div className="container beau-hero-inner" data-reveal>
          <span className="beau-hero-brand" style={{ backgroundColor: '#f37021', color: '#ffffff', letterSpacing: '0.08em', padding: '8px 20px', borderRadius: '30px' }}>
            FPT APTECH ACCP AI 2026
          </span>
          <h1 className="beau-hero-title" style={{ marginTop: '16px', fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: '1.25', textWrap: 'balance' }}>
            CHƯƠNG TRÌNH LẬP TRÌNH VIÊN QUỐC TẾ 2 NĂM<br />AI ĐA KỸ NĂNG
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

          {/* Core highlights */}
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

      {/* Section 1: LỘ TRÌNH ĐÀO TẠO TỔNG QUAN (☀️ LIGHT WARM CREAM THEME) */}
      <section 
        className="beau-section" 
        style={{ 
          backgroundColor: '#F8FAFC', 
          color: '#0f172a',
          padding: '100px 0 110px 0' 
        }}
      >
        <div className="container" data-reveal>
          <div style={{ textAlign: 'center', marginBottom: '54px' }}>
            <span className="beau-section-eyebrow" style={{ color: '#f37021', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em' }}>
              HÀNH TRÌNH TỔNG QUAN
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 2.8rem)', fontWeight: 800, color: 'var(--secondary)', lineHeight: '1.25', marginTop: '10px', fontFamily: 'var(--font-sans)', letterSpacing: '-0.02em' }}>
              Lộ trình đào tạo tổng quan 2 năm
            </h2>
            <p style={{ color: '#64748b', maxWidth: '650px', margin: '14px auto 0', fontSize: '1.05rem', lineHeight: '1.7' }}>
              Một hành trình toàn diện được đúc kết qua những con số biết nói
            </p>
          </div>

          {/* 4 Stats Cards (Light White Cards) */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
            gap: '24px' 
          }}>
            <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '20px', padding: '32px 24px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', transition: 'all 0.3s ease' }}>
              <BookOpen size={34} style={{ color: '#f37021', marginBottom: '14px' }} />
              <h3 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--secondary)', margin: 0, lineHeight: 1 }}>26</h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', marginTop: '10px', margin: 0, fontWeight: 600 }}>Môn học chuẩn quốc tế</p>
            </div>

            <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '20px', padding: '32px 24px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', transition: 'all 0.3s ease' }}>
              <Clock size={34} style={{ color: '#f37021', marginBottom: '14px' }} />
              <h3 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--secondary)', margin: 0, lineHeight: 1 }}>04</h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', marginTop: '10px', margin: 0, fontWeight: 600 }}>Học kỳ chuyên sâu</p>
            </div>

            <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '20px', padding: '32px 24px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', transition: 'all 0.3s ease' }}>
              <Trophy size={34} style={{ color: '#f37021', marginBottom: '14px' }} />
              <h3 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--secondary)', margin: 0, lineHeight: 1 }}>04</h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', marginTop: '10px', margin: 0, fontWeight: 600 }}>Đồ án thực tế (eProject)</p>
            </div>

            <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '20px', padding: '32px 24px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', transition: 'all 0.3s ease' }}>
              <Briefcase size={34} style={{ color: '#f37021', marginBottom: '14px' }} />
              <h3 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--secondary)', margin: 0, lineHeight: 1 }}>01</h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', marginTop: '10px', margin: 0, fontWeight: 600 }}>Portfolio chuyên nghiệp</p>
            </div>
          </div>

          {/* 992 Giờ học chi tiết (Clean White Glass Banner) */}
          <div style={{ 
            marginTop: '36px', 
            background: '#ffffff', 
            border: '1px solid rgba(243, 112, 33, 0.25)', 
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
              <h4 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--secondary)', margin: '6px 0 0', fontFamily: 'var(--font-sans)' }}>992 Giờ học chuẩn quốc tế</h4>
            </div>
            <div style={{ display: 'flex', gap: '36px', flexWrap: 'wrap' }}>
              <div>
                <span style={{ color: '#64748b', fontSize: '0.88rem', display: 'block', fontWeight: 600 }}>Lý thuyết</span>
                <strong style={{ color: 'var(--secondary)', fontSize: '1.3rem', fontWeight: 800 }}>386 giờ</strong>
              </div>
              <div style={{ borderLeft: '1px solid rgba(0,0,0,0.08)', paddingLeft: '36px' }}>
                <span style={{ color: '#64748b', fontSize: '0.88rem', display: 'block', fontWeight: 600 }}>Thực hành</span>
                <strong style={{ color: 'var(--secondary)', fontSize: '1.3rem', fontWeight: 800 }}>446 giờ</strong>
              </div>
              <div style={{ borderLeft: '1px solid rgba(0,0,0,0.08)', paddingLeft: '36px' }}>
                <span style={{ color: '#64748b', fontSize: '0.88rem', display: 'block', fontWeight: 600 }}>Đồ án thực tế</span>
                <strong style={{ color: '#f37021', fontSize: '1.3rem', fontWeight: 800 }}>160 giờ</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: CHI TIẾT CHƯƠNG TRÌNH HỌC (🌙 DARK CYBER TECH THEME) */}
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
            padding: '40px 44px',
            boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)'
          }}>
            <div style={{ marginBottom: '24px' }}>
              <span style={{ fontSize: '0.85rem', color: '#f37021', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                {semesters[activeTab].num}
              </span>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff', margin: '6px 0 4px' }}>
                {semesters[activeTab].fullTitle}
              </h3>
              <h4 style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.7)', fontWeight: 500, margin: 0 }}>
                ({semesters[activeTab].subTitle})
              </h4>
            </div>

            <p style={{ color: 'rgba(255,255,255,0.88)', fontSize: '1.05rem', lineHeight: '1.75', marginBottom: '36px', paddingBottom: '24px', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
              {semesters[activeTab].desc}
            </p>

            {/* Flat 3-Column Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '36px' }}>
              {/* Core Stack */}
              <div>
                <h4 style={{ fontSize: '0.95rem', color: '#f37021', fontWeight: 800, margin: '0 0 16px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  Công nghệ lõi (Core Stack)
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {semesters[activeTab].coreStack.map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(255,255,255,0.95)', fontSize: '0.98rem', marginBottom: '12px' }}>
                      <Check size={16} style={{ color: '#f37021', flexShrink: 0 }} /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* AI & Support Tools */}
              <div>
                <h4 style={{ fontSize: '0.95rem', color: '#f37021', fontWeight: 800, margin: '0 0 16px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  Công cụ AI &amp; Hỗ trợ
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {semesters[activeTab].aiTools.map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(255,255,255,0.95)', fontSize: '0.98rem', marginBottom: '12px' }}>
                      <Check size={16} style={{ color: '#f37021', flexShrink: 0 }} /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Careers */}
              <div>
                <h4 style={{ fontSize: '0.95rem', color: '#f37021', fontWeight: 800, margin: '0 0 16px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  Cơ hội nghề nghiệp
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {semesters[activeTab].careers.map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(255,255,255,0.95)', fontSize: '0.98rem', marginBottom: '12px' }}>
                      <Check size={16} style={{ color: '#f37021', flexShrink: 0 }} /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: TẠI SAO HỌC LẬP TRÌNH NÊN CHỌN FPT APTECH? (☀️ LIGHT WARM CREAM THEME) */}
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
              Tại sao học lập trình nên chọn FPT Aptech?
            </h2>
            <p style={{ color: '#64748b', maxWidth: '850px', margin: '16px auto 0', fontSize: '1.05rem', lineHeight: '1.75' }}>
              FPT Aptech mang đến môi trường học tập chuẩn Quốc Tế với chương trình ACCP AI mới nhất. Chúng tôi cam kết giới thiệu việc làm và kết nối trực tiếp sinh viên với hệ sinh thái công nghệ FPT cùng hàng trăm doanh nghiệp công nghệ hàng đầu.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            {whyChooseUs.map((item, idx) => (
              <div 
                key={idx} 
                style={{ 
                  background: '#ffffff', 
                  border: '1px solid rgba(0, 0, 0, 0.06)', 
                  borderRadius: '20px', 
                  padding: '36px 30px',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.02)',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ marginBottom: '18px' }}>{item.icon}</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '12px', fontFamily: 'var(--font-sans)' }}>
                  {item.title}
                </h3>
                <p style={{ color: '#64748b', fontSize: '0.96rem', lineHeight: '1.7', margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Bottom CTA Section (🌙 DARK TECH THEME) */}
      <section className="beau-cta-section">
        <div className="beau-cta-bg-circle"></div>
        <div className="container beau-cta-inner" data-reveal>
          <h2 className="beau-cta-title">Sẵn sàng trở thành Lập trình viên AI Đa kỹ năng?</h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.1rem', maxWidth: '680px', margin: '14px auto 32px', lineHeight: '1.7' }}>
            Đăng ký nhận tư vấn lộ trình học cá nhân hóa và thông tin học bổng mới nhất từ FPT Aptech
          </p>
          <TechCTAButton text="Tư vấn ngay" href="https://zalo.me/fptaptech" />
        </div>
      </section>

      {/* Section 5: Form nhận thông tin học bổng & Google Sheet (☀️ LIGHT THEME) */}
      <ScholarshipFormSection 
        programName="FPT Aptech - Fullstack 2 Năm" 
        googleSheetScriptUrl="https://script.google.com/macros/s/AKfycbwfPoh5H-YB8CcPWw9GijIv44YjXtHbrwdLX7XCMWnhTmg5ocW-aGt3PnCIMiC_pvSKrw/exec"
      />

      <Footer />
    </div>
  );
}
