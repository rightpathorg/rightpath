'use client';

const donors = [
  { name: 'Aarav S.', amount: '₹2,100', cause: 'Poshan Drive', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2NnH-OTYih1JSAsgDFOd8oXJjr2Lsq8V3ZmJRMXpUX38tBsN4-68MG6pPmE_OoRhyNGHPcF-9AIF08iIEtlYV8WW3cRqxaIQtH2TIhN7cSA43RGuKL1tysE_UsjTJdwaWa1rzjz0XnRnUagIRJKkWMVWwmd_0rgw5v8RDSMfKWjbql_j_xmUThaf4bCyJQ-ZsRSheQ-c9UTSETcJ1lnKXLBp0HwjCkg_w7uClxiU' },
  { name: 'Priya M.', amount: '₹5,000', cause: 'Shiksha Kit', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcnucTpy09VSCm-0vHxJ8tjj2d8Dgm1GyHMiZSBtXA7LSSrw_zI-w93sn8fw8VEH-2f4AklTAg7-Y3EoW8Imn_bOPhc4dFMv75q3cz7vOjeeLo1gJg3PDnXIOzK1GUxQrZtZBjZCybVNAO940K-i1kx9ZOAgjEQEuUHwCsd1zk8_hVXT4lkXliW-YDU36OySuPveTtN9xBTegfk9bGZ7KS2qPRfZ77gLpRtoct4lY' },
  { name: 'Rohan V.', amount: '₹1,200', cause: '1 Mo Meals', initials: 'RV' },
  { name: 'Kavita S.', amount: '₹10,000', cause: 'Child Sponsor', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAoi9xx1Qy7pK9RFCB26Wg4y8y4siEq4OYg_unxfGglaBIzBFY3gHyCIoQLGIDw7GbeoUPQmlDjrkfKqQXBG8zlW3KIZcVnZk5fIEr_4rag8r7HXX9VQnuVxH0ZWeGMkvdcS7sNADtylwBG9aU4Ga32xom3bqyB11dMQvbgyZmpegB505SaJblKNgzq5Ty_KclSNSNUYhvq85akxh0UP-oUUuzOT4OvLgyJWrE8n3g' },
  { name: 'Vikramaditya', amount: '₹3,500', cause: 'Medical Camp', initials: 'VA' },
  { name: 'Sneha G.', amount: '₹1,500', cause: 'Elder Care', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5AfSNN1cNK_EeJvUU5HBDgPGtKSlOjgKAe7X_Dpfo0yOmoFkuFjYPZ7oi8AkRRjvpM5aG5ImiGptmsiURyuybkJPIIh7P_k-hjLNMEW0m0sa_yQVLt4b3CeVGswRDmHXtcAXnPbViWRdwcKBJ2aXTrF0Kuktak5HRy8HptpUusljuhqtyvBBR2J9e-zOT_M2YhAkCSZcWyF2zFrUdQpKZwflabG7tT1n6ZhIIO_k' }
];

export default function LiveDonorReel({ onOpenDonation }) {
  const renderDonorList = (keyPrefix) => (
    <div className="flex items-center gap-5 pr-5 flex-shrink-0">
      {/* Donors Only */}
      {donors.map((d, idx) => (
        <div key={`${keyPrefix}-${idx}`} className="flex flex-col items-center flex-shrink-0 group cursor-pointer transition-all hover:scale-105">
          <div className="relative w-12 h-12 rounded-full p-[2px] bg-gradient-to-tr from-[#005134] via-[#80b98e] to-[#b7d9a7] flex items-center justify-center shadow-sm">
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-white bg-surface-mint flex items-center justify-center font-bold text-primary text-xs">
              {d.img ? (
                <img
                  src={d.img}
                  alt={d.name}
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.src = '/images/rightpath_logo.png'; }}
                />
              ) : (
                <span>{d.initials}</span>
              )}
            </div>
            <span className="absolute -bottom-1 bg-primary text-white font-bold text-[9px] px-1.5 py-0.2 rounded-full ring-2 ring-white shadow-sm">
              {d.amount}
            </span>
          </div>
          <span className="text-[11px] font-bold text-on-surface mt-1 truncate">{d.name}</span>
          <span className="text-[9px] text-text-muted truncate">{d.cause}</span>
        </div>
      ))}
    </div>
  );

  return (
    <section className="w-full bg-surface-container-lowest border-b border-border-subtle py-2.5 shadow-sm relative z-30 overflow-hidden">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between gap-3 mb-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 bg-red-50 text-red-600 px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <span>LIVE DONOR REEL</span>
            </span>
            <span className="hidden sm:inline-block text-border-subtle">|</span>
            <span className="hidden sm:inline-flex items-center gap-1 text-xs text-primary font-bold">
              <span className="material-symbols-outlined text-sm">verified</span>
              100% Tax Deductible (Sec 80G Certified)
            </span>
          </div>

          <div className="flex items-center gap-3">
            <p className="hidden sm:block text-xs text-text-muted">
              <strong className="text-primary font-bold">1,240+ Angels</strong> gave this month
            </p>
            <button onClick={() => onOpenDonation(1200)} className="text-xs text-primary hover:underline font-bold inline-flex items-center gap-0.5">
              <span>Join Reel</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>

      {/* Marquee Row with Static Left "+ Donate" and Scrolling Donors */}
      <div className="w-full flex items-center py-1.5 px-4 sm:px-8 lg:px-12 gap-3 sm:gap-4">
        {/* Static Fixed-Left Indicator (STAYS FIXED ON LEFT, DOES NOT SCROLL) */}
        <div className="flex-shrink-0 flex items-center pr-3 sm:pr-4 border-r border-border-subtle z-20 bg-surface-container-lowest">
          <button
            onClick={() => onOpenDonation(1200)}
            className="flex flex-col items-center flex-shrink-0 group cursor-pointer focus:outline-none"
          >
            <div className="relative w-12 h-12 rounded-full p-[2px] bg-gradient-to-tr from-primary to-accent-sprout flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-sm animate-pulse-ring">
              <div className="w-full h-full rounded-full bg-surface-mint flex items-center justify-center text-primary border-2 border-white group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-xl font-bold">add</span>
              </div>
              <span className="absolute -bottom-1 -right-0.5 w-4 h-4 rounded-full bg-primary text-white flex items-center justify-center text-[9px] ring-2 ring-white">
                <span className="material-symbols-outlined text-[10px]">favorite</span>
              </span>
            </div>
            <span className="text-[11px] font-bold text-primary mt-1 text-center truncate group-hover:underline">+ Donate</span>
          </button>
        </div>

        {/* Scrolling Donor Track (Donors Only) */}
        <div className="marquee-container relative flex-1 min-w-0 overflow-hidden">
          <div className="marquee-track flex items-center">
            {renderDonorList('pack1')}
            {renderDonorList('pack2')}
          </div>
        </div>
      </div>
    </section>
  );
}
