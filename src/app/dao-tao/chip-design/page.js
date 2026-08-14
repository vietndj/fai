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
      shortTitle: 'Electronics & C/C++',
      title: 'Electronic Fundamentals & Embedded C/C++',
      subtitle: '(Điện tử cơ bản, Kỹ thuật Mạch số & Lập trình C/C++ phần cứng)',
      desc: 'Thiết lập nền tảng kỹ thuật phần cứng vững chắc. Nghiên cứu linh kiện bán dẫn, mạch tương tự, kiến trúc logic số (Boolean, Flip-Flops, Registers) và lập trình C/C++ chuyên sâu cho hệ thống nhúng.',
      coreStack: [
        'Kỹ thuật điện tử mạch tương tự & Số (Digital Logic)',
        'Kiến trúc máy tính & Vi xử lý cơ bản',
        'Lập trình C/C++ tối ưu cho phần cứng',
        'Thuật toán & Cấu trúc dữ liệu trong thiết kế mạch',
        'Phân tích & Đo kiểm mạch điện tử thực tế'
      ],
      aiTools: [
        'Proteus & Multisim Circuit Simulation',
        'MATLAB / Simulink Hardware Modeling',
        'VS Code Hardware Dev Extension',
        'Git & Linux Environment Tools',
        'Copilot for Hardware Description'
      ],
      careers: [
        'Junior Firmware Engineer (Kỹ sư Nhúng)',
        'Hardware Testing Assistant (Kỹ thuật viên Kiểm thử)',
        'Digital Logic Designer',
        'Đồ án eProject: Mạch Vi điều khiển số hoàn chỉnh'
      ]
    },
    {
      num: 'HỌC KỲ 02',
      shortTitle: 'Verilog & RTL Design',
      title: 'Hardware Description Languages & RTL Design',
      subtitle: '(Ngôn ngữ mô tả phần cứng Verilog, SystemVerilog & Mô phỏng chức năng)',
      desc: 'Chuyển đổi ý tưởng phần cứng thành mã lệnh. Làm chủ ngôn ngữ Verilog và SystemVerilog để thiết kế tầng RTL (Register-Transfer Level), viết Testbench mô phỏng và nạp thử nghiệm trên chip FPGA.',
      coreStack: [
        'Ngôn ngữ mô tả phần cứng Verilog HDL',
        'Thiết kế kiến trúc số RTL (State Machines, FSM)',
        'Mô phỏng kiểm tra chức năng (Functional Simulation)',
        'Viết Testbench kiểm thử SystemVerilog cơ bản',
        'Hiện thực hóa và kiểm thử mạch trên kit FPGA Xilinx'
      ],
      aiTools: [
        'Synopsys Design Compiler (Synthesis)',
        'Siemens ModelSim / QuestaSim Simulation',
        'Xilinx Vivado FPGA Design Suite',
        'Intel Quartus Prime',
        'AI Verilog Code Generator & Linter'
      ],
      careers: [
        'RTL Design Engineer (Kỹ sư Thiết kế RTL)',
        'FPGA Prototyping Engineer',
        'Digital Design Verification Junior',
        'Đồ án eProject: Thiết kế Bộ vi xử lý ALU / RISC-V'
      ]
    },
    {
      num: 'HỌC KỲ 03',
      shortTitle: 'Physical Design & EDA',
      title: 'Physical Design, IC Layout & STA',
      subtitle: '(Thiết kế vật lý Vi mạch, Bố trí Layout & Phân tích định thời tĩnh)',
      desc: 'Đưa mã nguồn RTL thành bố cục vật lý trên tấm bán dẫn Silicon. Thực hiện tổng hợp logic, lập bản đồ Floorplanning, Placement, Clock Tree Synthesis (CTS), Routing và phân tích định thời tĩnh (STA).',
      coreStack: [
        'Quy trình thiết kế vật lý ASIC Flow từ A-Z',
        'Phân tích định thời tĩnh (Static Timing Analysis - STA)',
        'Bố trí mặt bằng (Floorplanning) & Định tuyến (Routing)',
        'Phân tích tính toàn vẹn tín hiệu (Signal Integrity & IR-Drop)',
        'Kiểm tra luật thiết kế vật lý (DRC, LVS, Antenna Rules)'
      ],
      aiTools: [
        'Cadence Innovus Implementation System',
        'Synopsys PrimeTime STA Suite',
        'Cadence Virtuoso IC Layout Editor',
        'Siemens Calibre DRC / LVS',
        'Cadence Cerebrus AI Physical Optimization'
      ],
      careers: [
        'Physical Design Engineer (Kỹ sư Thiết kế Vật lý)',
        'IC Layout Design Engineer',
        'Static Timing Analysis (STA) Specialist',
        'Đồ án eProject: Thiết kế Layout hoàn chỉnh cho Chip GDSII'
      ]
    },
    {
      num: 'HỌC KỲ 04',
      shortTitle: 'SoC, UVM & AI in EDA',
      title: 'SoC Integration, UVM Verification & AI in EDA',
      subtitle: '(Tích hợp Hệ thống trên Chip SoC, Kiểm chuẩn UVM & AI trong Bán dẫn)',
      desc: 'Làm chủ công nghệ vi mạch đỉnh cao. Tích hợp các khối IP theo chuẩn giao thức AMBA (AXI/AHB/APB), xây dựng môi trường kiểm chuẩn UVM tự động và ứng dụng AI để tối ưu hóa PPA (Power, Performance, Area).',
      coreStack: [
        'Kiến trúc hệ thống System-on-Chip (SoC) & Giao thức AMBA',
        'Kiểm chuẩn chức năng nâng cao theo chuẩn quốc tế UVM',
        'Phương pháp thiết kế vi mạch tiết kiệm năng lượng (Low-Power UPF)',
        'Thiết kế phục vụ kiểm tra sản xuất (DFT - Design for Testability)',
        'Ứng dụng AI / Machine Learning trong tự động hóa EDA'
      ],
      aiTools: [
        'Synopsys DSO.ai (AI-driven Design Space Optimization)',
        'Synopsys VCS Functional Verification',
        'Cadence Xcelium Logic Simulator',
        'UVM Verification Frameworks',
        'Ansys RedHawk Power Integrity AI'
      ],
      careers: [
        'SoC Integration & Architecture Engineer',
        'ASIC Verification Engineer (Kỹ sư Kiểm chuẩn UVM)',
        'Semiconductor Design Lead Specialist',
        'Đồ án Tốt nghiệp: Hệ thống Chip SoC Bán dẫn hoàn chỉnh'
      ]
    }
  ];

  return (
    <div className={`beau-subpage-container theme-chip-design active-sec-${activeSection}`}>
      <Header />

      {/* Sticky Program Switcher Bar */}
      <JetkingProgramSwitcher activePath="/dao-tao/chip-design" />

      {/* Section 0: Hero Section (🌙 DARK CYBER THEME) */}
      <section className="beau-hero" style={{ paddingBottom: '70px', paddingTop: '50px' }}>
        <ParticleCanvas className="beau-hero-particles" />
        <div className="beau-hero-bg-text">SEMICONDUCTOR</div>
        <div className="container beau-hero-inner" data-reveal>
          <span className="beau-hero-brand" style={{ backgroundColor: '#f37021', color: '#ffffff', fontWeight: 800 }}>
            FPT JETKING — THIẾT KẾ VI MẠCH BÁN DẪN (2 NĂM)
          </span>
          <h1 className="beau-hero-title">
            Thiết Kế Vi Mạch Bán Dẫn<br />Quốc Tế Tích Hợp AI
          </h1>
          <div className="beau-hero-logo" style={{ marginTop: '20px', display: 'flex', alignItems: 'center' }}>
            <svg width="120" height="38" viewBox="0 0 120 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 8 L22 8 L18 28 L6 28 Z" fill="#f37021"/>
              <path d="M24 14 L34 14 L31 28 L21 28 Z" fill="#0066b3"/>
              <text x="40" y="25" fill="#ffffff" fontSize="16" fontWeight="bold" fontFamily="sans-serif">Jetking</text>
            </svg>
          </div>
          <p className="beau-hero-desc">
            Chương trình đào tạo Chuyên gia Thiết kế Vi mạch Bán dẫn chuẩn quốc tế 2 năm hợp tác cùng Tập đoàn Jetking Ấn Độ. Tiếp cận trực tiếp bản quyền phần mềm EDA hàng đầu (Synopsys, Cadence, Siemens) và thực hành thiết kế chip vật lý từ RTL đến GDSII.
          </p>

          <div className="beau-stats-bar">
            <div className="beau-stat-item">
              <h3 style={{ color: '#f37021' }}>2 Năm</h3>
              <p>4 học kỳ chuyên sâu toàn diện quy trình thiết kế vi mạch ASIC/SoC.</p>
            </div>
            <div className="beau-stat-item">
              <h3 style={{ color: '#f37021' }}>Jetking HDSE</h3>
              <p>Bằng Higher Diploma danh giá do Jetking Ấn Độ cấp có giá trị toàn cầu.</p>
            </div>
            <div className="beau-stat-item">
              <h3 style={{ color: '#f37021' }}>EDA Chuẩn Quốc Tế</h3>
              <p>Thực hành trên bộ công cụ Synopsys &amp; Cadence chuẩn công nghiệp.</p>
            </div>
          </div>

          {/* Banner Image */}
          <div className="beau-hero-banner" style={{ marginTop: '40px' }}>
            <Image
              src="/banner_chip_sub_v2.png"
              alt="Tuyển sinh FPT Jetking Vi mạch bán dẫn"
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
            <span style={{ color: '#f37021', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '0.85rem' }}>
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
              <BookOpen size={34} style={{ color: '#f37021', marginBottom: '14px' }} />
              <h3 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--secondary)', margin: 0, lineHeight: 1 }}>22+</h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', marginTop: '10px', margin: 0, fontWeight: 600 }}>Môn học &amp; Công nghệ EDA</p>
            </div>
            <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '20px', padding: '32px 24px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
              <Clock size={34} style={{ color: '#f37021', marginBottom: '14px' }} />
              <h3 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--secondary)', margin: 0, lineHeight: 1 }}>04</h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', marginTop: '10px', margin: 0, fontWeight: 600 }}>Học kỳ chuyên sâu</p>
            </div>
            <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '20px', padding: '32px 24px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
              <Trophy size={34} style={{ color: '#f37021', marginBottom: '14px' }} />
              <h3 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--secondary)', margin: 0, lineHeight: 1 }}>04</h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', marginTop: '10px', margin: 0, fontWeight: 600 }}>Đồ án Thiết kế Chip eProject</p>
            </div>
            <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '20px', padding: '32px 24px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
              <Briefcase size={34} style={{ color: '#f37021', marginBottom: '14px' }} />
              <h3 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--secondary)', margin: 0, lineHeight: 1 }}>01</h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', marginTop: '10px', margin: 0, fontWeight: 600 }}>Hồ sơ Layout GDSII Doanh nghiệp</p>
            </div>
          </div>

          {/* Time banner */}
          <div style={{ 
            marginTop: '36px', 
            background: '#ffffff', 
            border: '1px solid rgba(243, 112, 33, 0.3)', 
            borderLeft: '6px solid #f37021',
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
              <span style={{ fontSize: '0.82rem', color: '#f37021', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Tổng thời lượng đào tạo</span>
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
                <strong style={{ color: '#f37021', fontSize: '1.3rem', fontWeight: 800 }}>200 giờ</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: CHI TIẾT CHƯƠNG TRÌNH HỌC (4 HỌC KỲ) - DẠNG TAB TƯƠNG TÁC (🌙 DARK CYBER THEME) */}
      <section className="beau-section" style={{ padding: '100px 0 110px 0' }}>
        <div className="container" data-reveal>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="beau-section-eyebrow" style={{ color: '#f37021' }}>NỘI DUNG ĐÀO TẠO</span>
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
                      border: isActive ? '1px solid #f37021' : '1px solid rgba(255, 255, 255, 0.12)',
                      background: isActive 
                        ? 'linear-gradient(135deg, #f37021 0%, #d85d0d 100%)' 
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
                        color: isActive ? '#ffffff' : '#f37021',
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
              <span style={{ color: '#f37021', fontSize: '0.88rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
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
                <h4 style={{ color: '#f37021', fontSize: '0.9rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '18px' }}>
                  CÔNG NGHỆ &amp; MÔN HỌC LÕI
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {semesters[activeTab].coreStack.map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.96rem', lineHeight: '1.5' }}>
                      <Check size={18} style={{ color: '#f37021', flexShrink: 0, marginTop: '2px' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Col 2 */}
              <div>
                <h4 style={{ color: '#f37021', fontSize: '0.9rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '18px' }}>
                  CÔNG CỤ EDA &amp; PHẦN MỀM LAB
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {semesters[activeTab].aiTools.map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.96rem', lineHeight: '1.5' }}>
                      <Check size={18} style={{ color: '#f37021', flexShrink: 0, marginTop: '2px' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Col 3 */}
              <div>
                <h4 style={{ color: '#f37021', fontSize: '0.9rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '18px' }}>
                  CƠ HỘI NGHỀ NGHIỆP &amp; ĐỒ ÁN
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {semesters[activeTab].careers.map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.96rem', lineHeight: '1.5' }}>
                      <Check size={18} style={{ color: '#f37021', flexShrink: 0, marginTop: '2px' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Bottom CTA Section (🌙 DARK CYBER THEME) */}
      <section className="beau-cta-section">
        <div className="beau-cta-bg-circle"></div>
        <div className="container beau-cta-inner" data-reveal>
          <h2 className="beau-cta-title">Gia nhập ngành Công nghiệp Bán dẫn cùng FPT Jetking</h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.1rem', maxWidth: '680px', margin: '14px auto 36px', lineHeight: '1.7' }}>
            Trở thành kỹ sư vi mạch bán dẫn quốc tế đón đầu làn sóng dịch chuyển công nghệ toàn cầu.
          </p>
          <a href="#dang-ky-chip-design" className="beau-cta-btn" style={{ background: 'linear-gradient(135deg, #f37021 0%, #d85d0d 100%)', color: '#ffffff', fontWeight: 800 }}>
            Đăng Ký Tư Vấn &amp; Nhận Học Bổng
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
