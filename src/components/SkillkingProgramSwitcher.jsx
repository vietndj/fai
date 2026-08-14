'use client';

import Link from 'next/link';
import { Sparkles } from 'lucide-react';

export default function SkillkingProgramSwitcher({ activePath }) {
  const programs = [
    { label: 'Fullstack Digital Marketing With AI (18 tháng)', href: '/dao-tao/skillking/18-thang', path: '/dao-tao/skillking/18-thang' },
    { label: 'Bộ khóa học Digital Marketing thực chiến (100 giờ)', href: '/dao-tao/skillking/100h', path: '/dao-tao/skillking/100h' },
  ];

  return (
    <div className="skillking-sticky-switcher-bar">
      <div className="container">
        <div className="aptech-switcher-inner">
          <div className="aptech-switcher-nav">
            {programs.map((item, idx) => {
              const isActive = activePath === item.path || (activePath === '/dao-tao/skillking' && idx === 0);
              return (
                <Link
                  key={idx}
                  href={item.href}
                  className={`aptech-switcher-btn skillking-switcher-btn ${isActive ? 'active' : ''}`}
                >
                  {isActive && <Sparkles size={16} className="active-sparkle" />}
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
