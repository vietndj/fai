import Image from 'next/image';
import Link from 'next/link';

const bentoItems = [
  {
    id: 'lab',
    label: 'Lab Lập Trình Hiện Đại',
    tag: 'Aptech',
    src: '/fai_banner_aptech.png',
    size: 'bento-large-v',
  },
  {
    id: 'design',
    label: 'Không Gian Sáng Tạo Arena',
    tag: 'Arena',
    src: '/fai_banner_arena.png',
    size: 'bento-small',
  },
  {
    id: 'marketing',
    label: 'Thực Chiến Digital Marketing',
    tag: 'Skillking',
    src: '/fai_banner_skillking.png',
    size: 'bento-small',
  },
  {
    id: 'graduation',
    label: 'Lễ Tốt Nghiệp Vinh Danh',
    tag: 'FAI Event',
    src: '/fai_student_life_2.png',
    size: 'bento-large-h',
  },
  {
    id: 'study',
    label: 'Học Nhóm & Sáng Tạo',
    tag: 'Campus Life',
    src: '/fai_student_life_1.png',
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
            <span className="section-eyebrow">Trải nghiệm & Sáng tạo</span>
            <h2 className="section-headline">Đời Sống Sinh Viên FAI</h2>
            <p className="section-subhead" style={{ maxWidth: 540 }}>
              Tại FAI, việc học vượt ra ngoài phòng Lab — bạn được nhúng mình vào
              môi trường năng động với Hackathon, ngày hội công nghệ, sự kiện sáng tạo
              và chương trình kiến tập doanh nghiệp từ năm nhất.
            </p>
          </div>
          <div className="student-life-meta">
            <ul className="info-checklist">
              <li>Hackathon & Sân chơi học thuật đỉnh cao</li>
              <li>Workshop & Show diễn đồ án mỗi kỳ</li>
              <li>Câu lạc bộ lập trình, nghệ thuật, thể thao</li>
              <li>Kiến tập doanh nghiệp từ năm nhất</li>
            </ul>
            <Link href="/doi-song" className="btn btn-secondary">Xem thêm hoạt động →</Link>
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
