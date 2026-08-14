'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ParticleCanvas from '@/components/ParticleCanvas';
import SkillkingProgramSwitcher from '@/components/SkillkingProgramSwitcher';
import ScholarshipFormSection from '@/components/ScholarshipFormSection';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check, Award, BookOpen, Clock, Trophy, Sparkles, TrendingUp, Search, Video, BarChart2, Briefcase } from 'lucide-react';

export default function SkillkingSubpage() {
  const [activeSection, setActiveSection] = useState(0);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const sections = document.querySelectorAll('.beau-hero, .beau-section, .beau-cta-section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Array.from(sections).indexOf(entry.target);
          if (index !== -1) {
            setActiveSection(index);
          }
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '-10% 0px -30% 0px'
    });

    sections.forEach(sec => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const semesters = [
    {
      num: 'HỌC KỲ 01',
      shortTitle: 'Social & Content AI',
      title: 'Social Media & Content Strategy with AI',
      subtitle: '(Nghiên cứu Thị trường, Sáng tạo Nội dung & Quản trị Mạng xã hội)',
      desc: 'Thấu hiểu hành vi khách hàng mục tiêu. Học viên nắm vững quy trình nghiên cứu thị trường, xây dựng chân dung khách hàng (Buyer Persona), sáng tạo nội dung đa kênh chuẩn SEO với AI và thiết kế ấn phẩm truyền thông chuyên nghiệp.',
      coreStack: [
        'Nghiên cứu thị trường & Chân dung khách hàng',
        'Chiến lược Content Marketing đa nền tảng',
        'Kỹ thuật Copywriting thu hút chuyển đổi',
        'Thiết kế hình ảnh tiếp thị truyền thông Canva',
        'Quản trị & Phát triển Fanpage / TikTok / YouTube'
      ],
      aiTools: [
        'ChatGPT Plus & Claude 3.5 Sonnet',
        'Canva AI Magic Studio',
        'CapCut AI Video Generation',
        'Midjourney Marketing Visuals',
        'Notion AI Workflow'
      ],
      careers: [
        'Social Media Executive (Chuyên viên Mạng xã hội)',
        'Content Creator (Nhà sáng tạo nội dung số)',
        'Copywriter & Creative Strategist',
        'Đồ án eProject: Kế hoạch Truyền thông Mạng xã hội'
      ]
    },
    {
      num: 'HỌC KỲ 02',
      shortTitle: 'SEO & Growth',
      title: 'Search Engine Optimization (SEO) & Technical Growth',
      subtitle: '(Tối ưu hóa Công cụ tìm kiếm Google & Tăng trưởng truy cập tự nhiên)',
      desc: 'Chinh phục thứ hạng TOP 1 Google. Nghiên cứu cấu trúc từ khóa chuyên sâu, tối ưu hóa On-page, cấu trúc Silo, kỹ thuật Technical SEO và xây dựng liên kết Off-page bền vững kết hợp các công cụ phân tích dữ liệu hàng đầu.',
      coreStack: [
        'Nghiên cứu từ khóa & Phân tích đối thủ cạnh tranh',
        'Tối ưu hóa On-page & Cấu trúc liên kết nội bộ',
        'Technical SEO: Tốc độ tải trang, Core Web Vitals',
        'Chiến lược xây dựng Backlink (Off-page SEO)',
        'Phân tích đo lường Google Search Console & GA4'
      ],
      aiTools: [
        'SurferSEO AI Content Optimizer',
        'Semrush AI Keyword Insights',
        'Ahrefs SEO Intelligence',
        'Screaming Frog SEO Spider',
        'RankMath AI Assistant'
      ],
      careers: [
        'SEO Specialist (Chuyên viên Tối ưu hóa tìm kiếm)',
        'Website Content Manager',
        'SEO Project Leader & Consultant',
        'Đồ án eProject: Dự án Đẩy Top SEO Website thực tế'
      ]
    },
    {
      num: 'HỌC KỲ 03',
      shortTitle: 'Paid Ads & Performance',
      title: 'Performance Marketing & Paid Advertising',
      subtitle: '(Chạy quảng cáo Google Ads, Meta Ads, TikTok Ads & Tối ưu chuyển đổi)',
      desc: 'Làm chủ dòng tiền và tỷ lệ hoàn vốn ROI. Thiết lập cấu trúc tài khoản quảng cáo chuyên nghiệp, đấu thầu từ khóa Google Search/Display/YouTube, chạy quảng cáo chuyển đổi Meta Ads, TikTok Shop và đo lường thông số chuyển đổi.',
      coreStack: [
        'Quản trị quảng cáo tìm kiếm Google Search Ads',
        'Quảng cáo Google Display Network (GDN) & YouTube',
        'Chiến dịch quảng cáo chuyển đổi Meta Ads (FB/IG)',
        'Quảng cáo TikTok Ads & Vận hành TikTok Shop',
        'Thiết lập theo dõi chuyển đổi Pixel & Google Tag Manager'
      ],
      aiTools: [
        'Google Ads Smart Bidding AI',
        'Meta Advantage+ AI Campaigns',
        'TikTok Symphony Creative AI',
        'AdCreative.ai High-Converting Ads',
        'Triple Whale Attribution AI'
      ],
      careers: [
        'Performance Marketing Specialist',
        'Media Buyer (Chuyên viên Quản lý ngân sách Ads)',
        'E-commerce Ads Specialist (TikTok Shop / Shopee)',
        'Đồ án eProject: Chiến dịch Quảng cáo Trả phí đa kênh'
      ]
    },
    {
      num: 'HỌC KỲ 04',
      shortTitle: 'Strategy & Automation',
      title: 'Marketing Automation, CRM & Data Strategy',
      subtitle: '(Tự động hóa Tiếp thị, Quản trị Quan hệ khách hàng & Chiến lược IMC)',
      desc: 'Trở thành nhà hoạch định chiến lược số toàn diện. Thiết lập phễu bán hàng tự động (Sales Funnel), tự động hóa Email Marketing trên HubSpot/Mailchimp, quản trị tệp khách hàng CRM và xây dựng kế hoạch IMC tổng thể cho doanh nghiệp.',
      coreStack: [
        'Hoạch định chiến dịch truyền thông tích hợp (IMC)',
        'Xây dựng phễu Marketing Automation & Lead Nurturing',
        'Quản trị hệ thống dữ liệu khách hàng CRM (HubSpot)',
        'Email Marketing tự động hóa theo kịch bản hành vi',
        'Phân tích dữ liệu tiếp thị số chuyên sâu & Báo cáo ROI'
      ],
      aiTools: [
        'HubSpot AI Marketing Hub',
        'Zapier & Make.com AI Automation',
        'Mailchimp AI Customer Journeys',
        'Power BI & Looker Studio AI Dashboards',
        'Google Analytics 4 Predictive Metrics'
      ],
      careers: [
        'Digital Marketing Manager (Trưởng phòng Marketing)',
        'Marketing Automation & CRM Specialist',
        'Growth Marketing Strategist',
        'Đồ án Tốt nghiệp: Kế hoạch Chiến lược Digital Marketing tổng thể'
      ]
    }
  ];

  return (
    <div className={`beau-subpage-container theme-skillking active-sec-${activeSection}`}>
      <Header />

      {/* Program Switcher Bar */}
      <SkillkingProgramSwitcher activePath="/dao-tao/skillking/18-thang" />

      {/* Section 0: Hero Section (🌙 DARK CYBER THEME) */}
      <section className="beau-hero" style={{ paddingBottom: '70px', paddingTop: '50px' }}>
        <ParticleCanvas className="beau-hero-particles" />
        <div className="beau-hero-bg-text">18 THÁNG</div>
        <div className="container beau-hero-inner" data-reveal>
          <span className="beau-hero-brand" style={{ backgroundColor: '#09529c', color: '#ffffff', fontWeight: 800 }}>
            FPT SKILLKING — 18 THÁNG
          </span>
          <h1 className="beau-hero-title">
            Fullstack Digital Marketing<br />With AI (18 Tháng)
          </h1>
          <div className="beau-hero-logo" style={{ marginTop: '20px', display: 'flex', alignItems: 'center' }}>
            <svg width="130" height="40" viewBox="0 0 130 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 10 L22 17 L29 10 L26 25 L18 25 Z" fill="#f37021"/>
              <path d="M18 25 H26 V28 H18 Z" fill="#09529c"/>
              <text x="36" y="26" fill="#09529c" fontSize="16" fontWeight="bold" fontFamily="sans-serif">skillking</text>
            </svg>
          </div>
          <p className="beau-hero-desc">
            Chương trình đào tạo Chuyên gia Digital Marketing toàn diện 18 tháng tích hợp công nghệ AI. Học thực chiến 100% qua dự án doanh nghiệp, từ Social Media, SEO, Performance Ads đến Marketing Automation và Data-Driven Strategy.
          </p>

          <div className="beau-stats-bar">
            <div className="beau-stat-item">
              <h3 style={{ color: '#38bdf8' }}>18 Tháng</h3>
              <p>4 học kỳ chuyên sâu đưa bạn trở thành Marketer toàn diện.</p>
            </div>
            <div className="beau-stat-item">
              <h3 style={{ color: '#38bdf8' }}>Jetking AD</h3>
              <p>Bằng Advanced Diploma quốc tế danh tiếng do Jetking Ấn Độ cấp.</p>
            </div>
            <div className="beau-stat-item">
              <h3 style={{ color: '#38bdf8' }}>AI Powered</h3>
              <p>Ứng dụng AI tăng gấp 5 lần hiệu suất sáng tạo và tối ưu chiến dịch.</p>
            </div>
          </div>

          {/* Banner Image */}
          <div className="beau-hero-banner" style={{ marginTop: '40px' }}>
            <Image
              src="/banner_skillking_sub_v2.png"
              alt="Tuyển sinh FPT Skillking 18 tháng"
              width={1200}
              height={400}
              priority
              style={{ borderRadius: '16px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* Section 1: HÀNH TRÌNH TỔNG QUAN (☀️ LIGHT BRIGHT THEME) */}
      <section 
        className="beau-section"
        style={{ 
          backgroundColor: '#F8FAFC', 
          color: '#0f172a',
          padding: '100px 0 110px 0',
          borderTop: 'none'
        }}
      >
        <div className="container" data-reveal>
          <div style={{ textAlign: 'center', marginBottom: '54px' }}>
            <span style={{ color: '#09529c', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '0.85rem' }}>
              HÀNH TRÌNH TỔNG QUAN
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, color: 'var(--secondary)', lineHeight: '1.2', marginTop: '10px', fontFamily: 'var(--font-sans)', letterSpacing: '-0.02em' }}>
              Lộ trình đào tạo chuẩn quốc tế 18 tháng
            </h2>
            <p style={{ color: '#64748b', maxWidth: '720px', margin: '14px auto 0', fontSize: '1.05rem', lineHeight: '1.7' }}>
              Trang bị trọn vẹn bộ kỹ năng từ thực thi kỹ thuật số đến quản trị chiến lược
            </p>
          </div>

          {/* 4 Stats Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
            <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '20px', padding: '32px 24px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
              <BookOpen size={34} style={{ color: '#09529c', marginBottom: '14px' }} />
              <h3 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--secondary)', margin: 0, lineHeight: 1 }}>20+</h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', marginTop: '10px', margin: 0, fontWeight: 600 }}>Môn học &amp; Nền tảng tiếp thị số</p>
            </div>
            <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '20px', padding: '32px 24px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
              <Clock size={34} style={{ color: '#09529c', marginBottom: '14px' }} />
              <h3 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--secondary)', margin: 0, lineHeight: 1 }}>04</h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', marginTop: '10px', margin: 0, fontWeight: 600 }}>Học kỳ chuyên sâu</p>
            </div>
            <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '20px', padding: '32px 24px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
              <Trophy size={34} style={{ color: '#09529c', marginBottom: '14px' }} />
              <h3 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--secondary)', margin: 0, lineHeight: 1 }}>04</h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', marginTop: '10px', margin: 0, fontWeight: 600 }}>Đồ án thực tế (eProject)</p>
            </div>
            <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '20px', padding: '32px 24px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
              <Briefcase size={34} style={{ color: '#09529c', marginBottom: '14px' }} />
              <h3 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--secondary)', margin: 0, lineHeight: 1 }}>01</h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', marginTop: '10px', margin: 0, fontWeight: 600 }}>Chiến lược IMC Doanh nghiệp</p>
            </div>
          </div>

          {/* Time banner */}
          <div style={{ 
            marginTop: '36px', 
            background: '#ffffff', 
            border: '1px solid rgba(9, 82, 156, 0.35)', 
            borderLeft: '6px solid #09529c',
            borderRadius: '20px', 
            padding: '32px 40px',
            boxShadow: '0 12px 35px rgba(0, 0, 0, 0.03)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px'
          }}>
            <div>
              <span style={{ fontSize: '0.82rem', color: '#09529c', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Tổng thời lượng đào tạo</span>
              <h4 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--secondary)', margin: '6px 0 0', fontFamily: 'var(--font-sans)' }}>800 Giờ học thực chiến</h4>
            </div>
            <div style={{ display: 'flex', gap: '36px', flexWrap: 'wrap' }}>
              <div>
                <span style={{ color: '#64748b', fontSize: '0.88rem', display: 'block', fontWeight: 600 }}>Tư duy &amp; Kế hoạch</span>
                <strong style={{ color: 'var(--secondary)', fontSize: '1.3rem', fontWeight: 800 }}>200 giờ</strong>
              </div>
              <div style={{ borderLeft: '1px solid rgba(0,0,0,0.08)', paddingLeft: '36px' }}>
                <span style={{ color: '#64748b', fontSize: '0.88rem', display: 'block', fontWeight: 600 }}>Thực hành chạy Ads/SEO</span>
                <strong style={{ color: 'var(--secondary)', fontSize: '1.3rem', fontWeight: 800 }}>400 giờ</strong>
              </div>
              <div style={{ borderLeft: '1px solid rgba(0,0,0,0.08)', paddingLeft: '36px' }}>
                <span style={{ color: '#64748b', fontSize: '0.88rem', display: 'block', fontWeight: 600 }}>Đồ án eProject</span>
                <strong style={{ color: '#09529c', fontSize: '1.3rem', fontWeight: 800 }}>200 giờ</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: CHI TIẾT CHƯƠNG TRÌNH HỌC (4 HỌC KỲ) - DẠNG TAB TƯƠNG TÁC (🌙 DARK CYBER THEME) */}
      <section className="beau-section" style={{ padding: '100px 0 110px 0' }}>
        <div className="container" data-reveal>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="beau-section-eyebrow" style={{ color: '#38bdf8' }}>NỘI DUNG ĐÀO TẠO</span>
            <h2 className="beau-section-title">Chi tiết chương trình học (4 học kỳ)</h2>
          </div>

          {/* Segmented Semester Tabs */}
          <div 
            style={{ 
              position: 'sticky', 
              top: '80px', 
              zIndex: 90, 
              padding: '12px 0',
              marginBottom: '36px',
              maxWidth: '1100px',
              margin: '0 auto 36px'
            }}
          >
            <div 
              style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', 
                gap: '14px'
              }}
            >
              {semesters.map((sem, idx) => {
                const isActive = activeTab === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    style={{
                      padding: '14px 18px',
                      borderRadius: '16px',
                      border: isActive ? '1px solid #38bdf8' : '1px solid rgba(255, 255, 255, 0.12)',
                      background: isActive 
                        ? 'linear-gradient(135deg, #09529c 0%, #0284c7 100%)' 
                        : 'rgba(13, 33, 55, 0.75)',
                      color: '#ffffff',
                      cursor: 'pointer',
                      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      textAlign: 'left',
                      boxShadow: isActive ? '0 10px 28px rgba(2, 132, 199, 0.45)' : '0 4px 15px rgba(0,0,0,0.2)',
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)'
                    }}
                  >
                    <span 
                      style={{ 
                        fontSize: '0.78rem', 
                        fontWeight: 900, 
                        color: isActive ? '#ffffff' : '#38bdf8',
                        background: isActive ? 'rgba(0, 0, 0, 0.25)' : 'rgba(2, 132, 199, 0.2)',
                        padding: '4px 9px',
                        borderRadius: '10px',
                        flexShrink: 0
                      }}
                    >
                      {sem.num}
                    </span>
                    <span 
                      style={{ 
                        fontSize: '0.92rem', 
                        fontWeight: isActive ? 800 : 600, 
                        lineHeight: '1.3',
                        color: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.85)'
                      }}
                    >
                      {sem.shortTitle}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Tab Card Content */}
          <div style={{ 
            background: 'linear-gradient(135deg, rgba(13, 33, 55, 0.88) 0%, rgba(22, 43, 74, 0.92) 100%)', 
            border: '1px solid rgba(2, 132, 199, 0.35)', 
            borderRadius: '24px', 
            padding: '44px',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            boxShadow: '0 24px 60px rgba(0, 0, 0, 0.45)',
            maxWidth: '1100px',
            margin: '0 auto'
          }}>
            <div style={{ marginBottom: '28px' }}>
              <span style={{ color: '#38bdf8', fontSize: '0.88rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                {semesters[activeTab].num}
              </span>
              <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, color: '#ffffff', margin: '8px 0 4px', fontFamily: 'var(--font-sans)' }}>
                {semesters[activeTab].title}
              </h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.65)', fontSize: '0.98rem', margin: '0 0 16px' }}>
                {semesters[activeTab].subtitle}
              </p>
              <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.05rem', lineHeight: '1.7', margin: 0 }}>
                {semesters[activeTab].desc}
              </p>
            </div>

            <hr style={{ borderColor: 'rgba(255, 255, 255, 0.1)', margin: '30px 0' }} />

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '36px' }}>
              {/* Col 1 */}
              <div>
                <h4 style={{ color: '#38bdf8', fontSize: '0.9rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '18px' }}>
                  KỸ NĂNG &amp; MÔN HỌC LÕI
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {semesters[activeTab].coreStack.map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.96rem', lineHeight: '1.5' }}>
                      <Check size={18} style={{ color: '#38bdf8', flexShrink: 0, marginTop: '2px' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Col 2 */}
              <div>
                <h4 style={{ color: '#38bdf8', fontSize: '0.9rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '18px' }}>
                  CÔNG CỤ AI &amp; NỀN TẢNG TIẾP THỊ
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {semesters[activeTab].aiTools.map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.96rem', lineHeight: '1.5' }}>
                      <Check size={18} style={{ color: '#38bdf8', flexShrink: 0, marginTop: '2px' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Col 3 */}
              <div>
                <h4 style={{ color: '#38bdf8', fontSize: '0.9rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '18px' }}>
                  CƠ HỘI NGHỀ NGHIỆP &amp; ĐỒ ÁN
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {semesters[activeTab].careers.map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.96rem', lineHeight: '1.5' }}>
                      <Check size={18} style={{ color: '#38bdf8', flexShrink: 0, marginTop: '2px' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Bottom CTA Section (🌙 DARK CYBER THEME) */}
      <section className="beau-cta-section">
        <div className="beau-cta-bg-circle"></div>
        <div className="container beau-cta-inner" data-reveal>
          <h2 className="beau-cta-title">Bứt phá sự nghiệp Tiếp thị Kỹ thuật số cùng FPT Skillking</h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.1rem', maxWidth: '680px', margin: '14px auto 36px', lineHeight: '1.7' }}>
            Nắm bắt phương pháp Marketing dữ liệu và công cụ AI thực chiến ngay hôm nay.
          </p>
          <a href="#dang-ky-skillking-18t" className="beau-cta-btn" style={{ background: 'linear-gradient(135deg, #09529c 0%, #0284c7 100%)', color: '#ffffff', fontWeight: 800 }}>
            Đăng Ký Tư Vấn &amp; Nhận Học Bổng
            <ArrowRight size={22} strokeWidth={2.5} />
          </a>
        </div>
      </section>

      {/* Section 4: Scholarship Application Form (☀️ LIGHT THEME) */}
      <div id="dang-ky-skillking-18t">
        <ScholarshipFormSection programName="FPT Skillking (18 Tháng)" />
      </div>

      <Footer />
    </div>
  );
}
