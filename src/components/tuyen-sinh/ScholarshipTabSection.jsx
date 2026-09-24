'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { SCHOLARSHIP_BRANDS } from '@/data/scholarships';

export default function ScholarshipTabSection({ initialBrand = 'aptech' }) {
  const [activeBrand, setActiveBrand] = useState(initialBrand);
  const currentBrandData = SCHOLARSHIP_BRANDS[activeBrand] || SCHOLARSHIP_BRANDS.aptech;

  return (
    <section 
      id="hoc-bong"
      style={{ 
        padding: '95px 0', 
        backgroundColor: '#ffffff', 
        color: 'var(--secondary)',
        borderBottom: '1px solid #e2e8f0'
      }}
    >
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 40px auto' }}>
          <span className="fai-section-eyebrow">
            04/ CHÍNH SÁCH HỌC BỔNG 2026
          </span>
          <h2 className="fai-section-heading">
            Học bổng &amp; Ưu đãi nhập học 2026
          </h2>
          <p className="fai-section-description" style={{ margin: '0 auto' }}>
            Quỹ học bổng phát triển tài năng trẻ và hỗ trợ chuyển đổi nghề nghiệp của 4 thương hiệu đào tạo trực thuộc Viện Đào tạo Quốc tế FPT.
          </p>
        </div>

        {/* Brand Tab Switcher */}
        <div 
          style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '12px', 
            marginBottom: '40px',
            flexWrap: 'wrap'
          }}
        >
          {Object.values(SCHOLARSHIP_BRANDS).map((brand) => {
            const isActive = activeBrand === brand.id;
            return (
              <button
                key={brand.id}
                type="button"
                onClick={() => setActiveBrand(brand.id)}
                style={{
                  padding: '12px 24px',
                  borderRadius: '40px',
                  border: isActive ? `2px solid ${brand.themeColor}` : '2px solid #e2e8f0',
                  backgroundColor: isActive ? brand.themeColor : '#ffffff',
                  color: isActive ? '#ffffff' : 'var(--secondary)',
                  fontSize: '0.95rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: isActive ? `0 8px 20px ${brand.themeColor}33` : 'none',
                  transition: 'all 0.25s ease'
                }}
              >
                <span>{brand.name}</span>
                <span 
                  style={{ 
                    backgroundColor: isActive ? 'rgba(255,255,255,0.25)' : '#f1f5f9', 
                    color: isActive ? '#ffffff' : '#64748b',
                    padding: '2px 8px', 
                    borderRadius: '20px', 
                    fontSize: '0.78rem',
                    fontWeight: 700 
                  }}
                >
                  {brand.items.length} ưu đãi
                </span>
              </button>
            );
          })}
        </div>

        {/* Brand Header Banner */}
        <div 
          style={{ 
            maxWidth: '1160px', 
            margin: '0 auto 30px auto', 
            padding: '20px 26px', 
            borderRadius: '16px', 
            backgroundColor: currentBrandData.accentBg, 
            border: `1px solid ${currentBrandData.borderColor}`,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px'
          }}
        >
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: currentBrandData.themeColor, margin: '0 0 4px 0' }}>
              Học bổng &amp; Ưu đãi {currentBrandData.name}
            </h3>
            <p style={{ margin: 0, fontSize: '0.92rem', color: '#475569' }}>
              {currentBrandData.tagline}
            </p>
          </div>

          <a 
            href="#dang-ky"
            style={{
              padding: '10px 20px',
              borderRadius: '10px',
              backgroundColor: currentBrandData.themeColor,
              color: '#ffffff',
              fontWeight: 700,
              textDecoration: 'none',
              fontSize: '0.88rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: `0 4px 12px ${currentBrandData.themeColor}40`
            }}
          >
            Nhận tư vấn học bổng <ArrowRight size={14} />
          </a>
        </div>

        {/* Scholarship Cards Grid Panels for SSR */}
        {Object.values(SCHOLARSHIP_BRANDS).map((brand) => (
          <div 
            key={brand.id}
            style={{ 
              display: activeBrand === brand.id ? 'grid' : 'none',
              maxWidth: '1160px', 
              margin: '0 auto', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
              gap: '24px' 
            }}
          >
            {brand.items.map((item, idx) => (
              <div 
                key={item.id || idx}
                className="fai-card-elevated"
                style={{
                  padding: '30px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative'
                }}
              >
                <div>
                  <span 
                    style={{ 
                      display: 'inline-block',
                      fontSize: '0.72rem', 
                      fontWeight: 800, 
                      letterSpacing: '0.08em',
                      color: brand.themeColor,
                      backgroundColor: brand.accentBg,
                      padding: '4px 10px',
                      borderRadius: '8px',
                      marginBottom: '16px'
                    }}
                  >
                    {item.badge}
                  </span>

                  <div style={{ marginBottom: '14px' }}>
                    <span 
                      style={{ 
                        display: 'block', 
                        fontSize: 'clamp(2rem, 3.5vw, 2.5rem)', 
                        fontWeight: 900, 
                        color: brand.themeColor,
                        lineHeight: '1.1'
                      }}
                    >
                      {item.unit && !item.value.includes(item.unit) ? `${item.value} ${item.unit}` : item.value}
                    </span>
                    <span style={{ fontSize: '0.82rem', color: '#94a3b8', fontWeight: 600 }}>
                      {item.amount}
                    </span>
                  </div>

                  <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '10px', lineHeight: '1.35' }}>
                    {item.title}
                  </h4>

                  <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: '1.6', margin: 0 }}>
                    {item.desc}
                  </p>
                </div>

                <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid #f1f5f9' }}>
                  <a 
                    href="#dang-ky"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      color: brand.themeColor,
                      textDecoration: 'none'
                    }}
                  >
                    Đăng ký xét tuyển suất này <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        ))}

      </div>
    </section>
  );
}
