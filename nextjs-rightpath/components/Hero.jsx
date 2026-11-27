'use client';
import { useState, useEffect, useRef } from 'react';

const headlines = [
  { text: 'एक नई पहचान।', className: 'gradient-text-sprout' },
  { text: 'गुणवत्तापूर्ण शिक्षा।', className: 'gradient-text-gold' },
  { text: 'सम्मान और स्वावलंबन।', className: 'gradient-text-sprout' },
  { text: 'The Right Path in Life.', className: 'gradient-text-gold' },
];

const spotlights = [
  {
    title: 'Street School Centers (शिक्षा)',
    desc: 'Daily academic classes & digital labs across Delhi-NCR slums',
    icon: 'school',
    tag: 'Active Today: 8 Centers',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnmUnBsy4LK2JxTMZ_btgjtCcMGSO_nLDFZDcJZzX0REVJG5I08M82PDpXL_wv3bxHhT_V4xbJOlCkIUxFM8_hDlhSV45IgP0fEFBqrD47vUo7DL0lNGjTnCQK1l_6ECCJMbEAm8JZXvCLHT5P5Fm5PDKjbvntrz90I8rlaZ9Gpejj5e2aeQPj_90n92eYeR68CSCxDOUP-vBbf5y503AYkiL3NShHPulQ0FuiLaM'
  },
  {
    title: 'Poshan Mid-Day Meals (पोषण)',
    desc: 'Wholesome nutritious hot meals cooked fresh daily for growing children',
    icon: 'restaurant',
    tag: '45,000+ Meals Served',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXObVM1hJ_4mLledVWvVMwHMgsPnuirGwDeA-_VYb4cg85u7FEqBmkibF8vXJMQXgovucR9oRvSRZnUTHIwV41ROsuja9Z2ipWLA-Jz8Q8FgJzsR4-Sl83mOoA9xlHnACptIFusT4dhuHY43N0R-QPjAxZBgHaF9ZZaVMX_SKDNBnb-gIJ8jlBUge0_X7hII2TcDTWC1C8AcJZE48xrxws0TFBsUEcxjL_URbodUk'
  },
  {
    title: 'Arogya Seva Health Camps (स्वास्थ्य)',
    desc: 'Fortnightly free doctor consultations, medicines & adolescent hygiene kits',
    icon: 'medical_services',
    tag: '24 Camps Quarterly',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAODBNY1hNK-ngOgs12vdD_Uta5mtvuQr07pgMB7S1EXtOSBr_NheCgo_fN7WV8D89XN7vzXyaLmVoLIztgDPmM5Gr7INeNVJSuGoy5ybU98JtWfnvQPUAagtvqC4y23nLuYAkv37CyrfAwDkOBogCM6-H-IEe_St_L0oo9u6zjFimW18fRukI5NTWPxIZLdkMpo0yLCYIQn_YEaG6gwLoCnwCoTBrvqZEv1GnkGQE'
  },
  {
    title: 'Kaushal Vikas Women Tailoring (हुनर)',
    desc: 'Certified vocational stitching & IT skills empowering mothers to earn independently',
    icon: 'work',
    tag: '300+ Women Graduated',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrWLMz2kRyTIqpM4RPgAWKY6xnWuxaUuGr37btzyjO7rX1mPZxpwfPsS5T9qo8VUDIxRbgDqGRZDeAZjwAH2imEBYpbNRwsNjnVbqTBbHBNfih7ngohyjirHVn-PnJHnjCujQTfBZwgf3I9FoogZb5dykytiWkuwQsmiUtzJGAGBCcPfLf2HBlKrC3j0RPBmZ-wueiRXjzFoCf97Vo4FnbLBTTfsvvWQWN9KiCCy8'
  }
];

