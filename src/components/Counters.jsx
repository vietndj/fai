'use client';

import { useEffect, useRef, useState } from 'react';

const stats = [
  { number: 18,    suffix: '+', label: 'Năm Đào Tạo\nQuốc Tế' },
  { number: 50000, suffix: '+', label: 'Sinh Viên\nTốt Nghiệp' },
  { number: 95,    suffix: '%', label: 'Có Việc Làm\nSau 6 Tháng' },
  { number: 200,   suffix: '+', label: 'Doanh Nghiệp\nTuyển Dụng' },
  { number: 30,    suffix: '+', label: 'Trung Tâm\nToàn Quốc' },
  { number: 3,     suffix: '',  label: 'Hệ Thống\nQuốc Tế Liên Kết' },
];

function useCountUp(target, duration = 2200, started) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) { setCount(0); return; }
    let raf;
    const startTime = performance.now();
    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(ease * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, target, duration]);
  return count;
}

function StatItem({ stat, started, index }) {
  const count = useCountUp(stat.number, 2200, started);
  const display = stat.number >= 1000
    ? count.toLocaleString('vi-VN')
    : count.toString();

  return (
    <div
      className="big-stat-item"
      style={{
        opacity: started ? 1 : 0,
        transform: started ? 'translateY(0)' : 'translateY(40px)',
        transition: `opacity 0.7s ease ${index * 0.1}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${index * 0.1}s`,
      }}
    >
      <span className="big-stat-number">{display}{stat.suffix}</span>
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
      <div className="container">
        <div className="big-counters-grid">
          {stats.map((stat, i) => (
            <StatItem key={i} stat={stat} started={started} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
