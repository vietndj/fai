'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Phone, MapPin, Mail, Clock, ArrowRight, Building2, Globe, Heart } from 'lucide-react';

const aptechCampuses = [
  {
    city: 'Hà Nội',
    name: 'FPT Aptech Tôn Thất Thuyết',
    address: 'Số 8 Tôn Thất Thuyết, Mỹ Đình, Nam Từ Liêm, Hà Nội',
    hotline: '0973 111 085',
    email: 'aptech.hn@fpt.edu.vn'
  },
  {
    city: 'Hà Nội',
    name: 'FPT Aptech Lê Thanh Nghị',
    address: 'Số 19 Lê Thanh Nghị, Bạch Mai, Hai Bà Trưng, Hà Nội',
    hotline: '0973 111 085',
    email: 'aptech.hn@fpt.edu.vn'
  },
  {
    city: 'TP. Hồ Chí Minh',
    name: 'FPT Aptech Cách Mạng Tháng Tám',
    address: 'Số 590 Cách Mạng Tháng Tám, Phường 11, Quận 3, TP.HCM',
    hotline: '0931 313 329',
    email: 'aptech.hcm@fpt.edu.vn'
  },
  {
    city: 'TP. Hồ Chí Minh',
    name: 'FPT Aptech Vạn Phúc',
    address: 'Số 62 Đường 36, KĐT Vạn Phúc, Hiệp Bình Phước, Thủ Đức, TP.HCM',
    hotline: '0931 313 329',
    email: 'aptech.hcm@fpt.edu.vn'
  }
];

const arenaCampuses = [
  {
    city: 'Hà Nội',
    name: 'FPT Arena Đội Cấn',
    address: 'Số 264 Đội Cấn, Phường Liễu Giai, Quận Ba Đình, Hà Nội',
    hotline: '0989 962 467',
    email: 'farena.hn@fpt.edu.vn'
  },
  {
    city: 'Hà Nội',
    name: 'FPT Arena Lương Yên',
    address: 'Số 94 Lương Yên, Phường Bạch Đằng, Quận Hai Bà Trưng, Hà Nội',
    hotline: '0989 962 467',
    email: 'farena.hn@fpt.edu.vn'
  },
  {
    city: 'TP. Hồ Chí Minh',
    name: 'FPT Arena Nguyễn Văn Đậu',
    address: 'Số 302 Nguyễn Văn Đậu, Phường 11, Quận Bình Thạnh, TP.HCM',
    hotline: '0989 962 467',
    email: 'farena.hcm@fpt.edu.vn'
  },
  {
    city: 'TP. Hồ Chí Minh',
    name: 'FPT Arena Cách Mạng Tháng Tám',
    address: 'Số 590 Cách Mạng Tháng Tám, Phường 11, Quận 3, TP.HCM',
    hotline: '0989 962 467',
    email: 'farena.hcm@fpt.edu.vn'
  },
  {
    city: 'TP. Hồ Chí Minh',
    name: 'FPT Arena Vạn Phúc',
    address: 'Số 62 Đường 36, KĐT Vạn Phúc, Hiệp Bình Phước, Thủ Đức, TP.HCM',
    hotline: '0989 962 467',
    email: 'farena.hcm@fpt.edu.vn'
  },
  {
    city: 'Đà Nẵng',
    name: 'FPT Arena Đống Đa',
    address: 'Số 130 Đống Đa, Phường Thuận Phước, Quận Hải Châu, Đà Nẵng',
    hotline: '0989 962 467',
    email: 'farena.dn@fpt.edu.vn'
  },
  {
    city: 'Cần Thơ',
    name: 'FPT Arena Cách Mạng Tháng Tám',
    address: 'Số 55 Cách Mạng Tháng 8, Phường An Thới, Quận Bình Thủy, Cần Thơ',
    hotline: '0989 962 467',
    email: 'farena.ct@fpt.edu.vn'
  }
];

