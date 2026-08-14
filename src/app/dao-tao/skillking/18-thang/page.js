'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ParticleCanvas from '@/components/ParticleCanvas';
import SkillkingProgramSwitcher from '@/components/SkillkingProgramSwitcher';
import ScholarshipFormSection from '@/components/ScholarshipFormSection';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check, Award, BookOpen, Clock, Trophy, Sparkles } from 'lucide-react';

export default function Skillking18ThangPage() {
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

      {/* Program Switcher Bar */}
      <SkillkingProgramSwitcher activePath="/dao-tao/skillking/18-thang" />

      {/* Section 0: Hero Section (🌙 DARK CYBER THEME) */}
      <section className="beau-hero">
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
          <div className="beau-hero-banner">
            <Image
              src="/banner_skillking_sub_v2.png"
              alt="Tuyển sinh FPT Skillking 18 tháng"
              width={1200}
              height={400}
              priority
            />
          </div>
        </div>
      </section>

      {/* Section 1: Lộ Trình Đào Tạo 4 học kỳ (☀️ LIGHT BRIGHT THEME) */}
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

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            {/* Semester 1 */}
            <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '24px', padding: '36px 30px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column' }}>
              <span style={{ color: '#09529c', fontWeight: 900, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>
                HỌC KỲ 01
              </span>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '14px', fontFamily: 'var(--font-sans)', lineHeight: '1.3' }}>
                Social Media & Content Strategy
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', lineHeight: '1.65', marginBottom: '24px', flexGrow: 1 }}>
                Thấu hiểu hành vi khách hàng trực tuyến. Nghiên cứu thị trường, viết nội dung sáng tạo chuẩn SEO, thiết kế hình ảnh bằng Canva và quản trị Facebook, TikTok, Instagram, Youtube.
              </p>
              <div style={{ borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '20px' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#09529c', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '12px' }}>
                  Môn học trọng tâm
                </span>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#09529c' }} />Nghiên cứu thị trường & Chân dung khách hàng</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#09529c' }} />Sáng tạo nội dung (Copywriting & Strategy)</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#09529c' }} />Thiết kế hình ảnh tiếp thị truyền thông với Canva</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#09529c' }} />Quản trị và tối ưu trang mạng xã hội thương hiệu</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#09529c' }} />Đồ án Kế hoạch Tiếp thị Mạng xã hội e-Project</li>
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
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#09529c' }} />Nghiên cứu từ khóa & Phân tích đối thủ</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#09529c' }} />Tối ưu cấu trúc & kỹ thuật On-page Website</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#09529c' }} />Xây dựng liên kết ngoài (Off-page Link building)</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#09529c' }} />Sử dụng các công cụ phân tích SEO (Semrush, Ahrefs)</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#09529c' }} />Đồ án Tối ưu hóa SEO Website e-Project</li>
                </ul>
              </div>
            </div>

            {/* Semester 3 */}
            <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '24px', padding: '36px 30px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column' }}>
              <span style={{ color: '#09529c', fontWeight: 900, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>
                HỌC KỲ 03
              </span>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '14px', fontFamily: 'var(--font-sans)', lineHeight: '1.3' }}>
                Performance Marketing & Paid Ads
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', lineHeight: '1.65', marginBottom: '24px', flexGrow: 1 }}>
                Tận dụng tối đa ngân sách truyền thông số. Thiết lập tài khoản quảng cáo, đấu thầu Google Search Ads, chạy quảng cáo Facebook/Instagram và tiếp thị lại (Remarketing).
              </p>
              <div style={{ borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '20px' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#09529c', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '12px' }}>
                  Môn học trọng tâm
                </span>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#09529c' }} />Quản trị quảng cáo tìm kiếm Google Search Ads</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#09529c' }} />Quảng cáo hiển thị Google Display & YouTube</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#09529c' }} />Tối ưu chiến dịch quảng cáo Meta Ads</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#09529c' }} />Triển khai TikTok Ads và Video ngắn chuyển đổi</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#09529c' }} />Đồ án Chiến dịch Quảng cáo Trả phí e-Project</li>
                </ul>
              </div>
            </div>

            {/* Semester 4 */}
            <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '24px', padding: '36px 30px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column' }}>
              <span style={{ color: '#09529c', fontWeight: 900, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>
                HỌC KỲ 04
              </span>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '14px', fontFamily: 'var(--font-sans)', lineHeight: '1.3' }}>
                Strategy & Automation
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', lineHeight: '1.65', marginBottom: '24px', flexGrow: 1 }}>
                Trở thành nhà hoạch định chiến dịch chuyên nghiệp. Xây dựng chiến lược IMC, tự động hóa Email Marketing qua HubSpot, phân tích dữ liệu chuyên sâu và quản trị ngân sách lớn.
              </p>
              <div style={{ borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '20px' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#09529c', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '12px' }}>
                  Môn học trọng tâm
                </span>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#09529c' }} />Hoạch định chiến dịch truyền thông tích hợp (IMC)</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#09529c' }} />Tự động hóa tiếp thị (Marketing Automation & CRM)</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#09529c' }} />Phân tích dữ liệu tiếp thị số & Đo lường ROI</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#09529c' }} />Tối ưu hóa tỷ lệ chuyển đổi (CRO)</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#09529c' }} />Đồ án Tốt nghiệp Chiến lược Digital Marketing tổng thể</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Bottom CTA Section (🌙 DARK CYBER THEME) */}
      <section className="beau-cta-section">
        <div className="beau-cta-bg-circle"></div>
        <div className="container beau-cta-inner" data-reveal>
          <h2 className="beau-cta-title">Bứt phá sự nghiệp Tiếp thị Kỹ thuật số cùng FPT Skillking</h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.1rem', maxWidth: '680px', margin: '14px auto 36px', lineHeight: '1.7' }}>
            Nắm bắt phương pháp Marketing dữ liệu và công cụ AI thực chiến ngay hôm nay.
          </p>
          <a href="#dang-ky-skillking-18t" className="beau-cta-btn" style={{ background: 'linear-gradient(135deg, #09529c 0%, #1a6ed8 100%)', color: '#ffffff', fontWeight: 800 }}>
            Đăng Ký Tư Vấn & Nhận Học Bổng
            <ArrowRight size={22} strokeWidth={2.5} />
          </a>
        </div>
      </section>

      {/* Section 3: Scholarship Application Form (☀️ LIGHT THEME) */}
      <div id="dang-ky-skillking-18t">
        <ScholarshipFormSection programName="FPT Skillking (18 Tháng)" />
      </div>

      <Footer />
    </div>
  );
}
