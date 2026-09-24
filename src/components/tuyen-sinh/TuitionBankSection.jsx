'use client';

import { useState } from 'react';
import { Copy, Check, ShieldCheck, AlertCircle } from 'lucide-react';
import { TUITION_ACCOUNTS } from '@/data/tuition';

export default function TuitionBankSection() {
  const [copiedField, setCopiedField] = useState(null);

  // Xử lý sao chép 1-chạm
  const handleCopy = (text, fieldId) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        setCopiedField(fieldId);
        setTimeout(() => setCopiedField(null), 2200);
      }).catch(() => {
        fallbackCopy(text, fieldId);
      });
    } else {
      fallbackCopy(text, fieldId);
    }
  };

  const fallbackCopy = (text, fieldId) => {
    try {
      const el = document.createElement('textarea');
      el.value = text;
      el.setAttribute('readonly', '');
      el.style.position = 'absolute';
      el.style.left = '-9999px';
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopiedField(fieldId);
      setTimeout(() => setCopiedField(null), 2200);
    } catch {
      // ignore
    }
  };

  return (
    <>
      <section 
        id="hoc-phi"
        style={{ 
          padding: '95px 0', 
          backgroundColor: '#F8FAFC', 
          color: 'var(--secondary)',
          borderBottom: '1px solid #e2e8f0'
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '860px', margin: '0 auto 45px auto', textAlign: 'center' }}>
            <span className="fai-section-eyebrow">
              05/ CHÍNH SÁCH HỌC PHÍ
            </span>
            <h2 className="fai-section-heading">
              Thông tin chuyển khoản học phí chính thức 2026
            </h2>
            <p className="fai-section-description" style={{ margin: '0 auto' }}>
              Để đảm bảo quyền lợi và tính chính xác khi nộp học phí, Viện Đào tạo Quốc tế FPT hướng dẫn thông tin chuyển khoản tại các cơ sở (Hà Nội &amp; Đà Nẵng) như sau. Học viên lưu ý chọn đúng tài khoản tương ứng với cơ sở đang theo học:
            </p>
          </div>

          {/* 2 Banking Cards */}
          <div 
            style={{ 
              maxWidth: '1160px', 
              margin: '0 auto', 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', 
              gap: '30px' 
            }}
          >
            {TUITION_ACCOUNTS.map((acc) => (
              <div 
                key={acc.campusKey}
                className="fai-card-elevated"
                style={{
                  padding: '36px 32px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative'
                }}
              >
                <div>
                  {/* Header Card */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', paddingBottom: '16px', borderBottom: '1px solid #f1f5f9' }}>
                    <div>
                      <span className="fai-badge fai-badge-primary" style={{ padding: '4px 10px', fontSize: '0.75rem' }}>
                        {acc.badge}
                      </span>
                      <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--secondary)', margin: '8px 0 0 0' }}>
                        {acc.campusName}
                      </h3>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <span style={{ fontSize: '1.1rem', fontWeight: 900, color: '#7c3aed', display: 'block' }}>
                        {acc.shortBank}
                      </span>
                      <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Ngân hàng Tiên Phong</span>
                    </div>
                  </div>

                  {/* Info rows */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    
                    {/* Đơn vị thụ hưởng */}
                    <div>
                      <span style={{ fontSize: '0.8rem', color: '#64748b', display: 'block', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 600 }}>
                        Đơn vị thụ hưởng (Tên tài khoản)
                      </span>
                      <strong style={{ fontSize: '1.05rem', color: 'var(--secondary)', display: 'block' }}>
                        {acc.accountName}
                      </strong>
                    </div>

                    {/* Số tài khoản & Copy */}
                    <div style={{ backgroundColor: '#f8fafc', padding: '16px', borderRadius: '14px', border: '1px solid #e2e8f0' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                          <span style={{ fontSize: '0.78rem', color: '#64748b', display: 'block', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 600 }}>
                            Số tài khoản chính thức
                          </span>
                          <span style={{ fontSize: '1.45rem', fontWeight: 900, color: 'var(--primary)', letterSpacing: '0.05em', fontFamily: 'monospace' }}>
                            {acc.accountNumber}
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleCopy(acc.accountNumber, `stk-${acc.campusKey}`)}
                          className={`fai-btn-copy ${copiedField === `stk-${acc.campusKey}` ? 'fai-btn-copy-success' : ''}`}
                        >
                          {copiedField === `stk-${acc.campusKey}` ? (
                            <><Check size={14} /> Đã chép</>
                          ) : (
                            <><Copy size={14} /> Sao chép</>
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Ngân hàng & Chi nhánh */}
                    <div>
                      <span style={{ fontSize: '0.8rem', color: '#64748b', display: 'block', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 600 }}>
                        Ngân hàng &amp; Chi nhánh
                      </span>
                      <span style={{ fontSize: '0.92rem', color: '#334155', fontWeight: 600 }}>
                        {acc.bankName}
                      </span>
                    </div>

                    {/* Cú pháp chuyển khoản & Copy */}
                    <div style={{ backgroundColor: '#fff7ed', padding: '16px', borderRadius: '14px', border: '1px solid #ffedd5' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '10px' }}>
                        <div>
                          <span style={{ fontSize: '0.78rem', color: '#c2410c', display: 'block', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 700 }}>
                            Cú pháp chuyển khoản chuẩn
                          </span>
                          <code style={{ fontSize: '0.98rem', fontWeight: 800, color: 'var(--secondary)', display: 'block', marginTop: '4px', wordBreak: 'break-all' }}>
                            {acc.transferSyntax}
                          </code>
                          <span style={{ fontSize: '0.78rem', color: '#9a3412', display: 'block', marginTop: '4px' }}>
                            Ví dụ: {acc.syntaxExample}
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleCopy(acc.transferSyntax, `syntax-${acc.campusKey}`)}
                          className={`fai-btn-copy ${copiedField === `syntax-${acc.campusKey}` ? 'fai-btn-copy-success' : ''}`}
                        >
                          {copiedField === `syntax-${acc.campusKey}` ? (
                            <><Check size={14} /> Đã chép</>
                          ) : (
                            <><Copy size={14} /> Sao chép</>
                          )}
                        </button>
                      </div>
                    </div>

                  </div>
                </div>

                <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid #f1f5f9', fontSize: '0.8rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ShieldCheck size={15} style={{ color: '#16a34a', flexShrink: 0 }} />
                  <span>Tài khoản chính thức được FPT xác thực</span>
                </div>
              </div>
            ))}
          </div>

          {/* Caution Banner */}
          <div 
            style={{ 
              maxWidth: '1160px', 
              margin: '36px auto 0 auto', 
              padding: '20px 24px', 
              borderRadius: '16px', 
              backgroundColor: 'rgba(232, 116, 30, 0.06)', 
              border: '1px solid rgba(232, 116, 30, 0.2)',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '14px'
            }}
          >
            <AlertCircle size={22} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '2px' }} />
            <div>
              <strong style={{ display: 'block', fontSize: '0.94rem', color: 'var(--secondary)', marginBottom: '4px' }}>
                Lưu ý quan trọng khi nộp học phí:
              </strong>
              <p style={{ margin: 0, fontSize: '0.88rem', color: '#475569', lineHeight: '1.6' }}>
                Học viên bắt buộc chọn đúng số tài khoản ngân hàng tương ứng với cơ sở đang theo học (Hà Nội hoặc Đà Nẵng). Vui lòng ghi chính xác cú pháp chuyển khoản (thay <em>hotensinhvien</em> bằng Họ và tên không dấu của học viên) để phòng Kế toán Viện Đào tạo FPT đối soát và xuất biên lai kịp thời.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Hidden FAQ target anchor to prevent broken links from Megamenu */}
      <span id="faq" style={{ position: 'relative', top: '-120px', visibility: 'hidden', display: 'block' }} />
    </>
  );
}
