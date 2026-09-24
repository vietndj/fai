import { 
  Sparkles, 
  UserCheck, 
  CheckCircle2, 
  FileText, 
  Award, 
  Copy, 
  Send 
} from 'lucide-react';

export default function HeroSection() {
  return (
    <section 
      className="admissions-hero-section" 
      style={{ 
        padding: '70px 0 60px 0', 
        backgroundColor: '#ffffff',
        borderBottom: '1px solid rgba(0, 0, 0, 0.06)'
      }}
    >
      <div className="container">
        <div style={{ maxWidth: '960px' }}>
          <span className="fai-badge fai-badge-primary" style={{ marginBottom: '16px' }}>
            <Sparkles size={14} /> QUY CHẾ TUYỂN SINH 2026
          </span>
          
          <h1 className="fai-section-heading">
            Quy chế tuyển sinh &amp; Điều kiện nhập học 2026
          </h1>
          
          <p className="fai-section-description">
            Thông tin chi tiết về đối tượng tuyển sinh, chính sách xét tuyển thẳng, chế độ học bổng và thủ tục nhập học chính thức năm 2026 tại Viện Đào tạo Quốc tế FPT (FAI).
          </p>

          {/* Quick Navigation Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '10px' }}>
            <a href="#thong-tin" className="fai-pill-nav">
              <UserCheck size={14} style={{ color: 'var(--primary)' }} /> Đối tượng tuyển sinh
            </a>
            <a href="#phuong-thuc" className="fai-pill-nav">
              <CheckCircle2 size={14} style={{ color: 'var(--primary)' }} /> Xét tuyển thẳng
            </a>
            <a href="#ho-so" className="fai-pill-nav">
              <FileText size={14} style={{ color: 'var(--primary)' }} /> Quy trình &amp; Hồ sơ
            </a>
            <a href="#hoc-bong" className="fai-pill-nav">
              <Award size={14} style={{ color: 'var(--primary)' }} /> Học bổng 4 thương hiệu
            </a>
            <a href="#hoc-phi" className="fai-pill-nav">
              <Copy size={14} style={{ color: 'var(--primary)' }} /> Chính sách học phí
            </a>
            <a 
              href="#dang-ky"
              className="fai-pill-nav"
              style={{
                backgroundColor: 'var(--primary)',
                color: '#ffffff',
                borderColor: 'var(--primary)',
                boxShadow: '0 4px 12px rgba(232, 116, 30, 0.25)'
              }}
            >
              <Send size={14} /> Đăng ký trực tuyến
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
