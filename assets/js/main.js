/**
 * RightPath NGO - Interactive Dynamic Features & Animation Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  initHopeParticles();
  initRotatingHeadline();
  initHeroTiltCard();
  initHeroVisualSwitcher();
  initHeroGivingPills();
  initAnimatedCounters();
  initImpactCalculator();
  initInitiativeFilters();
  initMobileNav();
  initDonationSystem();
  initImageFallbacks();
});

function initImageFallbacks() {
  document.querySelectorAll('img').forEach((img) => {
    img.addEventListener('error', function() {
      if (!this.getAttribute('data-failed')) {
        this.setAttribute('data-failed', 'true');
        this.src = 'assets/images/rightpath_logo.png';
      }
    });
  });
}

/* ==========================================================================
   1. Interactive Hope Particles Canvas (Dynamic Organic Motion)
   ========================================================================== */
function initHopeParticles() {
  const canvas = document.getElementById('hero-particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  let mouse = { x: -1000, y: -1000, radius: 120 };
  let animId = null;
  let isVisible = true;

  function resize() {
    width = canvas.width = Math.max(canvas.parentElement ? canvas.parentElement.offsetWidth : window.innerWidth, 320);
    height = canvas.height = Math.max(canvas.parentElement ? canvas.parentElement.offsetHeight : 600, 400);
    createParticles();
  }

  function createParticles() {
    particles = [];
    const isMobile = width < 768;
    const count = isMobile ? 18 : 32;
    const colors = [
      'rgba(183, 217, 167, 0.65)', // Sprout
      'rgba(128, 185, 142, 0.6)',  // Sage
      'rgba(154, 233, 189, 0.55)', // Emerald light
      'rgba(245, 158, 11, 0.5)',   // Warm amber spark
      'rgba(255, 255, 255, 0.6)'   // White star
    ];

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        originX: Math.random() * width,
        originY: Math.random() * height,
        radius: Math.random() * 2.2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5 - 0.15, // gentle upward drift
        wave: Math.random() * Math.PI * 2,
        waveSpeed: Math.random() * 0.02 + 0.01
      });
    }
  }

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 150);
  }, { passive: true });

  const heroSection = document.getElementById('hero-section');
  if (heroSection) {
    heroSection.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    }, { passive: true });

    heroSection.addEventListener('mouseleave', () => {
      mouse.x = -1000;
      mouse.y = -1000;
    });

    // Pause canvas animation when hero is scrolled out of viewport
    if ('IntersectionObserver' in window) {
      const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          isVisible = entry.isIntersecting;
          if (isVisible && !animId) {
            animId = requestAnimationFrame(animate);
          } else if (!isVisible && animId) {
            cancelAnimationFrame(animId);
            animId = null;
          }
        });
      }, { threshold: 0.05 });
      heroObserver.observe(heroSection);
    }
  }

  // Handle tab visibility change
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      if (animId) {
        cancelAnimationFrame(animId);
        animId = null;
      }
    } else if (isVisible && !animId) {
      animId = requestAnimationFrame(animate);
    }
  });

  resize();

  function animate() {
    if (!isVisible) {
      animId = null;
      return;
    }
    ctx.clearRect(0, 0, width, height);

    const isMobile = width < 768;
    const maxDist = isMobile ? 55 : 80;

    // Draw and update particles
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.wave += p.waveSpeed;
      p.x += p.vx + Math.cos(p.wave) * 0.3;
      p.y += p.vy;

      // Wrap around bounds
      if (p.x < -10) p.x = width + 10;
      if (p.x > width + 10) p.x = -10;
      if (p.y < -10) p.y = height + 10;
      if (p.y > height + 10) p.y = -10;

      // Mouse repulsion/interaction
      const dx = mouse.x - p.x;
      const dy = mouse.y - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < mouse.radius) {
        const force = (1 - dist / mouse.radius) * 2.5;
        const angle = Math.atan2(dy, dx);
        p.x -= Math.cos(angle) * force;
        p.y -= Math.sin(angle) * force;
      }

      // Render particle (clean, high-performance alpha fill)
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();

      // Connect nearby particles
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const lineDist = Math.hypot(p.x - p2.x, p.y - p2.y);
        if (lineDist < maxDist) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(183, 217, 167, ${0.2 * (1 - lineDist / maxDist)})`;
          ctx.lineWidth = 0.65;
          ctx.stroke();
        }
      }
    }

    animId = requestAnimationFrame(animate);
  }

  animId = requestAnimationFrame(animate);
}

/* ==========================================================================
   2. Rotating Animated Headline
   ========================================================================== */
function initRotatingHeadline() {
  const items = document.querySelectorAll('.rotator-item');
  if (items.length <= 1) return;

  let currentIndex = 0;

  setInterval(() => {
    const current = items[currentIndex];
    current.classList.remove('active');
    current.classList.add('exit');

    setTimeout(() => {
      current.classList.remove('exit');
    }, 500);

    currentIndex = (currentIndex + 1) % items.length;
    const next = items[currentIndex];
    next.classList.add('active');
  }, 3200);
}

/* ==========================================================================
   3. Hero 3D Parallax Tilt Card
   ========================================================================== */
function initHeroTiltCard() {
  const container = document.getElementById('heroTiltContainer');
  const card = document.getElementById('heroTiltCard');
  if (!container || !card) return;

  // Only enable on desktop/mouse devices
  if (window.matchMedia('(hover: hover)').matches) {
    let ticking = false;
    container.addEventListener('mousemove', (e) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const rect = container.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;

          const rotateX = ((y - centerY) / centerY) * -12; // tilt angle
          const rotateY = ((x - centerX) / centerX) * 12;

          card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });

    container.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  }
}

/* ==========================================================================
   4. Hero Visual Spotlight Switcher (4 Focus Areas)
   ========================================================================== */
const heroSpotlights = [
  {
    title: 'Street School Centers (शिक्षा)',
    desc: 'Daily academic classes & digital labs across Delhi-NCR slums',
    icon: 'school',
    tag: 'Active Today: 8 Centers',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnmUnBsy4LK2JxTMZ_btgjtCcMGSO_nLDFZDcJZzX0REVJG5I08M82PDpXL_wv3bxHhT_V4xbJOlCkIUxFM8_hDlhSV45IgP0fEFBqrD47vUo7DL0lNGjTnCQK1l_6ECCJMbEAm8JZXvCLHT5P5Fm5PDKjbvntrz90I8rlaZ9Gpejj5e2aeQPj_90n92eYeR68CSCxDOUP-vBbf5y503AYkiL3NShHPulQ0FuiLaM'
  },
  {
    title: 'Poshan Mid-Day Meals (पोषण)',
    desc: 'Wholesome nutritious hot meals cooked fresh daily for growing children',
    icon: 'restaurant',
    tag: '45,000+ Meals Served',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXObVM1hJ_4mLledVWvVMwHMgsPnuirGwDeA-_VYb4cg85u7FEqBmkibF8vXJMQXgovucR9oRvSRZnUTHIwV41ROsuja9Z2ipWLA-Jz8Q8FgJzsR4-Sl83mOoA9xlHnACptIFusT4dhuHY43N0R-QPjAxZBgHaF9ZZaVMX_SKDNBnb-gIJ8jlBUge0_X7hII2TcDTWC1C8AcJZE48xrxws0TFBsUEcxjL_URbodUk'
  },
  {
    title: 'Arogya Seva Health Camps (स्वास्थ्य)',
    desc: 'Fortnightly free doctor consultations, medicines & adolescent hygiene kits',
    icon: 'medical_services',
    tag: '24 Camps Quarterly',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAODBNY1hNK-ngOgs12vdD_Uta5mtvuQr07pgMB7S1EXtOSBr_NheCgo_fN7WV8D89XN7vzXyaLmVoLIztgDPmM5Gr7INeNVJSuGoy5ybU98JtWfnvQPUAagtvqC4y23nLuYAkv37CyrfAwDkOBogCM6-H-IEe_St_L0oo9u6zjFimW18fRukI5NTWPxIZLdkMpo0yLCYIQn_YEaG6gwLoCnwCoTBrvqZEv1GnkGQE'
  },
  {
    title: 'Kaushal Vikas Women Tailoring (हुनर)',
    desc: 'Certified vocational stitching & IT skills empowering mothers to earn independently',
    icon: 'work',
    tag: '300+ Women Graduated',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrWLMz2kRyTIqpM4RPgAWKY6xnWuxaUuGr37btzyjO7rX1mPZxpwfPsS5T9qo8VUDIxRbgDqGRZDeAZjwAH2imEBYpbNRwsNjnVbqTBbHBNfih7ngohyjirHVn-PnJHnjCujQTfBZwgf3I9FoogZb5dykytiWkuwQsmiUtzJGAGBCcPfLf2HBlKrC3j0RPBmZ-wueiRXjzFoCf97Vo4FnbLBTTfsvvWQWN9KiCCy8'
  }
];

function initHeroVisualSwitcher() {
  const tabs = document.querySelectorAll('.hero-tab-btn');
  const imgEl = document.getElementById('heroSpotlightImage');
  const titleEl = document.getElementById('heroSpotlightTitle');
  const descEl = document.getElementById('heroSpotlightDesc');
  const tagEl = document.getElementById('heroSpotlightTag');
  const iconEl = document.getElementById('heroSpotlightIcon');

  if (!tabs.length || !imgEl) return;

  let currentIndex = 0;
  let autoplayTimer;

  function switchSpotlight(index) {
    currentIndex = index;
    const data = heroSpotlights[index];

    // Update tab active classes
    tabs.forEach((tab, i) => {
      if (i === index) {
        tab.className = 'hero-tab-btn px-3 py-1.5 rounded-lg text-xs font-bold bg-accent-sprout text-primary shadow-sm transition-all flex items-center gap-1.5';
      } else {
        tab.className = 'hero-tab-btn px-3 py-1.5 rounded-lg text-xs font-semibold text-[#b2d5bf] hover:text-white hover:bg-white/10 transition-all flex items-center gap-1.5';
      }
    });

    // Animate image fade
    imgEl.style.opacity = '0.3';
    setTimeout(() => {
      imgEl.src = data.img;
      imgEl.style.opacity = '1';
    }, 180);

    if (titleEl) titleEl.innerText = data.title;
    if (descEl) descEl.innerText = data.desc;
    if (tagEl) tagEl.innerText = data.tag;
    if (iconEl) iconEl.innerText = data.icon;
  }

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      clearInterval(autoplayTimer);
      const index = parseInt(tab.getAttribute('data-index') || '0');
      switchSpotlight(index);
      startAutoplay();
    });
  });

  function startAutoplay() {
    autoplayTimer = setInterval(() => {
      const nextIndex = (currentIndex + 1) % heroSpotlights.length;
      switchSpotlight(nextIndex);
    }, 5500);
  }

  startAutoplay();
}

/* ==========================================================================
   5. Hero Quick Giving Pills
   ========================================================================== */
function initHeroGivingPills() {
  const pills = document.querySelectorAll('.hero-giving-pill');
  const ctaBtn = document.getElementById('heroDynamicDonateBtn');
  const ctaText = document.getElementById('heroDynamicDonateBtnText');

  if (!pills.length || !ctaBtn) return;

  let selectedAmt = 1200;

  pills.forEach((pill) => {
    pill.addEventListener('click', (e) => {
      e.preventDefault();
      pills.forEach((p) => {
        p.classList.remove('bg-accent-sprout', 'text-primary', 'font-bold', 'ring-2', 'ring-white');
        p.classList.add('bg-white/10', 'text-[#d3e7da]');
      });

      pill.classList.remove('bg-white/10', 'text-[#d3e7da]');
      pill.classList.add('bg-accent-sprout', 'text-primary', 'font-bold', 'ring-2', 'ring-white');

      selectedAmt = parseInt(pill.getAttribute('data-amount') || '1200');
      const impactLabel = pill.getAttribute('data-impact') || 'Direct Child Care';

      if (ctaText) {
        ctaText.innerText = `Donate ₹${selectedAmt.toLocaleString('en-IN')} (${impactLabel})`;
      }
    });
  });

  ctaBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openDonationModal(selectedAmt);
  });
}

/* ==========================================================================
   6. Animated Count-Up Counters
   ========================================================================== */
function initAnimatedCounters() {
  const counterElements = document.querySelectorAll('.animate-counter');
  if (!counterElements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target') || '0');
        const prefix = el.getAttribute('data-prefix') || '';
        const suffix = el.getAttribute('data-suffix') || '';
        const duration = 1800;
        const startTime = performance.now();

        function update(now) {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // EaseOutQuart
          const ease = 1 - Math.pow(1 - progress, 4);
          const current = Math.floor(ease * target);
          el.innerText = prefix + current.toLocaleString('en-IN') + suffix;

          if (progress < 1) {
            requestAnimationFrame(update);
          } else {
            el.innerText = prefix + target.toLocaleString('en-IN') + suffix;
          }
        }

        requestAnimationFrame(update);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.25 });

  counterElements.forEach((el) => observer.observe(el));
}

/* ==========================================================================
   7. Interactive Impact Calculator
   ========================================================================== */
function initImpactCalculator() {
  const slider = document.getElementById('impactSlider');
  const amountDisplay = document.getElementById('calcAmountDisplay');
  const kidsCount = document.getElementById('calcKidsCount');
  const mealsCount = document.getElementById('calcMealsCount');
  const healthCount = document.getElementById('calcHealthCount');
  const taxSaved = document.getElementById('calcTaxSaved');
  const pledgeBtn = document.getElementById('calcPledgeBtn');

  if (!slider || !amountDisplay) return;

  function updateCalculations(val) {
    const amount = parseInt(val);
    amountDisplay.innerText = `₹${amount.toLocaleString('en-IN')}`;

    if (kidsCount) kidsCount.innerText = `${Math.max(1, Math.floor(amount / 500))} Children`;
    if (mealsCount) mealsCount.innerText = `${Math.floor(amount / 120)} Warm Meals`;
    if (healthCount) healthCount.innerText = `${Math.max(1, Math.floor(amount / 850))} Health Kits`;
    if (taxSaved) taxSaved.innerText = `₹${Math.round(amount * 0.5 * 0.3).toLocaleString('en-IN')}`;

    if (pledgeBtn) {
      pledgeBtn.innerText = `Pledge ₹${amount.toLocaleString('en-IN')} Now`;
    }
  }

  slider.addEventListener('input', (e) => {
    updateCalculations(e.target.value);
  });

  if (pledgeBtn) {
    pledgeBtn.addEventListener('click', () => {
      openDonationModal(parseInt(slider.value));
    });
  }
}

/* ==========================================================================
   8. Initiative Category Filtering
   ========================================================================== */
function initInitiativeFilters() {
  const filterBtns = document.querySelectorAll('.initiative-filter-btn');
  const cards = document.querySelectorAll('.initiative-card');

  if (!filterBtns.length || !cards.length) return;

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-filter') || 'all';

      filterBtns.forEach((b) => {
        b.className = 'initiative-filter-btn px-4 py-2 rounded-full text-xs sm:text-sm font-semibold text-text-muted hover:text-primary transition-all';
      });
      btn.className = 'initiative-filter-btn px-4 py-2 rounded-full text-xs sm:text-sm font-bold bg-primary text-white shadow-sm transition-all';

      cards.forEach((card) => {
        const cardCat = card.getAttribute('data-category');
        if (category === 'all' || cardCat === category) {
          card.style.display = 'flex';
          requestAnimationFrame(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          });
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(8px)';
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   9. Mobile Drawer Navigation
   ========================================================================== */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const closeBtn = document.getElementById('closeMobileMenu');
  const drawer = document.getElementById('mobileDrawer');
  const overlay = document.getElementById('mobileMenuOverlay');
  const links = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !drawer) return;

  function openMenu() {
    drawer.classList.remove('translate-x-full');
    overlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    drawer.classList.add('translate-x-full');
    overlay.classList.add('hidden');
    document.body.style.overflow = '';
  }

  toggleBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (overlay) overlay.addEventListener('click', closeMenu);

  links.forEach((link) => {
    link.addEventListener('click', closeMenu);
  });
}

/* ==========================================================================
   10. Comprehensive Donation System (Modal + In-Page Module)
   ========================================================================== */
let globalSelectedAmount = 1200;

function openDonationModal(presetAmount, presetCause) {
  const modal = document.getElementById('donationModal');
  if (!modal) return;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';

  if (presetAmount) {
    setModalAmount(presetAmount);
  }
  if (presetCause) {
    const select = document.getElementById('modalProgramSelect');
    if (select) {
      for (let i = 0; i < select.options.length; i++) {
        if (select.options[i].value.toLowerCase().includes(presetCause.toLowerCase()) ||
            select.options[i].text.toLowerCase().includes(presetCause.toLowerCase())) {
          select.selectedIndex = i;
          break;
        }
      }
    }
  }
}

function closeDonationModal() {
  const modal = document.getElementById('donationModal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

function setModalAmount(amount) {
  globalSelectedAmount = amount;
  const customInput = document.getElementById('modalCustomAmount');
  if (customInput) customInput.value = '';

  const buttons = document.querySelectorAll('.modal-amt-btn');
  buttons.forEach((btn) => {
    const text = btn.innerText.replace(/[^0-9]/g, '');
    const title = btn.querySelector('.amt-label');
    if (parseInt(text) === amount) {
      btn.className = 'modal-amt-btn py-2.5 px-2 rounded-lg border-2 border-primary bg-surface-mint text-center transition-all';
      if (title) title.className = 'amt-label block text-sm font-bold text-primary';
    } else {
      btn.className = 'modal-amt-btn py-2.5 px-2 rounded-lg border border-border-subtle text-center hover:border-primary transition-all bg-surface-pale';
      if (title) title.className = 'amt-label block text-sm font-bold text-on-surface';
    }
  });

  const submitBtnText = document.getElementById('modalSubmitBtnText');
  if (submitBtnText) {
    submitBtnText.innerText = `Proceed to Pay ₹${Number(amount).toLocaleString('en-IN')} (सुरक्षित भुगतान)`;
  }
}

function initDonationSystem() {
  // Wire preset buttons in In-Page Form
  window.setDonationAmount = function(amount) {
    globalSelectedAmount = amount;
    const custom = document.getElementById('customAmountInput');
    if (custom) custom.value = '';

    const buttons = document.querySelectorAll('.page-amt-btn');
    buttons.forEach((btn) => {
      const text = btn.innerText.replace(/[^0-9]/g, '');
      if (parseInt(text) === amount) {
        btn.className = 'page-amt-btn py-3 px-3 rounded-lg border-2 border-primary bg-surface-mint text-center font-bold text-primary transition-all shadow-sm';
      } else {
        btn.className = 'page-amt-btn py-3 px-3 rounded-lg border border-border-subtle text-center font-bold text-on-surface hover:border-primary transition-all bg-surface-pale';
      }
    });

    const pageSubmitBtnText = document.getElementById('donateBtnText');
    if (pageSubmitBtnText) {
      pageSubmitBtnText.innerText = `Proceed to Donate ₹${Number(amount).toLocaleString('en-IN')}`;
    }
  };

  // Preset Cause Trigger from Initiative cards
  window.selectCausePreset = function(causeName, amount) {
    openDonationModal(amount, causeName);
  };

  // Modal Amount helper
  window.setModalAmount = setModalAmount;
  window.openDonationModal = openDonationModal;
  window.closeDonationModal = closeDonationModal;

  // Custom input handlers
  const customModal = document.getElementById('modalCustomAmount');
  if (customModal) {
    customModal.addEventListener('input', (e) => {
      const val = parseInt(e.target.value);
      if (val && val > 0) {
        globalSelectedAmount = val;
        document.querySelectorAll('.modal-amt-btn').forEach((b) => {
          b.className = 'modal-amt-btn py-2.5 px-2 rounded-lg border border-border-subtle text-center hover:border-primary transition-all bg-surface-pale';
          const t = b.querySelector('.amt-label');
          if (t) t.className = 'amt-label block text-sm font-bold text-on-surface';
        });
        const submitBtnText = document.getElementById('modalSubmitBtnText');
        if (submitBtnText) {
          submitBtnText.innerText = `Proceed to Pay ₹${Number(val).toLocaleString('en-IN')} (सुरक्षित भुगतान)`;
        }
      }
    });
  }

  const customPage = document.getElementById('customAmountInput');
  if (customPage) {
    customPage.addEventListener('input', (e) => {
      const val = parseInt(e.target.value);
      if (val && val > 0) {
        globalSelectedAmount = val;
        document.querySelectorAll('.page-amt-btn').forEach((b) => {
          b.className = 'page-amt-btn py-3 px-3 rounded-lg border border-border-subtle text-center font-bold text-on-surface hover:border-primary transition-all bg-surface-pale';
        });
        const pageSubmitBtnText = document.getElementById('donateBtnText');
        if (pageSubmitBtnText) {
          pageSubmitBtnText.innerText = `Proceed to Donate ₹${Number(val).toLocaleString('en-IN')}`;
        }
      }
    });
  }

  // Modal frequency toggle
  window.setModalFrequency = function(freq) {
    const btnOneTime = document.getElementById('freqOneTime');
    const btnMonthly = document.getElementById('freqMonthly');
    if (!btnOneTime || !btnMonthly) return;

    if (freq === 'one-time') {
      btnOneTime.className = 'flex-1 py-1.5 text-center font-bold text-xs sm:text-sm rounded-md bg-white text-primary shadow-sm transition-all';
      btnMonthly.className = 'flex-1 py-1.5 text-center font-semibold text-xs sm:text-sm rounded-md text-text-muted hover:text-primary transition-all flex items-center justify-center gap-1';
    } else {
      btnMonthly.className = 'flex-1 py-1.5 text-center font-bold text-xs sm:text-sm rounded-md bg-white text-primary shadow-sm transition-all flex items-center justify-center gap-1';
      btnOneTime.className = 'flex-1 py-1.5 text-center font-semibold text-xs sm:text-sm rounded-md text-text-muted hover:text-primary transition-all';
    }
  };

  // Close modal bindings
  document.getElementById('closeModalBtn')?.addEventListener('click', closeDonationModal);
  document.getElementById('donationModal')?.addEventListener('click', function(e) {
    if (e.target === this) closeDonationModal();
  });
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDonationModal();
  });

  // Handle Form Submission with confetti celebration
  const modalForm = document.getElementById('popupDonationForm');
  if (modalForm) {
    modalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = document.getElementById('modalSubmitBtn');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="material-symbols-outlined animate-spin text-lg">sync</span> Verifying 80G Tax Deductible Gift...';

        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = '<span class="material-symbols-outlined text-lg">lock</span><span id="modalSubmitBtnText">Proceed to Pay</span>';
          closeDonationModal();
          triggerCelebrationSuccess(globalSelectedAmount);
        }, 1200);
      }
    });
  }

  const pageForm = document.getElementById('donationForm');
  if (pageForm) {
    pageForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = document.getElementById('donateSubmitBtn');
      const successDiv = document.getElementById('donationSuccessMessage');
      if (btn && successDiv) {
        btn.disabled = true;
        btn.classList.add('opacity-70');
        btn.innerText = 'Redirecting to Secure Gateway...';

        setTimeout(() => {
          btn.classList.add('hidden');
          successDiv.classList.remove('hidden');
          triggerCelebrationSuccess(globalSelectedAmount, false);
        }, 1000);
      }
    });
  }
}

/* ==========================================================================
   11. Confetti & Celebration Trigger
   ========================================================================== */
function triggerCelebrationSuccess(amount, showPopup = true) {
  // Create confetti burst
  const container = document.body;
  const colors = ['#005134', '#b7d9a7', '#f59e0b', '#176b48', '#80b98e', '#ffffff'];

  for (let i = 0; i < 60; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left = `${Math.random() * 100}vw`;
    piece.style.top = '0px';
    piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    piece.style.width = `${Math.random() * 8 + 6}px`;
    piece.style.height = `${Math.random() * 10 + 6}px`;
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;
    piece.style.animationDelay = `${Math.random() * 0.6}s`;
    container.appendChild(piece);

    setTimeout(() => {
      piece.remove();
    }, 4000);
  }

  if (showPopup) {
    // Show a sleek success toast
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-24 left-1/2 -translate-x-1/2 z-50 bg-[#153f30] text-white px-6 py-4 rounded-2xl shadow-2xl border border-accent-sprout/40 flex items-center gap-4 transition-all duration-300';
    toast.innerHTML = `
      <div class="w-10 h-10 rounded-full bg-accent-sprout/20 flex items-center justify-center text-accent-sprout flex-shrink-0">
        <span class="material-symbols-outlined text-2xl">celebration</span>
      </div>
      <div>
        <p class="font-bold text-sm text-accent-sprout">धन्यवाद! Contribution of ₹${Number(amount).toLocaleString('en-IN')} Received</p>
        <p class="text-xs text-[#b8dfc4]">Your 80G tax exemption receipt has been prepared and sent to your email.</p>
      </div>
    `;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translate(-50%, 20px)';
      setTimeout(() => toast.remove(), 400);
    }, 4500);
  }
}

/* ==========================================================================
   12. Volunteer Registration Modal System
   ========================================================================== */
function initVolunteerSystem() {
  window.openVolunteerModal = function() {
    const modal = document.getElementById('volunteerModal');
    if (modal) {
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  };

  window.closeVolunteerModal = function() {
    const modal = document.getElementById('volunteerModal');
    if (modal) {
      modal.classList.add('hidden');
      document.body.style.overflow = '';
    }
  };

  const form = document.getElementById('volunteerForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = document.getElementById('volunteerSubmitBtn');
      if (btn) {
        btn.disabled = true;
        btn.innerHTML = '<span class="material-symbols-outlined animate-spin text-sm">sync</span> Submitting Application...';
        setTimeout(() => {
          alert('धन्यवाद! Your volunteer application has been submitted. Our grassroots team will contact you via WhatsApp for your orientation session.');
          btn.disabled = false;
          btn.innerHTML = '<span>Submit Volunteer Application</span><span class="material-symbols-outlined text-sm">check</span>';
          form.reset();
          closeVolunteerModal();
        }, 900);
      }
    });
  }

  document.getElementById('closeVolunteerModalBtn')?.addEventListener('click', closeVolunteerModal);
  document.getElementById('volunteerModal')?.addEventListener('click', function(e) {
    if (e.target === this) closeVolunteerModal();
  });
}

/* ==========================================================================
   13. About Us & Founder Note Modal Controller
   ========================================================================== */
window.openAboutUsModal = function() {
  const modal = document.getElementById('aboutUsModal');
  if (modal) {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
};

window.closeAboutUsModal = function() {
  const modal = document.getElementById('aboutUsModal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
};

document.getElementById('closeAboutUsModalBtn')?.addEventListener('click', window.closeAboutUsModal);
document.getElementById('aboutUsModal')?.addEventListener('click', function(e) {
  if (e.target === this) window.closeAboutUsModal();
});
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    window.closeAboutUsModal?.();
  }
});
