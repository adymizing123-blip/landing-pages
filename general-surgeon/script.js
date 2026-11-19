/* =========================================================
   SurgiCare General Surgery — script
   All content is dummy data. Edit prices and text below.
   Photos: free Unsplash images (unsplash.com/license).
   ========================================================= */
(() => {
'use strict';

const IMG = (id, w = 800) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=${w}`;
const photo = (id, alt = '', w) => id ? `<img class="photo" src="${IMG(id, w)}" alt="${alt}" loading="lazy" decoding="async" onerror="this.remove()">` : '';

/* ---------- DATA ---------- */
const ICONS = {
  scope: '<circle cx="12" cy="12" r="3"/><circle cx="5" cy="17" r="1.5"/><circle cx="19" cy="17" r="1.5"/><path d="M12 15v6M7 16l3-2M17 16l-3-2"/>',
  hernia: '<path d="M4 20c0-6 3-10 8-10s8 4 8 10"/><circle cx="12" cy="14" r="2.5"/>',
  gall: '<path d="M8 4c4 0 8 3 8 8a6 6 0 0 1-12 0c0-3 2-4 4-4"/><path d="M8 4v4"/>',
  appendix: '<path d="M6 4h8a4 4 0 0 1 0 8H9a3 3 0 0 0 0 6h2"/><path d="M11 18c1 2 3 3 4 2"/>',
  lump: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/>',
  piles: '<path d="M12 3v18M7 8l5 4 5-4M7 14l5 4 5-4"/>',
  thyroid: '<path d="M7 8c-2 2-2 8 1 10s4-2 4-5c0 3 1 7 4 5s3-8 1-10c-2-2-4 0-5 2-1-2-3-4-5-2Z"/>',
  breast: '<circle cx="12" cy="13" r="7"/><circle cx="12" cy="13" r="1.5"/>',
  vein: '<path d="M8 3c0 5 6 5 6 10s-6 5-6 8M16 3c0 3-3 4-3 6"/>',
  wound: '<rect x="4" y="9" width="16" height="6" rx="3"/><path d="M9 9v6M12 9v6M15 9v6"/>',
  camera: '<rect x="3" y="7" width="13" height="10" rx="2"/><path d="M16 11l5-3v8l-5-3"/>',
  colon: '<path d="M5 20V8a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-5"/>',
  steth: '<path d="M6 3v6a4 4 0 0 0 8 0V3"/><path d="M10 13v3a5 5 0 0 0 10 0v-2"/><circle cx="20" cy="12" r="2"/>',
  doc: '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  lang: '<path d="M4 5h8M8 3v2M6 5c0 4 3 7 6 8M10 5c0 3-3 7-6 8M13 21l4-10 4 10M14.5 17h5"/>',
  knife: '<path d="M8 26L22 6" transform="scale(.75)"/><path d="M16.5 4.5c2 1.5 2 4.5 0 6l-4.5.75" />'
};

const PROCEDURES = [
  { name: 'Hernia Repair', cat: 'abdomen', icon: 'hernia', tag: 'Keyhole', desc: 'Inguinal, umbilical and incisional hernia repair with mesh.', price: 4900, stay: 'Same day', recovery: '1–2 weeks' },
  { name: 'Gallbladder Removal', cat: 'abdomen', icon: 'gall', tag: 'Keyhole', desc: 'Laparoscopic cholecystectomy for gallstones and pain.', price: 7200, stay: 'Same day to 1 night', recovery: '1–2 weeks' },
  { name: 'Appendix Surgery', cat: 'abdomen', icon: 'appendix', tag: 'Keyhole', desc: 'Laparoscopic appendectomy for appendicitis.', price: 8500, stay: '1–2 nights', recovery: '2–3 weeks' },
  { name: 'Diagnostic Laparoscopy', cat: 'abdomen', icon: 'scope', tag: 'Keyhole', desc: 'Camera examination to find the cause of abdominal pain.', price: 3900, stay: 'Same day', recovery: '3–7 days' },
  { name: 'Hemorrhoid (Piles) Treatment', cat: 'colorectal', icon: 'piles', tag: 'Day case', desc: 'Banding, laser or surgical removal of piles.', price: 2800, stay: 'Same day', recovery: '1–2 weeks' },
  { name: 'Anal Fissure & Fistula', cat: 'colorectal', icon: 'colon', tag: 'Day case', desc: 'Treatment for painful fissures and fistulas.', price: 3200, stay: 'Same day', recovery: '2–4 weeks' },
  { name: 'Colonoscopy & Endoscopy', cat: 'colorectal', icon: 'camera', tag: 'Sedation', desc: 'Camera tests of the stomach and bowel, with polyp removal.', price: 1900, stay: 'Same day', recovery: '1 day' },
  { name: 'Lump & Cyst Removal', cat: 'lumps', icon: 'lump', tag: 'Local anaesthetic', desc: 'Removal of lipomas, sebaceous cysts and skin lumps.', price: 950, stay: '1 hour', recovery: '3–7 days' },
  { name: 'Ingrown Toenail Surgery', cat: 'lumps', icon: 'wound', tag: 'Local anaesthetic', desc: 'Partial nail removal so it doesn’t grow back.', price: 650, stay: '45 min', recovery: '1–2 weeks' },
  { name: 'Pilonidal Sinus Surgery', cat: 'lumps', icon: 'wound', tag: 'Day case', desc: 'Lasting treatment for pilonidal cysts and sinuses.', price: 3400, stay: 'Same day', recovery: '2–4 weeks' },
  { name: 'Thyroid Surgery', cat: 'endocrine', icon: 'thyroid', tag: 'Specialist', desc: 'Removal of thyroid nodules or goitre.', price: 9800, stay: '1 night', recovery: '2 weeks' },
  { name: 'Breast Lump Surgery', cat: 'endocrine', icon: 'breast', tag: 'Specialist', desc: 'Excision of benign breast lumps and biopsies.', price: 3600, stay: 'Same day', recovery: '1–2 weeks' }
];

const TECH = [
  { name: 'Laparoscopic Surgery', tag: 'Keyhole', icon: 'scope', img: '1640876777002-badf6aee5bcc', short: 'Three tiny cuts instead of one large incision.', more: 'A small camera lets your surgeon operate through 5–10 mm openings, for less pain, smaller scars and faster healing.', stat: '3x', statLabel: 'faster recovery vs open surgery' },
  { name: 'Day-case Surgery', tag: 'Home same day', icon: 'clock', img: '1734094546615-045bf5f7ea0e', short: 'Surgery in the morning, home by evening.', more: 'Modern anaesthesia and pain control mean most of our patients recover at home in their own bed.', stat: '80%', statLabel: 'of patients go home the same day' },
  { name: 'Advanced Operating Rooms', tag: 'Accredited', icon: 'camera', img: '1775947933085-30050ddad6b3', short: 'HD imaging and the latest surgical tools.', more: 'We operate at accredited hospitals and surgery centers with full anaesthesia and nursing teams.', stat: '100%', statLabel: 'accredited partner facilities' },
  { name: 'Endoscopy Suite', tag: 'Sedation', icon: 'camera', img: '1504813184591-01572f98c85f', short: 'Camera tests without any cuts at all.', more: 'Gastroscopy and colonoscopy to diagnose and often treat problems in a single visit.', stat: '20 min', statLabel: 'typical procedure time' },
  { name: 'Enhanced Recovery', tag: 'ERAS program', icon: 'user', img: '1584820927498-cfe5211fd8bf', short: 'A proven plan to get you moving sooner.', more: 'Pre-op nutrition, smart pain relief and early mobility help you recover safely and quickly.', stat: '24/7', statLabel: 'post-op helpline' },
  { name: 'Precise Day Procedures', tag: 'Local anaesthetic', icon: 'lump', img: '1514416309827-bfb0cf433a2d', short: 'Minor surgery in our procedure room.', more: 'Lumps, cysts and nail surgery under local anaesthetic, usually done within an hour.', stat: '1 hr', statLabel: 'in and out for most minor ops' }
];

// Typical milestones after keyhole surgery (days). Approximate guide only.
const PLANNER = {
  'Hernia Repair':        { stay: 'Same day', anaesthesia: 'General or spinal', m: [['Walking around', 1], ['Desk work', 7], ['Driving', 10], ['Light exercise', 21], ['Heavy lifting', 42]] },
  'Gallbladder Removal':  { stay: 'Same day to 1 night', anaesthesia: 'General', m: [['Walking around', 1], ['Desk work', 7], ['Driving', 7], ['Light exercise', 14], ['Heavy lifting', 28]] },
  'Appendix Surgery':     { stay: '1–2 nights', anaesthesia: 'General', m: [['Walking around', 1], ['Desk work', 10], ['Driving', 10], ['Light exercise', 21], ['Heavy lifting', 35]] },
  'Hemorrhoid (Piles) Treatment': { stay: 'Same day', anaesthesia: 'General or spinal', m: [['Walking around', 1], ['Desk work', 7], ['Driving', 7], ['Light exercise', 14], ['Heavy lifting', 21]] },
  'Lump & Cyst Removal':  { stay: '1 hour', anaesthesia: 'Local', m: [['Walking around', 0], ['Desk work', 1], ['Driving', 1], ['Light exercise', 7], ['Heavy lifting', 14]] },
  'Thyroid Surgery':      { stay: '1 night', anaesthesia: 'General', m: [['Walking around', 1], ['Desk work', 10], ['Driving', 10], ['Light exercise', 14], ['Heavy lifting', 21]] }
};

const PRICES = {
  visits: [
    { name: 'New Consultation', desc: '30 minutes', price: 225, unit: '/visit', perks: ['Examination', 'Scan & report review', 'Clear treatment options'] },
    { name: 'Second Opinion', desc: 'Most requested', price: 295, unit: '', featured: true, perks: ['Full review of your scans', '45-minute consultation', 'Written opinion', 'Next steps either way'] },
    { name: 'Follow-up Visit', desc: '15 minutes', price: 120, unit: '/visit', perks: ['Wound check', 'Results review', 'Sign-off to activity'] },
    { name: 'Video Consult', desc: '20 minutes, online', price: 150, unit: '/visit', perks: ['From home', 'Scan review', 'Surgery planning'] }
  ],
  packages: [
    { name: 'Hernia Repair', desc: 'Keyhole, one side', price: 4900, unit: '', perks: ['Surgeon & anaesthetist', 'Facility & mesh', 'Same-day discharge', 'Follow-up visit'] },
    { name: 'Gallbladder Removal', desc: 'Laparoscopic', price: 7200, unit: '', featured: true, perks: ['Surgeon & anaesthetist', 'Facility fees', 'Overnight stay if needed', 'Pathology', 'Follow-up visit'] },
    { name: 'Piles Treatment', desc: 'Day case', price: 2800, unit: '', perks: ['Surgeon & anaesthetist', 'Facility fees', 'Pain relief pack', 'Follow-up visit'] },
    { name: 'Lump Removal', desc: 'Local anaesthetic', price: 950, unit: '', perks: ['Surgeon fees', 'Procedure room', 'Lab analysis', 'Stitch removal'] }
  ]
};

const SURGEONS = [
  { name: 'Dr. Robert Hayes', role: 'General & Laparoscopic Surgeon, MD, FACS', img: '1612349317150-e413f6a5b16d', bg: '#D3EEE7', skin: '#E2B897', hair: '#2B2420', years: 24, langs: 'English', focus: 'Hernia & gallbladder', next: 'Tomorrow, 9:30 AM', today: false },
  { name: 'Dr. Amina Yusuf', role: 'Colorectal Surgeon, MD, FACS', img: '1659353888906-adb3e0041693', bg: '#E8EEF8', skin: '#C99779', hair: '#1D1715', years: 15, langs: 'English, Arabic, Urdu', focus: 'Piles, fissures & bowel', next: 'Today, 2:00 PM', today: true },
  { name: 'Dr. Daniel Park', role: 'General Surgeon, MD', img: '1550831107-1553da8c8464', bg: '#FDF0D5', skin: '#EFD2B8', hair: '#151112', years: 12, langs: 'English, Korean', focus: 'Appendix & emergency surgery', next: 'Today, 4:30 PM', today: true }
];

// NOTE: sample reviews for layout. Replace with real, verified patient reviews.
const REVIEWS = [
  { tag: 'Hernia repair', text: 'Keyhole hernia repair on Friday, back at my desk the next Friday. Barely any pain and three tiny scars.', name: 'Patient name', meta: 'Hernia repair', bg: '#D3EEE7' },
  { tag: 'Gallbladder', text: 'Dr. Hayes explained everything so clearly. I went home the same evening and the helpline was a huge comfort.', name: 'Patient name', meta: 'Gallbladder removal', bg: '#E8EEF8' },
  { tag: 'Second opinion', text: 'Another hospital told me I needed major surgery. Here they found a simpler keyhole option. So grateful.', name: 'Patient name', meta: 'Second opinion', bg: '#FDF0D5' },
  { tag: 'Piles treatment', text: 'I put it off for years out of embarrassment. The team was discreet, kind and the treatment was quick.', name: 'Patient name', meta: 'Piles treatment', bg: '#F3E8F3' },
  { tag: 'Lump removal', text: 'In and out in under an hour for my cyst removal. Clear price, no surprises.', name: 'Patient name', meta: 'Cyst removal', bg: '#D3EEE7' }
];

const FAQS = [
  { q: 'Do I need a referral to see a surgeon?', a: 'No. You can book directly. Some insurance plans require a referral to cover surgery, so we recommend checking your policy. You can upload referral letters and scans when you book.' },
  { q: 'Is keyhole surgery right for me?', a: 'Most of our procedures can be done laparoscopically. Your surgeon will confirm the best approach after examining you and reviewing your scans.' },
  { q: 'How should I prepare for surgery?', a: 'You will receive a personal preparation guide. Usually this means no food for 6 hours before, clear fluids up to 2 hours before, and arranging for someone to drive you home.' },
  { q: 'Will I be in a lot of pain afterwards?', a: 'Keyhole surgery causes much less pain than open surgery. You will go home with a clear pain relief plan, and our 24/7 helpline is there if you need advice.' },
  { q: 'What does the package price include?', a: 'Surgery packages include surgeon, anaesthetist and facility fees, standard medications on the day and your follow-up visit. Any extras are explained before you commit.' },
  { q: 'When is a problem urgent?', a: 'Go to the ER for severe abdominal pain, a hernia that becomes hard, painful and won’t go back in, vomiting with a swollen belly, heavy bleeding or a high fever.' },
  { q: 'Can I pay in instalments?', a: 'Yes. We offer 0% payment plans for qualified patients and accept HSA/FSA cards.' }
];

const SLOTS = ['8:30 AM','9:15 AM','10:00 AM','10:45 AM','11:30 AM','1:00 PM','1:45 PM','2:30 PM','3:15 PM','4:00 PM','4:45 PM','5:30 PM'];
const SYMPTOMS = ['Groin or belly lump', 'Upper right tummy pain', 'Lump under the skin', 'Rectal bleeding', 'Pain on bowel movement', 'Neck swelling', 'Breast lump', 'Other'];

/* ---------- HELPERS ---------- */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const icon = (n) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[n] || ICONS.scope}</svg>`;
const esc = (s) => String(s).replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
const usd = (n) => '$' + n.toLocaleString('en-US');

/* ---------- PROCEDURES ---------- */
const sgrid = $('#sgrid');
sgrid.innerHTML = PROCEDURES.map(p => `
  <article class="scard reveal" data-cat="${p.cat}" tabindex="0" aria-label="${esc(p.name)}, from ${usd(p.price)}">
    <span class="scard__ic">${icon(p.icon)}</span>
    <span class="scard__tag">${p.tag}</span>
    <h3>${p.name}</h3>
    <p class="scard__desc">${p.desc}</p>
    <div class="scard__more">
      <div class="pfacts"><span>Hospital stay<strong>${p.stay}</strong></span><span>Recovery<strong>${p.recovery}</strong></span></div>
      <div class="scard__meta"><span>From <strong>${usd(p.price)}</strong></span><span>All-inclusive</span></div>
      <button type="button" class="btn btn--blue btn--block" data-book data-reason="${esc(p.name)}">Book consultation</button>
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

/* ---------- TECHNIQUES ---------- */
$('#techGrid').innerHTML = TECH.map(t => `
  <article class="test reveal" tabindex="0">
    <div class="test__art" aria-hidden="true">${icon(t.icon)}</div>
    ${photo(t.img, '', 700)}
    <span class="test__tag">${t.tag}</span>
    <h3>${t.name}</h3>
    <p class="test__short">${t.short}</p>
    <div class="test__more"><div>
      <p>${t.more}</p>
      <div class="test__row"><span><strong>${t.stat}</strong></span><span>${t.statLabel}</span></div>
    </div></div>
  </article>`).join('');

/* ---------- RECOVERY PLANNER ---------- */
const procNames = Object.keys(PLANNER);
$('#procOpts').innerHTML = procNames.map((n, i) => `<button type="button" class="opt" data-proc="${esc(n)}" aria-pressed="${i === 0}">${n.replace(' (Piles)', '').replace(' Treatment', '')}</button>`).join('');
function renderPlanner(name) {
  const p = PLANNER[name], max = 42;
  const label = (d) => d === 0 ? 'Same day' : d === 1 ? 'Day 1' : d < 14 ? `${d} days` : `${Math.round(d / 7)} weeks`;
  $('#planOut').innerHTML = `
    <h3>${name}</h3>
    <p>Typical milestones after a straightforward keyhole procedure.</p>
    <div class="plan-meta"><span>Stay: ${p.stay}</span><span>Anaesthesia: ${p.anaesthesia}</span></div>
    <ul class="miles">${p.m.map(([k, d]) => `<li class="mile"><span>${k}</span><i style="--w:${Math.max(4, d / max * 100)}%"></i><em>${label(d)}</em></li>`).join('')}</ul>
    <div class="result__btns"><button type="button" class="btn btn--blue" data-book data-reason="${esc(name)}">Book a consultation</button><a href="tel:+15556102200" class="btn btn--ghost">Ask a question</a></div>`;
}
$('#procOpts').addEventListener('click', (e) => {
  const b = e.target.closest('[data-proc]'); if (!b) return;
  $$('#procOpts .opt').forEach(x => x.setAttribute('aria-pressed', x === b));
  renderPlanner(b.dataset.proc);
});
renderPlanner(procNames[0]);

/* ---------- SURGEONS ---------- */
const docFallback = (d) => `<svg viewBox="0 0 200 200" preserveAspectRatio="xMidYMax slice" aria-hidden="true"><rect width="200" height="200" fill="${d.bg}"/><path d="M30 200c0-46 30-72 70-72s70 26 70 72Z" fill="#fff"/><path d="M78 130l22 46 22-46" fill="${d.bg}"/><path d="M86 118h28v20H86Z" fill="${d.skin}"/><path d="M100 22c-28 0-46 22-46 52 0 34 20 56 46 56s46-22 46-56c0-30-18-52-46-52Z" fill="${d.skin}"/><path d="M52 72c-2-36 20-56 50-56 32 0 52 22 46 58-8-20-26-32-48-32-20 0-38 10-48 30Z" fill="${d.hair}"/><circle cx="84" cy="80" r="3.5" fill="${d.hair}"/><circle cx="116" cy="80" r="3.5" fill="${d.hair}"/><path d="M90 102q10 7 20 0" stroke="#9C5A4E" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M70 144c-6 18 0 30 12 32M82 176a6 6 0 1 0 0-1" stroke="#1B2B40" stroke-width="3.5" fill="none" stroke-linecap="round"/></svg>`;
$('#docGrid').innerHTML = SURGEONS.map(d => `
  <article class="doc reveal">
    <div class="doc__photo" style="background:${d.bg}" role="img" aria-label="Photo of ${esc(d.name)}">
      ${docFallback(d)}${photo(d.img, '', 600)}
      <span class="doc__badge ${d.today ? '' : 'doc__badge--off'}"><span class="live" aria-hidden="true"></span>${d.today ? 'Available today' : 'Next: ' + d.next.split(',')[0]}</span>
    </div>
    <div class="doc__body">
      <h3>${d.name}</h3>
      <p class="doc__role">${d.role}</p>
      <div class="doc__meta">
        <span>${icon('clock')}${d.years} years experience</span>
        <span>${icon('scope')}${d.focus}</span>
        <span>${icon('lang')}${d.langs}</span>
      </div>
      <p class="doc__next">Next available<strong>${d.next}</strong></p>
      <button type="button" class="btn btn--line btn--block" data-book data-doctor="${esc(d.name)}">Book with ${d.name.split(' ')[1]}</button>
    </div>
  </article>`).join('');

/* ---------- PRICING ---------- */
const plansEl = $('#plans'); let ptab = 'visits';
function renderPlans() {
  plansEl.innerHTML = PRICES[ptab].map((p, i) => `
    <div class="plan ${p.featured ? 'plan--featured' : ''}" style="animation-delay:${i * .07}s">
      ${p.featured ? '<span class="plan__badge">Most popular</span>' : ''}
      <h3>${p.name}</h3>
      <p class="plan__desc">${p.desc}</p>
      <p class="plan__price"><strong>${usd(p.price)}</strong><span>${p.unit}</span></p>
      <ul>${p.perks.map(x => `<li>${x}</li>`).join('')}</ul>
      <button type="button" class="btn ${p.featured ? 'btn--blue' : 'btn--line'} btn--block" data-book data-reason="${esc(ptab === 'packages' ? PROCEDURES.find(x => x.name.startsWith(p.name.split(' ')[0]))?.name || p.name : p.name === 'Second Opinion' ? 'Second Opinion' : '')}" data-mode="${p.name === 'Video Consult' ? 'Video consult' : ''}">Book ${ptab === 'packages' ? 'consultation' : 'now'}</button>
    </div>`).join('');
}
renderPlans();
$$('.toggle button').forEach(b => b.addEventListener('click', () => {
  if (b.dataset.ptab === ptab) return;
  ptab = b.dataset.ptab;
  $$('.toggle button').forEach(x => { x.classList.toggle('active', x === b); x.setAttribute('aria-pressed', x === b); });
  renderPlans();
}));

/* ---------- REVIEWS ---------- */
const stage = $('#revStage');
stage.innerHTML = REVIEWS.map((r, i) => `
  <figure class="rev ${i === 0 ? 'active' : ''}" aria-hidden="${i !== 0}">
    <div class="rev__top"><span class="stars" aria-label="5 out of 5 stars">★★★★★</span><span class="rev__tag">${r.tag}</span></div>
    <blockquote>“${r.text}”</blockquote>
    <figcaption><span class="av" style="background:${r.bg}">${r.name[0]}</span><span><strong>${r.name}</strong><small>${r.meta}</small></span></figcaption>
  </figure>`).join('');
let rev = 0, revTimer;
function goRev(n) {
  const items = $$('.rev', stage), prev = rev; rev = (n + items.length) % items.length;
  items.forEach((el, i) => { el.classList.toggle('active', i === rev); el.classList.toggle('prev', i === prev && i !== rev); el.setAttribute('aria-hidden', i !== rev); });
  $('#revCount').textContent = `${rev + 1} / ${items.length}`;
}
const playRev = () => { clearInterval(revTimer); revTimer = setInterval(() => goRev(rev + 1), 6500); };
$('#prev').addEventListener('click', () => { goRev(rev - 1); playRev(); });
$('#next').addEventListener('click', () => { goRev(rev + 1); playRev(); });
stage.addEventListener('mouseenter', () => clearInterval(revTimer));
stage.addEventListener('mouseleave', playRev);
let tx = null;
stage.addEventListener('touchstart', (e) => { tx = e.touches[0].clientX; }, { passive: true });
stage.addEventListener('touchend', (e) => { if (tx === null) return; const dx = e.changedTouches[0].clientX - tx; if (Math.abs(dx) > 40) { goRev(rev + (dx < 0 ? 1 : -1)); playRev(); } tx = null; });
playRev();

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

/* ---------- HOURS ---------- */
(() => {
  const d = new Date(), day = d.getDay(), h = d.getHours() + d.getMinutes() / 60;
  const open = (day >= 1 && day <= 5 && h >= 8 && h < 18) || (day === 6 && h >= 9 && h < 13);
  const el = $('#openNow'); el.textContent = open ? 'Open now' : 'Closed now'; el.className = 'open-now ' + (open ? 'is-open' : 'is-closed');
  const row = $(`#hoursList [data-day="${day}"]`); if (row) row.classList.add('today');
})();

/* ---------- COUNTERS ---------- */
const cio = new IntersectionObserver((entries) => {
  entries.forEach(en => {
    if (!en.isIntersecting) return;
    const el = en.target, target = +el.dataset.count, sfx = el.dataset.suffix || '', t0 = performance.now();
    const tick = (t) => { const p = Math.min(1, (t - t0) / 1600), e = 1 - Math.pow(1 - p, 3); el.textContent = Math.round(target * e).toLocaleString('en-US') + (p === 1 ? sfx : ''); if (p < 1) requestAnimationFrame(tick); };
    requestAnimationFrame(tick); cio.unobserve(el);
  });
}, { threshold: .5 });
$$('[data-count]').forEach(el => cio.observe(el));

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
const spy = new IntersectionObserver((entries) => { entries.forEach(en => { if (en.isIntersecting) links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + en.target.id)); }); }, { rootMargin: '-45% 0px -50% 0px' });
links.forEach(a => { const s = $(a.getAttribute('href')); if (s) spy.observe(s); });

/* ---------- REVEAL ---------- */
const io = new IntersectionObserver((entries) => { entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } }); }, { threshold: .12, rootMargin: '0px 0px -40px 0px' });
$$('.reveal').forEach(el => {
  const sibs = [...el.parentElement.children].filter(c => c.classList.contains('reveal'));
  el.style.transitionDelay = (Math.max(0, sibs.indexOf(el)) % 4) * .08 + 's';
  io.observe(el);
});

