'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const programs = [
  {
    id: 'aptech',
    categoryTag: 'ĐÀO TẠO LẬP TRÌNH VIÊN QUỐC TẾ AI ĐA KỸ NĂNG',
    title: 'FPT APTECH',
    subTitle: 'Lập trình viên Quốc tế',
    desc: 'Là đơn vị đào tạo công nghệ đầu tiên của Tập đoàn FPT từ năm 1999 liên kết với Tập đoàn Công nghệ thông tin toàn cầu Aptech Ấn Độ, với kinh nghiệm đào tạo 27 năm tại Việt Nam chương trình Lập trình tại FPT Aptech tích hợp AI được thiết kế giúp bạn học nhanh – đi làm sớm, tối ưu thời gian, tăng trải nghiệm thực tế và đáp ứng đúng nhu cầu của doanh nghiệp.',
    image: '/fai_banner_aptech_v2.png',
    youtubeId: '9qkfC1AKMNU',
    link: '/dao-tao/aptech',
    color: '#f37021',
    isDark: true,
    bgStyle: {
      background: 'linear-gradient(135deg, #0f0702 0%, #1c0e04 100%)',
      color: '#ffffff'
    },
    curriculums: [
      'Lập trình Fullstack trong 2 năm',
      'Lập trình Back end trong 1 năm',
      'Lập trình Front end trong 6 tháng',
      'Lập trình ngắn hạn 100-200h'
    ]
  },
  {
    id: 'arena',
    categoryTag: 'ĐÀO TẠO MULTIMEDIA ĐA KỸ NĂNG ỨNG DỤNG AI',
    title: 'FPT ARENA MULTIMEDIA',
    subTitle: 'Thiết kế Mỹ thuật đa phương tiện',
    desc: 'Được thành lập vào tháng 7/2004 trên cơ sở hợp tác giữa Tập đoàn FPT và Tập đoàn CNTT toàn cầu Aptech (Ấn Độ), FPT Arena Multimedia là hệ thống đào tạo Mỹ thuật đa phương tiện, tiên phong đưa khái niệm Multimedia đến với thế hệ trẻ Việt Nam. Với chương trình đào tạo bám sát nhu cầu của doanh nghiệp, FPT Arena Multimedia giúp học viên phát triển tư duy sáng tạo, xây dựng năng lực nghề nghiệp trong lĩnh vực thiết kế đa phương tiện.',
    image: '/fai_banner_arena_v2.jpg',
    youtubeId: 'EMNSX9kBswc',
    link: '/dao-tao/arena',
    color: '#ffb600',
    isDark: false,
    bgStyle: {
      backgroundColor: '#ffffff',
      color: '#1a2332'
    },
    curriculums: [
      'Arena Multimedia Specialist Program (2 năm)',
      'Thiết kế 2D, 3D, Game và App (6–18 tháng)',
      'Các khóa học ngắn hạn (100 giờ)'
    ]
  },
  {
    id: 'skillking',
    categoryTag: 'ĐÀO TẠO MARKETING SỐ ỨNG DỤNG AI',
    title: 'FPT SKILLKING',
    subTitle: 'Digital Marketing Ứng dụng AI',
    desc: 'FPT Skillking là hệ thống đào tạo Digital Marketing được thành lập năm 2018, trên cơ sở hợp tác giữa Tập đoàn FPT và Tập đoàn Jetking (Ấn Độ), cung cấp chương trình học theo định hướng thực tiễn, trang bị cho học viên kiến thức từ nền tảng đến chuyên sâu trong lĩnh vực tiếp thị số. Chương trình đào tạo tại FPT Skillking ứng dụng AI vào quá trình giảng dạy và thực hành, giúp học viên nâng cao năng lực công nghệ, phát triển tư duy chiến lược và đáp ứng yêu cầu của doanh nghiệp trong kỷ nguyên số.',
    image: '/fai_banner_skillking_v2.png',
    youtubeId: 'Ao0xUp-vQvI',
    link: '/dao-tao/skillking',
    color: '#29a9e1',
    isDark: true,
    bgStyle: {
      backgroundColor: '#041019',
      color: '#ffffff'
    },
    curriculums: [
      'Fullstack Digital Marketing With AI (18 tháng)',
      'Bộ khóa học Digital Marketing thực chiến (100 giờ)'
    ]
  },
  {
    id: 'chip-design',
    categoryTag: 'ĐÀO TẠO THIẾT KẾ VI MẠCH BÁN DẪN TÍCH HỢP AI',
    title: 'FPT JETKING CHIP DESIGN',
    subTitle: 'Thiết kế vi mạch Bán dẫn',
    desc: 'Ngành vi mạch bán dẫn là nền tảng của các công nghệ như AI, IoT và 5G, đồng thời đang đối mặt với tình trạng thiếu hụt nhân lực chất lượng cao trên toàn cầu. Hợp tác cùng Jetking (Ấn Độ), FPT Jetking triển khai chương trình Thiết kế vi mạch bán dẫn tích hợp AI theo chuẩn quốc tế, trang bị kiến thức, kỹ năng thực hành và kinh nghiệm thực tiễn, đáp ứng nhu cầu tuyển dụng trong nước và quốc tế.',
    image: '/fai_banner_chip_design_v2.png',
    youtubeId: 'C-No0GKGQhk',
    link: '/dao-tao/chip-design',
    color: '#ed232a',
    isDark: false,
    bgStyle: {
      backgroundColor: '#ffffff',
      color: '#1a2332'
    },
    curriculums: [
      'Thiết kế vi mạch bán dẫn quốc tế tích hợp AI'
    ]
  },
  {
    id: 'ai-agent',
    categoryTag: 'KỸ SƯ PHÁT TRIỂN HỆ THỐNG AI AGENT',
    title: 'FPT JETKING AI AGENT',
    subTitle: 'Lập trình AI Agent',
    desc: 'Nhu cầu nhân lực AI Agent đang tăng trưởng 35 - 50% mỗi năm. Đến năm 2027, AI được dự báo sẽ tạo ra hơn 97 triệu việc làm mới, trong đó AI Agent là một trong những lĩnh vực có nhu cầu tuyển dụng cao. FPT Jetking triển khai chương trình Lập trình AI Agent, trang bị kiến thức và kỹ năng xây dựng AI Agent hiện đại, giúp học viên sẵn sàng nắm bắt cơ hội nghề nghiệp trong kỷ nguyên AI.',
    image: '/fai_banner_ai_agent_v2.png',
    youtubeId: 'XqKvLy7M5H0',
    link: '/dao-tao/ai-agent',
    color: '#ed232a',
    isDark: true,
    bgStyle: {
      backgroundColor: '#140304',
      color: '#ffffff'
    },
    curriculums: [
      'Lập trình AI Agent'
    ]
  }
];

