'use client';

import { useState, useEffect, useRef } from 'react';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, X, ArrowRight, BookOpen, Coffee, Award, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { getCategories, getPosts } from '@/lib/firestore';

const corePillars = [
  {
    tag: 'HỌC',
    title: 'Học để hiểu - Hiểu để làm được!',
    desc: 'Tiếp cận kiến thức chuyên môn, cập nhật xu hướng và rèn luyện năng lực thông qua các project thực chiến.',
    image: '/fai_pillar_1.jpg'
  },
  {
    tag: 'LÀM',
    title: 'Học từ thực tế, làm ra sản phẩm, ứng dụng vào công việc',
    desc: 'Biến kiến thức thành project, sản phẩm, portfolio và những trải nghiệm có thể ứng dụng vào công việc.',
    image: '/fai_pillar_2.jpg'
  },
  {
    tag: 'TRẢI NGHIỆM',
    title: 'Không chỉ đi học - Hãy sống trọn FAI Life',
    desc: 'Từ workshop, talkshow, cuộc thi đến thể thao, hoạt động cộng đồng và những sân chơi mới - mỗi trải nghiệm là một cơ hội để thử sức, kết nối và khám phá phiên bản khác của chính mình.',
    image: '/fai_pillar_3.jpg'
  },
  {
    tag: 'KẾT NỐI',
    title: 'Mở rộng Network - Mở rộng cơ hội',
    desc: 'Kết nối với doanh nghiệp, chuyên gia, nhà tuyển dụng và cộng đồng FAI để cập nhật cơ hội việc làm và phát triển nghề nghiệp liên tục.',
    image: '/fai_pillar_4.jpg'
  }
];

// categoryBlocks data is now fetched from Firebase Firestore at runtime
// See: getCategories('doi-song') and getPosts({ categoryId })



