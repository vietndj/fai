'use client';

import { useState, useEffect, useRef } from 'react';

export default function ScrollTypewriter({ text, speed = 10, delay = 0, style = {} }) {
  const [displayText, setDisplayText] = useState('');
  const [hasStarted, setHasStarted] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      });
    }, { threshold: 0.05 });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    
    const chars = Array.from(text);
    let index = 0;
    setDisplayText('');
    setIsDone(false);
    
    const delayTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (index < chars.length) {
          const char = chars[index];
          setDisplayText(prev => prev + char);
          index++;
        } else {
          clearInterval(interval);
          setIsDone(true);
        }
      }, speed);
      
      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(delayTimeout);
  }, [hasStarted, text, speed, delay]);

  return (
    <span ref={elementRef} style={{ position: 'relative', ...style }}>
      {displayText}
      {hasStarted && !isDone && <span className="typewriter-cursor">|</span>}
    </span>
  );
}
