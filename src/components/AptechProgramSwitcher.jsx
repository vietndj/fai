'use client';

import Link from 'next/link';
import { aptechSwitcherItems } from '@/data/programs';

export default function AptechProgramSwitcher({ activePath }) {
  const programs = aptechSwitcherItems;

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
