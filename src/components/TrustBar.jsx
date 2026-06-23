import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';

export default function TrustBar() {
  return (
    <div className="trust-bar">
      <div className="trust-bar-inner container">
        <div className="trust-item">
          <Check size={22} strokeWidth={2.5} style={{ color: 'var(--accent)', flexShrink: 0 }} />
          <span>Thành viên <strong>Tập đoàn FPT</strong></span>
        </div>
        <div className="trust-divider" />
        <div className="trust-item">
          <Check size={22} strokeWidth={2.5} style={{ color: 'var(--accent)', flexShrink: 0 }} />
          <span>Chuyển giao từ <strong>NIIT Ấn Độ</strong></span>
        </div>
        <div className="trust-divider" />
        <div className="trust-item">
          <Check size={22} strokeWidth={2.5} style={{ color: 'var(--accent)', flexShrink: 0 }} />
          <span>Chứng chỉ <strong>Quốc tế được công nhận</strong></span>
        </div>
        <div className="trust-divider" />
        <div className="trust-item trust-item--highlight">
          <span className="trust-years">18</span>
          <span>Năm Dẫn Đầu Ngành<br/><small>Công Nghệ Việt Nam</small></span>
        </div>
        <div className="trust-divider" />
        <div className="trust-item">
          <Link href="/tuyen-sinh" className="trust-cta-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            Đăng Ký Tư Vấn Miễn Phí <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}
