'use client';

import { useState, useEffect } from 'react';
import ParticleCanvas from '@/components/ParticleCanvas';

export default function AboutHeroSection() {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [isDone, setIsDone] = useState(false);
  const [showParticles, setShowParticles] = useState(false);

  const fullText1 = "Viện đào tạo quốc tế FPT";
  const fullText2 = "FPT ACADEMY INTERNATIONAL";

  useEffect(() => {
    let active = true;
    let timer1 = null;
    let timer2 = null;
    const chars1 = Array.from(fullText1);
    const chars2 = Array.from(fullText2);
    let index1 = 0;
    let index2 = 0;

    const startTimeout = setTimeout(() => {
      if (!active) return;
      setShowParticles(true);

      timer1 = setInterval(() => {
        if (!active) return;
        if (index1 < chars1.length) {
          const charToType = chars1[index1];
          setText1(prev => prev + charToType);
          index1++;
        } else {
          clearInterval(timer1);
          setTimeout(() => {
            if (!active) return;
            timer2 = setInterval(() => {
              if (!active) return;
              if (index2 < chars2.length) {
                const charToType = chars2[index2];
                setText2(prev => prev + charToType);
                index2++;
              } else {
                clearInterval(timer2);
                setIsDone(true);
              }
            }, 35);
          }, 250);
        }
      }, 55);
    }, 400);

    return () => {
      active = false;
      clearTimeout(startTimeout);
      if (timer1) clearInterval(timer1);
      if (timer2) clearInterval(timer2);
    };
  }, []);

  return (
    <section 
      id="gioi-thieu"
      className="about-hero-section" 
      style={{ 
        padding: '160px 0 100px 0', 
        position: 'relative', 
        overflow: 'hidden',
        minHeight: '42vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#F9FAFB'
      }}
    >
      {/* Antigravity particles background */}
      {showParticles && (
        <div style={{ position: 'absolute', inset: 0, opacity: isDone ? 1 : 0.6, transition: 'opacity 2s ease' }}>
          <ParticleCanvas className="about-hero-particles" />
        </div>
      )}

      <div className="container" style={{ position: 'relative', zIndex: 1, minHeight: '140px' }}>
        <div style={{ maxWidth: '980px' }}>
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 6vw, 4.6rem)', 
            color: '#0D2137', 
            lineHeight: '1.15', 
            fontWeight: 500, 
            fontFamily: 'var(--font-heading-medium)', 
            letterSpacing: '-0.02em',
            margin: 0,
            minHeight: '1.2em'
          }}>
            {text1}
            {text1.length > 0 && !text2 && (
              <span className="typewriter-cursor">|</span>
            )}
          </h1>
          {text1.length === fullText1.length && (
            <p style={{ 
              fontSize: 'clamp(1.4rem, 3.5vw, 2.4rem)', 
              color: '#f37021', 
              fontWeight: 800, 
              marginTop: '12px', 
              textTransform: 'uppercase', 
              letterSpacing: '0.08em', 
              fontFamily: 'var(--font-sans)', 
              margin: 0,
              minHeight: '1.2em'
            }}>
              {text2}
              {text2.length > 0 && !isDone && (
                <span className="typewriter-cursor">|</span>
              )}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
