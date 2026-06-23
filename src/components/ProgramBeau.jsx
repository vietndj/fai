'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ParticleCanvas from './ParticleCanvas';

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
  const [active, setActive]       = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  return (
    <section className="prog-beau-section">
      {/* antigravity.google style particles — nền */}
      <ParticleCanvas className="prog-beau-particles" />

      {/* ── HEADER — full width, OUTSIDE grid ── */}
      <div className="prog-beau-header-wrap" data-reveal>
        <span className="section-eyebrow">Chương trình đào tạo quốc tế</span>
        <h2 className="prog-beau-title-main">
          Ba Hệ Thống<br />Đào Tạo Hàng Đầu
        </h2>
      </div>

      {/* ── TWO-COLUMN GRID: list (left) + sticky image (right) ── */}
      <div className="prog-beau-container">

        {/* LEFT: program list */}
        <div className="prog-beau-left-col">
          <div className="prog-beau-list">
            {programs.map((prog, idx) => (
              <div
                key={idx}
                className={`prog-beau-item ${
                  isHovering && active !== idx ? 'is-dimmed' : ''
                } ${active === idx && isHovering ? 'is-hovered' : ''}`}
                onMouseEnter={() => { setActive(idx); setIsHovering(true); }}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className="prog-beau-item-inner">
                  {/* Number + Title */}
                  <div className="prog-beau-title-col">
                    <span className="prog-beau-num" style={{ color: prog.color }}>
                      {prog.num}
                    </span>
                    <div>
                      <span className="prog-beau-brand-tag" style={{ color: prog.color }}>
                        {prog.brand}
                      </span>
                      <h2 className="prog-beau-item-title">
                        {prog.titleLine1}<br />{prog.titleLine2}
                      </h2>
                    </div>
                    <div className="prog-beau-line" style={{ backgroundColor: prog.color }} />
                  </div>

                  {/* Content — revealed on hover */}
                  <div className="prog-beau-content-col">
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

        {/* RIGHT: sticky image panel — aligned with list start */}
        <div className="prog-beau-right-col">
          <div className="prog-beau-img-panel">
            {programs.map((prog, idx) => (
              <div
                key={idx}
                className="prog-beau-img-layer"
                style={{
                  opacity:   active === idx ? 1 : 0,
                  transform: active === idx ? 'scale(1) translateY(0)' : 'scale(1.04) translateY(10px)',
                }}
              >
                <Image
                  src={prog.image}
                  alt={prog.brand}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority={idx === 0}
                />
              </div>
            ))}
            <div
              className="prog-beau-img-accent"
              style={{ backgroundColor: programs[active].color }}
            />
            <div className="prog-beau-img-label">
              <span className="prog-beau-img-brand" style={{ color: programs[active].color }}>
                {programs[active].brand}
              </span>
              <span className="prog-beau-img-tagline">
                {programs[active].subtitle}
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
