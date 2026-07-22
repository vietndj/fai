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
    subtitle: 'ĐÀO TẠO LẬP TRÌNH VIÊN QUỐC TẾ AI ĐA KỸ NĂNG',
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
    titleLine1: 'Thiết kế Mỹ thuật',
    titleLine2: 'đa phương tiện',
    subtitle: 'ĐÀO TẠO MULTIMEDIA ĐA KỸ NĂNG ỨNG DỤNG AI',
    desc: 'Được thành lập vào tháng 7/2004 trên cơ sở hợp tác giữa Tập đoàn FPT và Tập đoàn CNTT toàn cầu Aptech (Ấn Độ), FPT Arena Multimedia là hệ thống đào tạo Mỹ thuật đa phương tiện, tiên phong đưa khái niệm Multimedia đến với thế hệ trẻ Việt Nam.\n\nVới chương trình đào tạo bám sát nhu cầu của doanh nghiệp, FPT Arena Multimedia giúp học viên phát triển tư duy sáng tạo, xây dựng năng lực nghề nghiệp trong lĩnh vực thiết kế đa phương tiện.',
    tags: [
      'Arena Multimedia Specialist Program (2 năm)',
      'Thiết kế 2D, 3D, Game và App (6–18 tháng)',
      'Các khóa học ngắn hạn (100 giờ)',
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
    titleLine2: 'Ứng dụng AI',
    subtitle: 'ĐÀO TẠO MARKETING SỐ ỨNG DỤNG AI',
    desc: 'FPT Skillking là hệ thống đào tạo Digital Marketing được thành lập năm 2018, trên cơ sở hợp tác giữa Tập đoàn FPT và Tập đoàn Jetking (Ấn Độ), cung cấp chương trình học theo định hướng thực tiễn, trang bị cho học viên kiến thức từ nền tảng đến chuyên sâu trong lĩnh vực tiếp thị số.\n\nChương trình đào tạo tại FPT Skillking ứng dụng AI vào quá trình giảng dạy và thực hành, giúp học viên nâng cao năng lực công nghệ, phát triển tư duy chiến lược và đáp ứng yêu cầu của doanh nghiệp trong kỷ nguyên số.',
    tags: [
      'Fullstack Digital Marketing (18 tháng)',
      'Bộ khóa học Digital Marketing thực chiến (100 giờ)',
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
    subtitle: 'ĐÀO TẠO THIẾT KẾ VI MẠCH BÁN DẪN TÍCH HỢP AI',
    desc: 'Ngành vi mạch bán dẫn là nền tảng của các công nghệ như AI, IoT và 5G, đồng thời đang đối mặt với tình trạng thiếu hụt nhân lực chất lượng cao trên toàn cầu. Hợp tác cùng Jetking (Ấn Độ), FPT Jetking triển khai chương trình Thiết kế vi mạch bán dẫn tích hợp AI theo chuẩn quốc tế, trang bị kiến thức, kỹ năng thực hành và kinh nghiệm thực tiễn, đáp ứng nhu cầu tuyển dụng trong nước và quốc tế.',
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
    titleLine1: 'Lập trình',
    titleLine2: 'AI Agent',
    subtitle: 'KỸ SƯ PHÁT TRIỂN HỆ THỐNG AI AGENT',
    desc: 'Nhu cầu nhân lực AI Agent đang tăng trưởng 35 - 50% mỗi năm. Đến năm 2027, AI được dự báo sẽ tạo ra hơn 97 triệu việc làm mới, trong đó AI Agent là một trong những lĩnh vực có nhu cầu tuyển dụng cao.\n\nFPT Jetking triển khai chương trình Lập trình AI Agent, trang bị kiến thức và kỹ năng xây dựng AI Agent hiện đại, giúp học viên sẵn sàng nắm bắt cơ hội nghề nghiệp trong kỷ nguyên AI.',
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
      <div className="prog-beau-header-wrap" data-reveal style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <span className="section-eyebrow" style={{ letterSpacing: '0.05em', marginLeft: 0, paddingLeft: 0 }}>Chương trình đào tạo Liên kết Quốc Tế</span>
        <h2 className="prog-beau-title-main" style={{ letterSpacing: 0, marginLeft: 0, paddingLeft: 0 }}>
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
                  {/* Left Column: Number (centered vertically with logo) */}
                  <div style={{ height: '68px', display: 'flex', alignItems: 'center' }}>
                    <span className="prog-beau-num" style={{ color: prog.color, margin: 0, lineHeight: 1 }}>{prog.num}</span>
                  </div>

                  {/* Right Column: Logo & Title (100% flush left alignment) */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', margin: 0, padding: 0 }}>
                    <div className="prog-beau-logo-wrapper" style={{ height: '68px', display: 'flex', alignItems: 'center', margin: '0 0 16px 0', padding: 0 }}>
                      <Image 
                        src={prog.logo} 
                        alt={prog.brand} 
                        width={260} 
                        height={68} 
                        style={{ 
                          objectFit: 'contain', 
                          objectPosition: 'left center',
                          width: 'auto', 
                          height: '100%', 
                          maxWidth: '280px',
                          margin: 0,
                          padding: 0
                        }} 
                      />
                    </div>
                    <h3 className="prog-beau-item-title" style={{ letterSpacing: 0, margin: 0, padding: 0 }}>
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
                      <li key={tIdx} style={{ '--tag-arrow-color': prog.color }}>{t}</li>
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
