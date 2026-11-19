/* =========================================================
   MoveWell Physio — script
   All content is dummy data. Edit prices and text below.
   ========================================================= */
(() => {
'use strict';

/* ---------- DATA ---------- */
const ICONS = {
  run: '<circle cx="15" cy="4" r="2"/><path d="M6 21l4-7 3 2 1 5M10 14l2-6 5 3 3-3M12 8l-4 1-2 3"/>',
  spine: '<path d="M12 2v20"/><rect x="8" y="4" width="8" height="3" rx="1.5"/><rect x="8" y="10" width="8" height="3" rx="1.5"/><rect x="8" y="16" width="8" height="3" rx="1.5"/>',
  knee: '<path d="M9 2v7a3 3 0 0 0 6 0V2M9 22v-6a3 3 0 0 1 6 0v6"/><circle cx="12" cy="12" r="1.5"/>',
  needle: '<path d="M4 20L16 8M14 4l6 6M18 2l4 4M8 12l4 4"/>',
  hand: '<path d="M7 11V6a2 2 0 1 1 4 0v4M11 10V4a2 2 0 1 1 4 0v6M15 10V6a2 2 0 1 1 4 0v8a7 7 0 0 1-7 7h-1a6 6 0 0 1-5.2-3L3 13a2 2 0 0 1 3.4-2L7 12"/>',
  child: '<circle cx="12" cy="5" r="3"/><path d="M8 22v-6l-2-4 6-3 6 3-2 4v6"/>',
  brain: '<path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 6 1V5a2 2 0 0 0-3-1ZM15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-6 1"/>',
  heart: '<path d="M12 21s-8-5-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 6-8 11-8 11Z"/>',
  home: '<path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1Z"/>',
  video: '<rect x="2" y="6" width="14" height="12" rx="2"/><path d="M16 10l6-3v10l-6-3"/>',
  wave: '<path d="M2 12c2-4 4-4 6 0s4 4 6 0 4-4 6 0"/><path d="M2 18c2-4 4-4 6 0s4 4 6 0 4-4 6 0" opacity=".5"/>',
  desk: '<rect x="3" y="4" width="18" height="11" rx="2"/><path d="M8 21h8M12 15v6"/>',
  phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"/>'
};

const SERVICES = [
  { name: 'Sports Injury Rehab', cat: 'rehab', icon: 'run', badge: 'Popular', desc: 'Get back to training safely after sprains, strains and tears.', price: 85, mins: 45, helps: ['ACL', 'Hamstring', 'Runner’s knee'] },
  { name: 'Back & Neck Pain', cat: 'pain', icon: 'spine', badge: 'Most booked', desc: 'Relieve stiffness, sciatica and disc pain with targeted care.', price: 80, mins: 45, helps: ['Sciatica', 'Disc bulge', 'Posture'] },
  { name: 'Post-Surgery Rehab', cat: 'rehab', icon: 'knee', desc: 'Structured recovery after joint replacement or ligament repair.', price: 90, mins: 60, helps: ['Knee replacement', 'Hip replacement', 'Rotator cuff'] },
  { name: 'Dry Needling', cat: 'pain', icon: 'needle', desc: 'Release tight muscles and trigger points for fast pain relief.', price: 70, mins: 30, helps: ['Trigger points', 'Headaches', 'Muscle knots'] },
  { name: 'Manual Therapy', cat: 'pain', icon: 'hand', desc: 'Hands-on joint mobilisation and soft tissue release.', price: 75, mins: 45, helps: ['Stiff joints', 'Frozen shoulder', 'Tension'] },
  { name: 'Shockwave Therapy', cat: 'pain', icon: 'wave', desc: 'Non-invasive treatment for stubborn tendon and heel pain.', price: 95, mins: 20, helps: ['Plantar fasciitis', 'Tennis elbow', 'Tendinopathy'] },
  { name: 'Neuro Rehab', cat: 'special', icon: 'brain', desc: 'Improve balance, movement and independence after stroke or MS.', price: 100, mins: 60, helps: ['Stroke', 'Parkinson’s', 'Balance'] },
  { name: 'Pediatric Physio', cat: 'special', icon: 'child', desc: 'Gentle, playful therapy for growing bodies and milestones.', price: 85, mins: 45, helps: ['Development', 'Posture', 'Sports'] },
  { name: 'Women’s Health', cat: 'special', icon: 'heart', desc: 'Pelvic health, pregnancy and postnatal recovery support.', price: 95, mins: 60, helps: ['Pelvic floor', 'Pregnancy', 'Postnatal'] },
  { name: 'Home Visits', cat: 'remote', icon: 'home', desc: 'Full physiotherapy in the comfort of your home.', price: 120, mins: 60, helps: ['Elderly care', 'Post-surgery', 'Limited mobility'] },
  { name: 'Online Physio', cat: 'remote', icon: 'video', desc: 'Video assessment and guided exercise from anywhere.', price: 60, mins: 40, helps: ['Exercise plans', 'Follow-ups', 'Advice'] },
  { name: 'Ergonomic Assessment', cat: 'special', icon: 'desk', desc: 'Workstation setup review to prevent pain at work.', price: 110, mins: 60, helps: ['Desk setup', 'Neck strain', 'Wrist pain'] }
];

const AREAS = {
  neck: { label: 'Neck', intro: 'Stiffness, headaches and pain that spreads into the shoulders or arms.', list: ['Neck stiffness', 'Whiplash', 'Tension headaches', 'Pinched nerve', 'Text neck', 'Cervical disc pain'] },
  shoulder: { label: 'Shoulder', intro: 'Pain lifting your arm, reaching overhead or sleeping on your side.', list: ['Frozen shoulder', 'Rotator cuff tear', 'Impingement', 'Dislocation', 'Bursitis', 'Post-surgery'] },
  back: { label: 'Back', intro: 'Lower or upper back pain, from a sudden twinge to long-term aches.', list: ['Lower back pain', 'Sciatica', 'Disc bulge', 'Scoliosis', 'Muscle spasm', 'Postural pain'] },
  elbow: { label: 'Elbow & wrist', intro: 'Pain gripping, typing or lifting, often from repetitive strain.', list: ['Tennis elbow', 'Golfer’s elbow', 'Carpal tunnel', 'Wrist sprain', 'RSI', 'Fracture rehab'] },
  hip: { label: 'Hip', intro: 'Pain walking, climbing stairs or sitting for long periods.', list: ['Hip arthritis', 'Bursitis', 'Labral tear', 'Hip replacement', 'Groin strain', 'Piriformis syndrome'] },
  knee: { label: 'Knee', intro: 'Pain, swelling or instability during sport, stairs or squatting.', list: ['ACL injury', 'Meniscus tear', 'Runner’s knee', 'Knee arthritis', 'Patellar tendinitis', 'Knee replacement'] },
  ankle: { label: 'Ankle & foot', intro: 'Pain on standing, walking or running, including heel pain.', list: ['Ankle sprain', 'Plantar fasciitis', 'Achilles tendinitis', 'Shin splints', 'Flat feet', 'Fracture rehab'] }
};

// price multipliers per location
const LOC = { clinic: { mult: 1, label: 'In-clinic' }, home: { mult: 1.4, label: 'Home visit' }, online: { mult: .75, label: 'Online' } };
const PLANS = [
  { name: 'Initial Assessment', desc: 'Your first visit', base: 95, unit: '/session', perks: ['60-minute full assessment', 'Diagnosis and treatment', 'Personal recovery plan', 'Home exercise program'] },
  { name: 'Follow-up Session', desc: 'Ongoing treatment', base: 75, unit: '/session', perks: ['45-minute session', 'Hands-on therapy', 'Progress tracking', 'Exercise updates'] },
  { name: '6-Session Pack', desc: 'Best for most injuries', base: 399, was: 450, unit: '/pack', featured: true, perks: ['6 follow-up sessions', 'Save 11%', 'Priority booking', 'Free exercise app access', 'Valid for 3 months'] },
  { name: '10-Session Pack', desc: 'For longer recovery', base: 620, was: 750, unit: '/pack', perks: ['10 follow-up sessions', 'Save 17%', 'Priority booking', 'Free progress report', 'Valid for 6 months'] }
];

const TEAM = [
  { photo: '1612349317150-e413f6a5b16d', name: 'Dr. Daniel Reed', role: 'Clinical Director, DPT', exp: '16 years · Sports & spine', bg: '#DCEDE9', skin: '#E5C1A8', hair: '#2B2420', spec: ['Sports', 'Spine', 'Dry needling'] },
  { photo: '1666887360921-85952a86894f', name: 'Dr. Aisha Khan', role: 'Physiotherapist, DPT', exp: '10 years · Women’s health', bg: '#FDE3D8', skin: '#C99779', hair: '#1D1715', spec: ['Pelvic health', 'Pregnancy', 'Postnatal'] },
  { photo: '1666887360361-d4e8487f0026', name: 'Dr. Marco Silva', role: 'Physiotherapist, DPT', exp: '8 years · Post-surgery', bg: '#E4ECF7', skin: '#D9A88A', hair: '#4A3426', spec: ['Joint replacement', 'ACL', 'Shoulder'] },
  { photo: '1659353888906-adb3e0041693', name: 'Dr. Emma Clarke', role: 'Neuro Physiotherapist', exp: '12 years · Neuro rehab', bg: '#FFF1CC', skin: '#F0D2BF', hair: '#B8834F', spec: ['Stroke', 'Balance', 'Parkinson’s'] }
];

// NOTE: sample reviews for layout. Replace with real, verified patient reviews.
const REVIEWS = [
  { tag: 'Back pain', text: 'After months of lower back pain, I was walking pain-free in four weeks. The home exercises were simple and actually worked.', name: 'Patient name', meta: 'Office worker', bg: '#DCEDE9' },
  { tag: 'ACL rehab', text: 'They got me back on the football pitch after my ACL surgery. Every session had a clear goal and I always knew my progress.', name: 'Patient name', meta: 'Amateur footballer', bg: '#FDE3D8' },
  { tag: 'Home visit', text: 'The home visits after my mum’s hip replacement were a lifesaver. Kind, patient and very professional.', name: 'Patient name', meta: 'Family member', bg: '#E4ECF7' },
  { tag: 'Neck pain', text: 'Dry needling plus posture work fixed headaches I had for years. I wish I had come sooner.', name: 'Patient name', meta: 'Graphic designer', bg: '#FFF1CC' },
  { tag: 'Online', text: 'The online sessions fit around my schedule perfectly. The exercise videos made it easy to stay on track.', name: 'Patient name', meta: 'New mum', bg: '#DCEDE9' }
];

const FAQS = [
  { q: 'Do I need a doctor’s referral?', a: 'No. You can book directly with us. Some insurance plans need a referral for reimbursement, so check your policy or ask our team to check for you.' },
  { q: 'What happens at my first appointment?', a: 'Your physio will ask about your history, assess your movement, strength and posture, explain what is causing your pain and start treatment the same day. You will leave with a clear plan and home exercises.' },
  { q: 'How many sessions will I need?', a: 'It depends on your condition and goals. Many patients feel a clear improvement within 3 to 6 sessions. Your physio will give you an estimate after the first visit.' },
  { q: 'What should I wear?', a: 'Comfortable, loose clothing that lets us see and move the area being treated, for example shorts for knee problems or a vest top for shoulders.' },
  { q: 'Do you accept insurance?', a: 'Yes. We bill most major insurers directly and provide superbills for out-of-network claims. HSA and FSA cards are also accepted.' },
  { q: 'Do you offer home visits and online sessions?', a: 'Yes. Home visits are available within 15 miles of the clinic, and online sessions work well for follow-ups, exercise guidance and advice.' },
  { q: 'What is your cancellation policy?', a: 'Please give at least 24 hours notice to cancel or reschedule. Late cancellations may be charged at 50% of the session fee.' }
];

const SLOTS = ['7:00 AM','8:00 AM','9:00 AM','10:00 AM','11:00 AM','12:00 PM','1:00 PM','2:00 PM','3:00 PM','4:00 PM','5:00 PM','6:00 PM','7:00 PM'];

/* ---------- HELPERS ---------- */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const icon = (n) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[n]}</svg>`;
const esc = (s) => String(s).replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
const usd = (n) => '$' + Math.round(n).toLocaleString('en-US');
const toast = (() => { const el = $('#toast'); let t; return (m) => { el.textContent = m; el.classList.add('show'); clearTimeout(t); t = setTimeout(() => el.classList.remove('show'), 2600); }; })();

/* ---------- SERVICES ---------- */
const sgrid = $('#sgrid');
sgrid.innerHTML = SERVICES.map(s => `
  <article class="scard reveal" data-cat="${s.cat}" tabindex="0" aria-label="${esc(s.name)}, ${usd(s.price)} per session">
    ${s.badge ? `<span class="scard__badge">${s.badge}</span>` : ''}
    <span class="scard__ic">${icon(s.icon)}</span>
    <h3>${s.name}</h3>
    <p class="scard__desc">${s.desc}</p>
    <p class="scard__from">From <strong>${usd(s.price)}</strong> / session</p>
    <div class="scard__more">
      <div class="scard__helps">${s.helps.map(h => `<span>${h}</span>`).join('')}</div>
      <div class="scard__row"><span><strong>${usd(s.price)}</strong> / session</span><span>${s.mins} min</span></div>
      <button type="button" class="btn btn--coral btn--block" data-book data-service="${esc(s.name)}">Book ${s.name}</button>
    </div>
  </article>`).join('');

$('#tabs').addEventListener('click', (e) => {
  const b = e.target.closest('[data-filter]'); if (!b) return;
  $$('#tabs [role=tab]').forEach(x => x.setAttribute('aria-selected', x === b));
  const f = b.dataset.filter;
  $$('.scard', sgrid).forEach(c => {
    const show = f === 'all' || c.dataset.cat === f;
    c.classList.toggle('hide', !show); c.classList.remove('enter');
    if (show) { void c.offsetWidth; c.classList.add('enter', 'in'); }
  });
});

/* ---------- BODY MAP ---------- */
const chips = $('#areaChips'), card = $('#areaCard');
chips.innerHTML = Object.entries(AREAS).map(([k, a]) => `<button type="button" role="tab" data-area="${k}" aria-selected="false">${a.label}</button>`).join('');
function showArea(key) {
  const a = AREAS[key];
  $$('.spot').forEach(s => s.classList.toggle('active', s.dataset.area === key));
  $$('button', chips).forEach(b => b.setAttribute('aria-selected', b.dataset.area === key));
  card.style.animation = 'none'; void card.offsetWidth; card.style.animation = '';
  card.innerHTML = `
    <h3>${a.label} pain</h3>
    <p>${a.intro}</p>
    <ul class="area__list">${a.list.map(i => `<li>${i}</li>`).join('')}</ul>
    <button type="button" class="btn btn--dark" data-book data-service="Initial Assessment" data-area="${a.label}">Book a ${a.label.toLowerCase()} assessment</button>`;
}
$('#body').addEventListener('click', (e) => { const s = e.target.closest('.spot'); if (s) showArea(s.dataset.area); });
chips.addEventListener('click', (e) => { const b = e.target.closest('[data-area]'); if (b) showArea(b.dataset.area); });
showArea('back');

/* ---------- PRICING ---------- */
const plansEl = $('#plans'); let loc = 'clinic';
function renderPlans() {
  const m = LOC[loc].mult;
  plansEl.innerHTML = PLANS.map(p => `
    <div class="plan ${p.featured ? 'plan--featured' : ''} reveal in">
      ${p.featured ? '<span class="plan__badge">Best value</span>' : ''}
      <h3>${p.name}</h3>
      <p class="plan__desc">${p.desc} · ${LOC[loc].label}</p>
      <p class="plan__price"><strong>${usd(p.base * m)}</strong><span>${p.unit}</span>${p.was ? `<s>${usd(p.was * m)} if booked separately</s>` : ''}</p>
      <ul>${p.perks.map(x => `<li>${x}</li>`).join('')}</ul>
      <button type="button" class="btn ${p.featured ? 'btn--coral' : 'btn--line'} btn--block" data-book data-service="${esc(p.name)}">Book ${p.name.includes('Pack') ? 'Pack' : 'Now'}</button>
    </div>`).join('');
}
renderPlans();
$$('.toggle button').forEach(b => b.addEventListener('click', () => {
  if (b.dataset.loc === loc) return;
  loc = b.dataset.loc;
  $$('.toggle button').forEach(x => { x.classList.toggle('active', x === b); x.setAttribute('aria-pressed', x === b); });
  $$('.plan', plansEl).forEach(p => p.classList.add('swap'));
  setTimeout(renderPlans, 180);
}));

/* ---------- TEAM ---------- */
$('#teamGrid').innerHTML = TEAM.map(t => `
  <article class="member reveal" tabindex="0">
    <div class="member__photo" style="background:${t.bg}" role="img" aria-label="Photo placeholder for ${esc(t.name)}">
      <svg viewBox="0 0 200 210" aria-hidden="true">
        <path d="M34 210c0-46 28-72 66-72s66 26 66 72Z" fill="#fff"/>
        <path d="M86 132h28v20H86Z" fill="${t.skin}"/>
        <path d="M100 28c-30 0-48 22-48 52 0 34 22 58 48 58s48-24 48-58c0-30-18-52-48-52Z" fill="${t.skin}"/>
        <path d="M52 78c-2-36 20-56 50-56 32 0 52 22 46 58-8-20-26-32-48-32-20 0-38 10-48 30Z" fill="${t.hair}"/>
        <circle cx="84" cy="86" r="3.5" fill="${t.hair}"/><circle cx="116" cy="86" r="3.5" fill="${t.hair}"/>
        <path d="M90 110q10 7 20 0" stroke="#9C5A4E" stroke-width="3" fill="none" stroke-linecap="round"/>
        <path d="M70 160l30 30 30-30" stroke="#138A8A" stroke-width="6" fill="none" stroke-linecap="round"/>
      </svg>
      ${t.photo ? `<img class="photo" src="https://images.unsplash.com/photo-${t.photo}?auto=format&fit=crop&q=80&w=600" alt="" loading="lazy" onerror="this.remove()">` : ''}
      <div class="member__spec">${t.spec.map(s => `<span>${s}</span>`).join('')}</div>
    </div>
    <div class="member__info"><h3>${t.name}</h3><p>${t.role}</p><small>${t.exp}</small></div>
  </article>`).join('');

/* ---------- REVIEWS ---------- */
const rt = $('#reviewsTrack');
rt.innerHTML = REVIEWS.map(r => `
  <figure class="rcard">
    <div class="rcard__top"><span class="stars" aria-label="5 out of 5 stars">★★★★★</span><span class="rcard__tag">${r.tag}</span></div>
    <blockquote>${r.text}</blockquote>
    <figcaption><span class="av" style="background:${r.bg}">${r.name[0]}</span><span><strong>${r.name}</strong><small>${r.meta}</small></span></figcaption>
  </figure>`).join('');
const step = () => rt.querySelector('.rcard').offsetWidth + 22;
$('#prev').addEventListener('click', () => rt.scrollBy({ left: -step() }));
$('#next').addEventListener('click', () => {
  const atEnd = rt.scrollLeft + rt.clientWidth >= rt.scrollWidth - 10;
  atEnd ? rt.scrollTo({ left: 0 }) : rt.scrollBy({ left: step() });
});

/* ---------- FAQ ---------- */
const faq = $('#faqList');
faq.innerHTML = FAQS.map((f, i) => `
  <div class="qa ${i === 0 ? 'open' : ''}">
    <button type="button" class="qa__q" id="q${i}" aria-expanded="${i === 0}" aria-controls="a${i}">${f.q}<span class="qa__icon" aria-hidden="true"></span></button>
    <div class="qa__a" id="a${i}" role="region" aria-labelledby="q${i}"><div><p>${f.a}</p></div></div>
  </div>`).join('');
faq.addEventListener('click', (e) => {
  const q = e.target.closest('.qa__q'); if (!q) return;
  const item = q.parentElement, open = !item.classList.contains('open');
  $$('.qa', faq).forEach(x => { x.classList.remove('open'); $('.qa__q', x).setAttribute('aria-expanded', 'false'); });
  item.classList.toggle('open', open); q.setAttribute('aria-expanded', open);
});

/* ---------- COUNTERS ---------- */
const counters = new IntersectionObserver((entries) => {
  entries.forEach(en => {
    if (!en.isIntersecting) return;
    const el = en.target, target = +el.dataset.count, dur = 1600, t0 = performance.now();
    const tick = (t) => { const p = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - p, 3); el.textContent = Math.round(target * e).toLocaleString('en-US'); if (p < 1) requestAnimationFrame(tick); };
    requestAnimationFrame(tick); counters.unobserve(el);
  });
}, { threshold: .5 });
$$('[data-count]').forEach(el => counters.observe(el));

/* ---------- OPEN NOW ---------- */
(() => {
  const d = new Date(), day = d.getDay(), h = d.getHours() + d.getMinutes() / 60;
  const open = (day >= 1 && day <= 5 && h >= 7 && h < 20) || (day === 6 && h >= 8 && h < 14);
  const el = $('#openNow'); el.textContent = open ? 'Open now' : 'Closed now'; el.className = 'open-now ' + (open ? 'is-open' : 'is-closed');
})();

/* ---------- NAV ---------- */
const nav = $('#nav'), burger = $('#burger'), menu = $('#menu');
function setMenu(open) {
  menu.classList.toggle('open', open); burger.classList.toggle('open', open);
  burger.setAttribute('aria-expanded', open); burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  document.body.classList.toggle('lock', open);
}
burger.addEventListener('click', () => setMenu(!menu.classList.contains('open')));
$$('a, button', menu).forEach(el => el.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && menu.classList.contains('open')) { setMenu(false); burger.focus(); } });
window.matchMedia('(min-width:1081px)').addEventListener('change', (m) => { if (m.matches) setMenu(false); });

const toTop = $('#toTop'), sticky = $('#stickyBar');
const onScroll = () => { const y = window.scrollY; nav.classList.toggle('scrolled', y > 8); toTop.classList.toggle('show', y > 700); sticky.classList.toggle('show', y > 500); };
window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

const links = $$('.menu > a');
const spy = new IntersectionObserver((entries) => {
  entries.forEach(en => { if (en.isIntersecting) links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + en.target.id)); });
}, { rootMargin: '-45% 0px -50% 0px' });
links.forEach(a => { const s = $(a.getAttribute('href')); if (s) spy.observe(s); });

/* ---------- REVEAL ---------- */
const io = new IntersectionObserver((entries) => {
  entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
}, { threshold: .12, rootMargin: '0px 0px -40px 0px' });
$$('.reveal').forEach(el => {
  const sibs = [...el.parentElement.children].filter(c => c.classList.contains('reveal'));
  el.style.transitionDelay = (Math.max(0, sibs.indexOf(el)) % 4) * .08 + 's';
  io.observe(el);
});

/* ---------- FORM VALIDATION ---------- */
function validate(scope) {
  let ok = true;
  $$('input[required], textarea[required], select[required]', scope).forEach(f => {
    const valid = f.type === 'checkbox' ? f.checked : f.type === 'email' ? /^\S+@\S+\.\S+$/.test(f.value) : f.value.trim() !== '';
    const l = f.closest('label'); l && l.classList.toggle('invalid', !valid);
    if (!valid && ok) { f.focus(); ok = false; }
  });
  return ok;
}
document.addEventListener('input', (e) => { const l = e.target.closest('label.invalid'); if (l) l.classList.remove('invalid'); });
document.addEventListener('change', (e) => { const l = e.target.closest('label.invalid'); if (l) l.classList.remove('invalid'); });

$('#contactForm').addEventListener('submit', (e) => {
  e.preventDefault(); if (!validate(e.target)) return;
  // TODO: POST to your CRM / GHL webhook
  $('.form__ok', e.target).hidden = false; e.target.reset();
});

/* ---------- MODAL HELPERS ---------- */
let lastFocus = null;
function openModal(m) { lastFocus = document.activeElement; m.hidden = false; document.body.classList.add('lock'); setTimeout(() => $('.modal__close', m).focus(), 60); }
function closeModal(m) { m.hidden = true; if (!menu.classList.contains('open')) document.body.classList.remove('lock'); lastFocus && lastFocus.focus(); }
$$('.modal').forEach(m => m.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') return closeModal(m);
  if (e.key !== 'Tab') return;
  const f = $$('button:not([hidden]):not(:disabled), input:not([type=radio]), input[type=radio]:checked, select, textarea', m).filter(el => el.offsetParent !== null);
  if (!f.length) return;
  const first = f[0], last = f[f.length - 1];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
}));

/* ---------- COVERAGE MODAL ---------- */
const coverModal = $('#coverModal'), coverForm = $('#coverForm');
$('#checkCover').addEventListener('click', () => { coverForm.reset(); $('.form__ok', coverForm).hidden = true; openModal(coverModal); });
coverForm.addEventListener('submit', (e) => {
  e.preventDefault(); if (!validate(coverForm)) return;
  // TODO: send coverage request to your billing team
  $('.form__ok', coverForm).hidden = false;
});

/* ---------- BOOKING ---------- */
const bookModal = $('#bookModal'), form = $('#bookForm');
const nextBtn = $('#nextBtn'), backBtn = $('#backBtn'), selText = $('#selText');
const state = { step: 1, service: '', physio: 'First available', date: null, time: '' };

const OPTIONS = [{ name: 'Free Phone Consult', icon: 'phone', sub: 'Free · 15 min' }, { name: 'Initial Assessment', icon: 'spine', sub: '$95 · 60 min' }, ...SERVICES.map(s => ({ name: s.name, icon: s.icon, sub: `${usd(s.price)} · ${s.mins} min` }))];
$('#chooseGrid').innerHTML = OPTIONS.map(o => `
  <label class="choice"><input type="radio" name="service" value="${esc(o.name)}">
    <span class="choice__ic">${icon(o.icon)}</span><span><strong>${o.name}</strong><small>${o.sub}</small></span></label>`).join('');
$('#chooseGrid').addEventListener('change', (e) => { state.service = e.target.value; $('#err1').hidden = true; updateSel(); });

$('#physioPick').innerHTML = [{ name: 'First available', bg: '#EAF3F1' }, ...TEAM].map((t, i) => `
  <label class="pick"><input type="radio" name="physio" value="${esc(t.name)}" ${i === 0 ? 'checked' : ''}>
    <span><i style="background:${t.bg}">${i === 0 ? '★' : t.name.split(' ')[1][0]}</i>${t.name}</span></label>`).join('');
$('#physioPick').addEventListener('change', (e) => { state.physio = e.target.value; renderTimes(); updateSel(); });

const datesEl = $('#dates'), timesEl = $('#times');
const days = Array.from({ length: 14 }, (_, i) => { const d = new Date(); d.setHours(0,0,0,0); d.setDate(d.getDate() + i); return d; });
datesEl.innerHTML = days.map((d, i) => `
  <button type="button" class="date" data-i="${i}" aria-pressed="false" ${d.getDay() === 0 ? 'disabled aria-label="Closed on Sunday"' : ''}>
    <small>${i === 0 ? 'Today' : d.toLocaleDateString('en-US', { weekday: 'short' })}</small><strong>${d.getDate()}</strong><span>${d.toLocaleDateString('en-US', { month: 'short' })}</span>
  </button>`).join('');
function renderTimes() {
  if (!state.date) { timesEl.innerHTML = '<p class="times__empty">Pick a date to see available times.</p>'; return; }
  const d = state.date, sat = d.getDay() === 6, today = d.toDateString() === new Date().toDateString();
  const now = new Date().getHours() + new Date().getMinutes() / 60;
  const seed = d.getDate() + state.physio.length; // demo: fake taken slots
  timesEl.innerHTML = SLOTS.map((t, i) => {
    const [hm, ap] = t.split(' '); let h = +hm.split(':')[0]; if (ap === 'PM' && h !== 12) h += 12;
    const outside = sat ? (h < 8 || h >= 14) : (h < 7 || h >= 20);
    const dis = outside || (today && h <= now + 1) || (i * 5 + seed) % 4 === 0;
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

const painRange = $('#painRange'), painOut = $('#painOut');
const painWord = (v) => v == 0 ? 'No pain' : v <= 3 ? 'Mild' : v <= 6 ? 'Moderate' : v <= 8 ? 'Severe' : 'Very severe';
painRange.addEventListener('input', () => { painOut.textContent = `${painRange.value} / 10 · ${painWord(+painRange.value)}`; });

const fmtDate = (d) => d ? d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }) : '';
function updateSel() { selText.textContent = [state.service, state.date && fmtDate(state.date), state.time].filter(Boolean).join(' · '); }

function showStep(n) {
  state.step = n;
  $$('.pane', form).forEach(p => p.classList.toggle('active', +p.dataset.step === n));
  $$('#stepper li').forEach((li, i) => { li.classList.toggle('active', i + 1 === n); li.classList.toggle('done', i + 1 < n); });
  $('#progressBar').style.width = (n * 25) + '%';
  backBtn.hidden = n === 1 || n === 4;
  nextBtn.textContent = n === 3 ? 'Confirm Booking' : n === 4 ? 'Done' : 'Continue';
  selText.hidden = n === 4;
}
nextBtn.addEventListener('click', () => {
  if (state.step === 1) { if (!state.service) { $('#err1').hidden = false; return; } renderTimes(); showStep(2); }
  else if (state.step === 2) { if (!state.date || !state.time) { $('#err2').hidden = false; return; } showStep(3); $('input[name=name]', form).focus(); }
  else if (state.step === 3) {
    if (!validate($('.pane[data-step="3"]', form))) return;
    const fd = Object.fromEntries(new FormData(form));
    const booking = { ...fd, service: state.service, physio: state.physio, date: fmtDate(state.date), time: state.time };
    // TODO: POST `booking` to your backend / GHL calendar / webhook here
    const row = (k, v) => v ? `<div><dt>${k}</dt><dd>${esc(v)}</dd></div>` : '';
    $('#summary').innerHTML = row('Service', booking.service) + row('Where', booking.location) + row('Physio', booking.physio) +
      row('Date', booking.date) + row('Time', booking.time) + row('Name', booking.name) + row('Pain level', `${booking.pain} / 10`);
    showStep(4); nextBtn.focus();
  } else closeModal(bookModal);
});
backBtn.addEventListener('click', () => showStep(state.step - 1));

function openBooking(service, area) {
  form.reset(); Object.assign(state, { step: 1, service: '', physio: 'First available', date: null, time: '' });
  $$('.date', datesEl).forEach(x => x.setAttribute('aria-pressed', 'false'));
  $$('.invalid', form).forEach(x => x.classList.remove('invalid'));
  $('#err1').hidden = $('#err2').hidden = true;
  painOut.textContent = '4 / 10 · Moderate';
  // preselect location from pricing toggle
  const locMap = { clinic: 'In-clinic', home: 'Home visit', online: 'Online' };
  const locInput = $$('input[name=location]', form).find(r => r.value === locMap[loc]); if (locInput) locInput.checked = true;
  if (service) {
    const r = $$('input[name=service]', form).find(x => x.value === service);
    if (r) r.checked = true; state.service = service;
  }
  if (area) { const sel = $('select[name=area]', form); const opt = [...sel.options].find(o => o.text.toLowerCase().startsWith(area.toLowerCase().split(' ')[0])); if (opt) sel.value = opt.value; }
  updateSel(); showStep(1);
  if (state.service) { renderTimes(); showStep(2); }
  openModal(bookModal);
}
document.addEventListener('click', (e) => {
  const b = e.target.closest('[data-book]');
  if (b) { e.preventDefault(); openBooking(b.dataset.service, b.dataset.area); return; }
  const c = e.target.closest('[data-close]');
  if (c) closeModal(c.closest('.modal'));
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
