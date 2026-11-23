'use client';
import { useEffect, useState } from 'react';

export default function DynamicLighting() {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only activate on pointer-capable devices
    const hasPointer = window.matchMedia('(pointer: fine)').matches;
    if (!hasPointer) return;

    let rafId = null;

    const handlePointerMove = (e) => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setMousePos({ x: e.clientX, y: e.clientY });
        if (!isVisible) setIsVisible(true);

        // Update CSS variables for cards and spotlight elements
        document.documentElement.style.setProperty('--cursor-x', `${e.clientX}px`);
        document.documentElement.style.setProperty('--cursor-y', `${e.clientY}px`);
      });
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  return (
    <>
      {/* 1. Dynamic Cursor Spotlight (Interactive Torch Effect) */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          opacity: isVisible ? 1 : 0,
          background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(183, 217, 167, 0.16), rgba(0, 81, 52, 0.06) 40%, transparent 75%)`,
        }}
        aria-hidden="true"
      />

      {/* 2. Floating Ambient Aurora Orbs (Atmospheric Lighting) */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
        {/* Top-Right Emerald Aura */}
        <div
          className="absolute -top-32 -right-32 w-[38rem] h-[38rem] rounded-full opacity-35 blur-[100px] animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(183, 217, 167, 0.45) 0%, rgba(0, 81, 52, 0.25) 50%, transparent 70%)',
            animationDuration: '8s',
          }}
        />

        {/* Center-Left Sage Light Glow */}
        <div
          className="absolute top-1/3 -left-40 w-[34rem] h-[34rem] rounded-full opacity-30 blur-[110px]"
          style={{
            background: 'radial-gradient(circle, rgba(128, 185, 142, 0.4) 0%, rgba(23, 107, 72, 0.15) 55%, transparent 75%)',
            animation: 'ambientOrbFloat 14s ease-in-out infinite alternate',
          }}
        />

        {/* Bottom-Right Golden Warmth Glow */}
        <div
          className="absolute bottom-20 -right-20 w-[30rem] h-[30rem] rounded-full opacity-25 blur-[120px]"
          style={{
            background: 'radial-gradient(circle, rgba(251, 191, 36, 0.3) 0%, rgba(183, 217, 167, 0.2) 50%, transparent 70%)',
            animation: 'ambientOrbFloat 18s ease-in-out infinite alternate-reverse',
          }}
        />
      </div>
    </>
  );
}
