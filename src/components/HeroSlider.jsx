'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: '/banner_hero_aptech_v2.jpeg',
    logo: '/logo_aptech.png',
    eyebrow: 'Hệ thống Đào tạo Lập trình viên Quốc tế',
    title: 'FPT APTECH',
    desc: 'Chương trình chuẩn quốc tế, đào tạo lập trình viên thực chiến đáp ứng nhu cầu tuyển dụng toàn cầu.',
    cta1: { text: 'Tìm hiểu chương trình FPT APTECH', href: '/dao-tao#aptech' },
    slideNum: '01',
    color: '#f37021',
  },
  {
    image: '/banner_hero_arena_v2.jpeg',
    logo: '/logo_arena.png',
    eyebrow: 'Hệ thống Đào tạo Mỹ thuật Đa phương tiện',
    title: 'FPT ARENA MULTIMEDIA',
    desc: 'Chạm ngõ sáng tạo cùng cộng đồng mỹ thuật đa phương tiện lớn nhất Việt Nam.',
    cta1: { text: 'Tìm hiểu chương trình FPT ARENA', href: '/dao-tao#arena' },
    slideNum: '02',
    color: '#ffb600',
  },
  {
    image: '/banner_hero_skillking_v2.jpeg',
    logo: '/logo_skillking.png',
    eyebrow: 'Hệ thống Đào tạo Digital Marketing',
    title: 'FPT SKILLKING',
    desc: 'Chương trình đào tạo Full-Stack Digital Marketing thực chiến hàng đầu kết hợp công nghệ hiện đại.',
    cta1: { text: 'Tìm hiểu chương trình FPT SKILLKING', href: '/dao-tao#skillking' },
    slideNum: '03',
    color: '#29a9e1',
  },
  {
    image: '/banner_hero_chip_v2.jpeg',
    logo: '/logo_jetking.png',
    eyebrow: 'Hệ thống Đào tạo Thiết kế Vi mạch Bán dẫn',
    title: 'FPT JETKING - CHIP DESIGN',
    desc: 'Tiên phong đào tạo thiết kế vi mạch bán dẫn chuẩn quốc tế tại Việt Nam',
    cta1: { text: 'Tìm hiểu chương trình FPT JETKING - CHIP DESIGN', href: '/dao-tao/chip-design' },
    slideNum: '04',
    color: '#ed232a',
  },
  {
    image: '/banner_hero_ai_agent_v2.jpeg',
    logo: '/logo_jetking.png',
    eyebrow: 'Hệ thống Đào tạo AI Agent tiên phong',
    title: 'FPT JETKING - AI AGENT',
    desc: 'Kiến tạo thế hệ lập trình viên AI Agent làm chủ công nghệ AI, sẵn sàng tạo ra giá trị cho doanh nghiệp trong kỷ nguyên số.',
    cta1: { text: 'Tìm hiểu chương trình FPT JETKING - AI AGENT', href: '/dao-tao/ai-agent' },
    slideNum: '05',
    color: '#ed232a',
  },
  {
    image: '/banner_hero_fan_final_v2.jpeg',
    video: '/videos/intro.mp4',
    logo: null,
    eyebrow: 'Khoảnh khắc Vinh quang & Đáng nhớ',
    title: 'LỄ TỐT NGHIỆP CỦA SINH VIÊN FAI',
    desc: 'Chúc mừng các tân khoa đã hoàn thành xuất sắc chặng đường chinh phục tri thức tại FPT Academy International.',
    cta1: { text: 'Xem ảnh lễ tốt nghiệp', href: '/tin-tuc#le-tot-nghiep' },
    slideNum: '06',
    color: '#f37021',
  },
];

const AUTO_PLAY_TIME = 6000; // 6s

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef(null);

  const handleNext = () => setCurrent((p) => (p + 1) % slides.length);
  const handlePrev = () => setCurrent((p) => (p - 1 + slides.length) % slides.length);

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
              {slide.video ? (
                <video
                  src={slide.video}
                  poster={slide.image}
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover', 
                    position: 'absolute', 
                    inset: 0,
                    zIndex: 0
                  }}
                />
              ) : (
                <Image 
                  src={slide.image} 
                  alt={slide.title} 
                  fill 
                  priority={index === 0}
                  style={{ objectFit: 'cover', objectPosition: 'right center' }} 
                />
              )}
              <div className="slide-overlay-subtle" />
            </div>

            <div className="slide-content container">
              <div className="slide-text-box-premium">
                {slide.logo && (
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', height: '84px' }}>
                    <Image 
                      src={slide.logo} 
                      alt={`${slide.title} Logo`} 
                      width={320} 
                      height={84} 
                      style={{ objectFit: 'contain', height: '100%', width: 'auto', maxWidth: '340px' }} 
                    />
                  </div>
                )}
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

            <div className="slide-counter-badge">
              <span className="slide-current-num" style={{ color: slide.color }}>{slide.slideNum}</span>
              <span className="slide-sep">/</span>
              <span className="slide-total">0{slides.length}</span>
            </div>
          </div>
        ))}
      </div>

      <button className="slider-nav-btn prev-btn" onClick={handlePrev} aria-label="Previous Slide" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <ChevronLeft size={22} strokeWidth={2.5} />
      </button>
      <button className="slider-nav-btn next-btn" onClick={handleNext} aria-label="Next Slide" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <ChevronRight size={22} strokeWidth={2.5} />
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
