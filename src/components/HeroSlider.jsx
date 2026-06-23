'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const slides = [
  {
    image: '/fai_banner_aptech.png',
    eyebrow: 'Hệ thống Đào tạo Lập trình viên Quốc tế',
    title: 'APTECH COMPUTER EDUCATION',
    desc: 'Chương trình chuẩn quốc tế, đào tạo lập trình viên thực chiến đáp ứng nhu cầu tuyển dụng toàn cầu.',
    cta1: { text: 'Tìm hiểu chương trình APTECH', href: '/dao-tao#aptech' },
    slideNum: '01',
    color: '#1a6ed8',
  },
  {
    image: '/fai_banner_arena.png',
    eyebrow: 'Hệ thống Đào tạo Mỹ thuật Đa phương tiện',
    title: 'FPT ARENA MULTIMEDIA',
    desc: 'Chạm ngõ sáng tạo cùng cộng đồng mỹ thuật đa phương tiện lớn nhất Việt Nam.',
    cta1: { text: 'Tìm hiểu chương trình ARENA', href: '/dao-tao#arena' },
    slideNum: '02',
    color: '#e8741e',
  },
  {
    image: '/fai_banner_skillking.png',
    eyebrow: 'Hệ thống Đào tạo Digital Marketing',
    title: 'FPT SKILLKING',
    desc: 'Chương trình đào tạo Full-Stack Digital Marketing thực chiến hàng đầu kết hợp công nghệ hiện đại.',
    cta1: { text: 'Tìm hiểu chương trình SKILLKING', href: '/dao-tao#skillking' },
    slideNum: '03',
    color: '#16a34a',
  },
];

const AUTO_PLAY_TIME = 6000; // 6s

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef(null);

  const handlePrev = () => setCurrent((p) => (p - 1 + slides.length) % slides.length);
  const handleNext = () => setCurrent((p) => (p + 1) % slides.length);

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        handleNext();
      }, AUTO_PLAY_TIME);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, current]);

  return (
    <section 
      className="hero-section"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      <div className="slides-container">
        {slides.map((slide, index) => (
          <div key={index} className={`slide-item ${index === current ? 'active' : ''}`}>
            <div className="slide-image-wrapper">
              <Image 
                src={slide.image} 
                alt={slide.title} 
                fill 
                priority={index === 0}
                style={{ objectFit: 'cover', objectPosition: 'center' }} 
              />
              <div className="slide-overlay-subtle" />
            </div>

            {/* Subtle, premium layout: text content overlay shifted slightly or transparent to highlight the visual banner */}
            <div className="slide-content container">
              <div className="slide-text-box-premium">
                <span className="slide-eyebrow-premium" style={{ borderLeftColor: slide.color }}>
                  {slide.eyebrow}
                </span>
                <h1 className="slide-title-premium">
                  {slide.title}
                </h1>
                <p className="slide-desc-premium">{slide.desc}</p>
                <div className="slide-cta-row">
                  <Link href={slide.cta1.href} className="btn btn-premium-slide" style={{ '--slide-color': slide.color }}>
                    {slide.cta1.text}
                  </Link>
                </div>
              </div>
            </div>

            {/* Slide counter editorial */}
            <div className="slide-counter-badge">
              <span className="slide-current-num" style={{ color: slide.color }}>{slide.slideNum}</span>
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
          <button 
            key={index} 
            className={`dot-btn ${index === current ? 'active' : ''}`}
            onClick={() => setCurrent(index)} 
            aria-label={`Go to slide ${index + 1}`}
          >
            {index === current && (
              <span 
                className="dot-progress-fill" 
                style={{ 
                  animationDuration: `${AUTO_PLAY_TIME}ms`,
                  backgroundColor: slides[index].color 
                }} 
              />
            )}
          </button>
        ))}
      </div>
    </section>
  );
}
