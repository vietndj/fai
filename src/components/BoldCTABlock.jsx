'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import ParticleCanvas from './ParticleCanvas';
import { Trophy, Globe, Briefcase, Handshake, ArrowRight } from 'lucide-react';

const highlights = [
  { icon: Trophy, text: 'Top 1 đào tạo CNTT\ntư nhân Việt Nam' },
  { icon: Globe, text: 'Chứng chỉ được công nhận\ntại 40+ quốc gia' },
  { icon: Briefcase, text: '97% sinh viên có việc làm\ntrước khi tốt nghiệp' },
  { icon: Handshake, text: '1000+ doanh nghiệp\nký kết tuyển dụng' },
];

export default function BoldCTABlock() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bold-cta-block" ref={ref}>
      {/* Nền hạt chuyển động kiểu antigravity.google giống ở trên */}
      <ParticleCanvas className="bold-cta-particles" />

      {/* Giant background text */}
      <div className="bold-cta-bg-text" aria-hidden="true">FAI</div>

      <div className="container bold-cta-inner">
        {/* Left content */}
        <div
          className="bold-cta-left"
          style={{
            opacity:    visible ? 1 : 0,
            transform:  visible ? 'translateX(0)' : 'translateX(-60px)',
            transition: 'opacity 0.85s ease 0.1s, transform 0.85s cubic-bezier(0.16,1,0.3,1) 0.1s',
          }}
        >
          <span className="bold-cta-eyebrow">Tại sao chọn FAI?</span>
          <h2 className="bold-cta-headline">
            27+ năm kiến tạo<br />
            chuyên gia tương lai
          </h2>
          <p className="bold-cta-desc">
            Không chỉ là trường học — FAI là bệ phóng cho sự nghiệp quốc tế.
            Từ sinh viên năm nhất, bạn đã được thực chiến với dự án thật,
            mentor là chuyên gia ngành và mạng lưới 1000+ doanh nghiệp tuyển dụng.
          </p>
          <div className="bold-cta-actions">
            <Link href="/tuyen-sinh" className="bold-cta-btn bold-cta-btn--primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              Đăng ký nhập học 2026
              <ArrowRight size={20} strokeWidth={2.5} />
            </Link>
            <Link href="/ve-fai" className="bold-cta-btn bold-cta-btn--outline">
              Tìm hiểu về FAI
            </Link>
          </div>
        </div>

        {/* Right: highlight cards */}
        <div className="bold-cta-right">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="bold-highlight-card"
              style={{
                opacity:    visible ? 1 : 0,
                transform:  visible ? 'translateY(0)' : 'translateY(40px)',
                transition: `opacity 0.7s ease ${0.2 + i * 0.1}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${0.2 + i * 0.1}s`,
              }}
            >
              <span className="bold-highlight-icon">
                {(() => {
                  const Icon = item.icon;
                  return <Icon size={32} strokeWidth={1.5} />;
                })()}
              </span>
              <span className="bold-highlight-text">
                {item.text.split('\n').map((l, j) => <span key={j}>{l}</span>)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
