'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ParticleCanvas from '@/components/ParticleCanvas';
import ScholarshipFormSection from '@/components/ScholarshipFormSection';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check, Award, BookOpen, Clock, Trophy, Sparkles } from 'lucide-react';

export default function SkillkingSubpage() {
  const [activeSection, setActiveSection] = useState(0);

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

  return (
    <div className={`beau-subpage-container theme-skillking active-sec-${activeSection}`}>
      <Header />

      {/* Section 0: Hero Section (🌙 DARK CYBER THEME) */}
      <section className="beau-hero">
        <ParticleCanvas className="beau-hero-particles" />
        <div className="beau-hero-bg-text">SKILLKING</div>
        <div className="container beau-hero-inner" data-reveal>
          <span className="beau-hero-brand" style={{ backgroundColor: '#09529c', color: '#ffffff', fontWeight: 800 }}>
            FPT SKILLKING
          </span>
          <h1 className="beau-hero-title">
            Tiếp Thị<br />Kỹ Thuật Số
          </h1>
          <div className="beau-hero-logo" style={{ marginTop: '20px', display: 'flex', alignItems: 'center' }}>
            <svg width="130" height="40" viewBox="0 0 130 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 10 L22 17 L29 10 L26 25 L18 25 Z" fill="#f37021"/>
              <path d="M18 25 H26 V28 H18 Z" fill="#09529c"/>
              <text x="36" y="26" fill="#09529c" fontSize="16" fontWeight="bold" fontFamily="sans-serif">skillking</text>
            </svg>
          </div>
          <p className="beau-hero-desc">
            Chương trình đào tạo Chuyên gia Digital Marketing chuẩn quốc tế thực chiến 100%. Được phát triển trên nền tảng liên kết giữa Viện Giáo dục Quốc tế FPT và tập đoàn đào tạo công nghệ Jetking Ấn Độ. Trang bị kiến thức toàn diện từ Social Media, SEO, Performance Marketing đến quản trị dữ liệu số và hoạch định chiến dịch số.
          </p>

          <div className="beau-stats-bar">
            <div className="beau-stat-item">
              <h3 style={{ color: '#38bdf8' }}>Google &amp; Meta</h3>
              <p>Hệ thống kiến thức chuẩn chứng chỉ quảng cáo toàn cầu trực quan nhất.</p>
            </div>
            <div className="beau-stat-item">
              <h3 style={{ color: '#38bdf8' }}>25+ Năm</h3>
              <p>Kinh nghiệm đào tạo quốc tế uy tín chuyển giao trực tiếp từ Ấn Độ.</p>
            </div>
            <div className="beau-stat-item">
              <h3 style={{ color: '#38bdf8' }}>100%</h3>
              <p>Thời lượng thực chiến học đi đôi với hành thông qua dự án doanh nghiệp thực tế.</p>
            </div>
          </div>

          {/* Banner Image */}
          <div className="beau-hero-banner">
            <Image
              src="/banner_skillking_sub_v2.png"
              alt="Tuyển sinh FPT Skillking"
              width={1200}
              height={400}
              priority
            />
          </div>
        </div>
      </section>

      {/* Section 1: Lộ Trình Đào Tạo (☀️ LIGHT BRIGHT THEME) */}
      <section 
        className="beau-section"
        style={{ 
          backgroundColor: '#F8FAFC', 
          color: '#0f172a',
          padding: '110px 0 120px 0',
          borderTop: 'none'
        }}
      >
        <div className="container" data-reveal>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{ color: '#09529c', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '0.85rem' }}>
              LỘ TRÌNH ĐÀO TẠO
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, color: 'var(--secondary)', lineHeight: '1.2', marginTop: '10px', fontFamily: 'var(--font-sans)', letterSpacing: '-0.02em' }}>
              4 học kỳ chuyên sâu thực chiến 100%
            </h2>
            <p style={{ color: '#64748b', maxWidth: '720px', margin: '14px auto 0', fontSize: '1.05rem', lineHeight: '1.7' }}>
              Giáo trình cập nhật liên tục theo các thuật toán phân tích hành vi và quảng cáo đa nền tảng: SEO Google, Meta Ads, TikTok Ads, dữ liệu marketing CRM HubSpot.
            </p>
          </div>

          {/* 4 Semester Cards in Modern Light Theme */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            {/* Semester 1 */}
            <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '24px', padding: '36px 30px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column' }}>
              <span style={{ color: '#09529c', fontWeight: 900, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>
                HỌC KỲ 01
              </span>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '14px', fontFamily: 'var(--font-sans)', lineHeight: '1.3' }}>
                Social Media & Content Strategy — Tiếp thị mạng xã hội
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', lineHeight: '1.65', marginBottom: '24px', flexGrow: 1 }}>
                Thấu hiểu hành vi khách hàng trực tuyến. Học viên làm quen với nghiên cứu thị trường, viết nội dung sáng tạo chuẩn SEO, thiết kế hình ảnh bằng Canva và quản trị Facebook, TikTok, Instagram, Youtube.
              </p>
              <div style={{ borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '20px' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#09529c', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '12px' }}>
                  Môn học trọng tâm
                </span>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#09529c', flexShrink: 0 }} />Nghiên cứu thị trường & Chân dung khách hàng</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#09529c', flexShrink: 0 }} />Sáng tạo nội dung (Copywriting & Strategy)</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#09529c', flexShrink: 0 }} />Thiết kế hình ảnh tiếp thị truyền thông với Canva</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#09529c', flexShrink: 0 }} />Quản trị và tối ưu trang mạng xã hội thương hiệu</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#09529c', flexShrink: 0 }} />Đồ án Kế hoạch Tiếp thị Mạng xã hội e-Project</li>
                </ul>
              </div>
            </div>

            {/* Semester 2 */}
            <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '24px', padding: '36px 30px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column' }}>
              <span style={{ color: '#09529c', fontWeight: 900, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>
                HỌC KỲ 02
              </span>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '14px', fontFamily: 'var(--font-sans)', lineHeight: '1.3' }}>
                SEO — Tối ưu hóa công cụ tìm kiếm
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', lineHeight: '1.65', marginBottom: '24px', flexGrow: 1 }}>
                Chinh phục thứ hạng tìm kiếm Google. Nghiên cứu từ khóa, tối ưu Onpage/Offpage, phân tích kỹ thuật (Technical SEO) và đo lường truy cập qua Search Console, GA4.
              </p>
              <div style={{ borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '20px' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#09529c', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '12px' }}>
                  Môn học trọng tâm
                </span>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#09529c', flexShrink: 0 }} />Nghiên cứu từ khóa & Phân tích đối thủ</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#09529c', flexShrink: 0 }} />Tối ưu cấu trúc & kỹ thuật On-page Website</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#09529c', flexShrink: 0 }} />Xây dựng liên kết ngoài (Off-page Link building)</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#09529c', flexShrink: 0 }} />Sử dụng các công cụ phân tích SEO (Semrush, Ahrefs)</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#09529c', flexShrink: 0 }} />Đồ án Tối ưu hóa SEO Website e-Project</li>
                </ul>
              </div>
            </div>

            {/* Semester 3 */}
            <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '24px', padding: '36px 30px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column' }}>
              <span style={{ color: '#09529c', fontWeight: 900, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>
                HỌC KỲ 03
              </span>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '14px', fontFamily: 'var(--font-sans)', lineHeight: '1.3' }}>
                Performance Marketing & Paid Ads — Tối ưu quảng cáo
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', lineHeight: '1.65', marginBottom: '24px', flexGrow: 1 }}>
                Tận dụng tối đa ngân sách truyền thông số. Thiết lập tài khoản quảng cáo, đấu thầu từ khóa Google Search Ads, chạy quảng cáo Facebook/Instagram và tiếp thị lại (Remarketing).
              </p>
              <div style={{ borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '20px' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#09529c', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '12px' }}>
                  Môn học trọng tâm
                </span>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#09529c', flexShrink: 0 }} />Quản trị quảng cáo tìm kiếm Google Search Ads</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#09529c', flexShrink: 0 }} />Quảng cáo mạng hiển thị Google Display & YouTube</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#09529c', flexShrink: 0 }} />Tối ưu chiến dịch quảng cáo Meta Ads</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#09529c', flexShrink: 0 }} />Triển khai TikTok Ads và Video ngắn chuyển đổi</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#09529c', flexShrink: 0 }} />Đồ án Chiến dịch Quảng cáo Trả phí e-Project</li>
                </ul>
              </div>
            </div>

            {/* Semester 4 */}
            <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '24px', padding: '36px 30px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column' }}>
              <span style={{ color: '#09529c', fontWeight: 900, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>
                HỌC KỲ 04
              </span>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '14px', fontFamily: 'var(--font-sans)', lineHeight: '1.3' }}>
                Strategy & Automation — Chiến lược & Tự động hóa
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', lineHeight: '1.65', marginBottom: '24px', flexGrow: 1 }}>
                Trở thành nhà hoạch định chiến dịch chuyên nghiệp. Xây dựng chiến lược IMC, tự động hóa Email Marketing qua HubSpot, phân tích dữ liệu chuyên sâu và quản trị ngân sách lớn.
              </p>
              <div style={{ borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '20px' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#09529c', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '12px' }}>
                  Môn học trọng tâm
                </span>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#09529c', flexShrink: 0 }} />Hoạch định chiến dịch truyền thông tích hợp (IMC)</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#09529c', flexShrink: 0 }} />Tự động hóa tiếp thị (Marketing Automation & CRM)</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#09529c', flexShrink: 0 }} />Phân tích dữ liệu tiếp thị số & Đo lường ROI</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#09529c', flexShrink: 0 }} />Tối ưu hóa tỷ lệ chuyển đổi (CRO)</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#09529c', flexShrink: 0 }} />Đồ án Tốt nghiệp Chiến lược Digital Marketing tổng thể</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Công Cụ & Nền Tảng (🌙 DARK TECH THEME) */}
      <section className="beau-section" style={{ padding: '100px 0 110px 0' }}>
        <div className="container" data-reveal>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="beau-section-eyebrow" style={{ color: '#38bdf8' }}>DIGITAL TOOLS & PLATFORMS</span>
            <h2 className="beau-section-title" style={{ marginBottom: '10px' }}>Làm chủ hệ sinh thái công cụ tiếp thị</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', maxWidth: '650px', margin: '0 auto', fontSize: '1.05rem', lineHeight: '1.7' }}>
              Thực hành trực tiếp trên các nền tảng quảng cáo và công cụ phân tích hàng đầu toàn cầu
            </p>
          </div>

          <div className="beau-tech-grid">
            <div className="beau-tech-item" data-reveal data-reveal-delay="0.05">
              <span className="beau-tech-icon" style={{ color: '#4285f4' }}>G-Ads</span>
              <span className="beau-tech-name">Google Ads</span>
            </div>
            <div className="beau-tech-item" data-reveal data-reveal-delay="0.1">
              <span className="beau-tech-icon" style={{ color: '#0668e1' }}>Meta</span>
              <span className="beau-tech-name">Meta Business Suite</span>
            </div>
            <div className="beau-tech-item" data-reveal data-reveal-delay="0.15">
              <span className="beau-tech-icon" style={{ color: '#ff0050' }}>TikTok</span>
              <span className="beau-tech-name">TikTok Ads Manager</span>
            </div>
            <div className="beau-tech-item" data-reveal data-reveal-delay="0.2">
              <span className="beau-tech-icon" style={{ color: '#ff7a59' }}>HubSpot</span>
              <span className="beau-tech-name">HubSpot CRM</span>
            </div>
            <div className="beau-tech-item" data-reveal data-reveal-delay="0.25">
              <span className="beau-tech-icon" style={{ color: '#f37021' }}>GA4</span>
              <span className="beau-tech-name">Google Analytics 4</span>
            </div>
            <div className="beau-tech-item" data-reveal data-reveal-delay="0.3">
              <span className="beau-tech-icon" style={{ color: '#ff642d' }}>Semrush</span>
              <span className="beau-tech-name">Semrush & Ahrefs</span>
            </div>
            <div className="beau-tech-item" data-reveal data-reveal-delay="0.35">
              <span className="beau-tech-icon" style={{ color: '#00c4cc' }}>Canva</span>
              <span className="beau-tech-name">Canva Pro</span>
            </div>
            <div className="beau-tech-item" data-reveal data-reveal-delay="0.4">
              <span className="beau-tech-icon" style={{ color: '#ffffff' }}>AI Ads</span>
              <span className="beau-tech-name">ChatGPT & AI Copy</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Cơ Hội Nghề Nghiệp (☀️ LIGHT BRIGHT THEME) */}
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
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span style={{ color: '#09529c', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '0.85rem' }}>
              CAREERS
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, color: 'var(--secondary)', lineHeight: '1.2', marginTop: '10px', fontFamily: 'var(--font-sans)', letterSpacing: '-0.02em' }}>
              Vị trí việc làm sau khi tốt nghiệp
            </h2>
            <p style={{ color: '#64748b', maxWidth: '650px', margin: '14px auto 0', fontSize: '1.05rem', lineHeight: '1.7' }}>
              Đáp ứng nhu cầu tuyển dụng khát nhân lực chất lượng cao trong ngành Digital Marketing
            </p>
          </div>

          <div className="beau-careers-grid">
            <div className="beau-career-card" style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderLeft: '5px solid #09529c', boxShadow: '0 8px 25px rgba(0,0,0,0.02)' }}>
              <h3 className="career-title" style={{ color: 'var(--secondary)' }}>Digital Marketing Specialist</h3>
              <p className="career-desc" style={{ color: '#64748b' }}>Hoạch định và thực thi các chiến dịch tiếp thị số tổng thể, đa kênh cho thương hiệu doanh nghiệp.</p>
            </div>
            <div className="beau-career-card" style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderLeft: '5px solid #09529c', boxShadow: '0 8px 25px rgba(0,0,0,0.02)' }}>
              <h3 className="career-title" style={{ color: 'var(--secondary)' }}>Performance Marketing Executive</h3>
              <p className="career-desc" style={{ color: '#64748b' }}>Trực tiếp quản lý và tối ưu hóa ngân sách quảng cáo số Google, Facebook, TikTok đạt chuyển đổi cao nhất.</p>
            </div>
            <div className="beau-career-card" style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderLeft: '5px solid #09529c', boxShadow: '0 8px 25px rgba(0,0,0,0.02)' }}>
              <h3 className="career-title" style={{ color: 'var(--secondary)' }}>SEO & Content Manager</h3>
              <p className="career-desc" style={{ color: '#64748b' }}>Quản lý chiến lược nội dung chuẩn SEO, tối ưu thứ hạng website bền vững trên công cụ tìm kiếm.</p>
            </div>
            <div className="beau-career-card" style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderLeft: '5px solid #09529c', boxShadow: '0 8px 25px rgba(0,0,0,0.02)' }}>
              <h3 className="career-title" style={{ color: 'var(--secondary)' }}>Social Media Manager</h3>
              <p className="career-desc" style={{ color: '#64748b' }}>Xây dựng chiến lược kênh, quản trị cộng đồng fanpage và sáng tạo xu hướng tương tác viral.</p>
            </div>
            <div className="beau-career-card" style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderLeft: '5px solid #09529c', boxShadow: '0 8px 25px rgba(0,0,0,0.02)' }}>
              <h3 className="career-title" style={{ color: 'var(--secondary)' }}>Marketing Automation & CRM Executive</h3>
              <p className="career-desc" style={{ color: '#64748b' }}>Vận hành các hệ thống tự động hóa tiếp thị, chăm sóc khách hàng tự động và tối ưu vòng đời khách hàng.</p>
            </div>
            <div className="beau-career-card" style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderLeft: '5px solid #09529c', boxShadow: '0 8px 25px rgba(0,0,0,0.02)' }}>
              <h3 className="career-title" style={{ color: 'var(--secondary)' }}>Data-Driven Marketer</h3>
              <p className="career-desc" style={{ color: '#64748b' }}>Thu thập, phân tích dữ liệu chiến dịch và trực quan hóa báo cáo thông minh phục vụ ra quyết định kinh doanh.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Ưu đãi tuyển sinh đặc quyền (🌙 DARK TECH THEME) */}
      <section className="beau-section" style={{ padding: '100px 0 110px 0' }}>
        <div className="container" data-reveal>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="beau-section-eyebrow" style={{ color: '#38bdf8' }}>HỌC BỔNG & CHÍNH SÁCH</span>
            <h2 className="beau-section-title" style={{ marginBottom: '10px' }}>Ưu đãi tuyển sinh đặc quyền Skillking</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', maxWidth: '650px', margin: '0 auto', fontSize: '1.05rem', lineHeight: '1.7' }}>
              Tạo mọi điều kiện thuận lợi nhất để bạn tự tin bứt phá trong kỷ nguyên số
            </p>
          </div>
          
          <div className="beau-incentives-grid">
            <div className="beau-incentive-card" style={{ '--accent': '#09529c' }} data-reveal data-reveal-delay="0.05">
              <span className="incentive-badge">HỌC BỔNG</span>
              <h3 className="incentive-value">Lên tới 50%</h3>
              <p className="incentive-desc">Học bổng Chuyên gia Tiếp thị số hỗ trợ thế hệ Marketer trẻ tài năng phát triển sự nghiệp.</p>
            </div>
            <div className="beau-incentive-card" style={{ '--accent': '#09529c' }} data-reveal data-reveal-delay="0.1">
              <span className="incentive-badge">QUÀ TẶNG CÔNG NGHỆ</span>
              <h3 className="incentive-value">Combo Tools AI</h3>
              <p className="incentive-desc">Tặng ngay gói tài khoản công cụ Marketing AI cao cấp khi hoàn tất thủ tục nhập học sớm.</p>
            </div>
            <div className="beau-incentive-card" style={{ '--accent': '#09529c' }} data-reveal data-reveal-delay="0.15">
              <span className="incentive-badge">TRẢ GÓP</span>
              <h3 className="incentive-value">0% Lãi Suất</h3>
              <p className="incentive-desc">Hỗ trợ chia nhỏ học phí đóng theo từng tháng qua thẻ tín dụng ngân hàng đối tác.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Chuyển hướng nhanh ngành học & Tin tức (☀️ LIGHT BRIGHT THEME) */}
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
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span style={{ color: '#09529c', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '0.85rem' }}>
              KHÁM PHÁ CÁC NGÀNH HỌC KHÁC
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, color: 'var(--secondary)', lineHeight: '1.2', marginTop: '10px', fontFamily: 'var(--font-sans)', letterSpacing: '-0.02em' }}>
              Hệ sinh thái đào tạo FPT
            </h2>
          </div>
          
          <div className="beau-other-programs-grid">
            <Link href="/dao-tao/aptech/2-nam" className="beau-other-program-card" style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 8px 25px rgba(0,0,0,0.02)' }} data-reveal data-reveal-delay="0.05">
              <div>
                <span className="other-prog-tag" style={{ color: '#f37021' }}>✦ APTECH</span>
                <h3 className="other-prog-title" style={{ color: 'var(--secondary)' }}>Software Engineering & AI</h3>
                <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Lập trình viên Quốc tế ACCP AI — Làm chủ Java, Python, Fullstack Web/Mobile, Cloud Computing và Vibe Coding.
                </p>
              </div>
              <span className="other-prog-link" style={{ color: '#f37021', display: 'inline-flex', alignItems: 'center', gap: '8px', fontWeight: 700 }}>
                Khám phá Công Nghệ
                <ArrowRight size={18} />
              </span>
            </Link>

            <Link href="/dao-tao/arena" className="beau-other-program-card" style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 8px 25px rgba(0,0,0,0.02)' }} data-reveal data-reveal-delay="0.1">
              <div>
                <span className="other-prog-tag" style={{ color: '#d97706' }}>◈ ARENA MULTIMEDIA</span>
                <h3 className="other-prog-title" style={{ color: 'var(--secondary)' }}>Mỹ Thuật Đa Phương Tiện</h3>
                <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Thiết kế đồ họa 2D, UI/UX Web-App, Làm phim kỹ thuật số, Kỹ xảo CGI và Hoạt hình 3D đỉnh cao.
                </p>
              </div>
              <span className="other-prog-link" style={{ color: '#d97706', display: 'inline-flex', alignItems: 'center', gap: '8px', fontWeight: 700 }}>
                Khám phá Sáng Tạo Mỹ Thuật
                <ArrowRight size={18} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 6: Bottom CTA Section (🌙 DARK CYBER THEME) */}
      <section className="beau-cta-section">
        <div className="beau-cta-bg-circle"></div>
        <div className="container beau-cta-inner" data-reveal>
          <h2 className="beau-cta-title">Bứt phá sự nghiệp Tiếp thị Kỹ thuật số cùng FPT Skillking</h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.1rem', maxWidth: '680px', margin: '14px auto 36px', lineHeight: '1.7' }}>
            Nắm bắt phương pháp Marketing dữ liệu và công cụ AI thực chiến ngay hôm nay.
          </p>
          <a href="#dang-ky-skillking" className="beau-cta-btn" style={{ background: 'linear-gradient(135deg, #09529c 0%, #1a6ed8 100%)', color: '#ffffff', fontWeight: 800 }}>
            Đăng Ký Tư Vấn & Nhận Học Bổng
            <ArrowRight size={22} strokeWidth={2.5} />
          </a>
        </div>
      </section>

      {/* Section 7: Scholarship Application Form (☀️ LIGHT THEME) */}
      <div id="dang-ky-skillking">
        <ScholarshipFormSection programName="FPT Skillking" />
      </div>

      <Footer />
    </div>
  );
}
