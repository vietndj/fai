'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ParticleCanvas from './ParticleCanvas';
import ScrollTypewriter from './ScrollTypewriter';

const programs = [
  {
    num: '01',
    brand: 'FPT APTECH',
    logo: '/logo_aptech.png',
    titleLine1: 'Lập trình viên',
    titleLine2: 'Quốc tế',
    subtitle: 'LẬP TRÌNH VIÊN QUỐC TẾ',
    desc: 'Là đơn vị đào tạo công nghệ đầu tiên của Tập đoàn FPT từ năm 1999 liên kết với Tập đoàn Công nghệ thông tin toàn cầu Aptech Ấn Độ, với kinh nghiệm đào tạo 27 năm tại Việt Nam chương trình Lập trình tại FPT Aptech tích hợp AI được thiết kế giúp bạn học nhanh – đi làm sớm, tối ưu thời gian, tăng trải nghiệm thực tế và đáp ứng đúng nhu cầu của doanh nghiệp.',
    tags: [
      'Lập trình Fullstack trong 2 năm',
      'Lập trình Back end trong 1 năm',
      'Lập trình Front end trong 6 tháng',
      'Lập trình ngắn hạn 100-200h',
    ],
    image: '/fai_banner_aptech_v2.png',
    stat: '27+',
    statLabel: 'năm đào tạo toàn cầu',
    color: '#f37021',
    href: '/dao-tao/aptech',
  },
  {
    num: '02',
    brand: 'FPT ARENA MULTIMEDIA',
    logo: '/logo_arena.png',
    titleLine1: 'Thiết kế mỹ thuật',
    titleLine2: 'Đa phương tiện',
    subtitle: 'THIẾT KẾ MỸ THUẬT ĐA PHƯƠNG TIỆN',
    desc: 'Thành lập từ tháng 7 – 2004, FPT Arena Multimedia ra đời từ sự hợp tác của Tập đoàn FPT và Tập đoàn CNTT toàn cầu Aptech Ấn Độ, là hệ thống đào tạo Mỹ thuật đa phương tiện đầu tiên và tiên phong đặt khái niệm Multimedia tại Việt Nam.',
    tags: [
      'Chương trình Arena Multimedia Specialist Program 2 năm',
      'Thiết kế 2D/ 3D/ Game/ App từ 6-18 tháng',
      'Khoá học ngắn hạn 100h',
    ],
    image: '/fai_banner_arena_v2.png',
    stat: '22',
    statLabel: 'năm hoạt động tiên phong',
    color: '#ffb600',
    href: '/dao-tao/arena',
  },
  {
    num: '03',
    brand: 'FPT SKILLKING',
    logo: '/logo_skillking.png',
    titleLine1: 'Digital Marketing',
    titleLine2: 'Fullstack',
    subtitle: 'DIGITAL MARKETING FULLSTACK',
    desc: 'FPT Skillking tự hào là Hệ thống đào tạo chuyên sâu ngành Digital Marketing đầu tiên tại Việt Nam từ 2018, cung cấp kiến thức chuyên ngành trọng tâm từ căn bản đến nâng cao, tích hợp AI trong giảng dạy và thực hành giúp sinh viên nâng cao kỹ năng trong thời đại công nghệ 5.0',
    tags: [
      'Fullstack Digital Marketing 18 tháng',
      'Bộ Khoá học ngắn hạn 100h thực chiến',
    ],
    image: '/fai_banner_skillking_v2.png',
    stat: '2018',
    statLabel: 'tiên phong tại Việt Nam',
    color: '#29a9e1',
    href: '/dao-tao/skillking',
  },
  {
    num: '04',
    brand: 'FPT JETKING',
    logo: '/logo_jetking.png',
    titleLine1: 'Thiết kế vi mạch',
    titleLine2: 'Bán dẫn',
    subtitle: 'THIẾT KẾ VI MẠCH BÁN DẪN',
    desc: 'Ngành vi mạch bán dẫn (Semiconductor) đang là nền tảng cốt lõi của các công nghệ hiện đại như AI, IoT và 5G, với giá trị thị trường toàn cầu dự báo sẽ đạt hàng nghìn tỷ USD trong thập kỷ tới. Tuy nhiên, tình trạng thiếu hụt nhân lực chất lượng cao đang trở thành rào cản lớn. Trên cơ sở hợp tác giữa Tập đoàn FPT và Jetking (Ấn Độ), FPT Jetking tập trung phát triển nguồn nhân lực có năng lực chuyên môn vững vàng, sẵn sàng thích ứng với sự thay đổi nhanh chóng của thị trường công nghệ.\n\nChương trình Thiết kế vi mạch bán dẫn quốc tế tích hợp AI của FPT Jetking được xây dựng theo lộ trình chuyên sâu, kết hợp kiến thức nền tảng, kỹ năng thực hành và trải nghiệm thực tế, hướng tới đào tạo thế hệ kỹ sư vi mạch đáp ứng yêu cầu của doanh nghiệp trong nước và thị trường quốc tế.',
    tags: [
      'Thiết kế vi mạch bán dẫn quốc tế tích hợp AI',
    ],
    image: '/fai_banner_chip_design_v2.png',
    stat: 'Semicon',
    statLabel: 'công nghệ bán dẫn toàn cầu',
    color: '#ed232a',
    href: '/dao-tao/chip-design',
  },
  {
    num: '05',
    brand: 'FPT JETKING',
    logo: '/logo_jetking.png',
    titleLine1: 'Chuyên gia',
    titleLine2: 'AI Agent',
    subtitle: 'CHUYÊN GIA AI AGENT',
    desc: 'Nhu cầu về nhân lực AI Agent đang tăng trưởng từ 35-50% mỗi năm, là nòng cốt của mọi doanh nghiệp trong thời đại mới. AI hiện diện trong chatbot, trợ lý ảo, hệ thống đề xuất, dịch vụ khách hàng tự động và xây dựng các hệ thống đa tác nhân (Multi-Agent System) có thể phối hợp giải quyết các vấn đề phức tạp như con người. Theo dự báo đến năm 2027, AI có thể tạo ra hơn 97 triệu việc làm mới, đặc biệt là các vị trí liên quan đến AI Agent, NLP và học máy.\n\nVới định hướng đào tạo nguồn nhân lực công nghệ theo chuẩn quốc tế, FPT Jetking kế thừa nền tảng đào tạo CNTT của Tập đoàn FPT, triển khai chương trình Lập trình AI Agent giúp học viên tiếp cận các công nghệ AI hiện đại, sẵn sàng thích ứng với nhu cầu nhân lực trong kỷ nguyên trí tuệ nhân tạo.',
    tags: [
      'Lập trình AI Agent',
    ],
    image: '/fai_banner_ai_agent_v2.png',
    stat: 'AI Agent',
    statLabel: '97 triệu việc làm mới',
    color: '#ed232a',
    href: '/dao-tao/ai-agent',
  }
];