const skillkingCampuses = [
  {
    city: 'Hà Nội',
    name: 'FPT Skillking Tôn Thất Thuyết',
    address: 'Số 8 Tôn Thất Thuyết, Mỹ Đình, Nam Từ Liêm, Hà Nội',
    hotline: '0937 373 737',
    email: 'skillking.hn@fpt.edu.vn'
  },
  {
    city: 'Hà Nội',
    name: 'FPT Skillking Lương Yên',
    address: 'Số 94 Lương Yên, Phường Bạch Đằng, Quận Hai Bà Trưng, Hà Nội',
    hotline: '0937 373 737',
    email: 'skillking.hn@fpt.edu.vn'
  },
  {
    city: 'TP. Hồ Chí Minh',
    name: 'FPT Skillking Nam Kỳ Khởi Nghĩa',
    address: 'Số 391A Nam Kỳ Khởi Nghĩa, Phường Võ Thị Sáu, Quận 3, TP.HCM',
    hotline: '0937 373 737',
    email: 'skillking.hcm@fpt.edu.vn'
  },
  {
    city: 'TP. Hồ Chí Minh',
    name: 'FPT Skillking Nguyễn Văn Đậu',
    address: 'Số 275 Nguyễn Văn Đậu, Phường 11, Quận Bình Thạnh, TP.HCM',
    hotline: '0937 373 737',
    email: 'skillking.hcm@fpt.edu.vn'
  }
];

