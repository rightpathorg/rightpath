'use client';
import { useState } from 'react';

const programs = [
  {
    id: 1,
    title: '1. Shiksha Abhiyan (शिक्षा अभियान)',
    category: 'education',
    tag: 'Education',
    desc: 'Daily foundational literacy, numeracy, and digital labs targeting first-generation street learners in slum clusters.',
    target: 'Target: 5,000 Kids',
    achieved: '78%',
    pct: 78,
    amt: 500,
    btnLabel: 'Sponsor a Student (₹500/mo)',
    icon: 'favorite',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6y6wrEUvUzycGNHRGWgrGzx956jVNJhocB0Sh23L85wX_NnoGKxYl96dqgRZLfsZZ-BeOB5SxawqiojgnszMq_yrKv8UpcipaEusk2sYTBMUw6Jtz4LtlZQ5rYr3X99K5Ju0jmGP0iX3uSL2ZpheGq-R9OKfhUEwj9nmowdmwuRvaEQkn6gDNCxpOVYEhmtQE9NsGLO3q3SstMQI22pHpfxDslxwq_BW_5Pq-lAM'
  },
  {
    id: 2,
    title: '2. Poshan Sahayata (भोजन सहायता)',
    category: 'health-meals',
    tag: 'Nutrition',
    desc: 'Clean, balanced warm mid-day meals and vitamin supplements preventing child malnutrition and micro-deficiencies.',
    target: 'Target: 4,000 Meals',
    achieved: '92%',
    pct: 92,
    amt: 1200,
    btnLabel: 'Feed 10 Kids (₹1,200)',
    icon: 'restaurant',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXObVM1hJ_4mLledVWvVMwHMgsPnuirGwDeA-_VYb4cg85u7FEqBmkibF8vXJMQXgovucR9oRvSRZnUTHIwV41ROsuja9Z2ipWLA-Jz8Q8FgJzsR4-Sl83mOoA9xlHnACptIFusT4dhuHY43N0R-QPjAxZBgHaF9ZZaVMX_SKDNBnb-gIJ8jlBUge0_X7hII2TcDTWC1C8AcJZE48xrxws0TFBsUEcxjL_URbodUk'
  },
  {
    id: 3,
    title: '3. Arogya Seva (स्वास्थ्य सेवा)',
    category: 'health-meals',
    tag: 'Healthcare',
    desc: 'Fortnightly mobile health checks, routine immunization drives, and adolescent menstrual hygiene kit distribution.',
    target: 'Target: 24 Camps/Qtr',
    achieved: '65%',
    pct: 65,
    amt: 850,
    btnLabel: 'Medical Kit (₹850)',
    icon: 'medical_services',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAODBNY1hNK-ngOgs12vdD_Uta5mtvuQr07pgMB7S1EXtOSBr_NheCgo_fN7WV8D89XN7vzXyaLmVoLIztgDPmM5Gr7INeNVJSuGoy5ybU98JtWfnvQPUAagtvqC4y23nLuYAkv37CyrfAwDkOBogCM6-H-IEe_St_L0oo9u6zjFimW18fRukI5NTWPxIZLdkMpo0yLCYIQn_YEaG6gwLoCnwCoTBrvqZEv1GnkGQE'
  },
  {
    id: 4,
    title: '4. Kaushal Vikas (कौशल विकास)',
    category: 'livelihoods',
    tag: 'Livelihoods',
    desc: 'Vocational tailoring, basic IT courses, and handicraft artisan training enabling mothers to earn financial independence.',
    target: 'Target: 300 Graduates',
    achieved: '84%',
    pct: 84,
    amt: 3000,
    btnLabel: 'Empower a Woman (₹3,000)',
    icon: 'work',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrWLMz2kRyTIqpM4RPgAWKY6xnWuxaUuGr37btzyjO7rX1mPZxpwfPsS5T9qo8VUDIxRbgDqGRZDeAZjwAH2imEBYpbNRwsNjnVbqTBbHBNfih7ngohyjirHVn-PnJHnjCujQTfBZwgf3I9FoogZb5dykytiWkuwQsmiUtzJGAGBCcPfLf2HBlKrC3j0RPBmZ-wueiRXjzFoCf97Vo4FnbLBTTfsvvWQWN9KiCCy8'
  },
  {
    id: 5,
    title: '5. Vriddha Care (बुजुर्गों की सेवा)',
    category: 'livelihoods',
    tag: 'Elder Care',
    desc: 'Emotional companionship, free chronic medicine supplies, and assistive mobility equipment for abandoned senior citizens.',
    target: 'Target: 250 Elders',
    achieved: '70%',
    pct: 70,
    amt: 1500,
    btnLabel: 'Elder Medicine Pack (₹1,500)',
    icon: 'elderly',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDr6Im1Zk_n_y9kD9carjLtryUmvZPaGAhNsYRF2HZlmkV3_0_B6BsEqbCgPgdzwnkqI2Z8rHo4Na6aKwUtmy3p93hBL83ib1aW53_S-TmgvXp1sDL4SBnr0jnz1Hn_iiHzBaWghTqd9yWF5P9rTfwdNVce1qxwz_1wdvADS5wSYZ5wdOjmLIEhFBjHDhLeevKJs9yBu2IKvmvqLaa3-xqatjR4aoaRpnqxMgkzGuY'
  },
  {
    id: 6,
    title: '6. Harit Pahal (पर्यावरण व स्वच्छता)',
    category: 'livelihoods',
    tag: 'Environment',
    desc: 'Community tree plantations, localized waste segregation awareness, and water sanitation filters in dense bastis.',
    target: 'Target: 2,000 Saplings',
    achieved: '90%',
    pct: 90,
    amt: 600,
    btnLabel: 'Plant 5 Trees (₹600)',
    icon: 'nature',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAa1x5UGjmu7bv5R9-ML3R2CBMxVrWfPa5biaSLp-wzbCkBZ37D3c5VPWQvNMz2J-9paEGpcXQmknx0UWYuCukP3IvLP5sCoqiiDmhkG7og1mh2_zYHFmpDSEqOuQcyys_dkUUkl8VghbaQdl0HJhbz_jojJI4aDcHS54WMZvzrkjbT-QjScRtb5ezq3FcDsh6w8l3ArDrOtDk6ZL--ftjDe_z_4oU2aupRjxrKwEA'
  }
];

