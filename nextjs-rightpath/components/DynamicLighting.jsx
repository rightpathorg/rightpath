'use client';

export default function DynamicLighting() {
  return (
    <>
      {/* Dynamic Ambient Aurora Lighting Mesh (Pure Website Background Glow) */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
        {/* Top-Right Emerald Aurora Beam */}
        <div
          className="absolute -top-32 -right-32 w-[46rem] h-[46rem] rounded-full opacity-40 blur-[110px]"
          style={{
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.45) 0%, rgba(0, 81, 52, 0.25) 50%, transparent 70%)',
            animation: 'ambientOrbFloat 14s ease-in-out infinite alternate',
          }}
        />

        {/* Center-Left Sage Light Glow */}
        <div
          className="absolute top-1/3 -left-40 w-[42rem] h-[42rem] rounded-full opacity-35 blur-[120px]"
          style={{
            background: 'radial-gradient(circle, rgba(134, 239, 172, 0.4) 0%, rgba(23, 107, 72, 0.2) 55%, transparent 75%)',
            animation: 'ambientOrbFloat 18s ease-in-out infinite alternate-reverse',
          }}
        />

        {/* Center-Right Warm Gold & Sprout Flare */}
        <div
          className="absolute top-2/3 -right-28 w-[38rem] h-[38rem] rounded-full opacity-30 blur-[115px]"
          style={{
            background: 'radial-gradient(circle, rgba(251, 191, 36, 0.35) 0%, rgba(183, 217, 167, 0.25) 50%, transparent 70%)',
            animation: 'ambientOrbFloat 22s ease-in-out infinite alternate',
          }}
        />

        {/* Bottom Ambient Emerald Pool */}
        <div
          className="absolute -bottom-24 left-1/4 w-[48rem] h-[48rem] rounded-full opacity-30 blur-[130px]"
          style={{
            background: 'radial-gradient(circle, rgba(5, 150, 105, 0.35) 0%, rgba(0, 81, 52, 0.15) 60%, transparent 80%)',
            animation: 'ambientOrbFloat 26s ease-in-out infinite alternate-reverse',
          }}
        />
      </div>
    </>
  );
}
