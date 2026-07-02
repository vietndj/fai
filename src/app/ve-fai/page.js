'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Zap, Palette, Megaphone, Globe, Users } from 'lucide-react';

const historyTimeline = [
  {
    year: '1999',
    title: 'Thành lập FPT Aptech',
    desc: 'Hợp tác chuyển giao chương trình đào tạo Lập trình viên Quốc tế tiên tiến từ Tập đoàn Aptech Ấn Độ, tiên phong đào tạo lập trình thực chiến.'
  },
  {
    year: '2004',
    title: 'Ra đời FPT Arena Multimedia',
    desc: 'Khai mở phân hệ đào tạo Mỹ thuật đa phương tiện đầu tiên tại Việt Nam, định hình tương lai thiết kế đồ họa & hoạt hình số.'
  },
  {
    year: '2018',
    title: 'Hợp tác đào tạo FPT Skillking',
    desc: 'Bắt tay đối tác Skillking Ấn Độ xây dựng giáo trình đào tạo chuyên sâu về Tiếp thị số (Digital Marketing) thực chiến đầu tiên.'
  },
  {
    year: '2026',
    title: '27 năm vững bước kiến tạo',
    desc: 'Khẳng định vị thế Viện Đào tạo Quốc tế FAI toàn quốc, trở thành cầu nối vững chắc cung cấp nhân sự cho các tập đoàn toàn cầu.'
  }
];



const programsList = [
  {
    title: 'FPT APTECH',
    subTitle: 'Lập trình viên Quốc tế',
    color: '#e31a22',
    logo: '/logo_aptech.png',
    items: ['Software Engineering', 'Java / .NET / Web Dev', 'Cloud Computing (AWS)', 'AI & Machine Learning', 'Data Science', 'e-Project Practical']
  },
  {
    title: 'FPT ARENA',
    subTitle: 'Mỹ thuật Đa phương tiện',
    color: '#ffb600',
    logo: '/logo_arena.png',
    items: ['Graphic Design', 'Web & UI/UX Design', 'Filmmaking & Video', '3D Modeling & Animation', 'Game Art & Design', 'Graduation Project']
  },
  {
    title: 'FPT SKILLKING',
    subTitle: 'Digital Marketing chuyên sâu',
    color: '#09529c',
    logo: '/logo_skillking.png',
    items: ['Social Media Strategy', 'SEO & SEM Marketing', 'Paid Media (Ads)', 'HubSpot CRM Audit', 'Marketing Analytics', 'Capstone Project']
  },
  {
    title: 'FPT JETKING CHIP DESIGN',
    subTitle: 'Thiết kế Vi mạch Bán dẫn',
    color: '#f37021',
    logo: '/logo_jetking.png',
    items: ['Programming & Circuits', 'Chip Architecture', 'HDL & EDA Tools', 'SoC/ASIC/FPGA Design', 'AI Driven IC Design', 'IC Verification']
  },
  {
    title: 'FPT JETKING AI AGENT',
    subTitle: 'Chuyên gia phát triển AI Agent',
    color: '#0066b3',
    logo: '/logo_jetking.png',
    items: ['Python & Data Science', 'Machine & Deep Learning', 'NLP & Computer Vision', 'Generative AI & LLMs', 'Multi-Agent Systems', 'MLOps & Deployment']
  }
];

