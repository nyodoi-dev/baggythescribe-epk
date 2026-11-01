import React, { useEffect, useRef } from 'react';

// Faint sound-wave lines drifting behind the page. They swell while the background tune plays.
const LINES = [
  { y: 0.16, amp: 1.0, freq: 0.0042, speed: 0.00042, alpha: 0.1 },
  { y: 0.34, amp: 0.7, freq: 0.0058, speed: -0.0005, alpha: 0.07 },
  { y: 0.52, amp: 1.2, freq: 0.0036, speed: 0.00034, alpha: 0.09 },
  { y: 0.7, amp: 0.8, freq: 0.0051, speed: -0.00046, alpha: 0.07 },
  { y: 0.88, amp: 1.0, freq: 0.0039, speed: 0.0004, alpha: 0.1 },
];

export default function BackgroundWaves({ active }) {
  const canvas = useRef(null);
  const activeRef = useRef(active);

  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  useEffect(() => {
    const c = canvas.current;
    const ctx = c.getContext('2d');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let w = 0, h = 0, raf = 0, amp = 9, t = 0, last = performance.now();

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      c.width = w * dpr;
      c.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (now) => {
      const dt = Math.min(now - last, 50);
      last = now;
      amp += ((activeRef.current ? 30 : 9) - amp) * Math.min(1, dt * 0.003);
      t += dt;
      ctx.clearRect(0, 0, w, h);
      ctx.lineWidth = 1.2;
      LINES.forEach((l) => {
        ctx.beginPath();
        for (let x = 0; x <= w + 8; x += 8) {
          const y =
            h * l.y +
            Math.sin(x * l.freq + t * l.speed) * amp * l.amp +
            Math.sin(x * l.freq * 2.3 - t * l.speed * 1.4) * amp * 0.4 * l.amp;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = `rgba(244, 169, 106, ${l.alpha})`;
        ctx.stroke();
      });
      if (!reduce) raf = requestAnimationFrame(draw);
    };

    const onResize = () => {
      resize();
      if (reduce) draw(performance.now());
    };
    const onVisibility = () => {
      cancelAnimationFrame(raf);
      if (!document.hidden && !reduce) {
        last = performance.now();
        raf = requestAnimationFrame(draw);
      }
    };

    resize();
    raf = requestAnimationFrame(draw);
    window.addEventListener('resize', onResize);
    document.addEventListener('visibilitychange', onVisibility);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return <canvas ref={canvas} className="waves" aria-hidden="true" />;
}
