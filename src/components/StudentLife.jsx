import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ScrollTypewriter from './ScrollTypewriter';

const bentoItems = [
  {
    id: 'lab',
    label: 'Tân Khoa Rạng Rỡ Trong Ngày Lễ',
    tag: 'Tốt Nghiệp',
    src: '/fai_graduation_handshake.png',
    size: 'bento-large-v',
  },
  {
    id: 'design',
    label: 'Bài Phát Biểu Đầy Cảm Hứng',
    tag: 'FPT Arena',
    src: '/fai_graduation_speech.jpg',
    size: 'bento-small',
  },
  {
    id: 'marketing',
    label: 'Lời Cảm Ơn Từ Phụ Huynh',
    tag: 'FPT Skillking',
    src: '/fai_graduation_testimonial.png',
    size: 'bento-small',
  },
  {
    id: 'graduation',
    label: 'Nghi thức Tuyên Hứa Tân khoa',
    tag: 'Nghi Lễ',
    src: '/fai_graduation_hall.jpg',
    size: 'bento-large-h',
  },
  {
    id: 'study',
    label: 'Hàng Trăm Tân Khoa Tung Mũ Vinh Danh',
    tag: 'Khoảnh Khắc',
    src: '/fai_graduation_crowd.png',
    size: 'bento-medium',
  },
];

export default function StudentLife() {
  return (
    <section className="student-life-section section">
      <div className="container">
        {/* Section Header */}
        <div className="student-life-header">
          <div>
            <span className="section-eyebrow">Trải nghiệm sinh viên</span>
            <h2 className="section-headline"><ScrollTypewriter text="Đời Sống Sinh Viên FAI" /></h2>
            <p className="section-subhead" style={{ maxWidth: 540 }}>
              Tại FAI, việc học vượt ra ngoài phòng Lab — bạn được nhúng mình vào môi trường năng động với Hackathon, ngày hội công nghệ, sự kiện sáng tạo và chương trình kiến tập doanh nghiệp từ năm nhất.
            </p>
          </div>
          <div className="student-life-meta">
            <ul className="info-checklist">
              <li>Sân chơi chuyên ngành</li>
              <li>Hoạt động doanh nghiệp</li>
              <li>Đời sống sinh viên</li>
            </ul>
            <Link href="/doi-song" className="btn btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              Xem thêm hoạt động <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid">
          {bentoItems.map((item) => (
            <div key={item.id} className={`bento-item ${item.size}`}>
              <Image
                src={item.src}
                alt={item.label}
                fill
                style={{ objectFit: 'cover' }}
                className="bento-img"
              />
              <div className="bento-overlay">
                <span className="bento-tag">{item.tag}</span>
                <span className="bento-label">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
