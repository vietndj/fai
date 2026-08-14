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
  Award,
  GraduationCap,
  Users,
  CheckCircle2,
  Compass
} from 'lucide-react';

export default function ShortCourses100200hPage() {
  const [activeSection, setActiveSection] = useState(0);
  const [activeCourseTab, setActiveCourseTab] = useState(0);

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
    { label: 'Lập trình Back end 1 năm', href: '/dao-tao/aptech/1-nam', active: false },
    { label: 'Lập trình Front end 6 tháng', href: '/dao-tao/aptech/6-thang', active: false },
    { label: 'Lập trình ngắn hạn 100-200h', href: '/dao-tao/aptech/100-200h', active: true },
  ];

  const courses = [
    {
      id: 'khoa-1',
      badge: 'KHOÁ 1 • PHÁT TRIỂN GIAO DIỆN VÀ TRỰC QUAN HOÁ',
      title: 'ReactJS & AI Smart UI: Frontend, BA, Tester với AI',
      durationHighlight: '100 Giờ',
      durationSub: 'Lộ trình Frontend & AI tinh gọn',
      note: 'Khoá học với mục đích hoàn thành kỹ năng Frontend với Reactjs và củng cố các kỹ năng BA, Tester cũng như tư duy logic lập trình hướng đối tượng với môn Java là một trong những lựa chọn hàng đầu của các doanh nghiệp CNTT',
      skillsOutput: [
        { role: 'BA', desc: 'Thu thập yêu cầu UI/UX.' },
        { role: 'Frontend', desc: 'ReactJS.' },
        { role: 'Backend', desc: 'Tư duy OOP Java & Kết nối API.' },
        { role: 'Tester', desc: 'Manual Test kịch bản giao diện.' },
        { role: 'DevOps', desc: 'Quản lý Git & Deploy Vercel.' },
      ],
      careerOutput: 'Có đủ khả năng làm việc ở vị trí Frontend React Developer, sở hữu tư duy lập trình cấu trúc Java vững vàng.',
      modules: [
        {
          stt: 1,
          subject: 'Nhập môn Phân tích Nghiệp vụ (BA)',
          isNew: true,
          duration: '20 Giờ',
          role: 'BA / PM',
          roleColor: '#38bdf8',
          content: 'Thu thập yêu cầu, viết User Story cho giao diện, sử dụng AI sinh bản vẽ phác thảo (Wireframe).'
        },
        {
          stt: 2,
          subject: 'Lập trình hướng đối tượng với Java (JP)',
          isNew: false,
          duration: '20 Giờ',
          role: 'Logic programming',
          roleColor: '#4ade80',
          content: 'Làm quen với tư duy lập trình OOP, cấu trúc dữ liệu, thuật toán cơ bản và xử lý logic trên Java.'
        },
        {
          stt: 3,
          subject: 'AI-driven Dynamic Website (DWD)',
          isNew: false,
          duration: '24 Giờ',
          role: 'Frontend Dev',
          roleColor: '#fb923c',
          content: 'Lập trình HTML5, CSS3, JavaScript tương tác, tối ưu hóa giao diện dựa trên công cụ sinh code AI.'
        },
        {
          stt: 4,
          subject: 'Building Intelligent React Interfaces (BIIR)',
          isNew: false,
          duration: '24 Giờ',
          role: 'Frontend Dev',
          roleColor: '#fb923c',
          content: 'Phát triển ứng dụng SPA ReactJS, tương tác kết nối Mock API và xây dựng Chatbot UI mượt mà.'
        },
        {
          stt: 5,
          subject: 'Manual Testing & Deployment',
          isNew: true,
          duration: '12 Giờ',
          role: 'QA / DevOps',
          roleColor: '#f472b6',
          content: 'Viết tài liệu Testcase giao diện, kiểm thử tính tương thích thiết bị, deploy nhanh lên Vercel/Netlify.'
        }
      ]
    },
    {
      id: 'khoa-2',
      badge: 'KHOÁ 2 • LẬP TRÌNH PHÍA SERVER (BACKEND) • YÊU CẦU ĐÃ HỌC KHÓA 1',
      title: 'AI Multi-skill Backend : Backend, Automation Test, DevOps với AI',
      durationHighlight: '100 Giờ',
      durationSub: 'Tổng chuỗi Khoá 1 + Khoá 2: 200 Giờ',
      note: 'Khoá học là bước tiếp nối hoàn hảo cho học viên đã học xong Khoá 1, giúp hoàn thiện mảnh ghép kỹ năng Backend toàn diện. Hoàn thiện bộ kỹ năng đầy đủ.',
      skillsOutput: [
        { role: 'BA', desc: 'Thiết kế DB ERD, Luồng dữ liệu.' },
        { role: 'Frontend', desc: 'Kết nối API từ Khoá 1.' },
        { role: 'Backend', desc: 'NodeJS & ExpressJS.' },
        { role: 'Tester', desc: 'Unit & API Automation Test.' },
        { role: 'DevOps', desc: 'Docker & Cloud Deployment.' },
      ],
      careerOutput: 'Có đủ khả năng làm việc ở vị trí NodeJS Backend Developer hoặc kỹ sư API vững vàng.',
      modules: [
        {
          stt: 1,
          subject: 'Managing Data with SQL & NoSQL (MDD)',
          isNew: false,
          duration: '28 Giờ',
          role: 'DB Designer',
          roleColor: '#c084fc',
          content: 'Thiết kế và chuẩn hóa hệ quản trị cơ sở dữ liệu quan hệ SQL Server và phi quan hệ MongoDB.'
        },
        {
          stt: 2,
          subject: 'Server-side Dev with NodeJS (SDN)',
          isNew: false,
          duration: '28 Giờ',
          role: 'Backend Dev',
          roleColor: '#4ade80',
          content: 'Xây dựng RESTful API chuyên nghiệp bằng ExpressJS, xử lý bất đồng bộ, xác thực và bảo mật.'
        },
        {
          stt: 3,
          subject: 'AI API Integration & Prompt Engineering',
          isNew: false,
          duration: '16 Giờ',
          role: 'AI Backend',
          roleColor: '#fb923c',
          content: 'Kết nối API OpenAI/Claude phía Server, thiết lập Prompt thông minh tiết kiệm token với System Role.'
        },
        {
          stt: 4,
          subject: 'Backend Automation Testing',
          isNew: true,
          duration: '14 Giờ',
          role: 'QA / Tester',
          roleColor: '#f87171',
          content: 'Viết Unit Test & Integration Test tự động cho API bằng Jest / Supertest nhằm kiểm soát chất lượng code.'
        },
        {
          stt: 5,
          subject: 'Containerization & DevOps Deploy',
          isNew: true,
          duration: '14 Giờ',
          role: 'DevOps Eng',
          roleColor: '#38bdf8',
          content: 'Đóng gói ứng dụng NodeJS & Database bằng Docker, thiết lập Docker Compose và deploy lên Cloud.'
        }
      ]
    },
    {
      id: 'khoa-3',
      badge: 'LỘ TRÌNH ĐÀO TẠO TÍCH HỢP CHUYÊN SÂU • 200 GIỜ',
      title: 'Web & AI Multi-skill Developer',
      durationHighlight: '200 Giờ',
      durationSub: 'Tích hợp trọn gói 200 Giờ (Chuỗi Khoá 1 + Khoá 2)',
      note: 'Lộ trình tích hợp toàn diện 200 giờ giúp học viên làm chủ trọn vẹn cả Frontend ReactJS, Backend NodeJS, phân tích nghiệp vụ BA, kiểm thử tự động Automation Test và triển khai DevOps với AI.',
      skillsOutput: [
        { role: 'BA', desc: 'Phân tích yêu cầu hệ thống & DB.' },
        { role: 'Frontend', desc: 'SPA ReactJS & AI Chatbot UI.' },
        { role: 'Backend', desc: 'Xây dựng API và Databases.' },
        { role: 'Tester', desc: 'Manual & API Automation Test.' },
        { role: 'DevOps', desc: 'Docker & Deploy Cloud.' },
      ],
      careerOutput: 'Lập trình viên Full-Stack Web & AI cùng với các skill BA, Tester, tự tin làm việc trong môi trường Agile/Scrum.',
      modules: [
        {
          stt: 1,
          subject: 'Nhập môn Phân tích Nghiệp vụ (BA)',
          isNew: true,
          duration: '20 Giờ',
          role: 'BA / PM',
          roleColor: '#38bdf8',
          content: 'Thu thập yêu cầu, viết User Story cho giao diện, sử dụng AI sinh bản vẽ phác thảo.'
        },
        {
          stt: 2,
          subject: 'Lập trình hướng đối tượng với Java (JP)',
          isNew: false,
          duration: '20 Giờ',
          role: 'Logic Core',
          roleColor: '#4ade80',
          content: 'Lập trình OOP, cấu trúc dữ liệu, thuật toán cơ bản và xử lý logic trên nền tảng Java.'
        },
        {
          stt: 3,
          subject: 'AI-driven Dynamic Website (DWD)',
          isNew: false,
          duration: '24 Giờ',
          role: 'Frontend Dev',
          roleColor: '#fb923c',
          content: 'Lập trình HTML5, CSS3, JavaScript động và tối ưu hóa UI từ công cụ sinh code AI.'
        },
        {
          stt: 4,
          subject: 'Building Intelligent React Interfaces (BIIR)',
          isNew: false,
          duration: '24 Giờ',
          role: 'Frontend Dev',
          roleColor: '#fb923c',
          content: 'Phát triển SPA ReactJS, kết nối API dữ liệu và xây dựng Chatbot UI mượt mà.'
        },
        {
          stt: 5,
          subject: 'Managing Data with SQL & NoSQL (MDD)',
          isNew: false,
          duration: '28 Giờ',
          role: 'DB Designer',
          roleColor: '#c084fc',
          content: 'Thiết kế hệ cơ sở dữ liệu quan hệ (SQL Server) và phi quan hệ (MongoDB) chuyên nghiệp.'
        },
        {
          stt: 6,
          subject: 'Server-side Dev with NodeJS (SDN)',
          isNew: false,
          duration: '28 Giờ',
          role: 'Backend Dev',
          roleColor: '#4ade80',
          content: 'Xây dựng RESTful API bằng ExpressJS, xác thực bảo mật và tối ưu hóa xử lý bất đồng bộ.'
        },
        {
          stt: 7,
          subject: 'AI API Integration & Prompting',
          isNew: false,
          duration: '16 Giờ',
          role: 'AI Backend',
          roleColor: '#fb923c',
          content: 'Kết nối OpenAI/Claude API, thiết lập Prompt thông minh tiết kiệm token với System Role.'
        },
        {
          stt: 8,
          subject: 'Backend Automation Testing',
          isNew: true,
          duration: '14 Giờ',
          role: 'QA / Tester',
          roleColor: '#f87171',
          content: 'Viết Unit Test & Integration Test tự động cho API bằng Jest / Supertest.'
        },
        {
          stt: 9,
          subject: 'Containerization & DevOps Deploy',
          isNew: true,
          duration: '14 Giờ',
          role: 'DevOps Eng',
          roleColor: '#38bdf8',
          content: 'Đóng gói ứng dụng NodeJS & Database bằng Docker, thiết lập Docker Compose.'
        },
        {
          stt: 10,
          subject: 'Manual Testing & Deployment',
          isNew: true,
          duration: '12 Giờ',
          role: 'QA / DevOps',
          roleColor: '#f472b6',
          content: 'Kiểm thử tương thích thiết bị, viết tài liệu Testcase và deploy lên Vercel/Netlify.'
        }
      ]
    }
  ];

  const currentCourse = courses[activeCourseTab];

  const whyChooseUs = [
    {
      icon: <Clock size={28} style={{ color: '#f37021' }} />,
      title: 'Tối ưu thời gian và chi phí',
      desc: 'Thời lượng tinh gọn 100 - 200 giờ, học nhanh – làm được việc ngay, tiết kiệm tối đa ngân sách và thời gian.'
    },
    {
      icon: <BrainCircuit size={28} style={{ color: '#f37021' }} />,
      title: 'Tích hợp AI trong toàn bộ quy trình',
      desc: 'Ứng dụng AI từ phân tích nghiệp vụ BA (Wireframe), sinh mã React, tích hợp OpenAI/Claude API đến Automation Testing.'
    },
    {
      icon: <Layers size={28} style={{ color: '#f37021' }} />,
      title: 'Đa kỹ năng Multi-skill (Full 5)',
      desc: 'Trang bị trọn vẹn 5 trụ cột năng lực được săn đón: BA, Frontend ReactJS, Backend NodeJS, Tester và DevOps Cloud.'
    },
    {
      icon: <FolderGit2 size={28} style={{ color: '#f37021' }} />,
      title: 'Học thực chiến qua sản phẩm thật',
      desc: '100% nội dung học gắn liền với đồ án thực tế, kiểm thử và deploy trực tiếp lên Vercel / Cloud để đưa vào Portfolio.'
    },
    {
      icon: <ShieldCheck size={28} style={{ color: '#f37021' }} />,
      title: 'Đón đầu xu hướng việc làm FPT',
      desc: 'Được hỗ trợ kết nối phỏng vấn tuyển dụng tại hệ sinh thái FPT và mạng lưới hơn 300+ đối tác công nghệ lớn.'
    },
    {
      icon: <Award size={28} style={{ color: '#f37021' }} />,
      title: 'Chứng chỉ chuyên ngành FPT Aptech',
      desc: 'Hoàn thành khóa học, học viên nhận chứng chỉ chuyên môn uy tín có giá trị tuyển dụng cao trên toàn quốc.'
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
        <div className="beau-hero-bg-text">SHORT COURSES</div>
        <div className="container beau-hero-inner" data-reveal>
          <span className="beau-hero-brand" style={{ backgroundColor: '#f37021', color: '#ffffff', letterSpacing: '0.08em', padding: '8px 20px', borderRadius: '30px' }}>
            FPT APTECH — SHORT COURSES (100 - 200 GIỜ)
          </span>
          <h1 className="beau-hero-title" style={{ marginTop: '16px', fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: '1.25', textWrap: 'balance' }}>
            BỘ KHÓA HỌC LẬP TRÌNH NGẮN HẠN (100 - 200 GIỜ)
          </h1>
          <div style={{ color: '#f37021', fontSize: '1.25rem', fontWeight: 800, marginTop: '8px', letterSpacing: '0.04em' }}>
            Học FULL STACK, BA, TESTER, DATA ANALYSIS với AI – cùng khoá học ngắn hạn tại FPT Aptech
          </div>

          <div style={{ maxWidth: '950px', marginTop: '20px', color: 'rgba(255, 255, 255, 0.88)', fontSize: '1.05rem', lineHeight: '1.8' }}>
            <p style={{ margin: 0 }}>
              Tối ưu thời gian và chi phí, đón đầu xu hướng việc làm cùng hệ sinh thái FPT. Chương trình đào tạo các kỹ năng cốt lõi sát với nhu cầu thực tế doanh nghiệp, tích hợp trí tuệ nhân tạo (AI) giúp bạn nhân bản năng suất lập trình và sẵn sàng nhận việc làm ngay sau khóa học.
            </p>
          </div>

          {/* Core Highlights Glassmorphism Banner */}
          <div style={{ 
            marginTop: '40px', 
            marginBottom: '40px',
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
              KIẾN TẠO LỘ TRÌNH CỦA RIÊNG BẠN
            </div>
            <p style={{ margin: 0, color: 'rgba(255, 255, 255, 0.95)', fontSize: '1.15rem', lineHeight: '1.8', fontWeight: 500 }}>
              Đi từ giao diện trực quan lên logic phức tạp.<br />
              <strong style={{ color: '#f37021' }}>Đầu ra: Lập trình viên Full-Stack Web &amp; AI</strong>
            </p>
          </div>

          {/* Banner Image */}
          <div className="beau-hero-banner" style={{ marginTop: '30px' }}>
            <Image
              src="/fai_banner_aptech_v2.png"
              alt="Bộ khóa học Lập trình ngắn hạn 100-200h FPT Aptech"
              width={1200}
              height={420}
              priority
              style={{ borderRadius: '16px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* Section 1: 3 KHÓA HỌC CHUYÊN ĐỀ (Interactive Selection Tabs & Detailed Tables) */}
      <section className="beau-section" style={{ paddingTop: '20px' }}>
        <div className="container" data-reveal>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <span className="beau-section-eyebrow" style={{ color: '#f37021' }}>DANH MỤC 3 KHÓA HỌC CHUYÊN ĐỀ</span>
            <h2 className="beau-section-title">Lựa chọn chương trình ngắn hạn phù hợp</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', maxWidth: '750px', margin: '12px auto 0', fontSize: '1rem' }}>
              Mỗi khóa học được thiết kế cô đọng, thực chiến cao độ từ 100 đến 200 giờ
            </p>
          </div>

          {/* Segmented Course Switcher Tabs */}
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
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
                gap: '14px' 
              }}
            >
              {courses.map((c, idx) => {
                const isActive = activeCourseTab === idx;
                return (
                  <button
                    key={c.id}
                    onClick={() => setActiveCourseTab(idx)}
                    style={{
                      padding: '16px 20px',
                      borderRadius: '16px',
                      border: isActive ? '1px solid #f37021' : '1px solid rgba(255, 255, 255, 0.12)',
                      background: isActive 
                        ? 'linear-gradient(135deg, #f37021 0%, #d85d0d 100%)' 
                        : 'rgba(13, 33, 55, 0.85)',
                      color: '#ffffff',
                      cursor: 'pointer',
                      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      textAlign: 'left',
                      boxShadow: isActive ? '0 10px 28px rgba(243, 112, 33, 0.45)' : '0 4px 15px rgba(0,0,0,0.25)',
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
                        padding: '5px 10px',
                        borderRadius: '10px',
                        flexShrink: 0
                      }}
                    >
                      {idx === 2 ? '200H' : '100H'}
                    </span>
                    <span 
                      style={{ 
                        fontSize: '0.94rem', 
                        fontWeight: isActive ? 800 : 600, 
                        lineHeight: '1.35',
                        color: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.9)'
                      }}
                    >
                      {c.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Course Viewport Layout */}
          <div style={{ marginBottom: '20px' }}>
            
            {/* Top Badge & Headline */}
            <div style={{ marginBottom: '28px' }}>
              <span 
                style={{ 
                  display: 'inline-block',
                  padding: '6px 16px', 
                  borderRadius: '30px', 
                  backgroundColor: '#f37021', 
                  color: '#ffffff', 
                  fontSize: '0.82rem', 
                  fontWeight: 900, 
                  letterSpacing: '0.08em', 
                  marginBottom: '12px',
                  textTransform: 'uppercase'
                }}
              >
                {currentCourse.badge}
              </span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 800, color: '#ffffff', margin: 0, lineHeight: 1.25 }}>
                {currentCourse.title}
              </h2>
            </div>

            {/* Main Content: Left Table & Right Sidebars */}
            <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
              
              {/* Left Column: Table of Modules */}
              <div style={{ flex: '1 1 680px', minWidth: '320px' }}>
                <div style={{
                  background: 'linear-gradient(135deg, rgba(13, 33, 55, 0.9) 0%, rgba(22, 43, 74, 0.95) 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.35)'
                }}>
                  
                  {/* Table Element */}
                  <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '640px' }}>
                      <thead>
                        <tr style={{ background: 'rgba(0, 0, 0, 0.3)', borderBottom: '1px solid rgba(255, 255, 255, 0.12)' }}>
                          <th style={{ padding: '16px 20px', color: '#f37021', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', width: '60px' }}>STT</th>
                          <th style={{ padding: '16px 20px', color: 'rgba(255,255,255,0.9)', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', width: '240px' }}>Môn học &amp; Mã môn</th>
                          <th style={{ padding: '16px 20px', color: 'rgba(255,255,255,0.9)', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', width: '110px' }}>Thời lượng</th>
                          <th style={{ padding: '16px 20px', color: 'rgba(255,255,255,0.9)', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', width: '150px' }}>Vai trò hướng tới</th>
                          <th style={{ padding: '16px 20px', color: 'rgba(255,255,255,0.9)', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase' }}>Nội dung &amp; Kỹ năng cốt lõi</th>
                        </tr>
                      </thead>
                      <tbody>
                        {currentCourse.modules.map((m, mIdx) => (
                          <tr key={mIdx} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.06)', transition: 'background 0.2s ease' }}>
                            <td style={{ padding: '16px 20px', color: 'rgba(255,255,255,0.6)', fontWeight: 700, fontSize: '0.95rem' }}>
                              {m.stt}
                            </td>
                            <td style={{ padding: '16px 20px' }}>
                              <div style={{ color: '#ffffff', fontWeight: 700, fontSize: '0.98rem', lineHeight: 1.4 }}>
                                {m.subject}
                              </div>
                              {m.isNew && (
                                <span style={{ display: 'inline-block', marginTop: '6px', fontSize: '0.7rem', fontWeight: 800, color: '#f37021', background: 'rgba(243, 112, 33, 0.2)', padding: '2px 8px', borderRadius: '6px', border: '1px solid rgba(243, 112, 33, 0.4)' }}>
                                  Mới
                                </span>
                              )}
                            </td>
                            <td style={{ padding: '16px 20px', color: '#ffffff', fontWeight: 800, fontSize: '0.95rem', whiteSpace: 'nowrap' }}>
                              {m.duration}
                            </td>
                            <td style={{ padding: '16px 20px' }}>
                              <span style={{ color: m.roleColor || '#f37021', fontWeight: 800, fontSize: '0.9rem' }}>
                                {m.role}
                              </span>
                            </td>
                            <td style={{ padding: '16px 20px', color: 'rgba(255,255,255,0.85)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                              {m.content}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Note block below table */}
                  <div style={{ padding: '20px 24px', background: 'rgba(0,0,0,0.2)', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                    <p style={{ margin: 0, color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', lineHeight: 1.65, fontStyle: 'italic' }}>
                      💡 {currentCourse.note}
                    </p>
                  </div>

                </div>
              </div>

              {/* Right Column: Output Summary Cards */}
              <div style={{ flex: '1 1 320px', maxWidth: '380px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                
                {/* Duration Card */}
                <div style={{
                  background: 'linear-gradient(135deg, rgba(243, 112, 33, 0.15) 0%, rgba(13, 33, 55, 0.95) 100%)',
                  border: '1px solid rgba(243, 112, 33, 0.4)',
                  borderRadius: '20px',
                  padding: '28px',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.3)'
                }}>
                  <span style={{ fontSize: '0.8rem', color: '#f37021', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    TỔNG THỜI LƯỢNG KHOÁ HỌC
                  </span>
                  <div style={{ fontSize: '2.8rem', fontWeight: 900, color: '#f37021', margin: '8px 0 4px', lineHeight: 1 }}>
                    {currentCourse.durationHighlight}
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem', margin: 0 }}>
                    {currentCourse.durationSub}
                  </p>
                </div>

                {/* Skills Output Card (Full 5) */}
                <div style={{
                  background: 'rgba(13, 33, 55, 0.85)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '20px',
                  padding: '28px',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.25)'
                }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', margin: '0 0 16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Compass size={20} style={{ color: '#f37021' }} />
                    Đầu ra kỹ năng (Full 5)
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {currentCourse.skillsOutput.map((sk, skIdx) => (
                      <li key={skIdx} style={{ color: 'rgba(255,255,255,0.88)', fontSize: '0.92rem', lineHeight: 1.5, display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                        <span style={{ color: '#f37021', fontWeight: 800 }}>• {sk.role}:</span>
                        <span>{sk.desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Career Output Card */}
                <div style={{
                  background: 'rgba(13, 33, 55, 0.85)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '20px',
                  padding: '28px',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.25)'
                }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', margin: '0 0 12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Briefcase size={20} style={{ color: '#f37021' }} />
                    Đầu ra nghề nghiệp
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.88)', fontSize: '0.95rem', lineHeight: 1.65, margin: 0 }}>
                    {currentCourse.careerOutput}
                  </p>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Section 2: TẠI SAO CHỌN KHÓA HỌC NGẮN HẠN TẠI FPT APTECH? (USP) */}
      <section className="beau-section">
        <div className="container" data-reveal>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="beau-section-eyebrow" style={{ color: '#f37021' }}>ĐẶC QUYỀN ĐÀO TẠO</span>
            <h2 className="beau-section-title">Tại sao nên chọn khóa học ngắn hạn tại FPT Aptech?</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', maxWidth: '850px', margin: '16px auto 0', fontSize: '1.05rem', lineHeight: '1.75' }}>
              FPT Aptech mang đến môi trường học tập chuẩn Quốc Tế với giáo trình luôn cập nhật. Chúng tôi cam kết kết nối trực tiếp sinh viên với hệ sinh thái công nghệ FPT cùng hàng trăm doanh nghiệp công nghệ hàng đầu.
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

      {/* Section 3: Bottom CTA Section */}
      <section className="beau-cta-section">
        <div className="beau-cta-bg-circle"></div>
        <div className="container beau-cta-inner" data-reveal>
          <h2 className="beau-cta-title">Sẵn sàng kiến tạo lộ trình ngắn hạn cho riêng bạn?</h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', marginBottom: '30px' }}>
            Đăng ký nhận lịch khai giảng và học bổng ưu đãi nhập học sớm từ FPT Aptech
          </p>
          <TechCTAButton text="Tư vấn ngay" href="https://zalo.me/fptaptech" />
        </div>
      </section>

      {/* Section 4: Form nhận thông tin học bổng & Google Sheet */}
      <ScholarshipFormSection 
        programName="FPT Aptech - Khóa Ngắn Hạn 100-200h" 
        googleSheetScriptUrl="https://script.google.com/macros/s/AKfycbwfPoh5H-YB8CcPWw9GijIv44YjXtHbrwdLX7XCMWnhTmg5ocW-aGt3PnCIMiC_pvSKrw/exec"
      />

      <Footer />
    </div>
  );
}
