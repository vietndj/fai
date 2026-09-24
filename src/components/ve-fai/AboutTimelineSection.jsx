'use client';

import { useState } from 'react';
import ScrollTypewriter from '@/components/ScrollTypewriter';

const historyTimeline = [
  {
    year: '1999',
    subTitle: 'FPT Aptech',
    title: 'Thành lập FPT Aptech',
    desc: 'Là đơn vị sáng lập Aptech Việt Nam từ năm 1999, chương trình đào tạo Lập trình viên quốc tế FPT Aptech sở hữu 27 năm kinh nghiệm đào tạo theo chuẩn quốc tế, trở thành lựa chọn uy tín của người học và doanh nghiệp. Chương trình đào tạo tại FPT Aptech kết hợp giáo trình lập trình viên quốc tế ACCP Aptech với đào tạo thực tiễn tại doanh nghiệp FPT, giúp sinh viên vững chuyên môn, làm đúng nghề. FPT Aptech hiện là thành viên của mạng lưới hơn 3.200 trung tâm APTECH Worldwide tại 52 quốc gia.'
  },
  {
    year: '2004',
    subTitle: 'FPT Arena',
    title: 'Tiên phong khái niệm về Multimedia tại Việt Nam',
    desc: 'FPT Arena Multimedia là đơn vị tiên phong đưa và định hình khái niệm Multimedia – Mỹ thuật đa phương tiện tại Việt Nam. Trải qua hơn 22 năm phát triển, FPT Arena kế thừa văn hóa giáo dục của Tổ chức Giáo dục FPT và chuẩn đào tạo quốc tế của Tập đoàn Aptech (Ấn Độ), kiên định đào tạo gắn với thực tiễn, xây dựng đội ngũ giảng viên giàu kinh nghiệm và mạng lưới hợp tác quốc tế, góp phần hình thành thế hệ nhân lực sáng tạo cho ngành công nghiệp nội dung số Việt Nam.'
  },
  {
    year: '2018',
    subTitle: 'FPT Skillking',
    title: 'Bệ phóng Digital Marketing số toàn diện',
    desc: 'Chương trình đào tạo Digital Marketing FPT Skillking chính thức ra mắt vào năm 2018, là hệ thống đào tạo chuyên sâu về Digital Marketing đầu tiên tại Việt Nam, cung cấp chương trình Full-Stack Digital Marketing theo chuẩn quốc tế, góp phần đào tạo nguồn nhân lực chất lượng cao cho doanh nghiệp trong và ngoài nước.'
  },
  {
    year: '2025',
    subTitle: 'Vi mạch bán dẫn',
    title: 'Bước chân vào kỷ nguyên bán dẫn',
    desc: 'FAI tiếp tục khẳng định vai trò tiên phong khi mở rộng đào tạo Thiết kế vi mạch bán dẫn FPT Jetking, một trong những ngành công nghiệp lõi của kỷ nguyên công nghệ. Sự ra mắt chương trình đào tạo này không chỉ mở ra hướng đi mới mà còn đánh dấu bước tiến quan trọng trong chiến lược phát triển nhân lực bán dẫn tại Việt Nam.'
  },
  {
    year: '2025',
    subTitle: 'AI & Tự động hóa',
    title: 'Dẫn lối công nghệ mũi nhọn & tự động hóa',
    desc: 'Năm 2025, Chương trình AI Agent – FPT Jetking chính thức triển khai, kết hợp năng lực công nghệ của Tập đoàn FPT và kinh nghiệm đào tạo quốc tế của Tập đoàn Jetking (Ấn Độ), hướng tới đào tạo nhân lực làm chủ Trí tuệ Nhân tạo và tự động hóa trong kỷ nguyên số.'
  }
];

