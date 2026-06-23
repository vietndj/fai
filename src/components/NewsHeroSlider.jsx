'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { allNews } from '../data/news';

const AUTO_PLAY_TIME = 6000;

export default function NewsHeroSlider() {
  const featuredNews = allNews.slice(0, 3); // Top 3 featured articles
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef(null);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + featuredNews.length) % featuredNews.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % featuredNews.length);
  };

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(handleNext, AUTO_PLAY_TIME);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, current]);

  if (!featuredNews.length) return null;
  const activeSlide = featuredNews[current];

  return (
    <section 
      className="news-hero-slider"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      <div className="news-slider-grid">
        {/* Left Side: Images & Navigation */}
        <div className="news-slider-left">
          <div className="slider-media-container">
            {featuredNews.map((slide, index) => (
              <div 
                key={slide.slug} 
                className={`slider-media-item ${index === current ? 'active' : ''}`}
              >
                <Link href={`/tin-tuc/${slide.slug}`}>
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    priority={index === 0}
                    style={{ objectFit: 'cover', cursor: 'pointer' }}
                  />
                  <div className="slider-media-overlay" style={{ cursor: 'pointer' }} />
                </Link>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button 
            className="news-nav-btn prev" 
            onClick={handlePrev} 
            aria-label="Previous featured news"
          >
            <ChevronLeft size={22} strokeWidth={2.5} />
          </button>
          <button 
            className="news-nav-btn next" 
            onClick={handleNext} 
            aria-label="Next featured news"
          >
            <ChevronRight size={22} strokeWidth={2.5} />
          </button>

          {/* Horizontal Slide Indicators */}
          <div className="news-slide-indicators">
            {featuredNews.map((_, index) => (
              <button
                key={index}
                className={`indicator-bar ${index === current ? 'active' : ''}`}
                onClick={() => setCurrent(index)}
                aria-label={`Go to slide ${index + 1}`}
              >
                {index === current && (
                  <span 
                    className="indicator-progress" 
                    style={{ animationDuration: `${AUTO_PLAY_TIME}ms` }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Right Side: Navy Blue Content Card */}
        <div className="news-slider-right">
          <div className="news-content-card">
            <span className="news-badge-label">TIN NỔI BẬT</span>
            
            <div className="news-meta-row">
              <span className="news-cat">{activeSlide.category}</span>
              <span className="news-divider">•</span>
              <span className="news-date">{activeSlide.date}</span>
            </div>

            <h2 className="news-heading-title">
              <Link href={`/tin-tuc/${activeSlide.slug}`}>
                {activeSlide.title}
              </Link>
            </h2>

            <p className="news-excerpt">
              {activeSlide.desc}
            </p>

            <div className="news-action-row">
              <Link 
                href={`/tin-tuc/${activeSlide.slug}`} 
                className="news-more-btn"
              >
                Xem thêm
                <ArrowRight size={18} strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
