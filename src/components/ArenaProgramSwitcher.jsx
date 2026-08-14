'use client';

import Link from 'next/link';
import { Sparkles } from 'lucide-react';

export default function ArenaProgramSwitcher({ activePath }) {
  const programs = [
    { label: 'Arena Multimedia Specialist (2 năm)', href: '/dao-tao/arena/2-nam', path: '/dao-tao/arena/2-nam' },
    { label: 'Thiết kế 2D, 3D, Game & App (6–18 tháng)', href: '/dao-tao/arena/6-18-thang', path: '/dao-tao/arena/6-18-thang' },
    { label: 'Các khóa học ngắn hạn (100 giờ)', href: '/dao-tao/arena/100h', path: '/dao-tao/arena/100h' },
  ];

  return (
    <div className="arena-sticky-switcher-bar">
      <div className="container">
        <div className="aptech-switcher-inner">
          <div className="aptech-switcher-nav">
            {programs.map((item, idx) => {
              const isActive = activePath === item.path || (activePath === '/dao-tao/arena' && idx === 0);
              return (
                <Link
                  key={idx}
                  href={item.href}
                  className={`aptech-switcher-btn arena-switcher-btn ${isActive ? 'active' : ''}`}
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
