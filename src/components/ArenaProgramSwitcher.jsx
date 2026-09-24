'use client';

import Link from 'next/link';
import { arenaSwitcherItems } from '@/data/programs';

export default function ArenaProgramSwitcher({ activePath }) {
  const programs = arenaSwitcherItems;

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
                  className={`arena-switcher-btn ${isActive ? 'active' : ''}`}
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
