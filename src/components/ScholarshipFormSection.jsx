'use client';

import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

const BRAND_PRESETS = {
  'skillking': {
    themeColor: '#09529c',
    accentColor: '#0284c7',
    gradientBg: 'linear-gradient(135deg, #09529c 0%, #0284c7 100%)',
    badgeBg: 'linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 100%)',
    badgeBorder: '#BAE6FD',
    tagBg: '#09529c',
    iconColor: '#0284c7',
    watermarkColor: '#09529c',
    watermarkType: 'marketing',
    defaultHeaderTitle: 'NHẬN THÔNG TIN TƯ VẤN VỀ CHƯƠNG TRÌNH HỌC & HỌC BỔNG 2026 TẠI FPT SKILLKING',
    defaultFormTitle: 'BẠN CÓ MUỐN TRỞ THÀNH CHUYÊN GIA DIGITAL MARKETING?',
    defaultFormSubtitle: 'Đăng ký nhận tư vấn lộ trình học & ưu đãi học bổng 2026',
    campuses: ['Hà Nội', 'TP. Hồ Chí Minh', 'Đà Nẵng', 'Cần Thơ'],
    badges: [
      {
        icon: '🚀',
        title: 'Học bổng "Marketer Tương Lai" lên đến',
        value: '12',
        unit: 'Triệu',
        tags: ['SEO / SEM', 'SOCIAL ADS']
      },
      {
        icon: '🎯',
        title: 'Ưu đãi Chuyển ngành sang Tiếp thị số',
        value: '6',
        unit: 'Triệu',
        tags: ['E-COMMERCE', 'CONTENT AI']
      },
      {
        icon: '⭐',
        title: 'Đặc quyền VIP: Tài khoản Coursera + Udemy',
        value: 'VIP',
        unit: 'Kho học liệu',
        tags: ['AI MARKETING', 'TOOL MIỄN PHÍ']
      }
    ]
  },
  'arena': {
    themeColor: '#e8741e',
    accentColor: '#d97706',
    gradientBg: 'linear-gradient(135deg, #e8741e 0%, #d85d0d 100%)',
    badgeBg: 'linear-gradient(135deg, #FFF6EE 0%, #FFE9D6 100%)',
    badgeBorder: '#FFC299',
    tagBg: '#d85d0d',
    iconColor: '#c8500e',
    watermarkColor: '#e8741e',
    watermarkType: 'design',
    defaultHeaderTitle: 'NHẬN THÔNG TIN TƯ VẤN VỀ CHƯƠNG TRÌNH HỌC & HỌC BỔNG 2026 TẠI FPT ARENA',
    defaultFormTitle: 'BẠN CÓ MUỐN TRỞ THÀNH CHUYÊN GIA MULTIMEDIA?',
    defaultFormSubtitle: 'Đăng ký nhận tư vấn lộ trình Mỹ thuật đa phương tiện Quốc tế',
    campuses: ['Hà Nội', 'TP. Hồ Chí Minh', 'Đà Nẵng', 'Cần Thơ'],
    badges: [
      {
        icon: '🎨',
        title: 'Học bổng "Chạm Sáng Tạo" lên đến',
        value: '15',
        unit: 'Triệu',
        tags: ['2D / 3D DESIGN', 'UI / UX']
      },
      {
        icon: '✨',
        title: 'Ưu đãi Đam mê Nghệ thuật Đa phương tiện',
        value: '8',
        unit: 'Triệu',
        tags: ['3D ANIMATION', 'VFX GAME']
      },
      {
        icon: '🏆',
        title: 'Đặc quyền VIP: Bản quyền Adobe & Portfolio Pro',
        value: 'VIP',
        unit: 'Quốc tế',
        tags: ['ADOBE SUITE', 'MAYA / BLENDER']
      }
    ]
  },
  'chip-design': {
    themeColor: '#dc2626',
    accentColor: '#b91c1c',
    gradientBg: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
    badgeBg: 'linear-gradient(135deg, #FEF2F2 0%, #FEE2E2 100%)',
    badgeBorder: '#FECACA',
    tagBg: '#dc2626',
    iconColor: '#b91c1c',
    watermarkColor: '#dc2626',
    watermarkType: 'chip',
    defaultHeaderTitle: 'NHẬN THÔNG TIN TƯ VẤN VỀ CHƯƠNG TRÌNH HỌC & HỌC BỔNG 2026 TẠI FPT JETKING',
    defaultFormTitle: 'BẠN CÓ MUỐN TRỞ THÀNH KỸ SƯ VI MẠCH BÁN DẪN?',
    defaultFormSubtitle: 'Đăng ký nhận tư vấn lộ trình Thiết kế Vi Mạch Bán Dẫn Quốc Tế',
    campuses: ['Hà Nội', 'TP. Hồ Chí Minh', 'Đà Nẵng', 'Cần Thơ'],
    badges: [
      {
        icon: '⚡',
        title: 'Học bổng "Kỹ Sư Bán Dẫn Tương Lai" lên đến',
        value: '15',
        unit: 'Triệu',
        tags: ['VLSI DESIGN', 'VERILOG HDL']
      },
      {
        icon: '🔬',
        title: 'Quỹ Phát triển Nhân lực Vi mạch Bán dẫn',
        value: '8',
        unit: 'Triệu',
        tags: ['CHIP IC', 'ANALOG / DIGITAL']
      },
      {
        icon: '🏢',
        title: 'Đặc quyền Thực hành LAB EDA chuẩn quốc tế',
        value: 'LAB',
        unit: 'Synopsys & Cadence',
        tags: ['EDA TOOLS', 'CHIP TESTING']
      }
    ]
  },
  'ai-agent': {
    themeColor: '#ea580c',
    accentColor: '#c2410c',
    gradientBg: 'linear-gradient(135deg, #ea580c 0%, #c2410c 100%)',
    badgeBg: 'linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%)',
    badgeBorder: '#FED7AA',
    tagBg: '#ea580c',
    iconColor: '#c2410c',
    watermarkColor: '#ea580c',
    watermarkType: 'ai',
    defaultHeaderTitle: 'NHẬN THÔNG TIN TƯ VẤN VỀ CHƯƠNG TRÌNH HỌC & HỌC BỔNG 2026 TẠI FPT JETKING',
    defaultFormTitle: 'BẠN CÓ MUỐN TRỞ THÀNH KỸ SƯ AI AGENT TIÊN PHONG?',
    defaultFormSubtitle: 'Đăng ký nhận tư vấn lộ trình Lập trình Hệ thống AI Agent',
    campuses: ['Hà Nội', 'TP. Hồ Chí Minh', 'Đà Nẵng', 'Cần Thơ'],
    badges: [
      {
        icon: '🤖',
        title: 'Học bổng "Tiên Phong AI Agent" lên đến',
        value: '14',
        unit: 'Triệu',
        tags: ['LLM AGENTS', 'AGENTIC AI']
      },
      {
        icon: '⚡',
        title: 'Quỹ Tài năng Trí tuệ Nhân tạo Quốc tế',
        value: '8',
        unit: 'Triệu',
        tags: ['PYTHON AI', 'RAG & MCP']
      },
      {
        icon: '🚀',
        title: 'Đặc quyền Thực chiến mô hình Tự hành Doanh nghiệp',
        value: '100%',
        unit: 'Thực chiến',
        tags: ['MULTI-AGENT', 'AUTONOMOUS']
      }
    ]
  },
  'aptech': {
    themeColor: '#f37021',
    accentColor: '#d85d0d',
    gradientBg: 'linear-gradient(135deg, #f37021 0%, #d85d0d 100%)',
    badgeBg: 'linear-gradient(135deg, #FFF6EE 0%, #FFE9D6 100%)',
    badgeBorder: '#FFC299',
    tagBg: '#1a6ed8',
    iconColor: '#c8500e',
    watermarkColor: '#f37021',
    watermarkType: 'code',
    defaultHeaderTitle: 'NHẬN THÔNG TIN TƯ VẤN VỀ CHƯƠNG TRÌNH HỌC & HỌC BỔNG 2026 TẠI FPT APTECH',
    defaultFormTitle: 'BẠN CÓ MUỐN TRỞ THÀNH LẬP TRÌNH VIÊN QUỐC TẾ?',
    defaultFormSubtitle: 'Đăng ký nhận tư vấn lộ trình học & học bổng 2026',
    campuses: ['Hà Nội', 'TP. Hồ Chí Minh', 'Đà Nẵng', 'Cần Thơ'],
    badges: [
      {
        icon: '</>',
        title: 'Học bổng Tài Năng lên đến',
        value: '14',
        unit: 'Triệu',
        tags: ['C++', 'JAVA']
      },
      {
        icon: '</>',
        title: 'Ưu đãi Chuyển ngành lên đến',
        value: '6',
        unit: 'Triệu',
        tags: ['PYTHON', 'DATABASE']
      },
      {
        icon: '</>',
        title: 'Khuyến khích nhập học sớm lên đến',
        value: '10',
        unit: 'Triệu',
        tags: ['FULLSTACK', 'AI POWERED']
      }
    ]
  }
};

