'use client';

import { useEffect, useRef, useState } from 'react';
import { Building2, Globe } from 'lucide-react';

/* ── 4 primary stats (hero display) ──────────────────── */
const primaryStats = [
  { number: 27,  suffix: '+',  label: 'Năm kinh nghiệm đào tạo',       sub: 'Phát triển nguồn nhân lực chất lượng cao' },
  { number: 60,  suffix: 'k+', label: 'Sinh viên lựa chọn',       sub: 'Học sinh, sinh viên và người đi làm tin dùng' },
  { number: 1000,  suffix: '+',  label: 'Đối tác tuyển dụng',    sub: 'Mạng lưới kết nối việc làm rộng khắp' },
  { number: 97, suffix: '% +',  label: 'Sinh viên có việc làm',    sub: 'trước khi tốt nghiệp' },
];

/* ── 2 supporting facts (compact bar below) ─────────── */
const supportingFacts = [
  { icon: Building2, value: '30+', label: 'Trung tâm đào tạo toàn quốc' },
  { icon: Globe, value: '5',   label: 'Hệ thống quốc tế liên kết' },
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

function PrimaryStat({ stat, started, index }) {
  const count = useCountUp(stat.number, 1800, started);

  return (
    <div
      className="primary-stat-item"
      style={{
        opacity:    started ? 1 : 0,
        transform:  started ? 'translateY(0)' : 'translateY(40px)',
        transition: `opacity 0.7s ease ${index * 0.12}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${index * 0.12}s`,
      }}
    >
      <div className="primary-stat-number">
        <span style={{ fontFamily: 'var(--font-serif)', fontWeight: 500 }}>
          {stat.number >= 1000 ? (count >= 1000 ? count.toLocaleString() : count) : count}
        </span>
        <span className="primary-stat-suffix">{stat.suffix}</span>
      </div>
      <p className="primary-stat-label">{stat.label}</p>
      <p className="primary-stat-sub">{stat.sub}</p>
    </div>
  );
}

export default function Counters() {
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="counters-section" ref={ref}>
      <div className="container">
        
        {/* Main Grid */}
        <div className="primary-stats-grid">
          {primaryStats.map((stat, i) => (
            <PrimaryStat key={i} stat={stat} started={started} index={i} />
          ))}
        </div>

        {/* Fact Ribbon */}
        <div 
          className="fact-ribbon"
          style={{
            opacity:    started ? 1 : 0,
            transform:  started ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease 0.5s, transform 0.8s ease 0.5s',
          }}
        >
          {supportingFacts.map((fact, i) => {
            const Icon = fact.icon;
            return (
              <div key={i} className="fact-item">
                <Icon size={20} className="fact-icon" />
                <span className="fact-val">{fact.value}</span>
                <span className="fact-lbl">{fact.label}</span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