export default function VeFai() {
  return (
    <div className="about-page-container" style={{ backgroundColor: '#ffffff', color: '#1a2332' }}>
      <Header />

      <main className="sub-page-main" style={{ padding: 0 }}>
        
        {/* SECTION 1: Page Title (sec-pageTitle) - White Background - Proportional Height (45vh) */}
        <section 
          className="about-hero-section" 
          style={{ 
            padding: '160px 0 80px 0', 
            position: 'relative', 
            overflow: 'hidden',
            minHeight: '45vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            backgroundColor: '#ffffff'
          }}
        >
          <div className="container">
            <div style={{ maxWidth: '950px' }}>
              <span className="section-eyebrow" style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                GIỚI THIỆU
              </span>
              <h1 style={{ fontSize: 'clamp(2.3rem, 5.5vw, 4.2rem)', color: 'var(--secondary)', lineHeight: '1.25', fontWeight: 800, marginTop: '20px', fontFamily: 'var(--font-sans)', fontStyle: 'normal' }}>
                Thấu cảm và sự đổi mới tạo ra những trải nghiệm giáo dục lôi cuốn
              </h1>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '60px', borderTop: '1px solid rgba(0,0,0,0.08)', paddingTop: '20px' }}>
              <div style={{ display: 'flex', gap: '10px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                <Link href="/">Trang chủ</Link>
                <span>/</span>
                <span style={{ color: 'var(--secondary)', fontWeight: 600 }}>Giới thiệu</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: Philosophy & Stats - Dark Navy Background - Proportional Height (75vh) */}
        <section 
          className="about-slogan-section" 
          style={{ 
            padding: '120px 0', 
            background: 'linear-gradient(135deg, #050c1a 0%, #0D2137 25%, #082240 50%, #0a1e35 75%, #050c1a 100%)',
            backgroundSize: '300% 300%',
            color: '#ffffff',
            minHeight: '75vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Subtle dot overlay */}
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
            pointerEvents: 'none',
            zIndex: 0
          }} />

          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ maxWidth: '950px', marginBottom: '60px' }}>
              <h2 style={{ fontSize: 'clamp(1.4rem, 3.2vw, 2rem)', fontWeight: 400, lineHeight: '1.6', color: 'rgba(255,255,255,0.9)', fontFamily: 'var(--font-sans)' }}>
                <strong style={{ color: 'var(--primary)', fontWeight: 800 }}>Là Viện Đào tạo Quốc tế thuộc Tập đoàn FPT</strong>, FAI tự hào đồng hành cùng thế hệ trẻ trên hành trình làm chủ công nghệ, mỹ thuật số và truyền thông thực chiến thông qua các chương trình đào tạo chuyển giao quốc tế chuẩn mực nhất.
              </h2>
            </div>

            <div className="prosper-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '40px', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '50px' }}>
              {/* Left Title */}
              <div style={{ gridColumn: 'span 4' }} className="prosper-title-col">
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff', lineHeight: '1.3', fontFamily: 'var(--font-sans)' }}>
                  Những điều <br />chúng tôi đã đạt được
                </h3>
              </div>

              {/* Right Counters */}
              <div style={{ gridColumn: 'span 8' }} className="prosper-content-col">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px 60px' }}>
                  
                  <div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '2px', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#ffffff', lineHeight: '1', fontWeight: 800, letterSpacing: '-0.04em' }}>
                      <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 800 }}>27</span>
                      <span style={{ fontSize: '0.42em', fontWeight: 800, color: 'var(--primary)', alignSelf: 'flex-start', fontFamily: 'var(--font-sans)', marginTop: '0.1em' }}>+ năm</span>
                    </div>
                    <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', lineHeight: '1.7', marginTop: '15px' }}>
                      Aptech đồng hành đào tạo nhân lực ngành công nghệ thông tin xuất sắc tại Việt Nam từ năm 1999.
                    </p>
                  </div>

                  <div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '2px', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#ffffff', lineHeight: '1', fontWeight: 800, letterSpacing: '-0.04em' }}>
                      <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 800 }}>22</span>
                      <span style={{ fontSize: '0.42em', fontWeight: 800, color: 'var(--accent)', alignSelf: 'flex-start', fontFamily: 'var(--font-sans)', marginTop: '0.1em' }}>+ năm</span>
                    </div>
                    <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', lineHeight: '1.7', marginTop: '15px' }}>
                      Arena Multimedia khai mở và dẫn dắt xu hướng đào tạo Mỹ thuật đa phương tiện chuẩn quốc tế.
                    </p>
                  </div>

                  <div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '2px', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#ffffff', lineHeight: '1', fontWeight: 800, letterSpacing: '-0.04em' }}>
                      <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 800 }}>98</span>
                      <span style={{ fontSize: '0.42em', fontWeight: 800, color: 'var(--accent)', alignSelf: 'flex-start', fontFamily: 'var(--font-sans)', marginTop: '0.1em' }}>%</span>
                    </div>
                    <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', lineHeight: '1.7', marginTop: '15px' }}>
                      Tỷ lệ sinh viên FAI có việc làm ngay trong năm đầu tiên sau khi tốt nghiệp tại các doanh nghiệp đối tác lớn.
                    </p>
                  </div>

                  <div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '2px', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#ffffff', lineHeight: '1', fontWeight: 800, letterSpacing: '-0.04em' }}>
                      <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 800 }}>50</span>
                      <span style={{ fontSize: '0.42em', fontWeight: 800, color: 'var(--primary)', alignSelf: 'flex-start', fontFamily: 'var(--font-sans)', marginTop: '0.1em' }}>+</span>
                    </div>
                    <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', lineHeight: '1.7', marginTop: '15px' }}>
                      Đối tác doanh nghiệp ký kết liên kết cung ứng nhân sự, kiến tập thực tế và tuyển dụng trực tiếp hàng năm.
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: Core Values - Light Cream Background - Proportional Height (75vh) */}
        <section 
          className="about-values-section" 
          style={{ 
            padding: '120px 0', 
            backgroundColor: '#F8F5F0', 
            color: '#1a2332',
            minHeight: '75vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}
        >
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '40px', alignItems: 'center' }}>
              <div style={{ gridColumn: 'span 4' }}>
                <span className="section-eyebrow" style={{ color: 'var(--primary)', fontWeight: 800 }}>GIÁ TRỊ CỐT LÕI</span>
                <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, color: 'var(--secondary)', lineHeight: '1.2', marginTop: '10px', fontFamily: 'var(--font-sans)' }}>
                  Những giá trị đại diện cho chúng tôi
                </h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.7', marginTop: '20px', maxWidth: '340px' }}>
                  Kim chỉ nam giúp FAI xây dựng hệ thống đào tạo chất lượng cao chuẩn quốc tế, gắn liền giữa lý thuyết và thực tiễn doanh nghiệp.
                </p>
              </div>
              
              <div style={{ gridColumn: 'span 8' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }} className="values-grid">
                  
                  {/* Practical */}
                  <div className="value-card-wrapper" style={{ backgroundColor: '#ffffff', border: '1px solid rgba(13, 33, 55, 0.05)', borderRadius: '16px', padding: '35px 30px', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', transition: 'all 0.3s ease' }}>
                    <div style={{ width: '46px', height: '46px', borderRadius: '12px', backgroundColor: 'rgba(232, 116, 30, 0.08)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyItems: 'center', justifyContent: 'center', marginBottom: '25px' }}>
                      <Zap size={22} />
                    </div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '15px', fontFamily: 'var(--font-sans)' }}>Practical — Thực chiến</h3>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.7', margin: 0 }}>
                      Nói không với lý thuyết suông. Thời lượng học thực hành tại Lab đạt 70%. Sinh viên làm đồ án e-Project thực tế mỗi học kỳ giúp tích lũy portfolio đắt giá trước khi ra trường.
                    </p>
                  </div>

                  {/* Global */}
                  <div className="value-card-wrapper" style={{ backgroundColor: '#ffffff', border: '1px solid rgba(13, 33, 55, 0.05)', borderRadius: '16px', padding: '35px 30px', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', transition: 'all 0.3s ease' }}>
                    <div style={{ width: '46px', height: '46px', borderRadius: '12px', backgroundColor: 'rgba(201, 151, 44, 0.08)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyItems: 'center', justifyContent: 'center', marginBottom: '25px' }}>
                      <Globe size={22} />
                    </div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '15px', fontFamily: 'var(--font-sans)' }}>Global — Toàn cầu</h3>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.7', margin: 0 }}>
                      Giáo trình được chuyển giao trực tiếp từ các tổ chức giáo dục hàng đầu thế giới, cập nhật liên tục các xu hướng công nghiệp mới nhất như Cloud, AI/ML, UI/UX hay Data.
                    </p>
                  </div>

                  {/* Connect */}
                  <div className="value-card-wrapper" style={{ backgroundColor: '#ffffff', border: '1px solid rgba(13, 33, 55, 0.05)', borderRadius: '16px', padding: '35px 30px', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', transition: 'all 0.3s ease' }}>
                    <div style={{ width: '46px', height: '46px', borderRadius: '12px', backgroundColor: 'rgba(22, 163, 74, 0.08)', color: '#16a34a', display: 'flex', alignItems: 'center', justifyItems: 'center', justifyContent: 'center', marginBottom: '25px' }}>
                      <Users size={22} />
                    </div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '15px', fontFamily: 'var(--font-sans)' }}>Connect — Đồng hành</h3>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.7', margin: 0 }}>
                      Hỗ trợ sinh viên toàn diện thông qua mạng lưới Job Hub. Tổ chức Company Visit thường xuyên, rèn luyện phỏng vấn giả định và kết nối việc làm trọn đời sau tốt nghiệp.
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: History Timeline - Dark Gray/Black Background - Proportional Height (75vh) */}
        <section 
          className="about-history-section" 
          style={{ 
            padding: '120px 0', 
            backgroundColor: '#070a10', 
            color: '#ffffff',
            minHeight: '75vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            overflow: 'hidden'
          }}
        >
          <div className="container">
            <div className="sec-history__header" style={{ marginBottom: '50px' }}>
              <span className="section-eyebrow" style={{ color: 'rgba(255,255,255,0.4)', fontWeight: 800 }}>HÀNH TRÌNH PHÁT TRIỂN</span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, marginTop: '10px', fontFamily: 'var(--font-sans)' }}>Chặng đường vững bước</h2>
            </div>

            <div 
              className="horizontal-timeline-wrapper" 
              style={{ 
                display: 'flex', 
                gap: '30px', 
                overflowX: 'auto', 
                paddingBottom: '30px', 
                scrollSnapType: 'x mandatory'
              }}
            >
              {historyTimeline.map((item, idx) => (
                <div 
                  key={idx} 
                  className="history-timeline-card" 
                  style={{ 
                    flex: '0 0 340px', 
                    scrollSnapAlign: 'start',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    borderRadius: '16px',
                    padding: '40px 35px',
                    position: 'relative',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary)', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '15px', marginBottom: '20px', fontFamily: 'var(--font-sans)' }}>
                    {item.year}
                  </div>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', marginBottom: '12px', fontFamily: 'var(--font-sans)' }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.6)', lineHeight: '1.75', margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: Program List - White Background - Proportional Height (75vh) */}
        <section 
          className="about-programs-section" 
          style={{ 
            padding: '120px 0', 
            backgroundColor: '#ffffff', 
            color: '#1a2332',
            minHeight: '75vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}
        >
          <div className="container">
            <div style={{ marginBottom: '50px' }}>
              <span className="section-eyebrow" style={{ color: 'var(--primary)', fontWeight: 800 }}>MẠNG LƯỚI ĐÀO TẠO</span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, color: 'var(--secondary)', marginTop: '10px', fontFamily: 'var(--font-sans)' }}>Các Phân Hệ Đào Tạo</h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '30px' }} className="programs-grid">
              {programsList.map((prog, idx) => {
                return (
                  <div 
                    key={idx} 
                    className="program-list-card"
                    style={{ 
                      background: '#F8F5F0', 
                      border: '1px solid rgba(0,0,0,0.02)', 
                      borderRadius: '16px', 
                      padding: '40px 30px',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.01)',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <div 
                      style={{ 
                        height: '42px', 
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: '25px',
                        position: 'relative'
                      }}
                    >
                      <Image src={prog.logo} alt={prog.title} width={150} height={42} style={{ objectFit: 'contain', width: 'auto', height: '100%' }} />
                    </div>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '6px', fontFamily: 'var(--font-sans)' }}>
                      {prog.title}
                    </h3>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 800, letterSpacing: '0.05em' }}>
                      {prog.subTitle}
                    </span>
                    
                    <ul style={{ marginTop: '35px', borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '25px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                      {prog.items.map((item, i) => (
                        <li key={i} style={{ fontSize: '0.9rem', color: 'var(--text-dark)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: prog.color }}></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 6: Call To Action - Orange Gradient - Proportional Height (65vh) */}
        <section 
          className="about-cta-section" 
          style={{ 
            padding: '100px 0', 
            background: 'linear-gradient(135deg, #e8741e 0%, #C9972C 100%)',
            color: '#ffffff',
            minHeight: '65vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* subtle decoration */}
          <div style={{
            position: 'absolute',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)',
            top: '-10%',
            right: '-10%',
            pointerEvents: 'none'
          }} />

          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ maxWidth: '850px' }}>
              <span className="section-eyebrow" style={{ color: '#ffffff', opacity: 0.8, fontWeight: 800 }}>HỢP TÁC DOANH NGHIỆP</span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4.5vw, 2.8rem)', fontWeight: 800, color: '#ffffff', lineHeight: '1.3', marginTop: '15px', marginBottom: '40px', fontFamily: 'var(--font-sans)' }}>
                FPT Academy International - Đối tác cung ứng nhân lực công nghệ số và sáng tạo uy tín hàng đầu của doanh nghiệp.
              </h2>
              <Link 
                href="/lien-he" 
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '10px', 
                  background: '#0D2137', 
                  color: '#ffffff', 
                  padding: '18px 40px', 
                  borderRadius: '50px', 
                  fontWeight: 700, 
                  fontSize: '1rem',
                  boxShadow: '0 10px 30px rgba(13,33,55,0.2)',
                  transition: 'all 0.3s ease'
                }}
                className="about-cta-btn"
              >
                Hợp tác doanh nghiệp <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>



        {/* SECTION 8: Careers CTA - Dark Gray/Black Background - Proportional Height (40vh) */}
        <section 
          className="about-last-cta-section" 
          style={{ 
            padding: '80px 0', 
            backgroundColor: '#070a10',
            color: '#ffffff',
            minHeight: '40vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}
        >
          <div className="container">
            <Link 
              href="/lien-he" 
              style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                padding: '30px 0',
                borderBottom: '2px solid var(--primary)',
                transition: 'all 0.3s ease',
                color: '#ffffff'
              }}
              className="about-join-link"
            >
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, margin: 0, fontFamily: 'var(--font-sans)' }}>
                Gia nhập FAI cùng chúng tôi
              </h2>
              <span style={{ color: 'var(--primary)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="45" viewBox="0 0 104.728 79.511">
                  <g transform="translate(4.053 3.583)">
                    <path d="M1,.528l87.979.946" transform="translate(0 35)" fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="10"/>
                    <path d="M0,0,37.165,36.172,0,72.345" transform="translate(56.34)" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="10"/>
                  </g>
                </svg>
              </span>
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
