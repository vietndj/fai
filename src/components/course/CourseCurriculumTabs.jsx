'use client';

import { useState } from 'react';
import {
  Check,
  CheckCircle2,
  Award,
  Palette,
  Video,
  Box,
  Smartphone,
  Film,
  Gamepad2,
  TrendingUp,
  Search,
  Sparkles
} from 'lucide-react';

function resolveCurriculumIcon(icon, themeColor, size = 26) {
  if (!icon) return null;
  if (typeof icon !== 'string') return icon;
  const key = icon.toLowerCase();
  switch (key) {
    case 'palette':
      return <Palette size={size} style={{ color: themeColor }} />;
    case 'video':
      return <Video size={size} style={{ color: themeColor }} />;
    case 'box':
      return <Box size={size} style={{ color: themeColor }} />;
    case 'smartphone':
      return <Smartphone size={size} style={{ color: themeColor }} />;
    case 'film':
      return <Film size={size} style={{ color: themeColor }} />;
    case 'gamepad2':
    case 'game':
      return <Gamepad2 size={size} style={{ color: themeColor }} />;
    case 'trendingup':
      return <TrendingUp size={size} style={{ color: themeColor }} />;
    case 'search':
      return <Search size={size} style={{ color: themeColor }} />;
    default:
      return <Sparkles size={size} style={{ color: themeColor }} />;
  }
}

