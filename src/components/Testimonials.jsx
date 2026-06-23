'use client';

import { useState } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    quote: 'Lập trình không chỉ là gõ code, đó là nghệ thuật giải quyết vấn đề. Tại FAI, tôi được định hướng tư duy giải thuật mở rộng — giúp tôi tự tin dẫn dắt các dự án quốc tế.',
    author: 'TS. Trần Đình Toàn',
    role: 'Phó Trưởng Ban Đào Tạo Aptech\nGiám đốc Trung tâm Công nghệ Phần mềm FAI',
    avatar: '/fai_student_life_1.png',
    brand: 'APTECH',
    brandColor: '#1a6ed8',
  },
  {
    quote: 'Kiến trúc và thiết kế đồ họa có tác động mạnh mẽ tới tư duy của con người. Tại Arena, chúng tôi không dạy vẽ — chúng tôi dạy cách nhìn và cảm nhận thế giới.',
    author: 'Kỹ sư Trương Ngọc Kim',
    role: 'Chủ tịch Hội đồng Khoa học Arena Multimedia\nNguyên Giảng viên Đại học Mỹ thuật Hà Nội',
    avatar: '/fai_banner_arena.png',
    brand: 'ARENA',
    brandColor: '#e8741e',
  },
  {
    quote: 'Digital Marketing thay đổi mỗi ngày. Chúng tôi không chỉ dạy chạy quảng cáo — chúng tôi dạy sinh viên thấu hiểu tâm lý khách hàng và phân tích dữ liệu thực chiến.',
    author: 'ThS. Nguyễn Thị Mai',
    role: 'Trưởng Bộ Môn Chiến Lược Tiếp Thị Số\nFPT Skillking Vietnam',
    avatar: '/fai_banner_skillking.png',
    brand: 'SKILLKING',
    brandColor: '#16a34a',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const t = testimonials[current];

  return (
    <section className="editorial-section">
      <div className="container editorial-grid">
        {/* Left: Content */}
        <div className="editorial-content">
          <span className="section-eyebrow" style={{ color: t.brandColor }}>
            {t.brand} — Người Truyền Cảm Hứng
          </span>
          <blockquote className="editorial-quote">
            <span className="quote-mark">&ldquo;</span>
            {t.quote}
            <span className="quote-mark quote-mark--close">&rdquo;</span>
          </blockquote>

          <div className="editorial-author">
            <div className="editorial-avatar">
              <Image src={t.avatar} alt={t.author} width={64} height={64}
                style={{ objectFit: 'cover', borderRadius: '50%' }} />
              <span className="editorial-brand-dot" style={{ background: t.brandColor }} />
            </div>
            <div>
              <strong className="editorial-author-name">{t.author}</strong>
              <span className="editorial-author-role">
                {t.role.split('\n').map((line, i) => <span key={i}>{line}</span>)}
              </span>
            </div>
          </div>

          <div className="editorial-controls">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`editorial-dot ${i === current ? 'active' : ''}`}
                onClick={() => setCurrent(i)}
                style={i === current ? { background: t.brandColor, width: 36 } : {}}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
            <div className="editorial-nav-btns">
              <button className="editorial-nav-btn" onClick={() => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length)}>←</button>
              <button className="editorial-nav-btn" onClick={() => setCurrent((p) => (p + 1) % testimonials.length)}>→</button>
            </div>
          </div>
        </div>

        {/* Right: Portrait */}
        <div className="editorial-portrait-col">
          <div className="editorial-portrait-frame">
            <Image src={t.avatar} alt={t.author} fill style={{ objectFit: 'cover' }} />
            <div className="editorial-portrait-overlay" style={{ background: `linear-gradient(160deg, transparent 40%, ${t.brandColor}33 100%)` }} />
            <div className="editorial-portrait-label" style={{ borderColor: t.brandColor }}>
              <span style={{ color: t.brandColor }}>{t.brand}</span>
              <span>{t.author.split(' ').slice(-2).join(' ')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
