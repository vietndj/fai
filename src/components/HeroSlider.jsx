'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const slides = [
  {
    image: '/fai_banner_arena.png',
    title: 'ARENA MULTIMEDIA',
    subtitle: 'Nơi chắp cánh đam mê Thiết kế & Mỹ thuật đa phương tiện',
    desc: 'Đào tạo chuẩn chỉnh toàn diện từ Thiết kế Đồ họa, Web, Kỹ xảo Điện ảnh đến Thiết kế Game và Hoạt hình 3D.',
    linkText: 'Tìm hiểu ngay',
  },
  {
    image: '/fai_banner_aptech.png',
    title: 'APTECH COMPUTER EDUCATION',
    subtitle: 'Kiến tạo tương lai cùng Lập trình viên Quốc tế',
    desc: 'Chương trình đào tạo chuyên sâu về Công nghệ thông tin, Lập trình ứng dụng, Trí tuệ nhân tạo và Khoa học dữ liệu.',
    linkText: 'Xem khóa học',
  },
  {
    image: '/fai_banner_skillking.png',
    title: 'FPT SKILLKING',
    subtitle: 'Thực chiến Digital Marketing chuẩn quốc tế',
    desc: 'Trở thành chuyên gia tiếp thị số với giáo trình chuẩn quốc tế chuyển giao từ tập đoàn giáo dục lớn nhất Ấn Độ.',
    linkText: 'Đăng ký tư vấn',
  }
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="hero-section">
      <div className="slides-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide-item ${index === current ? 'active' : ''}`}
          >
            {/* Background Image */}
            <div className="slide-image-wrapper">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                style={{ objectFit: 'cover' }}
              />
              <div className="slide-overlay"></div>
            </div>

            {/* Slide Content */}
            <div className="slide-content container">
              <div className="slide-text-box">
                <span className="slide-tag">{slide.title}</span>
                <h1 className="slide-title">{slide.subtitle}</h1>
                <p className="slide-desc">{slide.desc}</p>
                <a href="#" className="btn btn-primary">{slide.linkText}</a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Nav Controls */}
      <button className="slider-nav-btn prev-btn" onClick={handlePrev} aria-label="Previous Slide">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
      </button>
      <button className="slider-nav-btn next-btn" onClick={handleNext} aria-label="Next Slide">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
      </button>

      {/* Dots Indicator */}
      <div className="slider-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot-btn ${index === current ? 'active' : ''}`}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
}
