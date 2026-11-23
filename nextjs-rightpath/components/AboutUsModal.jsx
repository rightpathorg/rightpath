'use client';

export default function AboutUsModal({ isOpen, onClose, onOpenDonation }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-start sm:justify-center p-2.5 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto"
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-3xl bg-[#0d2419] rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.7)] border border-accent-sprout/40 overflow-hidden my-auto sm:my-8 text-white flex flex-col max-h-[94vh] sm:max-h-[85vh]">
        
        {/* Sticky Modal Header with Accessible Close Button */}
        <div className="sticky top-0 z-30 bg-gradient-to-r from-primary via-[#16563a] to-[#0d2419] px-4 py-3 sm:px-6 sm:py-4 flex items-center justify-between border-b border-accent-sprout/20 shadow-md">
          <div className="pr-2">
            <div className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] text-accent-sprout uppercase tracking-wider font-extrabold mb-0.5">
              <span className="material-symbols-outlined text-xs sm:text-sm">badge</span>
              <span>Founder & About Us • हमारी कहानी</span>
            </div>
            <h2 className="text-base sm:text-xl font-extrabold tracking-tight text-white flex items-center gap-2">
              <span>About RightPath NGO & Founder Ashish Kumar</span>
            </h2>
            <p className="text-[11px] sm:text-xs text-[#b8dfc4] mt-0.5 hidden sm:block">Empowering underprivileged children and families across Delhi NCR through education and healthcare.</p>
          </div>
          <button
            onClick={onClose}
            type="button"
            aria-label="Close modal"
            className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-all flex-shrink-0 active:scale-90 focus:outline-none border border-white/20 cursor-pointer shadow-sm"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-7 space-y-6 overflow-y-auto overscroll-contain flex-1">
          
          {/* Top Profile & Stats Hub */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center pb-6 border-b border-white/10">
            
            {/* Left: Rotating Ring Founder Photo */}
            <div className="sm:col-span-5 flex flex-col items-center text-center">
              <div className="relative group">
                <div className="about-profile-ring w-32 h-32 sm:w-36 sm:h-36 rounded-2xl p-1 shadow-2xl about-float">
                  <div className="w-full h-full rounded-xl overflow-hidden bg-[#102f24] border border-white/20">
                    <img
                      src="/images/founder.png"
                      alt="Ashish Kumar - Founder & Chief Trustee"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => { e.currentTarget.src = '/images/rightpath_logo.png'; }}
                    />
                  </div>
                </div>
                <span className="absolute -bottom-2 bg-gradient-to-r from-primary to-[#18754b] text-accent-sprout font-bold text-[11px] px-2.5 py-0.5 rounded-full border border-accent-sprout/40 shadow-lg">
                  Age 21 • Founder
                </span>
              </div>

              <div className="mt-4 space-y-0.5">
                <h3 className="text-xl font-extrabold text-white">Ashish Kumar</h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-accent-sprout">Founder & Chief Trustee</p>
                <p className="text-[11px] text-[#a5d2b6]">BCA Graduate • Grassroots Changemaker</p>
              </div>

              {/* Social Links with Animation */}
              <div className="flex items-center gap-2 mt-3.5">
                <a
                  href="https://www.instagram.com/right_path.26?knvt=N2xwb2hhYWVqOGsy&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Follow on Instagram"
                  aria-label="Instagram"
                  className="about-social-btn w-9 h-9 rounded-xl bg-gradient-to-tr from-[#833ab4] via-[#fd1d1d] to-[#fcb045] flex items-center justify-center text-white shadow-md hover:shadow-pink-500/40"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a
                  href="https://youtube.com/@ashuzx8377?si=XQQUUXwqwEMC10rl"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Subscribe on YouTube"
                  aria-label="YouTube"
                  className="about-social-btn w-9 h-9 rounded-xl bg-[#ff0000] hover:bg-[#cc0000] flex items-center justify-center text-white shadow-md hover:shadow-red-500/40"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
                <a
                  href="https://www.facebook.com/share/1NePLPmDPH/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Connect on Facebook"
                  aria-label="Facebook"
                  className="about-social-btn w-9 h-9 rounded-xl bg-[#1877f2] hover:bg-[#1567d3] flex items-center justify-center text-white shadow-md hover:shadow-blue-500/40"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a
                  href="https://wa.me/919711718972?text=Hi%20Ashish%20ji,%20I%20would%20like%20to%20connect%20regarding%20RightPathNGO"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Chat on WhatsApp"
                  aria-label="WhatsApp"
                  className="about-social-btn w-9 h-9 rounded-xl bg-[#25D366] hover:bg-[#20ba59] flex items-center justify-center text-white shadow-md hover:shadow-green-500/40"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                </a>
              </div>
            </div>

            {/* Right: 4 Stat Pills */}
            <div className="sm:col-span-7 space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="about-stat-card p-3.5 rounded-xl text-center">
                  <span className="block text-2xl font-extrabold text-accent-sprout leading-tight">21</span>
                  <span className="text-[11px] uppercase font-extrabold tracking-wider text-white">Years Old</span>
                  <p className="text-[9px] text-[#a5d2b6] mt-0.5">Young Visionary</p>
                </div>
                <div className="about-stat-card p-3.5 rounded-xl text-center">
                  <span className="block text-2xl font-extrabold text-accent-sprout leading-tight">BCA</span>
                  <span className="text-[11px] uppercase font-extrabold tracking-wider text-white">Graduate</span>
                  <p className="text-[9px] text-[#a5d2b6] mt-0.5">Computer Science</p>
                </div>
                <div className="about-stat-card p-3.5 rounded-xl text-center">
                  <span className="block text-2xl font-extrabold text-accent-sprout leading-tight">15.4K+</span>
                  <span className="text-[11px] uppercase font-extrabold tracking-wider text-white">Lives Touched</span>
                  <p className="text-[9px] text-[#a5d2b6] mt-0.5">Grassroots Impact</p>
                </div>
                <div className="about-stat-card p-3.5 rounded-xl text-center">
                  <span className="block text-2xl font-extrabold text-accent-sprout leading-tight">100%</span>
                  <span className="text-[11px] uppercase font-extrabold tracking-wider text-white">Field Audited</span>
                  <p className="text-[9px] text-[#a5d2b6] mt-0.5">80G Transparent</p>
                </div>
              </div>

              {/* Founder Quote in Modal */}
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 relative">
                <span className="material-symbols-outlined text-3xl text-accent-sprout absolute top-2 right-3 opacity-30">format_quote</span>
                <p className="text-xs italic text-[#e1f5e8] leading-relaxed pr-6">
                  “True empowerment is not charity that fosters dependence; it is lighting the spark of identity so children can shape their own destinies.”
                </p>
              </div>
            </div>

          </div>

          {/* 4 Narrative Story Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="about-info-card p-4 rounded-xl space-y-1.5">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-accent-sprout/20 text-accent-sprout flex items-center justify-center">
                  <span className="material-symbols-outlined text-base">auto_stories</span>
                </div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">The Origin Story</h4>
              </div>
              <p className="text-[11px] text-[#b8dfc4] leading-relaxed">
                RightPath began under open tree canopies with a slate and chalk. Ashish Kumar recognized that genuine transformation happens on the street, not from behind air-conditioned desks.
              </p>
            </div>

            <div className="about-info-card p-4 rounded-xl space-y-1.5">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-emerald-400/20 text-emerald-300 flex items-center justify-center">
                  <span className="material-symbols-outlined text-base">terminal</span>
                </div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Builder at Heart</h4>
              </div>
              <p className="text-[11px] text-[#b8dfc4] leading-relaxed">
                Applying modern software thinking to social welfare: automated 80G tax receipt generation, digital classroom attendance tracking, and transparent donor reporting.
              </p>
            </div>

            <div className="about-info-card p-4 rounded-xl space-y-1.5">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-blue-400/20 text-blue-300 flex items-center justify-center">
                  <span className="material-symbols-outlined text-base">school</span>
                </div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Education & Tech Background</h4>
              </div>
              <p className="text-[11px] text-[#b8dfc4] leading-relaxed">
                BCA Graduate with deep expertise in web engineering, systems architecture, and product design, dedicated to solving grassroots inequalities through tech-for-good.
              </p>
            </div>

            <div className="about-info-card p-4 rounded-xl space-y-1.5">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-amber-400/20 text-amber-300 flex items-center justify-center">
                  <span className="material-symbols-outlined text-base">diversity_3</span>
                </div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Mission-Driven Leadership</h4>
              </div>
              <p className="text-[11px] text-[#b8dfc4] leading-relaxed">
                Zero overhead leakage, absolute field accountability, and direct community co-creation where mothers and local elders manage nutrition and daily schooling.
              </p>
            </div>
          </div>

          {/* Skills & Competencies Tags */}
          <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
            <p className="text-[10px] uppercase font-bold text-accent-sprout tracking-widest mb-2">Core Competencies & Vision</p>
            <div className="flex flex-wrap gap-1.5">
              <span className="about-skill-tag px-2.5 py-1 rounded-lg text-[10px] font-semibold text-white">Full-Stack Development</span>
              <span className="about-skill-tag px-2.5 py-1 rounded-lg text-[10px] font-semibold text-white">Grassroots Operations</span>
              <span className="about-skill-tag px-2.5 py-1 rounded-lg text-[10px] font-semibold text-white">Child Literacy Advocacy</span>
              <span className="about-skill-tag px-2.5 py-1 rounded-lg text-[10px] font-semibold text-white">Tech for Good</span>
              <span className="about-skill-tag px-2.5 py-1 rounded-lg text-[10px] font-semibold text-white">Sec 80G Compliance</span>
              <span className="about-skill-tag px-2.5 py-1 rounded-lg text-[10px] font-semibold text-white">Community Building</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => { onClose(); onOpenDonation(1200); }}
              className="w-full sm:flex-1 py-3 bg-gradient-to-r from-primary via-[#155a3d] to-[#005134] hover:brightness-110 text-white rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-all border border-accent-sprout/30"
            >
              <span className="material-symbols-outlined text-base text-accent-sprout">favorite</span>
              <span>Support RightPath Mission</span>
            </button>
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-3 border border-white/20 hover:bg-white/10 rounded-xl font-semibold text-xs sm:text-sm text-white/90 transition-colors"
            >
              Close
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
