import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function AboutCTASection() {
  return (
    <section 
      id="doanh-nghiep"
      className="about-cta-section" 
      style={{ 
        padding: '100px 0', 
        background: 'linear-gradient(135deg, #e8741e 0%, #C9972C 100%)',
        color: '#ffffff',
        minHeight: '65vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Subtle decoration */}
      <div style={{
        position: 'absolute',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)',
        top: '-10%',
        right: '-10%',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '850px' }}>
          <span className="fai-section-eyebrow" style={{ color: '#ffffff', opacity: 0.9 }}>
            HỢP TÁC DOANH NGHIỆP
          </span>
          <h2 className="fai-section-heading-light" style={{ marginBottom: '40px' }}>
            FPT Academy International - Đối tác cung ứng nhân lực công nghệ số và sáng tạo uy tín hàng đầu của doanh nghiệp.
          </h2>
          <Link 
            href="/lien-he" 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '10px', 
              background: '#0D2137', 
              color: '#ffffff', 
              padding: '18px 40px', 
              borderRadius: '50px', 
              fontWeight: 700, 
              fontSize: '1rem',
              boxShadow: '0 10px 30px rgba(13,33,55,0.2)',
              transition: 'all 0.3s ease'
            }}
            className="about-cta-btn"
          >
            Liên hệ với FAI <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
