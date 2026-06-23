'use client';

import { useEffect, useRef, useState } from 'react';

const lines = [
  { delay: 0,    text: '// FAI — What you will master in 3 years',  color: '#6A9955' },
  { delay: 600,  text: 'const student = {',                          color: '#9CDCFE' },
  { delay: 1000, text: "  year1: ['HTML', 'CSS', 'JavaScript', 'Python', 'UI/UX'],", color: '#CE9178' },
  { delay: 1600, text: "  year2: ['React', 'Node.js', 'SQL', 'Git', 'Figma'],",       color: '#CE9178' },
  { delay: 2200, text: "  year3: ['AI/ML', 'Cloud', 'Docker', 'Agile', '3D Motion'],",color: '#CE9178' },
  { delay: 2800, text: "  outcome: '95% employed within 6 months ✓',",                color: '#4EC9B0' },
  { delay: 3200, text: "  salary:  'avg 15–28M VND/month after 2 years',",           color: '#4EC9B0' },
  { delay: 3700, text: '};',                                          color: '#9CDCFE' },
  { delay: 4100, text: '',                                            color: '' },
  { delay: 4200, text: 'console.log(student.outcome);',               color: '#DCDCAA' },
  { delay: 4700, text: '// → "95% employed within 6 months ✓"',       color: '#6A9955' },
];

const badges = [
  { label: 'Software Engineering', tag: 'Aptech', color: '#3B82F6' },
  { label: 'Multimedia Design',    tag: 'Arena',  color: '#A855F7' },
  { label: 'Digital Marketing',    tag: 'Skillking', color: '#22C55E' },
];

function CodeLine({ text, color, visible }) {
  return (
    <div
      className="terminal-line"
      style={{
        color,
        opacity:    visible ? 1 : 0,
        transform:  visible ? 'translateX(0)' : 'translateX(-10px)',
        transition: 'opacity 0.35s ease, transform 0.35s ease',
      }}
    >
      {text || '\u00A0'}
    </div>
  );
}

export default function TechTerminal() {
  const [started, setStarted]           = useState(false);
  const [visibleLines, setVisibleLines] = useState([]);
  const ref = useRef(null);
  const timers = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    timers.current.forEach(clearTimeout);
    timers.current = lines.map((line, idx) =>
      setTimeout(() => setVisibleLines((prev) => [...prev, idx]), line.delay)
    );
    return () => timers.current.forEach(clearTimeout);
  }, [started]);

  return (
    <section className="tech-terminal-section" ref={ref}>
      {/* Background mesh */}
      <div className="terminal-bg-mesh" aria-hidden="true" />

      <div className="container terminal-layout">
        {/* Left — label + badges */}
        <div
          className="terminal-intro"
          style={{
            opacity:    started ? 1 : 0,
            transform:  started ? 'translateY(0)' : 'translateY(40px)',
            transition: 'opacity 0.8s ease 0.1s, transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s',
          }}
        >
          <span className="section-eyebrow">Chương trình đào tạo</span>
          <h2 className="terminal-headline">
            Bạn Sẽ<br />
            <span className="terminal-highlight">Học Gì?</span>
          </h2>
          <p className="terminal-desc">
            Không chỉ lý thuyết — FAI đào tạo theo chuẩn quốc tế với 70% thời gian thực hành.
            Chương trình được NIIT India cập nhật định kỳ theo xu hướng ngành.
          </p>
          <div className="terminal-badges">
            {badges.map((b, i) => (
              <div key={i} className="terminal-badge" style={{ borderColor: b.color }}>
                <span className="badge-dot" style={{ background: b.color }} />
                <div>
                  <span className="badge-label">{b.label}</span>
                  <span className="badge-tag">{b.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — VS Code terminal */}
        <div
          className="terminal-window"
          style={{
            opacity:    started ? 1 : 0,
            transform:  started ? 'translateY(0)' : 'translateY(40px)',
            transition: 'opacity 0.8s ease 0.3s, transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.3s',
          }}
        >
          {/* Window chrome */}
          <div className="terminal-chrome">
            <div className="terminal-dots">
              <span className="tdot tdot-red" />
              <span className="tdot tdot-yellow" />
              <span className="tdot tdot-green" />
            </div>
            <span className="terminal-filename">fai_student.js — FAI Academy</span>
          </div>

          {/* Line numbers + code */}
          <div className="terminal-body">
            <div className="terminal-line-numbers">
              {lines.map((_, i) => (
                <span key={i} className="lnum">{i + 1}</span>
              ))}
            </div>
            <div className="terminal-code">
              {lines.map((line, i) => (
                <CodeLine
                  key={i}
                  text={line.text}
                  color={line.color}
                  visible={visibleLines.includes(i)}
                />
              ))}
              {/* Blinking cursor */}
              {visibleLines.length > 0 && visibleLines.length < lines.length && (
                <span className="terminal-cursor" />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