/* ---------- VALIDATION ---------- */
function validate(scope) {
  let ok = true;
  $$('input[required], textarea[required], select[required]', scope).forEach(f => {
    const valid = f.type === 'checkbox' ? f.checked : f.type === 'email' ? /^\S+@\S+\.\S+$/.test(f.value) : f.value.trim() !== '';
    const l = f.closest('label'); l && l.classList.toggle('invalid', !valid);
    if (!valid && ok) { f.focus(); ok = false; }
  });
  return ok;
}
['input', 'change'].forEach(ev => document.addEventListener(ev, (e) => { const l = e.target.closest('label.invalid'); if (l) l.classList.remove('invalid'); }));
$('#contactForm').addEventListener('submit', (e) => { e.preventDefault(); if (!validate(e.target)) return; /* TODO: send to CRM */ $('.form__ok', e.target).hidden = false; e.target.reset(); });

/* ---------- MODAL ---------- */
let lastFocus = null;
const openModal = (m) => { lastFocus = document.activeElement; m.hidden = false; document.body.classList.add('lock'); setTimeout(() => $('.modal__close', m).focus(), 60); };
const closeModal = (m) => { m.hidden = true; if (!menu.classList.contains('open')) document.body.classList.remove('lock'); lastFocus && lastFocus.focus(); };
$$('.modal').forEach(m => m.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') return closeModal(m);
  if (e.key !== 'Tab') return;
  const f = $$('button:not([hidden]):not(:disabled), input:not([type=radio]), input[type=radio]:checked, select, textarea', m).filter(el => el.offsetParent !== null);
  if (!f.length) return;
  const first = f[0], last = f[f.length - 1];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
}));

