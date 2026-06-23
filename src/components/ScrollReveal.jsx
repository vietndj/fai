'use client';

import { useEffect } from 'react';

export default function ScrollReveal() {
  useEffect(() => {
    const observedElements = new Set();

    // Optimize settings for mobile: threshold 0.02, smaller bottom rootMargin
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
        threshold: 0.02,
        rootMargin: '0px 0px -10px 0px',
      }
    );

    const scanAndObserve = () => {
      const elements = document.querySelectorAll('[data-reveal]');
      elements.forEach((el) => {
        if (!el.classList.contains('revealed')) {
          const rect = el.getBoundingClientRect();
          
          // Fallback: If element top is inside the viewport, reveal it immediately.
          // This ensures that even if IntersectionObserver fails on mobile browsers, 
          // scrolling triggers the fade-in seamlessly.
          if (rect.top < (window.innerHeight - 10) && rect.bottom > 0) {
            const delay = parseFloat(el.dataset.revealDelay || '0');
            setTimeout(() => {
              el.classList.add('revealed');
            }, delay * 1000);
            
            if (observedElements.has(el)) {
              observer.unobserve(el);
              observedElements.delete(el);
            }
          } else if (!observedElements.has(el)) {
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

    // Scan on window scroll/resize events as an active backup
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
