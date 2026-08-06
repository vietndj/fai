'use client';

import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

export default function TechCTAButton({ 
  text = "Tư vấn ngay",
  href = "https://zalo.me/fptaptech",
  style = {}
}) {
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    const checkOnlineTime = () => {
      const currentHour = new Date().getHours();
      // Online between 7h (07:00) and 22h (21:59)
      setIsOnline(currentHour >= 7 && currentHour < 22);
    };

    checkOnlineTime();
    const interval = setInterval(checkOnlineTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="tech-glow-cta"
      style={{
        background: '#f37021',
        color: '#ffffff',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        padding: '16px 36px',
        borderRadius: '50px',
        fontSize: '1.15rem',
        fontWeight: 800,
        textDecoration: 'none',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        ...style
      }}
    >
      {/* Time-based Green Online Dot Icon Only (7h - 22h) */}
      {isOnline && (
        <span className="online-green-dot" title="Tư vấn viên đang online" />
      )}

      <span>{text}</span>
      <ArrowRight size={22} strokeWidth={2.8} />
    </a>
  );
}
