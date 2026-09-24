import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ScrollTypewriter from './ScrollTypewriter';

const bentoItems = [
  {
    id: 'design',
    label: 'Bài Phát Biểu Đầy Cảm Hứng',
    tag: 'FPT Arena',
    src: '/fai_graduation_speech.jpg',
    size: 'bento-large-v',
  },
  {
    id: 'lab',
    label: 'Giải Bóng Đá All Star Cup',
    tag: 'Thể Thao',
    src: '/FAI-All-Star-Cup-season-2-2.jpg',
    size: 'bento-small',
  },
  {
    id: 'graduation_handshake',
    label: 'Tân Khoa Rạng Rỡ Trong Ngày Lễ',
    tag: 'Tốt Nghiệp',
    src: '/fai_graduation_handshake.png',
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
            <span className="section-eyebrow">TRẢI NGHIỆM FAI</span>
            <h2 className="section-headline"><ScrollTypewriter text="Trải nghiệm sinh viên" /></h2>
            <p className="section-subhead" style={{ maxWidth: 560 }}>
              Tại Viện đào tạo quốc tế FPT (FAI), sinh viên được trải nghiệm các sân chơi chuyên ngành, ngày hội công nghệ, sự kiện sáng tạo và chương trình kết nối doanh nghiệp, từ đó phát triển kỹ năng thực tế, khám phá cơ hội nghề nghiệp ngay từ học kỳ đầu tiên.
            </p>
          </div>
          <div className="student-life-meta">
            <ul className="info-checklist">
              <li>Sân chơi chuyên ngành</li>
              <li>Hoạt động doanh nghiệp</li>
              <li>Kết nối việc làm</li>
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
