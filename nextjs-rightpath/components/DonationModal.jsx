'use client';
import { useState, useEffect } from 'react';

export default function DonationModal({ isOpen, onClose, defaultAmount = 1200, defaultCause = '' }) {
  const [frequency, setFrequency] = useState('one-time');
  const [amount, setAmount] = useState(defaultAmount);
  const [customAmount, setCustomAmount] = useState('');
  const [cause, setCause] = useState(defaultCause || 'General Corpus - Immediate Need');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (defaultAmount) setAmount(defaultAmount);
    if (defaultCause) setCause(defaultCause);
    setSubmitted(false);
  }, [defaultAmount, defaultCause, isOpen]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-start sm:justify-center p-2.5 sm:p-4 bg-black/75 backdrop-blur-md overflow-y-auto"
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-xl my-auto sm:my-8 max-h-[96vh] sm:max-h-[90vh] flex flex-col">
        <div className="donation-ambient-halo" aria-hidden="true" />
        <div className="donation-glow-wrapper flex flex-col max-h-full">
          <div className="bg-white rounded-[1.65rem] overflow-hidden shadow-2xl border border-border-subtle flex flex-col max-h-[94vh] sm:max-h-[85vh]">
            
            {/* Sticky Header with Always-Visible Close (X) Button */}
            <div className="sticky top-0 z-30 bg-primary text-white px-4 py-3 sm:px-6 sm:py-4 flex items-center justify-between shadow-md">
              <div className="pr-2">
                <div className="inline-flex items-center gap-1.5 bg-white/15 px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] text-accent-sprout uppercase tracking-wider font-bold mb-0.5">
                  <span className="material-symbols-outlined text-xs sm:text-sm">verified</span>
                  <span>100% Tax Deductible (Sec 80G)</span>
                </div>
                <h2 className="text-base sm:text-xl font-bold tracking-tight text-white leading-tight">
                  Make a Direct Impact <span className="text-accent-sprout font-normal font-serif hidden xs:inline">| एक नई पहचान</span>
                </h2>
                <p className="text-[11px] sm:text-xs text-[#b8dfc4] mt-0.5 hidden sm:block">
                  Every rupee directly sponsors learning materials, hot meals, and medical care.
                </p>
              </div>

              {/* Close Button - Always Accessible & Mobile Optimized */}
              <button
                type="button"
                onClick={onClose}
                aria-label="Close modal"
                className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-all flex-shrink-0 active:scale-90 focus:outline-none shadow-sm cursor-pointer"
              >
                <span className="material-symbols-outlined text-xl">close</span>
              </button>
            </div>

            {/* Scrollable Form Body */}
            <form onSubmit={handleSubmit} className="overflow-y-auto overscroll-contain flex-1 p-4 sm:p-6 space-y-3.5">
              {/* Frequency Toggle */}
              <div className="flex rounded-xl bg-surface-mint p-1 border border-border-subtle">
                <button
                  type="button"
                  className={`flex-1 py-2 text-center font-bold text-xs sm:text-sm rounded-lg transition-all ${frequency === 'one-time' ? 'bg-white text-primary shadow-sm' : 'text-text-muted hover:text-primary'}`}
                  onClick={() => setFrequency('one-time')}
                >
                  Give One-Time
                </button>
                <button
                  type="button"
                  className={`flex-1 py-2 text-center font-semibold text-xs sm:text-sm rounded-lg transition-all flex items-center justify-center gap-1 ${frequency === 'monthly' ? 'bg-white text-primary shadow-sm font-bold' : 'text-text-muted hover:text-primary'}`}
                  onClick={() => setFrequency('monthly')}
                >
                  <span>Monthly Hero</span>
                  <span className="material-symbols-outlined text-xs text-[#f59e0b]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                </button>
              </div>

              {/* Cause Selector */}
              <div>
                <label className="block text-xs font-bold text-on-surface mb-1">Choose Cause to Support</label>
                <select
                  value={cause}
                  onChange={(e) => setCause(e.target.value)}
                  className="w-full bg-surface-pale border border-border-subtle rounded-xl px-3 py-2 text-xs sm:text-sm text-on-surface focus:outline-none focus:border-primary font-medium"
                >
                  <option value="General Corpus - Immediate Need">General Corpus (Where Need is Most Urgent)</option>
                  <option value="Shiksha Abhiyan - Education">1. Shiksha Abhiyan (Child Education & Digital Labs)</option>
                  <option value="Poshan Sahayata - Meals">2. Poshan Sahayata (Nutritious Hot Mid-Day Meals)</option>
                  <option value="Arogya Swasthya Seva">3. Arogya Seva (Health Camps & Hygiene Kits)</option>
                  <option value="Kaushal Vikas - Women Livelihoods">4. Kaushal Vikas (Vocational Training for Mothers)</option>
                  <option value="Vriddha Care - Elders">5. Vriddha Care (Elderly Companionship & Medicines)</option>
                </select>
              </div>

              {/* Preset Amounts */}
              <div>
                <label className="block text-xs font-bold text-on-surface mb-1">Select Donation Tier</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { amt: 500, label: 'Stationery Kit' },
                    { amt: 1200, label: '1 Mo Meals' },
                    { amt: 3000, label: 'Vocational Kit' },
                    { amt: 5000, label: 'Semester' }
                  ].map((tier) => {
                    const isSelected = amount === tier.amt && !customAmount;
                    return (
                      <button
                        key={tier.amt}
                        type="button"
                        onClick={() => { setAmount(tier.amt); setCustomAmount(''); }}
                        className={`py-2 px-2 rounded-xl text-center transition-all ${isSelected ? 'border-2 border-primary bg-surface-mint text-primary font-bold shadow-sm' : 'border border-border-subtle hover:border-primary bg-surface-pale text-on-surface'}`}
                      >
                        <span className="block text-xs sm:text-sm font-bold">₹{tier.amt.toLocaleString('en-IN')}</span>
                        <span className="block text-[10px] text-text-muted">{tier.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Custom Amount */}
              <div className="relative">
                <span className="absolute left-3.5 top-2 text-text-muted font-bold text-xs sm:text-sm">₹</span>
                <input
                  type="number"
                  min="100"
                  placeholder="Enter custom amount (INR)"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    if (e.target.value) setAmount(Number(e.target.value));
                  }}
                  className="w-full bg-surface-pale border border-border-subtle rounded-xl pl-8 pr-3.5 py-2 text-xs sm:text-sm text-on-surface focus:outline-none focus:border-primary"
                />
              </div>

              {/* Donor Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                <div>
                  <label className="block text-xs font-bold text-on-surface mb-0.5">Full Name *</label>
                  <input type="text" required placeholder="e.g. Ananya Sen" className="w-full bg-surface-pale border border-border-subtle rounded-xl px-3 py-2 text-xs sm:text-sm text-on-surface focus:outline-none focus:border-primary" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-on-surface mb-0.5">Email Address *</label>
                  <input type="email" required placeholder="ananya@example.com" className="w-full bg-surface-pale border border-border-subtle rounded-xl px-3 py-2 text-xs sm:text-sm text-on-surface focus:outline-none focus:border-primary" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-on-surface mb-0.5">WhatsApp / Phone</label>
                  <input type="tel" placeholder="+91 98765 43210" className="w-full bg-surface-pale border border-border-subtle rounded-xl px-3 py-2 text-xs sm:text-sm text-on-surface focus:outline-none focus:border-primary" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-on-surface mb-0.5">PAN (For 80G Tax Receipt)</label>
                  <input type="text" placeholder="ABCDE1234F" className="w-full bg-surface-pale border border-border-subtle rounded-xl px-3 py-2 text-xs sm:text-sm text-on-surface uppercase focus:outline-none focus:border-primary" />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2 space-y-2">
                {!submitted ? (
                  <button
                    type="submit"
                    className="dynamic-light-btn w-full py-3.5 bg-gradient-to-r from-primary via-[#176b48] to-primary hover:from-[#153f30] hover:to-[#153f30] text-white font-bold text-sm sm:text-base rounded-xl transition-all shadow-lg hover:shadow-primary/30 flex items-center justify-center gap-2 transform active:scale-95 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-lg">lock</span>
                    <span>Proceed to Pay ₹{amount.toLocaleString('en-IN')} (सुरक्षित भुगतान)</span>
                  </button>
                ) : (
                  <div className="p-3 bg-surface-mint text-primary rounded-xl text-center text-sm font-bold flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined">check_circle</span>
                    <span>धन्यवाद! Receipt Prepared. Closing...</span>
                  </div>
                )}
                <div className="flex items-center justify-between text-text-muted text-[10px] sm:text-[11px] px-1">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs text-primary">verified_user</span>
                    <span>UPI • GPay • Cards • NetBanking</span>
                  </span>
                  <span className="text-primary font-semibold">256-Bit SSL Encrypted</span>
                </div>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}
