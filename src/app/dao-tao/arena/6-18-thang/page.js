'use client';

import { useEffect, useState } from 'react';
import Footer from '@/components/Footer';
import ParticleCanvas from '@/components/ParticleCanvas';
import ArenaProgramSwitcher from '@/components/ArenaProgramSwitcher';
import ScholarshipFormSection from '@/components/ScholarshipFormSection';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check, Sparkles, Layers, Video, Box, Palette, Clock, Award, Briefcase } from 'lucide-react';

export default function Arena618ThangPage() {
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
      
      {/* Program Switcher Bar */}
      <ArenaProgramSwitcher activePath="/dao-tao/arena/6-18-thang" />

      {/* Section 0: Hero Section (🌙 DARK CYBER THEME) */}
      <section className="beau-hero">
        <ParticleCanvas className="beau-hero-particles" />
        <div className="beau-hero-bg-text">6–18 THÁNG</div>
        <div className="container beau-hero-inner" data-reveal>
          <span className="beau-hero-brand" style={{ backgroundColor: '#ffb600', color: '#000000', fontWeight: 800 }}>
            FPT ARENA — CHUYÊN SÂU 6–18 THÁNG
          </span>
          <h1 className="beau-hero-title">
            Thiết Kế 2D, 3D,<br />Game &amp; App Chuyên Sâu
          </h1>
          <div className="beau-hero-logo" style={{ marginTop: '16px', marginBottom: '24px', display: 'flex', alignItems: 'center' }}>
            <Image src="/logo_arena.png" alt="FPT Arena Multimedia Logo" width={200} height={56} style={{ objectFit: 'contain', objectPosition: 'left', width: 'auto', height: '52px' }} priority />
          </div>
          <p className="beau-hero-desc">
            Chương trình đào tạo linh hoạt tối ưu thời gian từ 6 đến 18 tháng. Giúp học viên tập trung đào sâu đúng chuyên môn mong muốn: Thiết kế Đồ họa 2D &amp; UI/UX, Kỹ xảo làm phim kỹ thuật số, hoặc Diễn hoạt Hoạt hình 3D &amp; Game Art.
          </p>

          <div className="beau-stats-bar">
            <div className="beau-stat-item">
              <h3 style={{ color: '#ffb600' }}>3 Lộ Trình</h3>
              <p>Lựa chọn chuyên ngành linh hoạt theo định hướng nghề nghiệp cụ thể.</p>
            </div>
            <div className="beau-stat-item">
              <h3 style={{ color: '#ffb600' }}>6–18 Tháng</h3>
              <p>Tối ưu hóa thời gian đào tạo, sớm gia nhập thị trường lao động sáng tạo.</p>
            </div>
            <div className="beau-stat-item">
              <h3 style={{ color: '#ffb600' }}>DISM / CPISM</h3>
              <p>Chứng chỉ quốc tế Aptech chuyên biệt cho từng chuyên ngành đào tạo.</p>
            </div>
          </div>

          {/* Banner Image */}
          <div className="beau-hero-banner">
            <Image
              src="/banner_arena_sub_v2.png"
              alt="Tuyển sinh Arena Chuyên sâu 6-18 tháng"
              width={1200}
              height={400}
              priority
            />
          </div>
        </div>
      </section>

      {/* Section 1: 3 Lộ Trình Chuyên Ngành (☀️ LIGHT BRIGHT THEME) */}
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
              CHƯƠNG TRÌNH ĐÀO TẠO
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, color: 'var(--secondary)', lineHeight: '1.2', marginTop: '10px', fontFamily: 'var(--font-sans)', letterSpacing: '-0.02em' }}>
              3 Chuyên ngành mũi nhọn linh hoạt
            </h2>
            <p style={{ color: '#64748b', maxWidth: '720px', margin: '14px auto 0', fontSize: '1.05rem', lineHeight: '1.7' }}>
              Tiết kiệm thời gian, tập trung 100% năng lực vào lĩnh vực đam mê với chứng chỉ quốc tế uy tín.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            {/* Track 1: 6 tháng */}
            <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '24px', padding: '40px 32px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <span style={{ background: 'rgba(255, 182, 0, 0.15)', color: '#d97706', fontWeight: 800, fontSize: '0.82rem', padding: '6px 14px', borderRadius: '20px', textTransform: 'uppercase' }}>
                  6 THÁNG
                </span>
                <Palette size={26} style={{ color: '#d97706' }} />
              </div>
              <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '14px', fontFamily: 'var(--font-sans)' }}>
                Thiết Kế Đồ Họa &amp; UI/UX
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.98rem', lineHeight: '1.7', marginBottom: '24px', flexGrow: 1 }}>
                Nắm vững nền tảng mỹ thuật thị giác, thiết kế bộ nhận diện thương hiệu, thiết kế đồ họa truyền thông và trải nghiệm người dùng Web/Mobile App (Figma).
              </p>
              <div style={{ borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '20px' }}>
                <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#d97706', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>Kỹ năng &amp; Công cụ</span>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#d97706' }} />Adobe Photoshop &amp; Illustrator</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#d97706' }} />Thiết kế giao diện Figma UI/UX</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#d97706' }} />Đồ án Nhận diện thương hiệu eProject</li>
                </ul>
              </div>
            </div>

            {/* Track 2: 12 tháng */}
            <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '24px', padding: '40px 32px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <span style={{ background: 'rgba(255, 182, 0, 0.15)', color: '#d97706', fontWeight: 800, fontSize: '0.82rem', padding: '6px 14px', borderRadius: '20px', textTransform: 'uppercase' }}>
                  12 THÁNG
                </span>
                <Video size={26} style={{ color: '#d97706' }} />
              </div>
              <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '14px', fontFamily: 'var(--font-sans)' }}>
                Làm Phim Kỹ Thuật Số &amp; VFX
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.98rem', lineHeight: '1.7', marginBottom: '24px', flexGrow: 1 }}>
                Bao gồm toàn bộ kỹ năng đồ họa 2D kết hợp chuyên sâu về quay phim, dựng phim kỹ thuật số, kỹ xảo điện ảnh CGI, âm thanh và chuyển động Motion Graphics.
              </p>
              <div style={{ borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '20px' }}>
                <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#d97706', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>Kỹ năng &amp; Công cụ</span>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#d97706' }} />Adobe Premiere Pro &amp; Audition</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#d97706' }} />Kỹ xảo After Effects &amp; Cinema 4D</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#d97706' }} />Đồ án Phim ngắn kỹ thuật số eProject</li>
                </ul>
              </div>
            </div>

            {/* Track 3: 18 tháng */}
            <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '24px', padding: '40px 32px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <span style={{ background: 'rgba(255, 182, 0, 0.15)', color: '#d97706', fontWeight: 800, fontSize: '0.82rem', padding: '6px 14px', borderRadius: '20px', textTransform: 'uppercase' }}>
                  18 THÁNG
                </span>
                <Box size={26} style={{ color: '#d97706' }} />
              </div>
              <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '14px', fontFamily: 'var(--font-sans)' }}>
                Hoạt Hình 3D &amp; Game Design
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.98rem', lineHeight: '1.7', marginBottom: '24px', flexGrow: 1 }}>
                Chuyên sâu về tạo hình nhân vật 3D, rigging khung xương, diễn hoạt animation, môi trường game 3D và dựng hoạt hình kỹ xảo chuyên nghiệp chuẩn Studio.
              </p>
              <div style={{ borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '20px' }}>
                <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#d97706', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>Kỹ năng &amp; Công cụ</span>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#d97706' }} />Autodesk Maya &amp; Blender 3D</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#d97706' }} />Unreal Engine &amp; ZBrush Modeling</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#d97706' }} />Đồ án Phim Hoạt hình 3D hoàn chỉnh</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Công Cụ Sáng Tạo (🌙 DARK TECH THEME) */}
      <section className="beau-section" style={{ padding: '100px 0 110px 0' }}>
        <div className="container" data-reveal>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="beau-section-eyebrow" style={{ color: '#ffb600' }}>STUDIO TOOLS</span>
            <h2 className="beau-section-title" style={{ marginBottom: '10px' }}>Làm chủ công cụ tiêu chuẩn ngành</h2>
          </div>

          <div className="beau-tech-grid">
            <div className="beau-tech-item"><span className="beau-tech-icon" style={{ color: '#31a8ff' }}>Ps</span><span className="beau-tech-name">Photoshop</span></div>
            <div className="beau-tech-item"><span className="beau-tech-icon" style={{ color: '#ff9a00' }}>Ai</span><span className="beau-tech-name">Illustrator</span></div>
            <div className="beau-tech-item"><span className="beau-tech-icon" style={{ color: '#a259ff' }}>Fg</span><span className="beau-tech-name">Figma</span></div>
            <div className="beau-tech-item"><span className="beau-tech-icon" style={{ color: '#ea77ff' }}>Pr</span><span className="beau-tech-name">Premiere</span></div>
            <div className="beau-tech-item"><span className="beau-tech-icon" style={{ color: '#9999ff' }}>Ae</span><span className="beau-tech-name">After Effects</span></div>
            <div className="beau-tech-item"><span className="beau-tech-icon" style={{ color: '#00d2ff' }}>My</span><span className="beau-tech-name">Maya</span></div>
            <div className="beau-tech-item"><span className="beau-tech-icon" style={{ color: '#e87d0d' }}>Bl</span><span className="beau-tech-name">Blender</span></div>
            <div className="beau-tech-item"><span className="beau-tech-icon" style={{ color: '#ffffff' }}>UE</span><span className="beau-tech-name">Unreal Engine</span></div>
          </div>
        </div>
      </section>

      {/* Section 3: TẠI SAO NÊN CHỌN FPT ARENA? (☀️ LIGHT WARM CREAM THEME) */}
      <section 
        className="beau-section"
        style={{ 
          backgroundColor: '#F8FAFC', 
          color: '#0f172a',
          padding: '100px 0 120px 0' 
        }}
      >
        <div className="container" data-reveal>
          <div style={{ textAlign: 'center', marginBottom: '54px' }}>
            <span className="beau-section-eyebrow" style={{ color: '#d97706', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em' }}>
              ĐẶC QUYỀN ĐÀO TẠO
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 2.8rem)', fontWeight: 800, color: 'var(--secondary)', lineHeight: '1.25', marginTop: '10px', fontFamily: 'var(--font-sans)', letterSpacing: '-0.02em' }}>
              Tại sao nên chọn khóa học chuyên sâu FPT Arena?
            </h2>
            <p style={{ color: '#64748b', maxWidth: '850px', margin: '16px auto 0', fontSize: '1.05rem', lineHeight: '1.75' }}>
              Rút ngắn thời gian, tập trung tối đa vào kỹ năng thực chiến và hoàn thiện Portfolio ấn tượng để đi làm ngay sau từng kỳ học.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            <div 
              style={{ 
                background: '#ffffff', 
                border: '1px solid rgba(0, 0, 0, 0.06)', 
                borderRadius: '20px', 
                padding: '36px 30px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.02)',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{ marginBottom: '18px' }}><Palette size={32} style={{ color: '#d97706' }} /></div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '12px', fontFamily: 'var(--font-sans)' }}>
                Thời gian linh hoạt, tối ưu chi phí
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', lineHeight: '1.7', margin: 0 }}>
                Lộ trình từ 6 đến 18 tháng được module hóa giúp bạn dễ dàng lựa chọn đúng chuyên ngành mục tiêu mà không mất thời gian học dàn trải.
              </p>
            </div>

            <div 
              style={{ 
                background: '#ffffff', 
                border: '1px solid rgba(0, 0, 0, 0.06)', 
                borderRadius: '20px', 
                padding: '36px 30px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.02)',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{ marginBottom: '18px' }}><Award size={32} style={{ color: '#d97706' }} /></div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '12px', fontFamily: 'var(--font-sans)' }}>
                Chứng chỉ chuyên ngành Quốc tế
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', lineHeight: '1.7', margin: 0 }}>
                Hoàn thành mỗi chuyên ngành học viên được cấp chứng chỉ quốc tế tương ứng từ tập đoàn Aptech Ấn Độ.
              </p>
            </div>

            <div 
              style={{ 
                background: '#ffffff', 
                border: '1px solid rgba(0, 0, 0, 0.06)', 
                borderRadius: '20px', 
                padding: '36px 30px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.02)',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{ marginBottom: '18px' }}><Briefcase size={32} style={{ color: '#d97706' }} /></div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '12px', fontFamily: 'var(--font-sans)' }}>
                Portfolio đồ án chuẩn Studio
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', lineHeight: '1.7', margin: 0 }}>
                Sở hữu bộ sản phẩm thiết kế 2D/3D thực tế hoàn chỉnh dưới sự hướng dẫn 1:1 của các giảng viên chuyên gia đầu ngành.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Bottom CTA Section (🌙 DARK CYBER THEME) */}
      <section className="beau-cta-section">
        <div className="beau-cta-bg-circle"></div>
        <div className="container beau-cta-inner" data-reveal>
          <h2 className="beau-cta-title">Khởi đầu đam mê sáng tạo cùng khóa học 6–18 tháng</h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.1rem', maxWidth: '680px', margin: '14px auto 36px', lineHeight: '1.7' }}>
            Nhận tư vấn lộ trình phù hợp với mục tiêu nghề nghiệp và thời gian của bạn.
          </p>
          <a href="#dang-ky-arena-6-18" className="beau-cta-btn" style={{ background: 'linear-gradient(135deg, #ffb600 0%, #d97706 100%)', color: '#000000', fontWeight: 800 }}>
            Đăng Ký Tư Vấn Ngay
            <ArrowRight size={22} strokeWidth={2.5} />
          </a>
        </div>
      </section>

      {/* Section 4: Scholarship Form (☀️ LIGHT THEME) */}
      <div id="dang-ky-arena-6-18">
        <ScholarshipFormSection programName="FPT Arena Chuyên Sâu (6-18 Tháng)" />
      </div>

      <Footer />
    </div>
  );
}
