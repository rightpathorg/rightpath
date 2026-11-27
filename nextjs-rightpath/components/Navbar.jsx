'use client';
import { useState, useEffect, useRef } from 'react';

export default function Navbar({ onOpenDonation, onOpenAboutUs }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeTab, setActiveTab] = useState('home');
  const [pillStyle, setPillStyle] = useState({ left: 4, width: 68, opacity: 1 });
  const navTrayRef = useRef(null);

  // Scroll listener for progress and elevation
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(Math.max((scrollY / docHeight) * 100, 0), 100) : 0;
      setScrollProgress(pct);
      setIsScrolled(scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (e) => {
    if (!navTrayRef.current) return;
    const trayRect = navTrayRef.current.getBoundingClientRect();
    const btnRect = e.currentTarget.getBoundingClientRect();
    setPillStyle({
      left: btnRect.left - trayRect.left,
      width: btnRect.width,
      opacity: 1
    });
  };

  const handleNavClick = (tabId, e) => {
    setActiveTab(tabId);
    handleMouseEnter(e);
  };

  const resetToActive = () => {
    if (!navTrayRef.current) return;
    const activeEl = navTrayRef.current.querySelector(`[data-tab="${activeTab}"]`);
    if (activeEl) {
      const trayRect = navTrayRef.current.getBoundingClientRect();
      const btnRect = activeEl.getBoundingClientRect();
      setPillStyle({
        left: btnRect.left - trayRect.left,
        width: btnRect.width,
        opacity: 1
      });
    }
  };

  return (
    <>
      {/* Floating Island Navigation Header */}
      <header className={`fixed top-2 sm:top-3 left-0 right-0 z-50 px-3 sm:px-6 transition-all duration-300 ${isScrolled ? 'is-scrolled' : ''}`}>
        <div className="navbar-island max-w-7xl mx-auto h-[4.5rem] px-3.5 sm:px-6 rounded-2xl sm:rounded-full flex items-center justify-between gap-3 relative">
          
          {/* Scroll Progress Bar at the base */}
          <div
            id="navScrollIndicator"
            style={{ width: `${scrollProgress}%` }}
          />

          {/* Brand Logo with Rotating Story Ring */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none">
            <div className="nav-avatar-ring relative w-11 h-11 flex items-center justify-center">
              <img
                src="/images/rightpath_logo.png"
                alt="RightPath Logo"
                className="w-full h-full object-cover rounded-full bg-white transition-transform duration-300 group-hover:scale-105"
                onError={(e) => { e.currentTarget.src = '/images/rightpath_logo.png'; }}
              />
              <span className="absolute -bottom-0.5 -right-0.5 flex h-3.5 w-3.5 items-center justify-center">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-80"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 border-2 border-white"></span>
              </span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="nav-brand-title text-xl sm:text-[22px] font-extrabold text-primary tracking-tight font-sans transition-all">RightPath</span>
                <span className="bg-gradient-to-r from-accent-sprout/40 to-primary/10 text-primary border border-primary/20 text-[10px] font-extrabold px-1.5 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-xs">
                  NGO
                </span>
              </div>
              <span className="text-[10px] text-text-muted font-medium -mt-0.5 tracking-tight hidden sm:block">Empowering Lives • Delhi NCR</span>
            </div>
          </a>

          {/* Desktop Floating Pill Tray with Magnetic Gliding Indicator */}
          <nav
            ref={navTrayRef}
            onMouseLeave={resetToActive}
            className="nav-pill-tray hidden lg:flex items-center p-1 bg-surface-pale/85 backdrop-blur-md rounded-full border border-border-subtle/80 shadow-inner gap-0.5 xl:gap-1 relative"
          >
            {/* Sliding Pill Indicator */}
            <span
              className="nav-gliding-pill"
              style={{
                left: `${pillStyle.left}px`,
                width: `${pillStyle.width}px`,
                opacity: pillStyle.opacity
              }}
            />

            <a
              href="#hero-section"
              data-tab="home"
              onMouseEnter={handleMouseEnter}
              onClick={(e) => handleNavClick('home', e)}
              className={`nav-pill-btn px-3.5 py-2 text-xs xl:text-sm rounded-full transition-all flex items-center gap-1 ${activeTab === 'home' ? 'active font-bold text-primary' : 'font-semibold text-on-surface-variant hover:text-primary'}`}
            >
              <span>Home</span>
            </a>
            <button
              type="button"
              data-tab="about"
              onMouseEnter={handleMouseEnter}
              onClick={(e) => { handleNavClick('about', e); onOpenAboutUs?.(); }}
              className={`nav-pill-btn px-3.5 py-2 text-xs xl:text-sm rounded-full transition-all flex items-center gap-1.5 ${activeTab === 'about' ? 'active font-bold text-primary' : 'font-semibold text-on-surface-variant hover:text-primary'}`}
            >
              <span className="material-symbols-outlined text-[16px] text-primary nav-icon-wobble">diversity_1</span>
              <span>About Us</span>
            </button>
            <a
              href="#initiatives"
              data-tab="initiatives"
              onMouseEnter={handleMouseEnter}
              onClick={(e) => handleNavClick('initiatives', e)}
              className={`nav-pill-btn px-3.5 py-2 text-xs xl:text-sm rounded-full transition-all flex items-center gap-1.5 ${activeTab === 'initiatives' ? 'active font-bold text-primary' : 'font-semibold text-on-surface-variant hover:text-primary'}`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Initiatives</span>
            </a>
            <a
              href="#impact-metrics"
              data-tab="impact"
              onMouseEnter={handleMouseEnter}
              onClick={(e) => handleNavClick('impact', e)}
              className={`nav-pill-btn px-3.5 py-2 text-xs xl:text-sm rounded-full transition-all flex items-center gap-1.5 ${activeTab === 'impact' ? 'active font-bold text-primary' : 'font-semibold text-on-surface-variant hover:text-primary'}`}
            >
              <span className="material-symbols-outlined text-[16px] text-primary nav-icon-wobble">verified</span>
              <span>Impact</span>
            </a>
            <a
              href="#stories"
              data-tab="stories"
              onMouseEnter={handleMouseEnter}
              onClick={(e) => handleNavClick('stories', e)}
              className={`nav-pill-btn px-3.5 py-2 text-xs xl:text-sm rounded-full transition-all flex items-center ${activeTab === 'stories' ? 'active font-bold text-primary' : 'font-semibold text-on-surface-variant hover:text-primary'}`}
            >
              <span>Stories</span>
            </a>
          </nav>

          {/* Header CTAs */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="https://wa.me/918377988556?text=Hi%20RightPath%20NGO,%20I%20would%20like%20to%20connect"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-whatsapp-btn hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-[#156f34] bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/35 px-3.5 py-2 rounded-full transition-all duration-300 shadow-sm"
              title="Chat on WhatsApp"
            >
              <svg className="w-3.5 h-3.5 fill-current text-[#25D366] transition-transform duration-300" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
              <span>WhatsApp</span>
              <span class="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-ping"></span>
            </a>

            {/* Supercharged Sheen Donate Pill */}
            <button
              onClick={() => onOpenDonation(1200)}
              className="nav-donate-btn relative inline-flex items-center gap-2 text-white text-xs sm:text-sm font-extrabold px-4 sm:px-5 py-2.5 rounded-full transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span className="material-symbols-outlined text-sm sm:text-base text-accent-sprout animate-heartbeat" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
              <span>Donate Now</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2.5 rounded-full text-primary hover:bg-surface-mint transition-all duration-200 focus:outline-none border border-border-subtle hover:scale-105 active:scale-95 shadow-xs"
              aria-label="Open mobile navigation"
            >
              <span className="material-symbols-outlined text-2xl">menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-[90] bg-black/50 backdrop-blur-sm transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Navigation Drawer */}
      <div className={`fixed top-0 right-0 bottom-0 z-[95] w-72 bg-white shadow-2xl p-6 flex flex-col justify-between transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-border-subtle">
            <div className="flex items-center gap-2">
              <img src="/images/rightpath_logo.png" alt="RightPath Logo" className="w-8 h-8 rounded-full" />
              <span className="font-bold text-primary text-base">RightPath NGO</span>
            </div>
            <button onClick={() => setMobileMenuOpen(false)} className="p-1 rounded-full text-text-muted hover:text-primary">
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
          </div>

          <nav className="flex flex-col gap-2 pt-6">
            <a
              href="#hero-section"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg font-bold text-primary bg-surface-mint"
            >
              Home
            </a>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenAboutUs?.(); }}
              className="text-left w-full px-3 py-2 rounded-lg font-medium text-on-surface-variant hover:bg-surface-mint/60 flex items-center justify-between"
            >
              <span>About Us</span>
              <span className="material-symbols-outlined text-sm text-primary">diversity_1</span>
            </button>
            <a href="#initiatives" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg font-medium text-on-surface-variant hover:bg-surface-mint/60">Our Initiatives</a>
            <a href="#impact-metrics" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg font-medium text-on-surface-variant hover:bg-surface-mint/60">Verified Impact</a>
            <a href="#stories" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg font-medium text-on-surface-variant hover:bg-surface-mint/60">Field Stories</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg font-medium text-on-surface-variant hover:bg-surface-mint/60">Contact Us</a>
          </nav>
        </div>

        <div className="pt-6 border-t border-border-subtle space-y-3">
          <button
            onClick={() => { setMobileMenuOpen(false); onOpenDonation(1200); }}
            className="w-full py-3 bg-primary text-white rounded-xl font-bold flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-base">favorite</span>
            <span>Donate Now (80G Proof)</span>
          </button>
          <a
            href="https://wa.me/918377988556"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 bg-[#25D366]/20 text-[#1e7e34] rounded-xl font-bold text-xs flex items-center justify-center gap-2"
          >
            <span>Connect on WhatsApp</span>
          </a>
        </div>
      </div>
    </>
  );
}

      {/* Mobile Drawer Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-[90] bg-black/50 backdrop-blur-sm transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Navigation Drawer */}
      <div className={`fixed top-0 right-0 bottom-0 z-[95] w-72 bg-white shadow-2xl p-6 flex flex-col justify-between transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-border-subtle">
            <div className="flex items-center gap-2">
              <img src="/images/rightpath_logo.png" alt="RightPath Logo" className="w-8 h-8 rounded-full" />
              <span className="font-bold text-primary text-base">RightPath NGO</span>
            </div>
            <button onClick={() => setMobileMenuOpen(false)} className="p-1 rounded-full text-text-muted hover:text-primary">
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
          </div>

          <nav className="flex flex-col gap-2 pt-6">
            <a
              href="#hero-section"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg font-bold text-primary bg-surface-mint"
            >
              Home
            </a>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenAboutUs?.(); }}
              className="text-left w-full px-3 py-2 rounded-lg font-medium text-on-surface-variant hover:bg-surface-mint/60 flex items-center justify-between"
            >
              <span>About Us</span>
              <span className="material-symbols-outlined text-sm text-primary">diversity_1</span>
            </button>
            <a href="#initiatives" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg font-medium text-on-surface-variant hover:bg-surface-mint/60">Our Initiatives</a>
            <a href="#impact-metrics" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg font-medium text-on-surface-variant hover:bg-surface-mint/60">Verified Impact</a>
            <a href="#stories" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg font-medium text-on-surface-variant hover:bg-surface-mint/60">Field Stories</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg font-medium text-on-surface-variant hover:bg-surface-mint/60">Contact Us</a>
          </nav>
        </div>

        <div className="pt-6 border-t border-border-subtle space-y-3">
          <button
            onClick={() => { setMobileMenuOpen(false); onOpenDonation(1200); }}
            className="w-full py-3 bg-primary text-white rounded-xl font-bold flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-base">favorite</span>
            <span>Donate Now (80G Proof)</span>
          </button>
          <a
            href="https://wa.me/918377988556"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 bg-[#25D366]/20 text-[#1e7e34] rounded-xl font-bold text-xs flex items-center justify-center gap-2"
          >
            <span>Connect on WhatsApp</span>
          </a>
        </div>
      </div>
    </>
  );
}