/* ---------- BOOKING ---------- */
const bookModal = $('#bookModal'), form = $('#bookForm');
const nextBtn = $('#nextBtn'), backBtn = $('#backBtn'), selText = $('#selText');
const state = { step: 1, reason: '', doctor: 'First available', date: null, time: '' };
form.dob.max = new Date().toISOString().split('T')[0];

const REASONS = [
  { name: 'New Surgical Consultation', icon: 'steth', sub: 'Discuss a problem · 30 min' },
  { name: 'Second Opinion', icon: 'doc', sub: 'Review a recommendation · 45 min' },
  { name: 'Hernia Repair', icon: 'hernia', sub: 'Keyhole · from $4,900' },
  { name: 'Gallbladder Removal', icon: 'gall', sub: 'Keyhole · from $7,200' },
  { name: 'Hemorrhoid (Piles) Treatment', icon: 'piles', sub: 'Day case · from $2,800' },
  { name: 'Lump & Cyst Removal', icon: 'lump', sub: 'Local · from $950' },
  { name: 'Colonoscopy & Endoscopy', icon: 'camera', sub: 'Sedation · from $1,900' },
  { name: 'Post-op Follow-up', icon: 'user', sub: 'Existing patient · 15 min' }
];
const reasonGrid = $('#reasonGrid');
function renderReasons(extra) {
  const ex = PROCEDURES.find(p => p.name === extra);
  const list = extra && !REASONS.some(r => r.name === extra) ? [{ name: extra, icon: ex ? ex.icon : 'scope', sub: ex ? `${ex.tag} · from ${usd(ex.price)}` : 'Selected' }, ...REASONS] : REASONS;
  reasonGrid.innerHTML = list.map(r => `<label class="choice"><input type="radio" name="reason" value="${esc(r.name)}"><span class="choice__ic">${icon(r.icon)}</span><span><strong>${r.name}</strong><small>${r.sub}</small></span></label>`).join('');
}
reasonGrid.addEventListener('change', (e) => { state.reason = e.target.value; $('#err1').hidden = true; updateSel(); });

