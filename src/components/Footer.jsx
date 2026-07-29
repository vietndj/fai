'use client';

import Link from 'next/link';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';
import ParticleCanvas from './ParticleCanvas';

export default function Footer() {
  return (
    <footer className="footer-container">
      <ParticleCanvas className="footer-particles" />
      <div className="footer-bg-text" aria-hidden="true">FAI</div>
      <div className="container footer-content">

        <div className="footer-main-grid">
          {/* Giới thiệu */}
          <div className="footer-brand-col">
            <h4 className="footer-col-title">GIỚI THIỆU FAI</h4>
            
            <div className="footer-intro-block" style={{ marginBottom: '20px' }}>
              <p className="footer-brand-desc" style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.92rem', lineHeight: '1.75', margin: 0 }}>
                Viện Đào tạo Quốc tế FPT (FAI) tự hào là đơn vị tiên phong liên kết đào tạo quốc tế của Tập đoàn FPT từ năm 1999, kiến tạo nguồn nhân lực chất lượng cao sẵn sàng làm việc toàn cầu.
              </p>
            </div>
            
            <div className="footer-intro-block" style={{ padding: '15px 20px', background: 'rgba(255,255,255,0.04)', borderRadius: '12px', borderLeft: '3px solid rgba(255,255,255,0.2)' }}>
              <p style={{ color: 'rgba(255, 255, 255, 0.65)', fontSize: '0.85rem', lineHeight: '1.65', margin: 0 }}>
                Hệ sinh thái FAI gồm 5 chương trình đào tạo chuẩn quốc tế chuyển giao trực tiếp từ đối tác nước ngoài: Lập trình viên Quốc tế (FPT Aptech), Thiết kế mỹ thuật đa phương tiện (FPT Arena), Digital Marketing Ứng dụng AI (FPT Skillking), Thiết kế vi mạch bán dẫn - Chip Design (FPT Jetking) và Lập trình AI Agent (FPT Jetking).
              </p>
            </div>

            {/* Social Channels */}
            <div style={{ marginTop: '22px' }}>
              <span style={{ fontSize: '0.78rem', color: 'rgba(255, 255, 255, 0.55)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: '700', display: 'block', marginBottom: '12px' }}>
                Kênh truyền thông chính thức
              </span>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
                {[
                  { name: 'Facebook', url: 'https://www.facebook.com/VienDaoTaoQuocTeFPT', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> },
                  { name: 'Zalo', url: 'https://zalo.me/3164559225263453576', icon: <svg width="18" height="18" viewBox="0 0 50 50" fill="currentColor"><path d="M 25 3 C 12.86 3 3 11.95 3 23 C 3 28.53 5.42 33.52 9.38 37.07 C 9.08 39.51 8.04 42.6 6.36 45.45 C 6.07 45.94 6.46 46.54 7.02 46.46 C 11.53 45.8 15.34 43.61 17.76 42.06 C 20.03 42.68 22.45 43 25 43 C 37.14 43 47 34.05 47 23 C 47 11.95 37.14 3 25 3 Z M 16.5 17.5 L 29.5 17.5 C 30.33 17.5 31 18.17 31 19 C 31 19.83 30.33 20.5 29.5 20.5 L 21.3 20.5 L 30 30.2 C 30.5 30.76 30.1 31.6 29.35 31.6 L 16.5 31.6 C 15.67 31.6 15 30.93 15 30.1 C 15 29.27 15.67 28.6 16.5 28.6 L 24.7 28.6 L 16 18.9 C 15.5 18.34 15.9 17.5 16.65 17.5 Z"/></svg> },
                  { name: 'YouTube', url: 'https://www.youtube.com/@fpt.academyinternational', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> },
                  { name: 'TikTok', url: 'https://www.tiktok.com/@vien.dao.tao.quoc.te.fpt', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.97-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg> },
                  { name: 'Instagram', url: 'https://www.instagram.com/fptacademyinternational', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> },
                  { name: 'Threads', url: 'https://www.threads.com/@fptacademyinternational', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.186 20.98c-3.08 0-5.32-1.25-6.66-3.71-.85-1.56-1.02-3.61-1.02-6.27 0-2.66.17-4.71 1.02-6.27C6.866 2.27 9.106 1.02 12.186 1.02c2.81 0 4.96 1.05 6.4 3.12.9 1.3 1.34 2.99 1.42 5.03h-2.38c-.07-1.42-.39-2.54-.99-3.38-.96-1.34-2.48-2.02-4.45-2.02-2.33 0-3.96.95-4.85 2.83-.62 1.31-.76 3.11-.76 5.4 0 2.29.14 4.09.76 5.4.89 1.88 2.52 2.83 4.85 2.83 1.95 0 3.44-.64 4.43-1.9.7-.89 1.06-2.12 1.06-3.66v-.45h-5.46v-2.14h7.84v2.59c0 2.26-.59 4.12-1.77 5.56-1.5 1.83-3.64 2.76-6.42 2.76z"/></svg> }
                ].map((s, idx) => (
                  <a
                    key={idx}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={s.name}
                    aria-label={s.name}
                    className="footer-social-btn"
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 255, 255, 0.06)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      color: 'rgba(255, 255, 255, 0.85)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                      textDecoration: 'none'
                    }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Liên kết nhanh */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">LIÊN KẾT NHANH</h4>
            <ul className="footer-links-list">
              <li><Link href="/ve-fai" style={{ color: 'rgba(255, 255, 255, 0.75)' }}>Về FAI</Link></li>
              <li><Link href="/dao-tao" style={{ color: 'rgba(255, 255, 255, 0.75)' }}>Chương trình Đào tạo</Link></li>
              <li><Link href="/tuyen-sinh" style={{ color: 'rgba(255, 255, 255, 0.75)' }}>Tuyển sinh 2026</Link></li>
              <li><Link href="/doi-song" style={{ color: 'rgba(255, 255, 255, 0.75)' }}>Đời sống Sinh viên</Link></li>
              <li><Link href="/tin-tuc" style={{ color: 'rgba(255, 255, 255, 0.75)' }}>Tin tức &amp; Sự kiện</Link></li>
              <li><Link href="/lien-he" style={{ color: 'rgba(255, 255, 255, 0.75)' }}>Liên hệ</Link></li>
            </ul>
          </div>

          {/* Liên hệ & Địa chỉ */}
          <div className="footer-contact-col">
            <h4 className="footer-col-title">HỆ THỐNG CAMPUS TOÀN QUỐC</h4>
            <div className="contact-info-list" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              <div className="campus-groups" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {/* Hà Nội */}
                <div className="campus-city-block">
                  <h5 style={{ fontSize: '0.88rem', fontWeight: '800', color: '#ffffff', margin: '0 0 6px 0', textTransform: 'uppercase', opacity: 0.9, letterSpacing: '0.05em' }}>Hà Nội</h5>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <span style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.75)', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                      <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.6rem', marginTop: '4px' }}>◆</span>
                      13 Phan Tây Nhạc, Phường Xuân Phương
                    </span>
                    <span style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.75)', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                      <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.6rem', marginTop: '4px' }}>◆</span>
                      Số 8 Tôn Thất Thuyết, Phường Cầu Giấy
                    </span>
                    <span style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.75)', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                      <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.6rem', marginTop: '4px' }}>◆</span>
                      94 Lương Yên, Phường Hai Bà Trưng
                    </span>
                    <span style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.75)', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                      <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.6rem', marginTop: '4px' }}>◆</span>
                      264 Đội Cấn, Phường Ba Đình
                    </span>
                  </div>
                </div>

                {/* TP. Hồ Chí Minh */}
                <div className="campus-city-block" style={{ marginTop: '5px' }}>
                  <h5 style={{ fontSize: '0.88rem', fontWeight: '800', color: '#ffffff', margin: '0 0 6px 0', textTransform: 'uppercase', opacity: 0.9, letterSpacing: '0.05em' }}>TP. Hồ Chí Minh</h5>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <span style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.75)', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                      <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.6rem', marginTop: '4px' }}>◆</span>
                      21 Bis Hậu Giang, Phường Tân Sơn Nhất
                    </span>
                    <span style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.75)', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                      <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.6rem', marginTop: '4px' }}>◆</span>
                      84A Nguyên Hồng, Phường Hạnh Thông
                    </span>
                  </div>
                </div>

                {/* Đà Nẵng */}
                <div className="campus-city-block" style={{ marginTop: '5px' }}>
                  <h5 style={{ fontSize: '0.88rem', fontWeight: '800', color: '#ffffff', margin: '0 0 6px 0', textTransform: 'uppercase', opacity: 0.9, letterSpacing: '0.05em' }}>Đà Nẵng</h5>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <span style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.75)', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                      <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.6rem', marginTop: '4px' }}>◆</span>
                      130 Đống Đa, Phường Hải Châu
                    </span>
                  </div>
                </div>

                {/* Cần Thơ */}
                <div className="campus-city-block" style={{ marginTop: '5px' }}>
                  <h5 style={{ fontSize: '0.88rem', fontWeight: '800', color: '#ffffff', margin: '0 0 6px 0', textTransform: 'uppercase', opacity: 0.9, letterSpacing: '0.05em' }}>Cần Thơ</h5>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <span style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.75)', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                      <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.6rem', marginTop: '4px' }}>◆</span>
                      55 Cách Mạng Tháng Tám, Phường Cái Khế
                    </span>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="contact-branch" style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingTop: '15px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <p style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', margin: 0, color: 'rgba(255, 255, 255, 0.75)' }}>
                  <Phone size={16} style={{ color: 'rgba(255, 255, 255, 0.6)', marginTop: '4px', flexShrink: 0 }} />
                  <span>
                    <strong>Hotline:</strong> <a href="tel:02473008855" style={{ color: 'inherit', textDecoration: 'none' }}>024 7300 8855</a> &nbsp;•&nbsp; <a href="tel:02367308826" style={{ color: 'inherit', textDecoration: 'none' }}>0236 730 8826</a>
                  </span>
                </p>
                <p style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: 0, color: 'rgba(255, 255, 255, 0.75)' }}>
                  <Mail size={16} style={{ color: 'rgba(255, 255, 255, 0.6)' }} />
                  <span><strong>Email:</strong> fai@fpt.edu.vn</span>
                </p>
                <p style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: 0, color: 'rgba(255, 255, 255, 0.75)' }}>
                  <Globe size={16} style={{ color: 'rgba(255, 255, 255, 0.6)' }} />
                  <span><strong>Website:</strong> fai.fpt.edu.vn</span>
                </p>
              </div>
            </div>
          </div>

          {/* Mạng xã hội thành viên */}
          <div className="footer-fanpage-col">
            <h4 className="footer-col-title">CHƯƠNG TRÌNH ĐÀO TẠO</h4>
            <ul className="footer-links-list" style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <li>
                <a href="https://aptech.fpt.edu.vn" target="_blank" rel="noopener noreferrer" style={{ display: 'block', textDecoration: 'none' }}>
                  <strong style={{ color: '#ffffff', display: 'block', fontSize: '0.95rem', fontWeight: '700' }}>FPT Aptech</strong>
                  <span style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.55)', display: 'block', marginTop: '2px' }}>Lập trình viên Quốc tế</span>
                </a>
              </li>
              <li>
                <a href="https://arena.fpt.edu.vn" target="_blank" rel="noopener noreferrer" style={{ display: 'block', textDecoration: 'none' }}>
                  <strong style={{ color: '#ffffff', display: 'block', fontSize: '0.95rem', fontWeight: '700' }}>FPT Arena</strong>
                  <span style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.55)', display: 'block', marginTop: '2px' }}>Thiết kế mỹ thuật đa phương tiện</span>
                </a>
              </li>
              <li>
                <a href="https://skillking.fpt.edu.vn" target="_blank" rel="noopener noreferrer" style={{ display: 'block', textDecoration: 'none' }}>
                  <strong style={{ color: '#ffffff', display: 'block', fontSize: '0.95rem', fontWeight: '700' }}>FPT Skillking</strong>
                  <span style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.55)', display: 'block', marginTop: '2px' }}>Digital Marketing Ứng dụng AI</span>
                </a>
              </li>
              <li>
                <a href="https://jetking.fpt.edu.vn" target="_blank" rel="noopener noreferrer" style={{ display: 'block', textDecoration: 'none' }}>
                  <strong style={{ color: '#ffffff', display: 'block', fontSize: '0.95rem', fontWeight: '700' }}>FPT Jetking</strong>
                  <span style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.55)', display: 'block', marginTop: '2px' }}>Thiết kế vi mạch bán dẫn</span>
                </a>
              </li>
              <li>
                <a href="https://jetking.fpt.edu.vn" target="_blank" rel="noopener noreferrer" style={{ display: 'block', textDecoration: 'none' }}>
                  <strong style={{ color: '#ffffff', display: 'block', fontSize: '0.95rem', fontWeight: '700' }}>FPT Jetking</strong>
                  <span style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.55)', display: 'block', marginTop: '2px' }}>Lập trình AI Agent</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            Copyright 2026 © Bản quyền thuộc về Viện Đào tạo Quốc tế FPT (FAI) - Tập đoàn FPT
          </p>
        </div>
      </div>
    </footer>
  );
}
