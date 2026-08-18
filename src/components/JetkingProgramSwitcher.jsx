'use client';

import Link from 'next/link';
import { Sparkles } from 'lucide-react';

export default function JetkingProgramSwitcher({ activePath }) {
  const programs = [
    { label: 'Thiết kế Vi mạch Bán dẫn AI (2 năm)', href: '/dao-tao/chip-design', path: '/dao-tao/chip-design' },
    { label: 'Lập trình AI Agent (6 tháng - 2 năm)', href: '/dao-tao/ai-agent', path: '/dao-tao/ai-agent' },
  ];

  return (
    <div className="jetking-sticky-switcher-bar">
      <div className="container">
        <div className="aptech-switcher-inner">
          <div className="aptech-switcher-nav">
            {programs.map((item, idx) => {
              const isActive = activePath === item.path;
              return (
                <Link
                  key={idx}
                  href={item.href}
                  className={`jetking-switcher-btn ${isActive ? 'active' : ''}`}
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
