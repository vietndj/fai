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
    image: '/fai_banner_aptech.png'
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

const activities = [
  {
    id: 1,
    title: 'CLB Lập trình Aptech Developer Club: Vững vàng chuyên môn phần mềm',
    category: 'CLB Học Thuật',
    date: '20-06-2026',
    image: '/fai_graduation_hall.jpg',
    excerpt: 'Sân chơi giao lưu thuật toán, phát triển phần mềm di động, làm game và tham gia thi Hackathon TechWiz toàn cầu.',
    contentHtml: `
      <p class="lead">Được thành lập từ năm 2018, Aptech Developer Club là nơi hội tụ các sinh viên đam mê lập trình, thuật toán và công nghệ số tại Viện Đào Tạo Quốc Tế FPT.</p>
      
      <h2>Nơi nuôi dưỡng đam mê lập trình thực chiến</h2>
      <p>Tại đây, các bạn sinh viên không chỉ trao đổi về các bài tập trên lớp, mà cùng nhau bắt tay thực hiện các dự án thực tế: từ website quản lý học tập, ứng dụng di động theo dõi sức khoẻ đến các hệ thống tự động hoá tích hợp AI thông minh.</p>
      
      <p>Hàng tuần, CLB tổ chức các buổi Code-along chuyên sâu về cấu trúc dữ liệu, thuật toán nâng cao và các framework hiện đại như Next.js, Node.js, Spring Boot hay Django.</p>
      
      <h2>Bệ phóng cho các cuộc thi Hackathon quốc tế</h2>
      <p>Câu lạc bộ là nôi tuyển chọn và bồi dưỡng các đội tuyển tham dự cuộc thi lập trình TechWiz toàn cầu do Tập đoàn Aptech Ấn Độ tổ chức. Qua nhiều năm tham gia, CLB tự hào đóng góp nhiều giải thưởng lớn, khẳng định bản lĩnh của lập trình viên FAI trên đấu trường quốc tế.</p>
    `
  },
  {
    id: 2,
    title: 'Arena Design Studio: Khai phá tư duy mỹ thuật & sáng tạo hình ảnh số',
    category: 'CLB Sáng Tạo',
    date: '18-06-2026',
    image: '/fai_graduation_crowd.png',
    excerpt: 'Sân chơi giao lưu cho các nghệ sĩ trẻ đam mê ký họa, thiết kế đồ hoạ thương hiệu, làm phim ngắn và hoạt hình 3D.',
    contentHtml: `
      <p class="lead">Arena Design Studio không chỉ là một câu lạc bộ — đây là không gian nghệ thuật mở, nơi mọi tư duy thiết kế đột phá được tự do thể hiện và phát triển thành sản phẩm sáng tạo.</p>
      
      <h2>Không gian sáng tạo nghệ thuật không giới hạn</h2>
      <p>CLB thường xuyên tổ chức các buổi ký họa dã ngoại ngoài trời, các workshop nâng cao kỹ năng sử dụng Wacom, vẽ minh họa digital 2D và tạo mô hình nhân vật hoạt hình 3D (3D Modeling) phức tạp.</p>
      
      <p>Học viên tham gia sẽ được chia sẻ kinh nghiệm xây dựng Portfolio cá nhân chuyên nghiệp để thu hút các nhà tuyển dụng hàng đầu ngay từ học kỳ 2.</p>
      
      <h2>Show diễn đồ án tốt nghiệp Creative Show thường niên</h2>
      <p>CLB là lực lượng nòng cốt hỗ trợ tổ chức triển lãm đồ án sáng tạo hàng năm của Arena. Nơi đây quy tụ hàng chục nhà thiết kế, đạo diễn mỹ thuật của các creative agency lớn đến để thẩm định sản phẩm và trực tiếp săn đón nhân sự chất lượng cao.</p>
    `
  },
  {
    id: 3,
    title: 'Skillking Pulse Marketing Hub: Xây dựng chiến dịch tiếp thị số thực chiến',
    category: 'CLB Tiếp Thị',
    date: '15-06-2026',
    image: '/fai_banner_skillking.png',
    excerpt: 'Thực hành lập kế hoạch nội dung mạng xã hội, setup quảng cáo Ads ngân sách thật và đo lường phễu chuyển đổi số.',
    contentHtml: `
      <p class="lead">Skillking Pulse là cộng đồng năng động dành cho các marketers trẻ tuổi, đam mê dữ liệu tiếp thị số và xu hướng phát triển phễu tăng trưởng doanh nghiệp.</p>
      
      <h2>Học đi đôi với hành cùng ngân sách thực tế</h2>
      <p>CLB hoạt động theo mô hình một Agency thu nhỏ. Các thành viên được chia nhóm để trực tiếp xây dựng fanpage, sản xuất video ngắn TikTok thương mại, chạy chiến dịch SEO website và trực tiếp setup quảng cáo Google/Meta Ads sử dụng ngân sách thật do nhà trường tài trợ.</p>
      
      <p>Qua đó, sinh viên rèn luyện được tư duy nhạy bén trước các số liệu tiếp thị (CTR, CPA, ROI) và nắm vững cách tối ưu hóa phễu khách hàng số.</p>
      
      <h2>Đêm hội Pitching & Kết nối Agency lớn</h2>
      <p>Hàng quý, CLB tổ chức cuộc thi lập kế hoạch Digital Marketing tổng thể mô phỏng các buổi pitching đấu thầu dự án của doanh nghiệp thực tế. Ban giám khảo là các Giám đốc Chiến lược, Digital Planners từ các tập đoàn truyền thông lớn, đem lại phản hồi thực tế và cơ hội việc làm đắt giá.</p>
    `
  },
  {
    id: 4,
    title: 'Kiến tập tại FPT Software: Chạm ngõ quy trình làm việc chuẩn toàn cầu',
    category: 'TRẢI NGHIỆM DOANH NGHIỆP',
    date: '10-06-2026',
    image: '/fai_banner_aptech.png',
    excerpt: 'Học viên tham quan trực tiếp các văn phòng dự án lớn, nghe chia sẻ từ các Tech Lead và định hướng nghề nghiệp sớm.',
    contentHtml: `
      <p class="lead">Hoạt động Company Visit là đặc quyền dành cho sinh viên FAI ngay từ học kỳ đầu tiên, nhằm định hướng nghề nghiệp rõ ràng và hiểu sâu sắc nhu cầu tuyển dụng.</p>
      
      <h2>Trải nghiệm văn phòng làm việc hiện đại hàng đầu Việt Nam</h2>
      <p>Sinh viên đã có chuyến tham quan thực tế đầy hào hứng tại FPT Software Campus. Các bạn được trực tiếp quan sát quy trình phát triển phần mềm Agile/Scrum, các khu vực bảo mật dự án cao và hạ tầng Cloud lưu trữ dữ liệu quy mô toàn cầu.</p>
      
      <p>Chuyến đi giúp phá vỡ khoảng cách giữa lý thuyết và thực tiễn, tạo động lực to lớn cho sinh viên trong học tập.</p>
      
      <h2>Tọa đàm chuyên sâu cùng Tech Leads</h2>
      <p>Trong khuôn khổ buổi kiến tập, sinh viên FAI đã được giao lưu trực tiếp với các Kỹ sư trưởng, Quản trị dự án về các chủ đề nóng như tích hợp AI/ML, điện toán đám mây và lộ trình phát triển sự nghiệp từ intern lên chuyên gia phần mềm chuẩn quốc tế.</p>
    `
  },
  {
    id: 5,
    title: 'Ngày hội tuyển dụng FAI Job Fair: Cầu nối trực tiếp đến hơn 50 doanh nghiệp',
    category: 'TRẢI NGHIỆM DOANH NGHIỆP',
    date: '05-06-2026',
    image: '/fai_graduation_handshake.png',
    excerpt: 'Ngày hội phỏng vấn trực tiếp, nộp CV và nhận học bổng làm việc tại các tập đoàn công nghệ & sáng tạo hàng đầu.',
    contentHtml: `
      <p class="lead">FAI Job Fair là ngày hội tuyển dụng thường niên lớn nhất của Viện Đào Tạo Quốc Tế FPT, thu hút hàng nghìn sinh viên tốt nghiệp loại giỏi tham gia ứng tuyển.</p>
      
      <h2>Giao dịch phỏng vấn trực tiếp tại chỗ</h2>
      <p>Tại các gian hàng tuyển dụng, đại diện doanh nghiệp trực tiếp tiến hành phỏng vấn thử việc và duyệt CV của sinh viên. Đây là cơ hội tuyệt vời để học viên Aptech, Arena, Skillking tự tin giới thiệu sản phẩm đồ án tốt nghiệp e-Project của mình.</p>
      
      <p>Rất nhiều bạn sinh viên xuất sắc đã nhận được offer làm việc chính thức ngay tại ngày hội trước cả khi chính thức nhận bằng tốt nghiệp.</p>
      
      <h2>Định hướng chỉnh sửa CV & Phỏng vấn giả định</h2>
      <p>Bên cạnh tuyển dụng trực tiếp, ngày hội tổ chức chuỗi workshop hướng dẫn sinh viên viết CV chuyên nghiệp chuẩn ATS, cách đàm phán lương và thực hành trả lời phỏng vấn giả định cùng các chuyên gia nhân sự đầu ngành.</p>
    `
  },
  {
    id: 6,
    title: 'Giải bóng đá FAI Champion League: Gắn kết tinh thần thể thao & đồng đội',
    category: 'SỰ KIỆN & TEAMBUILDING',
    date: '28-05-2026',
    image: '/fai_student_life_1.png',
    excerpt: 'Sân chơi thể thao lành mạnh, giao lưu thể chất và thắt chặt tinh thần hữu nghị giữa học viên 3 phân hệ đào tạo.',
    contentHtml: `
      <p class="lead">FAI Champion League là giải bóng đá nam - nữ thường niên được mong chờ nhất, thu hút sự tham gia tranh tài sôi nổi của hàng chục đội bóng đại diện các lớp toàn quốc.</p>
      
      <h2>Những trận cầu kịch tính và tinh thần fair-play</h2>
      <p>Giải đấu đã diễn ra vô cùng sôi nổi với các pha bóng đẹp mắt, những bàn thắng nghẹt thở và sự cổ vũ nhiệt tình của hàng trăm cổ động viên FAI. Dù tranh đấu quyết liệt trên sân cỏ, các cầu thủ luôn thể hiện tinh thần thể thao cao thượng và sự tôn trọng đối thủ.</p>
      
      <p>Đây là cơ hội tuyệt vời để rèn luyện thể chất, giải tỏa căng thẳng sau những giờ code hay render đồ án mệt mỏi.</p>
      
      <h2>Thắt chặt tình đoàn kết liên phân hệ đào tạo</h2>
      <p>Hơn cả một giải đấu thể thao, sự kiện là cầu nối giúp học viên Aptech (Lập trình), Arena (Sáng tạo) và Skillking (Tiếp thị) giao lưu gặp gỡ, thiết lập các nhóm dự án liên ngành đầy triển vọng trong tương lai.</p>
    `
  }
];