function inferBrand(programName = '') {
  const p = programName.toLowerCase();
  if (p.includes('skillking') || p.includes('marketing') || p.includes('digital')) return 'skillking';
  if (p.includes('arena') || p.includes('multimedia') || p.includes('mỹ thuật') || p.includes('thiết kế')) return 'arena';
  if (p.includes('bán dẫn') || p.includes('chip') || p.includes('vi mạch')) return 'chip-design';
  if (p.includes('ai agent') || p.includes('agent')) return 'ai-agent';
  return 'aptech';
}

function getWatermarkSvg(type, color = '#f37021') {
  const encColor = encodeURIComponent(color);
  if (type === 'marketing') {
    return `data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='30' fill='${encColor}' font-family='sans-serif' font-weight='800' font-size='12'%3ESEO%20%E2%80%A2%20SEM%3C/text%3E%3Ctext x='10' y='65' fill='%230f172a' font-family='sans-serif' font-weight='800' font-size='12'%3ECONTENT%20%E2%80%A2%20ADS%3C/text%3E%3Ctext x='10' y='100' fill='${encColor}' font-family='sans-serif' font-weight='800' font-size='12'%3EDIGITAL%20%E2%80%A2%20AI%3C/text%3E%3C/svg%3E`;
  }
  if (type === 'design') {
    return `data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='30' fill='${encColor}' font-family='sans-serif' font-weight='800' font-size='12'%3E2D%20%E2%80%A2%203D%20ART%3C/text%3E%3Ctext x='10' y='65' fill='%230f172a' font-family='sans-serif' font-weight='800' font-size='12'%3EUI%2FUX%20%E2%80%A2%20VFX%3C/text%3E%3Ctext x='10' y='100' fill='${encColor}' font-family='sans-serif' font-weight='800' font-size='12'%3EANIMATION%3C/text%3E%3C/svg%3E`;
  }
  if (type === 'chip') {
    return `data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='30' fill='${encColor}' font-family='monospace' font-weight='800' font-size='12'%3EVLSI%20%E2%80%A2%20IC%3C/text%3E%3Ctext x='10' y='65' fill='%230f172a' font-family='monospace' font-weight='800' font-size='12'%3EVERILOG%20%E2%80%A2%20EDA%3C/text%3E%3Ctext x='10' y='100' fill='${encColor}' font-family='monospace' font-weight='800' font-size='12'%3ECHIP%20DESIGN%3C/text%3E%3C/svg%3E`;
  }
  if (type === 'ai') {
    return `data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='30' fill='${encColor}' font-family='monospace' font-weight='800' font-size='12'%3ELLM%20%E2%80%A2%20AGENT%3C/text%3E%3Ctext x='10' y='65' fill='%230f172a' font-family='monospace' font-weight='800' font-size='12'%3ERAG%20%E2%80%A2%20MCP%3C/text%3E%3Ctext x='10' y='100' fill='${encColor}' font-family='monospace' font-weight='800' font-size='12'%3EAUTONOMOUS%3C/text%3E%3C/svg%3E`;
  }
  return `data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='30' fill='${encColor}' font-family='monospace' font-size='12'%3E01000101%3C/text%3E%3Ctext x='10' y='60' fill='%230d2137' font-family='monospace' font-size='12'%3E11100100%3C/text%3E%3Ctext x='10' y='90' fill='${encColor}' font-family='monospace' font-size='12'%3E00110011%3C/text%3E%3C/svg%3E`;
}

