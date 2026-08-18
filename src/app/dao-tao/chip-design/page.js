'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ParticleCanvas from '@/components/ParticleCanvas';
import JetkingProgramSwitcher from '@/components/JetkingProgramSwitcher';
import ScholarshipFormSection from '@/components/ScholarshipFormSection';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check, Award, BookOpen, Clock, Trophy, Sparkles, Cpu, Layers, ShieldCheck, Zap, Briefcase } from 'lucide-react';

export default function ChipDesignSubpage() {
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
      shortTitle: 'Programming & Electronic Circuits',
      title: 'Programming Elements and Electronic Circuits',
      subtitle: '(Mạch điện tử và lập trình vi điều khiển)',
      desc: 'Sinh viên sẽ làm quen với lập trình C/C++, kiến thức điện tử cơ bản và thiết kế vi mạch. Các môn học sẽ xây dựng cho sinh viên nền tảng kiến thức cơ bản về ngôn ngữ được sử dụng cũng như cách ghép nối, tạo cấu trúc liên kết cho các linh kiện trong bảng vi mạch hoàn chỉnh. Đây là bước đệm quan trọng dành cho những khóa học chuyên sâu hơn ở các học kỳ sau.\n\nTích hợp AI Driven Design trong module 4 "Digital logic" với mục tiêu: Giới thiệu và giúp sinh viên làm quen với việc áp dụng AI trong thiết kế vi mạch, hiểu được vai trò của AI trong ngành.',
      coreStack: [
        'C/C++ Programming Fundamentals',
        'Electronics Fundamentals and Circuit Analysis',
        'Semiconductor Physics and Digital Logic',
        'Microcontroller Programming',
        'Projects'
      ],
      aiTools: [
        'Hiểu cấu trúc và phương pháp lập trình C/C++',
        'Lập trình vi điều khiển trong hệ thống nhúng và phát triển dự án tự động hóa',
        'Hiểu mạch điện và các đại lượng điện đặc trưng, nguyên lý hoạt động mạch điện',
        'Hiểu đặc tính và vật liệu tạo chất bán dẫn, cấu tạo các linh kiện',
        'Hiểu cấu trúc và hoạt động IC, Chip, nguyên lý mạch Digital và Analog',
        'Phân tích được các thành phần vi xử lý và vi điều khiển'
      ],
      careers: [
        'Chuyên viên lập trình điều khiển tự động hóa',
        'Chuyên viên lập trình nhúng'
      ]
    },
    {
      num: 'HỌC KỲ 02',
      shortTitle: 'Chip Architecture Framework',
      title: 'Chip Architecture Framework',
      subtitle: '(Kiến trúc và qui trình thiết kế vi mạch)',
      desc: 'Sinh viên sẽ được trau dồi một loạt kỹ năng chuyên môn, từ hiểu biết cơ bản về hệ thống truyền thông trong mạch điện đến những hiểu biết sâu sắc về kiến trúc vi xử lý và hệ thống bộ nhớ. Quan trọng nhất, sinh viên sẽ hiểu rõ tất cả quy trình từ thiết kế vi mạch (xây dựng nội dung SPEC) từ khâu chuyển đổi ý tưởng sang thông số kỹ thuật cụ thể, lập kế hoạch phát triển thông số vi mạch hoàn thiện và xác thực tính khả thi.\n\nApply AI in Chip Design với 30 giờ, được tích hợp vào trong module 4 "Steps to Chip Design" với mục tiêu rèn luyện các kỹ năng thiết kế vi mạch với sự hỗ trợ của AI, giúp sinh viên thành thạo công cụ và phương pháp AI đảm bảo hoàn thiện kỹ năng áp dụng AI vào thiết kế vi mạch thực tế, bao gồm việc tối ưu hóa quy trình thiết kế.',
      coreStack: [
        'Communication Systems and Linear Circuits',
        'Analog, Digital Design and Computer Architecture',
        'Familiarizing with chip industry, IC design & Applications',
        'Digital Circuit Design and FPGA Implementation',
        'Projects'
      ],
      aiTools: [
        'Hiểu truyền thông trong mạch điện, phân biệt tín hiệu Analog và Digital',
        'Hiểu mạch tuyến tính, bộ lọc, mạch khuếch đại tín hiệu',
        'Hiểu kiến trúc vi xử lý và hệ thống bộ nhớ, thiết kế mạch kết hợp',
        'Hiểu cấu trúc Chip bao gồm chức năng khối và module, quy trình sản xuất',
        'Xác định nhiệm vụ nhà thiết kế chip, phân biệt thiết kế vi mạch kỹ thuật số, tương tự & VLSI'
      ],
      careers: [
        'Chuyên viên phân tích và lập thiết kế vi mạch',
        'Chuyên viên mô tả SPEC',
        'Chuyên viên phân tích thiết kế'
      ]
    },
    {
      num: 'HỌC KỲ 03',
      shortTitle: 'HDL and EDA Tools',
      title: 'HDL and EDA Tools',
      subtitle: '(Mô tả phần cứng HDL và công cụ thiết kế vi mạch EDA)',
      desc: 'Sinh viên vào sâu hơn trong việc thiết kế và mô phỏng hành vi chip, với trọng tâm vào cấu trúc dữ liệu hiện đại và quản lý thời gian trong chip. Sinh viên sẽ học cách vận dụng các công cụ CAD tiên tiến cho thiết kế mạch và PCB. Kỹ năng lập trình mạch với Verilog và VHDL sẽ được cải thiện, cho phép sinh viên không chỉ thiết kế mã RTL mà còn thực hiện việc kiểm thử logic qua Testbench. Cuối cùng, quá trình chuyển đổi từ mã RTL sang cổng logic là bước quan trọng để hiện thực hóa thiết kế chip trong thực tế.\n\nAdvanced AI in Chip Design với 30 giờ được tích hợp trong module 3 "Create the design and manufacturing of ICs" với mục tiêu: Tích hợp và ứng dụng các giải pháp AI trong Electronic Design Automation (EDA), nâng cao khả năng xử lý và tối ưu hóa thiết kế vi mạch, đảm bảo nâng cao kỹ năng tối ưu hóa và tự động hóa thiết kế vi mạch bằng các giải pháp AI tiên tiến.',
      coreStack: [
        'Data Structure',
        'CAD Tools',
        'VLSI - Physical Design',
        'Chip design Verification and Emulator',
        'Projects'
      ],
      aiTools: [
        'Hiểu về cấu trúc dữ liệu phân cấp, các kết nối, nguyên tắc thiết kế',
        'Sử dụng công cụ phần mềm hổ trợ thiết kế Chip, hệ thống, 3D và PCB',
        'Thiết kế mã RTL và Testbench (TB) sử dụng Verilog và VHDL',
        'Dịch mã RTL sang cổng luận lý, thiết kế vật lý (Design Compiler, Calibre, NanoRoute)',
        'Thiết kế kiểm thử DFT sử dụng EDA, dữ liệu mặt nạ và đóng gói'
      ],
      careers: [
        'Chuyên viên thiết kế RTL (RTL Designer)',
        'Chuyên viên thiết kế kiểm tra và sửa lỗi (Verifier Designer)',
        'Chuyên viên thiết kế vật lý (Physical Designer)'
      ]
    },
    {
      num: 'HỌC KỲ 04',
      shortTitle: 'Chip Design',
      title: 'Chip Design',
      subtitle: '(Thiết kế vi mạch – SoC/ASIC/ FPGA)',
      desc: 'Sinh viên có kiến thức chuyên sâu về công nghệ VLSI, từ kiểm tra đến sản xuất chip. Các khóa học tập trung vào kỹ thuật thiết kế chip nâng cao, phát triển các loại vi mạch như ASIC và FPGA, áp dụng công nghệ mới như AI và IoT. Sinh viên sẽ học cách tiết kiệm năng lượng và quản lý nguồn trong thiết kế chip, cùng với việc thực hiện dự án để củng cố kỹ năng thực tế.\n\nAI/ML Engine in Chip tích hợp trong module 2 "Advanced chip design techniques" với mục tiêu: Khám phá cách thiết kế và tích hợp các ứng dụng AI/ML trực tiếp vào vi mạch, chuẩn bị cho việc phát triển các hệ thống AI mạnh mẽ, đảm bảo phát triển và tích hợp các mô hình AI/ML vào vi mạch, từ việc thiết kế đến triển khai trên phần cứng.',
      coreStack: [
        'Advanced Digital Design and FPGA based Design',
        'AI-Accelerated Systems on SoC FPGA',
        'Optimizing signal processing on FPGA',
        'Emerging Tech, Power Management & Automation',
        'Projects'
      ],
      aiTools: [
        'Hiểu quá trình chế tạo Chip và công nghệ VLSI',
        'Hiểu yếu tố thiết kế Chip tối ưu: kiến trúc Chip, phân chia Clock, tăng thông lượng',
        'Hiểu và thiết kế chip ASIC với SoC, thiết kế Chip FPGA với SystemVerilog, UVM',
        'Hiểu và tích hợp công nghệ mới: AI, ML, Wireless, IoT...',
        'Sử dụng công cụ EDA hỗ trợ Cloud và AI, phương pháp quản lý nguồn'
      ],
      careers: [
        'Chuyên viên thiết kế Chip ASIC',
        'Chuyên viên thiết kế Chip FPGA'
      ]
    }
  ];

  return (
    <div className={`beau-subpage-container theme-chip-design active-sec-${activeSection}`}>
      <Header />

      {/* Sticky Program Switcher Bar */}
      <JetkingProgramSwitcher activePath="/dao-tao/chip-design" />

      {/* Section 0: Hero Section (🌙 DARK CYBER THEME) */}
      <section className="beau-hero">
        <ParticleCanvas className="beau-hero-particles" />
        <div className="beau-hero-bg-text">SEMICONDUCTOR</div>
        <div className="container beau-hero-inner" data-reveal>
          <span className="beau-hero-brand" style={{ backgroundColor: '#dc2626', color: '#ffffff', fontWeight: 800 }}>
            FPT JETKING — THIẾT KẾ VI MẠCH BÁN DẪN (2 NĂM)
          </span>
          <h1 className="beau-hero-title" style={{ marginTop: '16px', fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: '1.25', textWrap: 'balance', textTransform: 'uppercase' }}>
            Chương trình thiết kế vi mạch bán dẫn quốc tế tích hợp AI
          </h1>
          <div className="beau-hero-logo" style={{ marginTop: '16px', marginBottom: '24px', display: 'flex', alignItems: 'center' }}>
            <Image src="/logo_jetking.png" alt="FPT Jetking Logo" width={200} height={56} style={{ objectFit: 'contain', objectPosition: 'left', width: 'auto', height: '52px' }} priority />
          </div>
          <p className="beau-hero-desc">
            Ngành vi mạch bán dẫn (Semiconductor) đang là nền tảng cốt lõi của các công nghệ hiện đại như AI, IoT và 5G, với giá trị thị trường toàn cầu dự báo sẽ đạt hàng nghìn tỷ USD trong thập kỷ tới. Tuy nhiên, tình trạng thiếu hụt nhân lực chất lượng cao đang trở thành rào cản lớn. Nhận thấy nhu cầu cấp thiết này, FPT Jetking đã phát triển chương trình đào tạo Thiết kế vi mạch bán dẫn quốc tế tích hợp AI, cung cấp lộ trình học tập chuyên sâu, bám sát thực tiễn và kết nối trực tiếp với doanh nghiệp. Chương trình hướng đến việc đào tạo thế hệ kỹ sư vi mạch có chuyên môn vững vàng, sẵn sàng gia nhập thị trường toàn cầu trong bối cảnh AI ngày càng phát triển mạnh mẽ.
          </p>
          
          <p style={{ color: '#ffffff', fontWeight: 800, fontSize: '1.1rem', marginTop: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Lộ trình đào tạo Thiết kế vi mạch bán dẫn<br />Đón đầu xu hướng gia nhập ngành công nghệ tỷ đô
          </p>

          <div className="beau-stats-bar">
            <div className="beau-stat-item">
              <h3 style={{ color: '#dc2626' }}>20 Môn học</h3>
              <p>Hệ thống kiến thức chuẩn quốc tế.</p>
            </div>
            <div className="beau-stat-item">
              <h3 style={{ color: '#dc2626' }}>04 Học kỳ</h3>
              <p>Đào tạo Thiết kế vi mạch bán dẫn chuyên sâu.</p>
            </div>
            <div className="beau-stat-item">
              <h3 style={{ color: '#dc2626' }}>04 Project</h3>
              <p>Thực hành liên tục với 1 Portfolio chuyên nghiệp.</p>
            </div>
          </div>

          {/* Banner Image */}
          <div className="beau-hero-banner" style={{ marginTop: '40px' }}>
            <Image
              src="/banner_chip_design_sub_v2.png"
              alt="Tuyển sinh Thiết kế vi mạch bán dẫn"
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
            <span style={{ color: '#dc2626', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '0.85rem' }}>
              HÀNH TRÌNH TỔNG QUAN
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, color: 'var(--secondary)', lineHeight: '1.2', marginTop: '10px', fontFamily: 'var(--font-sans)', letterSpacing: '-0.02em' }}>
              Lộ trình đào tạo Kỹ sư Vi mạch 2 năm
            </h2>
            <p style={{ color: '#64748b', maxWidth: '720px', margin: '14px auto 0', fontSize: '1.05rem', lineHeight: '1.7' }}>
              Đào tạo đón đầu chiến lược quốc gia đưa Việt Nam thành trung tâm Bán dẫn toàn cầu
            </p>
          </div>

          {/* 4 Stats Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
            <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '20px', padding: '32px 24px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
              <BookOpen size={34} style={{ color: '#dc2626', marginBottom: '14px' }} />
              <h3 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--secondary)', margin: 0, lineHeight: 1 }}>22+</h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', marginTop: '10px', margin: 0, fontWeight: 600 }}>Môn học &amp; Công nghệ EDA</p>
            </div>
            <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '20px', padding: '32px 24px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
              <Clock size={34} style={{ color: '#dc2626', marginBottom: '14px' }} />
              <h3 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--secondary)', margin: 0, lineHeight: 1 }}>04</h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', marginTop: '10px', margin: 0, fontWeight: 600 }}>Học kỳ chuyên sâu</p>
            </div>
            <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '20px', padding: '32px 24px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
              <Trophy size={34} style={{ color: '#dc2626', marginBottom: '14px' }} />
              <h3 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--secondary)', margin: 0, lineHeight: 1 }}>04</h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', marginTop: '10px', margin: 0, fontWeight: 600 }}>Đồ án Thiết kế Chip eProject</p>
            </div>
            <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '20px', padding: '32px 24px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
              <Briefcase size={34} style={{ color: '#dc2626', marginBottom: '14px' }} />
              <h3 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--secondary)', margin: 0, lineHeight: 1 }}>01</h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', marginTop: '10px', margin: 0, fontWeight: 600 }}>Hồ sơ Layout GDSII Doanh nghiệp</p>
            </div>
          </div>

          {/* Time banner */}
          <div style={{ 
            marginTop: '36px', 
            background: '#ffffff', 
            border: '1px solid rgba(243, 112, 33, 0.3)', 
            borderLeft: '6px solid #dc2626',
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
              <span style={{ fontSize: '0.82rem', color: '#dc2626', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Tổng thời lượng đào tạo</span>
              <h4 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--secondary)', margin: '6px 0 0', fontFamily: 'var(--font-sans)' }}>900 Giờ học thực hành Lab</h4>
            </div>
            <div style={{ display: 'flex', gap: '36px', flexWrap: 'wrap' }}>
              <div>
                <span style={{ color: '#64748b', fontSize: '0.88rem', display: 'block', fontWeight: 600 }}>Kiến thức Mạch &amp; RTL</span>
                <strong style={{ color: 'var(--secondary)', fontSize: '1.3rem', fontWeight: 800 }}>300 giờ</strong>
              </div>
              <div style={{ borderLeft: '1px solid rgba(0,0,0,0.08)', paddingLeft: '36px' }}>
                <span style={{ color: '#64748b', fontSize: '0.88rem', display: 'block', fontWeight: 600 }}>Thực hành EDA Synopsys/Cadence</span>
                <strong style={{ color: 'var(--secondary)', fontSize: '1.3rem', fontWeight: 800 }}>400 giờ</strong>
              </div>
              <div style={{ borderLeft: '1px solid rgba(0,0,0,0.08)', paddingLeft: '36px' }}>
                <span style={{ color: '#64748b', fontSize: '0.88rem', display: 'block', fontWeight: 600 }}>Đồ án Chip eProject</span>
                <strong style={{ color: '#dc2626', fontSize: '1.3rem', fontWeight: 800 }}>200 giờ</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: CHI TIẾT CHƯƠNG TRÌNH HỌC (4 HỌC KỲ) - DẠNG TAB TƯƠNG TÁC (🌙 DARK CYBER THEME) */}
      <section className="beau-section" style={{ padding: '100px 0 110px 0' }}>
        <div className="container" data-reveal>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="beau-section-eyebrow" style={{ color: '#dc2626' }}>NỘI DUNG ĐÀO TẠO</span>
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
                      border: isActive ? '1px solid #dc2626' : '1px solid rgba(255, 255, 255, 0.12)',
                      background: isActive 
                        ? 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)' 
                        : 'rgba(13, 33, 55, 0.75)',
                      color: '#ffffff',
                      cursor: 'pointer',
                      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      textAlign: 'left',
                      boxShadow: isActive ? '0 10px 28px rgba(243, 112, 33, 0.45)' : '0 4px 15px rgba(0,0,0,0.2)',
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)'
                    }}
                  >
                    <span 
                      style={{ 
                        fontSize: '0.78rem', 
                        fontWeight: 900, 
                        color: isActive ? '#ffffff' : '#dc2626',
                        background: isActive ? 'rgba(0, 0, 0, 0.25)' : 'rgba(243, 112, 33, 0.15)',
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
                        color: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.85)'
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
            border: '1px solid rgba(243, 112, 33, 0.3)', 
            borderRadius: '24px', 
            padding: '44px',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            boxShadow: '0 24px 60px rgba(0, 0, 0, 0.45)',
            maxWidth: '1100px',
            margin: '0 auto'
          }}>
            <div style={{ marginBottom: '28px' }}>
              <span style={{ color: '#dc2626', fontSize: '0.88rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
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
                <h4 style={{ color: '#dc2626', fontSize: '0.9rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '18px' }}>
                  MÔN HỌC LÕI
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {semesters[activeTab].coreStack.map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.96rem', lineHeight: '1.5' }}>
                      <Check size={18} style={{ color: '#dc2626', flexShrink: 0, marginTop: '2px' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Col 2 */}
              <div>
                <h4 style={{ color: '#dc2626', fontSize: '0.9rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '18px' }}>
                  KỸ NĂNG ĐẠT ĐƯỢC
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {semesters[activeTab].aiTools.map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.96rem', lineHeight: '1.5' }}>
                      <Check size={18} style={{ color: '#dc2626', flexShrink: 0, marginTop: '2px' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Col 3 */}
              <div>
                <h4 style={{ color: '#dc2626', fontSize: '0.9rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '18px' }}>
                  VỊ TRÍ TUYỂN DỤNG
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {semesters[activeTab].careers.map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.96rem', lineHeight: '1.5' }}>
                      <Check size={18} style={{ color: '#dc2626', flexShrink: 0, marginTop: '2px' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: TẠI SAO NÊN CHỌN FPT JETKING? (☀️ LIGHT WARM CREAM THEME) */}
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
            <span className="beau-section-eyebrow" style={{ color: '#dc2626', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em' }}>
              ĐẶC QUYỀN ĐÀO TẠO
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 2.8rem)', fontWeight: 800, color: 'var(--secondary)', lineHeight: '1.25', marginTop: '10px', fontFamily: 'var(--font-sans)', letterSpacing: '-0.02em' }}>
              Tại sao học Thiết kế Vi mạch nên chọn FPT Jetking?
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            <div style={{ background: '#ffffff', borderRadius: '24px', padding: '40px 32px', boxShadow: '0 20px 40px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', border: '1px solid rgba(0,0,0,0.04)' }}>
              <div style={{ marginBottom: '18px' }}><Cpu size={32} style={{ color: '#dc2626' }} /></div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '14px' }}>
                Tiên phong đào tạo &amp; AI
              </h3>
              <p style={{ color: '#64748b', fontSize: '1.05rem', lineHeight: '1.7', margin: 0 }}>
                Đơn vị tiên phong đào tạo ngành Thiết kế vi mạch bán dẫn quốc tế tại Việt Nam. Tích hợp AI vào chương trình học, với thời lượng 160 giờ.
              </p>
            </div>

            <div style={{ background: '#ffffff', borderRadius: '24px', padding: '40px 32px', boxShadow: '0 20px 40px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', border: '1px solid rgba(0,0,0,0.04)' }}>
              <div style={{ marginBottom: '18px' }}><Award size={32} style={{ color: '#dc2626' }} /></div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '14px' }}>
                Thực hành chuyên sâu
              </h3>
              <p style={{ color: '#64748b', fontSize: '1.05rem', lineHeight: '1.7', margin: 0 }}>
                Học 100% chuyên ngành với 70% thời lượng là thực hành. Đào tạo bằng phương pháp Kiến tạo xã hội trên nền tảng EduNext độc quyền của Tập đoàn FPT.
              </p>
            </div>

            <div style={{ background: '#ffffff', borderRadius: '24px', padding: '40px 32px', boxShadow: '0 20px 40px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', border: '1px solid rgba(0,0,0,0.04)' }}>
              <div style={{ marginBottom: '18px' }}><Briefcase size={32} style={{ color: '#dc2626' }} /></div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '14px' }}>
                Liên thông &amp; Việc làm
              </h3>
              <p style={{ color: '#64748b', fontSize: '1.05rem', lineHeight: '1.7', margin: 0 }}>
                Học chuyển tiếp lấy bằng Đại học Lincoln, Đại học FPT hoặc một số trường Đại học quốc tế khác. Được ưu tiên thực tập và giới thiệu việc làm tại Tập đoàn FPT và các doanh nghiệp ký kết hợp tác với FPT Jetking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Bottom CTA Section (🌙 DARK CYBER THEME) */}
      <section className="beau-cta-section">
        <div className="beau-cta-bg-circle"></div>
        <div className="container beau-cta-inner" data-reveal>
          <h2 className="beau-cta-title">Gia nhập ngành Công nghiệp Tỷ đô cùng FPT Jetking</h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.1rem', maxWidth: '680px', margin: '14px auto 36px', lineHeight: '1.7' }}>
            Trở thành kỹ sư vi mạch bán dẫn quốc tế đón đầu làn sóng dịch chuyển công nghệ toàn cầu.<br/>Học bổng tài năng trị giá 8.000.000 VNĐ.
          </p>
          <a href="#dang-ky-chip-design" className="beau-cta-btn" style={{ background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)', color: '#ffffff', fontWeight: 800 }}>
            Tư vấn ngay
            <ArrowRight size={22} strokeWidth={2.5} />
          </a>
        </div>
      </section>

      {/* Section 4: Scholarship Application Form (☀️ LIGHT THEME) */}
      <div id="dang-ky-chip-design">
        <ScholarshipFormSection programName="FPT Jetking Thiết Kế Vi Mạch Bán Dẫn" />
      </div>

      <Footer />
    </div>
  );
}
