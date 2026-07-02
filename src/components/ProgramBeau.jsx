'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ParticleCanvas from './ParticleCanvas';

const programs = [
  {
    num: '01',
    brand: 'FPT APTECH',
    logo: '/logo_aptech.png',
    titleLine1: 'Software Engineering',
    titleLine2: '& Technology',
    subtitle: 'Lập Trình & Phát Triển Phần Mềm Quốc Tế',
    desc: 'Chương trình ADSE — chuẩn bằng cấp Ấn Độ được công nhận tại 40+ quốc gia. Đào tạo chuyên sâu từ nền tảng lập trình đến AI, Cloud và Khoa học Dữ liệu trong môi trường Lab hiện đại chuẩn doanh nghiệp.',
    tags: [
      'Lập trình viên Quốc tế (ADSE)',
      'Trí tuệ Nhân tạo & Machine Learning',
      'Khoa học Dữ liệu (Data Science)',
      'Java / .NET / Python / Cloud',
      'Mobile App Development',
    ],
    image: '/fai_banner_aptech_v2.png',
    stat: '28+',
    statLabel: 'năm đào tạo toàn cầu',
    color: '#e31a22',
    href: '/dao-tao/aptech',
  },
  {
    num: '02',
    brand: 'FPT ARENA',
    logo: '/logo_arena.png',
    titleLine1: 'Multimedia Design',
    titleLine2: '& Creative Arts',
    subtitle: 'Thiết Kế & Nghệ Thuật Kỹ Thuật Số',
    desc: 'Chương trình Arena Animation — nơi tư duy sáng tạo gặp công nghệ số. Từ đồ hoạ thương hiệu, thiết kế web đến kỹ xảo điện ảnh 3D và thiết kế game — đào tạo chuyên gia sáng tạo đẳng cấp quốc tế.',
    tags: [
      'Mỹ thuật Đa phương tiện (AAM)',
      'Kỹ xảo 3D & Điện ảnh',
      'UI/UX & Motion Graphics',
      'Thiết kế Game & Hoạt hình',
      'Thiết kế Đồ hoạ & Nhận diện Thương hiệu',
    ],
    image: '/fai_banner_arena_v2.png',
    stat: '20+',
    statLabel: 'năm tại Việt Nam',
    color: '#ffb600',
    href: '/dao-tao/arena',
  },
  {
    num: '03',
    brand: 'FPT SKILLKING',
    logo: '/logo_skillking.png',
    titleLine1: 'Digital Marketing',
    titleLine2: '& Business Growth',
    subtitle: 'Chiến Lược Tiếp Thị Số & Tăng Trưởng',
    desc: 'Đào tạo 100% thực chiến theo chuẩn Google & Meta. Trang bị tư duy chiến lược dữ liệu, kỹ năng quảng cáo hiệu suất và tối ưu tăng trưởng doanh nghiệp.',
    tags: [
      'Digital Marketing Toàn Diện',
      'Quản trị Quảng cáo Google & Meta',
      'SEO / SEM & Content Strategy',
      'Data Analytics & Performance',
      'E-Commerce & Growth Hacking',
    ],
    image: '/fai_banner_skillking_v2.png',
    stat: 'Google & Meta',
    statLabel: 'chuẩn chứng chỉ quốc tế',
    color: '#09529c',
    href: '/dao-tao/skillking',
  },
  {
    num: '04',
    brand: 'FPT JETKING CHIP DESIGN',
    logo: '/logo_jetking.png',
    titleLine1: 'Semiconductor',
    titleLine2: 'IC Design',
    subtitle: 'Thiết Kế Vi Mạch Bán Dẫn Tích Hợp AI',
    desc: 'Đón đầu làn sóng cách mạng công nghệ bán dẫn toàn cầu. Chương trình đào tạo chuyên sâu về thiết kế SoC, ASIC, lập trình FPGA và ứng dụng các công cụ EDA chuẩn công nghiệp.',
    tags: [
      'Thiết kế Vi mạch Bán dẫn',
      'Lập trình HDL (Verilog/VHDL)',
      'Công cụ EDA Synopsys/Cadence',
      'Tích hợp AI trong IC Design',
      'SoC/ASIC/FPGA Design',
    ],
    image: '/fai_banner_chip_design_v2.png',
    stat: 'Semi-Con',
    statLabel: 'công nghệ tương lai',
    color: '#f37021',
    href: '/dao-tao/chip-design',
  },
  {
    num: '05',
    brand: 'FPT JETKING AI AGENT',
    logo: '/logo_jetking.png',
    titleLine1: 'AI Agent &',
    titleLine2: 'Intelligent Systems',
    subtitle: 'Chuyên Gia Phát Triển Nhân Sự AI',
    desc: 'Tiên phong đào tạo nhân sự AI tự hành thực chiến. Xây dựng kỹ năng phát triển LLMs, NLP, học máy nâng cao và phát triển các hệ thống Multi-Agent tích hợp sâu rộng.',
    tags: [
      'AI Agent & Kỹ nghệ AI',
      'Generative AI & LLMs',
      'Multi-Agent CrewAI/LangGraph',
      'Machine Learning & Deep Learning',
      'MLOps & AI System Deployment',
    ],
    image: '/fai_banner_ai_agent_v2.png',
    stat: 'AI Agent',
    statLabel: 'đón đầu xu thế',
    color: '#0066b3',
    href: '/dao-tao/ai-agent',
  },
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
        <span className="section-eyebrow">Chương trình đào tạo quốc tế</span>
        <h2 className="prog-beau-title-main">
          Hệ Thống<br />Đào Tạo FAI
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
