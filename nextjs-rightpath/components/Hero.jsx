'use client';
import { useState, useEffect } from 'react';

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

export default function Hero({ onOpenDonation }) {
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [spotlightIndex, setSpotlightIndex] = useState(0);
  const [selectedPill, setSelectedPill] = useState({ amount: 1200, label: '10 Children Meals' });

  // Rotating headline without jump
  useEffect(() => {
    const timer = setInterval(() => {
      setHeadlineIndex((prev) => (prev + 1) % headlines.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  // Spotlight autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      setSpotlightIndex((prev) => (prev + 1) % spotlights.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const currentSpot = spotlights[spotlightIndex];

  return (
    <section id="hero-section" className="w-full bg-[#133829] text-white py-14 lg:py-20 relative overflow-hidden">
      <div className="max-w-[72rem] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Dynamic Hero Typography */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-3.5 py-1 rounded-full shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-accent-sprout animate-pulse"></span>
              <span className="text-xs uppercase font-extrabold tracking-wider text-accent-sprout">Every Journey Deserves The Right Path</span>
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
              <span className="block text-xs uppercase tracking-wider text-[#a4d0bb] font-bold mb-2">Select Your Monthly Impact Tier:</span>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                {[
                  { amount: 500, label: '1 Child School Kit', short: '(Kit)' },
                  { amount: 1200, label: '10 Children Meals', short: '(Meals ⭐)' },
                  { amount: 3000, label: 'Women Tailoring Kit', short: '(Skills)' },
                  { amount: 5000, label: 'Full Semester Sponsor', short: '(Semester)' }
                ].map((pill) => {
                  const isSelected = selectedPill.amount === pill.amount;
                  return (
                    <button
                      key={pill.amount}
                      type="button"
                      onClick={() => setSelectedPill(pill)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${isSelected ? 'bg-accent-sprout text-primary font-bold ring-2 ring-white shadow-sm' : 'bg-white/10 text-[#d3e7da] hover:bg-white/20'}`}
                    >
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
                className="dynamic-light-btn inline-flex items-center gap-2.5 bg-accent-sprout hover:bg-white text-primary font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl transition-all shadow-lg hover:shadow-accent-sprout/30 transform hover:-translate-y-0.5"
              >
                <span className="material-symbols-outlined text-xl text-primary animate-bounce" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                <span>Donate ₹{selectedPill.amount.toLocaleString('en-IN')} ({selectedPill.label})</span>
              </button>

              <a href="#initiatives" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/25 font-bold text-sm sm:text-base px-5 py-3.5 rounded-xl transition-colors">
                <span>Explore Initiatives</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </a>
            </div>

            {/* Quick Metrics */}
            <div className="pt-6 grid grid-cols-3 gap-3 border-t border-white/15">
              <div className="dynamic-spotlight-card bg-white/5 backdrop-blur-sm p-3 rounded-xl border border-white/10 text-center lg:text-left">
                <span className="block text-2xl sm:text-3xl font-extrabold text-accent-sprout leading-tight">15,400+</span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#b2d5bf]">Lives Touched</span>
              </div>
              <div className="dynamic-spotlight-card bg-white/5 backdrop-blur-sm p-3 rounded-xl border border-white/10 text-center lg:text-left">
                <span className="block text-2xl sm:text-3xl font-extrabold text-accent-sprout leading-tight">45,000+</span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#b2d5bf]">Meals Served</span>
              </div>
              <div className="dynamic-spotlight-card bg-white/5 backdrop-blur-sm p-3 rounded-xl border border-white/10 text-center lg:text-left">
                <span className="block text-2xl sm:text-3xl font-extrabold text-accent-sprout leading-tight">180+</span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#b2d5bf]">Mentors</span>
              </div>
            </div>
          </div>

          {/* Right Column: Perfect Responsive Alignment */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="w-full max-w-md lg:max-w-none relative">
              
              {/* Focus Switcher Tabs */}
              <div className="flex items-center justify-between gap-1 mb-3 bg-black/20 p-1 rounded-xl backdrop-blur-md border border-white/10 overflow-x-auto">
                {spotlights.map((spot, idx) => {
                  const isActive = idx === spotlightIndex;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSpotlightIndex(idx)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${isActive ? 'bg-accent-sprout text-primary shadow-sm' : 'text-[#b2d5bf] hover:text-white hover:bg-white/10'}`}
                    >
                      <span className="material-symbols-outlined text-sm">{spot.icon}</span>
                      <span>{spot.title.split(' ')[0]}</span>
                    </button>
                  );
                })}
              </div>

              {/* Spotlight Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 bg-surface-variant aspect-[4/5] w-full group">
                <img
                  src={currentSpot.img}
                  alt={currentSpot.title}
                  className="w-full h-full object-cover transition-opacity duration-300"
                  onError={(e) => { e.currentTarget.src = '/images/rightpath_logo.png'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e2c21] via-black/20 to-transparent"></div>

                <div className="absolute top-3 left-3 bg-[#005134]/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full border border-accent-sprout/40 shadow-lg flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm text-accent-sprout">verified</span>
                  <span>100% Grassroots Efficacy</span>
                </div>

                <div className="absolute top-3 right-3 bg-red-600/90 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-lg flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
                  <span>{currentSpot.tag}</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 bg-[#102f24]/90 backdrop-blur-md p-4 rounded-xl border border-white/20 flex items-center gap-3.5 shadow-xl">
                  <div className="w-11 h-11 rounded-xl bg-accent-sprout/20 border border-accent-sprout/30 flex items-center justify-center text-accent-sprout flex-shrink-0">
                    <span className="material-symbols-outlined text-2xl">{currentSpot.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white leading-tight">{currentSpot.title}</h3>
                    <p className="text-xs text-[#b8dfc4] mt-0.5 line-clamp-2">{currentSpot.desc}</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