export default function AboutTimelineSection() {
  const [activeTimelineIdx, setActiveTimelineIdx] = useState(0);

  return (
    <section 
      id="hanh-trinh"
      className="about-history-section" 
      style={{ 
        padding: '100px 0 120px 0', 
        backgroundColor: '#070a10', 
        color: '#ffffff',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Subtle tech grid background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(rgba(232, 116, 30, 0.06) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 60px auto' }}>
          <span className="fai-section-eyebrow">
            Hành trình phát triển
          </span>
          <h2 className="fai-section-heading-light">
            <ScrollTypewriter text="Những dấu ấn tiên phong" />
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '1.02rem', lineHeight: '1.75', marginTop: '15px' }}>
            Hơn 27 năm kiên định tiên phong đặt nền móng và định hình đào tạo công nghệ, mỹ thuật đa phương tiện &amp; kỹ năng thế hệ mới tại Việt Nam.
          </p>
        </div>

        {/* 2-Column Vertical Layout: Left = Vertical Rail, Right = Milestone Card */}
        <div 
          className="vertical-timeline-layout"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '40px',
            alignItems: 'stretch'
          }}
        >
          {/* Left Column: Vertical Timeline Rail */}
          <div 
            style={{
              gridColumn: 'span 4',
              position: 'relative',
              paddingLeft: '30px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '16px'
            }}
            className="vertical-timeline-rail"
          >
            {/* Vertical Connecting Line */}
            <div 
              style={{
                position: 'absolute',
                top: '20px',
                bottom: '20px',
                left: '12px',
                width: '3px',
                backgroundColor: 'rgba(255, 255, 255, 0.12)',
                borderRadius: '3px',
                zIndex: 0
              }}
            >
              {/* Active Orange Progress Height */}
              <div 
                style={{
                  width: '100%',
                  height: `${(activeTimelineIdx / (historyTimeline.length - 1)) * 100}%`,
                  background: 'linear-gradient(180deg, var(--primary) 0%, #ff9e42 100%)',
                  borderRadius: '3px',
                  boxShadow: '0 0 12px var(--primary)',
                  transition: 'height 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              />
            </div>

            {/* Vertical Nodes */}
            {historyTimeline.map((item, idx) => {
              const isActive = idx === activeTimelineIdx;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveTimelineIdx(idx)}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    position: 'relative',
                    zIndex: 1,
                    textAlign: 'left',
                    outline: 'none',
                    width: '100%'
                  }}
                >
                  {/* Circle Indicator on the line */}
                  <div 
                    style={{
                      width: isActive ? '24px' : '18px',
                      height: isActive ? '24px' : '18px',
                      borderRadius: '50%',
                      backgroundColor: isActive ? 'var(--primary)' : 'rgba(13, 29, 48, 0.9)',
                      border: isActive ? '3px solid #ffffff' : '2px solid rgba(255, 255, 255, 0.3)',
                      boxShadow: isActive ? '0 0 18px rgba(232, 116, 30, 0.9), 0 0 30px var(--primary)' : 'none',
                      flexShrink: 0,
                      transform: 'translateX(-22px)',
                      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {isActive && (
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#ffffff' }} />
                    )}
                  </div>

                  {/* Year & Subtitle Card */}
                  <div 
                    style={{
                      flex: 1,
                      padding: '14px 20px',
                      borderRadius: '16px',
                      backgroundColor: isActive ? 'rgba(232, 116, 30, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                      border: isActive ? '1.5px solid var(--primary)' : '1px solid rgba(255, 255, 255, 0.08)',
                      boxShadow: isActive ? '0 8px 25px rgba(232, 116, 30, 0.25)' : 'none',
                      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px'
                    }}
                  >
                    <span 
                      style={{
                        fontSize: '1.25rem',
                        fontWeight: 900,
                        color: isActive ? 'var(--primary)' : '#ffffff',
                        letterSpacing: '0.02em',
                        fontFamily: 'var(--font-sans)'
                      }}
                    >
                      {item.year}
                    </span>
                    <span 
                      style={{
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        color: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.55)',
                        lineHeight: '1.3'
                      }}
                    >
                      {item.subTitle}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Milestone Detail Card */}
          <div 
            style={{
              gridColumn: 'span 8',
              backgroundColor: 'rgba(13, 29, 48, 0.65)',
              border: '1px solid rgba(232, 116, 30, 0.25)',
              borderRadius: '24px',
              padding: '48px',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4), 0 0 30px rgba(232, 116, 30, 0.05)',
              position: 'relative',
              transition: 'all 0.35s ease',
              minHeight: '380px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              backdropFilter: 'blur(12px)'
            }}
            className="vertical-timeline-card"
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <span style={{ 
                    fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', 
                    fontWeight: 900, 
                    color: 'var(--primary)', 
                    fontFamily: 'var(--font-sans)',
                    letterSpacing: '-0.02em'
                  }}>
                    Cột mốc {historyTimeline[activeTimelineIdx].year}
                  </span>
                  <span style={{
                    fontSize: '0.85rem',
                    fontWeight: 800,
                    padding: '4px 12px',
                    borderRadius: '20px',
                    backgroundColor: 'rgba(232, 116, 30, 0.15)',
                    color: 'var(--primary)',
                    border: '1px solid rgba(232, 116, 30, 0.3)',
                    textTransform: 'uppercase'
                  }}>
                    {historyTimeline[activeTimelineIdx].subTitle}
                  </span>
                </div>

                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'rgba(255, 255, 255, 0.5)' }}>
                  Cột mốc {activeTimelineIdx + 1} / {historyTimeline.length}
                </span>
              </div>

              <h3 style={{ 
                fontSize: 'clamp(1.4rem, 2.8vw, 1.9rem)', 
                fontWeight: 800, 
                color: '#ffffff', 
                marginBottom: '20px', 
                lineHeight: '1.35',
                fontFamily: 'var(--font-sans)',
                letterSpacing: '-0.01em'
              }}>
                {historyTimeline[activeTimelineIdx].title}
              </h3>

              <p style={{ 
                fontSize: '1.05rem', 
                color: 'rgba(255, 255, 255, 0.85)', 
                lineHeight: '1.85', 
                margin: 0,
                whiteSpace: 'pre-line'
              }}>
                {historyTimeline[activeTimelineIdx].desc}
              </p>
            </div>

            {/* Navigation Controls */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '40px', paddingTop: '24px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <button
                type="button"
                onClick={() => setActiveTimelineIdx(prev => Math.max(0, prev - 1))}
                disabled={activeTimelineIdx === 0}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'none',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '12px',
                  padding: '12px 24px',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  color: activeTimelineIdx === 0 ? 'rgba(255, 255, 255, 0.25)' : '#ffffff',
                  cursor: activeTimelineIdx === 0 ? 'not-allowed' : 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                ← Cột mốc trước
              </button>

              <button
                type="button"
                onClick={() => setActiveTimelineIdx(prev => Math.min(historyTimeline.length - 1, prev + 1))}
                disabled={activeTimelineIdx === historyTimeline.length - 1}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: activeTimelineIdx === historyTimeline.length - 1 ? 'rgba(255, 255, 255, 0.1)' : 'var(--primary)',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '12px',
                  padding: '12px 24px',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  cursor: activeTimelineIdx === historyTimeline.length - 1 ? 'not-allowed' : 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                Cột mốc tiếp theo →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
