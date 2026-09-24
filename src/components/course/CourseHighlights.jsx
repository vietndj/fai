'use client';

import {
  ShieldCheck,
  BrainCircuit,
  Zap,
  Globe,
  Wrench,
  FolderGit2,
  Clock,
  Layers,
  Award,
  Briefcase,
  Palette,
  Cpu,
  Bot,
  Sparkles
} from 'lucide-react';

function resolveHighlightIcon(icon, themeColor, size = 28) {
  if (!icon) return <ShieldCheck size={size} style={{ color: themeColor }} />;
  if (typeof icon !== 'string') return icon;
  const key = icon.toLowerCase();
  switch (key) {
    case 'shield':
    case 'shieldcheck':
      return <ShieldCheck size={size} style={{ color: themeColor }} />;
    case 'brain':
    case 'braincircuit':
      return <BrainCircuit size={size} style={{ color: themeColor }} />;
    case 'zap':
      return <Zap size={size} style={{ color: themeColor }} />;
    case 'globe':
      return <Globe size={size} style={{ color: themeColor }} />;
    case 'wrench':
      return <Wrench size={size} style={{ color: themeColor }} />;
    case 'folder':
    case 'foldergit2':
      return <FolderGit2 size={size} style={{ color: themeColor }} />;
    case 'clock':
      return <Clock size={size} style={{ color: themeColor }} />;
    case 'layers':
    case 'layout':
      return <Layers size={size} style={{ color: themeColor }} />;
    case 'award':
      return <Award size={size} style={{ color: themeColor }} />;
    case 'briefcase':
      return <Briefcase size={size} style={{ color: themeColor }} />;
    case 'palette':
      return <Palette size={size} style={{ color: themeColor }} />;
    case 'cpu':
      return <Cpu size={size} style={{ color: themeColor }} />;
    case 'bot':
      return <Bot size={size} style={{ color: themeColor }} />;
    case 'sparkles':
      return <Sparkles size={size} style={{ color: themeColor }} />;
    default:
      return <ShieldCheck size={size} style={{ color: themeColor }} />;
  }
}

export default function CourseHighlights({
  themeColor = '#f37021',
  eyebrow: eyebrowProp,
  title: titleProp,
  desc: descProp,
  highlights: highlightsProp,
  whyChooseUs
}) {
  const data = highlightsProp || whyChooseUs;
  if (!data) return null;

  const isObject = !Array.isArray(data) && typeof data === 'object';
  const items = isObject ? (data.items || []) : (Array.isArray(data) ? data : []);
  if (items.length === 0) return null;

  const eyebrow = eyebrowProp || (isObject && data.eyebrow) || 'ĐẶC QUYỀN ĐÀO TẠO';
  const title = titleProp || (isObject && data.title);
  const desc = descProp || (isObject && data.desc);

  return (
    <section
      className="beau-section"
      style={{
        backgroundColor: '#F8FAFC',
        color: '#0f172a',
        padding: '100px 0 120px 0'
      }}
    >
      <div className="container" data-reveal>
        {(eyebrow || title || desc) && (
          <div style={{ textAlign: 'center', marginBottom: '54px' }}>
            {eyebrow && (
              <span
                className="beau-section-eyebrow"
                style={{
                  color: themeColor,
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em'
                }}
              >
                {eyebrow}
              </span>
            )}
            {title && (
              <h2
                style={{
                  fontSize: 'clamp(2rem, 3.8vw, 2.8rem)',
                  fontWeight: 800,
                  color: 'var(--secondary)',
                  lineHeight: '1.25',
                  marginTop: '10px',
                  fontFamily: 'var(--font-sans)',
                  letterSpacing: '-0.02em',
                  textWrap: 'balance'
                }}
              >
                {title}
              </h2>
            )}
            {desc && (
              <p
                style={{
                  color: '#64748b',
                  maxWidth: '850px',
                  margin: '16px auto 0',
                  fontSize: '1.05rem',
                  lineHeight: '1.75',
                  textWrap: 'balance'
                }}
              >
                {desc}
              </p>
            )}
          </div>
        )}

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px'
          }}
        >
          {items.map((item, idx) => (
            <div
              key={idx}
              className="fai-card-elevated"
              style={{
                padding: '36px 30px',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ marginBottom: '18px', color: themeColor }}>
                {resolveHighlightIcon(item.icon, themeColor)}
              </div>
              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 800,
                  color: 'var(--secondary)',
                  marginBottom: '12px',
                  fontFamily: 'var(--font-sans)',
                  textWrap: 'balance'
                }}
              >
                {item.title}
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.96rem', lineHeight: '1.7', margin: 0 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
