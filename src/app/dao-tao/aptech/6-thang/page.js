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
  Layout,
  Palette,
  MonitorSmartphone,
  Award,
  GraduationCap,
  FileCode2,
  CheckCircle2
} from 'lucide-react';

export default function Frontend6ThangPage() {
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

  const programTabs = [
    { label: 'Lập trình Fullstack 2 năm', href: '/dao-tao/aptech/2-nam', active: false },
    { label: 'Lập trình Back end 1 năm', href: '/dao-tao/aptech/1-nam', active: false },
    { label: 'Lập trình Front end 6 tháng', href: '/dao-tao/aptech/6-thang', active: true },
    { label: 'Lập trình ngắn hạn 100-200h', href: '/dao-tao/aptech/100-200h', active: false },
  ];

  const subjects = [
    {
      num: 'MÔN 01',
      title: 'Applications of AI in Programming',
      desc: 'Sử dụng các công cụ AI để gỡ lỗi mã của bạn và giải quyết những thách thức mới, giúp bạn phát triển sự hiểu biết toàn diện về vai trò của AI trong quá trình sáng tạo lập trình.',
      tag: 'AI Fundamentals'
    },
    {
      num: 'MÔN 02',
      title: 'Foundations of Programming with C',
      desc: 'Giải quyết các vấn đề lập trình căn bản bằng sơ đồ luồng (flowchart) và mã giả (pseudocode), xây dựng tư duy thuật toán chặt chẽ.',
      tag: 'Logic & Algorithm'
    },
    {
      num: 'MÔN 03',
      title: 'Building Next-Level Dynamic Websites',
      desc: 'Sử dụng HTML5 / CSS3 / JavaScript để phát triển các trang web và ứng dụng tương tác đa nền tảng, mượt mà và sống động.',
      tag: 'Core Web Tech'
    },
    {
      num: 'MÔN 04',
      title: 'Responsive UI/UX Strategies',
      desc: 'Tìm hiểu các nguyên tắc cơ bản của thiết kế UX/UI web hiệu quả, thiết kế giao diện tối ưu trên mọi màn hình thiết bị.',
      tag: 'UI/UX & Figma'
    },
    {
      num: 'MÔN 05',
      title: 'GitHub Copilot Beginner to Pro – AI for Coding & Development (MOOC)',
      desc: 'Sử dụng GitHub Copilot AI để tự động tạo mã, viết kiểm thử đơn vị (unit test) và tối ưu hóa hiệu suất lập trình.',
      tag: 'AI Assisted Coding'
    },
    {
      num: 'MÔN 06',
      title: 'React for Modern Web Development',
      desc: 'Thiết kế và phát triển các trang web động, linh hoạt và đáp ứng nhanh với thư viện ReactJS hiện đại nhất.',
      tag: 'ReactJS Modern'
    },
    {
      num: 'MÔN 07',
      title: 'Managing Data with SQL Server',
      desc: 'Chuẩn hóa dữ liệu thô thành các bảng cơ sở dữ liệu được tổ chức tốt trong SQL Server và thực hiện các thao tác truy vấn nâng cao.',
      tag: 'Database Architecture'
    },
    {
      num: 'MÔN 08',
      title: 'Manual and Automation Software Testing with help of ChatGPT (MOOC)',
      desc: 'Khám phá cách Kỹ sư QA và Kiểm thử viên phần mềm có thể sử dụng Trí tuệ nhân tạo (GenAI/ChatGPT) để kiểm thử phần mềm thủ công và tự động.',
      tag: 'AI QA & Testing'
    },
    {
      num: 'MÔN 09',
      title: 'Modern PHP Applications with Laravel',
      desc: 'Học cách làm việc với Laravel Framework để xây dựng và kết nối các ứng dụng Web động dựa trên ngôn ngữ PHP.',
      tag: 'Backend Integration'
    },
    {
      num: 'MÔN 10',
      title: 'eProject – Laravel & PHP Application Development + Web Design for Responsive',
      desc: 'Phát triển một ứng dụng web phản hồi thực tế (Responsive Web App) hoàn chỉnh dựa trên nghiên cứu điển hình thực tiễn sử dụng PHP và công nghệ front-end.',
      tag: 'Capstone Project'
    }
  ];

  const targetCareers = [
    {
      title: 'Phát triển dự án Web & Frontend App',
      desc: 'Tham gia phát triển các dự án về Web, xây dựng các chức năng front-end của Website, Web application chuyên nghiệp.'
    },
    {
      title: 'Triển khai giao diện HTML/CSS/JS',
      desc: 'Triển khai giao diện HTML, CSS, JavaScript theo yêu cầu của khách hàng trên hệ thống website xây dựng sẵn.'
    },
    {
      title: 'Phối hợp phát triển liên chức năng',
      desc: 'Phối hợp nhịp nhàng với các Back-end developers và Web designers để cải thiện tối đa tính khả dụng và hiệu năng.'
    },
    {
      title: 'Đảm bảo tiêu chuẩn đồ họa & Brand',
      desc: 'Đảm bảo tiêu chuẩn đồ họa chất lượng cao, tính nhất quán về nhận diện thương hiệu và trải nghiệm thị giác.'
    },
    {
      title: 'Tối ưu trải nghiệm người dùng',
      desc: 'Thu thập ý kiến phản hồi và xây dựng các hướng giải quyết tối ưu cho người sử dụng và khách hàng.'
    },
    {
      title: 'Nghiên cứu & Ứng dụng công nghệ mới',
      desc: 'Nghiên cứu, tìm hiểu các công nghệ về HTML/CSS, Javascript và AI mới nhất để áp dụng cải tiến sản phẩm liên tục.'
    }
  ];

  const whyChooseUs = [
    {
      icon: <Clock size={28} style={{ color: '#f37021' }} />,
      title: 'Tối ưu thời gian – Đi làm sau 6 tháng',
      desc: 'Lộ trình tinh gọn, tập trung 70% thời lượng vào thực hành dự án thật, giúp sinh viên tự tin làm được việc ngay.'
    },
    {
      icon: <BrainCircuit size={28} style={{ color: '#f37021' }} />,
      title: 'Tích hợp AI & GitHub Copilot sâu rộng',
      desc: 'Thành thạo ứng dụng AI (GitHub Copilot, ChatGPT) vào gỡ lỗi mã, viết unit test và tự động hóa kiểm thử phần mềm.'
    },
    {
      icon: <Layout size={28} style={{ color: '#f37021' }} />,
      title: 'Full-stack Web từ Figma đến Laravel',
      desc: 'Học từ thiết kế UI/UX Figma, Frontend React đến kết nối CSDL SQL Server và Backend PHP-Laravel Framework.'
    },
    {
      icon: <FolderGit2 size={28} style={{ color: '#f37021' }} />,
      title: 'Hoàn thành Đồ án eProject thực chiến',
      desc: 'Trực tiếp xây dựng 1 dự án Web hoàn chỉnh từ A đến Z, có khả năng phản hồi responsive trên mọi kích thước màn hình.'
    },
    {
      icon: <ShieldCheck size={28} style={{ color: '#f37021' }} />,
      title: 'Cam kết hỗ trợ việc làm hệ sinh thái FPT',
      desc: 'Được hỗ trợ kết nối phỏng vấn tuyển dụng tại các công ty công nghệ thuộc tập đoàn FPT và mạng lưới đối tác lớn.'
    },
    {
      icon: <Globe size={28} style={{ color: '#f37021' }} />,
      title: 'Lộ trình liên thông quốc tế linh hoạt',
      desc: 'Sở hữu chứng chỉ CPISM quốc tế và có thể học tiếp 1,5 năm để nhận bằng ADSE danh giá của Aptech Ấn Độ.'
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
        <div className="beau-hero-bg-text">FRONTEND DEV</div>
        <div className="container beau-hero-inner" data-reveal>
          <span className="beau-hero-brand" style={{ backgroundColor: '#f37021', color: '#ffffff', letterSpacing: '0.08em', padding: '8px 20px', borderRadius: '30px' }}>
            FPT APTECH — FRONTEND 6 THÁNG TÍCH HỢP AI
          </span>
          <h1 className="beau-hero-title" style={{ marginTop: '16px', fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: '1.25', textWrap: 'balance' }}>
            CHƯƠNG TRÌNH ĐÀO TẠO LẬP TRÌNH FRONTEND 6 THÁNG<br />TÍCH HỢP TRÍ TUỆ NHÂN TẠO (AI)
          </h1>
          <div style={{ color: '#f37021', fontSize: '1.25rem', fontWeight: 800, marginTop: '8px', letterSpacing: '0.04em' }}>
            Chương trình đào tạo Lập trình Frontend tích hợp AI chuẩn quốc tế
          </div>

          <div style={{ maxWidth: '950px', marginTop: '24px', color: 'rgba(255, 255, 255, 0.88)', fontSize: '1.05rem', lineHeight: '1.8' }}>
            <p style={{ marginBottom: '16px' }}>
              Bạn muốn biến những ý tưởng sáng tạo thành những trang web đẹp mắt và thu hút? Chương trình đào tạo Lập trình Frontend tích hợp AI của FPT Aptech sẽ giúp bạn tiếp cận những công nghệ mới nhất. Bằng cách sử dụng công nghệ HTML, CSS, JavaScript cùng một số framework hiện đại như React, Next.js, bạn hoàn toàn có thể xây dựng các giao diện website ấn tượng và thân thiện với người dùng. Với 70% thời lượng học là thực hành trên các dự án thực tế cùng sự hỗ trợ tận tình từ đội ngũ giảng viên giàu kinh nghiệm, bạn sẽ tự tin trở thành một Frontend Developer chuyên nghiệp và nắm bắt nhiều cơ hội nghề nghiệp trong lĩnh vực công nghệ thông tin.
            </p>
            <p>
              Trong khóa đào tạo lập trình Frontend, sinh viên sẽ được học kỹ năng thiết kế website bằng công cụ Figma và lập trình web với PHP-Laravel Framework. Từ đó hiểu rõ cách thiết kế 1 website, phát triển website động chạy được trên các màn hình có kích thước khác nhau sử dụng HTML, CSS, JavaScript, jQuery, React kết hợp với PHP-Laravel framework. Ngoài ra, người học còn nắm vững cách chuẩn hóa và lập trình Database cùng quy trình kiểm thử phần mềm.
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
              Thời gian đào tạo tinh gọn 6 tháng (01 học kỳ) với 70% thời lượng thực hành thực chiến trên đồ án thật. Nắm vững trọn bộ từ thiết kế UI/UX Figma, lập trình giao diện hiện đại (HTML5, CSS3, JavaScript ES6+, React) đến kết nối Backend PHP-Laravel và ứng dụng AI (GitHub Copilot, ChatGPT) vào tối ưu tốc độ phát triển.
            </p>
          </div>

          {/* Banner Image */}
          <div className="beau-hero-banner" style={{ marginTop: '40px' }}>
            <Image
              src="/fai_banner_aptech_v2.png"
              alt="Chương trình Lập trình viên Frontend 6 tháng FPT Aptech"
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
              Một hành trình tinh gọn, tập trung cao độ trong vòng 6 tháng tại FPT Aptech
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', 
            gap: '20px' 
          }}>
            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(243, 112, 33, 0.2)', borderRadius: '16px', padding: '24px', textAlign: 'center' }}>
              <BookOpen size={32} style={{ color: '#f37021', marginBottom: '12px' }} />
              <h3 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>10</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginTop: '6px', margin: 0 }}>Môn học chuẩn quốc tế</p>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(243, 112, 33, 0.2)', borderRadius: '16px', padding: '24px', textAlign: 'center' }}>
              <Clock size={32} style={{ color: '#f37021', marginBottom: '12px' }} />
              <h3 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>01</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginTop: '6px', margin: 0 }}>Học kỳ tập trung (6 tháng)</p>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(243, 112, 33, 0.2)', borderRadius: '16px', padding: '24px', textAlign: 'center' }}>
              <Trophy size={32} style={{ color: '#f37021', marginBottom: '12px' }} />
              <h3 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>01</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginTop: '6px', margin: 0 }}>Đồ án thực tế (eProject)</p>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(243, 112, 33, 0.2)', borderRadius: '16px', padding: '24px', textAlign: 'center' }}>
              <Briefcase size={32} style={{ color: '#f37021', marginBottom: '12px' }} />
              <h3 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>1</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginTop: '6px', margin: 0 }}>Portfolio Web chuyên nghiệp</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: NỘI DUNG ĐÀO TẠO (Chi tiết các môn học) */}
      <section className="beau-section">
        <div className="container" data-reveal>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="beau-section-eyebrow" style={{ color: '#f37021' }}>NỘI DUNG ĐÀO TẠO</span>
            <h2 className="beau-section-title">Danh sách các môn học (10 Môn chuẩn quốc tế)</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', maxWidth: '700px', margin: '12px auto 0', fontSize: '1rem' }}>
              Chương trình đào tạo toàn diện trang bị từ tư duy thiết kế UI/UX, lập trình Web Front-end, kiểm thử AI đến kết nối CSDL và Backend
            </p>
          </div>

          <div style={{ 
            background: 'linear-gradient(135deg, rgba(13, 33, 55, 0.88) 0%, rgba(22, 43, 74, 0.92) 100%)', 
            border: '1px solid rgba(243, 112, 33, 0.3)', 
            borderRadius: '24px', 
            padding: '40px 44px',
            boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)'
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
              {subjects.map((sub, idx) => (
                <div 
                  key={idx} 
                  style={{ 
                    background: 'rgba(255, 255, 255, 0.03)', 
                    border: '1px solid rgba(255, 255, 255, 0.08)', 
                    borderRadius: '16px', 
                    padding: '24px',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                      <span style={{ fontSize: '0.78rem', fontWeight: 900, color: '#f37021', background: 'rgba(243, 112, 33, 0.15)', padding: '4px 10px', borderRadius: '8px' }}>
                        {sub.num}
                      </span>
                      <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase' }}>
                        {sub.tag}
                      </span>
                    </div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff', marginBottom: '10px', lineHeight: 1.4 }}>
                      {sub.title}
                    </h3>
                    <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.94rem', lineHeight: '1.65', margin: 0 }}>
                      {sub.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: CHỨNG CHỈ QUỐC TẾ (CPISM & ADSE) */}
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
                Chứng chỉ sau khi hoàn thành khóa học Lập trình Frontend
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <CheckCircle2 size={22} style={{ color: '#f37021', flexShrink: 0, marginTop: '2px' }} />
                  <p style={{ color: 'rgba(255,255,255,0.92)', fontSize: '1.08rem', lineHeight: '1.7', margin: 0 }}>
                    <strong>CPISM (Certificate of Proficiency in System Management)</strong> do <strong>Tập đoàn Aptech Ấn Độ</strong> cấp bằng.
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <CheckCircle2 size={22} style={{ color: '#f37021', flexShrink: 0, marginTop: '2px' }} />
                  <p style={{ color: 'rgba(255,255,255,0.92)', fontSize: '1.08rem', lineHeight: '1.7', margin: 0 }}>
                    Với chứng chỉ này, sinh viên có thể học nâng cấp thêm <strong>1,5 năm</strong> để lấy bằng <strong>Advanced Diploma In Software Engineering (ADSE)</strong> do Tập đoàn Aptech Ấn Độ cấp.
                  </p>
                </div>
              </div>
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
                <h4 style={{ color: '#ffffff', fontSize: '1.4rem', fontWeight: 900, margin: 0 }}>CPISM</h4>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.82rem', margin: '4px 0 0', textTransform: 'uppercase' }}>Aptech Worldwide</p>
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
              Trở thành lập trình viên Frontend chuyên nghiệp với năng lực đáp ứng tốt các yêu cầu phát triển web thực tế
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {targetCareers.map((car, idx) => (
              <div 
                key={idx} 
                style={{ 
                  background: 'rgba(255, 255, 255, 0.03)', 
                  border: '1px solid rgba(243, 112, 33, 0.2)', 
                  borderRadius: '20px', 
                  padding: '28px',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px'
                }}
              >
                <div style={{ background: 'rgba(243, 112, 33, 0.15)', borderRadius: '12px', padding: '10px', flexShrink: 0 }}>
                  <Check size={20} style={{ color: '#f37021' }} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff', marginBottom: '6px' }}>
                    {car.title}
                  </h3>
                  <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.92rem', lineHeight: '1.6', margin: 0 }}>
                    {car.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: TẠI SAO NÊN CHỌN FPT APTECH? (USP) */}
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
          <h2 className="beau-cta-title">Sẵn sàng bước chân vào ngành Lập trình Frontend?</h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', marginBottom: '30px' }}>
            Đăng ký nhận tư vấn lộ trình 6 tháng và nhận ưu đãi học phí độc quyền từ FPT Aptech
          </p>
          <TechCTAButton text="Tư vấn ngay" href="https://zalo.me/fptaptech" />
        </div>
      </section>

      {/* Section 7: Form nhận thông tin học bổng & Google Sheet */}
      <ScholarshipFormSection 
        programName="FPT Aptech - Frontend 6 Tháng" 
        googleSheetScriptUrl="https://script.google.com/macros/s/AKfycbwfPoh5H-YB8CcPWw9GijIv44YjXtHbrwdLX7XCMWnhTmg5ocW-aGt3PnCIMiC_pvSKrw/exec"
      />

      <Footer />
    </div>
  );
}
