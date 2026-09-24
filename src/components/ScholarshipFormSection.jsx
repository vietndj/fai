'use client';

import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

import { BRAND_FORM_PRESETS as BRAND_PRESETS } from '@/data/scholarships';
import { EXTERNAL_LINKS, ADMISSION_CAMPUSES } from '@/data/contacts';

function inferBrand(programName = '') {
  const p = programName.toLowerCase();
  if (p.includes('skillking') || p.includes('marketing') || p.includes('digital')) return 'skillking';
  if (p.includes('arena') || p.includes('multimedia') || p.includes('mỹ thuật') || p.includes('thiết kế')) return 'arena';
  if (p.includes('bán dẫn') || p.includes('chip') || p.includes('vi mạch')) return 'chip-design';
  if (p.includes('ai agent') || p.includes('agent')) return 'ai-agent';
  return 'aptech';
}

export default function ScholarshipFormSection({ 
  googleSheetScriptUrl = EXTERNAL_LINKS.leadSubmitScript,
  programName = 'FPT Aptech',
  brand: brandProp,
  headerTitle,
  formTitle,
  formSubtitle,
  badges: badgesProp,
  courseOptions,
  courseLabel,
  campuses: campusesProp,
  themeColor: themeColorProp,
  includeCampus = true
}) {
  const brandKey = brandProp || inferBrand(programName);
  const preset = BRAND_PRESETS[brandKey] || BRAND_PRESETS['aptech'];

  const themeColor = themeColorProp || preset.themeColor;
  const gradientBg = preset.gradientBg;
  const activeBadges = badgesProp || preset.badges;
  const activeHeaderTitle = headerTitle || preset.defaultHeaderTitle;
  const activeFormTitle = formTitle || preset.defaultFormTitle;
  const activeFormSubtitle = formSubtitle || preset.defaultFormSubtitle;
  const campuses = campusesProp || preset.campuses || ADMISSION_CAMPUSES;

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    campus: (campuses && campuses[0]) || 'Hà Nội',
    course: courseOptions && courseOptions.length > 0 ? courseOptions[0] : programName,
    agreeTerms: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMsg('Vui lòng điền đầy đủ các thông tin bắt buộc (*).');
      return;
    }

    if (!formData.agreeTerms) {
      setErrorMsg('Bạn cần đồng ý với Quy định bảo vệ dữ liệu cá nhân.');
      return;
    }

    setErrorMsg('');
    setIsSubmitting(true);

    try {
      if (googleSheetScriptUrl) {
        await fetch(googleSheetScriptUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            timestamp: new Date().toLocaleString('vi-VN'),
            program: programName,
            fullName: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            campus: formData.campus,
            course: formData.course || programName
          }),
        });
      }

      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({ 
          fullName: '', 
          email: '', 
          phone: '', 
          campus: 'Hà Nội', 
          course: courseOptions && courseOptions.length > 0 ? courseOptions[0] : programName, 
          agreeTerms: true 
        });
      }, 600);

    } catch (err) {
      console.error('Error submitting form:', err);
      setIsSubmitting(false);
      setIsSuccess(true);
    }
  };

  return (
    <section 
      className="scholarship-form-section"
      style={{
        position: 'relative',
        background: '#ffffff',
        color: '#0D2137',
        padding: '80px 0 90px 0',
        borderTop: '1px solid rgba(0, 0, 0, 0.06)'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Main Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '54px' }}>
          <h2 
            style={{
              fontSize: 'clamp(1.5rem, 3.2vw, 2.3rem)',
              fontWeight: 900,
              textTransform: 'uppercase',
              color: '#0D2137',
              letterSpacing: '0.02em',
              lineHeight: '1.35',
              maxWidth: '1050px',
              margin: '0 auto',
              whiteSpace: 'pre-line'
            }}
          >
            {activeHeaderTitle.includes('TẠI') ? (
              <>
                {activeHeaderTitle.split('TẠI')[0]}TẠI{' '}
                <span style={{ color: themeColor }}>
                  {activeHeaderTitle.split('TẠI')[1]}
                </span>
              </>
            ) : (
              <span style={{ color: themeColor }}>{activeHeaderTitle}</span>
            )}
          </h2>
        </div>

        {/* 2-Column Content Layout - Top Aligned */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '36px',
            alignItems: 'flex-start',
            maxWidth: '1200px',
            margin: '0 auto'
          }}
        >
          {/* Left Column: Redesigned Horizontal Hero Number Split Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {activeBadges.map((badge, idx) => (
              <div 
                key={idx}
                style={{
                  background: '#ffffff',
                  borderRadius: '20px',
                  padding: '24px 26px',
                  border: '1px solid #e2e8f0',
                  borderLeft: `6px solid ${themeColor}`,
                  boxShadow: '0 6px 25px rgba(0, 0, 0, 0.03)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '22px',
                  transition: 'all 0.3s ease'
                }}
              >
                {/* Left: Hero Number Highlight */}
                <div style={{ flexShrink: 0, textAlign: 'center', minWidth: '95px' }}>
                  <div 
                    style={{ 
                      fontSize: 'clamp(2.2rem, 3.2vw, 3rem)', 
                      fontWeight: 900, 
                      color: themeColor, 
                      lineHeight: '1',
                      fontFamily: 'var(--font-sans)',
                      letterSpacing: '-0.02em'
                    }}
                  >
                    {badge.value}
                  </div>
                  <div 
                    style={{ 
                      fontSize: '0.8rem', 
                      fontWeight: 800, 
                      color: '#64748b', 
                      textTransform: 'uppercase', 
                      letterSpacing: '0.08em', 
                      marginTop: '4px' 
                    }}
                  >
                    {badge.unit}
                  </div>
                </div>

                {/* Vertical Divider Line */}
                <div 
                  style={{ 
                    width: '1px', 
                    height: '60px', 
                    background: 'rgba(0, 0, 0, 0.08)', 
                    flexShrink: 0 
                  }} 
                />

                {/* Right: Content Details */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h4 
                    style={{ 
                      fontSize: '1rem', 
                      fontWeight: 800, 
                      color: '#0f172a', 
                      margin: '0 0 4px 0', 
                      lineHeight: '1.4',
                      textTransform: 'uppercase' 
                    }}
                  >
                    {badge.title}
                  </h4>
                  
                  {badge.desc && (
                    <p style={{ color: '#64748b', fontSize: '0.86rem', margin: 0, lineHeight: '1.45' }}>
                      {badge.desc}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Form Card - Top Aligned */}
          <div 
            style={{
              background: '#ffffff',
              borderRadius: '24px',
              padding: '36px 32px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 15px 40px rgba(13, 33, 55, 0.06)',
              color: '#1a2332'
            }}
          >
            <h3 
              style={{
                fontSize: '1.3rem',
                fontWeight: 900,
                color: '#0D2137',
                textAlign: 'center',
                textTransform: 'uppercase',
                margin: 0,
                letterSpacing: '0.01em',
                lineHeight: '1.35',
                whiteSpace: 'pre-line'
              }}
            >
              {activeFormTitle}
            </h3>
            <p 
              style={{
                fontSize: '0.95rem',
                color: '#64748b',
                fontStyle: 'italic',
                textAlign: 'center',
                marginTop: '6px',
                marginBottom: '24px'
              }}
            >
              {activeFormSubtitle}
            </p>

            {isSuccess ? (
              <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                <CheckCircle2 size={56} style={{ color: '#16a34a', margin: '0 auto 16px' }} />
                <h4 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0D2137' }}>Đăng ký thành công!</h4>
                <p style={{ color: '#475569', fontSize: '0.95rem', marginTop: '8px', lineHeight: '1.6' }}>
                  Cảm ơn bạn đã đăng ký. Đội ngũ tư vấn tuyển sinh <strong>{programName}</strong> sẽ liên hệ với bạn trong thời gian sớm nhất để hỗ trợ tư vấn chi tiết!
                </p>
                <button
                  type="button"
                  onClick={() => setIsSuccess(false)}
                  style={{
                    marginTop: '20px',
                    padding: '12px 28px',
                    background: themeColor,
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '24px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    boxShadow: `0 8px 20px ${themeColor}40`
                  }}
                >
                  Đăng ký phản hồi mới
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {errorMsg && (
                  <div style={{ background: '#fef2f2', border: '1px solid #fca5a5', color: '#991b1b', padding: '10px 14px', borderRadius: '10px', fontSize: '0.85rem' }}>
                    {errorMsg}
                  </div>
                )}

                <div>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Họ và tên *"
                    value={formData.fullName}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      borderRadius: '12px',
                      border: '1px solid #cbd5e1',
                      fontSize: '0.95rem',
                      outline: 'none',
                      color: '#0f172a',
                      background: '#f8fafc'
                    }}
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Số điện thoại *"
                    value={formData.phone}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      borderRadius: '12px',
                      border: '1px solid #cbd5e1',
                      fontSize: '0.95rem',
                      outline: 'none',
                      color: '#0f172a',
                      background: '#f8fafc'
                    }}
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    value={formData.email}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      borderRadius: '12px',
                      border: '1px solid #cbd5e1',
                      fontSize: '0.95rem',
                      outline: 'none',
                      color: '#0f172a',
                      background: '#f8fafc'
                    }}
                  />
                </div>

                {/* Campus Selection */}
                {includeCampus && campuses && campuses.length >= 1 && (
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#475569', marginBottom: '8px' }}>
                      Cơ sở:
                    </label>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '10px' }}>
                      {campuses.map((c, cIdx) => (
                        <label 
                          key={cIdx} 
                          style={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: '6px', 
                            background: formData.campus === c ? `${themeColor}12` : '#f8fafc', 
                            padding: '10px 12px', 
                            borderRadius: '10px', 
                            border: formData.campus === c ? `1.5px solid ${themeColor}` : '1px solid #cbd5e1', 
                            cursor: 'pointer',
                            transition: 'all 0.2s ease'
                          }}
                        >
                          <input 
                            type="radio" 
                            name="campus" 
                            value={c} 
                            onChange={handleChange} 
                            checked={formData.campus === c} 
                            style={{ accentColor: themeColor, width: '15px', height: '15px' }} 
                          />
                          <span style={{ fontSize: '0.88rem', color: formData.campus === c ? '#0f172a' : '#475569', fontWeight: formData.campus === c ? 700 : 500 }}>
                            {c}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {/* Optional Course Selection (if multiple options available) */}
                {courseOptions && courseOptions.length > 0 && (
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#475569', marginBottom: '8px' }}>
                      {courseLabel || 'Bạn đang quan tâm đến chương trình nào tại Viện đào tạo Quốc tế FPT'}
                    </label>
                    <select 
                      name="course" 
                      value={formData.course} 
                      onChange={handleChange} 
                      style={{ 
                        width: '100%', 
                        padding: '14px 18px', 
                        borderRadius: '12px', 
                        border: '1px solid #cbd5e1', 
                        fontSize: '0.95rem', 
                        outline: 'none', 
                        color: '#0f172a', 
                        background: '#f8fafc' 
                      }}
                    >
                      {courseOptions.map((opt, oIdx) => (
                        <option key={oIdx} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                )}

                {/* Privacy Terms Agreement */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginTop: '4px' }}>
                  <input
                    type="checkbox"
                    id="agreeTerms"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                    style={{ marginTop: '3px', cursor: 'pointer', width: '16px', height: '16px', accentColor: themeColor }}
                  />
                  <label htmlFor="agreeTerms" style={{ fontSize: '0.86rem', color: '#334155', cursor: 'pointer', lineHeight: '1.4' }}>
                    Đồng ý với Quy định bảo vệ dữ liệu cá nhân
                  </label>
                </div>

                <p style={{ fontSize: '0.76rem', color: '#64748b', lineHeight: '1.5', fontStyle: 'italic', margin: 0 }}>
                  Đồng ý để dữ liệu cá nhân của Anh/Chị được thu thập trên trang này, được xử lý và lưu trữ bởi Tổ chức giáo dục FPT cho mục đích và theo điều kiện đã được công bố tại Quy định bảo vệ dữ liệu cá nhân của Tổ chức giáo dục FPT{' '}
                  <a href={EXTERNAL_LINKS.privacyPolicy} target="_blank" rel="noopener noreferrer" style={{ color: themeColor, textDecoration: 'underline' }}>
                    tại đây
                  </a>.
                </p>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    marginTop: '8px',
                    width: '100%',
                    padding: '16px',
                    borderRadius: '30px',
                    background: gradientBg,
                    color: preset.btnTextColor || '#ffffff',
                    fontSize: '1.05rem',
                    fontWeight: 800,
                    border: 'none',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    boxShadow: `0 8px 25px ${themeColor}66`,
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px'
                  }}
                >
                  {isSubmitting ? (
                    'Đang gửi thông tin...'
                  ) : (
                    <>
                      Đăng ký nhận tư vấn &amp; học bổng
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
