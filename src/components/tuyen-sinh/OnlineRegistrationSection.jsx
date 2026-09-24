'use client';

import { useState } from 'react';
import { 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  ExternalLink 
} from 'lucide-react';
import { TRAINING_PROGRAMS_2026 } from '@/data/programs';
import { 
  HOTLINES, 
  EMAILS, 
  WORKING_HOURS, 
  ADMISSION_CAMPUSES, 
  EXTERNAL_LINKS 
} from '@/data/contacts';

export default function OnlineRegistrationSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    campus: ADMISSION_CAMPUSES[0] || 'Hà Nội',
    program: TRAINING_PROGRAMS_2026[0]?.programs?.[0] || 'Lập trình Fullstack 2 năm - FPT Aptech',
    agreeTerms: true
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Thay đổi input form
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  // Validation form client-side
  const validateForm = () => {
    const errors = {};

    if (!formData.fullName.trim()) {
      errors.fullName = 'Vui lòng nhập họ và tên';
    } else if (formData.fullName.trim().length < 2) {
      errors.fullName = 'Họ và tên tối thiểu 2 ký tự';
    }

    const phoneRegex = /^(0[35789])[0-9]{8}$/;
    if (!formData.phone.trim()) {
      errors.phone = 'Vui lòng nhập số điện thoại';
    } else if (!phoneRegex.test(formData.phone.replace(/\s+/g, ''))) {
      errors.phone = 'Số điện thoại không hợp lệ (cần 10 chữ số hợp lệ)';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = 'Vui lòng nhập địa chỉ email';
    } else if (!emailRegex.test(formData.email.trim())) {
      errors.email = 'Địa chỉ email không đúng định dạng';
    }

    if (!formData.agreeTerms) {
      errors.agreeTerms = 'Bạn cần đồng ý với Quy định bảo vệ dữ liệu cá nhân của FPT';
    }

    return errors;
  };

  // Submit form
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setIsSubmitting(true);

    try {
      const googleSheetUrl = EXTERNAL_LINKS.leadSubmitScript;
      await fetch(googleSheetUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'Tuyển sinh 2026',
          fullName: formData.fullName,
          phone: formData.phone,
          email: formData.email,
          campus: formData.campus,
          course: formData.program,
          program: formData.program,
          submittedAt: new Date().toISOString()
        })
      });
    } catch (err) {
      console.warn('Form post warning:', err);
    } finally {
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 500);
    }
  };

  const handleResetForm = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      campus: ADMISSION_CAMPUSES[0] || 'Hà Nội',
      program: TRAINING_PROGRAMS_2026[0]?.programs?.[0] || 'Lập trình Fullstack 2 năm - FPT Aptech',
      agreeTerms: true
    });
    setFormErrors({});
  };

  return (
    <section 
      id="dang-ky"
      style={{ 
        padding: '95px 0', 
        backgroundColor: '#ffffff', 
        color: 'var(--secondary)',
        borderBottom: '1px solid #e2e8f0'
      }}
    >
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @media (max-width: 992px) {
          .admissions-contact-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .admissions-contact-col,
          .admissions-form-col {
            grid-column: span 12 !important;
            width: 100% !important;
          }
        }
      `}</style>

      <div className="container">
        <div className="admissions-contact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '50px', alignItems: 'start' }}>
          
          {/* Left Column: Direct Contact Info */}
          <div style={{ gridColumn: 'span 5' }} className="admissions-contact-col">
            <span className="fai-section-eyebrow">
              06/ LIÊN HỆ TUYỂN SINH
            </span>
            
            <h2 className="fai-section-heading">
              Tư vấn chương trình tuyển sinh 2026
            </h2>
            
            <p className="fai-section-description">
              Đội ngũ cố vấn tuyển sinh Viện Đào tạo Quốc tế FPT luôn sẵn sàng đồng hành, tư vấn hướng nghiệp 1-1 và hỗ trợ bạn hoàn thiện hồ sơ xét tuyển nhanh nhất.
            </p>

            {/* Hotlines Card */}
            <div 
              style={{ 
                backgroundColor: 'var(--secondary)', 
                borderRadius: '20px', 
                padding: '28px 24px', 
                color: '#ffffff',
                boxShadow: '0 15px 35px rgba(13, 33, 55, 0.12)',
                marginBottom: '28px'
              }}
            >
              <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 800, display: 'block', marginBottom: '12px' }}>
                ĐƯỜNG DÂY NÓNG TƯ VẤN TRỰC TIẾP
              </span>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {/* HN */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '12px' }}>
                  <div>
                    <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.7)', display: 'block' }}>Cơ sở Hà Nội:</span>
                    <a href={HOTLINES.hn.tel} style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--primary)', textDecoration: 'none' }}>
                      {HOTLINES.hn.display}
                    </a>
                  </div>
                  <a href={HOTLINES.hn.tel} style={{ backgroundColor: 'rgba(232, 116, 30, 0.2)', color: 'var(--primary)', padding: '6px 12px', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 700, textDecoration: 'none' }}>
                    Gọi ngay
                  </a>
                </div>

                {/* DN */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.7)', display: 'block' }}>Cơ sở Đà Nẵng:</span>
                    <a href={HOTLINES.dn.tel} style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--primary)', textDecoration: 'none' }}>
                      {HOTLINES.dn.display}
                    </a>
                  </div>
                  <a href={HOTLINES.dn.tel} style={{ backgroundColor: 'rgba(232, 116, 30, 0.2)', color: 'var(--primary)', padding: '6px 12px', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 700, textDecoration: 'none' }}>
                    Gọi ngay
                  </a>
                </div>
              </div>
            </div>

            {/* Additional info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.92rem', color: '#475569' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', backgroundColor: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Mail size={18} style={{ color: 'var(--primary)' }} />
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.78rem', color: '#94a3b8' }}>Email tiếp nhận:</span>
                  <a href={EMAILS.mailto} style={{ color: 'var(--secondary)', fontWeight: 700, textDecoration: 'none' }}>
                    {EMAILS.admissions}
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.92rem', color: '#475569' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', backgroundColor: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Clock size={18} style={{ color: 'var(--primary)' }} />
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.78rem', color: '#94a3b8' }}>Giờ làm việc:</span>
                  <strong style={{ color: 'var(--secondary)' }}>{WORKING_HOURS.display}</strong>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Online Registration Form */}
          <div style={{ gridColumn: 'span 7' }} className="admissions-form-col">
            <div 
              className="fai-card-elevated"
              style={{ 
                padding: '40px 36px'
              }}
            >
              <div style={{ marginBottom: '26px' }}>
                <span className="fai-badge fai-badge-primary" style={{ marginBottom: '8px' }}>
                  HỖ TRỢ TƯ VẤN TUYỂN SINH
                </span>
                <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--secondary)', margin: '4px 0 6px 0' }}>
                  Đăng ký nhận tư vấn trực tuyến 2026
                </h3>
                <p style={{ color: '#64748b', fontSize: '0.9rem', margin: 0 }}>
                  Điền thông tin bên dưới, tư vấn sẽ liên lạc hỗ trợ bạn về chương trình học và học bổng
                </p>
              </div>

              {isSubmitted ? (
                <div style={{ textAlign: 'center', padding: '36px 16px' }}>
                  <div style={{ width: '68px', height: '68px', borderRadius: '50%', backgroundColor: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto' }}>
                    <CheckCircle2 size={40} style={{ color: '#16a34a' }} />
                  </div>
                  <h4 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '8px' }}>
                    Đăng ký xét tuyển thành công!
                  </h4>
                  <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6', maxWidth: '460px', margin: '0 auto 24px auto' }}>
                    Cảm ơn bạn <strong>{formData.fullName}</strong>. Hồ sơ đăng ký chương trình <strong>{formData.program}</strong> tại cơ sở <strong>{formData.campus}</strong> đã được ghi nhận. Chuyên viên tuyển sinh FAI sẽ liên hệ trong vòng 24 giờ.
                  </p>
                  <button
                    type="button"
                    onClick={handleResetForm}
                    style={{
                      padding: '12px 28px',
                      borderRadius: '12px',
                      backgroundColor: 'var(--secondary)',
                      color: '#ffffff',
                      fontWeight: 700,
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '0.9rem'
                    }}
                  >
                    Gửi thêm đăng ký mới
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  
                  {/* Họ và tên */}
                  <div className="fai-form-group">
                    <label className="fai-form-label">
                      Họ và tên <span style={{ color: '#dc2626' }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Ví dụ: Nguyễn Văn An"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className={`fai-form-input ${formErrors.fullName ? 'has-error' : ''}`}
                    />
                    {formErrors.fullName && (
                      <span className="fai-form-error">
                        {formErrors.fullName}
                      </span>
                    )}
                  </div>

                  {/* Điện thoại & Email */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
                    
                    {/* Số điện thoại */}
                    <div className="fai-form-group">
                      <label className="fai-form-label">
                        Số điện thoại <span style={{ color: '#dc2626' }}>*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Ví dụ: 0912 345 678"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`fai-form-input ${formErrors.phone ? 'has-error' : ''}`}
                      />
                      {formErrors.phone && (
                        <span className="fai-form-error">
                          {formErrors.phone}
                        </span>
                      )}
                    </div>

                    {/* Email */}
                    <div className="fai-form-group">
                      <label className="fai-form-label">
                        Địa chỉ Email <span style={{ color: '#dc2626' }}>*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Ví dụ: an.nguyen@gmail.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`fai-form-input ${formErrors.email ? 'has-error' : ''}`}
                      />
                      {formErrors.email && (
                        <span className="fai-form-error">
                          {formErrors.email}
                        </span>
                      )}
                    </div>

                  </div>

                  {/* Cơ sở dự tuyển */}
                  <div>
                    <label className="fai-form-label" style={{ marginBottom: '8px' }}>
                      Cơ sở <span style={{ color: '#dc2626' }}>*</span>
                    </label>
                    <div style={{ display: 'flex', gap: '14px' }}>
                      {ADMISSION_CAMPUSES.map((campusName) => {
                        const isSelected = formData.campus === campusName;
                        return (
                          <label
                            key={campusName}
                            style={{
                              flex: 1,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              gap: '8px',
                              padding: '12px 16px',
                              borderRadius: '12px',
                              border: isSelected ? '2px solid var(--primary)' : '1px solid #cbd5e1',
                              backgroundColor: isSelected ? 'rgba(232, 116, 30, 0.08)' : '#f8fafc',
                              cursor: 'pointer',
                              fontWeight: isSelected ? 800 : 600,
                              color: isSelected ? 'var(--primary)' : '#475569',
                              transition: 'all 0.2s ease'
                            }}
                          >
                            <input
                              type="radio"
                              name="campus"
                              value={campusName}
                              checked={isSelected}
                              onChange={handleInputChange}
                              style={{ accentColor: 'var(--primary)' }}
                            />
                            Cơ sở {campusName}
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  {/* Dropdown 11 Chương trình đào tạo chuẩn */}
                  <div className="fai-form-group">
                    <label className="fai-form-label">
                      Chương trình đào tạo quan tâm <span style={{ color: '#dc2626' }}>*</span>
                    </label>
                    <select
                      name="program"
                      value={formData.program}
                      onChange={handleInputChange}
                      className="fai-form-select"
                      style={{ cursor: 'pointer' }}
                    >
                      {TRAINING_PROGRAMS_2026.map((group, gIdx) => (
                        <optgroup key={gIdx} label={group.brand}>
                          {group.programs.map((prog, pIdx) => (
                            <option key={pIdx} value={prog}>
                              {prog}
                            </option>
                          ))}
                        </optgroup>
                      ))}
                    </select>
                  </div>

                  {/* Checkbox điều khoản bảo vệ dữ liệu cá nhân bắt buộc */}
                  <div>
                    <label 
                      style={{ 
                        display: 'flex', 
                        alignItems: 'flex-start', 
                        gap: '10px', 
                        cursor: 'pointer',
                        fontSize: '0.83rem',
                        color: '#475569',
                        lineHeight: '1.55'
                      }}
                    >
                      <input
                        type="checkbox"
                        name="agreeTerms"
                        checked={formData.agreeTerms}
                        onChange={handleInputChange}
                        style={{ 
                          marginTop: '3px', 
                          accentColor: 'var(--primary)',
                          width: '16px',
                          height: '16px',
                          cursor: 'pointer'
                        }}
                      />
                      <span>
                        Đồng ý để dữ liệu cá nhân của Anh/Chị được thu thập trên trang này, được xử lý và lưu trữ bởi Tổ chức giáo dục FPT cho mục đích và theo điều kiện đã được công bố tại Quy định bảo vệ dữ liệu cá nhân của Tổ chức giáo dục FPT{' '}
                        <a
                          href={EXTERNAL_LINKS.privacyPolicy}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ 
                            color: 'var(--primary)', 
                            textDecoration: 'underline', 
                            fontWeight: 700,
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '2px'
                          }}
                        >
                          tại đây <ExternalLink size={12} />
                        </a>
                        .
                      </span>
                    </label>
                    {formErrors.agreeTerms && (
                      <span className="fai-form-error">
                        {formErrors.agreeTerms}
                      </span>
                    )}
                  </div>

                  {/* Nút gửi form */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      padding: '16px 24px',
                      borderRadius: '12px',
                      backgroundColor: isSubmitting ? '#94a3b8' : 'var(--primary)',
                      color: '#ffffff',
                      fontWeight: 800,
                      fontSize: '1rem',
                      border: 'none',
                      cursor: isSubmitting ? 'not-allowed' : 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '10px',
                      transition: 'all 0.2s ease',
                      boxShadow: '0 8px 24px rgba(232, 116, 30, 0.3)',
                      marginTop: '8px'
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <div 
                          style={{ 
                            width: '18px', 
                            height: '18px', 
                            border: '2px solid #ffffff', 
                            borderTopColor: 'transparent', 
                            borderRadius: '50%', 
                            animation: 'spin 0.8s linear infinite' 
                          }} 
                        />
                        <span>Đang gửi hồ sơ xét tuyển...</span>
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>ĐĂNG KÝ TƯ VẤN</span>
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
