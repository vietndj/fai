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

/**
 * Làm tròn số khi đang chạy animation để tránh giật chữ:
 * - Số lớn hơn 10.000 → làm tròn tới 1.000
 * - Số lớn hơn 1.000  → làm tròn tới 100
 * - Còn lại giữ nguyên
 */
function smoothRound(current, target) {
  if (target >= 10000) return Math.round(current / 1000) * 1000;
  if (target >= 1000)  return Math.round(current / 100)  * 100;
  return Math.round(current);
}

function formatNumber(n) {
  if (n >= 1000) {
    // Dùng dấu chấm thủ công để tránh locale gây width thay đổi
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }
  return n.toString();
}

function useCountUp(target, duration = 2400, started) {
  const [count, setCount] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!started) { setCount(0); return; }

    const startTime = performance.now();

    const tick = (now) => {
      const elapsed = now - startTime;
      const raw = Math.min(elapsed / duration, 1);
      // easeOutQuart — mượt hơn easeOutExpo, không giật đầu
      const ease = 1 - Math.pow(1 - raw, 4);
      const current = ease * target;
      setCount(raw < 1 ? smoothRound(current, target) : target);
      if (raw < 1) rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [started, target, duration]);

  return count;
}

function StatItem({ stat, started, index }) {
  const count = useCountUp(stat.number, 2400, started);

  return (
    <div
      className="big-stat-item"
      style={{
        opacity:    started ? 1 : 0,
        transform:  started ? 'translateY(0)' : 'translateY(40px)',
        transition: `opacity 0.7s ease ${index * 0.08}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${index * 0.08}s`,
      }}
    >
      <span className="big-stat-number">
        {/* Fix: luôn render cùng cấu trúc DOM để tránh layout shift */}
        <span className="big-stat-digits">{formatNumber(count)}</span>
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
