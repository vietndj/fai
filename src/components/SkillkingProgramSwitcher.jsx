'use client';

import Link from 'next/link';
import { skillkingSwitcherItems } from '@/data/programs';

export default function SkillkingProgramSwitcher({ activePath }) {
  const programs = skillkingSwitcherItems;

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
                  className={`skillking-switcher-btn ${isActive ? 'active' : ''}`}
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
