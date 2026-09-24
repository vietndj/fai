'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Clock, Calendar, Share2, Link2, User } from 'lucide-react';
import { getPostBySlug, getPostById, getPosts } from '@/lib/firestore';
import Footer from '@/components/Footer';

export default function PostDetailPage() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [related, setRelated] = useState([]);
  
  const [cleanHtml, setCleanHtml] = useState('');
  const [toc, setToc] = useState([]);
  const [activeTocId, setActiveTocId] = useState('');

  useEffect(() => {
    const loadPost = async () => {
      try {
        setLoading(true);
        let fetchedPost = await getPostBySlug(slug);
        if (!fetchedPost) {
          fetchedPost = await getPostById(slug);
        }
        
        if (fetchedPost) {
          setPost(fetchedPost);
          
          const allPosts = await getPosts({ group: 'doi-song' });
          const rel = allPosts.filter(p => p.id !== fetchedPost.id && p.published).slice(0, 3);
          setRelated(rel);
        } else {
          setError('Không tìm thấy bài viết');
        }
      } catch (err) {
        console.error('Error loading post:', err);
        setError('Có lỗi xảy ra khi tải bài viết');
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      loadPost();
    }
  }, [slug]);

  useEffect(() => {
    if (!post || typeof window === 'undefined') return;
    
    const parser = new DOMParser();
    const doc = parser.parseFromString(post.contentHtml || '', 'text/html');
    
    // 1. Remove forms
    const forms = doc.querySelectorAll('form, .wpcf7, iframe[src*="forms"], iframe[src*="docs.google.com/forms"]');
    forms.forEach(f => f.remove());
    
    // 2. Remove contact info at the bottom
    const allElements = Array.from(doc.body.children);
    for (let i = allElements.length - 1; i >= 0; i--) {
      const el = allElements[i];
      const text = el.textContent || '';
      const textLower = text.toLowerCase();
      if (
        textLower.includes('mọi thắc mắc') || 
        textLower.includes('viện đào tạo quốc tế fpt') || 
        textLower.includes('địa chỉ:') || 
        textLower.includes('hotline:') || 
        textLower.includes('điện thoại:') ||
        textLower.includes('liên hệ:') ||
        textLower.includes('thông tin liên hệ')
      ) {
        el.remove();
      } else {
        if (text.trim().length > 150) {
          break;
        }
      }
    }
    
    // 3. Extract TOC from h2, h3
    const extractedToc = [];
    const headings = doc.querySelectorAll('h2, h3');
    headings.forEach((heading, index) => {
      const id = heading.id || `heading-${index}`;
      heading.id = id;
      extractedToc.push({
        id,
        text: heading.textContent || '',
        level: heading.tagName.toLowerCase()
      });
    });
    
    setCleanHtml(doc.body.innerHTML);
    setToc(extractedToc);
  }, [post]);

  useEffect(() => {
    const handleScroll = () => {
      if (!toc.length) return;
      let currentActiveId = '';
      for (const item of toc) {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight / 2) {
            currentActiveId = item.id;
          }
        }
      }
      setActiveTocId(currentActiveId || toc[0]?.id);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [toc]);

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8fafc' }}>
        <p style={{ fontSize: '1.2rem', color: '#64748b' }}>Đang tải bài viết...</p>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8fafc', padding: '20px' }}>
        <h1 style={{ fontSize: '2rem', color: '#0f172a', marginBottom: '16px' }}>{error || 'Không tìm thấy bài viết'}</h1>
        <Link href="/doi-song" style={{ padding: '10px 20px', backgroundColor: 'var(--primary)', color: 'white', borderRadius: '8px', textDecoration: 'none' }}>
          Quay lại Đời sống FAI
        </Link>
      </div>
    );
  }

  return (
    <div className="article-page-container">
      
      <main className="article-main-wrapper">
        <section className="article-header-section">
          <div className="container">
            <div className="article-breadcrumb">
              <Link href="/">Trang chủ</Link>
              <span className="bc-divider">/</span>
              <Link href="/doi-song">Đời sống FAI</Link>
              <span className="bc-divider">/</span>
              <span className="bc-active">Chi tiết bài viết</span>
            </div>

            <span className="article-category-tag">{post.categoryId || 'Sự kiện'}</span>
            <h1 className="article-main-title">{post.title}</h1>

            <div className="article-meta-info">
              <div className="meta-item">
                <User size={16} />
                <span>{post.author || 'FAI Admin'}</span>
              </div>
              <div className="meta-item">
                <Calendar size={16} />
                <span>{post.date || 'Đang cập nhật'}</span>
              </div>
              {post.readTime && (
                <div className="meta-item">
                  <Clock size={16} />
                  <span>{post.readTime}</span>
                </div>
              )}
            </div>
          </div>
        </section>

        {post.image && (
          <section className="article-hero-banner-section">
            <div className="container">
              <div className="article-main-banner-wrapper">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  width={1200} 
                  height={600} 
                  priority
                  style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                />
              </div>
            </div>
          </section>
        )}

        <section className="article-body-section">
          <div className="container">
            <div className="article-editorial-grid">
              
              <aside className="article-editorial-sidebar">
                <div className="sticky-sidebar-content">
                  
                  <Link href="/doi-song" className="sidebar-back-btn">
                    <ArrowLeft size={16} />
                    <span>Trở lại đời sống</span>
                  </Link>

                  <div className="sidebar-divider" />

                  <div className="sidebar-share-box">
                    <span className="share-box-label">Chia sẻ bài viết</span>
                    <div className="share-actions-row">
                      <button className="share-icon-btn" aria-label="Share on Facebook">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                      </button>
                      <button className="share-icon-btn" aria-label="Share on LinkedIn">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
                      </button>
                      <button className="share-icon-btn" aria-label="Copy Link">
                        <Link2 size={18} />
                      </button>
                    </div>
                  </div>

                  {toc.length > 0 && (
                    <>
                      <div className="sidebar-divider" />
                      <div className="sidebar-toc">
                        <span className="toc-title">Nội dung chính</span>
                        <ul className="toc-list">
                          {toc.map(item => (
                            <li 
                              key={item.id} 
                              className={activeTocId === item.id ? 'active' : ''}
                              style={{ marginLeft: item.level === 'h3' ? '15px' : '0' }}
                            >
                              <a 
                                href={`#${item.id}`}
                                onClick={(e) => {
                                  e.preventDefault();
                                  document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                                }}
                              >
                                {item.text}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}

                </div>
              </aside>

              <article className="article-editorial-body">
                <div 
                  className="rich-editorial-content"
                  dangerouslySetInnerHTML={{ __html: cleanHtml || post.contentHtml || `<p>${post.excerpt}</p>` }} 
                />
                
              </article>

            </div>
          </div>
        </section>

        {related.length > 0 && (
          <section className="article-related-section">
            <div className="container">
              <span className="related-eyebrow">XEM THÊM BÀI VIẾT KHÁC</span>
              <h2 className="related-section-title">Có thể bạn quan tâm</h2>
              
              <div className="related-news-grid">
                {related.map((item) => (
                  <Link key={item.id} href={`/doi-song/${item.slug || item.id}`} className="related-news-card-wrapper">
                    <div className="related-card-image">
                      {item.image ? (
                        <Image src={item.image} alt={item.title} fill style={{ objectFit: 'cover' }} />
                      ) : (
                        <div style={{ width: '100%', height: '100%', backgroundColor: '#e2e8f0' }} />
                      )}
                    </div>
                    <div className="related-card-body">
                      <span className="related-card-date">{item.date || 'Đang cập nhật'}</span>
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
        )}
      </main>

      <Footer />
    </div>
  );
}
