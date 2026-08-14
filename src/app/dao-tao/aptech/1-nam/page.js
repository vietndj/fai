'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ParticleCanvas from '@/components/ParticleCanvas';
import ScholarshipFormSection from '@/components/ScholarshipFormSection';
import TechCTAButton from '@/components/TechCTAButton';
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
  FolderGit2,
  Server,
  Database,
  Cloud,
  Award,
  GraduationCap,
  FileCode2,
  MonitorCheck
} from 'lucide-react';

export default function Backend1NamPage() {
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

  const programTabs = [
    { label: 'Lập trình Fullstack 2 năm', href: '/dao-tao/aptech/2-nam', active: false },
    { label: 'Lập trình Back end 1 năm', href: '/dao-tao/aptech/1-nam', active: true },
    { label: 'Lập trình Front end 6 tháng', href: '/dao-tao/aptech/6-thang', active: false },
    { label: 'Lập trình ngắn hạn 100-200h', href: '/dao-tao/aptech/100-200h', active: false },
  ];

  const semesters = [
    {
      num: 'HỌC KỲ 01',
      shortTitle: 'Web Full-stack với React & PHP (Laravel)',
      fullTitle: 'Thiết kế và xây dựng ứng dụng web full-stack với React và PHP',
      subTitle: 'Nền tảng Thiết kế Website, Lập trình Web Full-stack, Database & Kiểm thử',
      desc: 'Học kỳ 1 sẽ trang bị cho sinh viên đầy đủ kỹ năng để tự tin thiết kế và phát triển website chuyên nghiệp. Sinh viên sẽ được học kỹ năng thiết kế website bằng công cụ Figma và lập trình web với PHP-Laravel Framework. Từ đó hiểu rõ cách thiết kế 1 website, phát triển website động chạy được trên các màn hình có kích thước khác nhau sử dụng HTML, CSS, JavaScript, jQuery, React kết hợp với PHP-Laravel framework. Ngoài ra, sinh viên sẽ nắm vững cách chuẩn hóa và lập trình Database cùng quy trình kiểm thử phần mềm.',
      subjects: [
        'Applications of AI in Programming',
        'Foundations of Programming with C',
        'Building Next-Level Dynamic Websites',
        'Responsive UI/UX Strategies',
        'GitHub Copilot Beginner to Pro – AI for Coding & Development (MOOC)',
        'React for Modern Web Development',
        'Managing Data with SQL Server',
        'Manual and Automation Software Testing with help of ChatGPT (MOOC)',
        'Modern PHP Applications with Laravel',
        'eProject – Laravel and PHP Application Development + Web Design for Responsive'
      ],
      coreStack: [
        'React.js',
        'PHP & Laravel Framework',
        'HTML5, CSS3, JavaScript ES6+',
        'jQuery & Responsive Web',
        'SQL Server Database',
        'Figma UI Design'
      ],
      aiTools: [
        'Applications of AI in Programming',
        'GitHub Copilot (AI Coding)',
        'ChatGPT in Manual & Automation Testing',
        'Cursor / Windsurf AI'
      ],
      careers: [
        'Lập trình viên Frontend/Backend (Laravel, React, PHP)',
        'Chuyên viên phát triển Website',
        'Lập trình viên CSDL SQL Server',
        'Tester / QA Specialist (AI-Assisted)'
      ]
    },
    {
      num: 'HỌC KỲ 02',
      shortTitle: 'Đa ứng dụng Desktop (JavaFX) & Web App (Python/NodeJS)',
      fullTitle: 'Xây dựng đa ứng dụng từ desktop app (JavaFX) đến web app (Python / NodeJS), tích hợp AI',
      subTitle: 'Lập trình Đa nền tảng, Ứng dụng Desktop JavaFX, C#, Python Django, Node.js & AI',
      desc: 'Chương trình học kỳ 2 sẽ đưa bạn vào thế giới lập trình đa nền tảng với JavaFX, giúp bạn xây dựng các ứng dụng desktop chuyên nghiệp. Sinh viên được học chuyên sâu về công nghệ JAVA SE và JavaFX để phát triển các ứng dụng có thể chạy được trên nhiều thiết bị khác nhau, lập trình hướng đối tượng bằng ngôn ngữ C#. Đi sâu vào lập trình hướng đối tượng (OOP), lập trình hàm, lập trình với database, Swing và JavaFX để tạo ứng dụng desktop.',
      subjects: [
        'Data Processing with XML and JSON',
        'Distributed Version Control (Git)',
        'Core Java Concepts and Techniques',
        'Search Algorithms in Artificial Intelligence with Java (MOOC)',
        'Building Rich Java Applications with JavaFX',
        'Proficient Programming with C#',
        'AI Programming in C# – Beginner to Expert (MOOC)',
        'Programming with Python',
        'Django Framework for Python',
        'Full stack web development and AI with Python (Django) (MOOC)',
        'Server-side Development with NodeJS',
        'Project – Java Desktop Application / Python / NodeJS + AI'
      ],
      coreStack: [
        'Core Java (Java SE) & OOP',
        'JavaFX & Java Swing',
        'C# Object-Oriented Programming',
        'Python & Django Framework',
        'Node.js Server-side Development',
        'XML & JSON Data Processing',
        'Git Version Control'
      ],
      aiTools: [
        'Search Algorithms in AI with Java (MOOC)',
        'AI Programming in C# (MOOC)',
        'Full stack AI with Python Django (MOOC)',
        'AI APIs & LLM Backend Integration'
      ],
      careers: [
        'Lập trình viên Java (Java Core, JavaFX)',
        'Lập trình viên C# / .NET Application',
        'Lập trình viên Python & Django Backend',
        'Lập trình viên Server-side Node.js',
        'Kỹ sư phần mềm ứng dụng AI'
      ]
    }
  ];

  const targetCareers = [
    {
      title: 'Lập trình viên Frontend/Backend',
      desc: 'Phát triển ứng dụng web toàn diện với Laravel, React, PHP và C#.',
      icon: <FileCode2 size={24} style={{ color: '#f37021' }} />
    },
    {
      title: 'Chuyên viên lập trình website',
      desc: 'Thiết kế, xây dựng và vận hành các website động chuẩn SEO & Responsive.',
      icon: <Globe size={24} style={{ color: '#f37021' }} />
    },
    {
      title: 'Lập trình viên CSDL SQL Server',
      desc: 'Thiết kế, chuẩn hóa và tối ưu hóa hệ thống cơ sở dữ liệu doanh nghiệp.',
      icon: <Database size={24} style={{ color: '#f37021' }} />
    },
    {
      title: 'Lập trình viên Java (Java Core)',
      desc: 'Phát triển ứng dụng Desktop và hệ thống hướng đối tượng với Java SE & JavaFX.',
      icon: <Server size={24} style={{ color: '#f37021' }} />
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
      desc: 'Đón đầu công nghệ tương lai với AI Programming, GitHub Copilot, ChatGPT Testing và thuật toán tìm kiếm AI trong Java.'
    },
    {
      icon: <Zap size={28} style={{ color: '#f37021' }} />,
      title: 'Làm chủ công cụ AI & Vibe Coding mới nhất',
      desc: 'Ứng dụng thành thạo AI vào quy trình phân tích, viết code, kiểm thử tự động và triển khai sản phẩm thực tế.'
    },
    {
      icon: <Globe size={28} style={{ color: '#f37021' }} />,
      title: 'Hệ sinh thái học tập 24/7',
      desc: 'Đặc quyền truy cập các nền tảng học tập dành riêng cho sinh viên FPT: Onlinevarsity, Aptech ProConnect, Coursera, Udemy và kết nối trực tiếp với cộng đồng Dev toàn cầu.'
    },
    {
      icon: <Wrench size={28} style={{ color: '#f37021' }} />,
      title: 'Đào tạo đa kỹ năng thực chiến',
      desc: 'Trang bị trọn bộ kỹ năng từ UI/UX Figma, Frontend React, Backend Laravel/NodeJS/Python, Desktop JavaFX/C# đến Database SQL Server.'
    },
    {
      icon: <FolderGit2 size={28} style={{ color: '#f37021' }} />,
      title: 'Học qua đồ án thực tế (eProject)',
      desc: 'Thực hành liên tục qua các đồ án cuối mỗi học kỳ: Laravel Web App và Java Desktop/Python/NodeJS AI để hoàn thiện Portfolio.'
    }
  ];

  return (
    <div className={`beau-subpage-container theme-aptech active-sec-${activeSection}`}>
      <Header />

      {/* Program Switcher Bar */}
      <div style={{ background: '#0a192f', borderBottom: '1px solid rgba(243, 112, 33, 0.2)', paddingTop: '100px', paddingBottom: '16px' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', overflowX: 'auto', paddingBottom: '4px' }}>
            <span style={{ fontSize: '0.82rem', fontWeight: 800, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', marginRight: '8px', flexShrink: 0 }}>
              Chương trình:
            </span>
            {programTabs.map((tab, idx) => (
              <Link
                key={idx}
                href={tab.href}
                style={{
                  padding: '8px 18px',
                  borderRadius: '30px',
                  fontSize: '0.88rem',
                  fontWeight: tab.active ? 800 : 600,
                  whiteSpace: 'nowrap',
                  textDecoration: 'none',
                  transition: 'all 0.25s ease',
                  background: tab.active ? '#f37021' : 'rgba(255,255,255,0.06)',
                  color: tab.active ? '#ffffff' : 'rgba(255,255,255,0.75)',
                  border: tab.active ? '1px solid #f37021' : '1px solid rgba(255,255,255,0.1)'
                }}
              >
                {tab.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Section 0: Hero Section */}
      <section className="beau-hero" style={{ paddingBottom: '60px', paddingTop: '40px' }}>
        <ParticleCanvas className="beau-hero-particles" />
        <div className="beau-hero-bg-text">BACKEND DEV</div>
        <div className="container beau-hero-inner" data-reveal>
          <span className="beau-hero-brand" style={{ backgroundColor: '#f37021', color: '#ffffff', letterSpacing: '0.08em', padding: '8px 20px', borderRadius: '30px' }}>
            FPT APTECH — BACKEND 1 NĂM TÍCH HỢP AI
          </span>
          <h1 className="beau-hero-title" style={{ marginTop: '16px', fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: '1.25', textWrap: 'balance' }}>
            CHƯƠNG TRÌNH ĐÀO TẠO LẬP TRÌNH BACKEND 1 NĂM<br />TÍCH HỢP TRÍ TUỆ NHÂN TẠO (AI)
          </h1>
          <div style={{ color: '#f37021', fontSize: '1.25rem', fontWeight: 800, marginTop: '8px', letterSpacing: '0.04em' }}>
            Chương trình đào tạo Lập trình Backend tích hợp AI chuẩn quốc tế
          </div>

          <div style={{ maxWidth: '950px', marginTop: '24px', color: 'rgba(255, 255, 255, 0.88)', fontSize: '1.05rem', lineHeight: '1.8' }}>
            <p style={{ marginBottom: '16px' }}>
              Khóa học Lập trình Backend tích hợp AI tại FPT Aptech là cơ hội để bạn trở thành một Lập Trình Viên Website chuyên nghiệp. Trong vòng 1 năm học tập trung (bao gồm 2 học kỳ), bạn sẽ được trang bị kiến thức từ thiết kế giao diện bắt mắt (Frontend) đến xây dựng và vận hành website (Backend) ứng dụng các công nghệ, kỹ thuật lập trình sát thực tế. Đặc biệt, bạn sẽ được xây dựng sản phẩm thực thông qua việc làm đồ án ở cuối mỗi học kỳ.
            </p>
            <p>
              Sinh viên được học chuyên sâu về công nghệ JAVA SE và JavaFX để phát triển các ứng dụng có thể chạy được trên nhiều thiết bị khác nhau, lập trình hướng đối tượng bằng ngôn ngữ C#. Ngoài ra, chương trình đào tạo lập trình Backend tại FPT Aptech giúp sinh viên học sâu về lập trình hướng đối tượng (OOP), lập trình hàm, lập trình với cơ sở dữ liệu (Database), Swing và JavaFX để tạo ra các ứng dụng Desktop.
            </p>
          </div>

          {/* Core Highlights Glassmorphism Banner */}
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
            <p style={{ margin: 0, color: 'rgba(255, 255, 255, 0.95)', fontSize: '1.12rem', lineHeight: '1.8', fontWeight: 400 }}>
              Đào tạo toàn diện và thực chiến trong 1 năm: Làm chủ trọn vẹn từ thiết kế giao diện Website (Figma, React) đến lập trình Server-side đa nền tảng (PHP Laravel, Python Django, Node.js), ứng dụng Desktop (JavaFX, Swing, C#) và ứng dụng công nghệ AI tạo sinh (Copilot, ChatGPT) vào tối ưu năng suất làm việc.
            </p>
          </div>

          {/* Banner Image */}
          <div className="beau-hero-banner" style={{ marginTop: '40px' }}>
            <Image
              src="/fai_banner_aptech_v2.png"
              alt="Chương trình Lập trình viên Backend 1 năm FPT Aptech"
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
              Một hành trình cô đọng, thực chiến trong vòng 1 năm tại FPT Aptech
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', 
            gap: '20px' 
          }}>
            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(243, 112, 33, 0.2)', borderRadius: '16px', padding: '24px', textAlign: 'center' }}>
              <BookOpen size={32} style={{ color: '#f37021', marginBottom: '12px' }} />
              <h3 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>22</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginTop: '6px', margin: 0 }}>Môn học chuẩn quốc tế</p>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(243, 112, 33, 0.2)', borderRadius: '16px', padding: '24px', textAlign: 'center' }}>
              <Clock size={32} style={{ color: '#f37021', marginBottom: '12px' }} />
              <h3 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>02</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginTop: '6px', margin: 0 }}>Học kỳ chuyên sâu</p>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(243, 112, 33, 0.2)', borderRadius: '16px', padding: '24px', textAlign: 'center' }}>
              <Trophy size={32} style={{ color: '#f37021', marginBottom: '12px' }} />
              <h3 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>02</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginTop: '6px', margin: 0 }}>Đồ án thực tế (eProject)</p>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(243, 112, 33, 0.2)', borderRadius: '16px', padding: '24px', textAlign: 'center' }}>
              <Briefcase size={32} style={{ color: '#f37021', marginBottom: '12px' }} />
              <h3 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>1</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginTop: '6px', margin: 0 }}>Portfolio chuyên nghiệp</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: NỘI DUNG ĐÀO TẠO (Interactive Tabs) */}
      <section className="beau-section">
        <div className="container" data-reveal>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="beau-section-eyebrow" style={{ color: '#f37021' }}>NỘI DUNG ĐÀO TẠO</span>
            <h2 className="beau-section-title">Chi tiết 2 học kỳ</h2>
          </div>

          {/* Segmented Semester Tabs */}
          <div 
            style={{ 
              position: 'sticky', 
              top: '80px', 
              zIndex: 90, 
              padding: '12px 0',
              marginBottom: '36px',
              maxWidth: '900px',
              margin: '0 auto 36px'
            }}
          >
            <div 
              style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(2, 1fr)', 
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

            {/* List of Subjects */}
            <div style={{ marginBottom: '36px', paddingBottom: '28px', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <h4 style={{ fontSize: '1rem', color: '#f37021', fontWeight: 800, margin: '0 0 20px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                Danh sách các môn học chi tiết:
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '14px' }}>
                {semesters[activeTab].subjects.map((sub, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', background: 'rgba(255,255,255,0.03)', padding: '12px 16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <Check size={18} style={{ color: '#f37021', flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ color: '#ffffff', fontSize: '0.94rem', fontWeight: 500 }}>{sub}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Flat 3-Column Grid: Stacks, AI Tools, Careers */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '36px' }}>
              {/* Core Stack */}
              <div>
                <h4 style={{ fontSize: '0.95rem', color: '#f37021', fontWeight: 800, margin: '0 0 16px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  Công nghệ cốt lõi
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
                  Ứng dụng AI &amp; Hỗ trợ
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
                  Cơ hội việc làm sau kỳ
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

      {/* Section 3: CHỨNG CHỈ QUỐC TẾ DISM */}
      <section className="beau-section" style={{ paddingTop: '20px' }}>
        <div className="container" data-reveal>
          <div style={{
            background: 'linear-gradient(135deg, rgba(243, 112, 33, 0.12) 0%, rgba(13, 33, 55, 0.9) 60%, rgba(22, 43, 74, 0.95) 100%)',
            border: '1px solid rgba(243, 112, 33, 0.35)',
            borderRadius: '24px',
            padding: '48px 50px',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.35)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '40px',
            flexWrap: 'wrap'
          }}>
            <div style={{ flex: '1 1 500px' }}>
              <span style={{ fontSize: '0.85rem', color: '#f37021', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                BẰNG CẤP &amp; CHỨNG CHỈ QUỐC TẾ
              </span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', fontWeight: 800, color: '#ffffff', margin: '10px 0 16px', lineHeight: 1.25 }}>
                Chứng chỉ khi hoàn thành khóa học Lập trình Backend
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', lineHeight: '1.75', margin: 0 }}>
                Sau khi hoàn thành khóa học Lập trình Backend tại FPT Aptech, bạn sẽ có trong tay chứng chỉ <strong>DISM: Diploma in Information System Management</strong> do <strong>Tập đoàn Aptech Ấn Độ</strong> cấp có giá trị toàn cầu.
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div style={{ 
                background: 'rgba(243, 112, 33, 0.15)', 
                border: '2px solid #f37021', 
                borderRadius: '20px', 
                padding: '24px 32px', 
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(243, 112, 33, 0.25)'
              }}>
                <Award size={48} style={{ color: '#f37021', marginBottom: '8px' }} />
                <h4 style={{ color: '#ffffff', fontSize: '1.4rem', fontWeight: 900, margin: 0 }}>DISM</h4>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.82rem', margin: '4px 0 0', textTransform: 'uppercase' }}>Giá trị toàn cầu</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: CÁC CÔNG VIỆC CÓ THỂ ĐẢM NHẬN */}
      <section className="beau-section">
        <div className="container" data-reveal>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="beau-section-eyebrow" style={{ color: '#f37021' }}>CƠ HỘI NGHỀ NGHIỆP</span>
            <h2 className="beau-section-title">Các công việc có thể đảm nhận sau khóa học</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', maxWidth: '750px', margin: '16px auto 0', fontSize: '1.05rem', lineHeight: '1.75' }}>
              Tốt nghiệp khóa học Lập trình Backend 1 năm, học viên sẵn sàng ứng tuyển vào các vị trí công việc đa dạng tại các doanh nghiệp phần mềm
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {targetCareers.map((car, idx) => (
              <div 
                key={idx} 
                style={{ 
                  background: 'rgba(255, 255, 255, 0.03)', 
                  border: '1px solid rgba(243, 112, 33, 0.2)', 
                  borderRadius: '20px', 
                  padding: '30px',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ marginBottom: '16px' }}>{car.icon}</div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff', marginBottom: '8px' }}>
                  {car.title}
                </h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.94rem', lineHeight: '1.6', margin: 0 }}>
                  {car.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: TẠI SAO HỌC BACKEND NÊN CHỌN FPT APTECH? (USP) */}
      <section className="beau-section">
        <div className="container" data-reveal>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="beau-section-eyebrow" style={{ color: '#f37021' }}>ĐẶC QUYỀN ĐÀO TẠO</span>
            <h2 className="beau-section-title">Tại sao học lập trình nên chọn FPT Aptech?</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', maxWidth: '850px', margin: '16px auto 0', fontSize: '1.05rem', lineHeight: '1.75' }}>
              FPT Aptech mang đến môi trường học tập chuẩn Quốc Tế với giáo trình luôn cập nhật. Chúng tôi cam kết giới thiệu việc làm và kết nối trực tiếp sinh viên với hệ sinh thái công nghệ FPT cùng hàng trăm doanh nghiệp công nghệ hàng đầu.
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

      {/* Section 6: Bottom CTA Section */}
      <section className="beau-cta-section">
        <div className="beau-cta-bg-circle"></div>
        <div className="container beau-cta-inner" data-reveal>
          <h2 className="beau-cta-title">Sẵn sàng trở thành Lập trình viên Backend chuyên nghiệp?</h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', marginBottom: '30px' }}>
            Đăng ký nhận tư vấn lộ trình học 1 năm và thông tin học bổng mới nhất từ FPT Aptech
          </p>
          <TechCTAButton text="Tư vấn ngay" href="https://zalo.me/fptaptech" />
        </div>
      </section>

      {/* Section 7: Form nhận thông tin học bổng & Google Sheet */}
      <ScholarshipFormSection 
        programName="FPT Aptech - Backend 1 Năm" 
        googleSheetScriptUrl="https://script.google.com/macros/s/AKfycbwfPoh5H-YB8CcPWw9GijIv44YjXtHbrwdLX7XCMWnhTmg5ocW-aGt3PnCIMiC_pvSKrw/exec"
      />

      <Footer />
    </div>
  );
}
