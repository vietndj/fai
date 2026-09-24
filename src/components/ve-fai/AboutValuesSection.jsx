'use client';

import ScrollTypewriter from '@/components/ScrollTypewriter';

const fourPillars = [
  {
    letter: 'I',
    title: 'Industry Relevant',
    desc: 'Gắn liền với nhu cầu thực tiễn của doanh nghiệp và ngành công nghiệp'
  },
  {
    letter: 'G',
    title: 'Global',
    desc: 'Mang tính quốc tế, hội nhập và chuẩn mực đào tạo toàn cầu'
  },
  {
    letter: 'S',
    title: 'Smart Education',
    desc: 'Giáo dục thông minh dựa trên các công nghệ đào tạo tiên tiến nhất'
  },
  {
    letter: 'M',
    title: 'Mega',
    desc: 'Hệ thống giáo dục Mega quy mô rộng lớn, đa ngành và đa nền tảng'
  }
];

export default function AboutValuesSection() {
  return (
    <section 
      id="su-menh"
      className="about-values-section" 
      style={{ 
        padding: '120px 0 140px 0', 
        backgroundColor: '#F8FAFC', 
        color: '#0f172a',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Main Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '860px', margin: '0 auto 72px auto' }}>
          <span className="fai-section-eyebrow">
            TỔ CHỨC GIÁO DỤC FPT
          </span>
          <h2 className="fai-section-heading">
            <ScrollTypewriter text="Sứ Mệnh & Tầm Nhìn Chiến Lược" speed={12} />
          </h2>
          <p className="fai-section-description" style={{ margin: '16px auto 0' }}>
            Kim chỉ nam định hình chất lượng đào tạo, nuôi dưỡng khát vọng vươn tầm thế giới và phát triển bền vững cùng cộng đồng.
          </p>
        </div>

        {/* 3 Top Columns: Sứ mệnh, Triết lí, Văn hoá */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '48px',
            marginBottom: '80px'
          }}
        >
          {/* Sứ mệnh Column */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ marginBottom: '14px' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#f37021', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                SỨ MỆNH
              </span>
            </div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#f37021', marginBottom: '14px', fontFamily: 'var(--font-sans)' }}>
              Sứ mệnh FPT Education
            </h3>
            <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: '1.8', margin: 0 }}>
              “Cung cấp năng lực cạnh tranh toàn cầu cho đông đảo người học, góp phần mở mang bờ cõi trí tuệ đất nước.”
            </p>
          </div>

          {/* Triết lí giáo dục Column */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ marginBottom: '14px' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#f37021', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                TRIẾT LÍ GIÁO DỤC
              </span>
            </div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#f37021', marginBottom: '14px', fontFamily: 'var(--font-sans)' }}>
              Triết lí giáo dục
            </h3>
            <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: '1.8', margin: 0 }}>
              “Giáo dục đào tạo là tổ chức và quản trị việc tự học của người học.”
            </p>
          </div>

          {/* Văn hoá Column */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ marginBottom: '14px' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#f37021', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                VĂN HOÁ FPT
              </span>
            </div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#f37021', marginBottom: '14px', fontFamily: 'var(--font-sans)' }}>
              Văn hoá
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li style={{ fontSize: '0.96rem', color: '#475569', lineHeight: '1.6', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span style={{ color: '#f37021', fontWeight: 800, fontSize: '1.1rem', lineHeight: 1 }}>•</span>
                <span><strong>Tôn đồng đổi chí gương sáng:</strong> (Tôn trọng, Đồng đội, Đổi mới, Chí công, Gương mẫu, Sáng tạo)</span>
              </li>
              <li style={{ fontSize: '0.96rem', color: '#475569', lineHeight: '1.6', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span style={{ color: '#f37021', fontWeight: 800, fontSize: '1.1rem', lineHeight: 1 }}>•</span>
                <span><strong>Học thật, thi thật, thành công thật</strong></span>
              </li>
              <li style={{ fontSize: '0.96rem', color: '#475569', lineHeight: '1.6', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span style={{ color: '#f37021', fontWeight: 800, fontSize: '1.1rem', lineHeight: 1 }}>•</span>
                <span><strong>Làm khác để làm tốt</strong></span>
              </li>
            </ul>
          </div>
        </div>

        {/* MINIMALIST FLAT VISION & 4 PILLARS */}
        <div 
          style={{ 
            paddingTop: '72px', 
            borderTop: '1px solid rgba(15, 23, 42, 0.08)',
            textAlign: 'center'
          }}
        >
          {/* Pure Editorial Vision Statement */}
          <div style={{ maxWidth: '960px', margin: '0 auto 64px auto' }}>
            <span className="fai-section-eyebrow" style={{ marginBottom: '16px' }}>
              TẦM NHÌN FPT EDUCATION
            </span>
            <p style={{ 
              fontSize: 'clamp(1.5rem, 2.8vw, 2.15rem)', 
              fontWeight: 700, 
              color: 'var(--secondary)', 
              lineHeight: '1.5', 
              margin: 0,
              fontFamily: 'var(--font-sans)',
              letterSpacing: '-0.02em'
            }}>
              “Trở thành một hệ thống giáo dục Mega mang tính quốc tế, đáp ứng nhu cầu của xã hội và dựa trên các công nghệ đào tạo tiên tiến nhất.”
            </p>
          </div>

          {/* 4 Flat Pillars Grid */}
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
              gap: '40px',
              textAlign: 'left'
            }}
          >
            {fourPillars.map((pillar, idx) => (
              <div key={idx} style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#f37021', lineHeight: 1, marginBottom: '14px', fontFamily: 'var(--font-sans)' }}>
                  {pillar.letter}
                </div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#f37021', margin: '0 0 10px 0', fontFamily: 'var(--font-sans)' }}>
                  {pillar.title}
                </h4>
                <p style={{ fontSize: '0.96rem', color: '#64748b', lineHeight: '1.65', margin: 0 }}>
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