$('#docPick').innerHTML = [{ name: 'First available', role: 'Fastest appointment', bg: '#E9F4F1' }, ...SURGEONS].map((d, i) => `
  <label class="dp"><input type="radio" name="doctor" value="${esc(d.name)}" ${i === 0 ? 'checked' : ''}>
    <span><i style="background:${d.bg}">${i === 0 ? '⚡' : d.name.split(' ')[1][0]}</i><span><strong>${d.name}</strong><small>${d.role.split(',')[0]}</small></span></span></label>`).join('');
$('#docPick').addEventListener('change', (e) => { state.doctor = e.target.value; state.time = ''; renderTimes(); updateSel(); });

$('#symptoms').innerHTML = SYMPTOMS.map(s => `<label class="sym"><input type="checkbox" name="symptoms" value="${s}"><span>${s}</span></label>`).join('');
const fileInput = $('#fileInput'), FILE_HINT = 'Ultrasound, CT, MRI or reports · PDF, JPG, PNG';
fileInput.addEventListener('change', () => { const n = fileInput.files.length; $('#fileText').textContent = n ? `${n} file${n > 1 ? 's' : ''} selected: ${[...fileInput.files].map(f => f.name).join(', ')}` : FILE_HINT; });

const datesEl = $('#dates'), timesEl = $('#times');
const days = Array.from({ length: 14 }, (_, i) => { const d = new Date(); d.setHours(0,0,0,0); d.setDate(d.getDate() + i); return d; });
datesEl.innerHTML = days.map((d, i) => `<button type="button" class="date" data-i="${i}" aria-pressed="false" ${d.getDay() === 0 ? 'disabled aria-label="Closed on Sunday"' : ''}><small>${i === 0 ? 'Today' : d.toLocaleDateString('en-US', { weekday: 'short' })}</small><strong>${d.getDate()}</strong><span>${d.toLocaleDateString('en-US', { month: 'short' })}</span></button>`).join('');
function renderTimes() {
  if (!state.date) { timesEl.innerHTML = '<p class="times__empty">Pick a date to see available times.</p>'; return; }
  const d = state.date, sat = d.getDay() === 6, today = d.toDateString() === new Date().toDateString();
  const now = new Date().getHours() + new Date().getMinutes() / 60, seed = d.getDate() + state.doctor.length;
  timesEl.innerHTML = SLOTS.map((t, i) => {
    const [hm, ap] = t.split(' '); let [h, m] = hm.split(':').map(Number); if (ap === 'PM' && h !== 12) h += 12; const hh = h + m / 60;
    const outside = sat ? (hh < 9 || hh >= 13) : (hh < 8 || hh >= 18);
    const dis = outside || (today && hh <= now + 1) || (i * 3 + seed) % 4 === 0; // demo: fake booked slots
    return `<button type="button" class="time" aria-pressed="${state.time === t}" ${dis ? 'disabled' : ''}>${t}</button>`;
  }).join('');
  if (!$$('.time:not(:disabled)', timesEl).length) timesEl.innerHTML = '<p class="times__empty">No times left on this day. Please choose another date.</p>';
}
datesEl.addEventListener('click', (e) => { const b = e.target.closest('.date'); if (!b || b.disabled) return; $$('.date', datesEl).forEach(x => x.setAttribute('aria-pressed', x === b)); state.date = days[+b.dataset.i]; state.time = ''; renderTimes(); updateSel(); $('#err2').hidden = true; });
timesEl.addEventListener('click', (e) => { const b = e.target.closest('.time'); if (!b || b.disabled) return; $$('.time', timesEl).forEach(x => x.setAttribute('aria-pressed', x === b)); state.time = b.textContent; updateSel(); $('#err2').hidden = true; });

