import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="container footer-content">
        <div className="footer-main-grid">
          {/* Logo & Intro */}
          <div className="footer-brand-col">
            <Link href="/" className="footer-logo">
              <span className="logo-fpt">FPT</span>
              <span className="logo-fai" style={{ color: '#ffffff' }}>FAI</span>
            </Link>
            <p className="footer-brand-desc">
              Hệ thống đào tạo liên kết quốc tế thuộc tập đoàn FPT, quy tụ các thương hiệu giáo dục công nghệ hàng đầu toàn cầu.
            </p>
            <div className="social-links">
              <a href="#" className="social-icon" aria-label="Facebook">
                FB
              </a>
              <a href="#" className="social-icon" aria-label="Youtube">
                YT
              </a>
              <a href="#" className="social-icon" aria-label="Tiktok">
                TT
              </a>
            </div>
          </div>

          {/* Quick Links Column 1 */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Thương hiệu thành viên</h4>
            <ul className="footer-links-list">
              <li><Link href="#">Arena Multimedia</Link></li>
              <li><Link href="#">Aptech Computer Education</Link></li>
              <li><Link href="#">FPT Skillking</Link></li>
            </ul>
          </div>

          {/* Quick Links Column 2 */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Thông tin hữu ích</h4>
            <ul className="footer-links-list">
              <li><Link href="#">Giới thiệu FAI</Link></li>
              <li><Link href="#">Chính sách Tuyển sinh</Link></li>
              <li><Link href="#">Học bổng tài năng</Link></li>
              <li><Link href="#">Cổng thông tin sinh viên</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="footer-contact-col">
            <h4 className="footer-col-title">Liên hệ</h4>
            <ul className="contact-info-list">
              <li>
                <strong>Điện thoại:</strong> 1900 6000<br/>
                024 7300 8855 (Tư vấn tuyển sinh)
              </li>
              <li>
                <strong>Email:</strong> fai@fpt.edu.vn
              </li>
              <li>
                <strong>Địa chỉ:</strong> Số 8, Tôn Thất Thuyết, Mỹ Đình, Nam Từ Liêm, Hà Nội
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            Copyright © {new Date().getFullYear()} FPT Academy International. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
