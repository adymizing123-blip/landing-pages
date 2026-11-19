/* =========================================================
   Lumen Med Spa — script
   All content below is dummy data. Edit prices/text here.
   ========================================================= */
(() => {
'use strict';

/* ---------- DATA ---------- */
const ICONS = {
  syringe: '<path d="M18 2l4 4M17 7l-9 9-4 1 1-4 9-9M14 4l6 6M7 13l4 4"/>',
  drop: '<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z"/>',
  lips: '<path d="M3 12c3-4 6-5 9-3 3-2 6-1 9 3-3 4-6 6-9 6s-6-2-9-6Z"/><path d="M3 12h18"/>',
  sparkle: '<path d="M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2Z"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2"/>',
  dots: '<circle cx="7" cy="7" r="1.5"/><circle cx="12" cy="7" r="1.5"/><circle cx="17" cy="7" r="1.5"/><circle cx="7" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="17" cy="12" r="1.5"/><circle cx="7" cy="17" r="1.5"/><circle cx="12" cy="17" r="1.5"/><circle cx="17" cy="17" r="1.5"/>',
  laser: '<path d="M4 20l8-8M14 10l6-6M15 3h6v6"/><circle cx="12" cy="12" r="2"/>',
  layers: '<path d="M12 3l9 5-9 5-9-5 9-5Z"/><path d="M3 13l9 5 9-5"/>',
  iv: '<path d="M8 3h8v7a4 4 0 0 1-8 0V3Z"/><path d="M12 14v4a3 3 0 0 0 3 3h2"/>',
  body: '<path d="M8 3c0 4 1 6 4 6s4-2 4-6M7 21c0-5 1-9 5-12 4 3 5 7 5 12"/>',
  leaf: '<path d="M12 21V9"/><path d="M12 13c-4 0-7-3-7-8 4 0 7 3 7 8Z"/><path d="M12 11c0-4 3-7 7-7 0 4-3 7-7 7Z"/>',
  consult: '<circle cx="11" cy="11" r="6"/><path d="M20 20l-4.5-4.5"/>'
};

const TREATMENTS = [
  { name: 'Botox / Dysport', cat: 'injectables', catLabel: 'Injectables', icon: 'syringe', badge: 'Most booked',
    desc: 'Soften forehead lines, frown lines and crow’s feet for a rested look.', from: '$12', unit: '/unit', time: '20 min', downtime: 'None', lasts: '3–4 mo' },
  { name: 'Dermal Fillers', cat: 'injectables', catLabel: 'Injectables', icon: 'drop',
    desc: 'Restore volume to cheeks, jawline and under-eyes with hyaluronic acid.', from: '$650', unit: '/syringe', time: '45 min', downtime: '1–2 days', lasts: '9–18 mo' },
  { name: 'Lip Filler', cat: 'injectables', catLabel: 'Injectables', icon: 'lips',
    desc: 'Subtle, balanced lip enhancement with natural shape and hydration.', from: '$550', unit: '/syringe', time: '30 min', downtime: '1–2 days', lasts: '6–12 mo' },
  { name: 'HydraFacial', cat: 'skin', catLabel: 'Skin & Facials', icon: 'sparkle', badge: 'Fan favourite',
    desc: 'Cleanse, extract and hydrate in one glow-boosting treatment.', from: '$199', unit: '', time: '45 min', downtime: 'None', lasts: '4 weeks' },
  { name: 'Chemical Peel', cat: 'skin', catLabel: 'Skin & Facials', icon: 'layers',
    desc: 'Smooth texture, fade dark spots and even out skin tone.', from: '$150', unit: '', time: '30 min', downtime: '3–5 days', lasts: 'Series' },
  { name: 'Microneedling', cat: 'skin', catLabel: 'Skin & Facials', icon: 'dots',
    desc: 'Boost collagen to improve acne scars, pores and fine lines.', from: '$350', unit: '', time: '60 min', downtime: '1–3 days', lasts: 'Series' },
  { name: 'Laser Hair Removal', cat: 'laser', catLabel: 'Laser', icon: 'laser',
    desc: 'Long-term hair reduction for face and body, safe for most skin types.', from: '$150', unit: '/session', time: '15–60 min', downtime: 'None', lasts: 'Long-term' },
  { name: 'IPL Photofacial', cat: 'laser', catLabel: 'Laser', icon: 'sun',
    desc: 'Target sun spots, redness and broken capillaries with light therapy.', from: '$300', unit: '', time: '30 min', downtime: '1–2 days', lasts: 'Series' },
  { name: 'RF Microneedling', cat: 'laser', catLabel: 'Laser', icon: 'layers',
    desc: 'Tighten skin and refine texture with radiofrequency energy.', from: '$800', unit: '', time: '60 min', downtime: '2–4 days', lasts: '12+ mo' },
  { name: 'IV Vitamin Therapy', cat: 'wellness', catLabel: 'Wellness & Body', icon: 'iv',
    desc: 'Hydration, energy and immunity drips tailored to your needs.', from: '$175', unit: '', time: '45 min', downtime: 'None', lasts: '1–2 weeks' },
  { name: 'Body Contouring', cat: 'wellness', catLabel: 'Wellness & Body', icon: 'body',
    desc: 'Non-surgical fat reduction for stubborn areas like abdomen and flanks.', from: '$400', unit: '/area', time: '45 min', downtime: 'None', lasts: 'Permanent*' },
  { name: 'PRP Facial', cat: 'wellness', catLabel: 'Wellness & Body', icon: 'leaf',
    desc: 'Use your own growth factors to renew skin and improve glow.', from: '$650', unit: '', time: '75 min', downtime: '1–3 days', lasts: 'Series' }
];

const PLANS = [
  { name: 'Essential', tag: 'For skin maintenance', monthly: 99, perks: ['1 signature facial each month', '10% off all injectables', '10% off skincare products', 'Rollover unused credits'] },
  { name: 'Signature', tag: 'Our most loved plan', monthly: 199, featured: true, perks: ['1 HydraFacial or peel each month', '15% off Botox and fillers', '20 units of Botox per quarter', 'Priority booking', 'Free birthday treatment'] },
  { name: 'Elite', tag: 'The full experience', monthly: 349, perks: ['Any 2 treatments each month', '20% off all services', 'Free quarterly IV therapy', 'VIP after-hours booking', 'Bring a friend, 1 free facial a year'] }
];

const TEAM = [
  { photo: '1659353888906-adb3e0041693', name: 'Dr. Sarah Mitchell', role: 'Medical Director, MD', bg: '#EADBE0', hair: '#3B2A35', skin: '#E2C6B8', tags: ['Injectables', 'PRP', '15 yrs'], bio: 'Board-certified physician leading every treatment plan.' },
  { photo: '1638202993928-7267aad84c31', name: 'Emily Carter', role: 'Nurse Practitioner, NP', bg: '#F3E8D7', hair: '#8A5A3C', skin: '#EBCDBE', tags: ['Botox', 'Fillers', '9 yrs'], bio: 'Known for subtle, natural-looking injectable results.' },
  { photo: '1624727828489-a1e03b79bba8', name: 'Jessica Lee', role: 'Registered Nurse, RN', bg: '#D9E2DA', hair: '#1F1A1D', skin: '#E8C9AE', tags: ['Laser', 'IV therapy', '7 yrs'], bio: 'Laser and wellness specialist with a gentle touch.' },
  { photo: '1785852790570-0d2858068c70', name: 'Olivia Brooks', role: 'Licensed Aesthetician', bg: '#E9DFD5', hair: '#B78A5B', skin: '#F0D5C6', tags: ['HydraFacial', 'Peels', '6 yrs'], bio: 'Skin health expert focused on long-term glow.' }
];

// NOTE: sample reviews for layout. Replace with real, verified reviews.
const REVIEWS = [
  { text: 'The most natural Botox I have ever had. Nobody can tell, they just say I look rested.', name: 'Client name', meta: 'Botox client', bg: '#EADBE0' },
  { text: 'From the consultation to aftercare, everything felt premium and personal. My skin has never looked better.', name: 'Client name', meta: 'Signature member', bg: '#F3E8D7' },
  { text: 'Laser hair removal changed my routine completely. Quick, comfortable and the team is so kind.', name: 'Client name', meta: 'Laser client', bg: '#D9E2DA' },
  { text: 'My lip filler is exactly what I asked for: subtle and balanced. I already booked my next HydraFacial.', name: 'Client name', meta: 'Lip filler client', bg: '#E9DFD5' }
];

const FAQS = [
  { q: 'Is the consultation really free?', a: 'Yes. Your first consultation is complimentary. We assess your skin, discuss your goals and build a treatment plan with clear pricing, with no pressure to book.' },
  { q: 'Who performs the treatments?', a: 'All injectables and medical treatments are performed by licensed providers (MD, NP or RN) under the supervision of our board-certified medical director.' },
  { q: 'Do treatments hurt?', a: 'Most clients describe treatments as mildly uncomfortable at most. We use numbing cream, cooling and fine needles to keep you comfortable throughout.' },
  { q: 'How long do results last?', a: 'It depends on the treatment. Botox typically lasts 3 to 4 months, fillers 9 to 18 months, and laser or microneedling results build over a series of sessions.' },
  { q: 'Is there any downtime?', a: 'Many treatments have little to no downtime. Some, like peels or microneedling, may cause redness for a few days. We share a full aftercare guide after every visit.' },
  { q: 'Do you offer financing?', a: 'Yes. We offer flexible monthly payment plans with 0% APR options for qualified clients, and accept HSA/FSA cards for eligible services.' },
  { q: 'What is your cancellation policy?', a: 'We ask for at least 24 hours notice to cancel or reschedule. Late cancellations or no-shows may incur a fee.' }
];

const SLOTS = ['9:00 AM','10:00 AM','11:00 AM','12:30 PM','1:30 PM','2:30 PM','3:30 PM','4:30 PM','5:30 PM','6:30 PM'];

/* ---------- HELPERS ---------- */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const svg = (name, extra = '') => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${extra}>${ICONS[name]}</svg>`;
const esc = (s) => String(s).replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
const money = (n) => '$' + n.toLocaleString('en-US');
const toast = (() => {
  const el = $('#toast'); let t;
  return (msg) => { el.textContent = msg; el.classList.add('show'); clearTimeout(t); t = setTimeout(() => el.classList.remove('show'), 2600); };
})();

/* ---------- RENDER: TREATMENTS ---------- */
const tgrid = $('#tgrid');
tgrid.innerHTML = TREATMENTS.map(t => `
  <article class="tcard reveal" data-cat="${t.cat}" tabindex="0" aria-label="${esc(t.name)}, from ${t.from}${t.unit}">
    ${t.badge ? `<span class="tcard__badge">${t.badge}</span>` : ''}
    <div class="tcard__top"><span class="tcard__ic">${svg(t.icon)}</span><span class="tcard__cat">${t.catLabel}</span></div>
    <h3>${t.name}</h3>
    <p class="tcard__desc">${t.desc}</p>
    <p class="tcard__price">From <strong>${t.from}</strong>${t.unit}</p>
    <div class="tcard__more">
      <p class="tcard__price-hover">${t.from}<small> ${t.unit ? t.unit.replace('/', 'per ') : 'per session'}</small></p>
      <div class="tcard__facts">
        <span>Session<strong>${t.time}</strong></span>
        <span>Downtime<strong>${t.downtime}</strong></span>
        <span>Lasts<strong>${t.lasts}</strong></span>
      </div>
      <button type="button" class="btn btn--gold btn--block" data-book data-treatment="${esc(t.name)}">Book ${t.name.split(' /')[0]}</button>
    </div>
  </article>`).join('');

/* Filter tabs */
$('#tabs').addEventListener('click', (e) => {
  const btn = e.target.closest('[data-filter]'); if (!btn) return;
  $$('#tabs [role=tab]').forEach(b => b.setAttribute('aria-selected', b === btn));
  const f = btn.dataset.filter;
  $$('.tcard', tgrid).forEach(card => {
    const show = f === 'all' || card.dataset.cat === f;
    card.classList.toggle('hide', !show);
    card.classList.remove('enter');
    if (show) { void card.offsetWidth; card.classList.add('enter', 'in'); }
  });
});

/* ---------- RENDER: PLANS ---------- */
const plansEl = $('#plans');
let billing = 'monthly';
function renderPlans() {
  plansEl.innerHTML = PLANS.map(p => {
    const price = billing === 'monthly' ? p.monthly : Math.round(p.monthly * 12 * 0.85);
    return `
    <div class="plan ${p.featured ? 'plan--featured' : ''} reveal in">
      ${p.featured ? '<span class="plan__badge">Most popular</span>' : ''}
      <h3>${p.name}</h3>
      <p class="plan__tag">${p.tag}</p>
      <p class="plan__price"><strong>${money(price)}</strong><span>/${billing === 'monthly' ? 'month' : 'year'}</span></p>
      <ul>${p.perks.map(x => `<li>${x}</li>`).join('')}</ul>
      <button type="button" class="btn ${p.featured ? 'btn--gold' : 'btn--line'} btn--block" data-book data-treatment="Membership: ${p.name}">Join ${p.name}</button>
    </div>`;
  }).join('');
}
renderPlans();
$$('.toggle button').forEach(b => b.addEventListener('click', () => {
  if (b.dataset.bill === billing) return;
  billing = b.dataset.bill;
  $$('.toggle button').forEach(x => { x.classList.toggle('active', x === b); x.setAttribute('aria-pressed', x === b); });
  $$('.plan__price', plansEl).forEach(el => el.classList.add('swap'));
  setTimeout(renderPlans, 180);
}));

/* ---------- RENDER: TEAM ---------- */
$('#teamGrid').innerHTML = TEAM.map(m => `
  <article class="member reveal" tabindex="0">
    <div class="member__photo" style="background:${m.bg}" role="img" aria-label="Photo placeholder for ${esc(m.name)}">
      <svg viewBox="0 0 200 220" aria-hidden="true">
        <path d="M40 220c0-44 26-70 60-70s60 26 60 70Z" fill="#FAF7F3"/>
        <path d="M100 30c-30 0-48 22-48 54 0 36 22 62 48 62s48-26 48-62c0-32-18-54-48-54Z" fill="${m.skin}"/>
        <path d="M52 86c-4-40 18-62 50-62 34 0 54 26 46 66-8-22-26-36-48-36-20 0-38 12-48 32Z" fill="${m.hair}"/>
        <path d="M86 92q6-4 12 0M106 92q6-4 12 0" stroke="${m.hair}" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        <path d="M92 120q8 6 16 0" stroke="#A86A72" stroke-width="3" fill="none" stroke-linecap="round"/>
      </svg>
      ${m.photo ? `<img class="photo" src="https://images.unsplash.com/photo-${m.photo}?auto=format&fit=crop&q=80&w=600" alt="" loading="lazy" onerror="this.remove()">` : ''}
      <div class="member__bio"><p>${m.bio}</p><ul>${m.tags.map(t => `<li>${t}</li>`).join('')}</ul></div>
    </div>
    <div class="member__info"><h3>${m.name}</h3><p>${m.role}</p></div>
  </article>`).join('');

/* ---------- RENDER: FAQ (accordion) ---------- */
$('#faqList').innerHTML = FAQS.map((f, i) => `
  <div class="qa ${i === 0 ? 'open' : ''}">
    <button type="button" class="qa__q" aria-expanded="${i === 0}" aria-controls="qa${i}" id="qaq${i}">${f.q}<span class="qa__icon" aria-hidden="true"></span></button>
    <div class="qa__a" id="qa${i}" role="region" aria-labelledby="qaq${i}"><div><p>${f.a}</p></div></div>
  </div>`).join('');
$('#faqList').addEventListener('click', (e) => {
  const q = e.target.closest('.qa__q'); if (!q) return;
  const item = q.parentElement, open = !item.classList.contains('open');
  $$('.qa', $('#faqList')).forEach(x => { x.classList.remove('open'); $('.qa__q', x).setAttribute('aria-expanded', 'false'); });
  item.classList.toggle('open', open); q.setAttribute('aria-expanded', open);
});

/* ---------- TESTIMONIAL SLIDER ---------- */
const track = $('#sliderTrack'), dots = $('#dots');
track.innerHTML = REVIEWS.map((r, i) => `
  <figure class="slide" role="group" aria-roledescription="slide" aria-label="${i + 1} of ${REVIEWS.length}">
    <blockquote>${r.text}</blockquote>
    <figcaption><span class="av" style="background:${r.bg}">${r.name[0]}</span><span><strong>${r.name}</strong><small><span class="stars">★★★★★</span> · ${r.meta}</small></span></figcaption>
  </figure>`).join('');
dots.innerHTML = REVIEWS.map((_, i) => `<button type="button" aria-label="Go to review ${i + 1}"></button>`).join('');
let slide = 0, auto;
const perView = () => (window.innerWidth > 900 ? 2 : 1);
function go(i) {
  const max = REVIEWS.length - perView();
  if (dots.children.length !== max + 1) dots.innerHTML = Array.from({ length: max + 1 }, (_, k) => `<button type="button" aria-label="Go to slide ${k + 1}"></button>`).join('');
  slide = i > max ? 0 : (i < 0 ? max : i);
  const s = track.children[slide];
  track.style.transform = `translateX(-${s ? s.offsetLeft : 0}px)`;
  $$('button', dots).forEach((d, k) => d.setAttribute('aria-current', k === slide));
}
function play() { clearInterval(auto); auto = setInterval(() => go(slide + 1), 4000); }
$('#prev').addEventListener('click', () => { go(slide - 1); play(); });
$('#next').addEventListener('click', () => { go(slide + 1); play(); });
dots.addEventListener('click', (e) => { const i = $$('button', dots).indexOf(e.target); if (i > -1) { go(i); play(); } });
const sliderEl = $('#slider');
sliderEl.addEventListener('mouseenter', () => clearInterval(auto));
sliderEl.addEventListener('mouseleave', play);
let sx = null; // swipe
sliderEl.addEventListener('touchstart', (e) => { sx = e.touches[0].clientX; clearInterval(auto); }, { passive: true });
sliderEl.addEventListener('touchend', (e) => {
  if (sx === null) return; const dx = e.changedTouches[0].clientX - sx;
  if (Math.abs(dx) > 40) go(slide + (dx < 0 ? 1 : -1)); sx = null; play();
});
window.addEventListener('resize', () => go(slide));
go(0); play();

/* ---------- BEFORE / AFTER ---------- */
const ba = $('#ba'), baRange = $('#baRange');
ba.dataset.case = '0';
baRange.addEventListener('input', () => ba.style.setProperty('--pos', baRange.value + '%'));
$('#resultTabs').addEventListener('click', (e) => {
  const b = e.target.closest('[data-case]'); if (!b) return;
  $$('#resultTabs [role=tab]').forEach(x => x.setAttribute('aria-selected', x === b));
  ba.dataset.case = b.dataset.case;
  baRange.value = 50; ba.style.setProperty('--pos', '50%');
});

/* ---------- COUNTDOWN (end of current month) ---------- */
(function countdown() {
  const now = new Date();
  const end = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);
  const els = { d: $('[data-cd=d]'), h: $('[data-cd=h]'), m: $('[data-cd=m]'), s: $('[data-cd=s]') };
  const pad = n => String(n).padStart(2, '0');
  function tick() {
    let diff = Math.max(0, end - new Date()) / 1000;
    els.d.textContent = pad(Math.floor(diff / 86400)); diff %= 86400;
    els.h.textContent = pad(Math.floor(diff / 3600)); diff %= 3600;
    els.m.textContent = pad(Math.floor(diff / 60));
    els.s.textContent = pad(Math.floor(diff % 60));
  }
  tick(); setInterval(tick, 1000);
})();

/* ---------- OPEN NOW BADGE ---------- */
(function openNow() {
  const el = $('#openNow'), d = new Date(), day = d.getDay(), h = d.getHours() + d.getMinutes() / 60;
  const open = (day >= 1 && day <= 5 && h >= 9 && h < 19) || (day === 6 && h >= 10 && h < 16);
  el.textContent = open ? 'Open now' : 'Closed now';
  el.className = 'open-now ' + (open ? 'is-open' : 'is-closed');
})();

/* ---------- NAV: burger, scroll state, active link ---------- */
const nav = $('#nav'), burger = $('#burger'), menu = $('#menu');
function setMenu(open) {
  menu.classList.toggle('open', open);
  burger.classList.toggle('open', open);
  burger.setAttribute('aria-expanded', open);
  burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  document.body.classList.toggle('lock', open);
}
burger.addEventListener('click', () => setMenu(!menu.classList.contains('open')));
$$('a, button', menu).forEach(el => el.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && menu.classList.contains('open')) { setMenu(false); burger.focus(); } });
window.matchMedia('(min-width:1081px)').addEventListener('change', (m) => { if (m.matches) setMenu(false); });

const toTop = $('#toTop'), sticky = $('#stickyBar');
const onScroll = () => {
  const y = window.scrollY;
  nav.classList.toggle('scrolled', y > 8);
  toTop.classList.toggle('show', y > 700);
  sticky.classList.toggle('show', y > 500);
};
window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

const links = $$('.menu > a');
const spy = new IntersectionObserver((entries) => {
  entries.forEach(en => {
    if (!en.isIntersecting) return;
    links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + en.target.id));
  });
}, { rootMargin: '-45% 0px -50% 0px' });
links.forEach(a => { const s = $(a.getAttribute('href')); if (s) spy.observe(s); });

/* ---------- SCROLL REVEAL ---------- */
const io = new IntersectionObserver((entries) => {
  entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
}, { threshold: .12, rootMargin: '0px 0px -40px 0px' });
$$('.reveal').forEach(el => {
  const sibs = [...el.parentElement.children].filter(c => c.classList.contains('reveal'));
  el.style.transitionDelay = (Math.max(0, sibs.indexOf(el)) % 4) * 0.08 + 's';
  io.observe(el);
});

/* ---------- FORMS: simple validation ---------- */
function validate(scope) {
  let ok = true;
  $$('input[required], textarea[required]', scope).forEach(f => {
    const wrap = f.closest('label');
    const valid = f.type === 'checkbox' ? f.checked : f.type === 'email' ? /^\S+@\S+\.\S+$/.test(f.value) : f.value.trim() !== '';
    wrap && wrap.classList.toggle('invalid', !valid);
    if (!valid && ok) { f.focus(); ok = false; }
  });
  return ok;
}
document.addEventListener('input', (e) => { const l = e.target.closest('label.invalid'); if (l) l.classList.remove('invalid'); });

$('#contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  if (!validate(e.target)) return;
  // TODO: POST to your CRM / GHL webhook here
  $('.form__ok', e.target).hidden = false;
  e.target.reset();
});
$('#newsForm').addEventListener('submit', (e) => {
  e.preventDefault();
  // TODO: send to your email marketing tool here
  $('.news__ok', e.target).hidden = false;
  e.target.reset();
});

/* ---------- BOOKING MODAL (4 steps) ---------- */
const modal = $('#modal'), form = $('#bookForm');
const nextBtn = $('#nextBtn'), backBtn = $('#backBtn'), selText = $('#selText');
const state = { step: 1, treatment: '', date: null, time: '' };
let lastFocus = null;

// Step 1 choices
const OPTIONS = [{ name: 'Free Consultation', icon: 'consult', from: 'Free' }, ...TREATMENTS.map(t => ({ name: t.name, icon: t.icon, from: 'From ' + t.from + t.unit }))];
$('#chooseGrid').innerHTML = OPTIONS.map((o, i) => `
  <label class="choice"><input type="radio" name="treatment" value="${esc(o.name)}" ${i === 0 ? '' : ''}>
    <span class="choice__ic">${svg(o.icon)}</span><span><strong>${o.name}</strong><small>${o.from}</small></span></label>`).join('');
$('#chooseGrid').addEventListener('change', (e) => { state.treatment = e.target.value; $('#err1').hidden = true; updateSel(); });

// Step 2 dates (next 14 days, Sundays closed)
const datesEl = $('#dates'), timesEl = $('#times');
const days = Array.from({ length: 14 }, (_, i) => { const d = new Date(); d.setHours(0,0,0,0); d.setDate(d.getDate() + i); return d; });
datesEl.innerHTML = days.map((d, i) => `
  <button type="button" class="date" data-i="${i}" aria-pressed="false" ${d.getDay() === 0 ? 'disabled aria-label="Closed"' : ''}>
    <small>${i === 0 ? 'Today' : d.toLocaleDateString('en-US', { weekday: 'short' })}</small>
    <strong>${d.getDate()}</strong><span>${d.toLocaleDateString('en-US', { month: 'short' })}</span>
  </button>`).join('');
function renderTimes() {
  if (!state.date) { timesEl.innerHTML = '<p class="times__empty">Pick a date to see available times.</p>'; return; }
  const d = state.date, isSat = d.getDay() === 6, isToday = d.toDateString() === new Date().toDateString();
  const nowH = new Date().getHours() + new Date().getMinutes() / 60;
  const seed = d.getDate(); // fake "booked" slots so it feels real
  timesEl.innerHTML = SLOTS.map((t, i) => {
    const [hm, ap] = t.split(' '); let [h, m] = hm.split(':').map(Number);
    if (ap === 'PM' && h !== 12) h += 12; const hh = h + m / 60;
    const outside = isSat ? (hh < 10 || hh >= 16) : (hh < 9 || hh >= 19);
    const past = isToday && hh <= nowH + 1;
    const taken = (i * 7 + seed) % 5 === 0;
    const dis = outside || past || taken;
    return `<button type="button" class="time" aria-pressed="${state.time === t}" ${dis ? 'disabled' : ''}>${t}</button>`;
  }).join('');
  if (!$$('.time:not(:disabled)', timesEl).length) timesEl.innerHTML = '<p class="times__empty">No times left on this day. Please choose another date.</p>';
}
datesEl.addEventListener('click', (e) => {
  const b = e.target.closest('.date'); if (!b || b.disabled) return;
  $$('.date', datesEl).forEach(x => x.setAttribute('aria-pressed', x === b));
  state.date = days[+b.dataset.i]; state.time = ''; renderTimes(); updateSel(); $('#err2').hidden = true;
});
timesEl.addEventListener('click', (e) => {
  const b = e.target.closest('.time'); if (!b || b.disabled) return;
  $$('.time', timesEl).forEach(x => x.setAttribute('aria-pressed', x === b));
  state.time = b.textContent; updateSel(); $('#err2').hidden = true;
});

function fmtDate(d) { return d ? d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }) : ''; }
function updateSel() {
  const parts = [state.treatment, state.date && fmtDate(state.date), state.time].filter(Boolean);
  selText.textContent = parts.join(' · ');
}

function showStep(n) {
  state.step = n;
  $$('.step-pane', form).forEach(p => p.classList.toggle('active', +p.dataset.step === n));
  $$('#stepper li').forEach((li, i) => { li.classList.toggle('active', i + 1 === n); li.classList.toggle('done', i + 1 < n); });
  backBtn.hidden = n === 1 || n === 4;
  nextBtn.textContent = n === 3 ? 'Confirm Booking' : n === 4 ? 'Done' : 'Continue';
  selText.hidden = n === 4;
  const pane = $(`.step-pane[data-step="${n}"]`, form); pane.scrollTop = 0;
}

nextBtn.addEventListener('click', () => {
  if (state.step === 1) { if (!state.treatment) { $('#err1').hidden = false; return; } renderTimes(); showStep(2); }
  else if (state.step === 2) { if (!state.date || !state.time) { $('#err2').hidden = false; return; } showStep(3); $('input[name=first]', form).focus(); }
  else if (state.step === 3) {
    if (!validate($('.step-pane[data-step="3"]', form))) return;
    const fd = new FormData(form);
    const booking = { ...Object.fromEntries(fd), date: fmtDate(state.date), time: state.time, treatment: state.treatment };
    // TODO: POST `booking` to your backend, GHL calendar API or webhook here
    $('#summary').innerHTML = `<dl style="margin:0;display:flex;flex-direction:column;gap:8px">
      <div><dt>Treatment</dt><dd>${esc(booking.treatment)}</dd></div>
      <div><dt>Date</dt><dd>${esc(booking.date)}</dd></div>
      <div><dt>Time</dt><dd>${esc(booking.time)}</dd></div>
      <div><dt>Name</dt><dd>${esc(booking.first)} ${esc(booking.last)}</dd></div>
      <div><dt>Client</dt><dd>${esc(booking.visit)}</dd></div></dl>`;
    showStep(4); nextBtn.focus();
  }
  else closeModal();
});
backBtn.addEventListener('click', () => showStep(state.step - 1));

function openModal(treatment) {
  lastFocus = document.activeElement;
  form.reset(); Object.assign(state, { step: 1, treatment: '', date: null, time: '' });
  $$('.date', datesEl).forEach(x => x.setAttribute('aria-pressed', 'false'));
  $$('.invalid', form).forEach(x => x.classList.remove('invalid'));
  $('#err1').hidden = $('#err2').hidden = true;
  if (treatment) {
    const match = $$('input[name=treatment]', form).find(r => r.value === treatment);
    if (match) { match.checked = true; state.treatment = treatment; }
    else { state.treatment = treatment; } // e.g. memberships
  }
  updateSel(); showStep(1);
  // skip to date step if a treatment was pre-selected from a card
  if (state.treatment) { renderTimes(); showStep(2); }
  modal.hidden = false; document.body.classList.add('lock');
  setTimeout(() => $('.modal__close', modal).focus(), 60);
}
function closeModal() {
  modal.hidden = true;
  if (!menu.classList.contains('open')) document.body.classList.remove('lock');
  lastFocus && lastFocus.focus();
}
document.addEventListener('click', (e) => {
  const b = e.target.closest('[data-book]');
  if (b) { e.preventDefault(); openModal(b.dataset.treatment); return; }
  if (e.target.closest('[data-close]')) closeModal();
});
modal.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') return closeModal();
  if (e.key !== 'Tab') return;
  const f = $$('button:not([hidden]):not(:disabled), input:not([type=radio]), input[type=radio]:checked, textarea, [tabindex="0"]', modal).filter(el => el.offsetParent !== null);
  if (!f.length) return;
  const first = f[0], last = f[f.length - 1];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
});

$('#year').textContent = new Date().getFullYear();
})();

/* Mobile menu: pin header, lock page scroll, restore position on close */
(() => {
  const m = document.getElementById('menu'), n = document.querySelector('.nav'), bt = document.getElementById('burger');
  if (!m || !n) return;
  let y = 0, was = false;
  const remember = () => { if (!m.classList.contains('open')) y = window.scrollY; };
  bt && bt.addEventListener('click', remember, true);
  bt && bt.addEventListener('touchstart', remember, { capture: true, passive: true });
  const sync = () => {
    const open = m.classList.contains('open');
    if (open === was) return;
    was = open;
    if (open) document.documentElement.style.setProperty('--mh', n.offsetHeight + 'px');
    document.documentElement.classList.toggle('menu-open', open);
    if (!open) {
      const h = document.documentElement;
      requestAnimationFrame(() => { const prev = h.style.scrollBehavior; h.style.scrollBehavior = 'auto'; window.scrollTo(0, y); h.style.scrollBehavior = prev; });
    }
  };
  new MutationObserver(sync).observe(m, { attributes: true, attributeFilter: ['class'] });
})();

/* Marquee: repeat logos so the strip never runs out on wide screens */
(() => {
  document.querySelectorAll('.marquee__track,.brands__track,.insure__track').forEach(track => {
    const box = track.parentElement;
    const base = [...track.children].filter(el => el.getAttribute('aria-hidden') !== 'true');
    if (!base.length) return;
    const build = () => {
      track.innerHTML = '';
      base.forEach(el => track.appendChild(el.cloneNode(true)));
      let guard = 0;
      while (track.scrollWidth < box.clientWidth + 200 && guard++ < 12) base.forEach(el => { const c = el.cloneNode(true); c.setAttribute('aria-hidden', 'true'); track.appendChild(c); });
      [...track.children].forEach(el => { const c = el.cloneNode(true); c.setAttribute('aria-hidden', 'true'); track.appendChild(c); });
      track.style.animationDuration = Math.max(20, Math.round(track.scrollWidth / 2 / 60)) + 's';
    };
    build();
    let t; window.addEventListener('resize', () => { clearTimeout(t); t = setTimeout(build, 250); });
  });
})();
