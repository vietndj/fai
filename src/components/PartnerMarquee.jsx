'use client';

import Image from 'next/image';
import Link from 'next/link';

/**
 * Logos load từ Clearbit Logo API (logo.clearbit.com/{domain})
 * — CDN công cộng, miễn phí, không cần API key
 * Fallback: hiện text nếu ảnh lỗi
 */
const partners = [
  { name: 'FPT Software',    logo: 'https://logo.clearbit.com/fpt.com.vn',           fallback: 'FPT Software'    },
  { name: 'Ubisoft',         logo: 'https://logo.clearbit.com/ubisoft.com',           fallback: 'Ubisoft'         },
  { name: 'Adobe',           logo: 'https://logo.clearbit.com/adobe.com',             fallback: 'Adobe'           },
  { name: 'Google',          logo: 'https://logo.clearbit.com/google.com',            fallback: 'Google'          },
  { name: 'Meta',            logo: 'https://logo.clearbit.com/meta.com',              fallback: 'Meta'            },
  { name: 'MoMo',            logo: 'https://logo.clearbit.com/momo.vn',              fallback: 'MoMo'            },
  { name: 'KPMG',            logo: 'https://logo.clearbit.com/kpmg.com',             fallback: 'KPMG'            },
  { name: 'PwC',             logo: 'https://logo.clearbit.com/pwc.com',              fallback: 'PwC'             },
  { name: 'Shopee',          logo: 'https://logo.clearbit.com/shopee.vn',            fallback: 'Shopee'          },
  { name: 'Grab',            logo: 'https://logo.clearbit.com/grab.com',             fallback: 'Grab'            },
  { name: 'VNG',             logo: 'https://logo.clearbit.com/vng.com.vn',           fallback: 'VNG'             },
  { name: 'Techcombank',     logo: 'https://logo.clearbit.com/techcombank.com.vn',   fallback: 'Techcombank'     },
  { name: 'Viettel',         logo: 'https://logo.clearbit.com/viettel.com.vn',       fallback: 'Viettel'         },
  { name: 'VNPT',            logo: 'https://logo.clearbit.com/vnpt.vn',              fallback: 'VNPT'            },
  { name: 'Gameloft',        logo: 'https://logo.clearbit.com/gameloft.com',         fallback: 'Gameloft'        },
  { name: 'Dentsu',          logo: 'https://logo.clearbit.com/dentsu.com',           fallback: 'Dentsu'          },
  { name: 'GroupM',          logo: 'https://logo.clearbit.com/groupm.com',           fallback: 'GroupM'          },
  { name: 'Ogilvy',          logo: 'https://logo.clearbit.com/ogilvy.com',           fallback: 'Ogilvy'          },
  { name: 'Vingroup',        logo: 'https://logo.clearbit.com/vingroup.net',         fallback: 'Vingroup'        },
  { name: 'Deloitte',        logo: 'https://logo.clearbit.com/deloitte.com',         fallback: 'Deloitte'        },
];

function LogoCard({ partner }) {
  return (
    <div className="marquee-logo-card">
      <div className="marquee-logo-img-wrap">
        <img
          src={partner.logo}
          alt={partner.name}
          className="marquee-logo-img"
          loading="lazy"
          onError={(e) => {
            // Fallback: ẩn ảnh, hiện text
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'block';
          }}
        />
        <span className="marquee-logo-fallback" style={{ display: 'none' }}>
          {partner.fallback}
        </span>
      </div>
      <span className="marquee-logo-name">{partner.name}</span>
    </div>
  );
}

export default function PartnerMarquee() {
  // Double list for seamless infinite scroll
  const doubled = [...partners, ...partners];

  return (
    <section className="partner-section">
      <div className="container">
        <div className="partner-header" data-reveal>
          <span className="section-eyebrow">Cam kết đầu ra</span>
          <h2 className="partner-headline">
            200+ Doanh Nghiệp<br />Đang Tuyển Dụng Sinh Viên FAI
          </h2>
          <p className="partner-desc">
            Từ các tập đoàn công nghệ toàn cầu đến doanh nghiệp Việt Nam hàng đầu — mạng lưới tuyển dụng rộng khắp của FAI đảm bảo cơ hội việc làm ngay sau tốt nghiệp.
          </p>
        </div>
      </div>

      {/* Row 1 — forward */}
      <div className="marquee-wrapper">
        <div className="marquee-track marquee-slow-forward">
          {doubled.map((p, i) => <LogoCard key={`f-${i}`} partner={p} />)}
        </div>
      </div>

      {/* Row 2 — backward */}
      <div className="marquee-wrapper">
        <div className="marquee-track marquee-slow-backward">
          {doubled.map((p, i) => <LogoCard key={`b-${i}`} partner={p} />)}
        </div>
      </div>

      <div className="partner-cta" data-reveal>
        <Link href="/doi-song#viec-lam" className="btn btn-outline-navy">
          Xem tất cả đối tác tuyển dụng →
        </Link>
      </div>
    </section>
  );
}
