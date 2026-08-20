'use client';

import Link from 'next/link';
import { Sparkles } from 'lucide-react';

export default function AptechProgramSwitcher({ activePath }) {
  const programs = [
    { label: 'Lập trình Fullstack 2 năm', href: '/dao-tao/aptech/accp', path: '/dao-tao/aptech/accp' },
    { label: 'Lập trình Back end 1 năm', href: '/dao-tao/aptech/1-nam', path: '/dao-tao/aptech/1-nam' },
    { label: 'Lập trình Front end 6 tháng', href: '/dao-tao/aptech/6-thang', path: '/dao-tao/aptech/6-thang' },
    { label: 'Bộ khóa học Lập trình ngắn hạn (100 - 200 giờ)', href: '/dao-tao/aptech/100-200h', path: '/dao-tao/aptech/100-200h' },
  ];

  return (
    <div className="aptech-sticky-switcher-bar">
      <div className="container">
        <div className="aptech-switcher-inner">
          <div className="aptech-switcher-nav">
            {programs.map((item, idx) => {
              const isActive = activePath === item.path;
              return (
                <Link
                  key={idx}
                  href={item.href}
                  className={`aptech-switcher-btn ${isActive ? 'active' : ''}`}
                >
                  {isActive && <span className="active-dot"></span>}
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
