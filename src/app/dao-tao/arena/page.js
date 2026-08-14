'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ParticleCanvas from '@/components/ParticleCanvas';
import ArenaProgramSwitcher from '@/components/ArenaProgramSwitcher';
import ScholarshipFormSection from '@/components/ScholarshipFormSection';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check, Award, BookOpen, Clock, Trophy, Sparkles, Layers, Palette, Video, Box, Briefcase } from 'lucide-react';

export default function ArenaSubpage() {
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
      shortTitle: 'Graphic Design',
      title: 'Graphic Design — Thiết kế đồ họa thương hiệu',
      subtitle: '(Nền tảng Mỹ thuật thị giác & Nhận diện thương hiệu)',
      desc: 'Đặt nền móng tư duy thẩm mỹ vững chắc. Học viên làm quen với nguyên lý thiết kế, Typography, màu sắc và thành thạo bộ công cụ Photoshop, Illustrator, InDesign để tạo ra ấn phẩm quảng cáo, bao bì và bộ nhận diện thương hiệu.',
      coreStack: [
        'Nguyên lý thiết kế & Bố cục thị giác',
        'Nghệ thuật chữ & Phối màu chuyên nghiệp',
        'Xử lý ảnh kỹ thuật số (Photoshop)',
        'Vẽ vector minh họa (Illustrator)',
        'Dàn trang xuất bản (InDesign)'
      ],
      aiTools: [
        'Midjourney AI Visuals',
        'Adobe Firefly Generative AI',
        'Photoshop Generative Fill',
        'Canva AI Pro',
        'Topaz Photo AI'
      ],
      careers: [
        'Graphic Designer (Chuyên viên Thiết kế đồ họa)',
        'Brand Identity Designer (Thiết kế nhận diện)',
        '2D Illustrator & Layout Artist',
        'Đồ án eProject: Bộ Nhận diện Thương hiệu'
      ]
    },
    {
      num: 'HỌC KỲ 02',
      shortTitle: 'Web & UI/UX',
      title: 'Web & UI/UX Design — Thiết kế Giao diện & Trải nghiệm số',
      subtitle: '(Thiết kế Giao diện Website, Ứng dụng di động & Trải nghiệm số)',
      desc: 'Tiến vào thế giới giao diện số tương tác. Nghiên cứu hành vi người dùng (UX), phác thảo Wireframe, xây dựng Design System và thiết kế Prototype động trên Figma, đồng thời làm chủ HTML5, CSS3, JavaScript để hiện thực hóa sản phẩm.',
      coreStack: [
        'Tư duy thiết kế trải nghiệm người dùng (UX)',
        'Thiết kế giao diện UI đa nền tảng',
        'Xây dựng Design System & Auto-Layout',
        'Lập trình Front-end với HTML5 & CSS3',
        'Thiết kế Website responsive với Bootstrap'
      ],
      aiTools: [
        'Figma AI Design Assistant',
        'Relume AI Wireframing',
        'Framer AI Generation',
        'Galileo AI Mobile UI',
        'Uizard AI Prototype'
      ],
      careers: [
        'UI/UX Designer (Thiết kế Trải nghiệm & Giao diện)',
        'Web Designer & Front-end Layout Dev',
        'Mobile App Designer (iOS / Android)',
        'Đồ án eProject: Website & App Thương mại điện tử'
      ]
    },
    {
      num: 'HỌC KỲ 03',
      shortTitle: 'Film & VFX',
      title: 'Digital Filmmaking & VFX — Làm phim kỹ thuật số & Kỹ xảo',
      subtitle: '(Quay phim, Dàn dựng hậu kỳ & Kỹ xảo điện ảnh CGI)',
      desc: 'Làm chủ chuyển động và câu chuyện hình ảnh. Quy trình biên kịch, storyboard, kỹ thuật quay góc máy, thu âm thanh, dựng phim với Premiere Pro và tạo hiệu ứng kỹ xảo CGI điện ảnh, Motion Graphics bằng After Effects.',
      coreStack: [
        'Biên kịch phân cảnh & Kỹ thuật quay phim',
        'Dàn dựng hậu kỳ với Adobe Premiere Pro',
        'Kỹ xảo hình ảnh CGI với After Effects',
        'Xử lý âm thanh kỹ thuật số với Audition',
        'Motion Graphics & Đồ họa động truyền thông'
      ],
      aiTools: [
        'Runway Gen-2 AI Video',
        'Pika Labs AI Motion',
        'ElevenLabs AI Voiceover',
        'Topaz Video AI Enhancement',
        'Sora / Luma Dream Machine'
      ],
      careers: [
        'Video Editor (Chuyên viên Dựng phim)',
        'Motion Graphic Artist (Nghệ sĩ Đồ họa động)',
        'VFX Artist (Chuyên viên Kỹ xảo hình ảnh)',
        'Đồ án eProject: Phim ngắn / TVC Quảng cáo'
      ]
    },
    {
      num: 'HỌC KỲ 04',
      shortTitle: '3D & Animation',
      title: '3D Animation & Game Art — Hoạt hình 3D & Thiết kế Game',
      subtitle: '(Tạo hình 3D, Rigging, Diễn hoạt & Môi trường Game Engine)',
      desc: 'Thổi hồn cho các mô hình số. Tạo hình nhân vật 3D (Modeling), điêu khắc chi tiết với ZBrush, dựng khung xương (Rigging), tạo chuyển động (Animation), chiếu sáng kết xuất (Rendering) với Maya và đưa vào Unreal Engine.',
      coreStack: [
        'Dựng hình mô hình 3D (3D Modeling)',
        'Điêu khắc chi tiết số với ZBrush',
        'Thiết lập khung xương chuyển động (Rigging)',
        'Diễn hoạt nhân vật hoạt hình 3D Maya',
        'Dựng bối cảnh thế giới Game với Unreal Engine'
      ],
      aiTools: [
        'Meshy AI 3D Generator',
        'Luma Genie AI 3D Mesh',
        'Krea AI Textures',
        'Cascadeur AI Physics Rigging',
        'Unreal Engine AI Metahuman'
      ],
      careers: [
        '3D Character Animator (Nghệ sĩ Diễn hoạt 3D)',
        '3D Modeler & Environment Artist',
        'Game Asset Designer (Unreal / Unity)',
        'Đồ án Tốt nghiệp: Phim Hoạt hình 3D hoàn chỉnh'
      ]
    }
  ];

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
          <div className="beau-hero-banner" style={{ marginTop: '40px' }}>
            <Image
              src="/banner_arena_sub_v2.png"
              alt="Tuyển sinh Arena Multimedia 2 năm"
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
            <span style={{ color: '#d97706', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '0.85rem' }}>
              HÀNH TRÌNH TỔNG QUAN
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, color: 'var(--secondary)', lineHeight: '1.2', marginTop: '10px', fontFamily: 'var(--font-sans)', letterSpacing: '-0.02em' }}>
              Lộ trình đào tạo chuẩn quốc tế AMSP
            </h2>
            <p style={{ color: '#64748b', maxWidth: '720px', margin: '14px auto 0', fontSize: '1.05rem', lineHeight: '1.7' }}>
              Hành trình chuyển hóa đam mê thành sự nghiệp vững chắc qua các con số thực tế
            </p>
          </div>

          {/* 4 Stats Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
            <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '20px', padding: '32px 24px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
              <BookOpen size={34} style={{ color: '#d97706', marginBottom: '14px' }} />
              <h3 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--secondary)', margin: 0, lineHeight: 1 }}>24+</h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', marginTop: '10px', margin: 0, fontWeight: 600 }}>Môn học &amp; Phần mềm chuyên sâu</p>
            </div>
            <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '20px', padding: '32px 24px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
              <Clock size={34} style={{ color: '#d97706', marginBottom: '14px' }} />
              <h3 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--secondary)', margin: 0, lineHeight: 1 }}>04</h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', marginTop: '10px', margin: 0, fontWeight: 600 }}>Học kỳ chuyên ngành</p>
            </div>
            <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '20px', padding: '32px 24px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
              <Trophy size={34} style={{ color: '#d97706', marginBottom: '14px' }} />
              <h3 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--secondary)', margin: 0, lineHeight: 1 }}>04</h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', marginTop: '10px', margin: 0, fontWeight: 600 }}>Đồ án thực tế (eProject)</p>
            </div>
            <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '20px', padding: '32px 24px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
              <Briefcase size={34} style={{ color: '#d97706', marginBottom: '14px' }} />
              <h3 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--secondary)', margin: 0, lineHeight: 1 }}>01</h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', marginTop: '10px', margin: 0, fontWeight: 600 }}>Showreel &amp; Portfolio Đỉnh cao</p>
            </div>
          </div>

          {/* Time banner */}
          <div style={{ 
            marginTop: '36px', 
            background: '#ffffff', 
            border: '1px solid rgba(255, 182, 0, 0.4)', 
            borderLeft: '6px solid #ffb600',
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
              <span style={{ fontSize: '0.82rem', color: '#d97706', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Tổng thời lượng đào tạo</span>
              <h4 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--secondary)', margin: '6px 0 0', fontFamily: 'var(--font-sans)' }}>960 Giờ học thực hành 100%</h4>
            </div>
            <div style={{ display: 'flex', gap: '36px', flexWrap: 'wrap' }}>
              <div>
                <span style={{ color: '#64748b', fontSize: '0.88rem', display: 'block', fontWeight: 600 }}>Mỹ thuật &amp; Tư duy</span>
                <strong style={{ color: 'var(--secondary)', fontSize: '1.3rem', fontWeight: 800 }}>240 giờ</strong>
              </div>
              <div style={{ borderLeft: '1px solid rgba(0,0,0,0.08)', paddingLeft: '36px' }}>
                <span style={{ color: '#64748b', fontSize: '0.88rem', display: 'block', fontWeight: 600 }}>Phần mềm &amp; Kỹ xảo</span>
                <strong style={{ color: 'var(--secondary)', fontSize: '1.3rem', fontWeight: 800 }}>480 giờ</strong>
              </div>
              <div style={{ borderLeft: '1px solid rgba(0,0,0,0.08)', paddingLeft: '36px' }}>
                <span style={{ color: '#64748b', fontSize: '0.88rem', display: 'block', fontWeight: 600 }}>Đồ án eProject</span>
                <strong style={{ color: '#d97706', fontSize: '1.3rem', fontWeight: 800 }}>240 giờ</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: CHI TIẾT CHƯƠNG TRÌNH HỌC (4 HỌC KỲ) - DẠNG TAB TƯƠNG TÁC (🌙 DARK CYBER THEME) */}
      <section className="beau-section" style={{ padding: '100px 0 110px 0' }}>
        <div className="container" data-reveal>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="beau-section-eyebrow" style={{ color: '#ffb600' }}>NỘI DUNG ĐÀO TẠO</span>
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
                      border: isActive ? '1px solid #ffb600' : '1px solid rgba(255, 255, 255, 0.12)',
                      background: isActive 
                        ? 'linear-gradient(135deg, #ffb600 0%, #d97706 100%)' 
                        : 'rgba(13, 33, 55, 0.75)',
                      color: isActive ? '#000000' : '#ffffff',
                      cursor: 'pointer',
                      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      textAlign: 'left',
                      boxShadow: isActive ? '0 10px 28px rgba(255, 182, 0, 0.45)' : '0 4px 15px rgba(0,0,0,0.2)',
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)'
                    }}
                  >
                    <span 
                      style={{ 
                        fontSize: '0.78rem', 
                        fontWeight: 900, 
                        color: isActive ? '#000000' : '#ffb600',
                        background: isActive ? 'rgba(0, 0, 0, 0.15)' : 'rgba(255, 182, 0, 0.15)',
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
                        color: isActive ? '#000000' : 'rgba(255, 255, 255, 0.85)'
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
            border: '1px solid rgba(255, 182, 0, 0.3)', 
            borderRadius: '24px', 
            padding: '44px',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            boxShadow: '0 24px 60px rgba(0, 0, 0, 0.45)',
            maxWidth: '1100px',
            margin: '0 auto'
          }}>
            <div style={{ marginBottom: '28px' }}>
              <span style={{ color: '#ffb600', fontSize: '0.88rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
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
                <h4 style={{ color: '#ffb600', fontSize: '0.9rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '18px' }}>
                  KỸ NĂNG &amp; MÔN HỌC LÕI
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {semesters[activeTab].coreStack.map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.96rem', lineHeight: '1.5' }}>
                      <Check size={18} style={{ color: '#ffb600', flexShrink: 0, marginTop: '2px' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Col 2 */}
              <div>
                <h4 style={{ color: '#ffb600', fontSize: '0.9rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '18px' }}>
                  CÔNG CỤ AI &amp; PHẦN MỀM HỖ TRỢ
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {semesters[activeTab].aiTools.map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.96rem', lineHeight: '1.5' }}>
                      <Check size={18} style={{ color: '#ffb600', flexShrink: 0, marginTop: '2px' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Col 3 */}
              <div>
                <h4 style={{ color: '#ffb600', fontSize: '0.9rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '18px' }}>
                  CƠ HỘI NGHỀ NGHIỆP &amp; ĐỒ ÁN
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {semesters[activeTab].careers.map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.96rem', lineHeight: '1.5' }}>
                      <Check size={18} style={{ color: '#ffb600', flexShrink: 0, marginTop: '2px' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
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
              Tại sao học Thiết kế Mỹ thuật nên chọn FPT Arena?
            </h2>
            <p style={{ color: '#64748b', maxWidth: '850px', margin: '16px auto 0', fontSize: '1.05rem', lineHeight: '1.75' }}>
              Tiên phong 22 năm đào tạo Mỹ thuật Đa phương tiện tại Việt Nam, FPT Arena Multimedia sở hữu chương trình AMSP chuẩn quốc tế toàn diện nhất thế giới kết hợp ứng dụng AI sáng tạo.
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
                22 năm tiên phong đào tạo Multimedia
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', lineHeight: '1.7', margin: 0 }}>
                Đơn vị đầu tiên tại Việt Nam đưa khái niệm Multimedia vào giảng dạy với mạng lưới hơn 20.000 cựu sinh viên giữ vị trí chủ chốt trong ngành sáng tạo.
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
                Bằng Quốc tế AMSP &amp; Tích hợp AI
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', lineHeight: '1.7', margin: 0 }}>
                Giáo trình cập nhật liên tục từ Aptech Ấn Độ, làm chủ trọn vẹn từ 2D Graphic, UI/UX, Kỹ xảo VFX đến 3D Animation và Game Unreal Engine.
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
                Showcase &amp; Kết nối việc làm Studio
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', lineHeight: '1.7', margin: 0 }}>
                Triển lãm đồ án định kỳ và ngày hội tuyển dụng kết nối trực tiếp với hơn 300+ Agency, Studio Game và Production House hàng đầu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Bottom CTA Section (🌙 DARK CYBER THEME) */}
      <section className="beau-cta-section">
        <div className="beau-cta-bg-circle"></div>
        <div className="container beau-cta-inner" data-reveal>
          <h2 className="beau-cta-title">Khai phóng tư duy sáng tạo cùng FPT Arena</h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.1rem', maxWidth: '680px', margin: '14px auto 36px', lineHeight: '1.7' }}>
            Nắm bắt cơ hội trở thành nhà sáng tạo nghệ thuật đa phương tiện chuyên nghiệp ngay hôm nay.
          </p>
          <a href="#dang-ky-arena-2nam" className="beau-cta-btn" style={{ background: 'linear-gradient(135deg, #ffb600 0%, #d97706 100%)', color: '#000000', fontWeight: 800 }}>
            Đăng Ký Tư Vấn &amp; Nhận Học Bổng
            <ArrowRight size={22} strokeWidth={2.5} />
          </a>
        </div>
      </section>

      {/* Section 5: Scholarship Application Form (☀️ LIGHT THEME) */}
      <div id="dang-ky-arena-2nam">
        <ScholarshipFormSection programName="FPT Arena Multimedia 2 Năm" />
      </div>

      <Footer />
    </div>
  );
}
