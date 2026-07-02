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
                Hệ sinh thái FAI gồm 5 phân hệ đào tạo chuẩn quốc tế chuyển giao trực tiếp từ đối tác nước ngoài: Lập trình (Aptech), Thiết kế (Arena), Tiếp thị số (Skillking), Thiết kế vi mạch bán dẫn (Jetking Chip Design) và Trí tuệ nhân tạo (Jetking AI Agent).
              </p>
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
                      Số 8 Tôn Thất Thuyết, Nam Từ Liêm
                    </span>
                    <span style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.75)', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                      <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.6rem', marginTop: '4px' }}>◆</span>
                      94 Lương Yên, Hai Bà Trưng
                    </span>
                    <span style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.75)', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                      <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.6rem', marginTop: '4px' }}>◆</span>
                      264 Đội Cấn, Ba Đình
                    </span>
                  </div>
                </div>

                {/* TP. Hồ Chí Minh */}
                <div className="campus-city-block" style={{ marginTop: '5px' }}>
                  <h5 style={{ fontSize: '0.88rem', fontWeight: '800', color: '#ffffff', margin: '0 0 6px 0', textTransform: 'uppercase', opacity: 0.9, letterSpacing: '0.05em' }}>TP. Hồ Chí Minh</h5>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <span style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.75)', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                      <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.6rem', marginTop: '4px' }}>◆</span>
                      590 Cách Mạng Tháng Tám, Quận 3
                    </span>
                    <span style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.75)', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                      <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.6rem', marginTop: '4px' }}>◆</span>
                      302 Nguyễn Văn Đậu, Bình Thạnh
                    </span>
                    <span style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.75)', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                      <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.6rem', marginTop: '4px' }}>◆</span>
                      391A Nam Kỳ Khởi Nghĩa, Quận 3
                    </span>
                    <span style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.75)', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                      <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.6rem', marginTop: '4px' }}>◆</span>
                      KĐT Vạn Phúc, Thủ Đức
                    </span>
                  </div>
                </div>

                {/* Đà Nẵng & Cần Thơ */}
                <div className="campus-city-block" style={{ marginTop: '5px' }}>
                  <h5 style={{ fontSize: '0.88rem', fontWeight: '800', color: '#ffffff', margin: '0 0 6px 0', textTransform: 'uppercase', opacity: 0.9, letterSpacing: '0.05em' }}>Đà Nẵng &amp; Cần Thơ</h5>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <span style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.75)', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                      <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.6rem', marginTop: '4px' }}>◆</span>
                      130 Đống Đa, Hải Châu, Đà Nẵng
                    </span>
                    <span style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.75)', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                      <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.6rem', marginTop: '4px' }}>◆</span>
                      55 Cách Mạng Tháng 8, Bình Thủy, Cần Thơ
                    </span>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="contact-branch" style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingTop: '15px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <p style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: 0, color: 'rgba(255, 255, 255, 0.75)' }}>
                  <Phone size={16} style={{ color: 'rgba(255, 255, 255, 0.6)' }} />
                  <span><strong>Hotline hỗ trợ:</strong> 1900 6000</span>
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
            <h4 className="footer-col-title">THƯƠNG HIỆU THÀNH VIÊN</h4>
            <ul className="footer-links-list" style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <li>
                <a href="https://aptech.fpt.edu.vn" target="_blank" rel="noopener noreferrer" style={{ display: 'block', textDecoration: 'none' }}>
                  <strong style={{ color: '#ffffff', display: 'block', fontSize: '0.95rem', fontWeight: '700' }}>FPT Aptech</strong>
                  <span style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.55)', display: 'block', marginTop: '2px' }}>Lập trình viên Quốc tế</span>
                </a>
              </li>
              <li>
                <a href="https://arena.fpt.edu.vn" target="_blank" rel="noopener noreferrer" style={{ display: 'block', textDecoration: 'none' }}>
                  <strong style={{ color: '#ffffff', display: 'block', fontSize: '0.95rem', fontWeight: '700' }}>FPT Arena Multimedia</strong>
                  <span style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.55)', display: 'block', marginTop: '2px' }}>Mỹ thuật Đa phương tiện</span>
                </a>
              </li>
              <li>
                <a href="https://skillking.fpt.edu.vn" target="_blank" rel="noopener noreferrer" style={{ display: 'block', textDecoration: 'none' }}>
                  <strong style={{ color: '#ffffff', display: 'block', fontSize: '0.95rem', fontWeight: '700' }}>FPT Skillking</strong>
                  <span style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.55)', display: 'block', marginTop: '2px' }}>Digital Marketing chuyên sâu</span>
                </a>
              </li>
              <li>
                <a href="https://jetking.fpt.edu.vn" target="_blank" rel="noopener noreferrer" style={{ display: 'block', textDecoration: 'none' }}>
                  <strong style={{ color: '#ffffff', display: 'block', fontSize: '0.95rem', fontWeight: '700' }}>FPT Jetking Chip Design</strong>
                  <span style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.55)', display: 'block', marginTop: '2px' }}>Thiết kế Vi mạch Bán dẫn</span>
                </a>
              </li>
              <li>
                <a href="https://jetking.fpt.edu.vn" target="_blank" rel="noopener noreferrer" style={{ display: 'block', textDecoration: 'none' }}>
                  <strong style={{ color: '#ffffff', display: 'block', fontSize: '0.95rem', fontWeight: '700' }}>FPT Jetking AI Agent</strong>
                  <span style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.55)', display: 'block', marginTop: '2px' }}>Chuyên gia phát triển AI Agent</span>
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
