'use client';

import { useState, useEffect, useRef } from 'react';
import ScrollTypewriter from '@/components/ScrollTypewriter';

function useCountUp(target, duration = 1800, started) {
  const [count, setCount] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!started) return;
    const startTime = performance.now();
    const tick = (now) => {
      const raw = Math.min((now - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - raw, 4);
      setCount(raw < 1 ? Math.round(ease * target) : target);
      if (raw < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [started, target, duration]);

  return count;
}

function AboutStatNumber({ target, suffix, isThousands, started, color = '#f37021' }) {
  const count = useCountUp(target, 1800, started);
  
  const formattedCount = isThousands 
    ? (count >= 1000 ? count.toLocaleString('vi-VN') : count)
    : count;

  return (
    <div style={{ 
      display: 'inline-flex', 
      alignItems: 'baseline', 
      gap: '4px', 
      fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
      color: color, 
      lineHeight: '1', 
      fontWeight: 800, 
      letterSpacing: '-0.03em' 
    }}>
      <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 800, color: color }}>
        {formattedCount}
      </span>
      {suffix && (
        <span style={{ 
          fontSize: '0.55em', 
          fontWeight: 800, 
          color: color, 
          fontFamily: 'var(--font-sans)',
          lineHeight: '1'
        }}>
          {suffix}
        </span>
      )}
    </div>
  );
}

export default function AboutPhilosophyStatsSection() {
  const [statsStarted, setStatsStarted] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsStarted(true);
        }
      },
      { threshold: 0.15 }
    );

    const currentRef = statsRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, []);

  return (
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
            Là đơn vị trực thuộc Tập đoàn FPT, FAI tự hào đồng hành cùng đất nước trong kỷ nguyên vươn mình, đưa thế hệ trẻ làm chủ các công nghệ cốt lõi, mỹ thuật số và truyền thông thực chiến thông qua các chương trình đào tạo chuyển giao quốc tế chuẩn mực nhất.
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
                  Đơn vị tiên phong liên kết đào tạo quốc tế của Tập đoàn FPT từ năm 1999, kiến tạo nguồn nhân lực chất lượng cao sẵn sàng làm việc toàn cầu.
                </p>
              </div>

              <div>
                <AboutStatNumber target={60000} isThousands={true} started={statsStarted} />
                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', lineHeight: '1.7', marginTop: '15px' }}>
                  Sinh viên đã lựa chọn
                </p>
              </div>

              <div>
                <AboutStatNumber target={97} suffix="%" color="var(--accent)" started={statsStarted} />
                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', lineHeight: '1.7', marginTop: '15px' }}>
                  Sinh viên có việc làm trước khi tốt nghiệp
                </p>
              </div>

              <div>
                <AboutStatNumber target={1000} suffix="+" started={statsStarted} />
                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', lineHeight: '1.7', marginTop: '15px' }}>
                  Đối tác doanh nghiệp ký kết hợp tác phát triển nhân lực hằng năm.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
