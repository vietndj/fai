'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ParticleCanvas from './ParticleCanvas';

const programs = [
  {
    num: '01',
    brand: 'FPT APTECH',
    logo: '/logo_aptech.png',
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
    image: '/fai_banner_aptech_v2.png',
    stat: '28+',
    statLabel: 'năm đào tạo toàn cầu',
    color: '#e31a22',
    href: '/dao-tao/aptech',
  },
  {
    num: '02',
    brand: 'FPT ARENA',
    logo: '/logo_arena.png',
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
    image: '/fai_banner_arena_v2.png',
    stat: '20+',
    statLabel: 'năm tại Việt Nam',
    color: '#ffb600',
    href: '/dao-tao/arena',
  },
  {
    num: '03',
    brand: 'FPT SKILLKING',
    logo: '/logo_skillking.png',
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
    image: '/fai_banner_skillking_v2.png',
    stat: 'Google & Meta',
    statLabel: 'chuẩn chứng chỉ quốc tế',
    color: '#09529c',
    href: '/dao-tao/skillking',
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

      {/* ── TWO-COLUMN GRID ── */}
      <div className="prog-beau-container-full">
        <div className="prog-beau-list">
          {programs.map((prog, idx) => (
            <div
              key={idx}
              className={`prog-beau-item ${
                active === idx ? 'is-active' : ''
              } ${
                isHovering && active !== idx ? 'is-dimmed' : ''
              }`}
              onMouseEnter={() => {
                setActive(idx);
                setIsHovering(true);
              }}
              onMouseLeave={() => {
                setIsHovering(false);
              }}
            >
              <div className="prog-beau-item-left">
                <span className="prog-num" style={{ color: prog.color }}>{prog.num}</span>
                <div className="prog-meta">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <Image src={prog.logo} alt={prog.brand} width={24} height={24} style={{ objectFit: 'contain' }} />
                    <span className="prog-brand" style={{ color: prog.color }}>{prog.brand}</span>
                  </div>
                  <h3 className="prog-title">
                    {prog.titleLine1} <br />
                    <span>{prog.titleLine2}</span>
                  </h3>
                </div>
              </div>

              <div className="prog-beau-item-content">
                <p className="prog-desc">{prog.desc}</p>
                <div className="prog-tags-row">
                  {prog.tags.map((t, tIdx) => (
                    <span key={tIdx} className="prog-tag">{t}</span>
                  ))}
                </div>
              </div>

              <div className="prog-beau-item-right">
                <div className="prog-stat-box">
                  <span className="prog-stat" style={{ color: prog.color }}>{prog.stat}</span>
                  <span className="prog-stat-lbl">{prog.statLabel}</span>
                </div>
                <Link href={prog.href} className="prog-arrow-btn" style={{ '--btn-color': prog.color }} aria-label={`Detail for ${prog.brand}`}>
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
