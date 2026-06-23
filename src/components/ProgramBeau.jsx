'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const programs = [
  {
    num: '01',
    brand: 'APTECH',
    titleLine1: 'Software Engineering',
    titleLine2: '& Technology',
    subtitle: 'Lập Trình & Phát Triển Phần Mềm Quốc Tế',
    desc: 'Chương trình ADSE — chuẩn bằng cấp Ấn Độ được công nhận tại 40+ quốc gia. Đào tạo chuyên sâu từ nền tảng lập trình đến AI, Cloud và Khoa học Dữ liệu trong môi trường Lab hiện đại chuẩn doanh nghiệp.',
    tags: [
      'Lập trình viên Quốc tế (ADSE)',
      'Trí tuệ Nhân tạo & Machine Learning',
      'Khoa học Dữ liệu (Data Science)',
      'Java / .NET / Python / Cloud',
      'Mobile App Development',
    ],
    image: '/fai_banner_aptech.png',
    stat: '28+',
    statLabel: 'năm đào tạo toàn cầu',
    color: '#1a6ed8',
    href: '/dao-tao#aptech',
  },
  {
    num: '02',
    brand: 'ARENA',
    titleLine1: 'Multimedia Design',
    titleLine2: '& Creative Arts',
    subtitle: 'Thiết Kế & Nghệ Thuật Kỹ Thuật Số',
    desc: 'Chương trình Arena Animation — nơi tư duy sáng tạo gặp công nghệ số. Từ đồ hoạ thương hiệu, thiết kế web đến kỹ xảo điện ảnh 3D và thiết kế game — đào tạo chuyên gia sáng tạo đẳng cấp quốc tế.',
    tags: [
      'Mỹ thuật Đa phương tiện (AAM)',
      'Kỹ xảo 3D & Điện ảnh',
      'UI/UX & Motion Graphics',
      'Thiết kế Game & Hoạt hình',
      'Thiết kế Đồ hoạ & Nhận diện Thương hiệu',
    ],
    image: '/fai_banner_arena.png',
    stat: '20+',
    statLabel: 'năm tại Việt Nam',
    color: '#e8741e',
    href: '/dao-tao#arena',
  },
  {
    num: '03',
    brand: 'SKILLKING',
    titleLine1: 'Digital Marketing',
    titleLine2: '& Business Growth',
    subtitle: 'Chiến Lược Tiếp Thị Số & Tăng Trưởng',
    desc: 'Đào tạo 100% thực chiến theo chuẩn Google & Meta. Trang bị tư duy chiến lược dữ liệu, kỹ năng quản trị ngân sách và xây dựng phễu tăng trưởng toàn diện trong kỷ nguyên số.',
    tags: [
      'Digital Marketing Toàn Diện',
      'Quản trị Quảng cáo Google & Meta',
      'SEO / SEM & Content Strategy',
      'Data Analytics & Performance',
      'E-Commerce & Growth Hacking',
    ],
    image: '/fai_banner_skillking.png',
    stat: 'Google & Meta',
    statLabel: 'chuẩn chứng chỉ quốc tế',
    color: '#16a34a',
    href: '/dao-tao#skillking',
  },
];

export default function ProgramBeau() {
  const [hovered, setHovered] = useState(null);
  // Track cursor for floating image
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  const active = hovered !== null ? programs[hovered] : null;

  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setCursor({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <section
      className="prog-beau-section"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
    >
      {/* Floating image that follows cursor */}
      <div
        className="prog-beau-cursor-img"
        style={{
          left: cursor.x,
          top: cursor.y,
          opacity: hovered !== null ? 1 : 0,
          transform: hovered !== null
            ? 'translate(-50%, -50%) scale(1) rotate(-4deg)'
            : 'translate(-50%, -50%) scale(0.6) rotate(-4deg)',
        }}
      >
        {programs.map((p, i) => (
          <div
            key={i}
            className="cursor-img-frame"
            style={{ opacity: hovered === i ? 1 : 0, transition: 'opacity 0.35s ease' }}
          >
            <Image src={p.image} alt={p.brand} fill style={{ objectFit: 'cover' }} />
          </div>
        ))}
      </div>

      <div className="container">
        {/* Section header */}
        <div className="prog-beau-header" data-reveal>
          <span className="section-eyebrow">Chương trình đào tạo quốc tế</span>
          <h2 className="prog-beau-title-main">
            Ba Hệ Thống<br />Đào Tạo Hàng Đầu
          </h2>
        </div>

        {/* Item list — beau.vn style */}
        <div className="prog-beau-list">
          {programs.map((prog, idx) => (
            <div
              key={idx}
              className={`prog-beau-item ${hovered !== null && hovered !== idx ? 'is-dimmed' : ''} ${hovered === idx ? 'is-hovered' : ''}`}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="prog-beau-item-inner">
                {/* LEFT: Big title (col-8 equivalent) */}
                <div className="prog-beau-left">
                  <div className="prog-beau-num" style={{ color: prog.color }}>
                    {prog.num}
                  </div>
                  <div className="prog-beau-brand-wrap">
                    <span className="prog-beau-brand-tag" style={{ color: prog.color }}>
                      {prog.brand}
                    </span>
                    <h2 className="prog-beau-item-title">
                      {prog.titleLine1}<br />
                      {prog.titleLine2}
                    </h2>
                  </div>
                  {/* Hover: progress line */}
                  <div
                    className="prog-beau-line"
                    style={{ backgroundColor: prog.color }}
                  />
                </div>

                {/* RIGHT: Content (col-4 equivalent) */}
                <div className="prog-beau-right">
                  <p className="prog-beau-subtitle">{prog.subtitle}</p>
                  <p className="prog-beau-desc">{prog.desc}</p>
                  <ul className="prog-beau-tags">
                    {prog.tags.map((t, i) => (
                      <li key={i}>{t}</li>
                    ))}
                  </ul>
                  <div className="prog-beau-meta">
                    <div className="prog-beau-stat">
                      <strong style={{ color: prog.color }}>{prog.stat}</strong>
                      <span>{prog.statLabel}</span>
                    </div>
                    <Link href={prog.href} className="prog-beau-cta" style={{ color: prog.color }}>
                      Khám phá chương trình
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="5" y1="12" x2="19" y2="12"/>
                        <polyline points="12 5 19 12 12 19"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
