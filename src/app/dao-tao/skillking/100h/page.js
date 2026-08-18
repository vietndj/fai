'use client';

import { useEffect, useState } from 'react';
import Footer from '@/components/Footer';
import ParticleCanvas from '@/components/ParticleCanvas';
import SkillkingProgramSwitcher from '@/components/SkillkingProgramSwitcher';
import Skillking100hFormSection from '@/components/Skillking100hFormSection';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check, Sparkles, TrendingUp, Search, Video, BarChart2, Zap } from 'lucide-react';

export default function Skillking100hPage() {
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
      
      {/* Program Switcher Bar */}
      <SkillkingProgramSwitcher activePath="/dao-tao/skillking/100h" />

      {/* Section 0: Hero Section (🌙 DARK CYBER THEME) */}
      <section className="beau-hero">
        <ParticleCanvas className="beau-hero-particles" />
        <div className="beau-hero-bg-text">100 GIỜ</div>
        <div className="container beau-hero-inner" data-reveal>
          <span className="beau-hero-brand" style={{ backgroundColor: '#09529c', color: '#ffffff', fontWeight: 800 }}>
            FPT SKILLKING — KHÓA NGẮN HẠN 100 GIỜ
          </span>
          <h1 className="beau-hero-title" style={{ marginTop: '16px', fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: '1.25', textWrap: 'balance', textTransform: 'uppercase' }}>
            Bộ Khóa Học <span style={{ whiteSpace: 'nowrap' }}>Digital Marketing</span><br />
            Thực Chiến (100 Giờ)
          </h1>
          <p className="beau-hero-desc">
            Bạn không cần học 1 chương trình dài để làm được <span style={{ whiteSpace: 'nowrap' }}>Digital Marketing.</span><br />
            Tại Skillking, bạn có thể chọn từng khóa ngắn theo đúng nhu cầu, mỗi khóa tập trung vào 1 kỹ năng cốt lõi và có đầu ra rõ ràng.<br /><br />
            Bộ khoá học ngắn hạn đào tạo <span style={{ whiteSpace: 'nowrap' }}>Digital Marketing</span> tích hợp AI mới nhất từ FPT Skillking:<br />
            Vững chắc sự nghiệp - Làm chủ công nghệ - Tự tin vào ngành.
          </p>

          <div className="beau-stats-bar">
            <div className="beau-stat-item">
              <h3 style={{ color: '#38bdf8' }}>100 Giờ</h3>
              <p>Tập trung 100% vào kỹ năng thực chiến ra số, tối ưu chi phí quảng cáo.</p>
            </div>
            <div className="beau-stat-item">
              <h3 style={{ color: '#38bdf8' }}>Thực Hành</h3>
              <p>Trực tiếp vận hành chiến dịch trên Google Ads, Meta Ads và TikTok Ads.</p>
            </div>
            <div className="beau-stat-item">
              <h3 style={{ color: '#38bdf8' }}>Chứng Chỉ</h3>
              <p>Cấp chứng nhận hoàn thành khóa đào tạo chuyên đề từ FPT Skillking.</p>
            </div>
          </div>

          {/* Banner Image */}
          <div className="beau-hero-banner">
            <Image
              src="/banner_skillking_sub_v2.png"
              alt="Tuyển sinh FPT Skillking 100h"
              width={1200}
              height={400}
              priority
            />
          </div>
        </div>
      </section>

      {/* Section 1: 3 Khóa Chuyên Đề 100h (☀️ LIGHT BRIGHT THEME) */}
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
              CHUYÊN ĐỀ THỰC CHIẾN
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, color: 'var(--secondary)', lineHeight: '1.2', marginTop: '10px', fontFamily: 'var(--font-sans)', letterSpacing: '-0.02em' }}>
              Chương trình học ngắn hạn <span style={{ whiteSpace: 'nowrap' }}>Digital Marketing</span> tại <span style={{ whiteSpace: 'nowrap' }}>FPT Skillking</span>
            </h2>
            <p style={{ color: '#64748b', maxWidth: '720px', margin: '14px auto 0', fontSize: '1.05rem', lineHeight: '1.7' }}>
              Giải pháp tối ưu cho chủ shop kinh doanh, người làm marketing và các bạn trẻ muốn có việc làm ngay.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            {/* Short Course 1 */}
            <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '24px', padding: '40px 32px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <span style={{ background: 'rgba(9, 82, 156, 0.12)', color: '#09529c', fontWeight: 800, fontSize: '0.82rem', padding: '6px 14px', borderRadius: '20px', textTransform: 'uppercase' }}>
                  KHOÁ 01
                </span>
                <TrendingUp size={26} style={{ color: '#09529c' }} />
              </div>
              <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '14px', fontFamily: 'var(--font-sans)' }}>
                Social Media Creator &amp; Ads Performance (Meta/Tiktok)
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.98rem', lineHeight: '1.7', marginBottom: '24px', flexGrow: 1 }}>
                <strong>Mục tiêu:</strong> Xây dựng quy trình thực chiến: content social và quảng cáo cho Meta/TikTok
              </p>
              <div style={{ borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '20px' }}>
                <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#09529c', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>Nội dung môn học</span>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#09529c', flexShrink: 0 }} />AI COPYWRITING &amp; STORYTELLING</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#09529c', flexShrink: 0 }} />AI VISUAL DESIGN FOR MARKETERS</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#09529c', flexShrink: 0 }} />SOCIAL MEDIA OPERATIONS</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#09529c', flexShrink: 0 }} />CAPSTONE PROJECT</li>
                </ul>
              </div>
              <div style={{ borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '16px', marginTop: '16px' }}>
                <p style={{ color: '#334155', fontSize: '0.92rem', lineHeight: '1.6', margin: 0 }}>
                  <strong style={{ color: '#09529c' }}>Đầu ra:</strong> Bộ creative (template và ngân hàng nội dung), thiết lập chiến dịch &amp; kế hoạch tối ưu
                </p>
              </div>
            </div>

            {/* Short Course 2 */}
            <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '24px', padding: '40px 32px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <span style={{ background: 'rgba(9, 82, 156, 0.12)', color: '#09529c', fontWeight: 800, fontSize: '0.82rem', padding: '6px 14px', borderRadius: '20px', textTransform: 'uppercase' }}>
                  KHOÁ 02
                </span>
                <Search size={26} style={{ color: '#09529c' }} />
              </div>
              <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '14px', fontFamily: 'var(--font-sans)' }}>
                Google Mastery: SEO &amp; SEM
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.98rem', lineHeight: '1.7', marginBottom: '24px', flexGrow: 1 }}>
                <strong>Mục tiêu:</strong> Tăng trưởng tìm kiếm đo lường được thông qua SEO và Google Ads
              </p>
              <div style={{ borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '20px' }}>
                <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#09529c', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>Nội dung môn học</span>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#09529c', flexShrink: 0 }} />AI WEBSITE &amp; LANDING PAGE BUILDER</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#09529c', flexShrink: 0 }} />SEO MASTERY</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#09529c', flexShrink: 0 }} />GOOGLE ADS &amp; SEM USING AI</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#09529c', flexShrink: 0 }} />CAPSTONE PROJECT</li>
                </ul>
              </div>
              <div style={{ borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '16px', marginTop: '16px' }}>
                <p style={{ color: '#334155', fontSize: '0.92rem', lineHeight: '1.6', margin: 0 }}>
                  <strong style={{ color: '#09529c' }}>Đầu ra:</strong> Xây dựng Website/ landingpage, Bộ keyword mapping và checklist audit SEO, cấu trúc Google Ads, tracking và báo cáo
                </p>
              </div>
            </div>

            {/* Short Course 3 */}
            <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '24px', padding: '40px 32px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <span style={{ background: 'rgba(9, 82, 156, 0.12)', color: '#09529c', fontWeight: 800, fontSize: '0.82rem', padding: '6px 14px', borderRadius: '20px', textTransform: 'uppercase' }}>
                  KHOÁ 03
                </span>
                <Video size={26} style={{ color: '#09529c' }} />
              </div>
              <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '14px', fontFamily: 'var(--font-sans)' }}>
                S-Commerce Mastery (TikTok Shop)
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.98rem', lineHeight: '1.7', marginBottom: '24px', flexGrow: 1 }}>
                <strong>Mục tiêu:</strong> Xây dựng hệ thống Scommerce hoàn chỉnh từ sản phẩm → tăng trưởng → chuyển đổi
              </p>
              <div style={{ borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '20px' }}>
                <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#09529c', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>Nội dung môn học</span>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#09529c', flexShrink: 0 }} />WINNING PRODUCT RESEARCH &amp; SETUP</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#09529c', flexShrink: 0 }} />PRACTICAL E-COMMERCE SHOP OPERATIONS</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#09529c', flexShrink: 0 }} />BOOSTING SALES WITH PACE MODEL</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#09529c', flexShrink: 0 }} />TIKTOK LIVESTREAM MASTERY</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#09529c', flexShrink: 0 }} />PROJECT – GROWTH &amp; CONVERSION</li>
                </ul>
              </div>
              <div style={{ borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '16px', marginTop: '16px' }}>
                <p style={{ color: '#334155', fontSize: '0.92rem', lineHeight: '1.6', margin: 0 }}>
                  <strong style={{ color: '#09529c' }}>Đầu ra:</strong> Bộ sản phẩm &amp; offer + trang sản phẩm tối ưu, kế hoạch tăng trưởng theo PACE và báo cáo dự án
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Bottom CTA Section (🌙 DARK CYBER THEME) */}
      <section className="beau-cta-section">
        <div className="beau-cta-bg-circle"></div>
        <div className="container beau-cta-inner" data-reveal>
          <h2 className="beau-cta-title" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', textTransform: 'uppercase' }}>
            Lựa chọn khóa học ngắn hạn tại FPT Skillking<br />Học nhanh, làm sớm, tích luỹ kinh nghiệm
          </h2>
          <a href="#dang-ky-skillking-100h" className="beau-cta-btn" style={{ background: 'linear-gradient(135deg, #09529c 0%, #1a6ed8 100%)', color: '#ffffff', fontWeight: 800, marginTop: '30px' }}>
            Tư vấn ngay
            <ArrowRight size={22} strokeWidth={2.5} />
          </a>
        </div>
      </section>

      {/* Section 3: Scholarship Form (☀️ LIGHT THEME) */}
      <div id="dang-ky-skillking-100h">
        <Skillking100hFormSection />
      </div>

      <Footer />
    </div>
  );
}
