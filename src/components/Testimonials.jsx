'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import ScrollTypewriter from './ScrollTypewriter';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const quotes = [
  {
    quote: 'Các chương trình của Viện đào tạo quốc tế FPT rất linh hoạt từ khóa ngắn 100h, 3 tháng, 6 tháng, 18 tháng, 24 tháng. Bởi ngắn nên chúng tôi rất nhanh chóng, linh hoạt để cập nhật xu thế thay đổi như "vũ bão" của thị trường. Chúng tôi đã tích hợp AI vào chương trình đào tạo, và có thể nhanh chóng thay đổi nếu doanh nghiệp cũng có sự thay đổi.',
    author: 'Cô Nguyễn Phương Anh',
    role: 'Phó Giám Đốc Viện Đào Tạo Quốc Tế FPT',
    brand: 'FAI',
    avatar: '/nguyen_phuong_anh.jpg',
  },
  {
    quote: 'Về Software Engineering, chúng ta cần tiếp cận theo hướng đa kỹ năng, người học không chỉ biết về một công nghệ hay mạnh về một sở trường, mà người học cần có khả năng thích nghi để phù hợp với mọi công nghệ.',
    author: 'Thầy Nguyễn Tuân',
    role: 'Giám đốc đào tạo FPT Aptech',
    brand: 'FPT APTECH',
    avatar: '/nguyen_tuan.png',
  },
  {
    quote: 'Từ những vật nhỏ nhất cho đến không gian lớn đều yêu cầu về thiết kế, mỹ thuật và tính năng sử dụng, vì vậy nhu cầu về lực lượng nhân sự thiết kế là luôn có. Khi đã quyết định theo ngành thì cần có sự đầu tư về chuyên môn, mở rộng khoảng kiến thức để kiểm soát quy trình thiết kế cũng như sử dụng AI để hỗ trợ công việc.',
    author: 'Cô Lê Thị Ngọc Quyên',
    role: 'Giám đốc đào tạo FPT Arena Đà Nẵng',
    brand: 'FPT ARENA',
    avatar: '/le_thi_ngoc_quyen.jpg',
  },
  {
    quote: 'Nghề đồ họa lúc nào cũng hot, bởi vì hiện nay mỗi người đều có một thiết bị số cá nhân, tất cả những gì diễn ra trên màn hình đều là sản phẩm của đồ họa. Vấn đề là giờ đây chúng ta cần tiếp cận với công nghệ AI, coi AI là người giúp việc. Nếu chúng ta không học tư duy thiết kế, nguyên lý thẩm mỹ thì chúng ta không thể ra lệnh cho người giúp việc của mình.',
    author: 'Thầy Hà Dũng Hiệp',
    role: 'Giám đốc đào tạo FPT Arena Multimedia',
    brand: 'FPT ARENA',
    avatar: '/ha_dung_hiep.jpg',
  },
  {
    quote: 'Với những người mới bắt đầu, sự lựa chọn đi từ Foundation vẫn là lựa chọn tốt nhất. Quan trọng hơn cả là công cụ sẽ luôn thay đổi, Tiktok thay đổi giao diện liên tục, Facebook thay đổi rất nhiều tính năng, nhưng tư duy nền tảng luôn còn mãi. Hãy xây dựng cho mình nền tảng vững chắc trước khi triển khai và thực thi trên các công cụ.',
    author: 'Cô Đỗ Thanh Hiền',
    role: 'Giảng viên FPT Skillking Hà Nội',
    brand: 'FPT SKILLKING',
    avatar: '/do_thanh_hien.png',
  },
  {
    quote: 'Trong tương lai gần AI sẽ không thể thay thế người làm Marketing, nhưng người biết dùng AI sẽ thay thế người không biết dùng. Nếu bạn hiểu và biết ứng dụng AI thì đây sẽ là lợi thế rất lớn trong Digital Marketing.',
    author: 'Cô Trần Thị Kim Cúc',
    role: 'Giảng viên FPT Skillking Đà Nẵng',
    brand: 'FPT SKILLKING',
    avatar: '/tran_thi_kim_cuc.png',
  },
  {
    quote: 'Khi Generative AI đang định nghĩa lại mọi giới hạn, việc làm chủ Machine Learning, hay Computer Vision không còn là lựa chọn, mà đó chính là tấm vé sống còn để các bạn dẫn đầu kỳ nguyên số, đừng để mình bị bỏ lại phía sau trong cuộc đua nghìn tỷ đô này.',
    author: 'Cô Đặng Kim Thi',
    role: 'Giảng viên FPT Jetking',
    brand: 'FPT JETKING',
    avatar: '/dang_kim_thi.png',
  },
  {
    quote: 'Việt Nam đã vươn lên Top 3 quốc gia xuất khẩu Chip sang Mỹ, nhưng chúng ta đang đứng trước một bài toán nan giải, đó là thiếu hụt 50.000 kỹ sư để hiện thực hóa chiến lược quốc gia. Khi những gã khổng lồ SAMSUNG, Intel đang đổ hàng nghìn tỷ đô la vào đây, với mức lương khởi điểm 15 - 20 triệu và có thể lên đến hàng trăm triệu mỗi tháng, đây chính là lúc để bắt đầu.',
    author: 'Thầy Nguyễn Duy Hoàng',
    role: 'Giảng viên FPT Jetking',
    brand: 'FPT JETKING',
    avatar: '/nguyen_duy_hoang.png',
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
            <div className="quote-block-avatar" style={{ width: '88px', height: '88px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0, border: '3px solid rgba(243, 112, 33, 0.5)' }}>
              <Image src={q.avatar} alt={q.author} width={88} height={88}
                style={{ objectFit: 'cover', objectPosition: 'center top', width: '100%', height: '100%', borderRadius: '50%' }} />
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
            <h3 className="quote-cta-title"><ScrollTypewriter text="Bắt đầu hành trình của bạn" /></h3>
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