export default function ProgramBeau() {
  const [active, setActive]       = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  return (
    <section className="prog-beau-section">
      {/* Particles background */}
      <ParticleCanvas className="prog-beau-particles" />

      {/* HEADER */}
      <div className="prog-beau-header-wrap" data-reveal>
        <span className="section-eyebrow">Chương trình đào tạo Liên kết Quốc Tế</span>
        <h2 className="prog-beau-title-main">
          <ScrollTypewriter text="FPT ACADEMY INTERNATIONAL" />
        </h2>
      </div>

      {/* Two-Column List Grid */}
      <div className="prog-beau-container-full">
        <div className="prog-beau-list">
          {programs.map((prog, idx) => (
            <div
              key={idx}
              className={`prog-beau-item ${
                active === idx ? 'is-active' : ''
              } ${
                isHovering && active !== idx ? 'is-dimmed' : ''
              }`}
              onMouseEnter={() => {
                setActive(idx);
                setIsHovering(true);
              }}
              onMouseLeave={() => {
                setIsHovering(false);
              }}
            >
              <div className="prog-beau-item-inner">
                {/* Title Column */}
                <div className="prog-beau-title-col">
                  <span className="prog-beau-num" style={{ color: prog.color }}>{prog.num}</span>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                      <Image src={prog.logo} alt={prog.brand} width={20} height={20} style={{ objectFit: 'contain' }} />
                      <span className="prog-beau-brand-tag" style={{ color: prog.color, margin: 0 }}>{prog.brand}</span>
                    </div>
                    <h3 className="prog-beau-item-title">
                      {prog.titleLine1} <br />
                      <span>{prog.titleLine2}</span>
                    </h3>
                  </div>
                  <div className="prog-beau-line" style={{ backgroundColor: prog.color }} />
                </div>

                {/* Content Column */}
                <div className="prog-beau-content-col">
                  <span className="prog-beau-subtitle">{prog.subtitle}</span>
                  <p className="prog-beau-desc">{prog.desc}</p>
                  
                  <ul className="prog-beau-tags">
                    {prog.tags.map((t, tIdx) => (
                      <li key={tIdx}>{t}</li>
                    ))}
                  </ul>

                  <div className="prog-beau-meta">
                    <div className="prog-beau-stat">
                      <span className="prog-beau-stat-num" style={{ color: prog.color }}>{prog.stat}</span>
                      <span className="prog-beau-stat-lbl">{prog.statLabel}</span>
                    </div>
                    <Link href={prog.href} className="prog-beau-link" style={{ '--link-color': prog.color }}>
                      Khám phá chương trình →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
