import Image from 'next/image';

const regularNews = [
  {
    title: 'Aptech tổ chức cuộc thi Hackathon TechWiz năm thứ 6',
    date: '20-06-2026',
    image: '/fai_banner_aptech.png',
  },
  {
    title: 'Showcase Đồ án tốt nghiệp Arena Multimedia thu hút nhiều nhà tuyển dụng',
    date: '18-06-2026',
    image: '/fai_banner_arena.png',
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
    title: 'Thông báo v/v đổi lịch học môn SEO/SEM của lớp Skillking',
    date: '19-06-2026',
  }
];

export default function NewsSection() {
  return (
    <section className="section news-section">
      <div className="container news-grid-layout">
        {/* News Column */}
        <div className="main-news-col">
          <span className="subtitle">Tin tức & Sự kiện</span>
          <h2 className="section-title">Tin tức mới nhất</h2>

          {/* Featured News Card */}
          <div className="featured-news-card">
            <div className="featured-news-image">
              <Image src="/fai_student_life_2.png" alt="Featured News" fill style={{ objectFit: 'cover' }} />
            </div>
            <div className="featured-news-body">
              <span className="news-date">23-06-2026 | Sự kiện</span>
              <h3 className="featured-news-title">
                Đại nhạc hội FAI SoundWave 2026 kỷ niệm hành trình kiến tạo công nghệ sáng tạo hàng đầu
              </h3>
              <p className="featured-news-desc">
                Chào mừng các tân sinh viên nhập học đợt hè 2026, FAI tổ chức đêm nhạc cực bùng nổ quy tụ dàn ca sĩ hàng đầu và các màn biểu diễn đậm chất nghệ thuật công nghệ.
              </p>
              <a href="#" className="btn btn-primary">Đọc tiếp</a>
            </div>
          </div>

          {/* Regular News List */}
          <div className="regular-news-row">
            {regularNews.map((news, idx) => (
              <div key={idx} className="news-card">
                <div className="news-card-image">
                  <Image src={news.image} alt={news.title} fill style={{ objectFit: 'cover' }} />
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
        <div className="notices-col">
          <span className="subtitle">Thông báo FAI</span>
          <h2 className="section-title">Thông báo chung</h2>
          
          <div className="notices-list">
            {notices.map((notice, idx) => (
              <div key={idx} className="notice-item">
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
