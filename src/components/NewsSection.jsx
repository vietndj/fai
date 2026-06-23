import Image from 'next/image';

const regularNews = [
  {
    title: 'Aptech tổ chức cuộc thi Hackathon TechWiz năm thứ 6',
    date: '20-06-2026',
    image: '/fai_banner_aptech.png',
    tag: 'Sự kiện',
  },
  {
    title: 'Showcase Đồ án tốt nghiệp Arena Multimedia thu hút nhiều nhà tuyển dụng',
    date: '18-06-2026',
    image: '/fai_banner_arena.png',
    tag: 'Sự kiện',
  }
];

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
  }
];

export default function NewsSection() {
  return (
    <section className="section news-section" data-reveal data-reveal-delay="0">
      <div className="container news-grid-layout">
        {/* News Column */}
        <div className="main-news-col" data-reveal data-reveal-delay="0.1">
          <div className="section-label-group">
            <span className="section-eyebrow">Tin tức &amp; Sự kiện</span>
            <h2 className="section-title">Tin tức mới nhất</h2>
          </div>

          {/* Featured News Card */}
          <div className="featured-news-card">
            <div className="featured-news-image">
              <Image src="/fai_student_life_2.png" alt="Featured News" fill style={{ objectFit: 'cover' }} />
              <span className="featured-news-tag">Sự kiện nổi bật</span>
            </div>
            <div className="featured-news-body">
              <span className="news-date">23-06-2026 | Sự kiện</span>
              <h3 className="featured-news-title">
                Đại nhạc hội FAI SoundWave 2026 — Kỷ niệm hành trình 18 năm kiến tạo công nghệ sáng tạo
              </h3>
              <p className="featured-news-desc">
                Chào mừng tân sinh viên nhập học đợt hè 2026, FAI tổ chức đêm nhạc cực bùng nổ quy tụ các nghệ sĩ hàng đầu và màn trình diễn đậm chất nghệ thuật công nghệ.
              </p>
              <a href="#" className="btn btn-primary">Đọc tiếp</a>
            </div>
          </div>

          {/* Regular News List */}
          <div className="regular-news-row">
            {regularNews.map((news, idx) => (
              <div key={idx} className="news-card" data-reveal data-reveal-delay={`${0.2 + idx * 0.1}`}>
                <div className="news-card-image">
                  <Image src={news.image} alt={news.title} fill style={{ objectFit: 'cover' }} />
                  <span className="news-card-tag">{news.tag}</span>
                </div>
                <div className="news-card-body">
                  <span className="news-date">{news.date}</span>
                  <h4 className="news-card-title">{news.title}</h4>
                  <a href="#" className="read-more-link">Xem thêm →</a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Notices Column */}
        <div className="notices-col" data-reveal data-reveal-delay="0.2">
          <div className="section-label-group">
            <span className="section-eyebrow">Thông báo FAI</span>
            <h2 className="section-title">Thông báo chung</h2>
          </div>

          <div className="notices-list">
            {notices.map((notice, idx) => (
              <div key={idx} className="notice-item" data-reveal data-reveal-delay={`${0.3 + idx * 0.1}`}>
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
