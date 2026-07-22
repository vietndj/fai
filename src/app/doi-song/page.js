'use client';

import { useState, useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, X, ArrowRight, BookOpen, Coffee, Award, Play, ChevronLeft, ChevronRight } from 'lucide-react';

const dailyTimeline = [
  {
    time: '08:30',
    title: 'Khởi đầu ngày mới tại FAI Zone café',
    desc: 'Sinh viên FAI khởi đầu ngày mới bằng việc gặp gỡ bạn bè, thưởng thức cà phê và thảo luận nhanh về các bài tập lớn tại không gian sinh hoạt chung hiện đại.',
    image: '/fai_student_life_1.png'
  },
  {
    time: '09:00',
    title: 'Học tập thực chiến tại phòng Lab',
    desc: 'Bắt đầu ca học. Học viên Aptech viết code gỡ lỗi, học viên Arena dựng hình 3D nhân vật, còn học viên Skillking phân tích số liệu quảng cáo thực tế trên các kênh số.',
    image: '/fai_graduation_hall.jpg'
  },
  {
    time: '12:00',
    title: 'Nạp năng lượng & Nghỉ trưa',
    desc: 'Cùng nhóm bạn thưởng thức bữa trưa nóng hổi tại canteen trường hoặc các quán ăn sinh viên xung quanh campus. Đây là thời gian lý tưởng để trò chuyện và kết nối.',
    image: '/fai_graduation_crowd.png'
  },
  {
    time: '14:00',
    title: 'Làm việc nhóm e-Project',
    desc: 'Cùng nhóm của mình tập trung tại khu vực thư viện mở hoặc phòng tự học. Các bạn phân chia công việc thiết kế, lập trình hoặc viết content cho đồ án kỳ.',
    image: '/fai_banner_aptech_v2.png'
  },
  {
    time: '16:30',
    title: 'Giải bóng đá FAI Champion League',
    desc: 'Rèn luyện thể lực và tinh thần đồng đội qua các trận bóng đá giao hữu sôi nổi, kịch tính giữa các lớp thuộc 3 phân hệ đào tạo tại FAI.',
    image: '/fai_student_life_2.png'
  },
  {
    time: '18:30',
    title: 'Workshop & Tọa đàm doanh nghiệp',
    desc: 'Tham gia các buổi workshop hướng nghiệp, lắng nghe chia sẻ từ Giám đốc Sáng tạo, Tech Lead về lộ trình thăng tiến và cách thiết lập CV chuẩn tuyển dụng.',
    image: '/fai_graduation_handshake.png'
  }
];

