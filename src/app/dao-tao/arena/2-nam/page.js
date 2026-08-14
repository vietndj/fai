'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ParticleCanvas from '@/components/ParticleCanvas';
import ArenaProgramSwitcher from '@/components/ArenaProgramSwitcher';
import ScholarshipFormSection from '@/components/ScholarshipFormSection';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check, Award, BookOpen, Clock, Trophy, Sparkles } from 'lucide-react';

export default function Arena2NamPage() {
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

      {/* Program Switcher Bar Ghim cố định */}
      <ArenaProgramSwitcher activePath="/dao-tao/arena/2-nam" />

      {/* Section 0: Hero Section (🌙 DARK CYBER THEME) */}
      <section className="beau-hero">
        <ParticleCanvas className="beau-hero-particles" />
        <div className="beau-hero-bg-text">AMSP 2 NĂM</div>
        <div className="container beau-hero-inner" data-reveal>
          <span className="beau-hero-brand" style={{ backgroundColor: '#ffb600', color: '#000000', fontWeight: 800 }}>
            FPT ARENA MULTIMEDIA — AMSP 2 NĂM
          </span>
          <h1 className="beau-hero-title">
            Chuyên Gia Mỹ Thuật<br />Đa Phương Tiện Quốc Tế
          </h1>
          <div className="beau-hero-logo" style={{ marginTop: '16px', marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
            <Image src="/logo_arena.png" alt="FPT Arena Multimedia Logo" width={180} height={42} style={{ objectFit: 'contain', objectPosition: 'left' }} />
          </div>
          <p className="beau-hero-desc">
            Chương trình đào tạo Chuyên gia Mỹ thuật Đa phương tiện chuẩn quốc tế (AMSP) 2 năm toàn diện nhất thế giới. Đi từ thiết kế đồ họa 2D, giao diện web UI/UX đến làm phim kỹ thuật số, kỹ xảo điện ảnh CGI và diễn hoạt hoạt hình 3D đỉnh cao.
          </p>

          <div className="beau-stats-bar">
            <div className="beau-stat-item">
              <h3 style={{ color: '#ffb600' }}>04 Kỳ Học</h3>
              <p>2 năm hoàn thiện toàn diện bộ kỹ năng sáng tạo số từ 2D đến 3D.</p>
            </div>
            <div className="beau-stat-item">
              <h3 style={{ color: '#ffb600' }}>AMSP AD</h3>
              <p>Bằng Advanced Diploma quốc tế danh giá do Aptech Ấn Độ cấp.</p>
            </div>
            <div className="beau-stat-item">
              <h3 style={{ color: '#ffb600' }}>100% Đồ Án</h3>
              <p>4 kỳ sở hữu 4 bộ Portfolio và đồ án phim/game thực chiến ấn tượng.</p>
            </div>
          </div>

          {/* Banner Image */}
          <div className="beau-hero-banner">
            <Image
              src="/banner_arena_sub_v2.png"
              alt="Tuyển sinh Arena Multimedia 2 năm"
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
            <span style={{ color: '#d97706', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '0.85rem' }}>
              LỘ TRÌNH ĐÀO TẠO
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, color: 'var(--secondary)', lineHeight: '1.2', marginTop: '10px', fontFamily: 'var(--font-sans)', letterSpacing: '-0.02em' }}>
              4 học kỳ chuyên sâu chuẩn AMSP quốc tế
            </h2>
            <p style={{ color: '#64748b', maxWidth: '720px', margin: '14px auto 0', fontSize: '1.05rem', lineHeight: '1.7' }}>
              Giáo trình cập nhật liên tục các xu hướng sáng tạo mới nhất: UI/UX di động, kỹ xảo CGI điện ảnh, diễn hoạt hoạt hình 3D và môi trường thiết kế game chuẩn Unreal.
            </p>
          </div>

          {/* 4 Semester Cards in Modern Light Theme */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            {/* Semester 1 */}
            <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '24px', padding: '36px 30px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column' }}>
              <span style={{ color: '#d97706', fontWeight: 900, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>
                HỌC KỲ 01
              </span>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '14px', fontFamily: 'var(--font-sans)', lineHeight: '1.3' }}>
                Graphic Design — Thiết kế đồ họa thương hiệu
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', lineHeight: '1.65', marginBottom: '24px', flexGrow: 1 }}>
                Đặt nền móng tư duy thẩm mỹ vững chắc. Học viên làm quen với nguyên lý thiết kế, Typography, màu sắc và thành thạo bộ công cụ Photoshop, Illustrator, InDesign.
              </p>
              <div style={{ borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '20px' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#d97706', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '12px' }}>
                  Môn học trọng tâm
                </span>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#d97706', flexShrink: 0 }} />Nguyên lý thiết kế & Bố cục thị giác</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#d97706', flexShrink: 0 }} />Xử lý ảnh kỹ thuật số với Photoshop</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#d97706', flexShrink: 0 }} />Thiết kế minh họa với Illustrator</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#d97706', flexShrink: 0 }} />Dàn trang chuyên nghiệp với InDesign</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#d97706', flexShrink: 0 }} />Đồ án Nhận diện Thương hiệu e-Project</li>
                </ul>
              </div>
            </div>

            {/* Semester 2 */}
            <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '24px', padding: '36px 30px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column' }}>
              <span style={{ color: '#d97706', fontWeight: 900, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>
                HỌC KỲ 02
              </span>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '14px', fontFamily: 'var(--font-sans)', lineHeight: '1.3' }}>
                Web & UI/UX Design — Thiết kế Web & Trải nghiệm
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', lineHeight: '1.65', marginBottom: '24px', flexGrow: 1 }}>
                Tiến vào thế giới giao diện số tương tác. Nghiên cứu hành vi người dùng, phác thảo luồng trải nghiệm, thiết kế giao diện ứng dụng trên Figma và code HTML5/CSS3/Bootstrap.
              </p>
              <div style={{ borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '20px' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#d97706', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '12px' }}>
                  Môn học trọng tâm
                </span>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#d97706', flexShrink: 0 }} />Tư duy thiết kế trải nghiệm người dùng (UX)</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#d97706', flexShrink: 0 }} />Thiết kế giao diện UI trên Figma</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#d97706', flexShrink: 0 }} />Lập trình Front-end với HTML5 & CSS3</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#d97706', flexShrink: 0 }} />Thiết kế Website responsive với Bootstrap</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#d97706', flexShrink: 0 }} />Đồ án Thiết kế Web & App e-Project</li>
                </ul>
              </div>
            </div>

            {/* Semester 3 */}
            <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '24px', padding: '36px 30px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column' }}>
              <span style={{ color: '#d97706', fontWeight: 900, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>
                HỌC KỲ 03
              </span>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '14px', fontFamily: 'var(--font-sans)', lineHeight: '1.3' }}>
                Filmmaking & VFX — Kỹ xảo, Làm phim & Game
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', lineHeight: '1.65', marginBottom: '24px', flexGrow: 1 }}>
                Làm chủ chuyển động và câu chuyện hình ảnh. Quy trình biên kịch, quay phim chuyên nghiệp, hậu kỳ Premiere, kỹ xảo CGI After Effects và thiết kế game 3D.
              </p>
              <div style={{ borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '20px' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#d97706', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '12px' }}>
                  Môn học trọng tâm
                </span>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#d97706', flexShrink: 0 }} />Kỹ thuật quay phim & Kịch bản phân cảnh</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#d97706', flexShrink: 0 }} />Biên tập video với Adobe Premiere Pro</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#d97706', flexShrink: 0 }} />Kỹ xảo CGI với After Effects</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#d97706', flexShrink: 0 }} />Thiết kế Game 3D & Sáng tạo thế giới</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#d97706', flexShrink: 0 }} />Đồ án Phim ngắn kỹ thuật số e-Project</li>
                </ul>
              </div>
            </div>

            {/* Semester 4 */}
            <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '24px', padding: '36px 30px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column' }}>
              <span style={{ color: '#d97706', fontWeight: 900, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>
                HỌC KỲ 04
              </span>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '14px', fontFamily: 'var(--font-sans)', lineHeight: '1.3' }}>
                3D Animation — Hoạt hình 3D chuyên sâu
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', lineHeight: '1.65', marginBottom: '24px', flexGrow: 1 }}>
                Thổi hồn cho các mô hình số. Tạo hình nhân vật 3D (Modeling), dựng khung xương (Rigging), tạo chuyển động (Animation) và kết xuất ánh sáng (Rendering) với Autodesk Maya.
              </p>
              <div style={{ borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '20px' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#d97706', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '12px' }}>
                  Môn học trọng tâm
                </span>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#d97706', flexShrink: 0 }} />Dựng hình nhân vật 3D (3D Modeling)</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#d97706', flexShrink: 0 }} />Thiết lập khung xương chuyển động (Rigging)</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#d97706', flexShrink: 0 }} />Diễn hoạt nhân vật & biểu cảm 3D</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#d97706', flexShrink: 0 }} />Kỹ thuật ánh sáng & Kết xuất (Rendering)</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#d97706', flexShrink: 0 }} />Đồ án tốt nghiệp Hoạt hình 3D hoàn chỉnh</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Công Cụ & Công Nghệ (🌙 DARK TECH THEME) */}
      <section className="beau-section" style={{ padding: '100px 0 110px 0' }}>
        <div className="container" data-reveal>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="beau-section-eyebrow" style={{ color: '#ffb600' }}>CREATIVE TOOLS</span>
            <h2 className="beau-section-title" style={{ marginBottom: '10px' }}>Làm chủ công cụ sáng tạo đỉnh cao</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', maxWidth: '650px', margin: '0 auto', fontSize: '1.05rem', lineHeight: '1.7' }}>
              Trang bị toàn bộ hệ sinh thái phần mềm tiêu chuẩn từ các hãng công nghệ hàng đầu thế giới
            </p>
          </div>

          <div className="beau-tech-grid">
            <div className="beau-tech-item" data-reveal data-reveal-delay="0.05">
              <span className="beau-tech-icon" style={{ color: '#31a8ff' }}>Ps</span>
              <span className="beau-tech-name">Adobe Photoshop</span>
            </div>
            <div className="beau-tech-item" data-reveal data-reveal-delay="0.1">
              <span className="beau-tech-icon" style={{ color: '#ff9a00' }}>Ai</span>
              <span className="beau-tech-name">Adobe Illustrator</span>
            </div>
            <div className="beau-tech-item" data-reveal data-reveal-delay="0.15">
              <span className="beau-tech-icon" style={{ color: '#a259ff' }}>Fg</span>
              <span className="beau-tech-name">Figma UI/UX</span>
            </div>
            <div className="beau-tech-item" data-reveal data-reveal-delay="0.2">
              <span className="beau-tech-icon" style={{ color: '#ea77ff' }}>Pr</span>
              <span className="beau-tech-name">Adobe Premiere Pro</span>
            </div>
            <div className="beau-tech-item" data-reveal data-reveal-delay="0.25">
              <span className="beau-tech-icon" style={{ color: '#9999ff' }}>Ae</span>
              <span className="beau-tech-name">Adobe After Effects</span>
            </div>
            <div className="beau-tech-item" data-reveal data-reveal-delay="0.3">
              <span className="beau-tech-icon" style={{ color: '#00d2ff' }}>My</span>
              <span className="beau-tech-name">Autodesk Maya</span>
            </div>
            <div className="beau-tech-item" data-reveal data-reveal-delay="0.35">
              <span className="beau-tech-icon" style={{ color: '#e87d0d' }}>Bl</span>
              <span className="beau-tech-name">Blender 3D</span>
            </div>
            <div className="beau-tech-item" data-reveal data-reveal-delay="0.4">
              <span className="beau-tech-icon" style={{ color: '#ffffff' }}>UE</span>
              <span className="beau-tech-name">Unreal Engine</span>
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
            <span style={{ color: '#d97706', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '0.85rem' }}>
              CAREERS
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, color: 'var(--secondary)', lineHeight: '1.2', marginTop: '10px', fontFamily: 'var(--font-sans)', letterSpacing: '-0.02em' }}>
              Vị trí việc làm sau khi tốt nghiệp
            </h2>
            <p style={{ color: '#64748b', maxWidth: '650px', margin: '14px auto 0', fontSize: '1.05rem', lineHeight: '1.7' }}>
              Mở rộng cánh cửa vào các Agency, Production House, Studio Game và Tập đoàn công nghệ hàng đầu
            </p>
          </div>

          <div className="beau-careers-grid">
            <div className="beau-career-card" style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderLeft: '5px solid #ffb600', boxShadow: '0 8px 25px rgba(0,0,0,0.02)' }}>
              <h3 className="career-title" style={{ color: 'var(--secondary)' }}>Graphic Designer</h3>
              <p className="career-desc" style={{ color: '#64748b' }}>Thiết kế bộ nhận diện thương hiệu sản phẩm, bao bì nhãn mác và chiến dịch quảng bá truyền thông cho doanh nghiệp.</p>
            </div>
            <div className="beau-career-card" style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderLeft: '5px solid #ffb600', boxShadow: '0 8px 25px rgba(0,0,0,0.02)' }}>
              <h3 className="career-title" style={{ color: 'var(--secondary)' }}>UI/UX Designer</h3>
              <p className="career-desc" style={{ color: '#64748b' }}>Nghiên cứu trải nghiệm và thiết kế giao diện trực quan cho các ứng dụng di động, website và phần mềm số.</p>
            </div>
            <div className="beau-career-card" style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderLeft: '5px solid #ffb600', boxShadow: '0 8px 25px rgba(0,0,0,0.02)' }}>
              <h3 className="career-title" style={{ color: 'var(--secondary)' }}>Motion Graphic Artist</h3>
              <p className="career-desc" style={{ color: '#64748b' }}>Sáng tạo video đồ hoạ động phục vụ các chiến dịch quảng cáo mạng xã hội, intro phim và truyền thông số.</p>
            </div>
            <div className="beau-career-card" style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderLeft: '5px solid #ffb600', boxShadow: '0 8px 25px rgba(0,0,0,0.02)' }}>
              <h3 className="career-title" style={{ color: 'var(--secondary)' }}>3D Character Animator</h3>
              <p className="career-desc" style={{ color: '#64748b' }}>Thiết lập chuyển động nhân vật 3D, biểu cảm gương mặt chuyên sâu cho các dự án hoạt hình và phim quảng cáo.</p>
            </div>
            <div className="beau-career-card" style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderLeft: '5px solid #ffb600', boxShadow: '0 8px 25px rgba(0,0,0,0.02)' }}>
              <h3 className="career-title" style={{ color: 'var(--secondary)' }}>Video Editor & VFX Specialist</h3>
              <p className="career-desc" style={{ color: '#64748b' }}>Biên tập dàn dựng phim, xử lý kỹ xảo CGI hậu kỳ cho các thước phim ngắn quảng cáo, MV và điện ảnh chuyên nghiệp.</p>
            </div>
            <div className="beau-career-card" style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderLeft: '5px solid #ffb600', boxShadow: '0 8px 25px rgba(0,0,0,0.02)' }}>
              <h3 className="career-title" style={{ color: 'var(--secondary)' }}>Game Environment Artist</h3>
              <p className="career-desc" style={{ color: '#64748b' }}>Thiết kế bối cảnh không gian 3D, kiến trúc môi trường, bản đồ và ánh sáng cho các dự án game đa nền tảng.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Ưu đãi tuyển sinh đặc quyền (🌙 DARK TECH THEME) */}
      <section className="beau-section" style={{ padding: '100px 0 110px 0' }}>
        <div className="container" data-reveal>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="beau-section-eyebrow" style={{ color: '#ffb600' }}>HỌC BỔNG & CHÍNH SÁCH</span>
            <h2 className="beau-section-title" style={{ marginBottom: '10px' }}>Ưu đãi tuyển sinh đặc quyền Arena</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', maxWidth: '650px', margin: '0 auto', fontSize: '1.05rem', lineHeight: '1.7' }}>
              Đồng hành cùng tài năng sáng tạo trẻ chinh phục ước mơ nghệ thuật đa phương tiện
            </p>
          </div>
          
          <div className="beau-incentives-grid">
            <div className="beau-incentive-card" style={{ '--accent': '#ffb600' }} data-reveal data-reveal-delay="0.05">
              <span className="incentive-badge">HỌC BỔNG</span>
              <h3 className="incentive-value">Lên tới 50%</h3>
              <p className="incentive-desc">Học bổng Tài năng sáng tạo hỗ trợ thế hệ nhà thiết kế trẻ phát triển tư duy nghệ thuật vượt trội.</p>
            </div>
            <div className="beau-incentive-card" style={{ '--accent': '#ffb600' }} data-reveal data-reveal-delay="0.1">
              <span className="incentive-badge">NHẬP HỌC SỚM</span>
              <h3 className="incentive-value">Tặng Wacom</h3>
              <p className="incentive-desc">Ưu đãi tặng ngay Bảng vẽ Wacom thế hệ mới cho học viên hoàn thành thủ tục nhập học sớm đợt này.</p>
            </div>
            <div className="beau-incentive-card" style={{ '--accent': '#ffb600' }} data-reveal data-reveal-delay="0.15">
              <span className="incentive-badge">TRẢ GÓP</span>
              <h3 className="incentive-value">0% Lãi Suất</h3>
              <p className="incentive-desc">Hỗ trợ chia nhỏ học phí đóng theo từng tháng qua thẻ tín dụng ngân hàng đối tác.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Bottom CTA Section (🌙 DARK CYBER THEME) */}
      <section className="beau-cta-section">
        <div className="beau-cta-bg-circle"></div>
        <div className="container beau-cta-inner" data-reveal>
          <h2 className="beau-cta-title">Khai phóng tư duy sáng tạo cùng FPT Arena</h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.1rem', maxWidth: '680px', margin: '14px auto 36px', lineHeight: '1.7' }}>
            Nắm bắt cơ hội trở thành nhà sáng tạo nghệ thuật đa phương tiện chuyên nghiệp ngay hôm nay.
          </p>
          <a href="#dang-ky-arena-2nam" className="beau-cta-btn" style={{ background: 'linear-gradient(135deg, #ffb600 0%, #d97706 100%)', color: '#000000', fontWeight: 800 }}>
            Đăng Ký Tư Vấn & Nhận Học Bổng
            <ArrowRight size={22} strokeWidth={2.5} />
          </a>
        </div>
      </section>

      {/* Section 6: Scholarship Application Form (☀️ LIGHT THEME) */}
      <div id="dang-ky-arena-2nam">
        <ScholarshipFormSection programName="FPT Arena Multimedia 2 Năm" />
      </div>

      <Footer />
    </div>
  );
}
