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
    subTitle: 'FPT Aptech',
    title: 'Thành lập FPT Aptech',
    desc: 'Là đơn vị sáng lập Aptech Việt Nam từ năm 1999, chương trình đào tạo Lập trình viên quốc tế FPT Aptech sở hữu hơn 20 năm kinh nghiệm đào tạo theo chuẩn quốc tế, trở thành lựa chọn uy tín của người học và doanh nghiệp. Chương trình đào tạo tại FPT Aptech kết hợp giáo trình lập trình viên quốc tế ACCP Aptech với đào tạo thực tiễn tại doanh nghiệp FPT, giúp sinh viên vững chuyên môn, làm đúng nghề và hướng tới bằng đại học CNTT. FPT Aptech hiện là thành viên của mạng lưới hơn 3.200 trung tâm APTECH Worldwide tại 52 quốc gia.'
  },
  {
    year: '2004',
    subTitle: 'FPT Arena',
    title: 'Tiên phong khái niệm về Multimedia tại Việt Nam',
    desc: 'FPT Arena Multimedia là đơn vị tiên phong đưa và định hình khái niệm Multimedia – Mỹ thuật đa phương tiện tại Việt Nam. Trải qua hơn 20 năm phát triển, FPT Arena kế thừa văn hóa giáo dục của Tổ chức Giáo dục FPT và chuẩn đào tạo quốc tế của Tập đoàn Aptech (Ấn Độ), kiên định đào tạo gắn với thực tiễn, xây dựng đội ngũ giảng viên giàu kinh nghiệm và mạng lưới hợp tác quốc tế, góp phần hình thành thế hệ nhân lực sáng tạo cho ngành công nghiệp nội dung số Việt Nam.'
  },
  {
    year: '2011',
    subTitle: 'FPT Jetking',
    title: 'Chuẩn hóa đào tạo quản trị và an ninh mạng',
    desc: 'Chương trình đào tạo Quản trị và An ninh mạng FPT Jetking được thành lập từ sự hợp tác giữa FAI và tập đoàn Jetking (Ấn Độ) – một trong những học viện đào tạo An ninh mạng và Cloud hàng đầu với hơn 75 năm kinh nghiệm và 1 triệu học viên toàn cầu, mang các chương trình đào tạo công nghệ thông tin theo chuẩn quốc tế về Việt Nam.'
  },
  {
    year: '2018',
    subTitle: 'FPT Skillking',
    title: 'Bệ phóng Digital Marketing số toàn diện',
    desc: 'Chương trình đào tạo Digital Marketing FPT Skillking chính thức ra mắt vào năm 2018, là hệ thống đào tạo chuyên sâu về Digital Marketing đầu tiên tại Việt Nam, cung cấp chương trình Full-Stack Digital Marketing theo chuẩn quốc tế, góp phần đào tạo nguồn nhân lực chất lượng cao cho doanh nghiệp trong và ngoài nước.'
  },
  {
    year: '2019',
    subTitle: 'FPT Coking',
    title: 'Khai phá kỷ nguyên Internet of Things',
    desc: 'FPT Coking chính thức ra mắt, là kết quả hợp tác giữa FAI và Tập đoàn Jetking (Ấn Độ), triển khai đào tạo chuyên sâu Internet of Things (IoT) theo chuẩn quốc tế. FPT Coking trở thành học viện IoT đầu tiên tại Việt Nam cấp bằng quốc tế, góp phần phát triển nguồn nhân lực chất lượng cao cho kỷ nguyên công nghiệp 4.0.'
  },
  {
    year: '2022',
    subTitle: 'FPT AfterSchool',
    title: 'Ươm mầm năng lực tương lai',
    desc: 'Thành lập FPT AfterSchool – hệ thống đào tạo kỹ năng học đường dành cho học sinh từ 10 đến 18 tuổi, tập trung khai phá tư duy và phát triển kỹ năng trên nền tảng công nghệ, hướng tới thế hệ công dân tương lai. Ngay từ những ngày đầu, FAS nhất quán theo đuổi triết lý giáo dục của FPT Education: “Giáo dục đào tạo là tổ chức và quản trị việc tự học của người học” , lấy người học làm trung tâm của quá trình phát triển.'
  },
  {
    year: '2025',
    subTitle: 'Vi mạch bán dẫn',
    title: 'Bước chân vào kỷ nguyên bán dẫn',
    desc: 'FAI tiếp tục khẳng định vai trò tiên phong khi mở rộng đào tạo Thiết kế vi mạch bán dẫn FPT Jetking, một trong những ngành công nghiệp lõi của kỷ nguyên công nghệ. Sự ra mắt chương trình đào tạo này không chỉ mở ra hướng đi mới mà còn đánh dấu bước tiến quan trọng trong chiến lược phát triển nhân lực bán dẫn tại Việt Nam.'
  },
  {
    year: '2025',
    subTitle: 'AI & Tự động hóa',
    title: 'Dẫn lối công nghệ mũi nhọn & tự động hóa',
    desc: 'Tháng 02/2025, Tập đoàn FPT hợp tác cùng Cranes Varsity ra mắt hai chương trình đào tạo theo chuẩn quốc tế đầu tiên tại Việt Nam: Phát triển phần mềm ô tô thông minh FPT Cranes và Khoa học Dữ liệu FPT Cranes, góp phần đào tạo nguồn nhân lực chất lượng cao cho ngành ô tô thông minh và dữ liệu.\n\nSong song đó, chương trình AI Agent – FPT Jetking chính thức triển khai, kết hợp năng lực công nghệ của Tập đoàn FPT và kinh nghiệm đào tạo quốc tế của Tập đoàn Jetking (Ấn Độ), hướng tới đào tạo nhân lực làm chủ Trí tuệ Nhân tạo và tự động hóa trong kỷ nguyên số.'
  },
  {
    year: '2026',
    subTitle: 'Drone & Fintech',
    title: 'Bám sát chiến lược tập đoàn, dẫn lối đào tạo thực chiến',
    desc: 'Bám sát chiến lược công nghệ của Tập đoàn FPT với AI là trung tâm, và 5 trụ cột Trí tuệ nhân tạo – Bán dẫn – Xe thông minh – Chuyển đổi số – Chuyển đổi xanh, FAI cho ra mắt 3 chương trình đào tạo trọng điểm: Phát triển phần mềm ứng dụng FPT Cranes, Công nghệ tài chính FPT cranes & Thiết kế và vận hành hệ thống Drone FPT Cranes góp phần đào tạo nguồn nhân lực công nghệ chất lượng cao cho các lĩnh vực mũi nhọn của tập đoàn.'
  }
];



