'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ParticleCanvas from '@/components/ParticleCanvas';
import SkillkingProgramSwitcher from '@/components/SkillkingProgramSwitcher';
import ScholarshipFormSection from '@/components/ScholarshipFormSection';
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
      <Header />

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
          <h1 className="beau-hero-title">
            Bộ Khóa Học Digital Marketing<br />Thực Chiến (100 Giờ)
          </h1>
          <div className="beau-hero-logo" style={{ marginTop: '20px', display: 'flex', alignItems: 'center' }}>
            <svg width="130" height="40" viewBox="0 0 130 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 10 L22 17 L29 10 L26 25 L18 25 Z" fill="#f37021"/>
              <path d="M18 25 H26 V28 H18 Z" fill="#09529c"/>
              <text x="36" y="26" fill="#09529c" fontSize="16" fontWeight="bold" fontFamily="sans-serif">skillking</text>
            </svg>
          </div>
          <p className="beau-hero-desc">
            Nâng cấp kỹ năng chạy quảng cáo, tối ưu SEO website và sáng tạo nội dung chuyển đổi trong thời gian ngắn nhất. Chương trình 100 giờ thực chiến trực tiếp trên ngân sách và tài khoản doanh nghiệp thực tế.
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
              3 Khóa học ngắn hạn bùng nổ chuyển đổi
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
                  100 GIỜ HỌC
                </span>
                <TrendingUp size={26} style={{ color: '#09529c' }} />
              </div>
              <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '14px', fontFamily: 'var(--font-sans)' }}>
                Chuyên Sâu Google Ads &amp; Meta Ads
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.98rem', lineHeight: '1.7', marginBottom: '24px', flexGrow: 1 }}>
                Nắm vững cách setup tài khoản BM doanh nghiệp, kỹ thuật đấu thầu từ khóa, tối ưu CPM/CPC, retargeting tệp khách hàng tiềm năng và chống khóa tài khoản.
              </p>
              <div style={{ borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '20px' }}>
                <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#09529c', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>Nội dung cốt lõi</span>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#09529c' }} />Google Search, Display &amp; YouTube Ads</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#09529c' }} />Facebook/Instagram Ads &amp; Pixel Tracking</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#09529c' }} />Tối ưu ngân sách thực tế &amp; Đọc báo cáo số</li>
                </ul>
              </div>
            </div>

            {/* Short Course 2 */}
            <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '24px', padding: '40px 32px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <span style={{ background: 'rgba(9, 82, 156, 0.12)', color: '#09529c', fontWeight: 800, fontSize: '0.82rem', padding: '6px 14px', borderRadius: '20px', textTransform: 'uppercase' }}>
                  100 GIỜ HỌC
                </span>
                <Search size={26} style={{ color: '#09529c' }} />
              </div>
              <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '14px', fontFamily: 'var(--font-sans)' }}>
                SEO Website &amp; Chiến Lược Content AI
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.98rem', lineHeight: '1.7', marginBottom: '24px', flexGrow: 1 }}>
                Đẩy website lên TOP 1 Google không phụ thuộc quảng cáo. Ứng dụng ChatGPT và công cụ AI để nghiên cứu từ khóa, viết bài chuẩn SEO hàng loạt và xây dựng backlink uy tín.
              </p>
              <div style={{ borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '20px' }}>
                <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#09529c', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>Nội dung cốt lõi</span>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#09529c' }} />Nghiên cứu từ khóa bằng Semrush &amp; Ahrefs</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#09529c' }} />Tối ưu On-page, Cấu trúc Silo &amp; Kỹ thuật SEO</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#09529c' }} />Tạo nội dung tự động với AI Copywriting</li>
                </ul>
              </div>
            </div>

            {/* Short Course 3 */}
            <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '24px', padding: '40px 32px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <span style={{ background: 'rgba(9, 82, 156, 0.12)', color: '#09529c', fontWeight: 800, fontSize: '0.82rem', padding: '6px 14px', borderRadius: '20px', textTransform: 'uppercase' }}>
                  100 GIỜ HỌC
                </span>
                <Video size={26} style={{ color: '#09529c' }} />
              </div>
              <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '14px', fontFamily: 'var(--font-sans)' }}>
                TikTok Ads &amp; Video Ngắn Triệu View
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.98rem', lineHeight: '1.7', marginBottom: '24px', flexGrow: 1 }}>
                Làm chủ thuật toán phân phối của TikTok và Meta Reels. Lên kịch bản viral, quay dựng video ngắn bằng CapCut Pro và chạy quảng cáo TikTok Shop tối ưu đơn hàng.
              </p>
              <div style={{ borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '20px' }}>
                <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#09529c', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>Nội dung cốt lõi</span>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#09529c' }} />Quy trình sản xuất Video ngắn bán hàng</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#09529c' }} />Vận hành TikTok Shop &amp; Affiliate Marketing</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#09529c' }} />Setup TikTok Ads Manager chuyển đổi cao</li>
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
          <h2 className="beau-cta-title">Tăng tốc kỹ năng Digital Marketing trong 100 giờ</h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.1rem', maxWidth: '680px', margin: '14px auto 36px', lineHeight: '1.7' }}>
            Nhận ưu đãi học phí đặc biệt dành cho sinh viên và người đi làm đăng ký ngay hôm nay.
          </p>
          <a href="#dang-ky-skillking-100h" className="beau-cta-btn" style={{ background: 'linear-gradient(135deg, #09529c 0%, #1a6ed8 100%)', color: '#ffffff', fontWeight: 800 }}>
            Đăng Ký Khóa Học 100 Giờ
            <ArrowRight size={22} strokeWidth={2.5} />
          </a>
        </div>
      </section>

      {/* Section 3: Scholarship Form (☀️ LIGHT THEME) */}
      <div id="dang-ky-skillking-100h">
        <ScholarshipFormSection programName="FPT Skillking Khóa Ngắn Hạn (100 Giờ)" />
      </div>

      <Footer />
    </div>
  );
}