const liveActivities = [
  { name: 'Pooja from Rohini', detail: 'Sponsored 10 Meals (₹1,200) • 2m ago' },
  { name: 'Dr. Vivek Sharma', detail: 'Funded Free Health Camp (₹3,500) • 5m ago' },
  { name: 'Ananya S. from Noida', detail: 'Sponsored 1 Child School Kit (₹500) • 8m ago' },
  { name: 'Kavita & Rajesh G.', detail: 'Enrolled 2 Women in Tailoring (₹6,000) • 12m ago' },
  { name: 'Amit Verma (Gurugram)', detail: 'Monthly Sustaining Supporter (₹2,500) • 16m ago' },
  { name: 'Ritu Kapoor (Delhi)', detail: 'Provided Mid-day Nutrition (₹1,200) • 19m ago' }
];

export default function Hero({ onOpenDonation }) {
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [spotlightIndex, setSpotlightIndex] = useState(0);
  const [selectedPill, setSelectedPill] = useState({ amount: 1200, label: '10 Children Meals' });
  const [liveIndex, setLiveIndex] = useState(0);
  const [beaconFade, setBeaconFade] = useState(false);
  const [cardTransform, setCardTransform] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  const [glarePos, setGlarePos] = useState({ x: 0, y: 0, opacity: 0 });
  const cardRef = useRef(null);

  // Rotating headline
  useEffect(() => {
    const timer = setInterval(() => {
      setHeadlineIndex((prev) => (prev + 1) % headlines.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  // Spotlight autoplay (every 5.5s)
  useEffect(() => {
    const timer = setInterval(() => {
      setSpotlightIndex((prev) => (prev + 1) % spotlights.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  // Floating live donor beacon rotator
  useEffect(() => {
    const timer = setInterval(() => {
      setBeaconFade(true);
      setTimeout(() => {
        setLiveIndex((prev) => (prev + 1) % liveActivities.length);
        setBeaconFade(false);
      }, 400);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    setCardTransform(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`);
    setGlarePos({ x, y, opacity: 1 });
  };

  const handleMouseLeave = () => {
    setCardTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  const currentSpot = spotlights[spotlightIndex];
  const currentLive = liveActivities[liveIndex];

  return (
    <section id="hero-section" className="w-full bg-gradient-to-b from-[#092218] via-[#0e2f22] to-[#0a2318] text-white py-14 lg:py-20 relative overflow-hidden">
      
      {/* Ambient Botanical Glow Auras */}
      <div className="absolute -top-28 -left-20 w-[42rem] h-[42rem] rounded-full bg-radial from-accent-sprout/25 via-[#10b981]/15 to-transparent blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/4 -right-24 w-[38rem] h-[38rem] rounded-full bg-radial from-[#80b98e]/25 via-[#005134]/30 to-transparent blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-20 left-1/3 w-[34rem] h-[34rem] rounded-full bg-radial from-amber-400/10 via-emerald-600/15 to-transparent blur-3xl pointer-events-none"></div>

      <div className="max-w-[72rem] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Dynamic Hero Typography & Quick Giving Selector */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            
            {/* Sparkle Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-white/15 to-white/5 backdrop-blur-md border border-accent-sprout/35 px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(183,217,167,0.18)] hover:border-accent-sprout/60 transition-all cursor-default">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-sprout opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-sprout"></span>
              </span>
              <span className="text-xs uppercase font-extrabold tracking-wider text-accent-sprout flex items-center gap-1.5">
                <span>Every Journey Deserves The Right Path</span>
                <span className="text-[10px] text-accent-sprout animate-pulse">✦</span>
              </span>
            </div>

            {/* Zero-Jitter Headline Rotator */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight leading-[1.18] text-white">
              हर ज़िंदगी को मिले <br className="hidden sm:inline" />
              <span className="text-rotator inline-grid">
                {headlines.map((item, idx) => (
                  <span
                    key={idx}
                    className={`rotator-item ${idx === headlineIndex ? 'active' : ''} ${item.className}`}
                  >
                    {item.text}
                  </span>
                ))}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#d3e7da] max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              <strong className="text-white font-semibold">RightPath NGO</strong> bridges the opportunity divide through grassroots street schools, wholesome daily nutrition, preventive health clinics, and dignified vocational training for marginalized children and families.
            </p>

            {/* Quick Giving Selector */}
            <div className="pt-2">
              <span className="block text-xs uppercase tracking-wider text-[#a4d0bb] font-extrabold mb-2.5">Select Your Monthly Impact Tier:</span>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                {[
                  { amount: 500, label: '1 Child School Kit', short: '(Kit)' },
                  { amount: 1200, label: '10 Children Meals', short: '(Meals ⭐)', loved: true },
                  { amount: 3000, label: 'Women Tailoring Kit', short: '(Skills)' },
                  { amount: 5000, label: 'Full Semester Sponsor', short: '(Semester)' }
                ].map((pill) => {
                  const isSelected = selectedPill.amount === pill.amount;
                  return (
                    <button
                      key={pill.amount}
                      type="button"
                      onClick={() => setSelectedPill(pill)}
                      className={`hero-giving-pill relative px-3.5 py-2 rounded-xl text-xs font-semibold transition-all border ${
                        isSelected
                          ? 'active-pill font-extrabold border-white/30'
                          : 'bg-white/10 text-[#d3e7da] hover:bg-white/20 border-white/10'
                      }`}
                    >
                      {pill.loved && (
                        <span className="absolute -top-2.5 -right-1 bg-gradient-to-r from-amber-400 to-amber-500 text-black text-[9px] font-black px-1.5 py-0.5 rounded-full uppercase tracking-tighter shadow-sm animate-pulse">
                          Most Loved
                        </span>
                      )}
                      ₹{pill.amount.toLocaleString('en-IN')} <span className="text-[10px] opacity-90">{pill.short}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Dynamic CTAs */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <button
                onClick={() => onOpenDonation(selectedPill.amount)}
                className="hero-shimmer-btn inline-flex items-center gap-2.5 bg-gradient-to-r from-accent-sprout via-[#c8efb9] to-accent-sprout hover:bg-white text-primary font-black text-sm sm:text-base px-7 py-3.5 rounded-2xl transition-all shadow-[0_6px_25px_rgba(183,217,167,0.35)] hover:shadow-[0_8px_35px_rgba(183,217,167,0.5)] transform hover:-translate-y-1"
              >
                <span className="material-symbols-outlined text-2xl text-primary animate-heartbeat" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                <span>Donate ₹{selectedPill.amount.toLocaleString('en-IN')} ({selectedPill.label})</span>
              </button>

              <a href="#initiatives" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/25 font-bold text-sm sm:text-base px-6 py-3.5 rounded-2xl transition-all hover:-translate-y-0.5 backdrop-blur-sm">
                <span>Explore Initiatives</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </a>
            </div>

            {/* Quick Metrics */}
            <div className="pt-6 grid grid-cols-3 gap-3.5 border-t border-white/15">
              <div className="hero-stat-card bg-white/5 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 text-center lg:text-left">
                <span className="block text-2xl sm:text-3xl font-black text-accent-sprout leading-tight drop-shadow-sm">15,400+</span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#b2d5bf]">Lives Touched</span>
              </div>
              <div className="hero-stat-card bg-white/5 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 text-center lg:text-left">
                <span className="block text-2xl sm:text-3xl font-black text-accent-sprout leading-tight drop-shadow-sm">45,000+</span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#b2d5bf]">Meals Served</span>
              </div>
              <div className="hero-stat-card bg-white/5 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 text-center lg:text-left">
                <span className="block text-2xl sm:text-3xl font-black text-accent-sprout leading-tight drop-shadow-sm">180+</span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#b2d5bf]">Mentors</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Tilt Card with 4-Tab Spotlight */}
          <div
            className="lg:col-span-5 relative flex justify-center"
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="w-full max-w-md lg:max-w-none relative">
              
              {/* Focus Switcher Tabs with Story Progress Bar */}
              <div className="flex items-center justify-between gap-1 mb-3.5 bg-black/35 p-1.5 rounded-2xl backdrop-blur-xl border border-white/15 overflow-x-auto shadow-xl">
                {spotlights.map((spot, idx) => {
                  const isActive = idx === spotlightIndex;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSpotlightIndex(idx)}
                      className={`hero-tab-btn relative overflow-hidden px-3 py-2 rounded-xl text-xs transition-all flex items-center gap-1.5 flex-1 justify-center ${
                        isActive
                          ? 'bg-accent-sprout text-primary font-bold shadow-sm'
                          : 'text-[#b2d5bf] hover:text-white hover:bg-white/10 font-semibold'
                      }`}
                    >
                      <span className="material-symbols-outlined text-sm">{spot.icon}</span>
                      <span>{spot.title.split(' ')[0]}</span>
                      {isActive && (
                        <span
                          className="hero-tab-progress-bar"
                          style={{
                            width: '100%',
                            transition: 'width 5.3s linear'
                          }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Luminous Aura Behind Card */}
              <div className="hero-card-aura"></div>

              {/* Card Glow Border Wrap */}
              <div className="hero-card-glow-wrap relative z-10">
                <div
                  style={{ transform: cardTransform, transition: 'transform 0.15s ease-out' }}
                  className="relative rounded-[1.35rem] overflow-hidden shadow-2xl bg-[#092218] aspect-[4/5] w-full group"
                >
                  <img
                    key={currentSpot.img}
                    src={currentSpot.img}
                    alt={currentSpot.title}
                    className="hero-ken-burns w-full h-full object-cover transition-opacity duration-300"
                    onError={(e) => { e.currentTarget.src = '/images/rightpath_logo.png'; }}
                  />

                  {/* Interactive Glare Sheen */}
                  <div
                    className="card-glare"
                    style={{
                      opacity: glarePos.opacity,
                      background: `radial-gradient(circle at ${glarePos.x}px ${glarePos.y}px, rgba(255, 255, 255, 0.28) 0%, rgba(255, 255, 255, 0.05) 50%, transparent 75%)`
                    }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#092218] via-black/25 to-transparent"></div>

                  <div className="absolute top-3.5 left-3.5 bg-[#005134]/90 backdrop-blur-md text-white text-xs font-extrabold px-3 py-1.5 rounded-full border border-accent-sprout/40 shadow-lg flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-sm text-accent-sprout" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                    <span>100% Grassroots Efficacy</span>
                  </div>

                  <div className="absolute top-3.5 right-3.5 bg-red-600/90 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1.5 border border-red-400/30">
                    <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
                    <span>{currentSpot.tag}</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 bg-[#0a271c]/90 backdrop-blur-xl p-4 rounded-2xl border border-white/20 flex items-center gap-3.5 shadow-2xl">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-sprout/30 to-primary/40 border border-accent-sprout/40 flex items-center justify-center text-accent-sprout flex-shrink-0 shadow-inner">
                      <span className="material-symbols-outlined text-2xl">{currentSpot.icon}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm sm:text-base font-extrabold text-white leading-tight truncate">{currentSpot.title}</h3>
                      <p className="text-xs text-[#b8dfc4] mt-0.5 line-clamp-2 leading-relaxed">{currentSpot.desc}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Live Social Proof Beacon */}
              <div
                className={`hero-floating-beacon hidden sm:flex absolute -bottom-5 -left-6 z-20 bg-white/95 backdrop-blur-xl text-primary p-2.5 pr-4 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.35)] border border-accent-sprout/50 items-center gap-2.5 transition-all duration-400 ${
                  beaconFade ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
                }`}
              >
                <div className="w-8 h-8 rounded-xl bg-surface-mint flex items-center justify-center text-primary flex-shrink-0 shadow-xs">
                  <span className="material-symbols-outlined text-lg text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>volunteer_activism</span>
                </div>
                <div className="text-left leading-tight">
                  <p className="text-[11px] font-extrabold text-primary flex items-center gap-1">
                    <span>{currentLive.name}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-ping"></span>
                  </p>
                  <p className="text-[10px] text-text-muted font-medium">{currentLive.detail}</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
