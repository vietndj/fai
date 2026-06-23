import Link from 'next/link';

const partners = [
  'FPT Software', 'VNG Corporation', 'Viettel', 'Ogilvy Vietnam',
  'Grab Vietnam', 'Shopee', 'Gameloft', 'Ubisoft Vietnam',
  'Adobe', 'Google Việt Nam', 'Meta', 'Momo',
  'KPMG', 'PwC Vietnam', 'Dentsu', 'GroupM',
  'FPT IS', 'Vingroup IT', 'Techcombank', 'VNPT'
];

export default function PartnerMarquee() {
  const doubled = [...partners, ...partners];
  return (
    <section className="partner-section">
      <div className="partner-header">
        <span className="partner-eyebrow">Cam kết đầu ra</span>
        <h2 className="partner-headline">
          200+ Doanh Nghiệp Đang Tuyển Dụng Sinh Viên FAI
        </h2>
      </div>
      <div className="marquee-wrapper">
        <div className="marquee-track marquee-forward">
          {doubled.map((p, i) => (
            <div key={i} className="marquee-logo-card">
              <span className="marquee-logo-text">{p}</span>
            </div>
          ))}
        </div>
        <div className="marquee-track marquee-backward">
          {doubled.map((p, i) => (
            <div key={i} className="marquee-logo-card">
              <span className="marquee-logo-text">{p}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="partner-cta">
        <Link href="/doi-song#viec-lam" className="btn btn-outline-light">
          Xem tất cả đối tác tuyển dụng →
        </Link>
      </div>
    </section>
  );
}
