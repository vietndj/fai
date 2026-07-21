import Image from 'next/image';
import ScrollTypewriter from './ScrollTypewriter';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { allNews } from '../data/news';

const regularNews = allNews.slice(1, 3); // Aptech & Arena articles

const notices = [
  {
    dept: 'Văn phòng Tuyển sinh',
    title: 'Thông báo xét tuyển học bổng tài năng đợt tháng 7/2026',
    date: '22-06-2026',
  },
  {
    dept: 'Phòng Khảo thí',
    title: 'Thông báo lịch thi chứng chỉ lập trình viên Aptech đợt tháng 6',
    date: '21-06-2026',
  },
  {
    dept: 'Văn phòng Đào tạo',
    title: 'Thông báo v/v đổi lịch học môn SEO/SEM của lớp Skillking K12',
    date: '19-06-2026',
  },
  {
    dept: 'Quan hệ Doanh nghiệp',
    title: 'Thông báo ngày hội tuyển dụng FAI Career Day 2026 dành cho sinh viên IT & Thiết kế',
    date: '17-06-2026',
  },
  {
    dept: 'Ban Công tác Sinh viên',
    title: 'Thông báo lịch khai giảng khóa học Đồ họa truyền thông đa phương tiện Arena K35',
    date: '15-06-2026',
  },
  {
    dept: 'Phòng Khảo thí & Quốc tế',
    title: 'Thông báo lịch nhận bằng tốt nghiệp quốc tế chuẩn Aptech & Arena đợt 1/2026',
    date: '12-06-2026',
  },
  {
    dept: 'Văn phòng Đào tạo',
    title: 'Thông báo lịch bảo vệ đồ án tốt nghiệp chuyên ngành Thiết kế Vi mạch Bán dẫn FPT Jetking',
    date: '10-06-2026',
  },
  {
    dept: 'Ban Công nghệ & Đổi mới',
    title: 'Thông báo cuộc thi sáng tạo AI Agent & Lập trình phần mềm dành cho sinh viên FAI',
    date: '08-06-2026',
  },
  {
    dept: 'Văn phòng Tuyển sinh',
    title: 'Thông báo gia hạn đăng ký học bổng nhập học đợt thu 2026 hệ chuyển tiếp quốc tế',
    date: '05-06-2026',
  }
];

// NOTE: Không dùng data-reveal ở section gốc để tránh bị ẩn trắng.
// Chỉ dùng data-reveal ở các card con để stagger animation.
export default function NewsSection() {
  return (
    <section className="section news-section">
      <div className="container news-grid-layout">
        {/* News Column */}
        <div className="main-news-col">
          <div className="section-label-group">
            <span className="section-eyebrow">Tin tức &amp; Sự kiện</span>
            <h2 className="section-title"><ScrollTypewriter text="Tin tức mới nhất" /></h2>
          </div>

          {/* Featured News Card */}
          {(() => {
            const featured = allNews[0];
            return (
              <div className="featured-news-card" data-reveal>
                <div className="featured-news-image">
                  <Image src={featured.image} alt={featured.title} fill style={{ objectFit: 'cover' }} />
                  <span className="featured-news-tag">Sự kiện nổi bật</span>
                </div>
                <div className="featured-news-body">
                  <span className="news-date">{featured.date} | {featured.category}</span>
                  <h3 className="featured-news-title">
                    {featured.title}
                  </h3>
                  <p className="featured-news-desc">
                    {featured.desc}
                  </p>
                  <Link href={`/tin-tuc/${featured.slug}`} className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    Đọc tiếp <ArrowRight size={18} strokeWidth={2.5} />
                  </Link>
                </div>
              </div>
            );
          })()}

          {/* Regular News Row */}
          <div className="regular-news-row">
            {regularNews.map((news, idx) => (
              <div key={idx} className="news-card" data-reveal data-reveal-delay={`${0.15 + idx * 0.1}`}>
                <div className="news-card-image">
                  <Image src={news.image} alt={news.title} fill style={{ objectFit: 'cover' }} />
                  <span className="news-card-tag">{news.category}</span>
                </div>
                <div className="news-card-body">
                  <span className="news-date">{news.date}</span>
                  <h4 className="news-card-title">{news.title}</h4>
                  <Link href={`/tin-tuc/${news.slug}`} className="read-more-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    Xem thêm <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Notices Column */}
        <div className="notices-col">
          <div className="section-label-group">
            <span className="section-eyebrow">Thông báo FAI</span>
            <h2 className="section-title">Thông báo chung</h2>
          </div>

          <div className="notices-list">
            {notices.map((notice, idx) => (
              <div key={idx} className="notice-item" data-reveal data-reveal-delay={`${0.2 + idx * 0.1}`}>
                <span className="notice-dept">{notice.dept}</span>
                <h4 className="notice-title"><a href="#">{notice.title}</a></h4>
                <span className="notice-date">{notice.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
