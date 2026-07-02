'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const programs = [
  {
    id: 'aptech',
    number: '01/',
    title: 'FPT Aptech',
    subTitle: 'Lập trình viên Quốc tế',
    desc: 'Chương trình đào tạo Công nghệ thông tin chất lượng cao chuyển giao trực tiếp từ Aptech Ấn Độ. Sinh viên được trang bị kiến thức phát triển phần mềm toàn diện, điện toán đám mây và trí tuệ nhân tạo thực chiến.',
    image: '/fai_banner_aptech_v2.png',
    link: '/dao-tao/aptech',
    color: '#e31a22',
    isDark: true,
    bgStyle: {
      background: 'linear-gradient(135deg, #050c1a 0%, #0D2137 100%)',
      color: '#ffffff'
    },
    curriculums: [
      'Học kỳ 1: Lập trình cơ bản & Cơ sở dữ liệu SQL Server',
      'Học kỳ 2: Lập trình hướng đối tượng Java SE chuyên sâu',
      'Học kỳ 3: Phát triển ứng dụng Web (React, Node.js) & Di động',
      'Học kỳ 4: Điện toán đám mây AWS & Tích hợp Trí tuệ Nhân tạo (AI/ML)'
    ]
  },
  {
    id: 'arena',
    number: '02/',
    title: 'FPT Arena Multimedia',
    subTitle: 'Mỹ thuật Đa phương tiện',
    desc: 'Chương trình đào tạo Chuyên gia Mỹ thuật Đa phương tiện kéo dài 2 năm. Sinh viên được rèn luyện tư duy thẩm mỹ, thiết kế đồ họa thương hiệu, làm phim kỹ thuật số, hậu kỳ video và hoạt hình 3D chuyên nghiệp.',
    image: '/fai_banner_arena_v2.jpg',
    link: '/dao-tao/arena',
    color: '#ffb600',
    isDark: false,
    bgStyle: {
      backgroundColor: '#F8F5F0',
      color: '#1a2332'
    },
    curriculums: [
      'Học kỳ 1: Graphic Design - Thiết kế đồ họa thương hiệu',
      'Học kỳ 2: Web & UI/UX Design - Thiết kế trải nghiệm người dùng',
      'Học kỳ 3: Filmmaking & Video Editing - Kịch bản, quay phim & dựng phim',
      'Học kỳ 4: 3D Animation & Game Design - Hoạt hình 3D & thiết kế game'
    ]
  },
  {
    id: 'skillking',
    number: '03/',
    title: 'FPT Skillking',
    subTitle: 'Digital Marketing chuyên sâu',
    desc: 'Chương trình đào tạo Chuyên gia Tiếp thị số chuẩn quốc tế đầu tiên tại Việt Nam. Sinh viên trực tiếp thực hành sáng tạo nội dung, chạy quảng cáo Meta/Google Ads ngân sách thật và tối ưu phễu chuyển đổi CRM.',
    image: '/fai_banner_skillking_v2.png',
    link: '/dao-tao/skillking',
    color: '#09529c',
    isDark: true,
    bgStyle: {
      backgroundColor: '#070a10',
      color: '#ffffff'
    },
    curriculums: [
      'Học kỳ 1: Social Media & Content Strategy - Sáng tạo nội dung tiếp thị số',
      'Học kỳ 2: Search Engine Optimization (SEO) & Web Audit chuyên sâu',
      'Học kỳ 3: Paid Advertising - Setup chiến dịch Google/Meta/Tiktok Ads',
      'Học kỳ 4: Digital Marketing Management - Quản trị & lập kế hoạch tổng thể'
    ]
  },
  {
    id: 'chip-design',
    number: '04/',
    title: 'FPT Jetking Chip Design',
    subTitle: 'Thiết kế Vi mạch Bán dẫn',
    desc: 'Chương trình đào tạo Thiết kế Vi mạch Bán dẫn tích hợp AI chuẩn quốc tế. Sinh viên được trang bị kiến thức chuyên sâu về SoC/ASIC/FPGA, làm chủ công cụ thiết kế EDA tiên tiến dưới sự hỗ trợ của các mô hình AI chuyên dụng.',
    image: '/fai_banner_chip_design_v2.png',
    link: '/dao-tao/chip-design',
    color: '#f37021',
    isDark: true,
    bgStyle: {
      backgroundColor: '#0c051a',
      color: '#ffffff'
    },
    curriculums: [
      'Học kỳ 1: Mạch điện tử và lập trình vi điều khiển (Programming Elements & Electronic Circuits)',
      'Học kỳ 2: Kiến trúc và quy trình thiết kế vi mạch (Chip Architecture Framework)',
      'Học kỳ 3: Ngôn ngữ mô tả phần cứng và công cụ thiết kế (HDL & EDA Tools)',
      'Học kỳ 4: Thiết kế vi mạch chuyên sâu SoC/ASIC/FPGA'
    ]
  },
  {
    id: 'ai-agent',
    number: '05/',
    title: 'FPT Jetking AI Agent',
    subTitle: 'Chuyên gia phát triển AI Agent',
    desc: 'Chương trình đào tạo tiên phong về AI Agent và Kỹ nghệ AI tại Việt Nam. Sinh viên trực tiếp thực hành xây dựng các nhân sự AI tự hành, phát triển mô hình Machine Learning/Deep Learning và hệ thống Multi-Agent thực chiến.',
    image: '/fai_banner_ai_agent_v2.png',
    link: '/dao-tao/ai-agent',
    color: '#0066b3',
    isDark: true,
    bgStyle: {
      backgroundColor: '#050716',
      color: '#ffffff'
    },
    curriculums: [
      'Học kỳ 1: Nền tảng lập trình Python & Phân tích dữ liệu AI (Foundations & Python Elements)',
      'Học kỳ 2: Trí tuệ nhân tạo chuyên sâu (Machine Learning & Deep Learning Core)',
      'Học kỳ 3: AI tạo sinh & Xử lý ngôn ngữ tự nhiên (NLP, Computer Vision & Generative AI)',
      'Học kỳ 4: Hệ thống Multi-Agent & Vận hành thực tế (Multi-Agent Systems & Deployment)'
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
            <h1 style={{ fontSize: 'clamp(2.3rem, 5.5vw, 4rem)', fontWeight: 800, fontFamily: 'var(--font-sans)', color: 'var(--secondary)', marginTop: '20px', lineHeight: '1.25' }}>
              Chương trình đào tạo chuyển giao chuẩn quốc tế
            </h1>
            <p style={{ color: 'var(--text-muted)', maxWidth: '650px', marginTop: '20px', fontSize: '1.05rem', lineHeight: '1.7' }}>
              Thời lượng thực hành chuyên sâu lên tới 70% tại phòng Lab, cập nhật công nghệ và xu thế thiết kế, truyền thông số mới nhất.
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
                        <Image 
                          src={prog.image} 
                          alt={prog.title} 
                          fill 
                          style={{ objectFit: 'cover' }} 
                        />
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Semesters and Link */}
                  <div style={{ flex: '1 1 400px', maxWidth: '550px' }} className="program-block-right">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                      <div style={{ fontSize: '1.25rem', fontWeight: 800, color: prog.color, fontFamily: 'var(--font-sans)', letterSpacing: '0.05em' }}>
                        Chương trình {prog.number}
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
