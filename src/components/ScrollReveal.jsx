'use client';

import { useEffect } from 'react';

/**
 * Global scroll reveal — watches all [data-reveal] elements.
 * Uses rootMargin để trigger SỚM hơn (trước khi element vào viewport)
 * và threshold thấp hơn để không bị bỏ qua.
 */
export default function ScrollReveal() {
  useEffect(() => {
    // Một số elements cần được reveal ngay khi page load (above fold)
    const revealAll = (elements) => {
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          el.classList.add('revealed');
        }
      });
    };

    const elements = document.querySelectorAll('[data-reveal]');

    // Reveal any elements already in view immediately
    revealAll(Array.from(elements));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const delay = parseFloat(el.dataset.revealDelay || '0');
            setTimeout(() => el.classList.add('revealed'), delay * 1000);
            observer.unobserve(el);
          }
        });
      },
      {
        threshold: 0.05,                   // trigger khi 5% visible
        rootMargin: '0px 0px -40px 0px',   // trigger trước khi chạm đáy 40px
      }
    );

    elements.forEach((el) => {
      if (!el.classList.contains('revealed')) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