const categoryBlocks = [
  {
    id: 'graduation',
    title: 'Lễ tốt nghiệp qua các năm',
    eyebrow: 'Mốc son vinh quang',
    themeBg: '#050d1a',
    accentColor: '#f37021',
    posts: [
      {
        id: 'grad-2026',
        title: 'Lễ tốt nghiệp FAI 2026: Vinh danh hàng trăm tân khoa xuất sắc',
        date: '20-06-2026',
        image: '/fai_graduation_crowd.png',
        excerpt: 'Khoảnh khắc xúc động khi các tân khoa Aptech, Arena và Skillking chính thức nhận bằng tốt nghiệp chuẩn quốc tế.',
        contentHtml: `<p class="lead">Lễ tốt nghiệp FAI 2026 đã diễn ra trong không khí trang trọng và đầy cảm xúc với sự tham gia của đông đảo phụ huynh, giảng viên và doanh nghiệp đối tác.</p><p>Các sinh viên xuất sắc nhất đã nhận được bằng tốt nghiệp và những suất học bổng làm việc trực tiếp từ các tập đoàn công nghệ hàng đầu.</p>`
      },
      {
        id: 'grad-speech',
        title: 'Bài phát biểu truyền cảm hứng từ Tân khoa Thủ khoa FAI',
        date: '18-06-2026',
        image: '/fai_graduation_speech.jpg',
        excerpt: 'Hành trình 2 năm từ người chưa biết lập trình đến vị trí Tech Lead tại FPT Software.',
        contentHtml: `<p class="lead">Nhìn lại chặng đường 2 năm học tập tại FAI, thủ khoa chia sẻ về những đêm miệt mài gỡ code đồ án e-Project và sự đồng hành tận tâm của thầy cô.</p>`
      },
      {
        id: 'grad-handshake',
        title: 'Nghi thức tuyên hứa tân khoa và trao bằng chứng nhận quốc tế',
        date: '15-06-2026',
        image: '/fai_graduation_handshake.png',
        excerpt: 'Lễ trao bằng đánh dấu sự trưởng thành và sẵn sàng chinh phục thị trường lao động toàn cầu của sinh viên.',
        contentHtml: `<p class="lead">Nghi thức trang trọng khẳng định chất lượng đào tạo và cam kết đồng hành cùng sự nghiệp học viên của FAI.</p>`
      }
    ]
  },
  {
    id: 'enterprise',
    title: 'Doanh nghiệp & FAI',
    eyebrow: 'Kết nối việc làm thực chiến',
    themeBg: '#081627',
    accentColor: '#29a9e1',
    posts: [
      {
        id: 'ent-visit',
        title: 'Kiến tập tại FPT Software: Chạm ngõ quy trình làm việc chuẩn toàn cầu',
        date: '10-06-2026',
        image: '/fai_banner_aptech_v2.png',
        excerpt: 'Học viên tham quan trực tiếp các văn phòng dự án lớn, nghe chia sẻ từ các Tech Lead và định hướng nghề nghiệp sớm.',
        contentHtml: `<p class="lead">Chuyến đi giúp sinh viên hiểu sâu sắc môi trường làm việc thực tế và quy trình phát triển phần mềm chuẩn quốc tế.</p>`
      },
      {
        id: 'ent-jobfair',
        title: 'Ngày hội tuyển dụng FAI Job Fair: Cầu nối trực tiếp đến 50+ doanh nghiệp',
        date: '05-06-2026',
        image: '/fai_graduation_handshake.png',
        excerpt: 'Ngày hội phỏng vấn trực tiếp, nộp CV và nhận học bổng làm việc tại các tập đoàn công nghệ & sáng tạo hàng đầu.',
        contentHtml: `<p class="lead">Rất nhiều bạn sinh viên xuất sắc đã nhận được offer làm việc chính thức ngay tại ngày hội trước khi nhận bằng tốt nghiệp.</p>`
      },
      {
        id: 'ent-agency',
        title: 'Tọa đàm cùng Giám đốc Sáng tạo: Xu hướng nhân sự thiết kế & AI 2026',
        date: '01-06-2026',
        image: '/fai_banner_arena_v2.jpg',
        excerpt: 'Buổi chia sẻ cởi mở về cách thiết lập portfolio gây ấn tượng và tư duy thiết kế kết hợp trí tuệ nhân tạo.',
        contentHtml: `<p class="lead">Các chuyên gia hàng đầu từ agency truyền thông giải đáp những câu hỏi thực tế về phỏng vấn và thăng tiến nghề nghiệp.</p>`
      }
    ]
  },
  {
    id: 'sharing',
    title: 'Nhỏ to cùng chia sẻ',
    eyebrow: 'Góc tâm sự & kinh nghiệm',
    themeBg: '#0f172a',
    accentColor: '#ffb600',
    posts: [
      {
        id: 'share-study',
        title: 'Kinh nghiệm vượt qua các kỳ thi e-Project không ngủ của sinh viên Aptech',
        date: '25-05-2026',
        image: '/fai_student_life_1.png',
        excerpt: 'Những bí quyết quản lý thời gian, phân chia công việc nhóm và giữ năng lượng tích cực trong tuần bảo vệ đồ án.',
        contentHtml: `<p class="lead">Đồ án e-Project là thử thách lớn nhất nhưng cũng là trải nghiệm đáng nhớ nhất tạo nên bản lĩnh lập trình viên FAI.</p>`
      },
      {
        id: 'share-portfolio',
        title: 'Bí kíp xây dựng Portfolio thiết kế ấn tượng ngay từ năm nhất',
        date: '20-05-2026',
        image: '/fai_banner_arena_v2.jpg',
        excerpt: 'Cách lựa chọn tác phẩm, kể câu chuyện thiết kế và showcase dự án UI/UX chuẩn phong cách agency.',
        contentHtml: `<p class="lead">Một Portfolio chỉn chu là chìa khóa mở ra hàng loạt cơ hội làm việc freelance và chính thức cho dân Arena.</p>`
      },
      {
        id: 'share-life',
        title: 'Làm thế nào để cân bằng giữa học tập, CLB và công việc làm thêm?',
        date: '15-05-2026',
        image: '/fai_student_life_2.png',
        excerpt: 'Lời khuyên chân thành từ các cựu sinh viên FAI đã thành công trong việc sắp xếp thời gian hiệu quả.',
        contentHtml: `<p class="lead">Học cách ưu tiên công việc quan trọng và tận hưởng trọn vẹn những năm tháng sinh viên đầy nhiệt huyết.</p>`
      }
    ]
  },
  {
    id: 'contests',
    title: 'Sân chơi & giải thưởng',
    eyebrow: 'Khai phóng tài năng',
    themeBg: '#1a090a',
    accentColor: '#ed232a',
    posts: [
      {
        id: 'contest-techwiz',
        title: 'Học viên FAI xuất sắc giành giải cao tại Hackathon TechWiz toàn cầu',
        date: '12-05-2026',
        image: '/fai_banner_chip_design_v2.png',
        excerpt: 'Đội tuyển FAI vượt qua hàng nghìn đối thủ quốc tế để khẳng định năng lực lập trình và sáng tạo.',
        contentHtml: `<p class="lead">TechWiz là đấu trường công nghệ uy tín do Aptech Worldwide tổ chức hàng năm cho sinh viên toàn thế giới.</p>`
      },
      {
        id: 'contest-design',
        title: 'Triển lãm đồ án sáng tạo Creative Show: Nơi tôn vinh các thiết kế xuất sắc',
        date: '08-05-2026',
        image: '/fai_graduation_hall.jpg',
        excerpt: 'Quy tụ hàng trăm tác phẩm 2D, 3D, Video và Game Art độc đáo do chính tay sinh viên Arena thực hiện.',
        contentHtml: `<p class="lead">Sự kiện thu hút đông đảo nhà thiết kế, đạo diễn và agency uy tín đến tham quan và đánh giá sản phẩm.</p>`
      },
      {
        id: 'contest-marketing',
        title: 'Skillking Digital Pitching: Cuộc thi lập chiến dịch tiếp thị số ngân sách thật',
        date: '02-05-2026',
        image: '/fai_banner_skillking_v2.png',
        excerpt: 'Các nhóm sinh viên trực tiếp bảo vệ kế hoạch Marketing trước hội đồng giám khảo là các Digital Directors.',
        contentHtml: `<p class="lead">Trải nghiệm thực chiến giúp sinh viên tự tin quản lý ngân sách và tối ưu hóa hiệu quả chiến dịch số.</p>`
      }
    ]
  },
  {
    id: 'community',
    title: 'FAI & cộng đồng',
    eyebrow: 'Trách nhiệm xã hội & Trải nghiệm',
    themeBg: '#061a12',
    accentColor: '#10b981',
    posts: [
      {
        id: 'comm-football',
        title: 'Giải bóng đá FAI Champion League: Gắn kết tinh thần thể thao & đồng đội',
        date: '28-04-2026',
        image: '/fai_student_life_1.png',
        excerpt: 'Sân chơi thể thao lành mạnh, giao lưu thể chất và thắt chặt tinh thần hữu nghị giữa học viên các phân hệ.',
        contentHtml: `<p class="lead">Giải đấu thường niên tạo không khí sôi nổi và thắt chặt tình đoàn kết trong cộng đồng sinh viên FAI.</p>`
      },
      {
        id: 'comm-charity',
        title: 'Mùa hè xanh FAI: Hành trình chia sẻ yêu thương và chuyển đổi số cho cộng đồng',
        date: '20-04-2026',
        image: '/fai_graduation_crowd.png',
        excerpt: 'Sinh viên FAI mang tri thức công nghệ và những phần quà ý nghĩa đến các vùng xa.',
        contentHtml: `<p class="lead">Hoạt động tình nguyện giúp sinh viên phát triển tinh thần nhân văn và trách nhiệm xã hội.</p>`
      },
      {
        id: 'comm-campustour',
        title: 'Ngày hội Open Day: Đón hàng nghìn học sinh THPT trải nghiệm công nghệ FAI',
        date: '15-04-2026',
        image: '/fai_banner_ai_agent_v2.png',
        excerpt: 'Các bạn học sinh được trải nghiệm viết code, vẽ Wacom và tương tác cùng các trợ lý AI Agent.',
        contentHtml: `<p class="lead">Open Day mang đến góc nhìn chân thực về môi trường đào tạo công nghệ chuẩn quốc tế tại FAI.</p>`
      }
    ]
  }
];

