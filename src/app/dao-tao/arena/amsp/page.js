'use client';

import { useEffect, useState } from 'react';
import Footer from '@/components/Footer';
import ParticleCanvas from '@/components/ParticleCanvas';
import ScholarshipFormSection from '@/components/ScholarshipFormSection';
import TechCTAButton from '@/components/TechCTAButton';
import ArenaProgramSwitcher from '@/components/ArenaProgramSwitcher';
import Image from 'next/image';
import { 
  Check, 
  BookOpen, 
  Clock, 
  Trophy, 
  Briefcase, 
  ShieldCheck,
  BrainCircuit,
  Zap,
  Globe,
  Wrench,
  FolderGit2
} from 'lucide-react';

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
      fullTitle: 'Graphic Design & Digital Branding',
      subTitle: 'Nền tảng Thiết kế Đồ hoạ & Nhận diện Thương hiệu',
      desc: 'Nắm vững các khái niệm thiết yếu của thiết kế đồ họa, nguyên lý thị giác, luật bố cục, typography, nhiếp ảnh thương mại và chuẩn in ấn – sản xuất bao bì, ấn phẩm số chuyên nghiệp.',
      coreStack: [
        'Nguyên lý thị giác & Bố cục thiết kế',
        'Nghệ thuật & Sắp đặt chữ (Typography)',
        'Thiết kế minh họa Vector & Digital Painting',
        'Xử lý hình ảnh kỹ thuật số nâng cao',
        'Nhiếp ảnh thương mại & Xử lý ảnh hậu kỳ',
        'Thiết kế ấn phẩm in ấn, bao bì & quảng cáo',
        'Đồ án: Bộ nhận diện thương hiệu (Branding)'
      ],
      aiTools: [
        'Adobe Photoshop AI (Firefly)',
        'Adobe Illustrator AI Tools',
        'Midjourney & DALL-E 3',
        'Canva Magic Studio & Topaz Gigapixel'
      ],
      careers: [
        'Graphic Designer (Junior / Senior)',
        'Brand Identity Designer',
        'Digital Media Artist / Illustrator',
        'Layout & Publication Designer',
        'Commercial Photo Editor / Retoucher'
      ]
    },
    {
      num: 'HỌC KỲ 02',
      shortTitle: 'Filmmaking & 3D Asset',
      fullTitle: 'Digital Filmmaking & 3D Game Asset Design',
      subTitle: 'Làm phim Kỹ thuật số & Thiết kế 3D Game Asset',
      desc: 'Tìm hiểu và thực hành toàn diện quy trình làm phim, biên tập âm thanh - video, motion graphics và dựng hình 3D Game Asset tối ưu cho Game & Phim.',
      coreStack: [
        'Kịch bản phân cảnh (Storyboarding)',
        'Quay phim & Chỉnh sửa video kỹ thuật số',
        'Biên tập âm thanh số chuyên nghiệp',
        'Tạo đồ họa chuyển động (Motion Graphics)',
        'Dựng hình mô hình 3D Asset (Blender / Maya)',
        'Tái cấu trúc lưới & UV Mapping Game Asset',
        'Đồ án: Sản xuất Phim ngắn / 3D Game Asset'
      ],
      aiTools: [
        'Runway Gen-2 & Gen-3 Alpha',
        'Adobe Premiere Pro AI Auto-Reframe / Color',
        'After Effects AI Compositing',
        'ElevenLabs & Suno AI Audio Studio'
      ],
      careers: [
        'Video Editor / Post-Production Specialist',
        'Motion Graphic Designer',
        '3D Game Asset Modeler',
        'Storyboard & Concept Artist',
        'DOP / Camera Operator Assistant'
      ]
    },
    {
      num: 'HỌC KỲ 03',
      shortTitle: 'Advanced 3D & VFX',
      fullTitle: 'Advanced 3D Animation & Digital Compositing',
      subTitle: 'Hoạt hình 3D Chuyên sâu & Kỹ xảo Hình ảnh (VFX)',
      desc: 'Làm chủ toàn bộ quy trình sản xuất hoạt hình 3D chuẩn quốc tế từ Rigging, Animation, Dynamic VFX, ánh sáng Render photorealistic cho đến kỹ xảo Compositing hoàn thiện thước phim.',
      coreStack: [
        'Mô hình hóa nhân vật 3D nâng cao',
        'Chất liệu & Sắp đặt ánh sáng Render Cinema',
        'Thiết lập hệ thống xương (Character Rigging)',
        'Diễn hoạt chuyển động 3D (3D Animation)',
        'Hiệu ứng hạt Dynamic (Khói, Lửa, Nước, Nổ)',
        'Kỹ xảo hình ảnh & Tách phông (Compositing)',
        'Đồ án: Làm phim Hoạt hình 3D ngắn'
      ],
      aiTools: [
        'DeepMotion AI MoCap (Motion Capture)',
        'Wonder Dynamics AI VFX Integration',
        'Kaedim 3D AI Generator',
        'Topaz Video AI Upscaling'
      ],
      careers: [
        '3D Animator (Character / Creature / Gameplay)',
        'VFX Artist / Compositor',
        '3D Character Modeler',
        'Rigging & Lighting Artist',
        '3D Generalist for Studio'
      ]
    },
    {
      num: 'HỌC KỲ 04',
      shortTitle: 'Game Art & 3D',
      fullTitle: 'Real-Time 3D & Game Art',
      subTitle: 'Thiết kế Game 3D Thời gian thực & Meta Engine',
      desc: 'Học nguyên lý thiết kế môi trường và đồ họa game thế hệ mới trên Unity & Unreal Engine, sẵn sàng gia nhập các Studio Game AAA và Virtual Production toàn cầu.',
      coreStack: [
        'Thiết kế giao diện UI/UX cho Game',
        'Quy trình sản xuất & Concept Game Design',
        'Thiết kế màn chơi (Level Design)',
        'Unreal Engine 5: Blueprints & Nanite/Lumen',
        'Unity Game Engine Development',
        'Tích hợp ánh sáng & âm thanh Real-time',
        'Đồ án Tốt nghiệp: Game 3D Thực chiến'
      ],
      aiTools: [
        'Unreal Engine AI Assistants & Metahuman',
        'Luma AI & Gaussian Splatting',
        'Krea AI & Blockade Labs Skybox',
        'Meshy AI 3D Mesh Generator'
      ],
      careers: [
        'Game UI/UX Designer',
        'Unreal Engine Game Artist / Developer',
        'Level / Environment Artist',
        'Unity 3D Game Artist',
        '3D Real-time Technical Artist'
      ]
    }
  ];

  const whyChooseUs = [
    {
      icon: <ShieldCheck size={28} style={{ color: '#ffb600' }} />,
      title: '22 năm tiên phong đào tạo Multimedia',
      desc: 'Đơn vị đầu tiên tại Việt Nam đào tạo Mỹ thuật Đa phương tiện chuẩn Quốc tế với mạng lưới hơn 20.000 cựu sinh viên giữ vị trí chủ chốt trong ngành sáng tạo.'
    },
    {
      icon: <BrainCircuit size={28} style={{ color: '#ffb600' }} />,
      title: 'Giáo trình AMSP 2026 tích hợp AI',
      desc: 'Bản quyền từ Tập đoàn Aptech Ấn Độ, tích hợp toàn diện các công nghệ AI tạo sinh (GenAI) vào thiết kế 2D, làm phim, 3D và Game Art.'
    },
    {
      icon: <Zap size={28} style={{ color: '#ffb600' }} />,
      title: 'Học thuyết Kiến Tạo (Constructivism)',
      desc: 'Triết lý "Làm khác để làm tốt", sinh viên học tập chủ động qua đồ án thực tế, kích thích tối đa tư duy sáng tạo độc bản và giải quyết vấn đề.'
    },
    {
      icon: <Globe size={28} style={{ color: '#ffb600' }} />,
      title: 'Bằng Quốc tế Advanced Diploma',
      desc: 'Được công nhận toàn cầu, mở rộng cơ hội làm việc tại nước ngoài hoặc liên thông lên các trường đại học quốc tế danh tiếng như Middlesex, BHMS.'
    },
    {
      icon: <Wrench size={28} style={{ color: '#ffb600' }} />,
      title: 'Giảng viên chuyên gia chinh chiến',
      desc: '100% giảng viên là Creative Director, Art Director, Lead 3D/VFX Artist trực tiếp hướng dẫn và truyền đạt kinh nghiệm dự án thực tế.'
    },
    {
      icon: <FolderGit2 size={28} style={{ color: '#ffb600' }} />,
      title: 'Showcase đồ án & 300+ đối tác Studio',
      desc: 'Triển lãm đồ án định kỳ và kết nối tuyển dụng trực tiếp vào mạng lưới hơn 300+ Agency, Studio Game và Production House hàng đầu.'
    }
  ];

  return (
    <div className={`beau-subpage-container theme-arena active-sec-${activeSection}`}>
      
      {/* Sticky Program Switcher Bar */}
      <ArenaProgramSwitcher activePath="/dao-tao/arena/amsp" />

      {/* Section 0: Hero Section (🌙 DARK CYBER THEME) */}
      <section className="beau-hero">
        <ParticleCanvas className="beau-hero-particles" />
        <div className="beau-hero-bg-text">FPT ARENA</div>
        <div className="container beau-hero-inner" data-reveal>
          <span className="beau-hero-brand" style={{ backgroundColor: '#ffb600', color: '#000000', letterSpacing: '0.08em', padding: '8px 20px', borderRadius: '30px', fontWeight: 800 }}>
            FPT ARENA MULTIMEDIA — AMSP 2 NĂM
          </span>
          <h1 className="beau-hero-title" style={{ marginTop: '16px', fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: '1.25', textWrap: 'balance', textTransform: 'uppercase' }}>
            Chương trình đào tạo<br />Chuyên gia Mỹ thuật Đa phương tiện
          </h1>
          <div style={{ color: '#ffb600', fontSize: '1.25rem', fontWeight: 800, marginTop: '8px', letterSpacing: '0.04em' }}>
            Đón đầu xu hướng sáng tạo – Làm chủ công nghệ tương lai
          </div>

          <div style={{ maxWidth: '900px', marginTop: '24px', color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.05rem', lineHeight: '1.75' }}>
            <p style={{ marginBottom: '16px' }}>
              FPT Arena là đơn vị đầu tiên tại Việt Nam triển khai chương trình đào tạo Chuyên gia Mỹ thuật Đa phương tiện – Arena Multimedia Specialist Program (AMSP). Được đào tạo bài bản với chứng chỉ quốc tế Advanced Diploma In Multimedia của Tập đoàn Aptech Ấn Độ, sinh viên có thể làm việc đa lĩnh vực sau khi tốt nghiệp: Thiết kế đồ hoạ, Video Editor, Thiết kế Game, Làm hoạt hình 3D,…
            </p>
            <p>
              Chương trình AMSP tại FPT Arena được thiết kế theo chuẩn toàn cầu, cập nhật liên tục các công nghệ mới nhất cùng tư duy ứng dụng AI vào quy trình sáng tạo, giúp học viên rút ngắn thời gian và sẵn sàng gia nhập ngành công nghiệp sáng tạo quốc tế.
            </p>
          </div>

          {/* Core highlights Card */}
          <div style={{ 
            marginTop: '48px', 
            marginBottom: '48px',
            padding: '36px 44px', 
            background: 'linear-gradient(135deg, rgba(255, 182, 0, 0.16) 0%, rgba(13, 33, 55, 0.85) 40%, rgba(22, 43, 74, 0.92) 100%)', 
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 182, 0, 0.35)', 
            borderLeft: '6px solid #ffb600', 
            borderRadius: '24px',
            maxWidth: '1050px',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.2), 0 0 32px rgba(255, 182, 0, 0.12)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              display: 'inline-block',
              padding: '6px 16px',
              borderRadius: '20px',
              background: 'rgba(255, 182, 0, 0.2)',
              border: '1px solid rgba(255, 182, 0, 0.4)',
              color: '#ffb600', 
              fontWeight: 800, 
              fontSize: '0.95rem', 
              letterSpacing: '0.08em',
              marginBottom: '14px',
              textTransform: 'uppercase'
            }}>
              ĐIỂM KHÁC BIỆT CỐT LÕI
            </div>
            <p style={{ margin: 0, color: 'rgba(255, 255, 255, 0.95)', fontSize: '1.15rem', lineHeight: '1.8', fontWeight: 400 }}>
              Dựa trên triết lý “Làm khác để làm tốt” của Tổ Chức Giáo Dục FPT, FPT Arena xây dựng văn hóa học tập bằng việc đưa phương pháp giảng dạy Constructivism (Học thuyết Kiến Tạo Xã Hội) nhằm giúp sinh viên học tập chủ động, sáng tạo và hoàn thiện Portfolio nghệ thuật thực chiến ngay trong từng kỳ học.
            </p>
          </div>

          {/* Banner Image */}
          <div className="beau-hero-banner" style={{ marginTop: '40px' }}>
            <Image
              src="/banner_arena_sub_v2.png"
              alt="Tuyển sinh Arena Multimedia 2 năm"
              width={1200}
              height={420}
              priority
              style={{ borderRadius: '16px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* Section 1: HÀNH TRÌNH TỔNG QUAN (☀️ LIGHT WARM CREAM THEME) */}
      <section 
        className="beau-section"
        style={{ 
          backgroundColor: '#F8FAFC', 
          color: '#0f172a',
          padding: '100px 0 110px 0'
        }}
      >
        <div className="container" data-reveal>
          <div style={{ textAlign: 'center', marginBottom: '54px' }}>
            <span className="beau-section-eyebrow" style={{ color: '#d97706', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em' }}>
              HÀNH TRÌNH TỔNG QUAN
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 2.8rem)', fontWeight: 800, color: 'var(--secondary)', lineHeight: '1.25', marginTop: '10px', fontFamily: 'var(--font-sans)', letterSpacing: '-0.02em' }}>
              Lộ trình đào tạo tổng quan 2 năm
            </h2>
            <p style={{ color: '#64748b', maxWidth: '650px', margin: '14px auto 0', fontSize: '1.05rem', lineHeight: '1.7' }}>
              Một hành trình toàn diện được đúc kết qua những con số biết nói
            </p>
          </div>

          {/* 4 Stats Cards (Light White Cards) */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
            gap: '24px' 
          }}>
            <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '20px', padding: '32px 24px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', transition: 'all 0.3s ease' }}>
              <BookOpen size={34} style={{ color: '#d97706', marginBottom: '14px' }} />
              <h3 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--secondary)', margin: 0, lineHeight: 1 }}>37</h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', marginTop: '10px', margin: 0, fontWeight: 600 }}>Môn học chuẩn quốc tế</p>
            </div>

            <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '20px', padding: '32px 24px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', transition: 'all 0.3s ease' }}>
              <Clock size={34} style={{ color: '#d97706', marginBottom: '14px' }} />
              <h3 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--secondary)', margin: 0, lineHeight: 1 }}>04</h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', marginTop: '10px', margin: 0, fontWeight: 600 }}>Học kỳ chuyên sâu</p>
            </div>

            <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '20px', padding: '32px 24px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', transition: 'all 0.3s ease' }}>
              <Trophy size={34} style={{ color: '#d97706', marginBottom: '14px' }} />
              <h3 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--secondary)', margin: 0, lineHeight: 1 }}>04</h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', marginTop: '10px', margin: 0, fontWeight: 600 }}>Đồ án thực tế (eProject)</p>
            </div>

            <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '20px', padding: '32px 24px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', transition: 'all 0.3s ease' }}>
              <Briefcase size={34} style={{ color: '#d97706', marginBottom: '14px' }} />
              <h3 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--secondary)', margin: 0, lineHeight: 1 }}>01</h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', marginTop: '10px', margin: 0, fontWeight: 600 }}>Portfolio chuyên nghiệp</p>
            </div>
          </div>

          {/* Training Duration Banner */}
          <div style={{ 
            marginTop: '36px', 
            background: '#ffffff', 
            border: '1px solid rgba(217, 119, 6, 0.25)', 
            borderLeft: '6px solid #d97706',
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
              <h4 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--secondary)', margin: '6px 0 0', fontFamily: 'var(--font-sans)' }}>900+ Giờ học chuẩn quốc tế</h4>
            </div>
            <div style={{ display: 'flex', gap: '36px', flexWrap: 'wrap' }}>
              <div>
                <span style={{ color: '#64748b', fontSize: '0.88rem', display: 'block', fontWeight: 600 }}>Lý thuyết nền tảng</span>
                <strong style={{ color: 'var(--secondary)', fontSize: '1.3rem', fontWeight: 800 }}>280 giờ</strong>
              </div>
              <div style={{ borderLeft: '1px solid rgba(0,0,0,0.08)', paddingLeft: '36px' }}>
                <span style={{ color: '#64748b', fontSize: '0.88rem', display: 'block', fontWeight: 600 }}>Thực hành Studio</span>
                <strong style={{ color: 'var(--secondary)', fontSize: '1.3rem', fontWeight: 800 }}>460 giờ</strong>
              </div>
              <div style={{ borderLeft: '1px solid rgba(0,0,0,0.08)', paddingLeft: '36px' }}>
                <span style={{ color: '#64748b', fontSize: '0.88rem', display: 'block', fontWeight: 600 }}>Đồ án thực tế</span>
                <strong style={{ color: '#d97706', fontSize: '1.3rem', fontWeight: 800 }}>160 giờ</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: CHI TIẾT CHƯƠNG TRÌNH HỌC (🌙 DARK CYBER THEME) */}
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
                        background: isActive ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 182, 0, 0.15)',
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
                        color: isActive ? '#000000' : 'rgba(255, 255, 255, 0.85)',
                        whiteSpace: 'nowrap'
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
            padding: '40px 44px',
            boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)'
          }}>
            <div style={{ marginBottom: '24px' }}>
              <span style={{ fontSize: '0.85rem', color: '#ffb600', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                {semesters[activeTab].num}
              </span>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff', margin: '6px 0 4px' }}>
                {semesters[activeTab].fullTitle}
              </h3>
              <h4 style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.7)', fontWeight: 500, margin: 0 }}>
                ({semesters[activeTab].subTitle})
              </h4>
            </div>

            <p style={{ color: 'rgba(255,255,255,0.88)', fontSize: '1.05rem', lineHeight: '1.75', marginBottom: '36px', paddingBottom: '24px', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
              {semesters[activeTab].desc}
            </p>

            {/* Flat 3-Column Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '36px' }}>
              {/* Kiến thức & Môn học lõi */}
              <div>
                <h4 style={{ fontSize: '0.95rem', color: '#ffb600', fontWeight: 800, margin: '0 0 16px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  Kiến thức &amp; Môn học lõi
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {semesters[activeTab].coreStack.map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'rgba(255,255,255,0.95)', fontSize: '0.98rem', marginBottom: '12px', lineHeight: '1.5' }}>
                      <Check size={16} style={{ color: '#ffb600', flexShrink: 0, marginTop: '3px' }} /> <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Công cụ AI & Phần mềm */}
              <div>
                <h4 style={{ fontSize: '0.95rem', color: '#ffb600', fontWeight: 800, margin: '0 0 16px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  Công cụ AI &amp; Phần mềm
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {semesters[activeTab].aiTools.map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'rgba(255,255,255,0.95)', fontSize: '0.98rem', marginBottom: '12px', lineHeight: '1.5' }}>
                      <Check size={16} style={{ color: '#ffb600', flexShrink: 0, marginTop: '3px' }} /> <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cơ hội nghề nghiệp */}
              <div>
                <h4 style={{ fontSize: '0.95rem', color: '#ffb600', fontWeight: 800, margin: '0 0 16px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  Cơ hội nghề nghiệp
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {semesters[activeTab].careers.map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'rgba(255,255,255,0.95)', fontSize: '0.98rem', marginBottom: '12px', lineHeight: '1.5' }}>
                      <Check size={16} style={{ color: '#ffb600', flexShrink: 0, marginTop: '3px' }} /> <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: TẠI SAO NÊN CHỌN FPT ARENA MULTIMEDIA? (☀️ LIGHT WARM CREAM THEME) */}
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
              FPT Arena mang đến môi trường sáng tạo chuẩn Quốc Tế với chương trình AMSP cập nhật công nghệ mới nhất. Chúng tôi cam kết tạo bệ phóng vững chắc và kết nối trực tiếp sinh viên với mạng lưới hơn 300+ đối tác doanh nghiệp hàng đầu trong ngành công nghiệp sáng tạo.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            {whyChooseUs.map((item, idx) => (
              <div 
                key={idx} 
                style={{ 
                  background: '#ffffff', 
                  border: '1px solid rgba(0, 0, 0, 0.06)', 
                  borderRadius: '20px', 
                  padding: '36px 30px',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.02)',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ marginBottom: '18px' }}>{item.icon}</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '12px', fontFamily: 'var(--font-sans)' }}>
                  {item.title}
                </h3>
                <p style={{ color: '#64748b', fontSize: '0.96rem', lineHeight: '1.7', margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Bottom CTA Section (🌙 DARK CYBER THEME) */}
      <section className="beau-cta-section">
        <div className="beau-cta-bg-circle"></div>
        <div className="container beau-cta-inner" data-reveal>
          <h2 className="beau-cta-title">Sẵn sàng trở thành Chuyên gia Mỹ thuật Đa phương tiện?</h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.1rem', marginBottom: '30px' }}>
            Đăng ký nhận tư vấn lộ trình học cá nhân hóa và thông tin học bổng mới nhất từ FPT Arena Multimedia
          </p>
          <TechCTAButton 
            text="Tư vấn ngay" 
            href="https://zalo.me/fptarena" 
            style={{ 
              background: 'linear-gradient(135deg, #ffb600 0%, #d97706 100%)', 
              color: '#000000',
              fontWeight: 800,
              boxShadow: '0 10px 30px rgba(255, 182, 0, 0.4)'
            }} 
          />
        </div>
      </section>

      {/* Section 5: Scholarship Application Form (☀️ LIGHT THEME) */}
      <ScholarshipFormSection 
        programName="FPT Arena Multimedia - AMSP 2 Năm" 
        googleSheetScriptUrl="https://script.google.com/macros/s/AKfycbwfPoh5H-YB8CcPWw9GijIv44YjXtHbrwdLX7XCMWnhTmg5ocW-aGt3PnCIMiC_pvSKrw/exec"
      />

      <Footer />
    </div>
  );
}
