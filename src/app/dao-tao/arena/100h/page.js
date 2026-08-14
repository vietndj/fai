'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ParticleCanvas from '@/components/ParticleCanvas';
import ArenaProgramSwitcher from '@/components/ArenaProgramSwitcher';
import ScholarshipFormSection from '@/components/ScholarshipFormSection';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check, Sparkles, Zap, Palette, Film, Smartphone, Clock, Award } from 'lucide-react';

export default function Arena100hPage() {
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
    <div className={`beau-subpage-container theme-arena active-sec-${activeSection}`}>
      <Header />

      {/* Program Switcher Bar */}
      <ArenaProgramSwitcher activePath="/dao-tao/arena/100h" />

      {/* Section 0: Hero Section (🌙 DARK CYBER THEME) */}
      <section className="beau-hero">
        <ParticleCanvas className="beau-hero-particles" />
        <div className="beau-hero-bg-text">100 GIỜ</div>
        <div className="container beau-hero-inner" data-reveal>
          <span className="beau-hero-brand" style={{ backgroundColor: '#ffb600', color: '#000000', fontWeight: 800 }}>
            FPT ARENA — KHÓA NGẮN HẠN 100 GIỜ
          </span>
          <h1 className="beau-hero-title">
            Khóa Học Ngắn Hạn<br />Thiết Kế Đồ Họa Thực Chiến
          </h1>
          <div className="beau-hero-logo" style={{ marginTop: '16px', marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
            <Image src="/logo_arena.png" alt="FPT Arena Multimedia Logo" width={180} height={42} style={{ objectFit: 'contain', objectPosition: 'left' }} />
          </div>
          <p className="beau-hero-desc">
            Tối ưu hóa thời gian và chi phí với các chuyên đề ngắn hạn 100 giờ thực chiến 100%. Nhanh chóng làm chủ phần mềm, tự tay tạo ra ấn phẩm truyền thông, video ngắn viral và giao diện website/app chuyên nghiệp.
          </p>

          <div className="beau-stats-bar">
            <div className="beau-stat-item">
              <h3 style={{ color: '#ffb600' }}>100 Giờ</h3>
              <p>Thời lượng cô đọng, thực hành 80% trên case study thực tế.</p>
            </div>
            <div className="beau-stat-item">
              <h3 style={{ color: '#ffb600' }}>Cấp Tốc</h3>
              <p>Học nhanh, làm được ngay, tự tin nhận việc Freelance và ứng tuyển.</p>
            </div>
            <div className="beau-stat-item">
              <h3 style={{ color: '#ffb600' }}>Chứng Chỉ</h3>
              <p>Chứng nhận hoàn thành khóa đào tạo chuyên đề từ FPT Arena Multimedia.</p>
            </div>
          </div>

          {/* Banner Image */}
          <div className="beau-hero-banner">
            <Image
              src="/banner_arena_sub_v2.png"
              alt="Tuyển sinh Arena Khóa ngắn hạn 100h"
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
            <span style={{ color: '#d97706', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '0.85rem' }}>
              CHUYÊN ĐỀ 100 GIỜ
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, color: 'var(--secondary)', lineHeight: '1.2', marginTop: '10px', fontFamily: 'var(--font-sans)', letterSpacing: '-0.02em' }}>
              3 Khóa học ngắn hạn cấp tốc thực chiến
            </h2>
            <p style={{ color: '#64748b', maxWidth: '720px', margin: '14px auto 0', fontSize: '1.05rem', lineHeight: '1.7' }}>
              Được thiết kế riêng cho người đi làm, sinh viên trái ngành và các bạn trẻ muốn có nghề ngay.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            {/* Short Course 1 */}
            <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '24px', padding: '40px 32px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <span style={{ background: 'rgba(255, 182, 0, 0.15)', color: '#d97706', fontWeight: 800, fontSize: '0.82rem', padding: '6px 14px', borderRadius: '20px', textTransform: 'uppercase' }}>
                  100 GIỜ HỌC
                </span>
                <Palette size={26} style={{ color: '#d97706' }} />
              </div>
              <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '14px', fontFamily: 'var(--font-sans)' }}>
                Thiết Kế Đồ Họa 2D (Photoshop &amp; Illustrator)
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.98rem', lineHeight: '1.7', marginBottom: '24px', flexGrow: 1 }}>
                Làm chủ nguyên lý thị giác, bố cục chữ Typography, chỉnh sửa ảnh chuyên nghiệp và thiết kế banner, poster, ấn phẩm mạng xã hội quảng cáo.
              </p>
              <div style={{ borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '20px' }}>
                <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#d97706', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>Nội dung trọng tâm</span>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#d97706' }} />Xử lý hình ảnh chuyên nghiệp Photoshop</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#d97706' }} />Vẽ vector minh họa Illustrator</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#d97706' }} />Thực hành làm ấn phẩm Marketing thực tế</li>
                </ul>
              </div>
            </div>

            {/* Short Course 2 */}
            <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '24px', padding: '40px 32px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <span style={{ background: 'rgba(255, 182, 0, 0.15)', color: '#d97706', fontWeight: 800, fontSize: '0.82rem', padding: '6px 14px', borderRadius: '20px', textTransform: 'uppercase' }}>
                  100 GIỜ HỌC
                </span>
                <Film size={26} style={{ color: '#d97706' }} />
              </div>
              <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '14px', fontFamily: 'var(--font-sans)' }}>
                Dựng Phim &amp; Video Viral (Premiere &amp; CapCut Pro)
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.98rem', lineHeight: '1.7', marginBottom: '24px', flexGrow: 1 }}>
                Biên kịch nội dung video ngắn TikTok/Reels, kỹ thuật góc quay bằng smartphone, dàn dựng hậu kỳ Premiere, hiệu ứng âm thanh và tạo video triệu view.
              </p>
              <div style={{ borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '20px' }}>
                <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#d97706', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>Nội dung trọng tâm</span>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#d97706' }} />Kỹ thuật dựng video Premiere Pro &amp; CapCut</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#d97706' }} />Chèn nhạc, hiệu ứng chuyển cảnh Motion</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#d97706' }} />Sản xuất video TVC &amp; Reels thực tế</li>
                </ul>
              </div>
            </div>

            {/* Short Course 3 */}
            <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '24px', padding: '40px 32px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <span style={{ background: 'rgba(255, 182, 0, 0.15)', color: '#d97706', fontWeight: 800, fontSize: '0.82rem', padding: '6px 14px', borderRadius: '20px', textTransform: 'uppercase' }}>
                  100 GIỜ HỌC
                </span>
                <Smartphone size={26} style={{ color: '#d97706' }} />
              </div>
              <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '14px', fontFamily: 'var(--font-sans)' }}>
                Thiết Kế UI/UX Web &amp; App (Figma Thực Chiến)
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.98rem', lineHeight: '1.7', marginBottom: '24px', flexGrow: 1 }}>
                Nghiên cứu hành vi người dùng (UX), thiết kế wireframe, xây dựng hệ thống Design System chuẩn chỉnh và tạo prototype tương tác động trên Figma.
              </p>
              <div style={{ borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '20px' }}>
                <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#d97706', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>Nội dung trọng tâm</span>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#d97706' }} />Thành thạo công cụ Figma &amp; Auto-Layout</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#d97706' }} />Xây dựng Design System &amp; Component</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#d97706' }} />Đồ án Prototype ứng dụng di động hoàn chỉnh</li>
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
          <h2 className="beau-cta-title">Học nhanh, làm được ngay cùng khóa ngắn hạn 100 giờ</h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.1rem', maxWidth: '680px', margin: '14px auto 36px', lineHeight: '1.7' }}>
            Nhận ưu đãi học phí đặc biệt dành cho sinh viên và người đi làm đăng ký trong tháng này.
          </p>
          <a href="#dang-ky-arena-100h" className="beau-cta-btn" style={{ background: 'linear-gradient(135deg, #ffb600 0%, #d97706 100%)', color: '#000000', fontWeight: 800 }}>
            Đăng Ký Khóa Học 100 Giờ
            <ArrowRight size={22} strokeWidth={2.5} />
          </a>
        </div>
      </section>

      {/* Section 3: Scholarship Form (☀️ LIGHT THEME) */}
      <div id="dang-ky-arena-100h">
        <ScholarshipFormSection programName="FPT Arena Khóa Ngắn Hạn (100 Giờ)" />
      </div>

      <Footer />
    </div>
  );
}