const fmtDate = (d) => d ? d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }) : '';
const updateSel = () => { selText.textContent = [state.reason, state.date && fmtDate(state.date), state.time].filter(Boolean).join(' · '); };
function showStep(n) {
  state.step = n;
  $$('.pane', form).forEach(p => p.classList.toggle('active', +p.dataset.step === n));
  $$('#stepper li').forEach((li, i) => { li.classList.toggle('active', i + 1 === n); li.classList.toggle('done', i + 1 < n); });
  backBtn.hidden = n === 1 || n === 4;
  nextBtn.textContent = n === 3 ? 'Confirm Booking' : n === 4 ? 'Done' : 'Continue';
  selText.hidden = n === 4;
}
nextBtn.addEventListener('click', () => {
  if (state.step === 1) { if (!state.reason) { $('#err1').hidden = false; return; } renderTimes(); showStep(2); }
  else if (state.step === 2) { if (!state.date || !state.time) { $('#err2').hidden = false; return; } showStep(3); $('input[name=name]', form).focus(); }
  else if (state.step === 3) {
    if (!validate($('.pane[data-step="3"]', form))) return;
    const fd = new FormData(form);
    const b = { reason: state.reason, mode: fd.get('mode'), doctor: state.doctor, date: fmtDate(state.date), time: state.time, name: fd.get('name'), payment: fd.get('payment'), files: fileInput.files.length };
    // TODO: POST booking data (and uploaded scans) to your secure backend / GHL calendar here
    const row = (k, v) => v ? `<div><dt>${k}</dt><dd>${esc(v)}</dd></div>` : '';
    $('#summary').innerHTML = row('Reason', b.reason) + row('Type', b.mode) + row('Surgeon', b.doctor) + row('Date', b.date) + row('Time', b.time) + row('Patient', b.name) + row('Scans', b.files ? `${b.files} uploaded` : '');
    $('#doneNote').textContent = b.mode === 'Video consult'
      ? 'We\'ll text you a secure video link 10 minutes before your appointment. Have your scans and reports ready.'
      : 'Please arrive 10 minutes early with your ID, insurance card, medication list and any scans or reports.';
    showStep(4); nextBtn.focus();
  } else closeModal(bookModal);
});
backBtn.addEventListener('click', () => showStep(state.step - 1));

