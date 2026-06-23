'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const slides = [
  {
    image: '/fai_banner_aptech.png',
    eyebrow: 'FPT ACADEMY INTERNATIONAL — 18 NĂM DẪN ĐẦU',
    title: 'Kiến Tạo Chuyên Gia\nCông Nghệ & Sáng Tạo\nToàn Cầu',
    desc: 'Hệ thống đào tạo quốc tế chuẩn FPT — NIIT Ấn Độ. Nơi 50.000+ sinh viên đã bắt đầu hành trình chinh phục ngành công nghệ, thiết kế và marketing số.',
    cta1: { text: 'Khám phá chương trình', href: '/dao-tao' },
    cta2: { text: 'Đặt lịch tư vấn miễn phí', href: '/tuyen-sinh' },
    slideNum: '01',
  },
  {
    image: '/fai_banner_arena.png',
    eyebrow: 'ARENA MULTIMEDIA — THIẾT KẾ & MỸ THUẬT',
    title: 'Nơi Chắp Cánh\nĐam Mê Sáng Tạo\nKỹ Thuật Số',
    desc: 'Đào tạo toàn diện từ Thiết kế Đồ họa, Kỹ xảo Điện ảnh 3D đến Thiết kế Game — chuẩn mực quốc tế từ Arena Animation Ấn Độ.',
    cta1: { text: 'Xem ngành Arena', href: '/dao-tao#arena' },
    cta2: { text: 'Tư vấn ngành thiết kế', href: '/tuyen-sinh' },
    slideNum: '02',
  },
  {
    image: '/fai_banner_skillking.png',
    eyebrow: 'FPT SKILLKING — DIGITAL MARKETING',
    title: 'Thực Chiến\nDigital Marketing\nChuẩn Quốc Tế',
    desc: 'Trở thành chuyên gia tiếp thị số với chương trình được chuyển giao từ tập đoàn giáo dục hàng đầu Ấn Độ và cộng đồng doanh nghiệp thực tế.',
    cta1: { text: 'Xem ngành Marketing', href: '/dao-tao#skillking' },
    cta2: { text: 'Đăng ký học thử', href: '/tuyen-sinh' },
    slideNum: '03',
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => setCurrent((p) => (p - 1 + slides.length) % slides.length);
  const handleNext = () => setCurrent((p) => (p + 1) % slides.length);

  return (
    <section className="hero-section">
      <div className="slides-container">
        {slides.map((slide, index) => (
          <div key={index} className={`slide-item ${index === current ? 'active' : ''}`}>
            <div className="slide-image-wrapper">
              <Image src={slide.image} alt={slide.title} fill priority={index === 0}
                style={{ objectFit: 'cover' }} />
              <div className="slide-overlay" />
            </div>
            <div className="slide-content container">
              <div className="slide-text-box">
                <span className="slide-eyebrow">{slide.eyebrow}</span>
                <h1 className="slide-title">
                  {slide.title.split('\n').map((line, i) => (
                    <span key={i}>{line}<br /></span>
                  ))}
                </h1>
                <p className="slide-desc">{slide.desc}</p>
                <div className="slide-cta-row">
                  <Link href={slide.cta1.href} className="btn btn-primary">{slide.cta1.text}</Link>
                  <Link href={slide.cta2.href} className="btn btn-ghost">{slide.cta2.text}</Link>
                </div>
              </div>
            </div>
            {/* Slide counter editorial */}
            <div className="slide-counter-badge">
              <span className="slide-current-num">{slide.slideNum}</span>
              <span className="slide-sep">/</span>
              <span className="slide-total">0{slides.length}</span>
            </div>
          </div>
        ))}
      </div>

      <button className="slider-nav-btn prev-btn" onClick={handlePrev} aria-label="Previous Slide">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <button className="slider-nav-btn next-btn" onClick={handleNext} aria-label="Next Slide">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
      </button>

      <div className="slider-dots">
        {slides.map((_, index) => (
          <button key={index} className={`dot-btn ${index === current ? 'active' : ''}`}
            onClick={() => setCurrent(index)} aria-label={`Go to slide ${index + 1}`} />
        ))}
      </div>
    </section>
  );
}