export default function DaoTao() {
  return (
    <div className="training-overview-container" style={{ backgroundColor: '#ffffff', color: '#1a2332' }}>
      <Header />

      <main className="sub-page-main" style={{ padding: 0 }}>
        
        {/* BLOCK 1: Hero Header Section - White Background - Proportional Height */}
        <section 
          className="training-intro-section" 
          style={{ 
            padding: '180px 0 80px 0', 
            minHeight: '45vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            backgroundColor: '#ffffff',
            borderBottom: '1px solid rgba(0, 0, 0, 0.05)'
          }}
        >
          <div className="container">
            <span className="section-eyebrow" style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
              HỆ THỐNG ĐÀO TẠO
            </span>
            <h1 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', fontWeight: 800, fontFamily: 'var(--font-sans)', color: 'var(--secondary)', marginTop: '20px', lineHeight: '1.25' }}>
              Chương trình đào tạo tại <br style={{ display: 'inline' }} /> Viện Đào tạo Quốc tế FPT
            </h1>
            <p style={{ color: 'var(--text-muted)', maxWidth: '850px', marginTop: '20px', fontSize: '1.05rem', lineHeight: '1.75' }}>
              FPT Academy International (FAI) kế thừa chiến lược đào tạo liên kết quốc tế của Tập đoàn FPT, triển khai mô hình đào tạo nhanh – làm được nghề ngay theo xu hướng số, với thời gian học tối ưu từ 3–24 tháng, dựa trên lợi thế của đối tác toàn cầu và hệ sinh thái FPT, cùng các chương trình FPT Aptech, FPT Arena, FPT Jetking, FPT Skillking
            </p>
          </div>
        </section>

        {/* Proportional Viewport Program Blocks - Alternating Backgrounds */}
        <div className="training-programs-viewport-list">
          {programs.map((prog) => (
            <section 
              key={prog.id} 
              id={prog.id}
              style={{ 
                minHeight: '75vh', 
                display: 'flex', 
                alignItems: 'center', 
                padding: '100px 0',
                position: 'relative',
                ...prog.bgStyle
              }}
              className="program-viewport-block"
            >
              <div className="container">
                <div className="row" style={{ display: 'flex', gap: '60px', alignItems: 'center', flexWrap: 'wrap' }}>
                  
                  {/* Left Column: Title and Image */}
                  <div style={{ flex: '1 1 500px' }} className="program-block-left">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                      <h2 
                        style={{ 
                          fontSize: 'clamp(2.3rem, 4.5vw, 3.5rem)', 
                          fontWeight: 800, 
                          fontFamily: 'var(--font-sans)', 
                          color: prog.isDark ? '#ffffff' : 'var(--secondary)',
                          lineHeight: '1.2',
                          margin: 0
                        }}
                      >
                        {prog.title} <br />
                        <span style={{ color: prog.color, fontSize: '0.75em' }}>{prog.subTitle}</span>
                      </h2>
                      
                      <div 
                        style={{ 
                          position: 'relative', 
                          width: '100%', 
                          aspectRatio: '16/10', 
                          borderRadius: '20px', 
                          overflow: 'hidden',
                          boxShadow: prog.isDark ? '0 25px 60px rgba(0,0,0,0.35)' : '0 20px 45px rgba(13, 33, 55, 0.08)',
                          border: prog.isDark ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(13, 33, 55, 0.05)'
                        }}
                      >
                        {prog.youtubeId ? (
                          <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${prog.youtubeId}?autoplay=0&rel=0`}
                            title={prog.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            style={{ border: 'none', position: 'absolute', inset: 0, width: '100%', height: '100%' }}
                          />
                        ) : (
                          <Image 
                            src={prog.image} 
                            alt={prog.title} 
                            fill 
                            style={{ objectFit: 'cover' }} 
                          />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Semesters and Link */}
                  <div style={{ flex: '1 1 400px', maxWidth: '550px' }} className="program-block-right">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                      <div style={{ fontSize: '1.05rem', fontWeight: 800, color: prog.color, fontFamily: 'var(--font-sans)', letterSpacing: '0.05em' }}>
                        {prog.categoryTag}
                      </div>
                      
                      <p style={{ color: prog.isDark ? 'rgba(255,255,255,0.85)' : 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.75', margin: 0 }}>
                        {prog.desc}
                      </p>

                      <ul 
                        style={{ 
                          display: 'flex', 
                          flexDirection: 'column', 
                          gap: '16px', 
                          borderTop: prog.isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(13, 33, 55, 0.08)', 
                          paddingTop: '24px' 
                        }}
                      >
                        {prog.curriculums.map((item, idx) => (
                          <li 
                            key={idx} 
                            style={{ 
                              fontSize: '0.92rem', 
                              color: prog.isDark ? 'rgba(255,255,255,0.7)' : 'var(--text-muted)', 
                              display: 'flex', 
                              alignItems: 'start', 
                              gap: '10px' 
                            }}
                          >
                            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: prog.color, marginTop: '8px', flexShrink: 0 }} />
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div style={{ marginTop: '20px' }}>
                        <Link 
                          href={prog.link} 
                          className="feed-btn" 
                          style={{ 
                            display: 'inline-flex', 
                            alignItems: 'center', 
                            gap: '8px', 
                            background: prog.color, 
                            color: '#ffffff', 
                            padding: '16px 36px', 
                            borderRadius: '50px', 
                            fontWeight: 700,
                            transition: 'all 0.3s ease',
                            boxShadow: `0 10px 25px ${prog.color}33`,
                            textDecoration: 'none'
                          }}
                        >
                          Khám phá chi tiết ngành <ArrowRight size={18} />
                        </Link>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            </section>
          ))}
        </div>

      </main>

      <Footer />
    </div>
  );
}