function CategoryBlockItem({ block, onSelectPost }) {
  const scrollRef = useRef(null);
  const [isGrabbing, setIsGrabbing] = useState(false);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeftVal = useRef(0);

  const handlePointerDown = (e) => {
    if (e.pointerType !== 'mouse') return;
    isDown.current = true;
    setIsGrabbing(true);
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
    if (e.pointerType !== 'mouse') return;
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeftVal.current - walk;
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

  return (
    <section 
      style={{ 
        padding: '80px 0', 
        backgroundColor: block.themeBg, 
        color: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(255,255,255,0.06)'
      }}
    >
      <div className="container">
        {/* Block Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '35px' }}>
          <div>
            <span style={{ fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.2em', color: block.accentColor, textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
              {block.eyebrow}
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', fontWeight: 800, color: '#ffffff', fontFamily: 'var(--font-sans)', margin: 0 }}>
              {block.title}
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div style={{ display: 'flex', gap: '12px' }}>
            <button 
              onClick={() => scroll('prev')}
              aria-label="Previous posts"
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              <ChevronLeft size={20} strokeWidth={2.5} />
            </button>
            <button 
              onClick={() => scroll('next')}
              aria-label="Next posts"
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              <ChevronRight size={20} strokeWidth={2.5} />
            </button>
          </div>
        </div>

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
            scrollbarColor: 'rgba(255,255,255,0.2) transparent',
            cursor: isGrabbing ? 'grabbing' : 'grab',
            userSelect: 'none',
            WebkitUserSelect: 'none'
          }}
          onPointerDown={handlePointerDown}
          onPointerLeave={handlePointerLeave}
          onPointerUp={handlePointerUp}
          onPointerMove={handlePointerMove}
        >
          {block.posts.map((post) => (
            <div 
              key={post.id}
              onClick={() => onSelectPost(post)}
              style={{
                flex: '0 0 360px',
                scrollSnapAlign: 'start',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '16px',
                overflow: 'hidden',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                pointerEvents: isGrabbing ? 'none' : 'auto'
              }}
            >
              <div style={{ position: 'relative', width: '100%', aspectRatio: '16/10', overflow: 'hidden' }}>
                <Image src={post.image} alt={post.title} fill style={{ objectFit: 'cover' }} />
                <span style={{ position: 'absolute', top: '15px', left: '15px', background: 'rgba(5,13,26,0.85)', padding: '4px 10px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 800, color: block.accentColor, textTransform: 'uppercase', border: '1px solid rgba(255,255,255,0.1)' }}>
                  {post.date}
                </span>
              </div>
              
              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px', flexGrow: 1 }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, lineHeight: '1.45', color: '#ffffff', margin: 0, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', height: '50px', fontFamily: 'var(--font-sans)' }}>
                  {post.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.6)', lineHeight: '1.6', margin: 0, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', height: '42px' }}>
                  {post.excerpt}
                </p>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', fontWeight: 800, color: block.accentColor, marginTop: '10px' }}>
                  Xem chi tiết <ArrowRight size={14} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function DoiSong() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [isGrabbing, setIsGrabbing] = useState(false);
  const timelineRef = useRef(null);
  
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

  return (
    <div className="student-life-page-container" style={{ backgroundColor: '#ffffff', color: '#1a2332' }}>
      <Header />

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

          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <span className="section-eyebrow" style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
              TRẢI NGHIỆM FAI
            </span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.2rem)', fontWeight: 800, color: '#ffffff', lineHeight: '1.15', marginTop: '20px', fontFamily: 'var(--font-sans)' }}>
              Đời sống sinh viên
            </h1>
            <p style={{ maxWidth: '650px', color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', lineHeight: '1.75', marginTop: '25px' }}>
              Vượt qua giới hạn phòng học — tại FAI, cuộc sống sinh viên là chuỗi ngày rực rỡ sắc màu với các câu lạc bộ thực chiến, sự kiện teambuilding sôi động và cơ hội kiến tập doanh nghiệp từ sớm.
            </p>
          </div>
        </section>

        {/* BLOCK 2: Một ngày của sinh viên FAI */}
        <section 
          className="student-life-timeline-section" 
          style={{ 
            padding: '100px 0', 
            backgroundColor: '#F8F5F0', 
            color: 'var(--secondary)',
            minHeight: '75vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            overflow: 'hidden'
          }}
        >
          <div className="container">
            <div className="section-header-centered" style={{ textAlign: 'center', marginBottom: '50px' }}>
              <span className="section-eyebrow" style={{ fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.2em', color: 'var(--primary)', textTransform: 'uppercase' }}>
                DAILY ROUTINE
              </span>
              <h2 className="section-headline" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, color: 'var(--secondary)', marginTop: '10px', fontFamily: 'var(--font-sans)' }}>
                Một ngày của sinh viên FAI
              </h2>
              <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '20px auto 0 auto', fontSize: '0.95rem', lineHeight: '1.7' }}>
                Khám phá lịch trình học tập thực chiến đầy năng động và thú vị của sinh viên tại Viện Đào Tạo Quốc Tế FPT.
              </p>
            </div>

            <div style={{ position: 'relative', width: '100%', padding: '0 10px' }}>
              <button 
                onClick={() => scrollTimeline('prev')}
                style={{
                  position: 'absolute',
                  left: '-20px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  backgroundColor: '#ffffff',
                  border: '1px solid rgba(13, 33, 55, 0.08)',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  zIndex: 10,
                  color: 'var(--secondary)',
                  transition: 'all 0.3s ease',
                }}
                aria-label="Previous timeline slide"
              >
                <ChevronLeft size={20} strokeWidth={2.5} />
              </button>

              <div 
                ref={timelineRef}
                className="horizontal-timeline-wrapper" 
                style={{ 
                  display: 'flex', 
                  gap: '30px', 
                  overflowX: 'auto', 
                  paddingBottom: '30px', 
                  scrollSnapType: isGrabbing ? 'none' : 'x mandatory',
                  scrollbarWidth: 'thin',
                  scrollbarColor: 'rgba(13,33,55,0.15) transparent',
                  cursor: isGrabbing ? 'grabbing' : 'grab',
                  userSelect: 'none',
                  WebkitUserSelect: 'none'
                }}
                onPointerDown={handlePointerDown}
                onPointerLeave={handlePointerLeave}
                onPointerUp={handlePointerUp}
                onPointerMove={handlePointerMove}
              >
                {dailyTimeline.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="horizontal-timeline-card" 
                    style={{ 
                      flex: '0 0 340px', 
                      scrollSnapAlign: 'start',
                      background: '#ffffff',
                      border: '1px solid rgba(13, 33, 55, 0.05)',
                      borderRadius: '16px',
                      padding: '28px',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
                      transition: 'all 0.3s ease',
                      pointerEvents: isGrabbing ? 'none' : 'auto'
                    }}
                  >
                    <span 
                      className="timeline-card-time" 
                      style={{ 
                        fontSize: '2rem', 
                        fontWeight: 800, 
                        color: 'var(--primary)', 
                        display: 'block', 
                        marginBottom: '16px',
                        fontFamily: 'var(--font-sans)'
                      }}
                    >
                      {item.time}
                    </span>
                    
                    <div 
                      className="timeline-card-img-wrapper" 
                      style={{ 
                        position: 'relative', 
                        width: '100%', 
                        aspectRatio: '16/10', 
                        borderRadius: '12px', 
                        overflow: 'hidden', 
                        marginBottom: '20px',
                        boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
                        pointerEvents: 'none'
                      }}
                    >
                      <Image src={item.image} alt={item.title} fill style={{ objectFit: 'cover' }} className="timeline-img" />
                    </div>
                    
                    <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '10px', lineHeight: '1.4', fontFamily: 'var(--font-sans)' }}>
                      {item.title}
                    </h4>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.7', margin: 0 }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => scrollTimeline('next')}
                style={{
                  position: 'absolute',
                  right: '-20px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  backgroundColor: '#ffffff',
                  border: '1px solid rgba(13, 33, 55, 0.08)',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  zIndex: 10,
                  color: 'var(--secondary)',
                  transition: 'all 0.3s ease',
                }}
                aria-label="Next timeline slide"
              >
                <ChevronRight size={20} strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </section>

        {/* 5 CATEGORY BLOCKS (Lễ tốt nghiệp, Doanh nghiệp, Nhỏ to cùng chia sẻ, Sân chơi & giải thưởng, FAI & cộng đồng) */}
        {categoryBlocks.map((block) => (
          <CategoryBlockItem key={block.id} block={block} onSelectPost={setSelectedPost} />
        ))}

        {/* Support Hotline CTA */}
        <section 
          className="student-life-cta-section" 
          style={{ 
            padding: '60px 0', 
            backgroundColor: '#ffffff',
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
              <a href="tel:0983883883" className="btn btn-secondary" style={{ padding: '14px 32px', fontSize: '1rem', background: '#F8F5F0', color: 'var(--secondary)' }}>
                Hotline: 0983 883 883
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
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
