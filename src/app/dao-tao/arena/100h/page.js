'use client';

import { useEffect, useState } from 'react';
import Footer from '@/components/Footer';
import ParticleCanvas from '@/components/ParticleCanvas';
import ArenaProgramSwitcher from '@/components/ArenaProgramSwitcher';
import ScholarshipFormSection from '@/components/ScholarshipFormSection';
import TechCTAButton from '@/components/TechCTAButton';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check, Sparkles, Zap, Palette, Film, Smartphone, Clock, Award, Gamepad2, GraduationCap, Briefcase, UserCheck, Star, BookOpen, ShieldCheck } from 'lucide-react';

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
            BỘ KHÓA HỌC MULTIMEDIA 100 GIỜ
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
              CHUYÊN ĐỀ 100 GIỜ
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, color: 'var(--secondary)', lineHeight: '1.2', marginTop: '10px', fontFamily: 'var(--font-sans)', letterSpacing: '-0.02em', textWrap: 'balance' }}>
              4 Khóa học Multimedia chuyên sâu
            </h2>
            <p style={{ color: '#64748b', maxWidth: '640px', margin: '14px auto 0', fontSize: '1.05rem', lineHeight: '1.75', textWrap: 'balance' }}>
              Được thiết kế riêng cho người đi làm, sinh viên<br />và những ai muốn tối ưu thời gian học tập, có nghề ngay.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', alignItems: 'stretch' }}>
            {[
              {
                badge: 'Khoá 1',
                icon: <Palette size={26} style={{ color: '#d97706' }} />,
                title: 'Thiết Kế Thương Hiệu - Thương Mại',
                desc: 'Thiết kế bộ nhận diện thương hiệu, ấn phẩm quảng cáo, truyền thông & bán hàng đa kênh.',
                subjects: [
                  'Concepts of Graphics and Illustrations',
                  'Typography Design',
                  'Digital Art',
                  'Magic with Images'
                ],
                output: 'Graphic Designer, Brand Designer tại Agency và doanh nghiệp.'
              },
              {
                badge: 'Khoá 2',
                icon: <Smartphone size={26} style={{ color: '#d97706' }} />,
                title: 'Thiết Kế App/Web UI/UX',
                desc: 'Thiết kế giao diện UI/UX trực quan cho Website, Landing Page & Ứng dụng di động.',
                subjects: [
                  'Web Designing Concepts',
                  'UI Design Foundations & Applications',
                  'Wireframing & Prototype',
                  'CMS & UI Design Portfolio'
                ],
                output: 'UI/UX Designer, Web Designer, Product Designer cho dự án số.'
              },
              {
                badge: 'Khoá 3',
                icon: <Film size={26} style={{ color: '#d97706' }} />,
                title: 'Làm Video / Clip Sáng Tạo',
                desc: 'Sản xuất và biên tập video ngắn, motion graphics, hoạt hình phục vụ MXH & quảng cáo.',
                subjects: [
                  'Concepts of Film Making Now',
                  'Creating Motion Graphics',
                  'Principles of Animation',
                  'Storyboarding & Animation Art'
                ],
                output: 'Video Editor, Motion Designer, Content Creator cho Agency & Studio.'
              },
              {
                badge: 'Khoá 4',
                icon: <Gamepad2 size={26} style={{ color: '#d97706' }} />,
                title: 'Thiết Kế Đồ Họa 3D & Game',
                desc: 'Dựng hình 3D, tạo chất liệu, ánh sáng & phát triển tài nguyên môi trường cho Game.',
                subjects: [
                  'Introduction to Blender',
                  '3D Asset Modeling',
                  'Retopology of 3D Asset',
                  'Texturing, Lighting & Rendering'
                ],
                output: '3D Modeler, Game Asset Artist tại các Studio Game & Hoạt hình.'
              }
            ].map((course, idx) => (
              <div 
                key={idx} 
                style={{ 
                  background: '#ffffff', 
                  border: '1px solid rgba(0,0,0,0.06)', 
                  borderRadius: '24px', 
                  padding: '30px 24px', 
                  boxShadow: '0 10px 30px rgba(0,0,0,0.03)', 
                  display: 'flex', 
                  flexDirection: 'column',
                  height: '100%',
                  transition: 'all 0.3s ease'
                }}
              >
                {/* Header: Badge & Icon */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <span style={{ background: 'rgba(255, 182, 0, 0.15)', color: '#d97706', fontWeight: 800, fontSize: '0.82rem', padding: '6px 14px', borderRadius: '20px', textTransform: 'uppercase' }}>
                    {course.badge}
                  </span>
                  {course.icon}
                </div>

                {/* Title (Locked min-height for perfect alignment) */}
                <h3 style={{ 
                  fontSize: '1.25rem', 
                  fontWeight: 800, 
                  color: 'var(--secondary)', 
                  marginBottom: '10px', 
                  fontFamily: 'var(--font-sans)',
                  lineHeight: '1.35',
                  minHeight: '3.4rem',
                  display: 'flex',
                  alignItems: 'center',
                  textWrap: 'balance'
                }}>
                  {course.title}
                </h3>

                {/* Description (Locked min-height for uniform divider position) */}
                <p style={{ 
                  color: '#64748b', 
                  fontSize: '0.92rem', 
                  lineHeight: '1.65', 
                  marginBottom: '20px', 
                  minHeight: '4.4rem',
                  textWrap: 'pretty'
                }}>
                  {course.desc}
                </p>

                {/* Section Divider & Môn học */}
                <div style={{ borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#d97706', textTransform: 'uppercase', display: 'block', marginBottom: '14px', letterSpacing: '0.04em' }}>
                    Môn học
                  </span>
                  
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '22px', minHeight: '135px' }}>
                    {course.subjects.map((sub, sIdx) => (
                      <li key={sIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.88rem', color: '#334155', lineHeight: '1.45' }}>
                        <Check size={16} style={{ color: '#d97706', flexShrink: 0, marginTop: '2px' }} />
                        <span>{sub}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Output Box (Pinned at bottom) */}
                  <div style={{ 
                    marginTop: 'auto', 
                    fontSize: '0.88rem', 
                    color: '#334155', 
                    background: '#F8FAFC', 
                    padding: '14px 16px', 
                    borderRadius: '14px', 
                    border: '1px solid rgba(0, 0, 0, 0.04)',
                    minHeight: '74px',
                    display: 'flex',
                    alignItems: 'center',
                    lineHeight: '1.5'
                  }}>
                    <div>
                      <strong style={{ color: '#d97706' }}>Đầu ra:</strong> {course.output}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Bottom CTA Section (🌙 DARK CYBER THEME) */}
      <section className="beau-cta-section">
        <div className="beau-cta-bg-circle"></div>
        <div className="container beau-cta-inner" data-reveal>
          <h2 className="beau-cta-title" style={{ textWrap: 'balance' }}>Sẵn sàng bứt phá kỹ năng Multimedia cấp tốc?</h2>
          <p style={{ 
            color: 'rgba(255, 255, 255, 0.85)', 
            fontSize: '1.1rem', 
            maxWidth: '720px', 
            margin: '16px auto 32px', 
            lineHeight: '1.7',
            textWrap: 'balance' 
          }}>
            Đăng ký nhận lịch khai giảng các khóa ngắn hạn 100 giờ và thông tin ưu đãi mới nhất từ <span style={{ whiteSpace: 'nowrap' }}>FPT Arena Multimedia</span>
          </p>
          <TechCTAButton 
            text="Tư vấn ngay" 
            href="https://zalo.me/fptarenaofficial" 
            style={{ 
              background: 'linear-gradient(135deg, #ffb600 0%, #d97706 100%)', 
              color: '#000000', 
              fontWeight: 800,
              boxShadow: '0 10px 30px rgba(255, 182, 0, 0.4)'
            }} 
          />
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
            {/* Card 1 */}
            <div style={{ background: '#ffffff', border: '1px solid rgba(0, 0, 0, 0.06)', borderRadius: '20px', padding: '36px 30px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.02)', transition: 'all 0.3s ease', display: 'flex', flexDirection: 'column' }}>
              <div style={{ marginBottom: '18px' }}><ShieldCheck size={32} style={{ color: '#d97706' }} /></div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '12px', fontFamily: 'var(--font-sans)', minHeight: '2.8rem', display: 'flex', alignItems: 'center', textWrap: 'balance' }}>
                22 năm tiên phong đào tạo Multimedia
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', lineHeight: '1.7', margin: 0, textWrap: 'pretty' }}>
                Đơn vị đầu tiên tại Việt Nam đào tạo Mỹ thuật Đa phương tiện chuẩn Quốc tế với mạng lưới hơn 20.000 cựu sinh viên giữ vị trí chủ chốt trong ngành sáng tạo.
              </p>
            </div>

            {/* Card 2 */}
            <div style={{ background: '#ffffff', border: '1px solid rgba(0, 0, 0, 0.06)', borderRadius: '20px', padding: '36px 30px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.02)', transition: 'all 0.3s ease', display: 'flex', flexDirection: 'column' }}>
              <div style={{ marginBottom: '18px' }}><Zap size={32} style={{ color: '#d97706' }} /></div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '12px', fontFamily: 'var(--font-sans)', minHeight: '2.8rem', display: 'flex', alignItems: 'center', textWrap: 'balance' }}>
                Học bằng bộ công cụ MIỄN PHÍ
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', lineHeight: '1.7', margin: 0, textWrap: 'pretty' }}>
                Không lo chi phí bản quyền. Không cần mua Adobe vẫn làm ra các sản phẩm thiết kế xuất sắc và chuyên nghiệp.
              </p>
            </div>

            {/* Card 3 */}
            <div style={{ background: '#ffffff', border: '1px solid rgba(0, 0, 0, 0.06)', borderRadius: '20px', padding: '36px 30px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.02)', transition: 'all 0.3s ease', display: 'flex', flexDirection: 'column' }}>
              <div style={{ marginBottom: '18px' }}><Award size={32} style={{ color: '#d97706' }} /></div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '12px', fontFamily: 'var(--font-sans)', minHeight: '2.8rem', display: 'flex', alignItems: 'center', textWrap: 'balance' }}>
                Thực chiến từ Ngày 1
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', lineHeight: '1.7', margin: 0, textWrap: 'pretty' }}>
                Học theo phương pháp Project-based. Bài tập chính là các ứng dụng thật trên thị trường doanh nghiệp.
              </p>
            </div>

            {/* Card 4 */}
            <div style={{ background: '#ffffff', border: '1px solid rgba(0, 0, 0, 0.06)', borderRadius: '20px', padding: '36px 30px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.02)', transition: 'all 0.3s ease', display: 'flex', flexDirection: 'column' }}>
              <div style={{ marginBottom: '18px' }}><Sparkles size={32} style={{ color: '#d97706' }} /></div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '12px', fontFamily: 'var(--font-sans)', minHeight: '2.8rem', display: 'flex', alignItems: 'center', textWrap: 'balance' }}>
                Tích hợp AI linh động
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', lineHeight: '1.7', margin: 0, textWrap: 'pretty' }}>
                Cập nhật các thế hệ công nghệ AI mới nhất vào quy trình làm việc để tăng tốc độ sáng tạo.
              </p>
            </div>

            {/* Card 5 */}
            <div style={{ background: '#ffffff', border: '1px solid rgba(0, 0, 0, 0.06)', borderRadius: '20px', padding: '36px 30px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.02)', transition: 'all 0.3s ease', display: 'flex', flexDirection: 'column' }}>
              <div style={{ marginBottom: '18px' }}><BookOpen size={32} style={{ color: '#d97706' }} /></div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '12px', fontFamily: 'var(--font-sans)', minHeight: '2.8rem', display: 'flex', alignItems: 'center', textWrap: 'balance' }}>
                Đặc quyền kho học liệu
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', lineHeight: '1.7', margin: 0, textWrap: 'pretty' }}>
                Tặng tài khoản Coursera + Udemy miễn phí. Truy cập kho học liệu quốc tế với hàng ngàn khóa học.
              </p>
            </div>

            {/* Card 6 */}
            <div style={{ background: '#ffffff', border: '1px solid rgba(0, 0, 0, 0.06)', borderRadius: '20px', padding: '36px 30px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.02)', transition: 'all 0.3s ease', display: 'flex', flexDirection: 'column' }}>
              <div style={{ marginBottom: '18px' }}><Check size={32} style={{ color: '#d97706' }} /></div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '12px', fontFamily: 'var(--font-sans)', minHeight: '2.8rem', display: 'flex', alignItems: 'center', textWrap: 'balance' }}>
                Đầu ra đảm bảo
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', lineHeight: '1.7', margin: 0, textWrap: 'pretty' }}>
                Hoàn thành khóa học là có ngay trong tay Portfolio thực tế để tự tin nhận job hoặc ứng tuyển.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Scholarship Form (☀️ LIGHT THEME) */}
      <div id="dang-ky-arena-100h">
        <ScholarshipFormSection 
          programName="FPT Arena Khóa Ngắn Hạn (100 Giờ)"
          brand="arena"
          headerTitle="NHẬN THÔNG TIN TƯ VẤN KHÓA HỌC NGẮN HẠN 100H & HỌC BỔNG TẠI FPT ARENA"
          formTitle="BẠN CÓ MUỐN BỨT PHÁ KỸ NĂNG MULTIMEDIA CẤP TỐC?"
          formSubtitle="Đăng ký nhận tư vấn lộ trình 100 giờ thực chiến và ưu đãi mới nhất"
          courseOptions={[
            "Thiết Kế Thương Hiệu - Thương Mại (100h)",
            "Thiết Kế App/Web UI/UX (100h)",
            "Làm Video/Clip Sáng Tạo (100h)",
            "Thiết Kế Cho Game & 3D (100h)"
          ]}
        />
      </div>

      <Footer />
    </div>
  );
}
