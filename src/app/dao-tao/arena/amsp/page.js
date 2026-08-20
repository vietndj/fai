'use client';

import { useEffect, useState } from 'react';
import Footer from '@/components/Footer';
import ParticleCanvas from '@/components/ParticleCanvas';
import ArenaProgramSwitcher from '@/components/ArenaProgramSwitcher';
import ScholarshipFormSection from '@/components/ScholarshipFormSection';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check, Award, BookOpen, Clock, Trophy, Sparkles, Layers, Palette, Video, Box, Briefcase, Users } from 'lucide-react';

export default function Arena2NamPage() {
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
      title: 'Graphic Design — Thiết kế đồ hoạ',
      subtitle: '',
      desc: 'Sinh viên sẽ được học các khái niệm thiết yếu của thiết kế đồ họa, nguyên lý thị giác, luật thiết kế, chuẩn thi công – sản xuất ứng dụng',
      coreStack: [
        'Các nguyên lý trong thiết kế',
        'Nghệ thuật và sắp đặt chữ',
        'Thiết kế và minh họa kỹ thuật số',
        'Xử lý hình ảnh kỹ thuật số',
        'Nhiếp ảnh và xử lý ảnh hậu kỳ',
        'Thiết kế trong in ấn & quảng cáo',
        'Thiết kế trong truyền thông',
        'Đồ án thiết kế, xây dựng bộ nhận diện thương hiệu'
      ],
      careers: [
        'Graphic Designer',
        'Illustrator',
        'Digital Media Artist',
        'Layout Designer',
        'Visualizer',
        'Photo Editor',
        'Photographer',
        'Publication Designer'
      ]
    },
    {
      num: 'HỌC KỲ 02',
      shortTitle: 'Filmmaking & 3D Asset',
      title: 'Filmmaking & 3D Asset Design — Làm phim & thiết kế 3D Asset',
      subtitle: '',
      desc: 'Sinh viên tìm hiểu và thực hành về quy trình làm phim, biên tập âm thanh, video, nguyên lý chuyển động thị giác…',
      coreStack: [
        'Các khái niệm làm phim kỹ thuật số',
        'Kịch bản hình – Storyboarding',
        'Nhạc phim kỹ thuật số',
        'Chỉnh sửa video kỹ thuật số',
        'Tạo đồ họa chuyển động',
        'Giới thiệu về Blender',
        'Dựng hình 3D Asset',
        'Tái cấu trúc lưới Game Asset',
        'Kết cấu bề mặt của Game Asset',
        'Sắp đặt ánh sáng và kết xuất',
        'Đồ án thiết kế 3D Game Asset'
      ],
      careers: [
        'DOP (Focus Puller, Gaffer, Sound Mixer)',
        'Storyboard Artist',
        'Video Editor',
        'Sound Editor',
        '2D VFX Artist',
        'Game Designer',
        'Level Designer',
        'Concept Artist (Character / Asset / Environment)',
        'Game Illustrator (Digital Matte Painter / Splash Artist)',
        'Game Artist (Character / Asset / Environment)',
        'Texture Artist'
      ]
    },
    {
      num: 'HỌC KỲ 03',
      shortTitle: 'Advanced 3D & VFX',
      title: 'Advanced 3D Animation & Digital Compositing — Hoạt hình 3D & Kỹ xảo hình ảnh',
      subtitle: '',
      desc: 'Trang bị kiến thức và kỹ năng chuyên sâu về quy trình sản xuất 3D, từ tiền kỳ đến hậu kỳ, bao gồm mô hình hóa, tạo chất liệu, chiếu sáng, hoạt hình và dựng phim kỹ thuật số, giúp sinh viên xây dựng portfolio chuyên nghiệp và sẵn sàng làm việc trong ngành công nghiệp sáng tạo.',
      coreStack: [
        'Các khái niệm về hoạt hình 3D',
        'Làm mô hình 3D',
        'Làm vật liệu 3D',
        'Sắp đặt ánh sáng và kết xuất đồ họa',
        'Làm khung xương chuyển động',
        'Diễn hoạt chuyển động',
        'Kỹ xảo ứng dụng cho phim hoạt hình',
        'Đồ án: Làm phim hoạt hình 3D'
      ],
      careers: [
        'Compositor',
        '3D Game Artist',
        '3D Animator (Character / Creature / Gameplay)',
        '3D Modeler (Character / Asset / Environment)',
        'Texturing Artist',
        'Lighting Artist',
        'Rigging Artist',
        'Audio/Video Editor',
        'Rendering Artist'
      ]
    },
    {
      num: 'HỌC KỲ 04',
      shortTitle: 'Game Art & 3D',
      title: 'Real Time 3D & Game Art — Thiết kế Game & 3D thời gian thực',
      subtitle: '',
      desc: 'Sinh viên được học các nguyên lý, kiến thức và kỹ năng cần thiết để tạo ra môi trường cho game dưới các nền tảng hỗ trợ game phổ biến hiện nay.',
      coreStack: [
        'Thiết kế hình ảnh cho trò chơi',
        'Thiết kế giao diện người dùng (UI) cho trò chơi',
        'Quy trình sản xuất trò chơi',
        'Giới thiệu về công cụ Unity Game Engine',
        'Thiết kế cấp độ (Level Designing)',
        'Bắt đầu với Unreal Engine',
        'Làm việc với Unreal Engine',
        'Tích hợp tài nguyên & thiết kế cấp độ',
        'Hiểu về Blueprints trong Unreal Engine',
        'Chuẩn bị & xuất bản dự án Unreal'
      ],
      careers: [
        'Game Designer',
        'UI/UX Designer for Games',
        'Level Designer',
        'Unity Developer',
        'Unreal Engine Developer',
        'Asset Integration Specialist',
        'Indie Game Developer'
      ]
    }
  ];

  return (
    <div className={`beau-subpage-container theme-arena active-sec-${activeSection}`}>
      
      {/* Program Switcher Bar Ghim cố định */}
      <ArenaProgramSwitcher activePath="/dao-tao/arena/amsp" />

      {/* Section 0: Hero Section (🌙 DARK CYBER THEME) */}
      <section className="beau-hero">
        <ParticleCanvas className="beau-hero-particles" />
        <div className="beau-hero-bg-text">AMSP 2 NĂM</div>
        <div className="container beau-hero-inner" data-reveal>
          <span className="beau-hero-brand" style={{ backgroundColor: '#ffb600', color: '#000000', fontWeight: 800 }}>
            FPT ARENA MULTIMEDIA — AMSP 2 NĂM
          </span>
          <h1 className="beau-hero-title" style={{ marginTop: '16px', fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: '1.25', textWrap: 'balance', textTransform: 'uppercase' }}>
            Chương trình đào tạo<br />Chuyên gia Mỹ thuật Đa phương tiện
          </h1>
          <div className="beau-hero-logo" style={{ marginTop: '16px', marginBottom: '24px', display: 'flex', alignItems: 'center' }}>
            <Image src="/logo_arena.png" alt="FPT Arena Multimedia Logo" width={200} height={56} style={{ objectFit: 'contain', objectPosition: 'left', width: 'auto', height: '52px' }} priority />
          </div>
          <div className="beau-hero-desc">
            <p style={{ marginBottom: '16px' }}>
              FPT Arena là đơn vị đầu tiên tại Việt Nam triển khai chương trình đào tạo Chuyên gia Mỹ thuật Đa phương tiện – Arena Multimedia Specialist Program (AMSP). Được đào tạo bài bản với chứng chỉ quốc tế Advanced Diploma In Multimedia của Tập đoàn Aptech Ấn Độ, sinh viên có thể làm việc đa lĩnh vực sau khi tốt nghiệp: Thiết kế đồ hoạ, Video Editor, Thiết kế Game, Làm hoạt hình 3D,…
            </p>
            <p>
              <strong>ĐIỂM KHÁC BIỆT CỐT LÕI:</strong> Dựa trên triết lý “Làm khác để làm tốt” của Tổ Chức Giáo Dục FPT, FPT Arena xây dựng văn hóa học tập bằng việc đưa phương pháp giảng dạy Constructivism (Học thuyết Kiến Tạo Xã Hội) nhằm giúp sinh viên học tập chủ động, sáng tạo và hiệu quả.
            </p>
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
              Lộ trình đào tạo tổng quan 2 năm
            </h2>
            <p style={{ color: '#64748b', maxWidth: '720px', margin: '14px auto 0', fontSize: '1.05rem', lineHeight: '1.7' }}>
              Một hành trình toàn diện được đúc kết qua những con số biết nói
            </p>
          </div>

          {/* 4 Stats Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
            <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '20px', padding: '32px 24px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
              <BookOpen size={34} style={{ color: '#d97706', marginBottom: '14px' }} />
              <h3 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--secondary)', margin: 0, lineHeight: 1 }}>37</h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', marginTop: '10px', margin: 0, fontWeight: 600 }}>Môn học chuẩn Quốc tế</p>
            </div>
            <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '20px', padding: '32px 24px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
              <Clock size={34} style={{ color: '#d97706', marginBottom: '14px' }} />
              <h3 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--secondary)', margin: 0, lineHeight: 1 }}>04</h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', marginTop: '10px', margin: 0, fontWeight: 600 }}>Học kỳ chuyên sâu</p>
            </div>
            <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '20px', padding: '32px 24px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
              <Trophy size={34} style={{ color: '#d97706', marginBottom: '14px' }} />
              <h3 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--secondary)', margin: 0, lineHeight: 1 }}>04</h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', marginTop: '10px', margin: 0, fontWeight: 600 }}>Đồ án thực tế (eProject)</p>
            </div>
            <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '20px', padding: '32px 24px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
              <Briefcase size={34} style={{ color: '#d97706', marginBottom: '14px' }} />
              <h3 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--secondary)', margin: 0, lineHeight: 1 }}>01</h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', marginTop: '10px', margin: 0, fontWeight: 600 }}>Portfolio chuyên nghiệp</p>
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
              {semesters[activeTab].subtitle && (
                <p style={{ color: 'rgba(255, 255, 255, 0.65)', fontSize: '0.98rem', margin: '0 0 16px' }}>
                  {semesters[activeTab].subtitle}
                </p>
              )}
              <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.05rem', lineHeight: '1.7', margin: 0 }}>
                {semesters[activeTab].desc}
              </p>
            </div>

            <hr style={{ borderColor: 'rgba(255, 255, 255, 0.1)', margin: '30px 0' }} />

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px' }}>
              {/* Col 1 */}
              <div>
                <h4 style={{ color: '#ffb600', fontSize: '0.9rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '18px' }}>
                  MÔN HỌC
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
                  CƠ HỘI NGHỀ NGHIỆP
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
              <div style={{ marginBottom: '18px' }}><Users size={32} style={{ color: '#d97706' }} /></div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '12px', fontFamily: 'var(--font-sans)' }}>
                Giảng viên "Chinh chiến"
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', lineHeight: '1.7', margin: 0 }}>
                Đội ngũ giảng viên là các chuyên gia hàng đầu trong ngành trực tiếp đứng lớp
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Bottom CTA Section (🌙 DARK CYBER THEME) */}
      <section className="beau-cta-section">
        <div className="beau-cta-bg-circle"></div>
        <div className="container beau-cta-inner" data-reveal>
          <h2 className="beau-cta-title">Bắt đầu hành trình sáng tạo cùng FPT Arena Multimedia</h2>
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
        <ScholarshipFormSection 
          programName="FPT Arena Multimedia 2 Năm" 
          headerTitle="NHẬN THÔNG TIN TƯ VẤN VỀ CHƯƠNG TRÌNH HỌC & HỌC BỔNG 2026 TẠI FPT ARENA MULTIMEDIA"
          formTitle="BẠN CÓ MUỐN TRỞ THÀNH CHUYÊN GIA MULTIMEDIA?"
          formSubtitle="Đăng ký nhận tư vấn lộ trình Mỹ thuật đa phương tiện Quốc tế 2 năm"
        />
      </div>

      <Footer />
    </div>
  );
}
