'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ScrollTypewriter from '@/components/ScrollTypewriter';

const programsList = [
  {
    logo: '/logo_aptech.png',
  },
  {
    logo: '/logo_arena.png',
  },
  {
    logo: '/logo_skillking.png',
    logoOffsetY: '-8px'
  },
  {
    logo: '/logo_jetking.png',
  }
];

export default function AboutProgramsSection() {
  return (
    <section 
      id="chuong-trinh"
      className="about-programs-section" 
      style={{ 
        padding: '120px 0', 
        backgroundColor: '#ffffff', 
        color: '#1a2332',
        minHeight: '75vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
    >
      <div className="container">
        <div style={{ marginBottom: '50px', textAlign: 'center' }}>
          <span className="fai-section-eyebrow">CHƯƠNG TRÌNH ĐÀO TẠO</span>
          <h2 className="fai-section-heading">
            <ScrollTypewriter text="Hệ thống chương trình chuẩn Quốc tế" />
          </h2>
        </div>

        {/* 4 Program Cards (Centered Logos) */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
            gap: '36px',
            alignItems: 'center' 
          }}
        >
          {programsList.map((prog, idx) => (
            <div 
              key={idx} 
              className="program-list-card"
              style={{ 
                background: 'transparent', 
                border: 'none', 
                borderRadius: '20px', 
                padding: '24px 16px', 
                boxShadow: 'none',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                transition: 'none',
                transform: 'none'
              }}
            >
              <div 
                style={{ 
                  height: '90px', 
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative'
                }}
              >
                <Image 
                  src={prog.logo} 
                  alt="Program Logo" 
                  width={300} 
                  height={90} 
                  style={{ 
                    objectFit: 'contain', 
                    objectPosition: 'center', 
                    width: 'auto', 
                    height: '85px', 
                    maxWidth: '240px',
                    transform: prog.logoOffsetY ? 'translateY(' + prog.logoOffsetY + ')' : 'none'
                  }} 
                />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div style={{ marginTop: '50px', textAlign: 'center' }}>
          <Link
            href="/dao-tao"
            className="btn btn-primary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '16px 36px',
              fontSize: '1.05rem',
              fontWeight: 700,
              borderRadius: '50px',
              boxShadow: '0 8px 24px rgba(243, 112, 33, 0.25)'
            }}
          >
            Khám phá chương trình đào tạo <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