export default function DoiSong() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [isGrabbing, setIsGrabbing] = useState(false);
  const timelineRef = useRef(null);
  
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeftVal = useRef(0);

  const handleMouseDown = (e) => {
    isDown.current = true;
    setIsGrabbing(true);
    startX.current = e.pageX - timelineRef.current.offsetLeft;
    scrollLeftVal.current = timelineRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown.current = false;
    setIsGrabbing(false);
  };

  const handleMouseUp = () => {
    isDown.current = false;
    setIsGrabbing(false);
  };

  const handleMouseMove = (e) => {
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - timelineRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    timelineRef.current.scrollLeft = scrollLeftVal.current - walk;
  };

  const scrollTimeline = (direction) => {
    if (timelineRef.current) {
      const scrollAmount = 370; // Card width + gap
      timelineRef.current.scrollBy({
        left: direction === 'next' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Lock body scroll when modal is open
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

  // Handle escape key to close modal
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
        
        {/* BLOCK 1: Hero Section - Dark Navy Background - Proportional Height (45vh) */}
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
          {/* Subtle cyan aurora glow in background */}
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
              Đời Sống Sinh Viên
            </h1>
            <p style={{ maxWidth: '650px', color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', lineHeight: '1.75', marginTop: '25px' }}>
              Vượt qua giới hạn phòng học — tại FAI, cuộc sống sinh viên là chuỗi ngày rực rỡ sắc màu với các câu lạc bộ thực chiến, sự kiện teambuilding sôi động và cơ hội kiến tập doanh nghiệp từ sớm.
            </p>
          </div>
        </section>

        {/* BLOCK 2: Một Ngày Của Sinh Viên FAI - Light Cream Background - Proportional Height (75vh) */}
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
                Một Ngày Của Sinh Viên FAI
              </h2>
              <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '20px auto 0 auto', fontSize: '0.95rem', lineHeight: '1.7' }}>
                Khám phá lịch trình học tập thực chiến đầy năng động và thú vị của sinh viên tại Viện Đào Tạo Quốc Tế FPT.
              </p>
            </div>

            {/* Horizontal Timeline Outer Wrapper with Navigation Arrows */}
            <div style={{ position: 'relative', width: '100%', padding: '0 10px' }}>
              {/* Left Arrow Button */}
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
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--primary)';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#ffffff';
                  e.currentTarget.style.color = 'var(--secondary)';
                }}
                aria-label="Previous timeline slide"
              >
                <ChevronLeft size={20} strokeWidth={2.5} />
              </button>

              {/* Horizontal Timeline Wrapper */}
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
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
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
                      pointerEvents: isGrabbing ? 'none' : 'auto' // Prevent image dragging issues
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
                        pointerEvents: 'none' // Prevent browser image drag
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

              {/* Right Arrow Button */}
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
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--primary)';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#ffffff';
                  e.currentTarget.style.color = 'var(--secondary)';
                }}
                aria-label="Next timeline slide"
              >
                <ChevronRight size={20} strokeWidth={2.5} />
              </button>
            </div>

          </div>
        </section>

        {/* BLOCK 3: Activities & Clubs - Dark Gray/Black Background - Proportional Height (75vh) */}
        <section 
          className="student-life-activities-section" 
          style={{ 
            padding: '100px 0',
            backgroundColor: '#070a10',
            color: '#ffffff',
            minHeight: '75vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}
        >
          <div className="container">
            <div className="section-header-centered" style={{ textAlign: 'center', marginBottom: '50px' }}>
              <span className="section-eyebrow" style={{ fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.2em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>
                ACTIVITIES & CLUBS
              </span>
              <h2 className="section-headline" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, color: '#ffffff', marginTop: '10px', fontFamily: 'var(--font-sans)' }}>
                Hoạt Động &amp; Trải Nghiệm Sinh Viên
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '600px', margin: '20px auto 0 auto', fontSize: '0.95rem', lineHeight: '1.7' }}>
                Học đi đôi với hành cùng các sân chơi học thuật chuyên sâu và ngày hội trải nghiệm liên tục suốt học kỳ.
              </p>
            </div>

            {/* Grid of posts */}
            <div className="activities-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
              {activities.map((act) => (
                <div 
                  key={act.id} 
                  className="activity-grid-card"
                  onClick={() => setSelectedPost(act)}
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                  }}
                >
                  <div className="activity-card-image" style={{ position: 'relative', width: '100%', aspectRatio: '16/10', overflow: 'hidden' }}>
                    <Image src={act.image} alt={act.title} fill style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }} className="act-img" />
                    <span className="activity-card-cat" style={{ position: 'absolute', top: '15px', left: '15px', background: 'rgba(7,10,16,0.85)', padding: '5px 12px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 800, color: 'var(--accent)', textTransform: 'uppercase', border: '1px solid rgba(255,255,255,0.08)' }}>
                      {act.category}
                    </span>
                  </div>
                  
                  <div className="activity-card-body" style={{ padding: '30px', display: 'flex', flexDirection: 'column', gap: '14px', flexGrow: 1 }}>
                    <span className="activity-card-date" style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Calendar size={14} />
                      {act.date}
                    </span>
                    <h3 className="activity-card-title" style={{ fontSize: '1.2rem', fontWeight: 800, lineHeight: '1.5', color: '#ffffff', margin: 0, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', height: '54px', fontFamily: 'var(--font-sans)' }}>
                      {act.title}
                    </h3>
                    <p className="activity-card-excerpt" style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', lineHeight: '1.65', margin: 0, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', height: '44px' }}>
                      {act.excerpt}
                    </p>
                    <span className="activity-card-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', fontWeight: 800, color: 'var(--accent)', marginTop: '10px' }}>
                      Xem chi tiết <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BLOCK 4: Support Hotline CTA - White Background - Compact Height */}
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
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
              <Link 
                href="/lien-he" 
                className="cta-btn-dark"
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '8px', 
                  background: '#0D2137', 
                  color: '#ffffff', 
                  padding: '16px 36px', 
                  borderRadius: '50px', 
                  fontWeight: 700, 
                  boxShadow: '0 10px 30px rgba(13,33,55,0.1)',
                  transition: 'all 0.3s ease'
                }}
              >
                Liên hệ ngay <ArrowRight size={18} />
              </Link>
              <a 
                href="tel:19006000" 
                className="cta-btn-outline-dark"
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '8px', 
                  background: 'transparent', 
                  color: 'var(--secondary)', 
                  padding: '16px 36px', 
                  borderRadius: '50px', 
                  fontWeight: 700, 
                  border: '2px solid var(--secondary)',
                  transition: 'all 0.3s ease'
                }}
              >
                Hotline: 1900 6000
              </a>
            </div>
          </div>
        </section>

        {/* Thăng Long popup overlay modal #popup-showContentPost */}
        {selectedPost && (
          <div 
            className="student-life-modal-overlay"
            onClick={() => setSelectedPost(null)}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(5, 7, 12, 0.85)',
              backdropFilter: 'blur(12px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 2000,
              padding: '20px'
            }}
          >
            <div 
              className="student-life-modal-box"
              onClick={(e) => e.stopPropagation()}
              style={{
                width: '100%',
                maxWidth: '900px',
                maxHeight: '90vh',
                backgroundColor: '#ffffff',
                border: '1px solid rgba(0,0,0,0.08)',
                borderRadius: '20px',
                overflowY: 'auto',
                position: 'relative',
                boxShadow: '0 25px 60px rgba(0,0,0,0.2)',
                color: '#1a2332',
                animation: 'modalSlideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards'
              }}
            >
              
              {/* Sticky Close Button */}
              <button 
                className="modal-close-btn"
                onClick={() => setSelectedPost(null)}
                aria-label="Close dialog"
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(0,0,0,0.05)',
                  border: '1px solid rgba(0,0,0,0.1)',
                  color: '#1a2332',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  zIndex: 10
                }}
              >
                <X size={20} />
              </button>

              {/* Modal Body Header */}
              <div className="modal-header-block" style={{ padding: '60px 50px 30px 50px', borderBottom: '1px solid rgba(0,0,0,0.05)', backgroundColor: '#F8F5F0' }}>
                <span className="modal-badge" style={{ display: 'inline-block', background: 'rgba(232,116,30,0.08)', border: '1px solid rgba(232,116,30,0.15)', padding: '4px 12px', borderRadius: '50px', fontSize: '0.75rem', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase', marginBottom: '20px' }}>
                  {selectedPost.category}
                </span>
                <h2 className="modal-title" style={{ fontSize: 'clamp(1.4rem, 3.5vw, 2rem)', fontWeight: 800, color: 'var(--secondary)', lineHeight: '1.3', margin: 0, fontFamily: 'var(--font-sans)' }}>
                  {selectedPost.title}
                </h2>
                <div className="modal-meta" style={{ display: 'flex', gap: '20px', marginTop: '20px', fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Calendar size={14} />
                    Đăng ngày {selectedPost.date}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Clock size={14} />
                    Thời gian đọc: 3 phút
                  </span>
                </div>
              </div>

              {/* Modal Banner Image */}
              <div className="modal-image-wrapper" style={{ position: 'relative', width: '100%', height: '400px' }}>
                <Image src={selectedPost.image} alt={selectedPost.title} fill style={{ objectFit: 'cover' }} />
              </div>

              {/* Modal Detailed HTML Content */}
              <div className="modal-content-rich" style={{ padding: '50px', color: '#334155', fontSize: '1.05rem', lineHeight: '1.8' }}>
                <div 
                  className="rich-editorial-content"
                  dangerouslySetInnerHTML={{ __html: selectedPost.contentHtml }} 
                />
              </div>

            </div>
          </div>
        )}

      </main>

      <Footer />
    </div>
  );
}
