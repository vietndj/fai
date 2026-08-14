'use client';

import Link from 'next/link';
import { Layers, Sparkles } from 'lucide-react';

export default function AptechProgramSwitcher({ activePath }) {
  const programs = [
    { label: 'Lập trình Fullstack 2 năm', href: '/dao-tao/aptech/2-nam', path: '/dao-tao/aptech/2-nam' },
    { label: 'Lập trình Back end 1 năm', href: '/dao-tao/aptech/1-nam', path: '/dao-tao/aptech/1-nam' },
    { label: 'Lập trình Front end 6 tháng', href: '/dao-tao/aptech/6-thang', path: '/dao-tao/aptech/6-thang' },
    { label: 'Lập trình ngắn hạn 100-200h', href: '/dao-tao/aptech/100-200h', path: '/dao-tao/aptech/100-200h' },
  ];

  return (
    <div className="aptech-sticky-switcher-bar">
      <div className="container">
        <div className="aptech-switcher-inner">
          <div className="aptech-switcher-label">
            <Layers size={22} className="aptech-switcher-icon" />
            <span>Chương trình Aptech:</span>
          </div>
          <div className="aptech-switcher-nav">
            {programs.map((item, idx) => {
              const isActive = activePath === item.path;
              return (
                <Link
                  key={idx}
                  href={item.href}
                  className={`aptech-switcher-btn ${isActive ? 'active' : ''}`}
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