export default function LienHe() {
  return (
    <div className="contact-page-container" style={{ backgroundColor: '#ffffff', color: '#1a2332' }}>
      <Header />

      <main className="contact-main" style={{ padding: 0 }}>
        
        {/* BLOCK 1: Hero Section - White Background - Compact Height */}
        <section 
          className="contact-hero-section" 
          style={{ 
            padding: '180px 0 80px 0', 
            position: 'relative', 
            overflow: 'hidden',
            minHeight: '45vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            backgroundColor: '#ffffff'
          }}
        >
          <div className="container">
            <div style={{ maxWidth: '950px' }}>
              <span className="section-eyebrow" style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                MẠNG LƯỚI KẾT NỐI FAI
              </span>
              <h1 style={{ fontSize: 'clamp(2.3rem, 5.5vw, 4rem)', color: 'var(--secondary)', lineHeight: '1.25', fontWeight: 800, marginTop: '20px', fontFamily: 'var(--font-sans)' }}>
                Hệ thống Campus thực chiến toàn quốc
              </h1>
              <p style={{ maxWidth: '650px', color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.75', marginTop: '25px' }}>
                Chào mừng bạn đến với Viện Đào Tạo Quốc Tế FPT. Lựa chọn ngành học của bạn và kết nối trực tiếp với trung tâm đào tạo gần nhất để trải nghiệm không gian học tập chuẩn quốc tế.
              </p>
            </div>
            
            <div style={{ display: 'flex', gap: '15px', marginTop: '50px', flexWrap: 'wrap' }}>
              <a href="#aptech" style={{ padding: '12px 24px', borderRadius: '30px', background: 'rgba(26,110,216,0.06)', color: '#1a6ed8', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none' }}>FPT Aptech</a>
              <a href="#arena" style={{ padding: '12px 24px', borderRadius: '30px', background: 'rgba(232,116,30,0.06)', color: '#e8741e', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none' }}>FPT Arena</a>
              <a href="#skillking" style={{ padding: '12px 24px', borderRadius: '30px', background: 'rgba(22,163,74,0.06)', color: '#16a34a', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none' }}>FPT Skillking</a>
            </div>
          </div>
        </section>

        {/* BLOCK 2: FPT Aptech Campuses - Dark Navy Background - Proportional Height */}
        <section 
          id="aptech"
          className="contact-program-section" 
          style={{ 
            padding: '100px 0', 
            background: 'linear-gradient(135deg, #050c1a 0%, #0D2137 100%)',
            color: '#ffffff',
            minHeight: '75vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative'
          }}
        >
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '40px', alignItems: 'start' }}>
              
              {/* Left branding */}
              <div style={{ gridColumn: 'span 4' }}>
                <span className="section-eyebrow" style={{ color: '#1a6ed8', fontWeight: 800 }}>FPT APTECH</span>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#ffffff', lineHeight: '1.2', marginTop: '10px' }}>
                  Lập Trình Viên Quốc Tế
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', lineHeight: '1.7', marginTop: '20px' }}>
                  Hệ thống đào tạo lập trình thực chiến chuẩn Aptech Ấn Độ. Tiên phong đào tạo CNTT từ năm 1999 tại Việt Nam.
                </p>
                <div style={{ marginTop: '30px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px' }}>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: 'rgba(255,255,255,0.6)' }}>
                    <Globe size={16} style={{ color: '#1a6ed8' }} /> Website: aptech.fpt.edu.vn
                  </p>
                </div>
              </div>

              {/* Right Address Grid */}
              <div style={{ gridColumn: 'span 8' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
                  {aptechCampuses.map((camp, idx) => (
                    <div 
                      key={idx}
                      style={{ 
                        background: 'rgba(255,255,255,0.02)', 
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: '16px',
                        padding: '30px',
                        transition: 'all 0.3s ease'
                      }}
                      className="contact-card-dark"
                    >
                      <span style={{ fontSize: '0.75rem', fontWeight: 800, padding: '4px 10px', background: 'rgba(26,110,216,0.15)', color: '#1a6ed8', borderRadius: '4px', textTransform: 'uppercase' }}>
                        {camp.city}
                      </span>
                      <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff', marginTop: '15px', marginBottom: '15px' }}>
                        {camp.name}
                      </h3>
                      
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', display: 'flex', gap: '8px', margin: 0 }}>
                          <MapPin size={16} style={{ color: '#1a6ed8', flexShrink: 0 }} />
                          {camp.address}
                        </p>
                        <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', display: 'flex', gap: '8px', margin: 0 }}>
                          <Phone size={16} style={{ color: '#1a6ed8', flexShrink: 0 }} />
                          Hotline: {camp.hotline}
                        </p>
                        <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', display: 'flex', gap: '8px', margin: 0 }}>
                          <Mail size={16} style={{ color: '#1a6ed8', flexShrink: 0 }} />
                          Email: {camp.email}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* BLOCK 3: FPT Arena Campuses - Light Cream Background - Proportional Height */}
        <section 
          id="arena"
          className="contact-program-section" 
          style={{ 
            padding: '100px 0', 
            backgroundColor: '#F8F5F0', 
            color: 'var(--secondary)',
            minHeight: '75vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative'
          }}
        >
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '40px', alignItems: 'start' }}>
              
              {/* Left branding */}
              <div style={{ gridColumn: 'span 4' }}>
                <span className="section-eyebrow" style={{ color: '#e8741e', fontWeight: 800 }}>FPT ARENA MULTIMEDIA</span>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--secondary)', lineHeight: '1.2', marginTop: '10px' }}>
                  Mỹ Thuật Đa Phương Tiện
                </h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.7', marginTop: '20px' }}>
                  Khai mở ngành đào tạo Mỹ thuật đa phương tiện đầu tiên tại Việt Nam năm 2004. Đào tạo thiết kế đồ họa, UI/UX, làm phim và hoạt hình 3D.
                </p>
                <div style={{ marginTop: '30px', borderTop: '1px solid rgba(0,0,0,0.08)', paddingTop: '20px' }}>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                    <Globe size={16} style={{ color: '#e8741e' }} /> Website: arena.fpt.edu.vn
                  </p>
                </div>
              </div>

              {/* Right Address Grid */}
              <div style={{ gridColumn: 'span 8' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
                  {arenaCampuses.map((camp, idx) => (
                    <div 
                      key={idx}
                      style={{ 
                        background: '#ffffff', 
                        border: '1px solid rgba(13, 33, 55, 0.05)',
                        borderRadius: '16px',
                        padding: '24px 28px',
                        boxShadow: '0 10px 25px rgba(0,0,0,0.01)',
                        transition: 'all 0.3s ease'
                      }}
                      className="contact-card-light"
                    >
                      <span style={{ fontSize: '0.72rem', fontWeight: 800, padding: '4px 10px', background: 'rgba(232,116,30,0.08)', color: '#e8741e', borderRadius: '4px', textTransform: 'uppercase' }}>
                        {camp.city}
                      </span>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--secondary)', marginTop: '12px', marginBottom: '12px' }}>
                        {camp.name}
                      </h3>
                      
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', gap: '8px', margin: 0, lineHeight: '1.5' }}>
                          <MapPin size={15} style={{ color: '#e8741e', flexShrink: 0, marginTop: '2px' }} />
                          {camp.address}
                        </p>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', gap: '8px', margin: 0 }}>
                          <Phone size={15} style={{ color: '#e8741e', flexShrink: 0 }} />
                          Hotline: {camp.hotline}
                        </p>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', gap: '8px', margin: 0 }}>
                          <Mail size={15} style={{ color: '#e8741e', flexShrink: 0 }} />
                          Email: {camp.email}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* BLOCK 4: FPT Skillking Campuses - Dark Gray/Black Background - Proportional Height */}
        <section 
          id="skillking"
          className="contact-program-section" 
          style={{ 
            padding: '100px 0', 
            backgroundColor: '#070a10', 
            color: '#ffffff',
            minHeight: '75vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative'
          }}
        >
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '40px', alignItems: 'start' }}>
              
              {/* Left branding */}
              <div style={{ gridColumn: 'span 4' }}>
                <span className="section-eyebrow" style={{ color: '#16a34a', fontWeight: 800 }}>FPT SKILLKING</span>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#ffffff', lineHeight: '1.2', marginTop: '10px' }}>
                  Digital Marketing Chuyên Sâu
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', lineHeight: '1.7', marginTop: '20px' }}>
                  Hợp tác chuyển giao giáo trình chuẩn Skillking Ấn Độ. Chương trình đào tạo chuyên sâu về tiếp thị số thực chiến đầu tiên tại Việt Nam.
                </p>
                <div style={{ marginTop: '30px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px' }}>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: 'rgba(255,255,255,0.6)' }}>
                    <Globe size={16} style={{ color: '#16a34a' }} /> Website: skillking.fpt.edu.vn
                  </p>
                </div>
              </div>

              {/* Right Address Grid */}
              <div style={{ gridColumn: 'span 8' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
                  {skillkingCampuses.map((camp, idx) => (
                    <div 
                      key={idx}
                      style={{ 
                        background: 'rgba(255,255,255,0.02)', 
                        border: '1px solid rgba(255,255,255,0.06)',
                        borderRadius: '16px',
                        padding: '30px',
                        transition: 'all 0.3s ease'
                      }}
                      className="contact-card-dark"
                    >
                      <span style={{ fontSize: '0.75rem', fontWeight: 800, padding: '4px 10px', background: 'rgba(22,163,74,0.15)', color: '#16a34a', borderRadius: '4px', textTransform: 'uppercase' }}>
                        {camp.city}
                      </span>
                      <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff', marginTop: '15px', marginBottom: '15px' }}>
                        {camp.name}
                      </h3>
                      
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', display: 'flex', gap: '8px', margin: 0 }}>
                          <MapPin size={16} style={{ color: '#16a34a', flexShrink: 0 }} />
                          {camp.address}
                        </p>
                        <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', display: 'flex', gap: '8px', margin: 0 }}>
                          <Phone size={16} style={{ color: '#16a34a', flexShrink: 0 }} />
                          Hotline: {camp.hotline}
                        </p>
                        <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', display: 'flex', gap: '8px', margin: 0 }}>
                          <Mail size={16} style={{ color: '#16a34a', flexShrink: 0 }} />
                          Email: {camp.email}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* BLOCK 5: Support & Hotline Hub - White Background - Compact Height */}
        <section 
          className="contact-hotline-section" 
          style={{ 
            padding: '60px 0', 
            backgroundColor: '#ffffff',
            color: 'var(--secondary)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            textAlign: 'center',
            borderTop: '1px solid rgba(0, 0, 0, 0.05)'
          }}
        >
          {/* subtle design background */}
          <div style={{
            position: 'absolute',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(13,33,55,0.02) 0%, transparent 60%)',
            top: '-20%',
            left: '-10%',
            pointerEvents: 'none'
          }} />

          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <span className="section-eyebrow" style={{ color: 'var(--primary)', opacity: 1, fontWeight: 800, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
              TỔNG ĐÀI HỖ TRỢ TOÀN QUỐC
            </span>
            
            <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 2.8rem)', fontWeight: 800, color: 'var(--secondary)', marginTop: '12px', marginBottom: '8px', fontFamily: 'var(--font-sans)' }}>
              Chúng tôi luôn sẵn sàng hỗ trợ
            </h2>
            
            <p style={{ maxWidth: '650px', color: 'var(--text-muted)', margin: '0 auto 25px auto', fontSize: '1.05rem', lineHeight: '1.7' }}>
              Thời gian làm việc từ 8:00 - 21:00 hàng ngày, kể cả Thứ 7 và Chủ Nhật. Liên hệ ngay để được hỗ trợ thủ tục nhập học và tư vấn hướng nghiệp miễn phí.
            </p>

            <div style={{ display: 'inline-block', background: '#0D2137', padding: '25px 50px', borderRadius: '24px', boxShadow: '0 20px 50px rgba(13,33,55,0.08)' }}>
              <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', margin: '0 0 5px 0', textTransform: 'uppercase', fontWeight: 800, letterSpacing: '0.1em' }}>
                ĐƯỜNG DÂY NÓNG HỖ TRỢ NHANH
              </p>
              <a href="tel:19006000" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 800, color: 'var(--primary)', display: 'block', textDecoration: 'none', lineHeight: '1' }}>
                1900 6000
              </a>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginTop: '30px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                <Clock size={18} style={{ color: 'var(--primary)' }} />
                <span>Giờ làm việc: 8:00 - 21:00</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                <Heart size={18} style={{ color: 'var(--primary)', fill: 'currentColor' }} />
                <span>Đồng hành cùng học viên 24/7</span>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
