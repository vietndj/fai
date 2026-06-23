'use client';

import { useState } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    quote: 'Chương trình đào tạo tại Aptech giúp tôi làm quen với dự án thực tế ngay từ học kỳ đầu tiên. Khi ra trường, tôi hoàn toàn tự tin đảm nhiệm vị trí Full Stack Web Developer tại một tập đoàn đa quốc gia.',
    author: 'Nguyễn Văn Hải',
    role: 'Cựu học viên Aptech, Tech Lead tại FPT Software',
    avatar: '/fai_student_life_1.png',
  },
  {
    quote: 'Sự sáng tạo không có biên giới. Ở Arena Multimedia, tôi được các thầy cô hướng dẫn từng nét vẽ vẽ tablet, tư duy bố cục màu sắc, giúp tôi từ một người chưa biết gì trở thành 3D Animator chuyên nghiệp.',
    author: 'Lê Minh Trang',
    role: 'Cựu học viên Arena, 3D Artist tại Sparx* Virtuos',
    avatar: '/fai_banner_arena.png',
  },
  {
    quote: 'Học Digital Marketing tại Skillking là sự đầu tư đúng đắn nhất của tôi. Các dự án thực chiến chuẩn quốc tế giúp tôi hiểu rõ luồng chạy quảng cáo, tối ưu phễu và tăng trưởng traffic bền vững.',
    author: 'Phạm Minh Đức',
    role: 'Cựu học viên Skillking, Marketing Manager tại VNG',
    avatar: '/fai_banner_skillking.png',
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="section testimonials-section">
      <div className="container testimonials-content">
        <span className="quote-large-icon">“</span>
        <span className="subtitle">Người truyền cảm hứng</span>
        
        <div className="testimonial-slider-box">
          <p className="testimonial-quote">
            {testimonials[current].quote}
          </p>
          
          <div className="testimonial-author-row">
            <div className="author-avatar-wrapper">
              <Image 
                src={testimonials[current].avatar} 
                alt={testimonials[current].author} 
                width={60} 
                height={60} 
                className="author-avatar"
              />
            </div>
            <div className="author-info">
              <span className="author-name">{testimonials[current].author}</span>
              <span className="author-role">{testimonials[current].role}</span>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="testimonials-controls">
          <button onClick={handlePrev} className="ctrl-btn" aria-label="Previous Testimonial">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          <button onClick={handleNext} className="ctrl-btn" aria-label="Next Testimonial">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
