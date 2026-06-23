'use client';

import { useEffect, useRef } from 'react';

// Màu FAI brand palette — giống Google colors (blue, orange, green) nhưng là của FAI
const COLORS = [
  '#1a6ed8',   // FAI blue (Aptech)
  '#e8741e',   // FAI orange (Arena)
  '#16a34a',   // FAI green (Skillking)
  '#0D2137',   // FAI navy
  '#60a5fa',   // light blue accent
  '#fb923c',   // light orange accent
];

class Particle {
  constructor(w, h) { this.init(w, h, true); }

  init(w, h, randomY = false) {
    this.x  = Math.random() * w;
    this.y  = randomY ? Math.random() * h : h + Math.random() * 60;
    this.vx = (Math.random() - 0.5) * 0.25;
    this.vy = -(Math.random() * 0.55 + 0.18);          // float upward
    this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
    this.w  = Math.random() * 2.5 + 1;                 // narrow pill width
    this.h  = Math.random() * 9  + 4;                  // pill height
    this.angle = Math.random() * Math.PI * 2;
    this.spin  = (Math.random() - 0.5) * 0.03;
    this.alpha = Math.random() * 0.55 + 0.15;
    this.maxY  = -20;
  }

  update(w, h) {
    this.x     += this.vx;
    this.y     += this.vy;
    this.angle += this.spin;
    if (this.y < this.maxY) this.init(w, h, false);
    if (this.x < -20) this.x = w + 10;
    if (this.x > w + 20) this.x = -10;
  }

  draw(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);
    ctx.globalAlpha = this.alpha;
    ctx.fillStyle   = this.color;
    ctx.beginPath();
    const r = this.w / 2;
    // Pill shape
    ctx.moveTo(-r, -this.h / 2 + r);
    ctx.arcTo(-r, -this.h / 2, 0, -this.h / 2, r);
    ctx.arcTo( r, -this.h / 2, r,  0,           r);
    ctx.arcTo( r,  this.h / 2, 0,  this.h / 2,  r);
    ctx.arcTo(-r,  this.h / 2, -r, 0,            r);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }
}

const PARTICLE_COUNT = 80;

export default function ParticleCanvas({ className = '' }) {
  const canvasRef = useRef(null);
  const stateRef  = useRef({ particles: [], rafId: null, w: 0, h: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const state = stateRef.current;

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect() || { width: window.innerWidth, height: 600 };
      state.w = canvas.width  = rect.width  * window.devicePixelRatio;
      state.h = canvas.height = rect.height * window.devicePixelRatio;
      canvas.style.width  = rect.width  + 'px';
      canvas.style.height = rect.height + 'px';
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    // Init particles
    resize();
    state.particles = Array.from({ length: PARTICLE_COUNT }, () =>
      new Particle(
        state.w / window.devicePixelRatio,
        state.h / window.devicePixelRatio
      )
    );

    const tick = () => {
      const W = state.w / window.devicePixelRatio;
      const H = state.h / window.devicePixelRatio;
      ctx.clearRect(0, 0, W, H);
      state.particles.forEach(p => {
        p.update(W, H);
        p.draw(ctx);
      });
      state.rafId = requestAnimationFrame(tick);
    };

    state.rafId = requestAnimationFrame(tick);

    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement || document.body);

    return () => {
      cancelAnimationFrame(state.rafId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`particle-canvas ${className}`}
      aria-hidden="true"
    />
  );
}
