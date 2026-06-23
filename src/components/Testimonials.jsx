'use client';

import { useState } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    quote: 'Lập trình không chỉ là gõ code, đó là nghệ thuật giải quyết vấn đề. Tại FAI, tôi được định hướng tư duy giải thuật mở rộng, giúp tôi tự tin làm việc tại các dự án quốc tế.',
    author: 'TS. Trần Đình Toàn',
    role: 'Phó trưởng Ban Đào tạo Aptech, Giám đốc Trung tâm Công nghệ Phần mềm FAI',
    avatar: '/fai_student_life_1.png',
  },
  {
    quote: 'Kiến trúc và thiết kế đồ họa có tác động mạnh mẽ tới tư duy của con người. Những yếu tố như không gian, màu sắc, bố cục trang trí... thay đổi cách suy nghĩ của người sinh hoạt trong môi trường ấy.',
    author: 'Kỹ sư Trương Ngọc Kim',
    role: 'Chủ tịch Hội đồng Khoa học Arena Multimedia',
    avatar: '/fai_banner_arena.png',
  },
  {
    quote: 'Digital Marketing thay đổi mỗi ngày. Chúng tôi không chỉ dạy sinh viên cách chạy quảng cáo, chúng tôi dạy họ cách thấu hiểu tâm lý khách hàng và phân tích dữ liệu thực tế.',
    author: 'ThS. Nguyễn Thị Mai',
    role: 'Trưởng bộ môn Chiến lược Tiếp thị số FPT Skillking',
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
    <section className="testimonials-huge-block">
      <div className="container testimonials-huge-grid">
        {/* Quote Left Column */}
        <div className="huge-quote-content">
          <span className="huge-quote-tag">NGƯỜI TRUYỀN CẢM HỨNG</span>
          <h2 className="huge-quote-text">
            {testimonials[current].quote}
          </h2>
          
          <div className="huge-quote-author">
            <div className="huge-avatar-wrapper">
              <Image 
                src={testimonials[current].avatar} 
                alt={testimonials[current].author} 
                width={50} 
                height={50} 
                className="huge-author-avatar"
              />
            </div>
            <div className="huge-author-info">
              <span className="huge-author-name">{testimonials[current].author}</span>
              <span className="huge-author-role">{testimonials[current].role}</span>
            </div>
          </div>

          {/* Slider controls */}
          <div className="huge-testimonials-controls">
            <button onClick={handlePrev} className="huge-ctrl-btn" aria-label="Previous">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>
            <button onClick={handleNext} className="huge-ctrl-btn" aria-label="Next">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
          </div>
        </div>

        {/* Large Decorative Quotation Mark on Right */}
        <div className="huge-quote-decoration">
          <span className="huge-quote-symbol">”</span>
        </div>
      </div>
    </section>
  );
}
