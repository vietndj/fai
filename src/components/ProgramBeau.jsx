'use client';

import { useState } from 'react';
import Link from 'next/link';
import ParticleCanvas from './ParticleCanvas';

const programs = [
  {
    num: '01',
    brand: 'APTECH',
    titleLine1: 'Software Engineering',
    titleLine2: '& Technology',
    subtitle: 'Lập Trình & Phát Triển Phần Mềm Quốc Tế',
    desc: 'Chương trình ADSE — chuẩn bằng cấp Ấn Độ được công nhận tại 40+ quốc gia. Đào tạo chuyên sâu từ lập trình đến AI, Cloud và Khoa học Dữ liệu trong môi trường Lab hiện đại.',
    tags: [
      'Lập trình viên Quốc tế (ADSE)',
      'Trí tuệ Nhân tạo & Machine Learning',
      'Khoa học Dữ liệu (Data Science)',
      'Java / .NET / Python / Cloud',
      'Mobile App Development',
    ],
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
    desc: 'Chương trình Arena Animation — sáng tạo kỹ thuật số đỉnh cao. Đào tạo thiết kế đồ hoạ thương hiệu, kỹ xảo điện ảnh 3D và phát triển game chuẩn quốc tế.',
    tags: [
      'Mỹ thuật Đa phương tiện (AAM)',
      'Kỹ xảo 3D & Điện ảnh',
      'UI/UX & Motion Graphics',
      'Thiết kế Game & Hoạt hình',
      'Đồ hoạ & Thương hiệu',
    ],
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
    desc: 'Đào tạo thực chiến 100% theo chuẩn Google & Meta. Trang bị tư duy chiến lược dữ liệu số, kỹ năng quản trị ngân sách và xây dựng phễu tăng trưởng doanh nghiệp.',
    tags: [
      'Digital Marketing Toàn Diện',
      'Quản trị Quảng cáo Google & Meta',
      'SEO / SEM & Content Strategy',
      'Data Analytics & Performance',
      'E-Commerce & Growth Hacking',
    ],
    stat: 'Google & Meta',
    statLabel: 'chuẩn chứng chỉ quốc tế',
    color: '#16a34a',
    href: '/dao-tao#skillking',
  },
];

export default function ProgramBeau() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="prog-beau-section">
      {/* Nền hạt chuyển động kiểu antigravity.google */}
      <ParticleCanvas className="prog-beau-particles" />

      {/* Header tiêu đề */}
      <div className="prog-beau-header-wrap" data-reveal>
        <span className="section-eyebrow">Chương trình đào tạo quốc tế</span>
        <h2 className="prog-beau-title-main">
          Ba Hệ Thống Đào Tạo Hàng Đầu
        </h2>
      </div>

      {/* Bố cục mới: 1 hàng cho mỗi hệ thống, không chia cột dọc ảnh */}
      <div className="prog-beau-rows-container">
        {programs.map((prog, idx) => (
          <div
            key={idx}
            className={`prog-beau-row-item ${hovered !== null && hovered !== idx ? 'is-dimmed' : ''}`}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Lớp nền trượt đổi màu nhẹ khi hover */}
            <div className="prog-beau-row-bg" style={{ '--row-color': prog.color + '0a' }} />
            
            {/* Thanh viền trái theo màu hệ thống */}
            <div className="prog-beau-row-accent-bar" style={{ backgroundColor: prog.color }} />

            <div className="prog-beau-row-inner">
              {/* Cột trái: Số + Tên hệ thống (30%) */}
              <div className="prog-beau-row-left">
                <span className="prog-beau-row-num" style={{ color: prog.color }}>
                  {prog.num}
                </span>
                <div className="prog-beau-row-title-box">
                  <span className="prog-beau-row-brand" style={{ color: prog.color }}>
                    {prog.brand}
                  </span>
                  <h3 className="prog-beau-row-title">
                    {prog.titleLine1} {prog.titleLine2}
                  </h3>
                </div>
              </div>

              {/* Cột phải: Mô tả + Tags + Chỉ số & CTA (70%) */}
              <div className="prog-beau-row-right">
                <div className="prog-beau-row-desc-box">
                  <h4 className="prog-beau-row-subtitle">{prog.subtitle}</h4>
                  <p className="prog-beau-row-desc">{prog.desc}</p>
                </div>

                {/* Các tags môn học ngang */}
                <div className="prog-beau-row-tags-wrap">
                  <ul className="prog-beau-row-tags">
                    {prog.tags.map((t, i) => (
                      <li key={i}>{t}</li>
                    ))}
                  </ul>
                </div>

                {/* Phần chân hàng: Thống kê & CTA */}
                <div className="prog-beau-row-footer">
                  <div className="prog-beau-row-stat">
                    <strong style={{ color: prog.color }}>{prog.stat}</strong>
                    <span>{prog.statLabel}</span>
                  </div>
                  
                  <Link href={prog.href} className="prog-beau-row-cta" style={{ color: prog.color }}>
                    Khám phá chương trình
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
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
    </section>
  );
}