const programsList = [
  {
    title: 'FPT APTECH',
    subTitle: 'Lập trình viên Quốc tế',
    color: '#f37021',
    logo: '/logo_aptech.png',
    items: ['Software Engineering', 'Java / .NET / Web Dev', 'Cloud Computing (AWS)', 'AI & Machine Learning', 'Data Science', 'e-Project Practical']
  },
  {
    title: 'FPT ARENA',
    subTitle: 'Mỹ thuật đa phương tiện',
    color: '#ffb600',
    logo: '/logo_arena.png',
    items: ['Graphic Design', 'Web & UI/UX Design', 'Filmmaking & Video', '3D Modeling & Animation', 'Game Art & Design', 'Graduation Project']
  },
  {
    title: 'FPT SKILLKING',
    subTitle: 'Digital Marketing chuyên sâu',
    color: '#29a9e1',
    logo: '/logo_skillking.png',
    items: ['Social Media Strategy', 'SEO & SEM Marketing', 'Paid Media (Ads)', 'HubSpot CRM Audit', 'Marketing Analytics', 'Capstone Project']
  },
  {
    title: 'FPT JETKING - CHIP DESIGN',
    subTitle: 'Thiết kế vi mạch bán dẫn',
    color: '#ed232a',
    logo: '/logo_jetking.png',
    items: ['Programming & Circuits', 'Chip Architecture', 'HDL & EDA Tools', 'SoC/ASIC/FPGA Design', 'AI Driven IC Design', 'IC Verification']
  },
  {
    title: 'FPT JETKING - AI AGENT',
    subTitle: 'Kỹ sư phát triển AI Agent',
    color: '#ed232a',
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
  const [activeTimelineIdx, setActiveTimelineIdx] = useState(0);
  const statsRef = useRef(null);

  const fullText1 = "Viện đào tạo quốc tế FPT";
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

        {/* SECTION 4: High-Tech Futuristic Cyber Timeline */}
        <section 
          className="about-history-section" 
          style={{ 
            padding: '100px 0 120px 0', 
            backgroundColor: '#070a10', 
            color: '#ffffff',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Subtle tech grid background */}
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(rgba(232, 116, 30, 0.06) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
            pointerEvents: 'none',
            zIndex: 0
          }} />

          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            {/* Section Header */}
            <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 60px auto' }}>
              <span className="section-eyebrow" style={{ color: 'var(--primary)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                Hành trình phát triển
              </span>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, color: '#ffffff', marginTop: '10px', fontFamily: 'var(--font-sans)', letterSpacing: '-0.02em' }}>
                <ScrollTypewriter text="Những cột mốc lịch sử FAI" />
              </h2>
              <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '1.02rem', lineHeight: '1.75', marginTop: '15px' }}>
                Hơn 27 năm kiên định tiên phong đặt nền móng và định hình đào tạo công nghệ, mỹ thuật đa phương tiện &amp; kỹ năng thế hệ mới tại Việt Nam.
              </p>
            </div>

            {/* High-Tech Cyber Timeline Bar */}
            <div className="vinuni-timeline-axis-wrap" style={{ position: 'relative', margin: '40px 0 60px 0', padding: '10px 0' }}>
              {/* Horizontal Connecting Beam - Perfectly Centered at top: 32px */}
              <div 
                style={{
                  position: 'absolute',
                  top: '32px',
                  left: '60px',
                  right: '60px',
                  height: '3px',
                  backgroundColor: 'rgba(255, 255, 255, 0.12)',
                  borderRadius: '3px',
                  zIndex: 0
                }} 
              >
                {/* Active Orange Progress Line */}
                <div 
                  style={{
                    height: '100%',
                    width: `${(activeTimelineIdx / (historyTimeline.length - 1)) * 100}%`,
                    background: 'linear-gradient(90deg, var(--primary) 0%, #ff9e42 100%)',
                    borderRadius: '3px',
                    boxShadow: '0 0 12px var(--primary)',
                    transition: 'width 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                />
              </div>

              {/* High-Tech Node Pills Container */}
              <div 
                className="vinuni-timeline-nodes-scroll"
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  position: 'relative',
                  zIndex: 1,
                  overflowX: 'auto',
                  padding: '10px 10px 15px 10px',
                  gap: '12px',
                  scrollbarWidth: 'none'
                }}
              >
                {historyTimeline.map((item, idx) => {
                  const isActive = idx === activeTimelineIdx;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveTimelineIdx(idx)}
                      style={{
                        background: 'none',
                        border: 'none',
                        padding: 0,
                        cursor: 'pointer',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        flexShrink: 0,
                        outline: 'none',
                        width: '125px'
                      }}
                    >
                      {/* Pill Row - Fixed Height 44px for perfect vertical line alignment */}
                      <div style={{ height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div 
                          style={{
                            padding: isActive ? '8px 18px' : '6px 14px',
                            borderRadius: '30px',
                            backgroundColor: isActive ? 'var(--primary)' : 'rgba(13, 29, 48, 0.95)',
                            border: isActive ? '2px solid #ffffff' : '1px solid rgba(255, 255, 255, 0.2)',
                            boxShadow: isActive ? '0 0 25px rgba(232, 116, 30, 0.8), 0 0 40px rgba(232, 116, 30, 0.3)' : '0 4px 12px rgba(0,0,0,0.3)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                            backdropFilter: 'blur(8px)'
                          }}
                        >
                          <span 
                            style={{
                              width: isActive ? '7px' : '5px',
                              height: isActive ? '7px' : '5px',
                              borderRadius: '50%',
                              backgroundColor: isActive ? '#ffffff' : 'rgba(255,255,255,0.4)',
                              boxShadow: isActive ? '0 0 8px #ffffff' : 'none'
                            }} 
                          />
                          <span 
                            style={{
                              fontSize: isActive ? '0.9rem' : '0.82rem',
                              fontWeight: isActive ? 850 : 700,
                              color: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.75)',
                              whiteSpace: 'nowrap',
                              letterSpacing: '0.04em'
                            }}
                          >
                            {item.year}
                          </span>
                        </div>
                      </div>

                      {/* Subtitle Row below - Displayed for EVERY milestone */}
                      <div style={{ marginTop: '10px', minHeight: '36px', display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
                        <span style={{
                          fontSize: '0.72rem',
                          fontWeight: 800,
                          color: isActive ? 'var(--primary)' : 'rgba(255, 255, 255, 0.6)',
                          letterSpacing: '0.02em',
                          textAlign: 'center',
                          lineHeight: '1.35',
                          whiteSpace: 'normal',
                          maxWidth: '115px',
                          backgroundColor: isActive ? 'rgba(232, 116, 30, 0.15)' : 'rgba(255, 255, 255, 0.04)',
                          border: isActive ? '1px solid rgba(232, 116, 30, 0.35)' : '1px solid rgba(255, 255, 255, 0.08)',
                          padding: '3px 8px',
                          borderRadius: '10px',
                          transition: 'all 0.3s ease'
                        }}>
                          {item.subTitle}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Futuristic Glassmorphism Card */}
            <div 
              style={{
                backgroundColor: 'rgba(13, 29, 48, 0.65)',
                border: '1px solid rgba(232, 116, 30, 0.25)',
                borderRadius: '24px',
                padding: '45px',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4), 0 0 30px rgba(232, 116, 30, 0.05)',
                position: 'relative',
                transition: 'all 0.35s ease',
                minHeight: '280px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                backdropFilter: 'blur(12px)'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <span style={{ 
                      fontSize: '2rem', 
                      fontWeight: 900, 
                      color: 'var(--primary)', 
                      fontFamily: 'var(--font-sans)',
                      letterSpacing: '-0.02em'
                    }}>
                      Cột mốc {historyTimeline[activeTimelineIdx].year}
                    </span>
                    {historyTimeline[activeTimelineIdx].tag && (
                      <span style={{
                        backgroundColor: 'rgba(232, 116, 30, 0.15)',
                        color: 'var(--primary)',
                        border: '1px solid rgba(232, 116, 30, 0.3)',
                        fontSize: '0.8rem',
                        fontWeight: 800,
                        padding: '4px 14px',
                        borderRadius: '20px'
                      }}>
                        {historyTimeline[activeTimelineIdx].tag}
                      </span>
                    )}
                  </div>

                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'rgba(255, 255, 255, 0.5)' }}>
                    Cột mốc {activeTimelineIdx + 1} / {historyTimeline.length}
                  </span>
                </div>

                <h3 style={{ 
                  fontSize: 'clamp(1.3rem, 2.5vw, 1.75rem)', 
                  fontWeight: 800, 
                  color: '#ffffff', 
                  marginBottom: '20px', 
                  lineHeight: '1.4',
                  fontFamily: 'var(--font-sans)',
                  letterSpacing: '-0.01em'
                }}>
                  {historyTimeline[activeTimelineIdx].title}
                </h3>

                <p style={{ 
                  fontSize: '1.02rem', 
                  color: 'rgba(255, 255, 255, 0.85)', 
                  lineHeight: '1.85', 
                  margin: 0,
                  whiteSpace: 'pre-line'
                }}>
                  {historyTimeline[activeTimelineIdx].desc}
                </p>
              </div>

              {/* Navigation Controls */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '40px', paddingTop: '24px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <button
                  onClick={() => setActiveTimelineIdx(prev => Math.max(0, prev - 1))}
                  disabled={activeTimelineIdx === 0}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: 'none',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '12px',
                    padding: '12px 24px',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    color: activeTimelineIdx === 0 ? 'rgba(255, 255, 255, 0.25)' : '#ffffff',
                    cursor: activeTimelineIdx === 0 ? 'not-allowed' : 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  ← Cột mốc trước
                </button>

                <button
                  onClick={() => setActiveTimelineIdx(prev => Math.min(historyTimeline.length - 1, prev + 1))}
                  disabled={activeTimelineIdx === historyTimeline.length - 1}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    backgroundColor: activeTimelineIdx === historyTimeline.length - 1 ? 'rgba(255, 255, 255, 0.1)' : 'var(--primary)',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '12px',
                    padding: '12px 24px',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    cursor: activeTimelineIdx === historyTimeline.length - 1 ? 'not-allowed' : 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  Cột mốc tiếp theo →
                </button>
              </div>
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
            <div style={{ marginBottom: '50px', textAlign: 'center' }}>
              <span className="section-eyebrow" style={{ color: 'var(--primary)', fontWeight: 800 }}>MẠNG LƯỚI ĐÀO TẠO</span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, color: 'var(--secondary)', marginTop: '10px', fontFamily: 'var(--font-sans)' }}><ScrollTypewriter text="Các phân hệ đào tạo" /></h2>
            </div>

            {/* 5 Equal Program Blocks Grid */}
            <div 
              style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', 
                gap: '24px',
                alignItems: 'stretch' 
              }}
            >
              {programsList.map((prog, idx) => (
                <div 
                  key={idx} 
                  className="program-list-card"
                  style={{ 
                    background: '#F8F5F0', 
                    border: '1px solid rgba(0,0,0,0.04)', 
                    borderRadius: '16px', 
                    padding: '32px 24px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.01)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div>
                    <div 
                      style={{ 
                        height: '56px', 
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: '20px',
                        position: 'relative'
                      }}
                    >
                      <Image src={prog.logo} alt={prog.title} width={240} height={56} style={{ objectFit: 'contain', objectPosition: 'left center', width: 'auto', height: '100%' }} />
                    </div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '4px', fontFamily: 'var(--font-sans)' }}>
                      {prog.title}
                    </h3>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 800, letterSpacing: '0.04em' }}>
                      {prog.subTitle}
                    </span>
                  </div>
                  
                  <ul style={{ marginTop: '28px', borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {prog.items.map((item, i) => (
                      <li key={i} style={{ fontSize: '0.88rem', color: 'var(--text-dark)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: prog.color, flexShrink: 0 }}></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
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
