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
      className="scholarship-form-section"
      style={{
        position: 'relative',
        background: '#ffffff',
        color: '#0f172a',
        padding: '75px 0',
        overflow: 'hidden',
        borderTop: '1px solid rgba(15, 23, 42, 0.08)'
      }}
    >
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.03,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='30' fill='%2309529c' font-family='monospace' font-size='12'%3E01000101%3C/text%3E%3Ctext x='10' y='60' fill='%230f172a' font-family='monospace' font-size='12'%3E11100100%3C/text%3E%3Ctext x='10' y='90' fill='%2309529c' font-family='monospace' font-size='12'%3E00110011%3C/text%3E%3C/svg%3E")`,
          pointerEvents: 'none',
        }}
      />
      
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
              fontWeight: 900,
              textTransform: 'uppercase',
              color: '#09529c',
              letterSpacing: '0.02em',
              lineHeight: '1.3',
              maxWidth: '1000px',
              margin: '0 auto'
            }}
          >
            NHẬN THÔNG TIN TƯ VẤN VỀ CHƯƠNG TRÌNH HỌC & HỌC BỔNG 2026 TẠI FPT SKILLKING (18 THÁNG)
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
            
            <div style={{ position: 'relative', background: 'linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 100%)', borderRadius: '24px', padding: '28px 30px', border: '2px solid #BAE6FD', boxShadow: '0 10px 25px rgba(2, 132, 199, 0.08)', color: '#0f172a' }}>
              <h4 style={{ fontSize: '1.3rem', fontWeight: 900, color: '#0284c7', marginBottom: '8px' }}>Học bổng Short Course</h4>
              <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.6' }}>Giảm 1.500.000 VNĐ học phí</p>
            </div>

            <div style={{ position: 'relative', background: 'linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 100%)', borderRadius: '24px', padding: '28px 30px', border: '2px solid #BAE6FD', boxShadow: '0 10px 25px rgba(2, 132, 199, 0.08)', color: '#0f172a' }}>
              <h4 style={{ fontSize: '1.3rem', fontWeight: 900, color: '#0284c7', marginBottom: '8px' }}>Đặc quyền VIP</h4>
              <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.6' }}>Tặng miễn phí tài khoản Coursera + Udemy. Truy cập không giới hạn kho học liệu quốc tế trị giá nghìn USD.</p>
            </div>

            <div style={{ position: 'relative', background: 'linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 100%)', borderRadius: '24px', padding: '28px 30px', border: '2px solid #BAE6FD', boxShadow: '0 10px 25px rgba(2, 132, 199, 0.08)', color: '#0f172a' }}>
              <h4 style={{ fontSize: '1.3rem', fontWeight: 900, color: '#0284c7', marginBottom: '8px' }}>Zero chi phí công cụ</h4>
              <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.6' }}>Thực chiến 100% bằng công cụ miễn phí, không phát sinh chi phí phần mềm.</p>
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

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#f8fafc', padding: '12px 16px', borderRadius: '12px', border: '1px solid #cbd5e1', cursor: 'pointer' }}>
                    <input type="radio" name="campus" value="Hà Nội" onChange={handleChange} checked={formData.campus === 'Hà Nội'} style={{ accentColor: '#09529c', width: '16px', height: '16px' }} />
                    <span style={{ fontSize: '0.95rem', color: '#0f172a' }}>Hà Nội</span>
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#f8fafc', padding: '12px 16px', borderRadius: '12px', border: '1px solid #cbd5e1', cursor: 'pointer' }}>
                    <input type="radio" name="campus" value="Đà Nẵng" onChange={handleChange} checked={formData.campus === 'Đà Nẵng'} style={{ accentColor: '#09529c', width: '16px', height: '16px' }} />
                    <span style={{ fontSize: '0.95rem', color: '#0f172a' }}>Đà Nẵng</span>
                  </label>
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
