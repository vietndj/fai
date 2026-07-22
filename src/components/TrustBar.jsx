import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';

export default function TrustBar() {
  return (
    <div className="trust-bar">
      <div className="trust-bar-inner container">
        <div className="trust-item">
          <Check size={22} strokeWidth={2.5} style={{ color: 'var(--primary)', flexShrink: 0 }} />
          <span>Thành viên <strong>Tổ chức giáo dục FPT</strong></span>
        </div>
        <div className="trust-divider" />
        <div className="trust-item">
          <Check size={22} strokeWidth={2.5} style={{ color: 'var(--primary)', flexShrink: 0 }} />
          <span>Chương trình học <strong>tích hợp AI</strong></span>
        </div>
        <div className="trust-divider" />
        <div className="trust-item">
          <Check size={22} strokeWidth={2.5} style={{ color: 'var(--primary)', flexShrink: 0 }} />
          <span>Chứng chỉ <strong>Quốc Tế từ Ấn Độ</strong></span>
        </div>
        <div className="trust-divider" />
        <div className="trust-item trust-item--highlight">
          <span className="trust-years">27</span>
          <span>Năm Dẫn Đầu Phát Triển<br/><small>Nhân Lực Công Nghệ & Sáng Tạo</small></span>
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