export default function Initiatives({ onOpenDonation }) {
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all' ? programs : programs.filter((p) => p.category === filter);

  return (
    <section id="initiatives" className="w-full py-16 lg:py-24 bg-surface-pale relative">
      <div className="max-w-[72rem] mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-surface-mint px-3 py-1 rounded-full text-primary mb-2">
              <span className="material-symbols-outlined text-sm">hub</span>
              <span className="text-xs font-bold uppercase tracking-wider">Ground Operations</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-on-surface tracking-tight">
              Our Core Initiatives & Action Pillars
            </h2>
            <p className="text-sm text-on-surface-variant max-w-xl mt-1">
              A comprehensive lifecycle approach addressing holistic growth from formative childhood education to elderly compassionate healthcare.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
            {[
              { id: 'all', label: 'All (6)' },
              { id: 'education', label: 'Education' },
              { id: 'health-meals', label: 'Nutrition & Health' },
              { id: 'livelihoods', label: 'Livelihoods & Care' }
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${filter === tab.id ? 'bg-primary text-white font-bold shadow-sm' : 'text-text-muted hover:text-primary'}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-2xl border border-border-subtle overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-300 group"
            >
              <div>
                <div className="relative h-48 bg-surface-mint overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { e.currentTarget.src = '/images/rightpath_logo.png'; }}
                  />
                  <span className="absolute top-3 left-3 bg-[#153f30] text-accent-sprout text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {item.tag}
                  </span>
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="text-base sm:text-lg font-bold text-on-surface">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">{item.desc}</p>
                  <div className="pt-2 space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-text-muted">{item.target}</span>
                      <span className="text-primary font-bold">{item.achieved} Achieved</span>
                    </div>
                    <div className="w-full h-2 bg-surface-mint rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full transition-all duration-500" style={{ width: `${item.pct}%` }} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-5 pt-0">
                <button
                  onClick={() => onOpenDonation(item.amt, item.title)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-surface-mint hover:bg-primary text-primary hover:text-white text-xs sm:text-sm font-bold py-2.5 rounded-xl transition-all"
                >
                  <span>{item.btnLabel}</span>
                  <span className="material-symbols-outlined text-sm">{item.icon}</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