export default function ScholarshipFormSection({ 
  googleSheetScriptUrl = 'https://script.google.com/macros/s/AKfycbwfPoh5H-YB8CcPWw9GijIv44YjXtHbrwdLX7XCMWnhTmg5ocW-aGt3PnCIMiC_pvSKrw/exec',
  programName = 'FPT Aptech',
  brand: brandProp,
  headerTitle,
  formTitle,
  formSubtitle,
  badges: badgesProp,
  courseOptions,
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
  const campuses = preset.campuses || ['Hà Nội', 'TP. Hồ Chí Minh', 'Đà Nẵng', 'Cần Thơ'];

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    campus: 'Hà Nội',
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

  const watermarkBg = getWatermarkSvg(preset.watermarkType, themeColor);

  return (
    <section 
      className="scholarship-form-section"
      style={{
        position: 'relative',
        background: '#ffffff',
        color: '#0D2137',
        padding: '75px 0',
        overflow: 'hidden',
        borderTop: '1px solid rgba(13, 33, 55, 0.08)'
      }}
    >
      {/* Background Watermark Pattern */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.035,
          backgroundImage: `url("${watermarkBg}")`,
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Main Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 
            style={{
              fontSize: 'clamp(1.5rem, 3.2vw, 2.3rem)',
              fontWeight: 900,
              textTransform: 'uppercase',
              color: '#0D2137',
              letterSpacing: '0.02em',
              lineHeight: '1.35',
              maxWidth: '1000px',
              margin: '0 auto'
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

        {/* 2-Column Content Layout */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            alignItems: 'center',
            maxWidth: '1200px',
            margin: '0 auto'
          }}
        >
          {/* Left Column: Badges & Visuals */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {activeBadges.map((badge, idx) => (
              <div 
                key={idx}
                style={{
                  position: 'relative',
                  background: preset.badgeBg,
                  borderRadius: '24px',
                  padding: '24px 30px',
                  border: `2px solid ${preset.badgeBorder}`,
                  boxShadow: `0 10px 25px ${themeColor}1a`,
                  color: '#1a2332',
                  textAlign: 'center'
                }}
              >
                {/* Top Floating Badge Tag */}
                <span 
                  style={{
                    position: 'absolute',
                    top: '-14px',
                    left: '24px',
                    background: themeColor,
                    color: '#ffffff',
                    fontSize: '0.8rem',
                    fontWeight: 800,
                    padding: '3px 12px',
                    borderRadius: '12px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  {badge.icon}
                </span>

                <div style={{ fontStyle: 'italic', fontSize: '1rem', color: preset.iconColor, fontWeight: 700 }}>
                  {badge.title}
                </div>
                
                <div style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.4rem)', fontWeight: 900, color: themeColor, lineHeight: '1.05', margin: '6px 0' }}>
                  {badge.value} <span style={{ fontSize: '0.55em', fontWeight: 800 }}>{badge.unit}</span>
                </div>

                {badge.tags && badge.tags.length > 0 && (
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '10px', flexWrap: 'wrap' }}>
                    {badge.tags.map((tag, tIdx) => (
                      <span 
                        key={tIdx}
                        style={{ 
                          background: preset.tagBg, 
                          color: '#ffffff', 
                          fontSize: '0.72rem', 
                          fontWeight: 800, 
                          padding: '3px 12px', 
                          borderRadius: '8px',
                          letterSpacing: '0.04em'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Column: Form Card */}
          <div 
            style={{
              background: '#ffffff',
              borderRadius: '28px',
              padding: '36px 32px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 20px 50px rgba(13, 33, 55, 0.08)',
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
                lineHeight: '1.35'
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
                {includeCampus && (
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#475569', marginBottom: '8px' }}>
                      Cơ sở tư vấn thuận tiện cho bạn:
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
                  Đồng ý để dữ liệu cá nhân của Anh/Chị được thu thập trên trang này, được xử lý và lưu trữ bởi Tổ chức giáo dục FPT cho mục đích và theo điều kiện đã được công bố tại Quy định bảo vệ dữ liệu cá nhân của Tổ chức giáo dục FPT &quot;tại đây&quot;.
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
                    color: '#ffffff',
                    fontSize: '1.05rem',
                    fontWeight: 800,
                    border: 'none',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    boxShadow: `0 8px 20px ${themeColor}4d`,
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
