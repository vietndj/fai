'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const quotes = [
  {
    quote: 'Lập trình không chỉ là gõ code — đó là nghệ thuật giải quyết vấn đề. Tại FAI, mỗi sinh viên được định hướng tư duy giải thuật mở rộng, tự tin chinh phục các dự án quốc tế.',
    author: 'TS. Trần Đình Toàn',
    role: 'Giám đốc Trung tâm Công nghệ Phần mềm FAI',
    brand: 'APTECH',
    avatar: '/fai_student_life_1.png',
  },
  {
    quote: 'Thiết kế không phải là vẽ đẹp — thiết kế là giải quyết vấn đề bằng hình ảnh. Chúng tôi đào tạo những người nhìn thấy thế giới khác biệt và biến tầm nhìn đó thành sản phẩm.',
    author: 'Kỹ sư Trương Ngọc Kim',
    role: 'Chủ tịch Hội đồng Khoa học Arena Multimedia',
    brand: 'ARENA',
    avatar: '/fai_banner_arena.png',
  },
  {
    quote: 'Digital Marketing thay đổi mỗi ngày. Chúng tôi không dạy công cụ — chúng tôi dạy cách tư duy dữ liệu, thấu hiểu khách hàng và tạo ra chiến lược chinh phục thị trường.',
    author: 'ThS. Nguyễn Thị Mai',
    role: 'Trưởng Bộ Môn Chiến Lược Tiếp Thị Số, FPT Skillking',
    brand: 'SKILLKING',
    avatar: '/fai_banner_skillking.png',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  const q = quotes[current];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Auto rotate
  useEffect(() => {
    const t = setInterval(() => setCurrent(p => (p + 1) % quotes.length), 7000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="quote-block" ref={ref}>
      {/* Decorative large quote mark */}
      <div className="quote-block-deco">"</div>

      <div className="container quote-block-inner">
        {/* Left: eyebrow + big quote */}
        <div
          className="quote-block-content"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(50px)',
            transition: 'opacity 0.9s ease 0.1s, transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.1s',
          }}
        >
          <span className="quote-block-eyebrow">NGƯỜI TRUYỀN CẢM HỨNG · {q.brand}</span>
          <blockquote className="quote-block-text">
            {q.quote}
          </blockquote>
          <div className="quote-block-author">
            <div className="quote-block-avatar">
              <Image src={q.avatar} alt={q.author} width={56} height={56}
                style={{ objectFit: 'cover', borderRadius: '50%' }} />
            </div>
            <div>
              <strong className="quote-block-name">{q.author}</strong>
              <span className="quote-block-role">{q.role}</span>
            </div>
          </div>
          {/* Dots nav */}
          <div className="quote-block-dots">
            {quotes.map((_, i) => (
              <button
                key={i}
                className={`quote-dot ${i === current ? 'active' : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`Quote ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Right: CTA panel */}
        <div
          className="quote-block-cta-panel"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(50px)',
            transition: 'opacity 0.9s ease 0.3s, transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.3s',
          }}
        >
          <div className="quote-cta-card">
            <span className="quote-cta-label">Tuyển sinh 2026</span>
            <h3 className="quote-cta-title">Bắt Đầu Hành Trình Của Bạn</h3>
            <p className="quote-cta-desc">Học bổng lên đến 50% — Nhập học linh hoạt — Đào tạo chuẩn quốc tế</p>
            <Link href="/tuyen-sinh" className="quote-cta-btn" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              Đăng ký tư vấn miễn phí
              <ArrowRight size={18} strokeWidth={2.5} />
            </Link>
            <Link href="/dao-tao" className="quote-cta-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              Xem tất cả chương trình
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
