'use client';

import { useEffect, useRef, useState } from 'react';

const stats = [
  { number: 18,  suffix: '+',  label: 'Năm Đào Tạo\nQuốc Tế' },
  { number: 50,  suffix: 'K+', label: 'Sinh Viên\nTốt Nghiệp' },   // 50K thay vì 50.000
  { number: 95,  suffix: '%',  label: 'Có Việc Làm\nSau 6 Tháng' },
  { number: 200, suffix: '+',  label: 'Doanh Nghiệp\nTuyển Dụng' },
  { number: 30,  suffix: '+',  label: 'Trung Tâm\nToàn Quốc' },
  { number: 3,   suffix: '',   label: 'Hệ Thống\nQuốc Tế Liên Kết' },
];

function useCountUp(target, duration = 2000, started) {
  const [count, setCount] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!started) { setCount(0); return; }
    const startTime = performance.now();
    const tick = (now) => {
      const raw  = Math.min((now - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - raw, 4); // easeOutQuart
      setCount(raw < 1 ? Math.round(ease * target) : target);
      if (raw < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [started, target, duration]);

  return count;
}

function StatItem({ stat, started, index }) {
  const count = useCountUp(stat.number, 2000, started);

  return (
    <div
      className="big-stat-item"
      style={{
        opacity:    started ? 1 : 0,
        transform:  started ? 'translateY(0)' : 'translateY(40px)',
        transition: `opacity 0.7s ease ${index * 0.1}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${index * 0.1}s`,
      }}
    >
      {/* GT Sectra Medium cho số — editorial, prestigious */}
      <span className="big-stat-number">
        <span className="big-stat-digits" style={{ fontFamily: 'var(--font-serif)', fontWeight: 500 }}>
          {count}
        </span>
        <span className="big-stat-suffix">{stat.suffix}</span>
      </span>
      <span className="big-stat-label">
        {stat.label.split('\n').map((l, i) => <span key={i}>{l}</span>)}
      </span>
    </div>
  );
}

export default function Counters() {
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.15 }
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
        <div className="big-counters-grid">
          {stats.map((stat, i) => (
            <StatItem key={i} stat={stat} started={started} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
