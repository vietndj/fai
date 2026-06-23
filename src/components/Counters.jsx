'use client';

import { useEffect, useRef, useState } from 'react';

/* ── 4 primary stats (hero display) ──────────────────── */
const primaryStats = [
  { number: 18,  suffix: '+',  label: 'Năm Đào Tạo Quốc Tế',       sub: 'Kinh nghiệm lâu đời nhất' },
  { number: 50,  suffix: 'K+', label: 'Sinh Viên Tốt Nghiệp',       sub: 'Từ 3 hệ thống chương trình' },
  { number: 95,  suffix: '%',  label: 'Có Việc Làm Sau 6 Tháng',    sub: 'Tỉ lệ đầu ra hàng đầu' },
  { number: 200, suffix: '+',  label: 'Doanh Nghiệp Tuyển Dụng',    sub: 'Mạng lưới đối tác toàn quốc' },
];

/* ── 2 supporting facts (compact bar below) ─────────── */
const supportingFacts = [
  { icon: '🏢', value: '30+', label: 'Trung tâm đào tạo toàn quốc' },
  { icon: '🌏', value: '3',   label: 'Hệ thống quốc tế liên kết' },
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
      {/* GT Sectra Medium number — editorial, prestigious */}
      <div className="primary-stat-number">
        <span style={{ fontFamily: 'var(--font-serif)', fontWeight: 500 }}>
          {count}
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
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="big-counters-block" ref={ref}>
      {/* AI aurora blobs */}
      <div className="counters-blob counters-blob-1" aria-hidden="true" />
      <div className="counters-blob counters-blob-2" aria-hidden="true" />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        {/* ── 4 Primary Stats ──────────────────────── */}
        <div className="primary-stats-grid">
          {primaryStats.map((stat, i) => (
            <PrimaryStat key={i} stat={stat} started={started} index={i} />
          ))}
        </div>

        {/* ── 2 Supporting Facts — compact bar ──── */}
        <div
          className="supporting-facts-bar"
          style={{
            opacity:    started ? 1 : 0,
            transform:  started ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.7s ease 0.6s, transform 0.7s ease 0.6s',
          }}
        >
          {supportingFacts.map((f, i) => (
            <div key={i} className="supporting-fact-item">
              <span className="supporting-fact-icon">{f.icon}</span>
              <strong className="supporting-fact-value">{f.value}</strong>
              <span className="supporting-fact-label">{f.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
