'use client';

import { useState } from 'react';
import { CheckCircle2, Send } from 'lucide-react';

export default function Skillking100hFormSection({ 
  googleSheetScriptUrl = 'https://script.google.com/macros/s/AKfycbwfPoh5H-YB8CcPWw9GijIv44YjXtHbrwdLX7XCMWnhTmg5ocW-aGt3PnCIMiC_pvSKrw/exec',
  programName = 'FPT Skillking (100 Giờ)'
}) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    campus: '',
    course: '',
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

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.campus || !formData.course) {
      setErrorMsg('Vui lòng điền đầy đủ các thông tin bắt buộc.');
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
            course: formData.course
          }),
        });
      }

      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({ fullName: '', email: '', phone: '', campus: '', course: '', agreeTerms: true });
      }, 600);

    } catch (err) {
      console.error('Error submitting form:', err);
      setIsSubmitting(false);
      setIsSuccess(true);
    }
  };

  return (
    <section 
      className="skillking-100h-form-section"
      style={{
        position: 'relative',
        background: '#ffffff',
        color: '#0f172a',
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
              color: '#0f172a',
              letterSpacing: '0.02em',
              lineHeight: '1.35',
              maxWidth: '1050px',
              margin: '0 auto'
            }}
          >
            NHẬN THÔNG TIN TƯ VẤN BỘ KHÓA HỌC DIGITAL MARKETING NGẮN HẠN TẠI{' '}
            <span style={{ color: '#09529c' }}>FPT SKILLKING (100 GIỜ)</span>
          </h2>
        </div>

        {/* 2-Column Content Layout */}
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
          {/* Left Column: Badges & Visuals */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            <div style={{ background: '#ffffff', borderRadius: '20px', padding: '24px 26px', border: '1px solid #e2e8f0', borderLeft: '6px solid #09529c', boxShadow: '0 6px 25px rgba(0, 0, 0, 0.03)', display: 'flex', alignItems: 'center', gap: '22px' }}>
              <div style={{ flexShrink: 0, textAlign: 'center', minWidth: '95px' }}>
                <div style={{ fontSize: 'clamp(2.2rem, 3.2vw, 3rem)', fontWeight: 900, color: '#09529c', lineHeight: '1', fontFamily: 'var(--font-sans)', letterSpacing: '-0.02em' }}>1.5</div>
                <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: '4px' }}>Triệu VNĐ</div>
              </div>
              <div style={{ width: '1px', height: '60px', background: 'rgba(0, 0, 0, 0.08)', flexShrink: 0 }} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a', margin: '0 0 4px 0', lineHeight: '1.4', textTransform: 'uppercase' }}>Học bổng Short Course</h4>
                <p style={{ color: '#64748b', fontSize: '0.86rem', margin: '0 0 8px 0', lineHeight: '1.45' }}>Ưu đãi giảm trực tiếp học phí cho học viên nhập học sớm</p>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  <span style={{ background: 'rgba(9, 82, 156, 0.08)', color: '#09529c', fontSize: '0.72rem', fontWeight: 800, padding: '2px 9px', borderRadius: '6px', border: '1px solid rgba(9, 82, 156, 0.15)' }}>TIKTOK SHOP</span>
                  <span style={{ background: 'rgba(9, 82, 156, 0.08)', color: '#09529c', fontSize: '0.72rem', fontWeight: 800, padding: '2px 9px', borderRadius: '6px', border: '1px solid rgba(9, 82, 156, 0.15)' }}>META ADS</span>
                </div>
              </div>
            </div>

            <div style={{ background: '#ffffff', borderRadius: '20px', padding: '24px 26px', border: '1px solid #e2e8f0', borderLeft: '6px solid #09529c', boxShadow: '0 6px 25px rgba(0, 0, 0, 0.03)', display: 'flex', alignItems: 'center', gap: '22px' }}>
              <div style={{ flexShrink: 0, textAlign: 'center', minWidth: '95px' }}>
                <div style={{ fontSize: 'clamp(2.2rem, 3.2vw, 3rem)', fontWeight: 900, color: '#09529c', lineHeight: '1', fontFamily: 'var(--font-sans)', letterSpacing: '-0.02em' }}>VIP</div>
                <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: '4px' }}>Đặc Quyền</div>
              </div>
              <div style={{ width: '1px', height: '60px', background: 'rgba(0, 0, 0, 0.08)', flexShrink: 0 }} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a', margin: '0 0 4px 0', lineHeight: '1.4', textTransform: 'uppercase' }}>Tài khoản Coursera + Udemy</h4>
                <p style={{ color: '#64748b', fontSize: '0.86rem', margin: '0 0 8px 0', lineHeight: '1.45' }}>Truy cập không giới hạn kho học liệu quốc tế bản quyền trị giá hàng nghìn USD</p>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  <span style={{ background: 'rgba(9, 82, 156, 0.08)', color: '#09529c', fontSize: '0.72rem', fontWeight: 800, padding: '2px 9px', borderRadius: '6px', border: '1px solid rgba(9, 82, 156, 0.15)' }}>E-LEARNING</span>
                  <span style={{ background: 'rgba(9, 82, 156, 0.08)', color: '#09529c', fontSize: '0.72rem', fontWeight: 800, padding: '2px 9px', borderRadius: '6px', border: '1px solid rgba(9, 82, 156, 0.15)' }}>AI TOOLKIT</span>
                </div>
              </div>
            </div>

            <div style={{ background: '#ffffff', borderRadius: '20px', padding: '24px 26px', border: '1px solid #e2e8f0', borderLeft: '6px solid #09529c', boxShadow: '0 6px 25px rgba(0, 0, 0, 0.03)', display: 'flex', alignItems: 'center', gap: '22px' }}>
              <div style={{ flexShrink: 0, textAlign: 'center', minWidth: '95px' }}>
                <div style={{ fontSize: 'clamp(2.2rem, 3.2vw, 3rem)', fontWeight: 900, color: '#09529c', lineHeight: '1', fontFamily: 'var(--font-sans)', letterSpacing: '-0.02em' }}>0đ</div>
                <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: '4px' }}>Chi Phí Tool</div>
              </div>
              <div style={{ width: '1px', height: '60px', background: 'rgba(0, 0, 0, 0.08)', flexShrink: 0 }} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a', margin: '0 0 4px 0', lineHeight: '1.4', textTransform: 'uppercase' }}>Zero Chi Phí Công Cụ</h4>
                <p style={{ color: '#64748b', fontSize: '0.86rem', margin: '0 0 8px 0', lineHeight: '1.45' }}>Thực chiến 100% bằng công cụ miễn phí, không phát sinh chi phí phần mềm trong quá trình học</p>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  <span style={{ background: 'rgba(9, 82, 156, 0.08)', color: '#09529c', fontSize: '0.72rem', fontWeight: 800, padding: '2px 9px', borderRadius: '6px', border: '1px solid rgba(9, 82, 156, 0.15)' }}>100% THỰC HÀNH</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Form Card */}
          <div 
            style={{
              background: '#ffffff',
              borderRadius: '28px',
              padding: '36px 32px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 20px 50px rgba(15, 23, 42, 0.08)',
              color: '#0f172a'
            }}
          >
            <h3 
              style={{
                fontSize: '1.35rem',
                fontWeight: 900,
                color: '#0f172a',
                textAlign: 'center',
                textTransform: 'uppercase',
                margin: 0,
                letterSpacing: '0.02em'
              }}
            >
              ĐĂNG KÝ NHẬN TƯ VẤN & ƯU ĐÃI
            </h3>
            <p 
              style={{
                fontSize: '0.95rem',
                color: '#64748b',
                fontStyle: 'italic',
                textAlign: 'center',
                marginTop: '4px',
                marginBottom: '24px'
              }}
            >
              Chuyên viên tư vấn sẽ liên hệ với bạn trong vòng 24h
            </p>

            {isSuccess ? (
              <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                <CheckCircle2 size={56} style={{ color: '#16a34a', margin: '0 auto 16px' }} />
                <h4 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a' }}>Đăng ký thành công!</h4>
                <p style={{ color: '#475569', fontSize: '0.95rem', marginTop: '8px' }}>
                  Cảm ơn bạn đã đăng ký. Đội ngũ tư vấn tuyển sinh sẽ liên hệ với bạn trong thời gian sớm nhất!
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  style={{
                    marginTop: '20px',
                    padding: '10px 24px',
                    background: '#09529c',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '20px',
                    fontWeight: 700,
                    cursor: 'pointer'
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

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#475569', marginBottom: '8px' }}>
                    Cơ sở tư vấn thuận tiện cho bạn:
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '10px' }}>
                    {['Hà Nội', 'TP. Hồ Chí Minh', 'Đà Nẵng', 'Cần Thơ'].map((c, cIdx) => (
                      <label key={cIdx} style={{ display: 'flex', alignItems: 'center', gap: '6px', background: formData.campus === c ? 'rgba(9, 82, 156, 0.08)' : '#f8fafc', padding: '10px 12px', borderRadius: '10px', border: formData.campus === c ? '1.5px solid #09529c' : '1px solid #cbd5e1', cursor: 'pointer' }}>
                        <input type="radio" name="campus" value={c} onChange={handleChange} checked={formData.campus === c} style={{ accentColor: '#09529c', width: '15px', height: '15px' }} />
                        <span style={{ fontSize: '0.88rem', color: formData.campus === c ? '#0f172a' : '#475569', fontWeight: formData.campus === c ? 700 : 500 }}>{c}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <select name="course" value={formData.course} onChange={handleChange} style={{ width: '100%', padding: '14px 18px', borderRadius: '12px', border: '1px solid #cbd5e1', fontSize: '0.95rem', outline: 'none', color: formData.course ? '#0f172a' : '#64748b', background: '#f8fafc' }}>
                    <option value="" disabled>Bạn đang quan tâm khoá học nào? *</option>
                    <option value="Social Media Creator & Ads Performance (Meta/Tiktok)">Social Media Creator &amp; Ads Performance (Meta/Tiktok)</option>
                    <option value="Google Mastery: SEO & SEM">Google Mastery: SEO &amp; SEM</option>
                    <option value="S-Commerce Mastery (Tiktok Shop)">S-Commerce Mastery (Tiktok Shop)</option>
                  </select>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginTop: '6px' }}>
                  <input
                    type="checkbox"
                    id="agreeTerms"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                    style={{ marginTop: '3px', cursor: 'pointer', width: '16px', height: '16px', accentColor: '#09529c' }}
                  />
                  <label htmlFor="agreeTerms" style={{ fontSize: '0.88rem', color: '#334155', cursor: 'pointer', lineHeight: '1.4' }}>
                    Đồng ý với Quy định bảo vệ dữ liệu cá nhân
                  </label>
                </div>

                <p style={{ fontSize: '0.78rem', color: '#64748b', lineHeight: '1.5', fontStyle: 'italic', margin: 0 }}>
                  Đồng ý để dữ liệu cá nhân của Anh/Chị được thu thập trên trang này, được xử lý và lưu trữ bởi Tổ chức giáo dục FPT cho mục đích và theo điều kiện đã được công bố tại Quy định bảo vệ dữ liệu cá nhân của Tổ chức giáo dục FPT &quot;tại đây&quot;.
                </p>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    marginTop: '10px',
                    width: '100%',
                    padding: '16px',
                    borderRadius: '30px',
                    background: 'linear-gradient(135deg, #09529c 0%, #1a6ed8 100%)',
                    color: '#ffffff',
                    fontSize: '1.1rem',
                    fontWeight: 800,
                    border: 'none',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    boxShadow: '0 8px 20px rgba(9, 82, 156, 0.3)',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px'
                  }}
                >
                  {isSubmitting ? (
                    'Đang gửi...'
                  ) : (
                    <>
                      Đăng ký tư vấn
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
