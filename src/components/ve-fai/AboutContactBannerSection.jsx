import Link from 'next/link';

export default function AboutContactBannerSection() {
  return (
    <section 
      className="about-last-cta-section" 
      style={{ 
        padding: '80px 0', 
        backgroundColor: '#ffffff', 
        color: '#0D2137',
        minHeight: '35vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
    >
      <div className="container">
        <Link 
          href="/tuyen-sinh#dang-ky" 
          style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            padding: '30px 0',
            borderBottom: '2px solid var(--primary)',
            transition: 'all 0.3s ease',
            color: '#0D2137'
          }}
          className="about-join-link"
        >
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 700, margin: 0, fontFamily: 'var(--font-sans)', color: '#0D2137' }}>
            Gia nhập FAI cùng chúng tôi
          </h2>
          <span style={{ color: 'var(--primary)' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="45" viewBox="0 0 104.728 79.511">
              <g transform="translate(4.053 3.583)">
                <path d="M1,.528l87.979.946" transform="translate(0 35)" fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="10"/>
                <path d="M0,0,37.165,36.172,0,72.345" transform="translate(56.34)" fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="10"/>
              </g>
            </svg>
          </span>
        </Link>
      </div>
    </section>
  );
}