function PostCardImage({ src, alt, date }) {
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <div style={{ position: 'relative', width: '100%', aspectRatio: '16/10', overflow: 'hidden' }}>
      <Image 
        src={imgSrc} 
        alt={alt || ''} 
        fill 
        style={{ objectFit: 'cover' }} 
        onError={() => setImgSrc('/fai_pillar_1.jpg')} 
      />
      <span style={{ position: 'absolute', top: '15px', left: '15px', background: 'var(--primary)', padding: '4px 10px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 800, color: '#ffffff', textTransform: 'uppercase' }}>
        {date}
      </span>
    </div>
  );
}

function CategoryBlockItem({ block, onSelectPost }) {
  const scrollRef = useRef(null);
  const [isGrabbing, setIsGrabbing] = useState(false);
  const isDown = useRef(false);
  const hasDragged = useRef(false);
  const startX = useRef(0);
  const scrollLeftVal = useRef(0);

  const handlePointerDown = (e) => {
    if (e.pointerType !== 'mouse') return;
    isDown.current = true;
    hasDragged.current = false;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeftVal.current = scrollRef.current.scrollLeft;
  };

  const handlePointerLeave = (e) => {
    if (e.pointerType !== 'mouse') return;
    isDown.current = false;
    setIsGrabbing(false);
  };

  const handlePointerUp = (e) => {
    if (e.pointerType !== 'mouse') return;
    isDown.current = false;
    setIsGrabbing(false);
  };

  const handlePointerMove = (e) => {
    if (e.pointerType !== 'mouse' || !isDown.current) return;
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    if (Math.abs(walk) > 5) {
      hasDragged.current = true;
      setIsGrabbing(true);
      e.preventDefault();
      scrollRef.current.scrollLeft = scrollLeftVal.current - walk;
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 380;
      scrollRef.current.scrollBy({
        left: direction === 'next' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const isLight = block.isLight;
  const bgColor = isLight ? '#ffffff' : '#070d18';
  const textColor = isLight ? 'var(--secondary)' : '#ffffff';
  const cardBg = isLight ? '#ffffff' : 'rgba(255,255,255,0.03)';
  const cardBorder = isLight ? '1px solid rgba(13,33,55,0.08)' : '1px solid rgba(255,255,255,0.08)';
  const cardShadow = isLight ? '0 10px 30px rgba(0,0,0,0.04)' : '0 10px 30px rgba(0,0,0,0.2)';
  const descColor = isLight ? 'var(--text-muted)' : 'rgba(255,255,255,0.65)';

  return (
    <section 
      id={block.id}
      style={{ 
        padding: '90px 0', 
        backgroundColor: bgColor, 
        color: textColor,
        position: 'relative',
        overflow: 'hidden',
        borderBottom: isLight ? '1px solid rgba(0,0,0,0.05)' : '1px solid rgba(255,255,255,0.05)'
      }}
    >
      <div className="container">
        {/* Centered Block Header */}
        <div style={{ textAlign: 'center', marginBottom: '45px' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.2em', color: 'var(--primary)', textTransform: 'uppercase', display: 'block', marginBottom: '10px' }}>
            {block.eyebrow}
          </span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, color: textColor, fontFamily: 'var(--font-sans)', margin: 0, whiteSpace: 'pre-line', lineHeight: '1.3' }}>
            {block.title}
          </h2>
          <p style={{ color: descColor, maxWidth: '620px', margin: '14px auto 0 auto', fontSize: '0.95rem', lineHeight: '1.65' }}>
            {block.desc}
          </p>
        </div>

        {/* Outer Wrapper with Side Arrows */}
        <div style={{ position: 'relative', width: '100%', padding: '0 10px' }}>
          <button 
            onClick={() => scroll('prev')}
            style={{
              position: 'absolute',
              left: '-20px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              backgroundColor: isLight ? '#ffffff' : 'rgba(255,255,255,0.1)',
              border: isLight ? '1px solid rgba(13,33,55,0.1)' : '1px solid rgba(255,255,255,0.15)',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10,
              color: isLight ? 'var(--secondary)' : '#ffffff',
              transition: 'all 0.3s ease',
            }}
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} strokeWidth={2.5} />
          </button>

          {/* Horizontal Scroll Track */}
          <div 
            ref={scrollRef}
            className="horizontal-timeline-wrapper"
            style={{ 
              display: 'flex', 
              gap: '30px', 
              overflowX: 'auto', 
              paddingBottom: '20px', 
              scrollSnapType: isGrabbing ? 'none' : 'x mandatory',
              scrollbarWidth: 'thin',
              scrollbarColor: isLight ? 'rgba(13,33,55,0.15) transparent' : 'rgba(255,255,255,0.2) transparent',
              cursor: isGrabbing ? 'grabbing' : 'grab',
              userSelect: 'none',
              WebkitUserSelect: 'none'
            }}
            onPointerDown={handlePointerDown}
            onPointerLeave={handlePointerLeave}
            onPointerUp={handlePointerUp}
            onPointerMove={handlePointerMove}
          >
            {(() => {
              const parsePostDate = (dStr) => {
                if (!dStr) return 0;
                const p = dStr.split('-');
                return p.length === 3 ? new Date(parseInt(p[2], 10), parseInt(p[1], 10) - 1, parseInt(p[0], 10)).getTime() : 0;
              };
              const sortedPosts = [...block.posts].sort((a, b) => parsePostDate(b.date) - parsePostDate(a.date));
              return sortedPosts.map((post) => (
                <div 
                  key={post.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (!hasDragged.current) {
                      onSelectPost(post);
                    }
                  }}
                  style={{
                    flex: '0 0 360px',
                    scrollSnapAlign: 'start',
                    background: cardBg,
                    border: cardBorder,
                    borderRadius: '16px',
                    boxShadow: cardShadow,
                    overflow: 'hidden',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                >
                  <PostCardImage src={post.image} alt={post.title} date={post.date} />
                  
                  <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px', flexGrow: 1 }}>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 800, lineHeight: '1.45', color: textColor, margin: 0, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', height: '50px', fontFamily: 'var(--font-sans)' }}>
                      {post.title}
                    </h3>
                    <p style={{ fontSize: '0.88rem', color: descColor, lineHeight: '1.6', margin: 0, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', height: '42px' }}>
                      {post.excerpt}
                    </p>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', fontWeight: 800, color: 'var(--primary)', marginTop: '10px' }}>
                      Xem chi tiết <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              ));
            })()}
          </div>

          <button 
            onClick={() => scroll('next')}
            style={{
              position: 'absolute',
              right: '-20px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              backgroundColor: isLight ? '#ffffff' : 'rgba(255,255,255,0.1)',
              border: isLight ? '1px solid rgba(13,33,55,0.1)' : '1px solid rgba(255,255,255,0.15)',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10,
              color: isLight ? 'var(--secondary)' : '#ffffff',
              transition: 'all 0.3s ease',
            }}
            aria-label="Next slide"
          >
            <ChevronRight size={20} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default function DoiSong() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [isGrabbing, setIsGrabbing] = useState(false);
  const [categoryBlocks, setCategoryBlocks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const timelineRef = useRef(null);

  // Fetch categories and posts from Firebase
  useEffect(() => {
    async function fetchData() {
      try {
        const categories = await getCategories('doi-song');
        const blocks = await Promise.all(
          categories.map(async (cat) => {
            const posts = await getPosts({ categoryId: cat.id, published: true });
            return { ...cat, posts };
          })
        );
        setCategoryBlocks(blocks);
      } catch (err) {
        console.error('Error fetching doi-song data:', err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);
  
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeftVal = useRef(0);

  const handlePointerDown = (e) => {
    if (e.pointerType !== 'mouse') return;
    isDown.current = true;
    setIsGrabbing(true);
    startX.current = e.pageX - timelineRef.current.offsetLeft;
    scrollLeftVal.current = timelineRef.current.scrollLeft;
  };

  const handlePointerLeave = (e) => {
    if (e.pointerType !== 'mouse') return;
    isDown.current = false;
    setIsGrabbing(false);
  };

  const handlePointerUp = (e) => {
    if (e.pointerType !== 'mouse') return;
    isDown.current = false;
    setIsGrabbing(false);
  };

  const handlePointerMove = (e) => {
    if (e.pointerType !== 'mouse') return;
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - timelineRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    timelineRef.current.scrollLeft = scrollLeftVal.current - walk;
  };

  const scrollTimeline = (direction) => {
    if (timelineRef.current) {
      const scrollAmount = 370;
      timelineRef.current.scrollBy({
        left: direction === 'next' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    if (selectedPost) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedPost]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedPost(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const handleHashScroll = () => {
      if (typeof window !== 'undefined' && window.location.hash) {
        const targetId = window.location.hash.replace('#', '');
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          setTimeout(() => {
            const headerOffset = 110;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }, 100);
        }
      }
    };

    handleHashScroll();
    window.addEventListener('hashchange', handleHashScroll);
    return () => window.removeEventListener('hashchange', handleHashScroll);
  }, []);

  return (
    <div className="student-life-page-container" style={{ backgroundColor: '#ffffff', color: '#1a2332' }}>
      
      <main className="student-life-main" style={{ padding: 0 }}>
        
        {/* BLOCK 1: Hero Section */}
        <section 
          className="student-life-hero-section" 
          style={{ 
            padding: '160px 0 80px 0', 
            background: 'linear-gradient(135deg, #050c1a 0%, #0D2137 100%)',
            color: '#ffffff',
            minHeight: '45vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div style={{
            position: 'absolute',
            width: '600px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0, 140, 255, 0.1) 0%, transparent 70%)',
            top: '10%',
            left: '-10%',
            pointerEvents: 'none',
            zIndex: 0
          }} />

          <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
            <span className="section-eyebrow" style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
              TRẢI NGHIỆM FAI
            </span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.2rem)', fontWeight: 800, color: '#ffffff', lineHeight: '1.15', marginTop: '16px', fontFamily: 'var(--font-sans)' }}>
              Trải nghiệm sinh viên
            </h1>
            <div style={{ maxWidth: '820px', margin: '24px auto 0 auto', textAlign: 'center' }}>
              <p style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '18px', lineHeight: '1.5' }}>
                “Một cộng đồng - nhiều hành trình - không có khuôn mẫu”
              </p>
              
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.02rem', lineHeight: '1.85', margin: 0 }}>
                Ở đây không có “mẫu số chung” của một sinh viên Viện đào tạo quốc tế FPT (FAI). Có người đến FAI để bắt đầu một hành trình nghề nghiệp. Có người rẽ hướng sang một lĩnh vực mới. Có người vừa đi làm, vừa đi học để nâng cấp chuyên môn. Có người đã có công việc, dự án riêng hay đang xây dựng doanh nghiệp nhưng vẫn tiếp tục học thêm mỗi ngày. FAI không định nghĩa người học bằng tuổi tác, xuất phát điểm hay công việc hiện tại.
              </p>

              <p style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginTop: '22px', fontStyle: 'italic', letterSpacing: '0.01em' }}>
                Mỗi FAIer một hành trình. Mỗi hành trình một câu chuyện. Và tất cả cùng gặp nhau tại FAI.
              </p>
            </div>
          </div>
        </section>

        {/* BLOCK 2: 4 TRỤ CỘT SINH VIÊN (HỌC - LÀM - TRẢI NGHIỆM - KẾT NỐI) */}
        <section 
          id="nhip-song"
          className="student-life-timeline-section" 
          style={{ 
            padding: '90px 0', 
            backgroundColor: '#F8FAFC', 
            color: 'var(--secondary)',
            position: 'relative',
            overflow: 'hidden',
            borderBottom: '1px solid rgba(0,0,0,0.05)'
          }}
        >
          <div className="container">
            <div className="section-header-centered" style={{ textAlign: 'center', marginBottom: '45px' }}>
              <span className="section-eyebrow" style={{ fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.2em', color: 'var(--primary)', textTransform: 'uppercase' }}>
                Mỗi FAIer một nhịp sống
              </span>
              <h2 className="section-headline" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, color: 'var(--secondary)', marginTop: '10px', fontFamily: 'var(--font-sans)' }}>
                Học - làm - trải nghiệm - kết nối
              </h2>
              <p style={{ color: 'rgba(13, 33, 55, 0.82)', maxWidth: '780px', margin: '14px auto 0 auto', fontSize: '0.98rem', lineHeight: '1.7' }}>
                Một ngày của FAIer có thể bắt đầu một ngày làm việc tiếp nối bằng những giờ học, một buổi chạy project, một workshop chuyên môn, những trận đấu thể thao cháy hết mình đến cuộc thi, chuyến đi doanh nghiệp và vô vàn khoảnh khắc “không có trong lớp học” hay đơn giản chỉ là cuộc hẹn kết nối với những người bạn cùng lớp.
              </p>
            </div>

            <div className="pillars-grid-wrapper" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
              {corePillars.map((item, idx) => (
                <div 
                  key={idx} 
                  className="pillar-info-card" 
                  style={{ 
                    background: '#ffffff',
                    border: '1px solid rgba(13, 33, 55, 0.08)',
                    borderRadius: '20px',
                    padding: '24px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  {/* Primary Landmark Title */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', paddingBottom: '12px', borderBottom: '2px solid rgba(249, 115, 22, 0.12)' }}>
                    <h3 
                      style={{ 
                        fontSize: '1.5rem', 
                        fontWeight: 900, 
                        color: 'var(--primary)', 
                        margin: 0,
                        fontFamily: 'var(--font-sans)',
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase',
                        lineHeight: '1.1'
                      }}
                    >
                      {item.tag}
                    </h3>
                    <span 
                      style={{ 
                        fontSize: '0.82rem', 
                        fontWeight: 800, 
                        color: 'var(--primary)', 
                        background: 'rgba(249, 115, 22, 0.08)',
                        padding: '3px 10px',
                        borderRadius: '12px',
                        fontFamily: 'var(--font-sans)', 
                        letterSpacing: '0.05em' 
                      }}
                    >
                      0{idx + 1}
                    </span>
                  </div>
                  
                  {/* Image Showcase */}
                  <div 
                    style={{ 
                      position: 'relative', 
                      width: '100%', 
                      aspectRatio: '16/10', 
                      borderRadius: '14px', 
                      overflow: 'hidden', 
                      marginBottom: '18px',
                      boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
                    }}
                  >
                    <Image src={item.image} alt={item.title} fill style={{ objectFit: 'cover' }} className="timeline-img" />
                  </div>
                  
                  {/* Sub-headline Slogan */}
                  <h4 style={{ fontSize: '1.08rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '10px', lineHeight: '1.45', fontFamily: 'var(--font-sans)' }}>
                    {item.title}
                  </h4>
                  
                  {/* Description */}
                  <p style={{ fontSize: '0.88rem', color: 'rgba(13, 33, 55, 0.72)', lineHeight: '1.65', margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5 CATEGORY BLOCKS ALTERNATING DARK/LIGHT WITH FPT ORANGE HIGHLIGHT */}
        {isLoading ? (
          <section style={{ padding: '120px 0', textAlign: 'center', background: '#0a1628' }}>
            <div className="container">
              <div style={{ width: '48px', height: '48px', border: '3px solid rgba(243,112,33,0.2)', borderTop: '3px solid #f37021', borderRadius: '50%', animation: 'spin 0.8s linear infinite', margin: '0 auto 20px' }} />
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>Đang tải bài viết...</p>
            </div>
          </section>
        ) : categoryBlocks.map((block) => (
          <CategoryBlockItem key={block.id} block={block} onSelectPost={setSelectedPost} />
        ))}

        {/* Support Hotline CTA (LIGHT BACKGROUND) */}
        <section 
          className="student-life-cta-section" 
          style={{ 
            padding: '80px 0', 
            backgroundColor: '#F8FAFC',
            color: 'var(--secondary)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            borderTop: '1px solid rgba(0, 0, 0, 0.05)'
          }}
        >
          <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
            <span className="section-eyebrow" style={{ color: 'var(--primary)', opacity: 1, fontWeight: 800, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
              KẾT NỐI VỚI CHÚNG TÔI
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4.5vw, 2.5rem)', fontWeight: 800, color: 'var(--secondary)', marginTop: '12px', marginBottom: '18px', fontFamily: 'var(--font-sans)' }}>
              Bạn muốn trải nghiệm đời sống sinh viên FAI thực tế?
            </h2>
            <p style={{ maxWidth: '650px', color: 'var(--text-muted)', margin: '0 auto 30px auto', fontSize: '1.05rem', lineHeight: '1.75' }}>
              Hãy đăng ký tham gia các hoạt động Campus Tour, lớp học thử miễn phí hoặc liên hệ ngay hotline hỗ trợ tuyển sinh để được giải đáp mọi thắc mắc.
            </p>
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/tuyen-sinh" className="btn btn-primary" style={{ padding: '14px 32px', fontSize: '1rem' }}>
                Đăng ký tư vấn ngay
              </Link>
              <a href="tel:02473008855" className="btn btn-secondary" style={{ padding: '14px 32px', fontSize: '1rem', background: '#ffffff', color: 'var(--secondary)' }}>
                Hotline: 024 7300 8855
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* ARTICLE DETAIL MODAL */}
      {selectedPost && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            backgroundColor: 'rgba(5, 12, 26, 0.85)',
            backdropFilter: 'blur(8px)',
            animation: 'fadeInUp 0.3s ease'
          }}
          onClick={() => setSelectedPost(null)}
        >
          <div 
            style={{
              backgroundColor: '#ffffff',
              color: '#1a2332',
              borderRadius: '24px',
              maxWidth: '850px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.35)',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Bar */}
            <div 
              style={{
                padding: '20px 30px',
                borderBottom: '1px solid rgba(0,0,0,0.06)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'sticky',
                top: 0,
                backgroundColor: '#ffffff',
                zIndex: 10
              }}
            >
              <span style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--primary)', letterSpacing: '0.1em' }}>
                {selectedPost.date}
              </span>
              <button 
                onClick={() => setSelectedPost(null)}
                style={{
                  background: '#f1f5f9',
                  border: 'none',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: 'var(--secondary)',
                  transition: 'all 0.2s ease'
                }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Content */}
            <div style={{ padding: '30px 40px 40px 40px' }}>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, color: 'var(--secondary)', lineHeight: '1.3', marginBottom: '20px', fontFamily: 'var(--font-sans)' }}>
                {selectedPost.title}
              </h2>
              
              <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', borderRadius: '16px', overflow: 'hidden', marginBottom: '30px' }}>
                <Image src={selectedPost.image} alt={selectedPost.title} fill style={{ objectFit: 'cover' }} />
              </div>

              <div 
                className="article-body-html"
                style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#334155' }}
                dangerouslySetInnerHTML={{ __html: selectedPost.contentHtml || `<p>${selectedPost.excerpt}</p>` }}
              />

              {selectedPost.sourceUrl && (
                <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '1px solid rgba(0,0,0,0.08)' }}>
                  <a 
                    href={selectedPost.sourceUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: '8px', 
                      background: 'var(--primary)', 
                      color: '#ffffff', 
                      padding: '12px 24px', 
                      borderRadius: '30px', 
                      fontWeight: 700, 
                      fontSize: '0.95rem',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    Xem bài viết gốc trên trang báo
                    <ArrowRight size={16} />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
