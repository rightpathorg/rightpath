'use client';
import { useEffect, useState } from 'react';

export default function DynamicLighting() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [trailingPos, setTrailingPos] = useState({ x: -200, y: -200 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHoveringCard, setIsHoveringCard] = useState(false);

  useEffect(() => {
    let animationFrameId;
    let targetX = -200;
    let targetY = -200;
    let currentX = -200;
    let currentY = -200;

    const handlePointerMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check if hovering interactive card or button
      const target = e.target;
      if (target && target.closest) {
        const isInteractive = !!target.closest('button, a, .dynamic-spotlight-card, article');
        setIsHoveringCard(isInteractive);
      }

      document.documentElement.style.setProperty('--cursor-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--cursor-y', `${e.clientY}px`);
    };

    // Smooth trailing physics loop
    const animate = () => {
      currentX += (targetX - currentX) * 0.15;
      currentY += (targetY - currentY) * 0.15;
      setTrailingPos({ x: currentX, y: currentY });
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  return (
    <>
      {/* 1. Primary Dynamic Spotlight - Illuminates entire screen on cursor move */}
      <div
        className="pointer-events-none fixed inset-0 z-40 transition-opacity duration-300"
        style={{
          opacity: isVisible ? 1 : 0,
          background: `
            radial-gradient(120px circle at ${pos.x}px ${pos.y}px, rgba(34, 197, 94, 0.32), transparent 70%),
            radial-gradient(450px circle at ${pos.x}px ${pos.y}px, rgba(16, 185, 129, 0.18), rgba(0, 81, 52, 0.08) 45%, transparent 75%)
          `,
        }}
        aria-hidden="true"
      />

      {/* 2. Luminous Cursor Light Orb (Trailing Fluid Light Beam) */}
      <div
        className="pointer-events-none fixed z-50 rounded-full transition-transform duration-75 ease-out"
        style={{
          left: `${trailingPos.x}px`,
          top: `${trailingPos.y}px`,
          width: isHoveringCard ? '52px' : '28px',
          height: isHoveringCard ? '52px' : '28px',
          transform: 'translate(-50%, -50%)',
          opacity: isVisible ? 0.85 : 0,
          background: isHoveringCard
            ? 'radial-gradient(circle, rgba(183, 217, 167, 0.7) 0%, rgba(34, 197, 94, 0.4) 60%, transparent 100%)'
            : 'radial-gradient(circle, rgba(34, 197, 94, 0.85) 0%, rgba(0, 81, 52, 0.35) 70%, transparent 100%)',
          boxShadow: isHoveringCard
            ? '0 0 35px 8px rgba(34, 197, 94, 0.5), 0 0 60px 15px rgba(183, 217, 167, 0.4)'
            : '0 0 25px 4px rgba(34, 197, 94, 0.6), 0 0 50px 10px rgba(0, 81, 52, 0.3)',
          border: '1.5px solid rgba(255, 255, 255, 0.6)',
        }}
        aria-hidden="true"
      />

      {/* 3. Ambient Vibrant Aurora Light Waves */}
      <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden mix-blend-multiply opacity-70" aria-hidden="true">
        {/* Emerald Flare Orb */}
        <div
          className="absolute -top-24 -right-24 w-[42rem] h-[42rem] rounded-full blur-[100px]"
          style={{
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.45) 0%, rgba(0, 81, 52, 0.25) 50%, transparent 70%)',
            animation: 'ambientOrbFloat 12s ease-in-out infinite alternate',
          }}
        />

        {/* Mint / Sprout Beam */}
        <div
          className="absolute top-1/2 -left-36 w-[38rem] h-[38rem] rounded-full blur-[110px]"
          style={{
            background: 'radial-gradient(circle, rgba(134, 239, 172, 0.4) 0%, rgba(5, 150, 105, 0.2) 55%, transparent 75%)',
            animation: 'ambientOrbFloat 16s ease-in-out infinite alternate-reverse',
          }}
        />

        {/* Warm Gold Highlight */}
        <div
          className="absolute bottom-10 right-1/4 w-[32rem] h-[32rem] rounded-full blur-[115px]"
          style={{
            background: 'radial-gradient(circle, rgba(251, 191, 36, 0.35) 0%, rgba(183, 217, 167, 0.2) 55%, transparent 75%)',
            animation: 'ambientOrbFloat 20s ease-in-out infinite alternate',
          }}
        />
      </div>

      {/* 4. On-Screen Dynamic Lighting Badge / Indicator (Bottom Left) */}
      <div className="fixed bottom-4 left-4 z-40 hidden sm:flex items-center gap-2 bg-[#005134]/90 backdrop-blur-md text-white px-3 py-1.5 rounded-full border border-accent-sprout/40 shadow-xl text-xs font-semibold select-none pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
        <span className="text-accent-sprout font-bold">Dynamic Light</span>
        <span className="text-white/60">|</span>
        <span className="text-[11px] text-white/80">Active</span>
      </div>
    </>
  );
}
