'use client';

import { useEffect, useState } from 'react';
import Footer from '@/components/Footer';
import ParticleCanvas from '@/components/ParticleCanvas';
import SkillkingProgramSwitcher from '@/components/SkillkingProgramSwitcher';
import ScholarshipFormSection from '@/components/ScholarshipFormSection';
import TechCTAButton from '@/components/TechCTAButton';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check, Award, BookOpen, Clock, Trophy, Sparkles, TrendingUp, Search, Video, BarChart2, Briefcase, MonitorPlay, Users, Target } from 'lucide-react';

export default function Skillking18ThangPage() {
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
      num: 'Học kỳ 01',
      shortTitle: 'Social Media Executive',
      title: 'Social Media Executive - Sáng tạo & hiệu suất Social Media',
      subtitle: '',
      desc: 'Sinh viên được cung cấp kiến thức nền tảng về marketing và tư duy về Social Media. Học kỳ này giúp học viên tạo ra và đánh giá các chiến lược tiếp thị kỹ thuật số toàn diện, hiểu cách sử dụng các nền tảng Social để quảng bá và định vị thương hiệu trên thị trường kỹ thuật số.',
      coreStack: [
        'Elements of Digital Marketing',
        'Market Research using AI',
        'Design for Digital Marketing',
        'Content Marketing using AI',
        'Social Media Marketing',
        'Affiliate Marketing',
        'Project – AI-Powered Organic Social Media Strategy'
      ],
      careers: [
        'Content Marketing - Chuyên viên Quản trị Nội dung',
        'Social Media Executive - Chuyên viên Mạng xã hội',
        'Content Creator - Nhà sáng tạo nội dung',
        'Content Marketing Executive - Chuyên viên Marketing Nội dung',
        'Digital Marketing Assistant - Trợ lý Marketing số',
        'AI-Powered Content Creator - Nhà sáng tạo nội dung AI',
        'Digital Marketing Consultant - Tư vấn viên Marketing số'
      ]
    },
    {
      num: 'Học kỳ 02',
      shortTitle: 'Digital Performance',
      title: 'Digital Performance Executive - Search Marketing & Phân tích dữ liệu',
      subtitle: '',
      desc: 'Học viên sẽ có khả năng quản lý chiến dịch quảng cáo Google hiệu quả, tối ưu hóa website để nâng cao thứ hạng trên Google, phân tích dữ liệu theo dõi và tối ưu chiến dịch trên Data Studio và xây dựng chiến lược marketing toàn diện, giúp tăng trưởng bền vững.',
      coreStack: [
        'Performance Marketing',
        'Website Building with AI',
        'SEO',
        'Google Analytics & Data Studio',
        'SEM using AI',
        'Project – AI-Powered Website Development and Digital Marketing'
      ],
      careers: [
        'SEO Specialist - Chuyên gia SEO',
        'SEM Specialist - Chuyên gia SEM',
        'Website Manager - Quản lý Website',
        'Data Analyst - Chuyên viên Phân tích dữ liệu',
        'Analytics and Reporting Specialist - Chuyên gia Phân tích và Báo cáo',
        'Performance Marketing Executive - Chuyên viên Performance Marketing'
      ]
    },
    {
      num: 'Học kỳ 03',
      shortTitle: 'Full stack digital marketing',
      title: 'Full stack digital marketing/ Multi-Channel Marketing Strategy - Chiến lược thương hiệu & Marketing tích hợp',
      subtitle: '',
      desc: 'Hoàn thiện chân dung Full-stack Digital Marketing với kiến thức nền tảng về thương hiệu, định vị. Học viên trang bị kiến thức về marketing thương mại điện tử (E-Commerce), tối ưu performance marketing, cách lên kế hoạch truyền thông tích hợp đa kênh (IMC). Từ đó học viên có thể tự tin đề xuất kế hoạch digital marketing hiệu quả cho doanh nghiệp với các dự án thực tế.',
      coreStack: [
        'Branding & Positioning',
        'CRM',
        'Email Marketing with AI',
        'Omnichannel and IMC',
        'E-Commerce Marketing',
        'Project – AI-Driven Multi-Channel Marketing Strategy'
      ],
      careers: [
        'Full-stack Digital Marketer - Chuyên viên Marketing số toàn diện',
        'Multi-Channel Marketing Strategist - Chuyên gia Marketing đa kênh',
        'E-Commerce Marketing Manager - Quản lý Marketing Thương mại điện tử',
        'Email Marketing Specialist - Chuyên gia Email Marketing',
        'IMC Planner - Chuyên viên Lập kế hoạch Truyền thông tích hợp',
        'Branding Executive - Chuyên viên Xây dựng Thương hiệu',
        'CRM Specialist - Chuyên gia CRM',
        'AI Marketing Specialist - Chuyên gia Marketing ứng dụng AI',
        'Digital Marketing Agency Professional - Chuyên viên Agency Marketing số',
        'Freelance Digital Marketing Professional - Chuyên viên Marketing số tự do'
      ]
    }
  ];

  return (
    <div className={`beau-subpage-container theme-skillking active-sec-${activeSection}`}>
      
      {/* Program Switcher Bar */}
      <SkillkingProgramSwitcher activePath="/dao-tao/skillking/18-thang" />

      {/* Section 0: Hero Section (🌙 DARK CYBER THEME) */}
      <section className="beau-hero">
        <ParticleCanvas className="beau-hero-particles" />
        <div className="beau-hero-bg-text">18 THÁNG</div>
        <div className="container beau-hero-inner" data-reveal>
          <span className="beau-hero-brand" style={{ backgroundColor: '#09529c', color: '#ffffff', fontWeight: 800 }}>
            FPT SKILLKING — 18 THÁNG
          </span>
          <h1 className="beau-hero-title" style={{ marginTop: '16px', fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: '1.25', textWrap: 'balance', textTransform: 'uppercase' }}>
            Fullstack Digital Marketing<br />With AI (18 Tháng)
          </h1>
          <p className="beau-hero-desc">
            Khóa đào tạo Full-stack Digital Marketing tại FPT Skillking sẽ cung cấp cho học viên kiến thức thực hành, tất cả những kỹ năng cần có về Digital Marketing. Giúp cho học viên có góc nhìn rộng hơn, đúng hơn để có thể triển khai các hoạt động tiếp thị sản phẩm, dịch vụ hiệu quả. FPT Skillking phát triển khóa học dựa trên giáo án từ Skillking Ấn Độ và dựa trên tính đặc trưng của thị trường Việt Nam. Cấu trúc các khóa học được chia thành 3 nhóm kiến thức tương ứng với 3 học kỳ tạo nền tảng chắc chắn cho học viên từ vị trí mới bắt đầu cho đến chuyên viên.
          </p>

          <div className="beau-stats-bar">
            <div className="beau-stat-item">
              <h3 style={{ color: '#38bdf8' }}>18 Tháng</h3>
              <p>4 học kỳ chuyên sâu đưa bạn trở thành Marketer toàn diện.</p>
            </div>
            <div className="beau-stat-item">
              <h3 style={{ color: '#38bdf8' }}>Bằng cấp Quốc Tế</h3>
              <p>Bằng Advanced Diploma quốc tế danh tiếng do Skillking Ấn Độ cấp.</p>
            </div>
            <div className="beau-stat-item">
              <h3 style={{ color: '#38bdf8' }}>Ứng dụng AI</h3>
              <p>Ứng dụng AI tăng gấp 5 lần hiệu suất sáng tạo và tối ưu chiến dịch.</p>
            </div>
          </div>

          {/* Banner Image */}
          <div className="beau-hero-banner" style={{ marginTop: '40px' }}>
            <Image
              src="/banner_skillking_sub_v2.png"
              alt="Tuyển sinh FPT Skillking 18 tháng"
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
            <span style={{ color: '#09529c', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '0.85rem' }}>
              HÀNH TRÌNH TỔNG QUAN
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, color: 'var(--secondary)', lineHeight: '1.2', marginTop: '10px', fontFamily: 'var(--font-sans)', letterSpacing: '-0.02em' }}>
              Lộ trình đào tạo chuẩn quốc tế 18 tháng
            </h2>
            <p style={{ color: '#64748b', maxWidth: '720px', margin: '14px auto 0', fontSize: '1.05rem', lineHeight: '1.7' }}>
              Trang bị trọn vẹn bộ kỹ năng từ thực thi kỹ thuật số đến quản trị chiến lược
            </p>
          </div>

          {/* 4 Stats Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
            <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '20px', padding: '32px 24px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
              <BookOpen size={34} style={{ color: '#09529c', marginBottom: '14px' }} />
              <h3 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--secondary)', margin: 0, lineHeight: 1 }}>16</h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', marginTop: '10px', margin: 0, fontWeight: 600 }}>Môn học</p>
            </div>
            <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '20px', padding: '32px 24px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
              <Clock size={34} style={{ color: '#09529c', marginBottom: '14px' }} />
              <h3 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--secondary)', margin: 0, lineHeight: 1 }}>03</h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', marginTop: '10px', margin: 0, fontWeight: 600 }}>Học kỳ chuyên sâu</p>
            </div>
            <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '20px', padding: '32px 24px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
              <Trophy size={34} style={{ color: '#09529c', marginBottom: '14px' }} />
              <h3 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--secondary)', margin: 0, lineHeight: 1 }}>03</h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', marginTop: '10px', margin: 0, fontWeight: 600 }}>eProject</p>
            </div>
            <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '20px', padding: '32px 24px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
              <Briefcase size={34} style={{ color: '#09529c', marginBottom: '14px' }} />
              <h3 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--secondary)', margin: 0, lineHeight: 1 }}>01</h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', marginTop: '10px', margin: 0, fontWeight: 600 }}>Portfolio chuyên nghiệp</p>
            </div>
          </div>

          {/* Time banner */}
          <div style={{ 
            marginTop: '36px', 
            background: '#ffffff', 
            border: '1px solid rgba(9, 82, 156, 0.35)', 
            borderLeft: '6px solid #09529c',
            borderRadius: '20px', 
            padding: '32px 40px',
            boxShadow: '0 12px 35px rgba(0, 0, 0, 0.03)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '24px'
          }}>
            <div style={{ textAlign: 'center' }}>
              <span style={{ fontSize: '0.82rem', color: '#09529c', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Tổng thời lượng đào tạo</span>
              <h4 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--secondary)', margin: '6px 0 0', fontFamily: 'var(--font-sans)' }}>608 Giờ học</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: CHI TIẾT CHƯƠNG TRÌNH HỌC (4 HỌC KỲ) - DẠNG TAB TƯƠNG TÁC (🌙 DARK CYBER THEME) */}
      <section className="beau-section" style={{ padding: '100px 0 110px 0' }}>
        <div className="container" data-reveal>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="beau-section-eyebrow" style={{ color: '#38bdf8' }}>NỘI DUNG ĐÀO TẠO</span>
            <h2 className="beau-section-title">Chi tiết chương trình học (3 học kỳ)</h2>
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
                      border: isActive ? '1px solid #38bdf8' : '1px solid rgba(255, 255, 255, 0.12)',
                      background: isActive 
                        ? 'linear-gradient(135deg, #09529c 0%, #0284c7 100%)' 
                        : 'rgba(13, 33, 55, 0.75)',
                      color: '#ffffff',
                      cursor: 'pointer',
                      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      textAlign: 'left',
                      boxShadow: isActive ? '0 10px 28px rgba(2, 132, 199, 0.45)' : '0 4px 15px rgba(0,0,0,0.2)',
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)'
                    }}
                  >
                    <span 
                      style={{ 
                        fontSize: '0.78rem', 
                        fontWeight: 900, 
                        color: isActive ? '#ffffff' : '#38bdf8',
                        background: isActive ? 'rgba(0, 0, 0, 0.25)' : 'rgba(2, 132, 199, 0.2)',
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
            border: '1px solid rgba(2, 132, 199, 0.35)', 
            borderRadius: '24px', 
            padding: '44px',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            boxShadow: '0 24px 60px rgba(0, 0, 0, 0.45)',
            maxWidth: '1100px',
            margin: '0 auto'
          }}>
            <div style={{ marginBottom: '28px' }}>
              <span style={{ color: '#38bdf8', fontSize: '0.88rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
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
                <h4 style={{ color: '#38bdf8', fontSize: '0.9rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '18px' }}>
                  KỸ NĂNG &amp; MÔN HỌC LÕI
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {semesters[activeTab].coreStack.map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.96rem', lineHeight: '1.5' }}>
                      <Check size={18} style={{ color: '#38bdf8', flexShrink: 0, marginTop: '2px' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>


              {/* Col 3 */}
              <div>
                <h4 style={{ color: '#38bdf8', fontSize: '0.9rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '18px' }}>
                  CƠ HỘI NGHỀ NGHIỆP
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {semesters[activeTab].careers.map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.96rem', lineHeight: '1.5' }}>
                      <Check size={18} style={{ color: '#38bdf8', flexShrink: 0, marginTop: '2px' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: TẠI SAO NÊN CHỌN FPT SKILLKING? (☀️ LIGHT WARM CREAM THEME) */}
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
            <span className="beau-section-eyebrow" style={{ color: '#0284c7', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em' }}>
              ĐẶC QUYỀN ĐÀO TẠO
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 2.8rem)', fontWeight: 800, color: 'var(--secondary)', lineHeight: '1.25', marginTop: '10px', fontFamily: 'var(--font-sans)', letterSpacing: '-0.02em' }}>
              Tại sao học Digital Marketing nên chọn FPT Skillking?
            </h2>
            <p style={{ color: '#64748b', maxWidth: '850px', margin: '16px auto 0', fontSize: '1.05rem', lineHeight: '1.75' }}>
              FPT Skillking là đơn vị đầu tiên tại Việt Nam đào tạo Digital Marketing chuyên sâu theo chuẩn quốc tế kết hợp cùng trí tuệ nhân tạo (AI), mang đến cho bạn lộ trình thực chiến toàn diện nhất.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            <div style={{ background: '#ffffff', border: '1px solid rgba(0, 0, 0, 0.06)', borderRadius: '20px', padding: '36px 30px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.02)', transition: 'all 0.3s ease' }}>
              <div style={{ marginBottom: '18px' }}><Sparkles size={32} style={{ color: '#0284c7' }} /></div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '12px', fontFamily: 'var(--font-sans)' }}>Ứng dụng AI và các công cụ mới nhất</h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', lineHeight: '1.7', margin: 0 }}>
                Sử dụng & tối ưu hoá hiệu suất bằng các công cụ AI hàng đầu vào việc học và thực hành.
              </p>
            </div>

            <div style={{ background: '#ffffff', border: '1px solid rgba(0, 0, 0, 0.06)', borderRadius: '20px', padding: '36px 30px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.02)', transition: 'all 0.3s ease' }}>
              <div style={{ marginBottom: '18px' }}><MonitorPlay size={32} style={{ color: '#0284c7' }} /></div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '12px', fontFamily: 'var(--font-sans)' }}>Đào tạo bằng nền tảng EduNext độc quyền</h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', lineHeight: '1.7', margin: 0 }}>
                Học tập trên nền tảng EduNext độc quyền của Tổ chức giáo dục FPT với phương pháp kiến tạo xã hội, cung cấp cho sinh viên trải nghiệm học tập cá nhân hóa, giúp phát triển năng lực cá nhân.
              </p>
            </div>

            <div style={{ background: '#ffffff', border: '1px solid rgba(0, 0, 0, 0.06)', borderRadius: '20px', padding: '36px 30px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.02)', transition: 'all 0.3s ease' }}>
              <div style={{ marginBottom: '18px' }}><Award size={32} style={{ color: '#0284c7' }} /></div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '12px', fontFamily: 'var(--font-sans)' }}>Nhận bằng quốc tế HDDA</h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', lineHeight: '1.7', margin: 0 }}>
                Sinh viên được nhận bằng quốc tế Higher Diploma In Digital Marketing with AI có giá trị toàn cầu, nhiều cơ hội chuyển tiếp lên các chương trình đại học theo hình thức chuyển đổi tín chỉ.
              </p>
            </div>

            <div style={{ background: '#ffffff', border: '1px solid rgba(0, 0, 0, 0.06)', borderRadius: '20px', padding: '36px 30px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.02)', transition: 'all 0.3s ease' }}>
              <div style={{ marginBottom: '18px' }}><Users size={32} style={{ color: '#0284c7' }} /></div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '12px', fontFamily: 'var(--font-sans)' }}>Học cùng giảng viên, doanh nghiệp</h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', lineHeight: '1.7', margin: 0 }}>
                Sinh viên sẽ được học cùng những giảng viên giàu kiến thức được tuyển chọn khắt khe của Tổ chức giáo dục FPT và học cùng đại diện doanh nghiệp có chuyên môn cao, nhiều kinh nghiệm thực tiễn trong ngành.
              </p>
            </div>

            <div style={{ background: '#ffffff', border: '1px solid rgba(0, 0, 0, 0.06)', borderRadius: '20px', padding: '36px 30px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.02)', transition: 'all 0.3s ease' }}>
              <div style={{ marginBottom: '18px' }}><Target size={32} style={{ color: '#0284c7' }} /></div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '12px', fontFamily: 'var(--font-sans)' }}>Học thẳng chuyên ngành với 70% thực hành</h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', lineHeight: '1.7', margin: 0 }}>
                Sinh viên sẽ được học thẳng vào chuyên ngành Digital Marketing từ cơ bản cho đến chuyên sâu với 70% thời gian là học thực hành.
              </p>
            </div>

            <div style={{ background: '#ffffff', border: '1px solid rgba(0, 0, 0, 0.06)', borderRadius: '20px', padding: '36px 30px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.02)', transition: 'all 0.3s ease' }}>
              <div style={{ marginBottom: '18px' }}><Briefcase size={32} style={{ color: '#0284c7' }} /></div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '12px', fontFamily: 'var(--font-sans)' }}>Được giới thiệu việc làm ngay khi tốt nghiệp</h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', lineHeight: '1.7', margin: 0 }}>
                100% sinh viên có cơ hội được giới thiệu việc làm tại tập đoàn FPT và các đối tác doanh nghiệp liên kết.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Bottom CTA Section (🌙 DARK CYBER THEME) */}
      <section className="beau-cta-section">
        <div className="beau-cta-bg-circle"></div>
        <div className="container beau-cta-inner" data-reveal>
          <h2 className="beau-cta-title" style={{ textWrap: 'balance', maxWidth: '780px', margin: '0 auto 16px' }}>
            Sẵn sàng trở thành<br />Chuyên gia Digital Marketing Full-Stack?
          </h2>
          <p style={{ 
            color: 'rgba(255, 255, 255, 0.85)', 
            fontSize: '1.1rem', 
            maxWidth: '720px', 
            margin: '16px auto 32px', 
            lineHeight: '1.7',
            textWrap: 'balance' 
          }}>
            Đăng ký nhận tư vấn lộ trình học 18 tháng và thông tin học bổng mới nhất từ <span style={{ whiteSpace: 'nowrap' }}>FPT Skillking</span>
          </p>
          <TechCTAButton 
            text="Tư vấn ngay" 
            href="https://zalo.me/fptskillking" 
            style={{ 
              background: 'linear-gradient(135deg, #09529c 0%, #0284c7 100%)', 
              color: '#ffffff',
              fontWeight: 800,
              boxShadow: '0 10px 30px rgba(9, 82, 156, 0.4)'
            }} 
          />
        </div>
      </section>

      {/* Section 4: Scholarship Application Form (☀️ LIGHT THEME) */}
      <div id="dang-ky-skillking-18t">
        <ScholarshipFormSection 
          programName="Fullstack Digital Marketing With AI (18 Tháng)" 
          brand="skillking"
          headerTitle="NHẬN THÔNG TIN TƯ VẤN VỀ CHƯƠNG TRÌNH HỌC & HỌC BỔNG 2026 TẠI FPT SKILLKING"
          formTitle="BẠN CÓ MUỐN TRỞ THÀNH CHUYÊN GIA DIGITAL MARKETING?"
          formSubtitle="Đăng ký nhận tư vấn lộ trình Full-stack Digital Marketing With AI (18 Tháng)"
        />
      </div>

      <Footer />
    </div>
  );
}
