import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NewsHeroSlider from '@/components/NewsHeroSlider';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { allNews } from '@/data/news';

export const metadata = {
  title: 'Tin tức & Sự kiện - FAI FPT | Học viện Quốc tế FPT',
  description: 'Cập nhật tin tức giáo dục công nghệ, thông tin sự kiện, hội thảo hướng nghiệp và gương mặt sinh viên tiêu biểu tại FPT Academy International.',
};

export default function TinTuc() {
  return (
    <div className="news-page-container">
      <Header />
      
      <main className="sub-page-main">
        {/* Section Header */}
        <section className="news-page-title-section">
          <div className="container">
            <span className="sub-hero-tag">FAI HUB</span>
            <h1 className="sub-hero-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, marginBottom: '40px' }}>
              Tin Tức &amp; Sự Kiện
            </h1>
          </div>
        </section>

        {/* Featured News Slider (Thăng Long style split-screen hero slider) */}
        <NewsHeroSlider />

        {/* Normal News Feed Grid */}
        <section className="news-feed-section" style={{ padding: '80px 0' }}>
          <div className="container">
            <h2 className="feed-section-headline" style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '40px' }}>
              Tất Cả Bài Viết
            </h2>
            <div className="news-feed-grid">
              {allNews.map((news, idx) => (
                <div key={news.slug} className="feed-card">
                  <div className="feed-card-image">
                    <Link href={`/tin-tuc/${news.slug}`} style={{ display: 'block', width: '100%', height: '100%', cursor: 'pointer' }}>
                      <Image src={news.image} alt={news.title} fill style={{ objectFit: 'cover' }} />
                    </Link>
                    <span className="feed-cat-tag">{news.category}</span>
                  </div>
                  <div className="feed-card-body">
                    <span className="feed-date">{news.date}</span>
                    <h3 className="feed-title">
                      <Link href={`/tin-tuc/${news.slug}`}>{news.title}</Link>
                    </h3>
                    <p className="feed-desc">{news.desc}</p>
                    <Link 
                      href={`/tin-tuc/${news.slug}`} 
                      className="feed-btn"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                    >
                      Xem chi tiết <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
