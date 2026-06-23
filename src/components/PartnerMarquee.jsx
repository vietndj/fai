'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

/**
 * Logos load từ Clearbit Logo API (logo.clearbit.com/{domain})
 * — CDN công cộng, miễn phí, không cần API key
 * Fallback: hiện text nếu ảnh lỗi
 */
const partners = [
  { name: 'Sendo',           logo: '/partners/sendo.png',           fallback: 'Sendo'           },
  { name: 'MoMo',            logo: '/partners/momo.png',            fallback: 'MoMo'            },
  { name: 'Haravan',         logo: '/partners/haravan.png',         fallback: 'Haravan'         },
  { name: 'Accesstrade',     logo: '/partners/accesstrade.png',     fallback: 'Accesstrade'     },
  { name: 'Repu Digital',    logo: '/partners/repu_digital.png',    fallback: 'Repu Digital'    },
  { name: 'Pati Group',      logo: '/partners/pati_group.png',      fallback: 'Pati Group'      },
  { name: 'LadiPage',        logo: '/partners/ladipage_1.png',      fallback: 'LadiPage'        },
  { name: 'Nutifood',        logo: '/partners/nutifood.png',        fallback: 'Nutifood'        },
  { name: 'Điền Quân Group', logo: '/partners/dien_quan.png',       fallback: 'Điền Quân'       },
  { name: 'FPT Online',      logo: '/partners/fpt_online.png',      fallback: 'FPT Online'      },
  { name: 'Yo',              logo: '/partners/yo.png',              fallback: 'Yo'              },
  { name: 'The Ad Agency',   logo: '/partners/the_ad_agency.png',   fallback: 'The Ad Agency'   },
  { name: 'Thunder Cloud',   logo: '/partners/thunder_cloud.png',   fallback: 'Thunder Cloud'   },
  { name: 'AMD',             logo: '/partners/amd.png',             fallback: 'AMD'             },
  { name: 'Agilearn',        logo: '/partners/agilearn.png',        fallback: 'Agilearn'        },
  { name: 'Myad Academy',    logo: '/partners/myad_academy.png',    fallback: 'Myad Academy'    },
  { name: 'Hub-js',          logo: '/partners/hub_js.png',          fallback: 'Hub-js'          },
  { name: 'OneUniverse VN',  logo: '/partners/oneuniverse_vn.png',  fallback: 'OneUniverse VN'  },
  { name: 'Marcoate',        logo: '/partners/marcoate.png',        fallback: 'Marcoate'        },
  { name: 'VNG',             logo: '/partners/vng.png',             fallback: 'VNG'             },
  { name: 'Comic Smart',     logo: '/partners/comic_smart.png',     fallback: 'Comic Smart'     },
  { name: 'TopCV',           logo: '/partners/topcv.png',           fallback: 'TopCV'           },
  { name: 'Sparx*',          logo: '/partners/sparx.png',           fallback: 'Sparx*'          },
  { name: 'AltaMedia',       logo: '/partners/altamedia.png',       fallback: 'AltaMedia'       },
  { name: 'Lovepop',         logo: '/partners/lovepop.png',         fallback: 'Lovepop'         },
  { name: 'LadiPage Alt',    logo: '/partners/ladipage_2.png',      fallback: 'LadiPage'        },
  { name: 'MePuzz',          logo: '/partners/mepuzz.png',          fallback: 'MePuzz'          },
  { name: 'FPT Telecom',     logo: '/partners/fpt_telecom.png',     fallback: 'FPT Telecom'     },
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
        <Link href="/doi-song#viec-lam" className="btn btn-outline-navy" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
          Xem tất cả đối tác tuyển dụng <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
