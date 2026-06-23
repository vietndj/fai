import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Share2, Link2, Clock, Calendar, User } from 'lucide-react';
import { allNews } from '@/data/news';

export async function generateStaticParams() {
  return allNews.map((news) => ({
    slug: news.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const news = allNews.find((n) => n.slug === slug);
  if (!news) return {};
  return {
    title: `${news.title} - FAI FPT`,
    description: news.desc,
  };
}

export default async function ArticleDetailPage({ params }) {
  const { slug } = await params;
  const news = allNews.find((n) => n.slug === slug);

  if (!news) {
    notFound();
  }

  // Get 3 related articles (excluding current one)
  const related = allNews.filter((n) => n.slug !== slug).slice(0, 3);

  return (
    <div className="article-page-container">
      <Header />

      <main className="article-main-wrapper">
        {/* Breadcrumb & Intro Block */}
        <section className="article-header-section">
          <div className="container">
            <div className="article-breadcrumb">
              <Link href="/">Trang chủ</Link>
              <span className="bc-divider">/</span>
              <Link href="/tin-tuc">Tin tức & Sự kiện</Link>
              <span className="bc-divider">/</span>
              <span className="bc-active">Chi tiết bài viết</span>
            </div>

            <span className="article-category-tag">{news.category}</span>
            <h1 className="article-main-title">{news.title}</h1>

            <div className="article-meta-info">
              <div className="meta-item">
                <User size={16} />
                <span>{news.author}</span>
              </div>
              <div className="meta-item">
                <Calendar size={16} />
                <span>{news.date}</span>
              </div>
              <div className="meta-item">
                <Clock size={16} />
                <span>{news.readTime}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Big Banner Image */}
        <section className="article-hero-banner-section">
          <div className="container">
            <div className="article-main-banner-wrapper">
              <Image 
                src={news.image} 
                alt={news.title} 
                width={1200} 
                height={600} 
                priority
                style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </section>

        {/* Double Column Editorial Content Block (Beau.vn style) */}
        <section className="article-body-section">
          <div className="container">
            <div className="article-editorial-grid">
              
              {/* Left Column: Sticky Sidebar Index & Actions (25% width) */}
              <aside className="article-editorial-sidebar">
                <div className="sticky-sidebar-content">
                  
                  {/* Back to index link */}
                  <Link href="/tin-tuc" className="sidebar-back-btn">
                    <ArrowLeft size={16} />
                    <span>Trở lại tin tức</span>
                  </Link>

                  <div className="sidebar-divider" />

                  {/* Share actions */}
                  <div className="sidebar-share-box">
                    <span className="share-box-label">Chia sẻ bài viết</span>
                    <div className="share-actions-row">
                      <button className="share-icon-btn" aria-label="Share on Facebook">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                        </svg>
                      </button>
                      <button className="share-icon-btn" aria-label="Share on LinkedIn">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                          <rect x="2" y="9" width="4" height="12" />
                          <circle cx="4" cy="4" r="2" />
                        </svg>
                      </button>
                      <button className="share-icon-btn" aria-label="Copy Link">
                        <Link2 size={18} />
                      </button>
                    </div>
                  </div>

                  <div className="sidebar-divider" />

                  {/* Table of Contents mockup */}
                  <div className="sidebar-toc">
                    <span className="toc-title">Nội dung chính</span>
                    <ul className="toc-list">
                      <li className="active"><a href="#leading">Lời mở đầu</a></li>
                      <li><a href="#section1">Chi tiết sự kiện</a></li>
                      <li><a href="#section2">Ý nghĩa & Định hướng</a></li>
                    </ul>
                  </div>

                </div>
              </aside>

              {/* Right Column: Editorial Body Content (75% width) */}
              <article className="article-editorial-body">
                <div 
                  className="rich-editorial-content"
                  dangerouslySetInnerHTML={{ __html: news.contentHtml }} 
                />
              </article>

            </div>
          </div>
        </section>

        {/* Bottom Related Articles (Có thể bạn quan tâm) */}
        <section className="article-related-section">
          <div className="container">
            <span className="related-eyebrow">XEM THÊM CHỦ ĐỀ KHÁC</span>
            <h2 className="related-section-title">Có Thể Bạn Quan Tâm</h2>
            
            <div className="related-news-grid">
              {related.map((item) => (
                <Link key={item.slug} href={`/tin-tuc/${item.slug}`} className="related-news-card-wrapper">
                  <div className="related-card-image">
                    <Image src={item.image} alt={item.title} fill style={{ objectFit: 'cover' }} />
                  </div>
                  <div className="related-card-body">
                    <span className="related-card-date">{item.date}</span>
                    <h4 className="related-card-title">{item.title}</h4>
                    <span className="related-card-link">
                      Đọc tiếp
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
