'use client';

import { useEffect, useRef, useState } from 'react';

const stats = [
  { number: 18,  suffix: '+', label: 'Năm Đào Tạo Quốc Tế', icon: '⏱' },
  { number: 50000, suffix: '+', label: 'Sinh Viên Tốt Nghiệp', icon: '🎓' },
  { number: 95,  suffix: '%', label: 'Có Việc Làm Sau 6 Tháng', icon: '💼' },
  { number: 200, suffix: '+', label: 'Doanh Nghiệp Tuyển Dụng', icon: '🤝' },
  { number: 30,  suffix: '+', label: 'Trung Tâm Toàn Quốc', icon: '📍' },
  { number: 3,   suffix: '',  label: 'Hệ Thống Quốc Tế Liên Kết', icon: '🌏' },
];

function useCountUp(target, duration = 2000, started) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [started, target, duration]);
  return count;
}

function StatItem({ stat, started, index }) {
  const count = useCountUp(stat.number, 2000 + index * 200, started);
  const formatted = stat.number >= 1000
    ? (count >= 1000 ? (count / 1000).toFixed(0) + '.000' : count.toString())
    : count.toString();

  return (
    <div className="stat-item" style={{ animationDelay: `${index * 0.1}s` }}>
      <span className="stat-icon">{stat.icon}</span>
      <span className="stat-number">
        {formatted}{stat.suffix}
      </span>
      <span className="stat-label">{stat.label}</span>
    </div>
  );
}

export default function Counters() {
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="counters-section" ref={ref}>
      <div className="counters-inner">
        <div className="counters-eyebrow">Bằng chứng từ 18 năm</div>
        <h2 className="counters-headline">Con Số Nói Lên Tất Cả</h2>
        <div className="counters-grid">
          {stats.map((stat, i) => (
            <StatItem key={i} stat={stat} started={started} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
