'use client';

import { useState, useEffect, useRef } from 'react';
import ScrollTypewriter from '@/components/ScrollTypewriter';
import Header from '@/components/Header';
import ParticleCanvas from '@/components/ParticleCanvas';
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
    title: 'FPT JETKING - CHIP DESIGN',
    subTitle: 'Thiết kế Vi mạch Bán dẫn',
    color: '#f37021',
    logo: '/logo_jetking.png',
    items: ['Programming & Circuits', 'Chip Architecture', 'HDL & EDA Tools', 'SoC/ASIC/FPGA Design', 'AI Driven IC Design', 'IC Verification']
  },
  {
    title: 'FPT JETKING - AI AGENT',
    subTitle: 'Chuyên gia phát triển AI Agent',
    color: '#0066b3',
    logo: '/logo_jetking.png',
    items: ['Python & Data Science', 'Machine & Deep Learning', 'NLP & Computer Vision', 'Generative AI & LLMs', 'Multi-Agent Systems', 'MLOps & Deployment']
  }
];





function useCountUp(target, duration = 1800, started) {
  const [count, setCount] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!started) { setCount(0); return; }
    const startTime = performance.now();
    const tick = (now) => {
      const raw  = Math.min((now - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - raw, 4);
      setCount(raw < 1 ? Math.round(ease * target) : target);
      if (raw < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [started, target, duration]);

  return count;
}

function AboutStatNumber({ target, suffix, isThousands, color, started }) {
  const count = useCountUp(target, 1800, started);
  
  const formattedCount = isThousands 
    ? (count >= 1000 ? count.toLocaleString('vi-VN') : count)
    : count;

  return (
    <div style={{ display: 'flex', alignItems: 'baseline', gap: '2px', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#ffffff', lineHeight: '1', fontWeight: 800, letterSpacing: '-0.04em' }}>
      <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 800 }}>{formattedCount}</span>
      {suffix && (
        <span style={{ fontSize: '0.42em', fontWeight: 800, color: color || 'var(--primary)', alignSelf: 'flex-start', fontFamily: 'var(--font-sans)', marginTop: '0.1em' }}>
          {suffix}
        </span>
      )}
    </div>
  );
}

export default function VeFai() {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [isDone, setIsDone] = useState(false);
  const [showParticles, setShowParticles] = useState(false);

  const [statsStarted, setStatsStarted] = useState(false);
  const statsRef = useRef(null);

  const fullText1 = "Viện Đào tạo Quốc tế FPT";
  const fullText2 = "FPT ACADEMY INTERNATIONAL";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsStarted(true);
        }
      },
      { threshold: 0.15 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let active = true;
    let timer1 = null;
    let timer2 = null;
    const chars1 = Array.from(fullText1);
    const chars2 = Array.from(fullText2);
    let index1 = 0;
    let index2 = 0;
    
    // Reset strings on mount
    setText1('');
    setText2('');
    setIsDone(false);
    
    const startTimeout = setTimeout(() => {
      if (!active) return;
      setShowParticles(true);
      
      timer1 = setInterval(() => {
        if (!active) return;
        if (index1 < chars1.length) {
          const charToType = chars1[index1];
          setText1(prev => prev + charToType);
          index1++;
        } else {
          clearInterval(timer1);
          setTimeout(() => {
            if (!active) return;
            timer2 = setInterval(() => {
              if (!active) return;
              if (index2 < chars2.length) {
                const charToType = chars2[index2];
                setText2(prev => prev + charToType);
                index2++;
              } else {
                clearInterval(timer2);
                setIsDone(true);
              }
            }, 35);
          }, 250);
        }
      }, 55);
    }, 400);

    return () => {
      active = false;
      clearTimeout(startTimeout);
      if (timer1) clearInterval(timer1);
      if (timer2) clearInterval(timer2);
    };
  }, []);

  return (
    <div className="about-page-container" style={{ backgroundColor: '#ffffff', color: '#1a2332' }}>
      <Header />

      <main className="sub-page-main" style={{ padding: 0 }}>
        
        {/* SECTION 1: Page Title (sec-pageTitle) - Clean dynamic typewriter with floating particles */}
        <section 
          className="about-hero-section" 
          style={{ 
            padding: '160px 0 100px 0', 
            position: 'relative', 
            overflow: 'hidden',
            minHeight: '42vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            backgroundColor: '#F9FAFB'
          }}
        >
          {/* Antigravity particles background */}
          {showParticles && (
            <div style={{ position: 'absolute', inset: 0, opacity: isDone ? 1 : 0.6, transition: 'opacity 2s ease' }}>
              <ParticleCanvas className="about-hero-particles" />
            </div>
          )}

          <div className="container" style={{ position: 'relative', zIndex: 1, minHeight: '140px' }}>
            <div style={{ maxWidth: '980px' }}>
              <h1 style={{ 
                fontSize: 'clamp(2.5rem, 6vw, 4.6rem)', 
                color: '#0D2137', 
                lineHeight: '1.15', 
                fontWeight: 900, 
                fontFamily: 'var(--font-sans)', 
                letterSpacing: '-0.02em',
                margin: 0,
                minHeight: '1.2em'
              }}>
                {text1}
                {text1.length > 0 && !text2 && (
                  <span className="typewriter-cursor">|</span>
                )}
              </h1>
              {text1.length === fullText1.length && (
                <p style={{ 
                  fontSize: 'clamp(1.4rem, 3.5vw, 2.4rem)', 
                  color: '#f37021', 
                  fontWeight: 800, 
                  marginTop: '12px', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.08em', 
                  fontFamily: 'var(--font-sans)', 
                  margin: 0,
                  minHeight: '1.2em'
                }}>
                  {text2}
                  {text2.length > 0 && !isDone && (
                    <span className="typewriter-cursor">|</span>
                  )}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* SECTION 2: Philosophy & Stats - Dark Navy Background - Proportional Height (75vh) */}
        <section 
          ref={statsRef}
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
                Là đơn vị trực thuộc Tập đoàn FPT, FAI tự hào đồng hành cùng đất nước trong kỷ nguyên vươn mình, đưa thế hệ trẻ trên làm chủ các công nghệ cốt lõi, mỹ thuật số và truyền thông thực chiến thông qua các chương trình đào tạo chuyển giao quốc tế chuẩn mực nhất.
              </h2>
            </div>

            <div className="prosper-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '40px', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '50px' }}>
              {/* Left Title */}
              <div style={{ gridColumn: 'span 4' }} className="prosper-title-col">
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff', lineHeight: '1.3', fontFamily: 'var(--font-sans)' }}>
                  <ScrollTypewriter text="Những con số biết nói" />
                </h3>
              </div>

              {/* Right Counters */}
              <div style={{ gridColumn: 'span 8' }} className="prosper-content-col">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px 60px' }}>
                  
                  <div>
                    <AboutStatNumber target={27} suffix=" NĂM" started={statsStarted} />
                    <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', lineHeight: '1.7', marginTop: '15px' }}>
                      đơn vị tiên phong liên kết đào tạo quốc tế của Tập đoàn FPT từ năm 1999, kiến tạo nguồn nhân lực chất lượng cao sẵn sàng làm việc toàn cầu.
                    </p>
                  </div>

                  <div>
                    <AboutStatNumber target={60000} isThousands={true} started={statsStarted} />
                    <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', lineHeight: '1.7', marginTop: '15px' }}>
                      Sinh viên đã lựa chọn
                    </p>
                  </div>

                  <div>
                    <AboutStatNumber target={98} suffix="%" color="var(--accent)" started={statsStarted} />
                    <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', lineHeight: '1.7', marginTop: '15px' }}>
                      Sinh viên có việc làm ngay sau khi tốt nghiệp
                    </p>
                  </div>

                  <div>
                    <AboutStatNumber target={1000} suffix="+" started={statsStarted} />
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
                  <ScrollTypewriter text="Những giá trị đại diện cho chúng tôi" speed={12} />
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
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '15px', fontFamily: 'var(--font-sans)' }}><ScrollTypewriter text="Practical — Thực chiến" /></h3>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.7', margin: 0 }}>
                      Nói không với lý thuyết suông. Thời lượng học thực hành tại Lab đạt 70%. Sinh viên làm đồ án e-Project thực tế mỗi học kỳ giúp tích lũy portfolio đắt giá trước khi ra trường.
                    </p>
                  </div>

                  {/* Global */}
                  <div className="value-card-wrapper" style={{ backgroundColor: '#ffffff', border: '1px solid rgba(13, 33, 55, 0.05)', borderRadius: '16px', padding: '35px 30px', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', transition: 'all 0.3s ease' }}>
                    <div style={{ width: '46px', height: '46px', borderRadius: '12px', backgroundColor: 'rgba(201, 151, 44, 0.08)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyItems: 'center', justifyContent: 'center', marginBottom: '25px' }}>
                      <Globe size={22} />
                    </div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '15px', fontFamily: 'var(--font-sans)' }}><ScrollTypewriter text="Global — Toàn cầu" /></h3>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.7', margin: 0 }}>
                      Giáo trình được chuyển giao trực tiếp từ các tổ chức giáo dục hàng đầu thế giới, cập nhật liên tục các xu hướng công nghiệp mới nhất như Cloud, AI/ML, UI/UX hay Data.
                    </p>
                  </div>

                  {/* Connect */}
                  <div className="value-card-wrapper" style={{ backgroundColor: '#ffffff', border: '1px solid rgba(13, 33, 55, 0.05)', borderRadius: '16px', padding: '35px 30px', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', transition: 'all 0.3s ease' }}>
                    <div style={{ width: '46px', height: '46px', borderRadius: '12px', backgroundColor: 'rgba(22, 163, 74, 0.08)', color: '#16a34a', display: 'flex', alignItems: 'center', justifyItems: 'center', justifyContent: 'center', marginBottom: '25px' }}>
                      <Users size={22} />
                    </div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '15px', fontFamily: 'var(--font-sans)' }}><ScrollTypewriter text="Connect — Đồng hành" /></h3>
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
              <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, marginTop: '10px', fontFamily: 'var(--font-sans)' }}><ScrollTypewriter text="Chặng đường vững bước" /></h2>
            </div>

            <div 
              className="horizontal-timeline-wrapper" 
              style={{ 
                display: 'flex', 
                gap: '16px', 
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
                    <ScrollTypewriter text={item.title} />
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
              <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, color: 'var(--secondary)', marginTop: '10px', fontFamily: 'var(--font-sans)' }}><ScrollTypewriter text="Các Phân Hệ Đào Tạo" /></h2>
            </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              {/* Row 1: 2 Programs Centered */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
                {programsList.slice(0, 2).map((prog, idx) => (
                  <div 
                    key={idx} 
                    className="program-list-card"
                    style={{ 
                      flex: '0 1 320px',
                      minWidth: '280px',
                      background: '#F8F5F0', 
                      border: '1px solid rgba(0,0,0,0.02)', 
                      borderRadius: '16px', 
                      padding: '40px 30px',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.01)'
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
                ))}
              </div>

              {/* Row 2: 3 Programs Centered */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
                {programsList.slice(2).map((prog, idx) => (
                  <div 
                    key={idx} 
                    className="program-list-card"
                    style={{ 
                      flex: '0 1 320px',
                      minWidth: '280px',
                      background: '#F8F5F0', 
                      border: '1px solid rgba(0,0,0,0.02)', 
                      borderRadius: '16px', 
                      padding: '40px 30px',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.01)'
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
                ))}
              </div>
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
