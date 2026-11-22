'use client';

export default function Stories() {
  return (
    <section id="stories" className="w-full py-16 lg:py-24 bg-[#133829] text-white relative">
      <div className="max-w-[72rem] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase font-extrabold tracking-widest text-accent-sprout">Authentic Ground Voices</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-1">हर मदद के पीछे एक सच्ची कहानी</h2>
          <p className="text-sm text-[#d3e7da] mt-1">
            Witness the transformation ignited when compassion meets consistent grassroots companionship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Story 1 */}
          <div className="bg-white/10 border border-white/15 p-6 rounded-2xl backdrop-blur-sm flex flex-col sm:flex-row gap-5 items-start hover:bg-white/15 transition-all">
            <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 border-2 border-accent-sprout/40 shadow-md">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA53L41VmCnbxr-Ar_vCGGbX1K7KDsvf907kldNHDfTHzsdW8Fb0ps9VHs_5_E95OGzfmHlkLOuO1spl8xtrnA8P_9GlDuKQZw21qKk8MYcoI03qfrQQRg6t0goeIXSBzqLYQIl6QdmX_LXTOUNXX4S-P1Y29oYls4MMit_DoXY_BlD9qBnbYFQ7RwU6LNwddlfPi2kiol3Ik9qkF6PNE-DVY0Gdgk3t_7Uqq5DHwM"
                alt="Aarti Kumari"
                className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.src = '/images/rightpath_logo.png'; }}
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-accent-sprout material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="text-xs font-bold uppercase tracking-wider text-accent-sprout">Formal School Enrollment</span>
              </div>
              <p className="text-xs sm:text-sm italic text-[#e6f4eb] leading-relaxed">
                “I used to collect scrap with my mother near the bridge. RightPath didis taught me to read alphabets. Today, I passed my government school entrance exam for Grade 5!”
              </p>
              <div>
                <p className="text-sm font-bold text-white">Aarti Kumari (Age 11)</p>
                <p className="text-xs text-[#a8d3b7]">Yamuna Khadar Learning Center</p>
              </div>
            </div>
          </div>

          {/* Story 2 */}
          <div className="bg-white/10 border border-white/15 p-6 rounded-2xl backdrop-blur-sm flex flex-col sm:flex-row gap-5 items-start hover:bg-white/15 transition-all">
            <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 border-2 border-accent-sprout/40 shadow-md">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJtBdzAENy8GVTE3ZPWr6gnPHGdC4h27IWVIdB5269Vb5NB-leqr7uSIEkwUVOYfwoMyw9QA0emTN3L8PulxRE26jllO5JBSzTnrO581n854dOW79dG1QAGbQPCgRk1XlARp8h99QI0Pk59s42DrKigTU0snkVE6HDG87IVabKdXFiAkOWnEYMYwWs_OO0eZjBjXggmxxOwPISXDq6IexwE3ETwalk9xB424poUVE"
                alt="Sunita Devi"
                className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.src = '/images/rightpath_logo.png'; }}
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-accent-sprout material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="text-xs font-bold uppercase tracking-wider text-accent-sprout">Micro-Entrepreneurship</span>
              </div>
              <p className="text-xs sm:text-sm italic text-[#e6f4eb] leading-relaxed">
                “With the 6-month tailoring course and a sewing machine kit from RightPath, I now stitch uniforms for the community. I earn ₹7,500 every month to support my three children.”
              </p>
              <div>
                <p className="text-sm font-bold text-white">Sunita Devi (Mother of 3)</p>
                <p className="text-xs text-[#a8d3b7]">Kaushal Vikas Center, Rohini</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
