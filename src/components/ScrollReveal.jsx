'use client';

import { useEffect } from 'react';

export default function ScrollReveal() {
  useEffect(() => {
    const observedElements = new Set();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const delay = parseFloat(el.dataset.revealDelay || '0');
            setTimeout(() => {
              el.classList.add('revealed');
            }, delay * 1000);
            observer.unobserve(el);
            observedElements.delete(el);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const scanAndObserve = () => {
      const elements = document.querySelectorAll('[data-reveal]');
      elements.forEach((el) => {
        if (!observedElements.has(el) && !el.classList.contains('revealed')) {
          // Check if already in viewport on discovery
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            const delay = parseFloat(el.dataset.revealDelay || '0');
            setTimeout(() => {
              el.classList.add('revealed');
            }, delay * 1000);
          } else {
            observer.observe(el);
            observedElements.add(el);
          }
        }
      });
    };

    // Initial scan
    scanAndObserve();

    // Use MutationObserver to watch for dynamic DOM changes (page transitions)
    const mutationObserver = new MutationObserver(() => {
      scanAndObserve();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Also scan on window scroll/resize events just in case
    window.addEventListener('scroll', scanAndObserve, { passive: true });
    window.addEventListener('resize', scanAndObserve, { passive: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      window.removeEventListener('scroll', scanAndObserve);
      window.removeEventListener('resize', scanAndObserve);
    };
  }, []);

  return null;
}
