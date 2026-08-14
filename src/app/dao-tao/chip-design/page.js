'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ParticleCanvas from '@/components/ParticleCanvas';
import ScholarshipFormSection from '@/components/ScholarshipFormSection';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check, Award, BookOpen, Clock, Trophy, Sparkles } from 'lucide-react';

export default function ChipDesignSubpage() {
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
    <div className={`beau-subpage-container theme-chip-design active-sec-${activeSection}`}>
      <Header />

      {/* Section 0: Hero Section (🌙 DARK CYBER THEME) */}
      <section className="beau-hero">
        <ParticleCanvas className="beau-hero-particles" />
        <div className="beau-hero-bg-text">CHIP DESIGN</div>
        <div className="container beau-hero-inner" data-reveal>
          <span className="beau-hero-brand" style={{ backgroundColor: '#f37021', color: '#ffffff', fontWeight: 800 }}>
            FPT JETKING — CHIP DESIGN
          </span>
          <h1 className="beau-hero-title">
            Thiết Kế Vi Mạch<br />Bán Dẫn Tích Hợp AI
          </h1>
          <div className="beau-hero-logo" style={{ marginTop: '20px', display: 'flex', alignItems: 'center' }}>
            <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <text x="10" y="26" fill="#0066b3" fontSize="20" fontWeight="bold" fontFamily="sans-serif">Jet</text>
              <text x="40" y="26" fill="#f37021" fontSize="20" fontWeight="bold" fontFamily="sans-serif">king</text>
              <path d="M100 10 L108 17 L100 24" stroke="#f37021" strokeWidth="3" fill="none"/>
            </svg>
          </div>
          <p className="beau-hero-desc">
            Chương trình đào tạo Thiết kế Vi mạch Bán dẫn chuẩn quốc tế đầu tiên tại Việt Nam, chuyển giao từ đối tác Jetking Ấn Độ. Sinh viên được đào tạo chuyên sâu về quy trình thiết kế chip hoàn chỉnh, làm chủ ngôn ngữ mô tả phần cứng Verilog/VHDL, công cụ thiết kế vi mạch EDA hiện đại cùng kỹ năng tích hợp AI để tối ưu hóa quy trình tự động hóa thiết kế (EDA).
          </p>

          <div className="beau-stats-bar">
            <div className="beau-stat-item">
              <h3 style={{ color: '#f37021' }}>70% Thực Hành</h3>
              <p>Học tập thực chiến tại phòng Lab tiêu chuẩn công nghiệp.</p>
            </div>
            <div className="beau-stat-item">
              <h3 style={{ color: '#f37021' }}>Jetking AD</h3>
              <p>Bằng cấp Advanced Diploma do tập đoàn Jetking Ấn Độ cấp, giá trị toàn cầu.</p>
            </div>
            <div className="beau-stat-item">
              <h3 style={{ color: '#f37021' }}>50.000</h3>
              <p>Chỉ tiêu đào tạo kỹ sư bán dẫn Việt Nam đến năm 2030, mở rộng cơ hội việc làm.</p>
            </div>
          </div>

          {/* Banner Image */}
          <div className="beau-hero-banner">
            <Image
              src="/banner_chip_design_sub_v2.png"
              alt="Tuyển sinh Thiết kế vi mạch bán dẫn FPT Jetking"
              width={1200}
              height={400}
              priority
            />
          </div>
        </div>
      </section>

      {/* Section 1: Lộ Trình Đào Tạo (☀️ LIGHT BRIGHT THEME) */}
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
            <span style={{ color: '#f37021', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '0.85rem' }}>
              LỘ TRÌNH ĐÀO TẠO
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, color: 'var(--secondary)', lineHeight: '1.2', marginTop: '10px', fontFamily: 'var(--font-sans)', letterSpacing: '-0.02em' }}>
              Lộ trình đào tạo 24 tháng chuẩn quốc tế
            </h2>
            <p style={{ color: '#64748b', maxWidth: '720px', margin: '14px auto 0', fontSize: '1.05rem', lineHeight: '1.7' }}>
              Chương trình gồm 4 học kỳ, phân chia khoa học từ phần cứng vi điều khiển đến thiết kế vi mạch chuyên sâu SoC/ASIC/FPGA và ứng dụng AI/ML vào chip.
            </p>
          </div>

          {/* 4 Semester Cards in Modern Light Theme */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            {/* Semester 1 */}
            <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '24px', padding: '36px 30px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column' }}>
              <span style={{ color: '#f37021', fontWeight: 900, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>
                HỌC KỲ 01
              </span>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '14px', fontFamily: 'var(--font-sans)', lineHeight: '1.3' }}>
                Electronic Circuits &amp; MCU — Mạch điện tử &amp; Vi điều khiển
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', lineHeight: '1.65', marginBottom: '24px', flexGrow: 1 }}>
                Kiến tạo nền tảng vững chắc với lập trình C/C++, nguyên lý mạch điện tử cơ bản và linh kiện (Transistor, MOSFET, Diode). Bắt đầu tiếp cận Digital Logic tích hợp AI Driven Design.
              </p>
              <div style={{ borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '20px' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#f37021', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '12px' }}>
                  Môn học trọng tâm
                </span>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#f37021', flexShrink: 0 }} />Cơ bản về lập trình & Thuật toán C/C++</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#f37021', flexShrink: 0 }} />Nguyên lý mạch điện và Linh kiện điện tử</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#f37021', flexShrink: 0 }} />Vật lý bán dẫn và linh kiện MOSFET, Op-Amp</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#f37021', flexShrink: 0 }} />Mạch điện tử số tích hợp AI Driven Design</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#f37021', flexShrink: 0 }} />Đồ án Hệ thống vi điều khiển thực tế</li>
                </ul>
              </div>
            </div>

            {/* Semester 2 */}
            <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '24px', padding: '36px 30px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column' }}>
              <span style={{ color: '#f37021', fontWeight: 900, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>
                HỌC KỲ 02
              </span>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '14px', fontFamily: 'var(--font-sans)', lineHeight: '1.3' }}>
                Chip Architecture — Kiến trúc &amp; Quy trình thiết kế chip
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', lineHeight: '1.65', marginBottom: '24px', flexGrow: 1 }}>
                Đi sâu vào hệ thống truyền thông, cấu trúc tín hiệu Analog/Digital và quy trình sản xuất Chip hoàn chỉnh. Ứng dụng AI trong Chip Design qua các bài thực hành thiết kế.
              </p>
              <div style={{ borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '20px' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#f37021', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '12px' }}>
                  Môn học trọng tâm
                </span>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#f37021', flexShrink: 0 }} />Cấu trúc truyền thông & Xử lý Analog/Digital</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#f37021', flexShrink: 0 }} />Mạch tích hợp tuyến tính & Kiến trúc vi xử lý</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#f37021', flexShrink: 0 }} />Các bước thiết kế và chế tạo IC (Steps to Chip Design)</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#f37021', flexShrink: 0 }} />Ứng dụng AI tối ưu hóa cấu trúc thiết kế chip</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#f37021', flexShrink: 0 }} />Đồ án Phân tích Kiến trúc vi mạch e-Project</li>
                </ul>
              </div>
            </div>

            {/* Semester 3 */}
            <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '24px', padding: '36px 30px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column' }}>
              <span style={{ color: '#f37021', fontWeight: 900, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>
                HỌC KỲ 03
              </span>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '14px', fontFamily: 'var(--font-sans)', lineHeight: '1.3' }}>
                HDL &amp; EDA Tools — Ngôn ngữ HDL &amp; Công cụ EDA
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', lineHeight: '1.65', marginBottom: '24px', flexGrow: 1 }}>
                Làm chủ ngôn ngữ mô tả phần cứng tiêu chuẩn (Verilog/VHDL) cùng bộ công cụ tự động hóa EDA. Tích hợp các thuật toán AI nâng cao để tự động tối ưu hóa thiết kế IC.
              </p>
              <div style={{ borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '20px' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#f37021', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '12px' }}>
                  Môn học trọng tâm
                </span>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#f37021', flexShrink: 0 }} />Lập trình mô tả phần cứng Verilog HDL</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#f37021', flexShrink: 0 }} />Bộ công cụ mô phỏng Synopsys / Cadence EDA</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#f37021', flexShrink: 0 }} />Advanced AI in Chip Design: Tự động hóa EDA</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#f37021', flexShrink: 0 }} />Thiết kế Layout vi mạch bán dẫn VLSI</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#f37021', flexShrink: 0 }} />Đồ án Thiết kế vi mạch số trên EDA Tools</li>
                </ul>
              </div>
            </div>

            {/* Semester 4 */}
            <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '24px', padding: '36px 30px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column' }}>
              <span style={{ color: '#f37021', fontWeight: 900, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>
                HỌC KỲ 04
              </span>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '14px', fontFamily: 'var(--font-sans)', lineHeight: '1.3' }}>
                SoC/FPGA &amp; AI Integration — Thiết kế hệ thống SoC &amp; Chip AI
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', lineHeight: '1.65', marginBottom: '24px', flexGrow: 1 }}>
                Hiện thực hóa thiết kế trên chip FPGA thực tế, xây dựng kiến trúc System on Chip (SoC), tích hợp bộ tăng tốc AI Hardware Accelerator (NPU) và kiểm thử chip (DFT).
              </p>
              <div style={{ borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '20px' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#f37021', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '12px' }}>
                  Môn học trọng tâm
                </span>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#f37021', flexShrink: 0 }} />Hiện thực hóa và kiểm thử mạch trên kit FPGA</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#f37021', flexShrink: 0 }} />Kiến trúc hệ thống System-on-Chip (SoC)</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#f37021', flexShrink: 0 }} />Tích hợp AI Accelerators (NPU) vào Chip bán dẫn</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#f37021', flexShrink: 0 }} />Kỹ thuật kiểm thử vi mạch Design For Test (DFT)</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}><Check size={16} style={{ color: '#f37021', flexShrink: 0 }} />Đồ án tốt nghiệp Thiết kế Chip bán dẫn AI hoàn chỉnh</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Công Cụ Thiết Kế EDA (🌙 DARK TECH THEME) */}
      <section className="beau-section" style={{ padding: '100px 0 110px 0' }}>
        <div className="container" data-reveal>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="beau-section-eyebrow" style={{ color: '#f37021' }}>EDA &amp; HARDWARE TOOLS</span>
            <h2 className="beau-section-title" style={{ marginBottom: '10px' }}>Làm chủ công cụ thiết kế EDA chuẩn quốc tế</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', maxWidth: '650px', margin: '0 auto', fontSize: '1.05rem', lineHeight: '1.7' }}>
              Trải nghiệm môi trường thực hành chuyên nghiệp chuẩn phòng Lab bán dẫn toàn cầu
            </p>
          </div>

          <div className="beau-tech-grid">
            <div className="beau-tech-item" data-reveal data-reveal-delay="0.05">
              <span className="beau-tech-icon" style={{ color: '#f37021' }}>Verilog</span>
              <span className="beau-tech-name">Verilog / VHDL</span>
            </div>
            <div className="beau-tech-item" data-reveal data-reveal-delay="0.1">
              <span className="beau-tech-icon" style={{ color: '#0066b3' }}>Synopsys</span>
              <span className="beau-tech-name">Synopsys EDA</span>
            </div>
            <div className="beau-tech-item" data-reveal data-reveal-delay="0.15">
              <span className="beau-tech-icon" style={{ color: '#00d2ff' }}>Cadence</span>
              <span className="beau-tech-name">Cadence Virtuoso</span>
            </div>
            <div className="beau-tech-item" data-reveal data-reveal-delay="0.2">
              <span className="beau-tech-icon" style={{ color: '#ff4d4f' }}>FPGA</span>
              <span className="beau-tech-name">Xilinx Vivado</span>
            </div>
            <div className="beau-tech-item" data-reveal data-reveal-delay="0.25">
              <span className="beau-tech-icon" style={{ color: '#52c41a' }}>ModelSim</span>
              <span className="beau-tech-name">ModelSim / Questa</span>
            </div>
            <div className="beau-tech-item" data-reveal data-reveal-delay="0.3">
              <span className="beau-tech-icon" style={{ color: '#faad14' }}>RISC-V</span>
              <span className="beau-tech-name">RISC-V Architecture</span>
            </div>
            <div className="beau-tech-item" data-reveal data-reveal-delay="0.35">
              <span className="beau-tech-icon" style={{ color: '#13c2c2' }}>Python</span>
              <span className="beau-tech-name">Python for EDA</span>
            </div>
            <div className="beau-tech-item" data-reveal data-reveal-delay="0.4">
              <span className="beau-tech-icon" style={{ color: '#ffffff' }}>Linux</span>
              <span className="beau-tech-name">Linux Semiconductor OS</span>
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
            <span style={{ color: '#f37021', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '0.85rem' }}>
              CAREERS
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, color: 'var(--secondary)', lineHeight: '1.2', marginTop: '10px', fontFamily: 'var(--font-sans)', letterSpacing: '-0.02em' }}>
              Cơ hội nghề nghiệp ngành Bán dẫn
            </h2>
            <p style={{ color: '#64748b', maxWidth: '650px', margin: '14px auto 0', fontSize: '1.05rem', lineHeight: '1.7' }}>
              Đón đầu làn sóng đầu tư hàng tỷ USD từ các tập đoàn vi mạch công nghệ cao toàn cầu
            </p>
          </div>

          <div className="beau-careers-grid">
            <div className="beau-career-card" style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderLeft: '5px solid #f37021', boxShadow: '0 8px 25px rgba(0,0,0,0.02)' }}>
              <h3 className="career-title" style={{ color: 'var(--secondary)' }}>IC Design Engineer (Kỹ sư Thiết kế Vi mạch)</h3>
              <p className="career-desc" style={{ color: '#64748b' }}>Trực tiếp tham gia thiết kế logic (RTL Design) và thiết kế vi kiến trúc cho các dòng chip xử lý hiện đại.</p>
            </div>
            <div className="beau-career-card" style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderLeft: '5px solid #f37021', boxShadow: '0 8px 25px rgba(0,0,0,0.02)' }}>
              <h3 className="career-title" style={{ color: 'var(--secondary)' }}>IC Verification Engineer (Kỹ sư Kiểm thử Vi mạch)</h3>
              <p className="career-desc" style={{ color: '#64748b' }}>Xây dựng môi trường kiểm thử UVM/SystemVerilog để xác minh và kiểm tra độ chính xác của chip trước khi sản xuất.</p>
            </div>
            <div className="beau-career-card" style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderLeft: '5px solid #f37021', boxShadow: '0 8px 25px rgba(0,0,0,0.02)' }}>
              <h3 className="career-title" style={{ color: 'var(--secondary)' }}>Physical Design / Layout Engineer</h3>
              <p className="career-desc" style={{ color: '#64748b' }}>Chuyển đổi thiết kế logic sang thiết kế vật lý layout vi mạch, tối ưu hóa diện tích, công suất và hiệu năng (PPA).</p>
            </div>
            <div className="beau-career-card" style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderLeft: '5px solid #f37021', boxShadow: '0 8px 25px rgba(0,0,0,0.02)' }}>
              <h3 className="career-title" style={{ color: 'var(--secondary)' }}>FPGA Design Engineer</h3>
              <p className="career-desc" style={{ color: '#64748b' }}>Thiết kế, mô phỏng và hiện thực hóa các thuật toán xử lý dữ liệu lớn tốc độ cao trên chip bán dẫn FPGA.</p>
            </div>
            <div className="beau-career-card" style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderLeft: '5px solid #f37021', boxShadow: '0 8px 25px rgba(0,0,0,0.02)' }}>
              <h3 className="career-title" style={{ color: 'var(--secondary)' }}>Embedded System Engineer (Kỹ sư Nhúng)</h3>
              <p className="career-desc" style={{ color: '#64748b' }}>Phát triển phần mềm nhúng, trình điều khiển firmware điều khiển trực tiếp các hệ thống chip SoC.</p>
            </div>
            <div className="beau-career-card" style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderLeft: '5px solid #f37021', boxShadow: '0 8px 25px rgba(0,0,0,0.02)' }}>
              <h3 className="career-title" style={{ color: 'var(--secondary)' }}>AI Semiconductor Specialist</h3>
              <p className="career-desc" style={{ color: '#64748b' }}>Nghiên cứu ứng dụng trí tuệ nhân tạo trong tự động hóa quy trình EDA và tối ưu hóa bộ tăng tốc NPU trên chip.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Ưu đãi tuyển sinh đặc quyền (🌙 DARK TECH THEME) */}
      <section className="beau-section" style={{ padding: '100px 0 110px 0' }}>
        <div className="container" data-reveal>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="beau-section-eyebrow" style={{ color: '#f37021' }}>HỌC BỔNG & CHÍNH SÁCH</span>
            <h2 className="beau-section-title" style={{ marginBottom: '10px' }}>Ưu đãi tuyển sinh đặc quyền FPT Jetking</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', maxWidth: '650px', margin: '0 auto', fontSize: '1.05rem', lineHeight: '1.7' }}>
              Quỹ học bổng Tài năng Bán dẫn FPT tiếp sức thế hệ kỹ sư vi mạch tương lai của Việt Nam
            </p>
          </div>
          
          <div className="beau-incentives-grid">
            <div className="beau-incentive-card" style={{ '--accent': '#f37021' }} data-reveal data-reveal-delay="0.05">
              <span className="incentive-badge">HỌC BỔNG TÀI NĂNG</span>
              <h3 className="incentive-value">Lên tới 50%</h3>
              <p className="incentive-desc">Học bổng Ươm mầm Kỹ sư Bán dẫn tương lai do FPT Semiconductor tài trợ độc quyền.</p>
            </div>
            <div className="beau-incentive-card" style={{ '--accent': '#f37021' }} data-reveal data-reveal-delay="0.1">
              <span className="incentive-badge">NHẬP HỌC SỚM</span>
              <h3 className="incentive-value">Tặng Laptop / Kit FPGA</h3>
              <p className="incentive-desc">Ưu đãi tặng ngay Kit thực hành FPGA hoặc hỗ trợ thiết bị học tập cho tân sinh viên hoàn tất thủ tục sớm.</p>
            </div>
            <div className="beau-incentive-card" style={{ '--accent': '#f37021' }} data-reveal data-reveal-delay="0.15">
              <span className="incentive-badge">TRẢ GÓP</span>
              <h3 className="incentive-value">0% Lãi Suất</h3>
              <p className="incentive-desc">Hỗ trợ chia nhỏ học phí đóng theo từng tháng qua thẻ tín dụng ngân hàng đối tác.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Chuyển hướng nhanh ngành học & Tin tức (☀️ LIGHT BRIGHT THEME) */}
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
            <span style={{ color: '#f37021', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '0.85rem' }}>
              KHÁM PHÁ CÁC NGÀNH HỌC KHÁC
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, color: 'var(--secondary)', lineHeight: '1.2', marginTop: '10px', fontFamily: 'var(--font-sans)', letterSpacing: '-0.02em' }}>
              Hệ sinh thái đào tạo FPT
            </h2>
          </div>
          
          <div className="beau-other-programs-grid">
            <Link href="/dao-tao/ai-agent" className="beau-other-program-card" style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 8px 25px rgba(0,0,0,0.02)' }} data-reveal data-reveal-delay="0.05">
              <div>
                <span className="other-prog-tag" style={{ color: '#0066b3' }}>✦ JETKING AI AGENT</span>
                <h3 className="other-prog-title" style={{ color: 'var(--secondary)' }}>Chuyên Gia Phát Triển AI Agent</h3>
                <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Làm chủ kỹ nghệ AI thực chiến, Machine Learning, Deep Learning và kiến trúc AI Agents tự động hóa đa tác vụ.
                </p>
              </div>
              <span className="other-prog-link" style={{ color: '#0066b3', display: 'inline-flex', alignItems: 'center', gap: '8px', fontWeight: 700 }}>
                Khám phá AI Agent
                <ArrowRight size={18} />
              </span>
            </Link>

            <Link href="/dao-tao/aptech/2-nam" className="beau-other-program-card" style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 8px 25px rgba(0,0,0,0.02)' }} data-reveal data-reveal-delay="0.1">
              <div>
                <span className="other-prog-tag" style={{ color: '#f37021' }}>◈ APTECH ACCP AI</span>
                <h3 className="other-prog-title" style={{ color: 'var(--secondary)' }}>Software Engineering & AI</h3>
                <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Lập trình viên Quốc tế ACCP AI — Làm chủ ngôn ngữ Java, Python, Web/Mobile Fullstack, Cloud và Vibe Coding.
                </p>
              </div>
              <span className="other-prog-link" style={{ color: '#f37021', display: 'inline-flex', alignItems: 'center', gap: '8px', fontWeight: 700 }}>
                Khám phá Lập Trình
                <ArrowRight size={18} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 6: Bottom CTA Section (🌙 DARK CYBER THEME) */}
      <section className="beau-cta-section">
        <div className="beau-cta-bg-circle"></div>
        <div className="container beau-cta-inner" data-reveal>
          <h2 className="beau-cta-title">Trở thành Kỹ sư Vi mạch Bán dẫn thế hệ mới cùng FPT Jetking</h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.1rem', maxWidth: '680px', margin: '14px auto 36px', lineHeight: '1.7' }}>
            Nắm bắt cơ hội đón đầu ngành công nghiệp mũi nhọn quốc gia trị giá hàng nghìn tỷ USD.
          </p>
          <a href="#dang-ky-chip-design" className="beau-cta-btn" style={{ background: 'linear-gradient(135deg, #f37021 0%, #d85d0d 100%)', color: '#ffffff', fontWeight: 800 }}>
            Đăng Ký Tư Vấn & Nhận Học Bổng
            <ArrowRight size={22} strokeWidth={2.5} />
          </a>
        </div>
      </section>

      {/* Section 7: Scholarship Application Form (☀️ LIGHT THEME) */}
      <div id="dang-ky-chip-design">
        <ScholarshipFormSection programName="FPT Jetking Chip Design" />
      </div>

      <Footer />
    </div>
  );
}
