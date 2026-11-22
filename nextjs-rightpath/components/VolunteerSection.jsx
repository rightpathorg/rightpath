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
    <section id="donate" className="w-full py-16 lg:py-24 bg-surface">
      <div className="max-w-[72rem] mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: In-Page Fast Giving Engine */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-border-subtle shadow-md">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-border-subtle">
              <div>
                <span className="text-xs uppercase font-extrabold tracking-wider text-primary">Direct Fast Giving</span>
                <h3 className="text-xl sm:text-2xl font-bold text-on-surface">Support a Child’s Journey</h3>
              </div>
              <div className="flex items-center gap-1 text-primary bg-surface-mint px-2.5 py-1 rounded-lg text-xs font-bold">
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

              {/* Amount Preset Grid */}
              <div>
                <label className="block text-xs font-bold text-on-surface mb-1.5">Contribution Amount (INR)</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
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
                        className={`py-3 px-3 rounded-lg text-center font-bold transition-all ${isSelected ? 'border-2 border-primary bg-surface-mint text-primary shadow-sm' : 'border border-border-subtle text-on-surface hover:border-primary bg-surface-pale'}`}
                      >
                        ₹{tier.amt.toLocaleString('en-IN')}
                        <span className="block text-[10px] text-text-muted font-normal mt-0.5">{tier.label}</span>
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
                    className="w-full bg-surface-pale border border-border-subtle rounded-xl px-4 py-2.5 text-sm text-on-surface focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-on-surface mb-1">PAN Number (for 80G Receipt)</label>
                  <input
                    type="text"
                    placeholder="ABCDE1234F"
                    className="w-full bg-surface-pale border border-border-subtle rounded-xl px-4 py-2.5 text-sm uppercase text-on-surface focus:outline-none focus:border-primary"
                  />
                </div>
              </div>

              {/* Trust Notice */}
              <div className="p-3 bg-surface-pale rounded-xl flex items-center justify-between text-xs text-text-muted">
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm text-primary">verified_user</span>
                  <span>UPI • GPay • Cards • NetBanking</span>
                </span>
                <span className="font-bold text-primary">Tax Exemption: Sec 80G</span>
              </div>

              {!isSuccess ? (
                <button
                  type="submit"
                  className="w-full py-3.5 bg-primary hover:bg-[#153f30] text-white font-bold text-base rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined">favorite</span>
                  <span>Proceed to Donate ₹{amount.toLocaleString('en-IN')}</span>
                </button>
              ) : (
                <div className="p-4 bg-surface-mint text-primary rounded-xl text-center space-y-1">
                  <span className="material-symbols-outlined text-3xl">celebration</span>
                  <p className="font-bold text-base">धन्यवाद! Thank you for standing with our children.</p>
                  <p className="text-xs">Your tax-deductible 80G receipt will be dispatched within minutes of payment processing.</p>
                </div>
              )}
            </form>
          </div>

          {/* Right: Direct Impact Assurance & Transparency */}
          <div className="lg:col-span-5 space-y-5">
            <div className="bg-surface-pale p-6 sm:p-8 rounded-3xl border border-border-subtle relative overflow-hidden">
              <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center mb-4 shadow-sm">
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
                className="inline-flex items-center gap-2 bg-primary hover:bg-[#153f30] text-white font-bold text-sm px-6 py-3 rounded-xl transition-all shadow-sm"
              >
                <span>Sponsor a Child Now (सहयोग करें)</span>
                <span className="material-symbols-outlined text-sm">favorite</span>
              </button>
            </div>

            <div className="p-4 bg-surface-mint border border-primary/20 rounded-2xl flex items-start gap-3">
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
  );
}
