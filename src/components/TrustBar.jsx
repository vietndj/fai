import Link from 'next/link';

export default function TrustBar() {
  return (
    <div className="trust-bar">
      <div className="trust-bar-inner container">
        <div className="trust-item">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
          <span>Thành viên <strong>Tập đoàn FPT</strong></span>
        </div>
        <div className="trust-divider" />
        <div className="trust-item">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
          <span>Chuyển giao từ <strong>NIIT Ấn Độ</strong></span>
        </div>
        <div className="trust-divider" />
        <div className="trust-item">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
          <span>Chứng chỉ <strong>Quốc tế được công nhận</strong></span>
        </div>
        <div className="trust-divider" />
        <div className="trust-item trust-item--highlight">
          <span className="trust-years">18</span>
          <span>Năm Dẫn Đầu Ngành<br/><small>Công Nghệ Việt Nam</small></span>
        </div>
        <div className="trust-divider" />
        <div className="trust-item">
          <Link href="/tuyen-sinh" className="trust-cta-link">
            Đăng Ký Tư Vấn Miễn Phí →
          </Link>
        </div>
      </div>
    </div>
  );
}
