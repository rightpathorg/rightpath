'use client';

export default function VerifiedImpact() {
  return (
    <section id="impact-metrics" className="w-full py-16 lg:py-24 bg-surface">
      <div className="max-w-[72rem] mx-auto px-4 sm:px-6 md:px-8">
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-border-subtle shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border-l-4 border-accent-sage pl-4">
              <span className="block text-3xl sm:text-4xl font-extrabold text-primary leading-none">15,400+</span>
              <span className="text-xs font-bold uppercase tracking-wider text-text-muted block mt-2">Lives Directly Touched</span>
              <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">Across 12 low-income basti clusters in Delhi NCR.</p>
            </div>

            <div className="border-l-4 border-accent-sage pl-4">
              <span className="block text-3xl sm:text-4xl font-extrabold text-primary leading-none">180+</span>
              <span className="text-xs font-bold uppercase tracking-wider text-text-muted block mt-2">Active Field Mentors</span>
              <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">College scholars, educators, doctors & professionals.</p>
            </div>

            <div className="border-l-4 border-accent-sage pl-4">
              <span className="block text-3xl sm:text-4xl font-extrabold text-primary leading-none">100%</span>
              <span className="text-xs font-bold uppercase tracking-wider text-text-muted block mt-2">Direct Fund Allocation</span>
              <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">Admin costs sponsored separately by trustees.</p>
            </div>

            <div className="border-l-4 border-accent-sage pl-4">
              <span className="block text-3xl sm:text-4xl font-extrabold text-primary leading-none">80G</span>
              <span className="text-xs font-bold uppercase tracking-wider text-text-muted block mt-2">Tax Exemption Certified</span>
              <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">Immediate receipt with government IT-UIN verification.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
