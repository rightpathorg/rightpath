'use client';

export default function AboutUs({ onOpenModal }) {
  return (
    <section id="about-us" className="w-full py-16 lg:py-24 bg-[#0d2419] text-white relative overflow-hidden">
      
      {/* Ambient Botanical Glows */}
      <div className="absolute -top-32 -left-20 w-96 h-96 rounded-full bg-primary/20 blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-32 -right-20 w-96 h-96 rounded-full bg-accent-sprout/15 blur-3xl pointer-events-none"></div>

      <div className="max-w-[72rem] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2.5">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 px-3.5 py-1 rounded-full shadow-sm">
            <span className="w-2 h-2 rounded-full bg-accent-sprout animate-ping"></span>
            <span className="text-xs uppercase font-extrabold tracking-widest text-accent-sprout">The Visionary Behind RightPath NGO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Meet Our <span className="gradient-text-sprout">Founder</span>
          </h2>
          <p className="text-sm sm:text-base text-[#c7e3d0] leading-relaxed">
            A 21-year-old BCA graduate on a grassroots mission to bring dignity, street education, and healthcare equity to every child across Delhi NCR.
          </p>
        </div>

        {/* Main Founder Showcase Card (Inspired by YourSaathi Design) */}
        <div className="about-founder-card rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden border border-accent-sprout/30">
          
          {/* Top Grid: Profile + Identity + Quick Stats */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-8 border-b border-white/15">
            
            {/* Left: Profile Image with Animated Rotating Ring */}
            <div className="lg:col-span-4 flex flex-col items-center text-center">
              <div className="relative group">
                <div className="about-profile-ring w-36 h-36 sm:w-44 sm:h-44 rounded-3xl p-1.5 shadow-2xl about-float">
                  <div className="w-full h-full rounded-2xl overflow-hidden bg-[#102f24] border-2 border-white/20">
                    <img
                      src="/images/founder.png"
                      alt="Ashish Kumar - Founder & Chief Trustee"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => { e.currentTarget.src = '/images/rightpath_logo.png'; }}
                    />
                  </div>
                </div>
                <span className="absolute -bottom-2 bg-gradient-to-r from-primary to-[#18754b] text-accent-sprout font-bold text-xs px-3 py-1 rounded-full border border-accent-sprout/40 shadow-lg">
                  Age 21 • Founder
                </span>
              </div>

              <div className="mt-5 space-y-1">
                <h3 className="text-2xl font-extrabold text-white">Ashish Kumar</h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-accent-sprout">Founder & Chief Trustee, RightPath NGO</p>
                <p className="text-[11px] text-[#a5d2b6]">BCA Graduate • Grassroots Changemaker</p>
              </div>

              {/* Animated Social Links Hub */}
              <div className="flex items-center gap-2.5 mt-4">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/right_path.26?knvt=N2xwb2hhYWVqOGsy&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  title="Follow on Instagram"
                  className="about-social-btn w-10 h-10 rounded-xl bg-gradient-to-tr from-[#833ab4] via-[#fd1d1d] to-[#fcb045] flex items-center justify-center text-white shadow-md hover:shadow-pink-500/30"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com/@ashuzx8377?si=XQQUUXwqwEMC10rl"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  title="Subscribe on YouTube"
                  className="about-social-btn w-10 h-10 rounded-xl bg-[#ff0000] hover:bg-[#cc0000] flex items-center justify-center text-white shadow-md hover:shadow-red-500/30"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/share/1NePLPmDPH/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  title="Connect on Facebook"
                  className="about-social-btn w-10 h-10 rounded-xl bg-[#1877f2] hover:bg-[#1567d3] flex items-center justify-center text-white shadow-md hover:shadow-blue-500/30"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>

                {/* WhatsApp Direct */}
                <a
                  href="https://wa.me/918377988556?text=Hi%20Ashish%20ji,%20I%20would%20like%20to%20connect%20regarding%20RightPathNGO"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  title="Chat directly on WhatsApp"
                  className="about-social-btn w-10 h-10 rounded-xl bg-[#25D366] hover:bg-[#20ba59] flex items-center justify-center text-white shadow-md hover:shadow-green-500/30"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                </a>
              </div>
            </div>

            {/* Right: 4 Quick Stat Badges */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
                <div className="about-stat-card p-4 rounded-2xl text-center">
                  <span className="block text-3xl font-extrabold text-accent-sprout leading-tight">21</span>
                  <span className="text-xs uppercase font-extrabold tracking-wider text-white">Years Old</span>
                  <p className="text-[10px] text-[#a5d2b6] mt-0.5">Young Visionary</p>
                </div>
                <div className="about-stat-card p-4 rounded-2xl text-center">
                  <span className="block text-3xl font-extrabold text-accent-sprout leading-tight">BCA</span>
                  <span className="text-xs uppercase font-extrabold tracking-wider text-white">Graduate</span>
                  <p className="text-[10px] text-[#a5d2b6] mt-0.5">Tech & Software</p>
                </div>
                <div className="about-stat-card p-4 rounded-2xl text-center">
                  <span className="block text-3xl font-extrabold text-accent-sprout leading-tight">15.4K+</span>
                  <span className="text-xs uppercase font-extrabold tracking-wider text-white">Lives Touched</span>
                  <p className="text-[10px] text-[#a5d2b6] mt-0.5">Grassroots Impact</p>
                </div>
                <div className="about-stat-card p-4 rounded-2xl text-center">
                  <span className="block text-3xl font-extrabold text-accent-sprout leading-tight">1</span>
                  <span className="text-xs uppercase font-extrabold tracking-wider text-white">Mission</span>
                  <p className="text-[10px] text-[#a5d2b6] mt-0.5">एक नई पहचान</p>
                </div>
              </div>

              {/* Founder Story Quote */}
              <div className="mt-5 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 relative">
                <span className="material-symbols-outlined text-4xl text-accent-sprout absolute top-3 right-4 opacity-30">format_quote</span>
                <p className="text-xs sm:text-sm italic text-[#d4f2dc] leading-relaxed pr-8">
                  “True empowerment is not charity that fosters dependence; it is lighting the spark of identity so children can shape their own destinies.”
                </p>
                <div className="mt-3 flex items-center justify-between text-xs text-[#a5d2b6]">
                  <span>— Ashish Kumar, Founder</span>
                  <span className="inline-flex items-center gap-1 font-semibold text-accent-sprout">
                    <span className="material-symbols-outlined text-sm">verified</span>
                    100% Grassroots Field Presence
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Grid: 4 Narrative Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
            
            {/* 1. The Origin Story */}
            <div className="about-info-card p-5 sm:p-6 rounded-2xl space-y-2.5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent-sprout/20 text-accent-sprout flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-xl">auto_stories</span>
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">The Origin Story</h4>
                  <p className="text-[11px] text-accent-sprout uppercase tracking-wider font-semibold">From Street Canopies to Centers</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#b8dfc4] leading-relaxed">
                RightPath was born from a pivotal realization: real transformation does not occur in air-conditioned boardrooms. It happens on the pavement, under open tree canopies, and within urban bastis where children are forced out of schools. What began with chalk and slates has grown into full-fledged community centers.
              </p>
            </div>

            {/* 2. Builder at Heart */}
            <div className="about-info-card p-5 sm:p-6 rounded-2xl space-y-2.5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-400/20 text-emerald-300 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-xl">terminal</span>
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Builder at Heart</h4>
                  <p className="text-[11px] text-emerald-300 uppercase tracking-wider font-semibold">Tech-Driven Philanthropy</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#b8dfc4] leading-relaxed">
                As a developer, Ashish brings computational discipline and systems thinking to social work. From automating 80G tax receipt dispatch in under 4 minutes to developing QR-verified classroom attendance systems, technology powers every facet of RightPath’s efficiency.
              </p>
            </div>

            {/* 3. Education & Academic Background */}
            <div className="about-info-card p-5 sm:p-6 rounded-2xl space-y-2.5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-400/20 text-blue-300 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-xl">school</span>
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Education & Background</h4>
                  <p className="text-[11px] text-blue-300 uppercase tracking-wider font-semibold">BCA Graduate • Computer Applications</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#b8dfc4] leading-relaxed">
                Holding a Bachelor of Computer Applications (BCA) degree at age 21, Ashish combines technical software knowledge with grassroots organizing. His vision is to democratize digital literacy so slum children can bridge the digital divide and enter the modern workforce.
              </p>
            </div>

            {/* 4. Mission-Driven Leadership */}
            <div className="about-info-card p-5 sm:p-6 rounded-2xl space-y-2.5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-xl">diversity_3</span>
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Mission-Driven Leadership</h4>
                  <p className="text-[11px] text-amber-300 uppercase tracking-wider font-semibold">Decentralized & Community-Owned</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#b8dfc4] leading-relaxed">
                RightPath avoids top-down charity. We partner directly with mothers and community elders who co-manage student attendance and hot meal distributions. 100% of public donations go directly to frontline programs with public ledger audit verification.
              </p>
            </div>

          </div>

          {/* Skill & Technology Tags Bar */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase font-extrabold text-accent-sprout tracking-wider">Visionary Capabilities:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="about-skill-tag px-3 py-1 rounded-lg text-xs font-semibold text-white">Full-Stack Development</span>
              <span className="about-skill-tag px-3 py-1 rounded-lg text-xs font-semibold text-white">Grassroots Operations</span>
              <span className="about-skill-tag px-3 py-1 rounded-lg text-xs font-semibold text-white">Tech for Good</span>
              <span className="about-skill-tag px-3 py-1 rounded-lg text-xs font-semibold text-white">Youth Mentorship</span>
              <span className="about-skill-tag px-3 py-1 rounded-lg text-xs font-semibold text-white">Child Literacy Advocacy</span>
              <span className="about-skill-tag px-3 py-1 rounded-lg text-xs font-semibold text-white">Audited 80G Compliance</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
