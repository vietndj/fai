'use client';

import { useEffect, useState } from 'react';
import Footer from '@/components/Footer';
import ParticleCanvas from '@/components/ParticleCanvas';
import ArenaProgramSwitcher from '@/components/ArenaProgramSwitcher';
import Arena100hFormSection from '@/components/Arena100hFormSection';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check, Sparkles, Zap, Palette, Film, Smartphone, Clock, Award, Gamepad2, GraduationCap, Briefcase, UserCheck, Star, BookOpen } from 'lucide-react';

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
          <h1 className="beau-hero-title" style={{ marginTop: '16px', fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: '1.25', textWrap: 'balance', textTransform: 'uppercase' }}>
            BỘ KHÓA HỌC MULTIMEDIA<br />(100 - 200 GIỜ)
          </h1>
          <p className="beau-hero-desc" style={{ marginTop: '24px' }}>
            Học Multimedia không giới hạn. Làm Project thật từ ngày đầu tiên. Tích hợp AI xuyên suốt. Sở hữu ngay Portfolio xịn sò để đi làm.
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
              CHUYÊN ĐỀ 100 - 200 GIỜ
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, color: 'var(--secondary)', lineHeight: '1.2', marginTop: '10px', fontFamily: 'var(--font-sans)', letterSpacing: '-0.02em' }}>
              4 Khóa học Multimedia chuyên sâu
            </h2>
            <p style={{ color: '#64748b', maxWidth: '720px', margin: '14px auto 0', fontSize: '1.05rem', lineHeight: '1.7' }}>
              Được thiết kế riêng cho người đi làm, sinh viên và những ai muốn tối ưu thời gian học tập, có nghề ngay.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {/* Khoá 1 */}
            <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '24px', padding: '32px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <span style={{ background: 'rgba(255, 182, 0, 0.15)', color: '#d97706', fontWeight: 800, fontSize: '0.82rem', padding: '6px 14px', borderRadius: '20px', textTransform: 'uppercase' }}>
                  Khoá 1
                </span>
                <Palette size={26} style={{ color: '#d97706' }} />
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '14px', fontFamily: 'var(--font-sans)' }}>
                Thiết Kế Thương Hiệu - Thương Mại
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', lineHeight: '1.7', marginBottom: '24px', flexGrow: 1 }}>
                Thiết kế Nhận diện thương hiệu, quảng cáo, truyền thông, bán hàng.
              </p>
              <div style={{ borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '20px' }}>
                <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#d97706', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>Môn học</span>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.9rem', color: '#334155' }}><Check size={16} style={{ color: '#d97706', flexShrink: 0, marginTop: '2px' }} />Concepts of Graphics and Illustrations</li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.9rem', color: '#334155' }}><Check size={16} style={{ color: '#d97706', flexShrink: 0, marginTop: '2px' }} />Typography Design</li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.9rem', color: '#334155' }}><Check size={16} style={{ color: '#d97706', flexShrink: 0, marginTop: '2px' }} />Digital Art</li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.9rem', color: '#334155' }}><Check size={16} style={{ color: '#d97706', flexShrink: 0, marginTop: '2px' }} />Magic with Images</li>
                </ul>
                <div style={{ fontSize: '0.9rem', color: '#334155', background: '#F8FAFC', padding: '12px', borderRadius: '12px', fontWeight: 600 }}>
                  <span style={{ color: '#d97706' }}>Đầu ra:</span> Designer làm việc ở các đơn vị làm branding, truyền thông, các kênh bán hàng online/offline.
                </div>
              </div>
            </div>

            {/* Khoá 2 */}
            <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '24px', padding: '32px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <span style={{ background: 'rgba(255, 182, 0, 0.15)', color: '#d97706', fontWeight: 800, fontSize: '0.82rem', padding: '6px 14px', borderRadius: '20px', textTransform: 'uppercase' }}>
                  Khoá 2
                </span>
                <Smartphone size={26} style={{ color: '#d97706' }} />
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '14px', fontFamily: 'var(--font-sans)' }}>
                Thiết Kế App/Web
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', lineHeight: '1.7', marginBottom: '24px', flexGrow: 1 }}>
                Thiết kế giao diện cho thiết bị số Web / App
              </p>
              <div style={{ borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '20px' }}>
                <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#d97706', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>Môn học</span>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.9rem', color: '#334155' }}><Check size={16} style={{ color: '#d97706', flexShrink: 0, marginTop: '2px' }} />Web Designing Concepts</li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.9rem', color: '#334155' }}><Check size={16} style={{ color: '#d97706', flexShrink: 0, marginTop: '2px' }} />UI Design Foundations & Applications</li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.9rem', color: '#334155' }}><Check size={16} style={{ color: '#d97706', flexShrink: 0, marginTop: '2px' }} />Wireframing & Prototype</li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.9rem', color: '#334155' }}><Check size={16} style={{ color: '#d97706', flexShrink: 0, marginTop: '2px' }} />Content Management System, UI Design Portfolio</li>
                </ul>
                <div style={{ fontSize: '0.9rem', color: '#334155', background: '#F8FAFC', padding: '12px', borderRadius: '12px', fontWeight: 600 }}>
                  <span style={{ color: '#d97706' }}>Đầu ra:</span> UI Designer, Web Designer, Front-End Developer.
                </div>
              </div>
            </div>

            {/* Khoá 3 */}
            <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '24px', padding: '32px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <span style={{ background: 'rgba(255, 182, 0, 0.15)', color: '#d97706', fontWeight: 800, fontSize: '0.82rem', padding: '6px 14px', borderRadius: '20px', textTransform: 'uppercase' }}>
                  Khoá 3
                </span>
                <Film size={26} style={{ color: '#d97706' }} />
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '14px', fontFamily: 'var(--font-sans)' }}>
                Làm Video/Clip sáng tạo
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', lineHeight: '1.7', marginBottom: '24px', flexGrow: 1 }}>
                Làm mọi thứ có nút Play trong 100h
              </p>
              <div style={{ borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '20px' }}>
                <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#d97706', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>Môn học</span>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.9rem', color: '#334155' }}><Check size={16} style={{ color: '#d97706', flexShrink: 0, marginTop: '2px' }} />Concepts of Film Making Now</li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.9rem', color: '#334155' }}><Check size={16} style={{ color: '#d97706', flexShrink: 0, marginTop: '2px' }} />Creating Motion Graphics</li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.9rem', color: '#334155' }}><Check size={16} style={{ color: '#d97706', flexShrink: 0, marginTop: '2px' }} />Principles of Animation</li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.9rem', color: '#334155' }}><Check size={16} style={{ color: '#d97706', flexShrink: 0, marginTop: '2px' }} />Storyboarding and Animatics, Animation Art</li>
                </ul>
                <div style={{ fontSize: '0.9rem', color: '#334155', background: '#F8FAFC', padding: '12px', borderRadius: '12px', fontWeight: 600 }}>
                  <span style={{ color: '#d97706' }}>Đầu ra:</span> Kỹ thuật viên dựng, biên tập cho mọi nền tảng clip, tiktok, MXH, đài truyền hình....
                </div>
              </div>
            </div>

            {/* Khoá 4 */}
            <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '24px', padding: '32px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <span style={{ background: 'rgba(255, 182, 0, 0.15)', color: '#d97706', fontWeight: 800, fontSize: '0.82rem', padding: '6px 14px', borderRadius: '20px', textTransform: 'uppercase' }}>
                  Khoá 4
                </span>
                <Gamepad2 size={26} style={{ color: '#d97706' }} />
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '14px', fontFamily: 'var(--font-sans)' }}>
                Thiết Kế Cho Game
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', lineHeight: '1.7', marginBottom: '24px', flexGrow: 1 }}>
                100 giờ tạo lập môi trường/tài nguyên game
              </p>
              <div style={{ borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '20px' }}>
                <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#d97706', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>Môn học</span>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.9rem', color: '#334155' }}><Check size={16} style={{ color: '#d97706', flexShrink: 0, marginTop: '2px' }} />Introduction to Blender</li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.9rem', color: '#334155' }}><Check size={16} style={{ color: '#d97706', flexShrink: 0, marginTop: '2px' }} />3D Asset Modeling</li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.9rem', color: '#334155' }}><Check size={16} style={{ color: '#d97706', flexShrink: 0, marginTop: '2px' }} />Retopology of 3D Asset</li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.9rem', color: '#334155' }}><Check size={16} style={{ color: '#d97706', flexShrink: 0, marginTop: '2px' }} />Texturing, Lighting & Rendering</li>
                </ul>
                <div style={{ fontSize: '0.9rem', color: '#334155', background: '#F8FAFC', padding: '12px', borderRadius: '12px', fontWeight: 600 }}>
                  <span style={{ color: '#d97706' }}>Đầu ra:</span> Nhân sự kỹ thuật ngành Game (công nghiệp hoặc indie).
                </div>
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
            Tư vấn ngay
            <ArrowRight size={22} strokeWidth={2.5} />
          </a>
        </div>
      </section>

      {/* Target Audience Section */}
      <section 
        className="beau-section"
        style={{ 
          backgroundColor: '#ffffff', 
          color: '#0f172a',
          padding: '100px 0',
        }}
      >
        <div className="container" data-reveal>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{ color: '#d97706', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '0.85rem' }}>
              ĐỐI TƯỢNG HỌC VIÊN
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, color: 'var(--secondary)', lineHeight: '1.2', marginTop: '10px', fontFamily: 'var(--font-sans)', letterSpacing: '-0.02em' }}>
              Khoá học này dành cho ai?
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px' }}>
            <div style={{ background: '#F8FAFC', padding: '36px 30px', borderRadius: '24px', textAlign: 'center', border: '1px solid rgba(0,0,0,0.04)' }}>
              <GraduationCap size={40} style={{ color: '#d97706', margin: '0 auto 20px' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '12px' }}>Học sinh THCS/THPT</h3>
              <p style={{ color: '#64748b', fontSize: '0.98rem', lineHeight: '1.6', margin: 0 }}>
                Rèn luyện tư duy thẩm mỹ, định hướng nghề nghiệp sớm.
              </p>
            </div>
            
            <div style={{ background: '#F8FAFC', padding: '36px 30px', borderRadius: '24px', textAlign: 'center', border: '1px solid rgba(0,0,0,0.04)' }}>
              <UserCheck size={40} style={{ color: '#d97706', margin: '0 auto 20px' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '12px' }}>Sinh viên</h3>
              <p style={{ color: '#64748b', fontSize: '0.98rem', lineHeight: '1.6', margin: 0 }}>
                Củng cố kỹ năng mềm, làm đẹp CV, sẵn sàng đi làm ngay khi chưa tốt nghiệp.
              </p>
            </div>

            <div style={{ background: '#F8FAFC', padding: '36px 30px', borderRadius: '24px', textAlign: 'center', border: '1px solid rgba(0,0,0,0.04)' }}>
              <Briefcase size={40} style={{ color: '#d97706', margin: '0 auto 20px' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '12px' }}>Người đi làm</h3>
              <p style={{ color: '#64748b', fontSize: '0.98rem', lineHeight: '1.6', margin: 0 }}>
                Nâng cấp kỹ năng (Upskill), tự tay thiết kế các ấn phẩm phục vụ công việc hàng ngày.
              </p>
            </div>

            <div style={{ background: '#F8FAFC', padding: '36px 30px', borderRadius: '24px', textAlign: 'center', border: '1px solid rgba(0,0,0,0.04)' }}>
              <Star size={40} style={{ color: '#d97706', margin: '0 auto 20px' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '12px' }}>Creator / Freelancer</h3>
              <p style={{ color: '#64748b', fontSize: '0.98rem', lineHeight: '1.6', margin: 0 }}>
                Làm chủ công cụ, đa dạng hóa dịch vụ để nhận thêm job nghìn đô.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Special Privileges Section */}
      <section 
        className="beau-section"
        style={{ 
          backgroundColor: '#F8FAFC', 
          color: '#0f172a',
          padding: '100px 0 120px 0',
        }}
      >
        <div className="container" data-reveal>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{ color: '#d97706', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '0.85rem' }}>
              ĐẶC QUYỀN ĐÀO TẠO
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, color: 'var(--secondary)', lineHeight: '1.2', marginTop: '10px', fontFamily: 'var(--font-sans)', letterSpacing: '-0.02em' }}>
              Tại sao nên chọn khóa học ngắn hạn tại FPT Arena Multimedia
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            <div style={{ background: '#ffffff', border: '1px solid rgba(0, 0, 0, 0.06)', borderRadius: '20px', padding: '36px 30px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.02)', transition: 'all 0.3s ease' }}>
              <div style={{ marginBottom: '18px' }}><Zap size={32} style={{ color: '#d97706' }} /></div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '12px', fontFamily: 'var(--font-sans)' }}>Học bằng bộ công cụ MIỄN PHÍ</h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', lineHeight: '1.7', margin: 0 }}>
                Không lo chi phí bản quyền. Không cần mua Adobe vẫn làm ra siêu phẩm.
              </p>
            </div>

            <div style={{ background: '#ffffff', border: '1px solid rgba(0, 0, 0, 0.06)', borderRadius: '20px', padding: '36px 30px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.02)', transition: 'all 0.3s ease' }}>
              <div style={{ marginBottom: '18px' }}><Award size={32} style={{ color: '#d97706' }} /></div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '12px', fontFamily: 'var(--font-sans)' }}>Thực chiến từ Ngày 1</h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', lineHeight: '1.7', margin: 0 }}>
                Học theo phương pháp Project-based. Bài tập chính là các ứng dụng thật trên thị trường doanh nghiệp.
              </p>
            </div>

            <div style={{ background: '#ffffff', border: '1px solid rgba(0, 0, 0, 0.06)', borderRadius: '20px', padding: '36px 30px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.02)', transition: 'all 0.3s ease' }}>
              <div style={{ marginBottom: '18px' }}><Sparkles size={32} style={{ color: '#d97706' }} /></div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '12px', fontFamily: 'var(--font-sans)' }}>Tích hợp AI linh động</h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', lineHeight: '1.7', margin: 0 }}>
                Cập nhật các thế hệ công nghệ AI mới nhất vào quy trình làm việc để tăng tốc độ sáng tạo.
              </p>
            </div>

            <div style={{ background: '#ffffff', border: '1px solid rgba(0, 0, 0, 0.06)', borderRadius: '20px', padding: '36px 30px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.02)', transition: 'all 0.3s ease' }}>
              <div style={{ marginBottom: '18px' }}><BookOpen size={32} style={{ color: '#d97706' }} /></div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '12px', fontFamily: 'var(--font-sans)' }}>Đặc quyền kho học liệu</h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', lineHeight: '1.7', margin: 0 }}>
                Tặng tài khoản Coursera + Udemy miễn phí. Truy cập kho học liệu quốc tế với hàng ngàn khóa học.
              </p>
            </div>

            <div style={{ background: '#ffffff', border: '1px solid rgba(0, 0, 0, 0.06)', borderRadius: '20px', padding: '36px 30px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.02)', transition: 'all 0.3s ease' }}>
              <div style={{ marginBottom: '18px' }}><Check size={32} style={{ color: '#d97706' }} /></div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '12px', fontFamily: 'var(--font-sans)' }}>Đầu ra đảm bảo</h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', lineHeight: '1.7', margin: 0 }}>
                Hoàn thành khóa học là có ngay trong tay Portfolio thực tế để tự tin nhận job hoặc ứng tuyển.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Scholarship Form (☀️ LIGHT THEME) */}
      <div id="dang-ky-arena-100h">
        <Arena100hFormSection />
      </div>

      <Footer />
    </div>
  );
}
