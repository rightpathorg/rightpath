'use client';
import { useState } from 'react';

export default function VolunteerSection({ onOpenDonation }) {
  const [selectedCause, setSelectedCause] = useState('General Corpus - Where Needed Most');
  const [amount, setAmount] = useState(1200);
  const [customAmount, setCustomAmount] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  return (
    <section id="donate" className="w-full py-16 lg:py-24 bg-surface relative overflow-hidden section-ambient-glow">
      {/* Background Ambient Glowing Gradient Orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-[50rem] h-[30rem] rounded-full opacity-40 blur-[110px]"
          style={{
            background: 'radial-gradient(circle, rgba(183, 217, 167, 0.5) 0%, rgba(16, 185, 129, 0.25) 50%, transparent 70%)',
          }}
        />
        <div
          className="absolute -bottom-20 right-10 w-[35rem] h-[35rem] rounded-full opacity-35 blur-[120px]"
          style={{
            background: 'radial-gradient(circle, rgba(251, 191, 36, 0.35) 0%, rgba(0, 81, 52, 0.2) 55%, transparent 75%)',
          }}
        />
      </div>

      <div className="max-w-[72rem] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: In-Page Fast Giving Engine with Glowing Gradient Border */}
          <div className="lg:col-span-7 relative">
            <div className="donation-ambient-halo" aria-hidden="true" />
            <div className="donation-glow-wrapper">
              <div className="bg-white p-6 sm:p-8 rounded-[1.65rem]">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-border-subtle">
                  <div>
                    <span className="inline-flex items-center gap-1.5 text-xs uppercase font-extrabold tracking-wider text-primary">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      Direct Fast Giving
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-on-surface">Support a Child’s Journey</h3>
                  </div>
                  <div className="flex items-center gap-1.5 text-primary bg-surface-mint px-3 py-1.5 rounded-xl text-xs font-bold border border-primary/20 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                    <span className="material-symbols-outlined text-sm">lock</span>
                    <span>256-Bit SSL</span>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-on-surface mb-1">Select Program</label>
                    <select
                      value={selectedCause}
                      onChange={(e) => setSelectedCause(e.target.value)}
                      className="w-full bg-surface-pale border border-border-subtle rounded-xl px-4 py-2.5 text-sm text-on-surface focus:outline-none focus:border-primary font-medium"
                    >
                      <option value="Shiksha Abhiyan - Child Education">Shiksha Abhiyan (Child Education & Digital Lab)</option>
                      <option value="Poshan & Bhojan Sahayata">Poshan Sahayata (Nutritious Hot Meals)</option>
                      <option value="Arogya Swasthya Seva">Arogya Swasthya Seva (Medical & Clinics)</option>
                      <option value="Kaushal Vikas - Women Livelihoods">Kaushal Vikas (Women Skill Centers)</option>
                      <option value="General Corpus - Where Needed Most">General Corpus Fund (Where Most Urgently Needed)</option>
                    </select>
                  </div>

                  {/* Amount Preset Grid with Interactive Glow */}
                  <div>
                    <label className="block text-xs font-bold text-on-surface mb-1.5">Contribution Amount (INR)</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {[
                        { amt: 500, label: 'School Kit' },
                        { amt: 1200, label: '1 Mo Meals' },
                        { amt: 3000, label: 'Tailoring Kit' },
                        { amt: 5000, label: 'Semester' }
                      ].map((tier) => {
                        const isSelected = amount === tier.amt && !customAmount;
                        return (
                          <button
                            key={tier.amt}
                            type="button"
                            onClick={() => { setAmount(tier.amt); setCustomAmount(''); }}
                            className={`donation-preset-btn py-3 px-3 rounded-xl text-center font-bold border ${isSelected ? 'selected' : 'border-border-subtle text-on-surface bg-surface-pale hover:border-primary/50'}`}
                          >
                            ₹{tier.amt.toLocaleString('en-IN')}
                            <span className="block text-[10px] text-text-muted font-normal mt-0.5 tier-label">{tier.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Custom Amount & PAN */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-on-surface mb-1">Custom Amount (₹)</label>
                      <input
                        type="number"
                        min="100"
                        placeholder="Other amount"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          if (e.target.value) setAmount(Number(e.target.value));
                        }}
                        className="w-full bg-surface-pale border border-border-subtle rounded-xl px-4 py-2.5 text-sm text-on-surface focus:outline-none focus:border-primary font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-on-surface mb-1">PAN Number (for 80G Receipt)</label>
                      <input
                        type="text"
                        placeholder="ABCDE1234F"
                        className="w-full bg-surface-pale border border-border-subtle rounded-xl px-4 py-2.5 text-sm uppercase text-on-surface focus:outline-none focus:border-primary font-medium"
                      />
                    </div>
                  </div>

                  {/* Trust Notice */}
                  <div className="p-3 bg-surface-pale rounded-xl flex items-center justify-between text-xs text-text-muted border border-border-subtle">
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-sm text-primary">verified_user</span>
                      <span>UPI • GPay • Cards • NetBanking</span>
                    </span>
                    <span className="font-bold text-primary flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      Tax Exemption: Sec 80G
                    </span>
                  </div>

                  {!isSuccess ? (
                    <button
                      type="submit"
                      className="dynamic-light-btn w-full py-4 bg-gradient-to-r from-primary via-[#176b48] to-primary hover:from-[#153f30] hover:to-[#153f30] text-white font-bold text-base rounded-xl transition-all shadow-lg hover:shadow-primary/30 flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                    >
                      <span className="material-symbols-outlined animate-bounce">favorite</span>
                      <span>Proceed to Donate ₹{amount.toLocaleString('en-IN')}</span>
                    </button>
                  ) : (
                    <div className="p-4 bg-surface-mint text-primary rounded-xl text-center space-y-1 border border-primary/20">
                      <span className="material-symbols-outlined text-3xl">celebration</span>
                      <p className="font-bold text-base">धन्यवाद! Thank you for standing with our children.</p>
                      <p className="text-xs">Your tax-deductible 80G receipt will be dispatched within minutes of payment processing.</p>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>

          {/* Right: Direct Impact Assurance & Transparency */}
          <div className="lg:col-span-5 space-y-5">
            <div className="dynamic-spotlight-card bg-surface-pale p-6 sm:p-8 rounded-3xl border border-border-subtle relative overflow-hidden shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-container text-white flex items-center justify-center mb-4 shadow-md">
                <span className="material-symbols-outlined text-2xl">verified_user</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-on-surface mb-2">
                Direct Impact Guarantee (हमारा संकल्प)
              </h3>
              <p className="text-xs sm:text-sm text-on-surface-variant mb-4 leading-relaxed">
                Every rupee you contribute is deployed directly to classroom supplies, daily hot nutrition, and vital health services for street children.
              </p>
              <ul className="space-y-2.5 mb-6 text-xs sm:text-sm text-on-surface">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                  <span>Instant 80G Tax Exemption Certificate</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                  <span>Quarterly Audited Financial Reports Published Online</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                  <span>Direct Beneficiary Ground Progress Tracking</span>
                </li>
              </ul>
              <button
                type="button"
                onClick={() => onOpenDonation(1200)}
                className="dynamic-light-btn inline-flex items-center gap-2 bg-primary hover:bg-[#153f30] text-white font-bold text-sm px-6 py-3 rounded-xl transition-all shadow-md hover:shadow-primary/20"
              >
                <span>Sponsor a Child Now (सहयोग करें)</span>
                <span className="material-symbols-outlined text-sm">favorite</span>
              </button>
            </div>

            <div className="p-4 bg-surface-mint border border-primary/20 rounded-2xl flex items-start gap-3 shadow-sm">
              <span className="material-symbols-outlined text-primary text-xl mt-0.5">policy</span>
              <div>
                <p className="text-xs font-bold text-primary">100% Financial Accountability</p>
                <p className="text-[11px] text-on-surface-variant leading-relaxed">Registered Indian Non-Profit Trust. All accounts audited annually by independent chartered accountants.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
