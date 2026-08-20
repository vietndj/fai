'use client';

import { useEffect, useState } from 'react';
import Footer from '@/components/Footer';
import ParticleCanvas from '@/components/ParticleCanvas';
import SkillkingProgramSwitcher from '@/components/SkillkingProgramSwitcher';
import ScholarshipFormSection from '@/components/ScholarshipFormSection';
import TechCTAButton from '@/components/TechCTAButton';
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
          <div style={{ maxWidth: '850px', marginTop: '22px', color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.05rem', lineHeight: '1.75' }}>
            <p style={{ marginBottom: '14px', textWrap: 'balance' }}>
              Bạn không cần học một chương trình dài để làm được <span style={{ whiteSpace: 'nowrap' }}>Digital Marketing.</span> Tại Skillking, bạn có thể chọn từng khóa ngắn theo đúng nhu cầu, mỗi khóa tập trung vào 1 kỹ năng cốt lõi và có đầu ra nghề nghiệp rõ ràng.
            </p>
            <p style={{ margin: 0, textWrap: 'balance' }}>
              Bộ khoá học ngắn hạn đào tạo <span style={{ whiteSpace: 'nowrap' }}>Digital Marketing</span> tích hợp AI mới nhất từ <span style={{ whiteSpace: 'nowrap' }}>FPT Skillking:</span><br />
              <span style={{ color: '#38bdf8', fontWeight: 700 }}>Vững chắc sự nghiệp – Làm chủ công nghệ – Tự tin vào ngành.</span>
            </p>
          </div>

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
              CHƯƠNG TRÌNH THỰC CHIẾN
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, color: 'var(--secondary)', lineHeight: '1.25', marginTop: '10px', fontFamily: 'var(--font-sans)', letterSpacing: '-0.02em', textWrap: 'balance' }}>
              Chương trình học ngắn hạn <span style={{ whiteSpace: 'nowrap' }}>Digital Marketing</span> tại <span style={{ whiteSpace: 'nowrap' }}>FPT Skillking</span>
            </h2>
            <p style={{ color: '#64748b', maxWidth: '640px', margin: '14px auto 0', fontSize: '1.05rem', lineHeight: '1.75', textWrap: 'balance' }}>
              Giải pháp tối ưu cho chủ shop kinh doanh, người làm marketing<br />và các bạn trẻ muốn có việc làm ngay.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px', alignItems: 'stretch' }}>
            {[
              {
                badge: 'Khoá 1',
                icon: <TrendingUp size={26} style={{ color: '#09529c' }} />,
                title: 'Social Media Creator & Ads Performance',
                desc: 'Xây dựng quy trình content social đa nền tảng, thiết lập và tối ưu chiến dịch quảng cáo Meta / TikTok.',
                subjects: [
                  'AI Copywriting & Storytelling',
                  'AI Visual Design for Marketers',
                  'Social Media Operations',
                  'Capstone Project – Performance Ads'
                ],
                output: 'Bộ creative template, ngân hàng nội dung và kế hoạch tối ưu chiến dịch Meta & TikTok Ads.'
              },
              {
                badge: 'Khoá 2',
                icon: <Search size={26} style={{ color: '#09529c' }} />,
                title: 'Google Mastery: SEO & Google Ads',
                desc: 'Chiến lược tăng trưởng thứ hạng tìm kiếm đo lường được thông qua SEO chuyên sâu và Google Ads.',
                subjects: [
                  'AI Website & Landing Page Builder',
                  'SEO Mastery & Keyword Mapping',
                  'Google Ads & SEM using AI',
                  'Capstone Project – Search Growth'
                ],
                output: 'Hệ thống Website/Landing Page, bộ từ khóa SEO và cấu trúc chiến dịch Google Ads hoàn chỉnh.'
              },
              {
                badge: 'Khoá 3',
                icon: <Video size={26} style={{ color: '#09529c' }} />,
                title: 'S-Commerce & TikTok Shop Mastery',
                desc: 'Xây dựng hệ thống thương mại điện tử mạng xã hội hoàn chỉnh từ nghiên cứu sản phẩm đến chuyển đổi.',
                subjects: [
                  'Winning Product Research & Setup',
                  'Practical E-Commerce Operations',
                  'Boosting Sales with PACE Model',
                  'TikTok Livestream & Conversion'
                ],
                output: 'Gian hàng chuẩn SEO, trang sản phẩm tối ưu, kế hoạch livestream và kịch bản tăng trưởng doanh số.'
              }
            ].map((course, idx) => (
              <div 
                key={idx} 
                style={{ 
                  background: '#ffffff', 
                  border: '1px solid rgba(0,0,0,0.06)', 
                  borderRadius: '24px', 
                  padding: '30px 24px', 
                  boxShadow: '0 10px 30px rgba(0,0,0,0.03)', 
                  display: 'flex', 
                  flexDirection: 'column',
                  height: '100%',
                  transition: 'all 0.3s ease'
                }}
              >
                {/* Header: Badge & Icon */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <span style={{ background: 'rgba(9, 82, 156, 0.12)', color: '#09529c', fontWeight: 800, fontSize: '0.82rem', padding: '6px 14px', borderRadius: '20px', textTransform: 'uppercase' }}>
                    {course.badge}
                  </span>
                  {course.icon}
                </div>

                {/* Title (Locked min-height for alignment) */}
                <h3 style={{ 
                  fontSize: '1.25rem', 
                  fontWeight: 800, 
                  color: 'var(--secondary)', 
                  marginBottom: '10px', 
                  fontFamily: 'var(--font-sans)',
                  lineHeight: '1.35',
                  minHeight: '3.4rem',
                  display: 'flex',
                  alignItems: 'center',
                  textWrap: 'balance'
                }}>
                  {course.title}
                </h3>

                {/* Description (Locked min-height for uniform divider position) */}
                <p style={{ 
                  color: '#64748b', 
                  fontSize: '0.92rem', 
                  lineHeight: '1.65', 
                  marginBottom: '20px', 
                  minHeight: '4.4rem',
                  textWrap: 'pretty'
                }}>
                  {course.desc}
                </p>

                {/* Section Divider & Môn học */}
                <div style={{ borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#09529c', textTransform: 'uppercase', display: 'block', marginBottom: '14px', letterSpacing: '0.04em' }}>
                    Nội dung môn học
                  </span>
                  
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '22px', minHeight: '135px' }}>
                    {course.subjects.map((sub, sIdx) => (
                      <li key={sIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.88rem', color: '#334155', lineHeight: '1.45' }}>
                        <Check size={16} style={{ color: '#09529c', flexShrink: 0, marginTop: '2px' }} />
                        <span>{sub}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Output Box (Pinned at bottom in rounded box with space after colon) */}
                  <div style={{ 
                    marginTop: 'auto', 
                    fontSize: '0.88rem', 
                    color: '#334155', 
                    background: '#F8FAFC', 
                    padding: '14px 16px', 
                    borderRadius: '14px', 
                    border: '1px solid rgba(0, 0, 0, 0.04)',
                    minHeight: '74px',
                    display: 'flex',
                    alignItems: 'center',
                    lineHeight: '1.5'
                  }}>
                    <div>
                      <strong style={{ color: '#09529c' }}>Đầu ra:</strong> {course.output}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Bottom CTA Section (🌙 DARK CYBER THEME) */}
      <section className="beau-cta-section">
        <div className="beau-cta-bg-circle"></div>
        <div className="container beau-cta-inner" data-reveal>
          <h2 className="beau-cta-title" style={{ textWrap: 'balance', maxWidth: '780px', margin: '0 auto 16px' }}>
            Sẵn sàng bứt phá kỹ năng<br />Digital Marketing cấp tốc?
          </h2>
          <p style={{ 
            color: 'rgba(255, 255, 255, 0.85)', 
            fontSize: '1.1rem', 
            maxWidth: '720px', 
            margin: '16px auto 32px', 
            lineHeight: '1.7',
            textWrap: 'balance' 
          }}>
            Đăng ký nhận lịch khai giảng các khóa ngắn hạn 100 giờ và thông tin ưu đãi mới nhất từ <span style={{ whiteSpace: 'nowrap' }}>FPT Skillking</span>
          </p>
          <TechCTAButton 
            text="Tư vấn ngay" 
            href="https://zalo.me/fptskillking" 
            style={{ 
              background: 'linear-gradient(135deg, #09529c 0%, #0284c7 100%)', 
              color: '#ffffff',
              fontWeight: 800,
              boxShadow: '0 10px 30px rgba(9, 82, 156, 0.4)'
            }} 
          />
        </div>
      </section>

      {/* Section 3: Scholarship Form (☀️ LIGHT THEME) */}
      <div id="dang-ky-skillking-100h">
        <ScholarshipFormSection 
          programName="FPT Skillking Khóa Ngắn Hạn (100 Giờ)"
          brand="skillking"
          headerTitle="NHẬN THÔNG TIN TƯ VẤN KHÓA HỌC NGẮN HẠN 100H & HỌC BỔNG TẠI FPT SKILLKING"
          formTitle="BẠN CÓ MUỐN BỨT PHÁ KỸ NĂNG DIGITAL MARKETING CẤP TỐC?"
          formSubtitle="Đăng ký nhận tư vấn lộ trình 100 giờ thực chiến và ưu đãi mới nhất"
          courseOptions={[
            "Social Media Marketing & Content AI (100h)",
            "SEO & Google Ads Chuyên Sâu (100h)",
            "Performance Marketing & Data Analytics (100h)",
            "E-Commerce & Marketing Automation (100h)"
          ]}
        />
      </div>

      <Footer />
    </div>
  );
}