export default function CourseCurriculumTabs({
  curriculumType,
  themeColor = '#f37021',
  eyebrow = 'NỘI DUNG ĐÀO TẠO',
  title,
  desc,
  subtitle,
  semesters = [],
  subjects = [],
  certificate,
  targetCareers = [],
  courses = [],
  tracks = [],
  studioTools,
  shortCourses = []
}) {
  const [activeTab, setActiveTab] = useState(0);
  const [activeCourseTab, setActiveCourseTab] = useState(0);

  // Auto-detect archetype if not explicitly passed
  const type = curriculumType || (
    subjects && subjects.length > 0 ? 'subjects' :
    courses && courses.length > 0 ? 'courseModules' :
    tracks && tracks.length > 0 ? 'tracks' :
    shortCourses && shortCourses.length > 0 ? 'shortCourses' :
    'semesters'
  );

  const sectionSubtitle = desc || subtitle;

  // =========================================================================
  // ARCHETYPE 2: SUBJECTS GRID (e.g. Aptech 6-tháng)
  // =========================================================================
  if (type === 'subjects' && subjects && subjects.length > 0) {
    return (
      <>
        {/* Section 1: Subjects Grid (Dark Cyber) */}
        <section className="beau-section" style={{ padding: '100px 0 110px 0' }}>
          <div className="container" data-reveal>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              {eyebrow && (
                <span className="beau-section-eyebrow" style={{ color: themeColor }}>
                  {eyebrow}
                </span>
              )}
              <h2 className="beau-section-title">
                {title || `Danh sách các môn học (${subjects.length} Môn chuẩn quốc tế)`}
              </h2>
              {sectionSubtitle && (
                <p style={{ color: 'rgba(255, 255, 255, 0.75)', maxWidth: '750px', margin: '12px auto 0', fontSize: '1.05rem', lineHeight: '1.7' }}>
                  {sectionSubtitle}
                </p>
              )}
            </div>

            <div
              style={{
                background: 'linear-gradient(135deg, rgba(13, 33, 55, 0.88) 0%, rgba(22, 43, 74, 0.92) 100%)',
                border: `1px solid ${themeColor}4d`,
                borderRadius: '24px',
                padding: '40px 44px',
                boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)'
              }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
                {subjects.map((sub, idx) => (
                  <div
                    key={idx}
                    className="fai-card-glass-dark"
                    style={{
                      padding: '24px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <span style={{ fontSize: '0.78rem', fontWeight: 900, color: themeColor, background: `${themeColor}26`, padding: '4px 10px', borderRadius: '8px' }}>
                          {sub.num}
                        </span>
                        {sub.tag && (
                          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase' }}>
                            {sub.tag}
                          </span>
                        )}
                      </div>
                      <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff', marginBottom: '10px', lineHeight: 1.4 }}>
                        {sub.title}
                      </h3>
                      <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.94rem', lineHeight: '1.65', margin: 0 }}>
                        {sub.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Certificate Card (Light Theme) */}
        {certificate && (
          <section
            className="beau-section"
            style={{
              backgroundColor: '#F8FAFC',
              color: '#0f172a',
              padding: '90px 0 100px 0'
            }}
          >
            <div className="container" data-reveal>
              <div
                style={{
                  background: '#ffffff',
                  border: `1px solid ${themeColor}40`,
                  borderLeft: `6px solid ${themeColor}`,
                  borderRadius: '24px',
                  padding: '48px 50px',
                  boxShadow: '0 15px 40px rgba(0, 0, 0, 0.03)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '40px',
                  flexWrap: 'wrap'
                }}
              >
                <div style={{ flex: '1 1 500px' }}>
                  <span style={{ fontSize: '0.85rem', color: themeColor, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    {certificate.eyebrow || 'BẰNG CẤP & CHỨNG CHỈ QUỐC TẾ'}
                  </span>
                  <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', fontWeight: 800, color: 'var(--secondary)', margin: '10px 0 16px', lineHeight: 1.25, fontFamily: 'var(--font-sans)' }}>
                    {certificate.title || 'Chứng chỉ sau khi hoàn thành khóa học Lập trình Frontend'}
                  </h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <CheckCircle2 size={22} style={{ color: themeColor, flexShrink: 0, marginTop: '2px' }} />
                      <p style={{ color: '#334155', fontSize: '1.05rem', lineHeight: '1.7', margin: 0 }}>
                        {certificate.desc || (
                          <>
                            <strong>CPISM (Certificate of Proficiency in Information Systems Management)</strong> do <strong>Tập đoàn Aptech Ấn Độ</strong> cấp bằng có giá trị toàn cầu.
                          </>
                        )}
                      </p>
                    </div>
                    {certificate.note && (
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                        <CheckCircle2 size={22} style={{ color: themeColor, flexShrink: 0, marginTop: '2px' }} />
                        <p style={{ color: '#334155', fontSize: '1.05rem', lineHeight: '1.7', margin: 0 }}>
                          {certificate.note}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <div
                    style={{
                      background: `${themeColor}14`,
                      border: `2px solid ${themeColor}`,
                      borderRadius: '20px',
                      padding: '24px 36px',
                      textAlign: 'center',
                      boxShadow: `0 10px 30px ${themeColor}26`
                    }}
                  >
                    <Award size={48} style={{ color: themeColor, marginBottom: '8px' }} />
                    <h4 style={{ color: 'var(--secondary)', fontSize: '1.5rem', fontWeight: 900, margin: 0 }}>
                      {certificate.badge || 'CPISM'}
                    </h4>
                    <p style={{ color: '#64748b', fontSize: '0.84rem', margin: '4px 0 0', textTransform: 'uppercase', fontWeight: 700 }}>
                      {certificate.issuer || 'Aptech Worldwide'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Section 3: Target Careers (Dark Cyber) */}
        {targetCareers && targetCareers.length > 0 && (
          <section className="beau-section" style={{ padding: '100px 0 110px 0' }}>
            <div className="container" data-reveal>
              <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                <span className="beau-section-eyebrow" style={{ color: themeColor }}>
                  CƠ HỘI NGHỀ NGHIỆP
                </span>
                <h2 className="beau-section-title">Các công việc có thể đảm nhận sau khóa học</h2>
                <p style={{ color: 'rgba(255, 255, 255, 0.8)', maxWidth: '750px', margin: '16px auto 0', fontSize: '1.05rem', lineHeight: '1.75' }}>
                  Năng lực đáp ứng xuất sắc các yêu cầu tuyển dụng thực tế của doanh nghiệp công nghệ
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
                {targetCareers.map((car, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: `1px solid ${themeColor}33`,
                      borderRadius: '20px',
                      padding: '28px',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff', marginBottom: '8px' }}>
                      {car.title}
                    </h3>
                    <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.94rem', lineHeight: '1.6', margin: 0 }}>
                      {car.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </>
    );
  }

  // =========================================================================
  // ARCHETYPE 3: COURSE MODULE TABS (e.g. Aptech 100-200h)
  // =========================================================================
  if (type === 'courseModules' && courses && courses.length > 0) {
    const currentCourse = courses[activeCourseTab] || courses[0];

    return (
      <section className="beau-section" style={{ padding: '90px 0 110px 0' }}>
        <div className="container" data-reveal>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            {eyebrow && (
              <span className="beau-section-eyebrow" style={{ color: themeColor }}>
                {eyebrow}
              </span>
            )}
            <h2 className="beau-section-title">
              {title || 'Danh mục các khóa học chuyên đề'}
            </h2>
            {sectionSubtitle && (
              <p style={{ color: 'rgba(255, 255, 255, 0.7)', maxWidth: '750px', margin: '12px auto 0', fontSize: '1rem' }}>
                {sectionSubtitle}
              </p>
            )}
          </div>

          {/* Segmented Course Switcher Tabs */}
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
                gridTemplateColumns: `repeat(auto-fit, minmax(${courses.length <= 2 ? '300px' : '240px'}, 1fr))`,
                gap: '14px'
              }}
            >
              {courses.map((c, idx) => {
                const isActive = activeCourseTab === idx;
                return (
                  <button
                    key={c.id || idx}
                    onClick={() => setActiveCourseTab(idx)}
                    type="button"
                    style={{
                      padding: '16px 20px',
                      borderRadius: '16px',
                      border: isActive ? `1px solid ${themeColor}` : '1px solid rgba(255, 255, 255, 0.12)',
                      background: isActive
                        ? `linear-gradient(135deg, ${themeColor} 0%, rgba(13, 33, 55, 0.95) 100%)`
                        : 'rgba(13, 33, 55, 0.85)',
                      color: '#ffffff',
                      cursor: 'pointer',
                      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      textAlign: 'left',
                      boxShadow: isActive ? `0 10px 28px ${themeColor}73` : '0 4px 15px rgba(0,0,0,0.25)',
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)'
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.78rem',
                        fontWeight: 900,
                        color: isActive ? '#ffffff' : themeColor,
                        background: isActive ? 'rgba(0, 0, 0, 0.25)' : `${themeColor}26`,
                        padding: '5px 10px',
                        borderRadius: '10px',
                        flexShrink: 0
                      }}
                    >
                      {c.durationHighlight || (idx === 2 ? '200H' : '100H')}
                    </span>
                    <span
                      style={{
                        fontSize: '0.94rem',
                        fontWeight: isActive ? 800 : 600,
                        lineHeight: '1.35',
                        color: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.9)'
                      }}
                    >
                      {c.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Course Viewport Layout */}
          {currentCourse && (
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
              <div style={{ marginBottom: '28px' }}>
                {currentCourse.badge && (
                  <span
                    style={{
                      display: 'inline-block',
                      padding: '6px 16px',
                      borderRadius: '30px',
                      backgroundColor: themeColor,
                      color: '#ffffff',
                      fontSize: '0.82rem',
                      fontWeight: 900,
                      letterSpacing: '0.08em',
                      marginBottom: '12px',
                      textTransform: 'uppercase'
                    }}
                  >
                    {currentCourse.badge}
                  </span>
                )}
                <h3 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: '#ffffff', margin: 0, lineHeight: 1.3 }}>
                  {currentCourse.title}
                </h3>
                {currentCourse.note && (
                  <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.05rem', lineHeight: '1.7', marginTop: '12px', marginBottom: 0 }}>
                    {currentCourse.note}
                  </p>
                )}
              </div>

              {/* Table of Modules */}
              {currentCourse.modules && currentCourse.modules.length > 0 && (
                <div
                  style={{
                    background: 'linear-gradient(135deg, rgba(13, 33, 55, 0.9) 0%, rgba(22, 43, 74, 0.95) 100%)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.35)'
                  }}
                >
                  <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                      <thead>
                        <tr style={{ background: 'rgba(255, 255, 255, 0.05)', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                          <th style={{ padding: '16px 20px', color: themeColor, fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', width: '70px' }}>STT</th>
                          <th style={{ padding: '16px 20px', color: themeColor, fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Môn học</th>
                          <th style={{ padding: '16px 20px', color: themeColor, fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', width: '120px' }}>Thời lượng</th>
                          <th style={{ padding: '16px 20px', color: themeColor, fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', width: '160px' }}>Vai trò</th>
                          <th style={{ padding: '16px 20px', color: themeColor, fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Nội dung</th>
                        </tr>
                      </thead>
                      <tbody>
                        {currentCourse.modules.map((mod, mIdx) => (
                          <tr
                            key={mIdx}
                            style={{
                              borderBottom: mIdx < currentCourse.modules.length - 1 ? '1px solid rgba(255, 255, 255, 0.06)' : 'none',
                              background: mIdx % 2 === 0 ? 'transparent' : 'rgba(255, 255, 255, 0.02)'
                            }}
                          >
                            <td style={{ padding: '18px 20px', color: '#ffffff', fontWeight: 800, fontSize: '0.92rem' }}>
                              #{mod.stt || mIdx + 1}
                            </td>
                            <td style={{ padding: '18px 20px', color: '#ffffff', fontWeight: 700, fontSize: '1rem' }}>
                              {mod.subject}
                            </td>
                            <td style={{ padding: '18px 20px', color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.94rem', fontWeight: 600 }}>
                              {mod.duration}
                            </td>
                            <td style={{ padding: '18px 20px' }}>
                              <span
                                style={{
                                  display: 'inline-block',
                                  padding: '4px 10px',
                                  borderRadius: '8px',
                                  fontSize: '0.82rem',
                                  fontWeight: 800,
                                  background: `${themeColor}26`,
                                  color: themeColor,
                                  border: `1px solid ${themeColor}4d`
                                }}
                              >
                                {mod.role}
                              </span>
                            </td>
                            <td style={{ padding: '18px 20px', color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.94rem', lineHeight: '1.6' }}>
                              {mod.content}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    );
  }

  // =========================================================================
  // ARCHETYPE 4: TRACK CARDS & STUDIO TOOLS (e.g. Arena 6-18 tháng)
  // =========================================================================
  if (type === 'tracks' && tracks && tracks.length > 0) {
    const defaultTools = [
      { code: 'Ps', name: 'Photoshop', color: '#31a8ff' },
      { code: 'Ai', name: 'Illustrator', color: '#ff9a00' },
      { code: 'Fg', name: 'Figma', color: '#a259ff' },
      { code: 'Pr', name: 'Premiere', color: '#ea77ff' },
      { code: 'Ae', name: 'After Effects', color: '#9999ff' },
      { code: 'My', name: 'Maya', color: '#00d2ff' },
      { code: 'Bl', name: 'Blender', color: '#e87d0d' },
      { code: 'UE', name: 'Unreal Engine', color: '#ffffff' }
    ];

    const tools = studioTools || defaultTools;

    return (
      <>
        {/* Section 1: Tracks Grid (Light Theme) */}
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
              {eyebrow && (
                <span style={{ color: themeColor, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '0.85rem' }}>
                  {eyebrow}
                </span>
              )}
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, color: 'var(--secondary)', lineHeight: '1.2', marginTop: '10px', fontFamily: 'var(--font-sans)', letterSpacing: '-0.02em' }}>
                {title || '3 Chuyên ngành mũi nhọn linh hoạt'}
              </h2>
              {sectionSubtitle && (
                <p style={{ color: '#64748b', maxWidth: '720px', margin: '14px auto 0', fontSize: '1.05rem', lineHeight: '1.7' }}>
                  {sectionSubtitle}
                </p>
              )}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
              {tracks.map((tr, idx) => (
                <div
                  key={idx}
                  className="fai-card-elevated"
                  style={{
                    padding: '40px 32px',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                    <span style={{ background: `${themeColor}26`, color: themeColor, fontWeight: 800, fontSize: '0.82rem', padding: '6px 14px', borderRadius: '20px', textTransform: 'uppercase' }}>
                      {tr.duration}
                    </span>
                    {resolveCurriculumIcon(tr.icon || (idx === 0 ? 'palette' : idx === 1 ? 'video' : 'box'), themeColor)}
                  </div>
                  <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '14px', fontFamily: 'var(--font-sans)' }}>
                    {tr.title}
                  </h3>
                  <p style={{ color: '#64748b', fontSize: '0.98rem', lineHeight: '1.7', marginBottom: '24px', flexGrow: 1 }}>
                    {tr.desc}
                  </p>
                  {tr.skills && tr.skills.length > 0 && (
                    <div style={{ borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '20px' }}>
                      <span style={{ fontSize: '0.82rem', fontWeight: 800, color: themeColor, textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>
                        Kỹ năng &amp; Công cụ
                      </span>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {tr.skills.map((sk, sIdx) => (
                          <li key={sIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}>
                            <Check size={16} style={{ color: themeColor, flexShrink: 0 }} />
                            <span>{sk}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: Studio Tools (Dark Cyber Theme) */}
        <section className="beau-section" style={{ padding: '100px 0 110px 0' }}>
          <div className="container" data-reveal>
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
              <span className="beau-section-eyebrow" style={{ color: themeColor }}>
                STUDIO TOOLS
              </span>
              <h2 className="beau-section-title" style={{ marginBottom: '10px' }}>
                Làm chủ công cụ tiêu chuẩn ngành
              </h2>
            </div>

            <div className="beau-tech-grid">
              {tools.map((t, idx) => (
                <div key={idx} className="beau-tech-item">
                  <span className="beau-tech-icon" style={{ color: t.color || themeColor }}>
                    {t.code}
                  </span>
                  <span className="beau-tech-name">{t.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }

  // =========================================================================
  // ARCHETYPE 5: SHORT COURSES (e.g. Arena 100h, Skillking 100h)
  // =========================================================================
  if (type === 'shortCourses' && shortCourses && shortCourses.length > 0) {
    return (
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
            {eyebrow && (
              <span style={{ color: themeColor, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '0.85rem' }}>
                {eyebrow}
              </span>
            )}
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, color: 'var(--secondary)', lineHeight: '1.25', marginTop: '10px', fontFamily: 'var(--font-sans)', letterSpacing: '-0.02em', textWrap: 'balance' }}>
              {title || 'Chương trình học ngắn hạn thực chiến'}
            </h2>
            {sectionSubtitle && (
              <p style={{ color: '#64748b', maxWidth: '680px', margin: '14px auto 0', fontSize: '1.05rem', lineHeight: '1.75', textWrap: 'balance' }}>
                {sectionSubtitle}
              </p>
            )}
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(auto-fit, minmax(${shortCourses.length <= 3 ? '300px' : '260px'}, 1fr))`,
              gap: '28px',
              alignItems: 'stretch'
            }}
          >
            {shortCourses.map((c, idx) => {
              const itemsList = c.subjects || c.skills || [];
              const renderedIcon = resolveCurriculumIcon(c.icon || (idx === 0 ? 'palette' : idx === 1 ? 'smartphone' : idx === 2 ? 'film' : 'gamepad2'), themeColor);

              return (
                <div
                  key={idx}
                  className="fai-card-elevated"
                  style={{
                    padding: '32px 26px',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%'
                  }}
                >
                  {/* Header: Badge & Icon */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                    <span style={{ background: `${themeColor}20`, color: themeColor, fontWeight: 800, fontSize: '0.82rem', padding: '6px 14px', borderRadius: '20px', textTransform: 'uppercase' }}>
                      {c.badge || `Khoá ${idx + 1}`}
                    </span>
                    {renderedIcon}
                  </div>

                  {/* Title */}
                  <h3
                    style={{
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
                    }}
                  >
                    {c.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      color: '#64748b',
                      fontSize: '0.92rem',
                      lineHeight: '1.65',
                      marginBottom: '20px',
                      minHeight: '4.4rem',
                      textWrap: 'pretty'
                    }}
                  >
                    {c.desc}
                  </p>

                  {/* Section Divider & List */}
                  {itemsList.length > 0 && (
                    <div style={{ borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                      <span style={{ fontSize: '0.82rem', fontWeight: 800, color: themeColor, textTransform: 'uppercase', display: 'block', marginBottom: '14px', letterSpacing: '0.04em' }}>
                        {c.subjects ? 'Nội dung môn học' : 'Kỹ năng & Môn học'}
                      </span>

                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '22px', minHeight: '135px' }}>
                        {itemsList.map((item, sIdx) => (
                          <li key={sIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.88rem', color: '#334155', lineHeight: '1.45' }}>
                            <Check size={16} style={{ color: themeColor, flexShrink: 0, marginTop: '2px' }} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Output Note */}
                  {c.output && (
                    <div style={{ borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '16px', marginTop: 'auto' }}>
                      <p style={{ color: '#475569', fontSize: '0.84rem', margin: 0, lineHeight: '1.5' }}>
                        <strong style={{ color: 'var(--secondary)' }}>Đầu ra: </strong>
                        {c.output}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  // =========================================================================
  // ARCHETYPE 1: SEMESTER TABS (Default, e.g. ACCP, 1-nam, AMSP, Skillking 18T, Chip Design, AI Agent)
  // =========================================================================
  if (!semesters || semesters.length === 0) return null;

  return (
    <section className="beau-section" style={{ padding: '100px 0 110px 0' }}>
      <div className="container" data-reveal>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          {eyebrow && (
            <span className="beau-section-eyebrow" style={{ color: themeColor }}>
              {eyebrow}
            </span>
          )}
          <h2 className="beau-section-title">
            {title || `Chi tiết chương trình học (${semesters.length} học kỳ)`}
          </h2>
          {sectionSubtitle && (
            <p style={{ color: 'rgba(255, 255, 255, 0.75)', maxWidth: '720px', margin: '12px auto 0', fontSize: '1.05rem', lineHeight: '1.7' }}>
              {sectionSubtitle}
            </p>
          )}
        </div>

        {/* Segmented Semester Tabs Switcher */}
        <div
          style={{
            position: 'sticky',
            top: '80px',
            zIndex: 90,
            padding: '12px 0',
            marginBottom: '36px',
            maxWidth: semesters.length <= 2 ? '800px' : '1100px',
            margin: '0 auto 36px'
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(auto-fit, minmax(${semesters.length <= 2 ? '260px' : '210px'}, 1fr))`,
              gap: '14px'
            }}
          >
            {semesters.map((sem, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  type="button"
                  style={{
                    padding: '14px 18px',
                    borderRadius: '16px',
                    border: isActive ? `1px solid ${themeColor}` : '1px solid rgba(255, 255, 255, 0.12)',
                    background: isActive
                      ? `linear-gradient(135deg, ${themeColor} 0%, rgba(13, 33, 55, 0.95) 100%)`
                      : 'rgba(13, 33, 55, 0.75)',
                    color: '#ffffff',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    textAlign: 'left',
                    boxShadow: isActive ? `0 10px 28px ${themeColor}66` : '0 4px 15px rgba(0,0,0,0.2)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)'
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: 900,
                      color: isActive ? '#ffffff' : themeColor,
                      background: isActive ? 'rgba(0, 0, 0, 0.3)' : `${themeColor}26`,
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

        {/* Active Tab Detailed Content Card */}
        {semesters[activeTab] && (
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(13, 33, 55, 0.88) 0%, rgba(22, 43, 74, 0.92) 100%)',
              border: `1px solid ${themeColor}4d`,
              borderRadius: '24px',
              padding: '40px 44px',
              boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              maxWidth: '1100px',
              margin: '0 auto'
            }}
          >
            <div style={{ marginBottom: '24px' }}>
              <span
                style={{
                  fontSize: '0.85rem',
                  color: themeColor,
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em'
                }}
              >
                {semesters[activeTab].num}
              </span>
              <h3
                style={{
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                  fontWeight: 800,
                  color: '#ffffff',
                  margin: '6px 0 4px',
                  fontFamily: 'var(--font-sans)'
                }}
              >
                {semesters[activeTab].fullTitle || semesters[activeTab].title}
              </h3>
              {(semesters[activeTab].subTitle || semesters[activeTab].subtitle) && (
                <h4 style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.7)', fontWeight: 500, margin: 0 }}>
                  ({semesters[activeTab].subTitle || semesters[activeTab].subtitle})
                </h4>
              )}
            </div>

            {semesters[activeTab].desc && (
              <p
                style={{
                  color: 'rgba(255,255,255,0.88)',
                  fontSize: '1.05rem',
                  lineHeight: '1.75',
                  marginBottom: '36px',
                  paddingBottom: '24px',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                {semesters[activeTab].desc}
              </p>
            )}

            {/* Optional Detailed Subjects Grid (e.g. Aptech 1-năm) */}
            {semesters[activeTab].subjects && semesters[activeTab].subjects.length > 0 && (
              <div
                style={{
                  marginBottom: '36px',
                  paddingBottom: '28px',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <h4
                  style={{
                    fontSize: '1rem',
                    color: themeColor,
                    fontWeight: 800,
                    margin: '0 0 20px',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase'
                  }}
                >
                  Danh sách các môn học chi tiết:
                </h4>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '14px'
                  }}
                >
                  {semesters[activeTab].subjects.map((sub, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        background: 'rgba(255,255,255,0.03)',
                        padding: '12px 16px',
                        borderRadius: '12px',
                        border: '1px solid rgba(255,255,255,0.06)'
                      }}
                    >
                      <Check size={18} style={{ color: themeColor, flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ color: '#ffffff', fontSize: '0.94rem', fontWeight: 500 }}>{sub}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 2 to 3 Columns Grid: Core Stack, AI Tools, Careers */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '36px'
              }}
            >
              {/* Column 1: Core Stack */}
              {semesters[activeTab].coreStack && (
                <div>
                  <h4
                    style={{
                      fontSize: '0.95rem',
                      color: themeColor,
                      fontWeight: 800,
                      margin: '0 0 16px',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase'
                    }}
                  >
                    {semesters[activeTab].columnTitles?.col1 || 'Công nghệ lõi (Core Stack)'}
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {semesters[activeTab].coreStack.map((item, idx) => (
                      <li
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '10px',
                          color: 'rgba(255,255,255,0.95)',
                          fontSize: '0.96rem',
                          lineHeight: '1.5'
                        }}
                      >
                        <Check size={16} style={{ color: themeColor, flexShrink: 0, marginTop: '3px' }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Column 2: AI & Support Tools (Optional) */}
              {semesters[activeTab].aiTools && semesters[activeTab].aiTools.length > 0 && (
                <div>
                  <h4
                    style={{
                      fontSize: '0.95rem',
                      color: themeColor,
                      fontWeight: 800,
                      margin: '0 0 16px',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase'
                    }}
                  >
                    {semesters[activeTab].columnTitles?.col2 || 'Công cụ AI & Hỗ trợ'}
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {semesters[activeTab].aiTools.map((item, idx) => (
                      <li
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '10px',
                          color: 'rgba(255,255,255,0.95)',
                          fontSize: '0.96rem',
                          lineHeight: '1.5'
                        }}
                      >
                        <Check size={16} style={{ color: themeColor, flexShrink: 0, marginTop: '3px' }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Column 3: Career Opportunities */}
              {semesters[activeTab].careers && (
                <div>
                  <h4
                    style={{
                      fontSize: '0.95rem',
                      color: themeColor,
                      fontWeight: 800,
                      margin: '0 0 16px',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase'
                    }}
                  >
                    {semesters[activeTab].columnTitles?.col3 || 'Cơ hội nghề nghiệp'}
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {semesters[activeTab].careers.map((item, idx) => (
                      <li
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '10px',
                          color: 'rgba(255,255,255,0.95)',
                          fontSize: '0.96rem',
                          lineHeight: '1.5'
                        }}
                      >
                        <Check size={16} style={{ color: themeColor, flexShrink: 0, marginTop: '3px' }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