function openBooking({ reason, mode, doctor } = {}) {
  form.reset(); Object.assign(state, { step: 1, reason: '', doctor: 'First available', date: null, time: '' });
  $('#fileText').textContent = FILE_HINT;
  renderReasons(reason);
  $$('.date', datesEl).forEach(x => x.setAttribute('aria-pressed', 'false'));
  $$('.invalid', form).forEach(x => x.classList.remove('invalid'));
  $('#err1').hidden = $('#err2').hidden = true;
  if (mode) { const m = $$('input[name=mode]', form).find(r => r.value === mode); if (m) m.checked = true; }
  if (doctor) { const d = $$('input[name=doctor]', form).find(r => r.value === doctor); if (d) { d.checked = true; state.doctor = doctor; } }
  if (reason) { const r = $$('input[name=reason]', form).find(x => x.value === reason); if (r) { r.checked = true; state.reason = reason; } }
  updateSel(); showStep(1);
  if (state.reason) { renderTimes(); showStep(2); }
  openModal(bookModal);
}
document.addEventListener('click', (e) => {
  const b = e.target.closest('[data-book]');
  if (b) { e.preventDefault(); openBooking({ reason: b.dataset.reason || '', mode: b.dataset.mode || '', doctor: b.dataset.doctor || '' }); return; }
  const c = e.target.closest('[data-close]'); if (c) closeModal(c.closest('.modal'));
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

/* FAQ: two independent columns, so opening one question never moves the other column */
(() => {
  const list = document.getElementById('faqList');
  if (!list) return;
  const items = [...list.querySelectorAll(':scope > .qa, :scope > .faq__col > .qa')];
  if (!items.length) return;
  const layout = () => {
    const flat = () => { items.forEach(q => list.appendChild(q)); list.querySelectorAll('.faq__col').forEach(c => c.remove()); list.classList.remove('faq--cols'); };
    flat();
    const cols = getComputedStyle(list).gridTemplateColumns.split(' ').filter(Boolean).length;
    if (getComputedStyle(list).display !== 'grid' || cols < 2) return;
    const a = document.createElement('div'), b = document.createElement('div');
    a.className = b.className = 'faq__col';
    items.forEach((q, i) => (i % 2 ? b : a).appendChild(q));
    list.append(a, b); list.classList.add('faq--cols');
  };
  layout();
  let t; window.addEventListener('resize', () => { clearTimeout(t); t = setTimeout(layout, 200); });
})();
