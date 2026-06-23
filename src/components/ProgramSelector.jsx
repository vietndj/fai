'use client';

import { useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const pillars = [
  {
    id: 'aptech',
    brand: 'APTECH',
    logo: '{ }',
    color: '#1a6ed8',
    colorLight: 'rgba(26,110,216,0.08)',
    tagline: 'Lập Trình & Công Nghệ',
    headline: 'Trở Thành Lập Trình Viên Quốc Tế',
    desc: 'Chương trình ADSE — chuẩn bằng cấp Ấn Độ. Đào tạo chuyên sâu về phát triển phần mềm, AI và Khoa học dữ liệu trong môi trường Lab hiện đại.',
    image: '/fai_banner_aptech.png',
    courses: ['Lập trình viên Quốc tế (ADSE)', 'Trí tuệ Nhân tạo (AI)', 'Khoa học Dữ liệu', 'Lập trình Java / .NET'],
    stat: '28+ năm toàn cầu',
    href: '/dao-tao#aptech',
  },
  {
    id: 'arena',
    brand: 'ARENA',
    logo: '✦',
    color: '#e8741e',
    colorLight: 'rgba(232,116,30,0.08)',
    tagline: 'Thiết Kế & Mỹ Thuật',
    headline: 'Kiến Tạo Nghệ Thuật Kỹ Thuật Số',
    desc: 'Chương trình chuẩn Arena Animation Ấn Độ. Từ Đồ họa, Web, đến Kỹ xảo 3D và Thiết kế Game — nơi sáng tạo không có giới hạn.',
    image: '/fai_banner_arena.png',
    courses: ['Mỹ thuật Đa phương tiện', 'Thiết kế Đồ họa & Web', 'Kỹ xảo Điện ảnh 3D', 'Thiết kế Game & Hoạt hình'],
    stat: '15+ năm tại Việt Nam',
    href: '/dao-tao#arena',
  },
  {
    id: 'skillking',
    brand: 'SKILLKING',
    logo: '◈',
    color: '#16a34a',
    colorLight: 'rgba(22,163,74,0.08)',
    tagline: 'Digital Marketing',
    headline: 'Thực Chiến Marketing Số Toàn Diện',
    desc: 'Chương trình thực chiến 100% theo chuẩn doanh nghiệp. Từ SEO, Content, đến quản trị quảng cáo số và phân tích dữ liệu thị trường.',
    image: '/fai_banner_skillking.png',
    courses: ['Chuyên viên Digital Marketing', 'Quản trị Quảng cáo số', 'Chiến lược Nội dung (Content)', 'SEO & Website Optimization'],
    stat: 'Chuẩn Google & Meta',
    href: '/dao-tao#skillking',
  },
];

/* 3D Tilt card wrapper */
function TiltCard({ pillar, active, onEnter, onLeave }) {
  const cardRef = useRef(null);
  const isActive = active === pillar.id;

  const handleMouseMove = useCallback((e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width  - 0.5);
    const y = ((e.clientY - rect.top)  / rect.height - 0.5);
    el.style.transform = `perspective(900px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg) scale(1.02)`;
    // Light reflection
    const shine = el.querySelector('.pillar-shine');
    if (shine) {
      shine.style.background = `radial-gradient(circle at ${(x + 0.5) * 100}% ${(y + 0.5) * 100}%, rgba(255,255,255,0.12) 0%, transparent 60%)`;
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    const el = cardRef.current;
    if (!el) return;
    el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)';
    const shine = el.querySelector('.pillar-shine');
    if (shine) shine.style.background = 'transparent';
    onLeave();
  }, [onLeave]);

  return (
    <div
      ref={cardRef}
      className={`pillar-card ${isActive ? 'is-active' : ''}`}
      style={{
        '--pillar-color': pillar.color,
        '--pillar-light': pillar.colorLight,
        transition: 'transform 0.18s ease, box-shadow 0.3s ease',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => onEnter(pillar.id)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Shine overlay for 3D light effect */}
      <div className="pillar-shine" />

      {/* Background image with overlay */}
      <div className="pillar-bg">
        <Image src={pillar.image} alt={pillar.brand} fill style={{ objectFit: 'cover' }} />
        <div className="pillar-overlay" />
      </div>

      {/* Default state */}
      <div className="pillar-default">
        <span className="pillar-logo-icon">{pillar.logo}</span>
        <div>
          <span className="pillar-brand-tag">{pillar.brand}</span>
          <h3 className="pillar-tagline">{pillar.tagline}</h3>
        </div>
      </div>

      {/* Hover state */}
      <div className="pillar-hover-content">
        <span className="pillar-brand-tag-sm">{pillar.brand}</span>
        <h3 className="pillar-headline">{pillar.headline}</h3>
        <p className="pillar-desc">{pillar.desc}</p>
        <ul className="pillar-courses">
          {pillar.courses.map((c, i) => (
            <li key={i}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              {c}
            </li>
          ))}
        </ul>
        <div className="pillar-footer">
          <span className="pillar-stat">{pillar.stat}</span>
          <Link href={pillar.href} className="pillar-cta-btn">
            Tìm hiểu ngay
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function ProgramSelector() {
  const [active, setActive] = useState(null);

  return (
    <section className="pillars-section">
      <div className="container">
        <div className="pillars-header" data-reveal>
          <span className="section-eyebrow">Chương trình đào tạo quốc tế</span>
          <h2 className="section-headline">Ba Trụ Cột Đào Tạo</h2>
          <p className="section-subhead">
            FAI quy tụ 3 hệ thống đào tạo hàng đầu — mỗi trụ cột là một thế giới chuyên biệt, cùng chung một chuẩn mực quốc tế.
          </p>
        </div>

        <div className="pillars-grid">
          {pillars.map((pillar) => (
            <TiltCard
              key={pillar.id}
              pillar={pillar}
              active={active}
              onEnter={setActive}
              onLeave={() => setActive(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
