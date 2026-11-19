/* =========================================================
   BloomCare Women's Health — script
   All content is dummy data. Edit prices and text below.
   Photos: free Unsplash images (unsplash.com/license).
   ========================================================= */
(() => {
'use strict';

const IMG = (id, w = 800) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=${w}`;
const photo = (id, alt = '', w) => id ? `<img class="photo" src="${IMG(id, w)}" alt="${alt}" loading="lazy" decoding="async" onerror="this.remove()">` : '';

/* ---------- DATA ---------- */
const ICONS = {
  flower: '<path d="M12 21v-7"/><circle cx="12" cy="9" r="3"/><path d="M12 6a3 3 0 0 1 3-3 3 3 0 0 1 0 6M12 6a3 3 0 0 0-3-3 3 3 0 0 0 0 6M9 9a3 3 0 0 0-3 3 3 3 0 0 0 6 0M15 9a3 3 0 0 1 3 3 3 3 0 0 1-6 0"/>',
  baby: '<circle cx="12" cy="8" r="5"/><path d="M10 8h.01M14 8h.01M10.5 10.5q1.5 1 3 0M6 21c0-3 3-5 6-5s6 2 6 5"/>',
  preg: '<circle cx="10" cy="4" r="2"/><path d="M9 7c-2 2-2 6 0 8l-1 6M11 7c3 1 6 4 5 8-1 3-4 3-5 2l1 4"/>',
  heartp: '<path d="M12 21s-8-5-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 6-8 11-8 11Z"/>',
  scan: '<path d="M4 12a8 8 0 0 1 16 0"/><path d="M7 12a5 5 0 0 1 10 0"/><path d="M10 12a2 2 0 0 1 4 0"/><path d="M12 12v8"/>',
  pill: '<rect x="4" y="9" width="16" height="6" rx="3" transform="rotate(-45 12 12)"/><path d="M9 9l6 6"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2"/>',
  chat: '<path d="M4 5h16v11H8l-4 4Z"/>',
  test: '<path d="M9 3h6M10 3v6L4 19a1 1 0 0 0 1 2h14a1 1 0 0 0 1-2l-6-10V3"/><path d="M7 15h10"/>',
  knee: '<path d="M9 2v7a3 3 0 0 0 6 0V2M9 22v-6a3 3 0 0 1 6 0v6"/><circle cx="12" cy="12" r="1.5"/>',
  hip: '<circle cx="12" cy="8" r="4"/><path d="M8 11l-3 10M16 11l3 10M9 13h6"/>',
  shoulder: '<path d="M4 10c2-4 6-5 9-4l6 3"/><circle cx="16" cy="7.5" r="2.5"/><path d="M13 9l-2 12"/>',
  spine: '<path d="M12 2v20"/><rect x="8" y="4" width="8" height="3" rx="1.5"/><rect x="8" y="10" width="8" height="3" rx="1.5"/><rect x="8" y="16" width="8" height="3" rx="1.5"/>',
  hand: '<path d="M7 11V6a2 2 0 1 1 4 0v4M11 10V4a2 2 0 1 1 4 0v6M15 10V6a2 2 0 1 1 4 0v8a7 7 0 0 1-7 7h-1a6 6 0 0 1-5.2-3L3 13a2 2 0 0 1 3.4-2L7 12"/>',
  foot: '<path d="M8 3c-2 4-2 9 0 12l1 5h8c1-3-1-5-3-6-2-1-2-4-2-6s0-4-1-5Z"/>',
  bone: '<path d="M11 8a3 3 0 1 1 3-3l5 5a3 3 0 1 1 1 4 3 3 0 1 1-4 1l-5-5a3 3 0 1 1 0-2Z"/>',
  syringe: '<path d="M18 2l4 4M17 7l-9 9-4 1 1-4 9-9M14 4l6 6M7 13l4 4"/>',
  run: '<circle cx="15" cy="4" r="2"/><path d="M6 21l4-7 3 2 1 5M10 14l2-6 5 3 3-3M12 8l-4 1-2 3"/>',
  xray: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M12 6v12M9 8h6M8 11h8M9 14h6"/>',
  robot: '<rect x="5" y="8" width="14" height="10" rx="2"/><path d="M12 4v4M9 13h.01M15 13h.01M9 21h6"/>',
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
  { name: 'Well-Woman Exam', cat: 'wellness', icon: 'flower', tag: 'Preventive', desc: 'Yearly check-up with breast and pelvic exam and health advice.', price: 180, stay: '30 min', recovery: 'Usually covered' },
  { name: 'Pap Smear & HPV Test', cat: 'wellness', icon: 'test', tag: 'Screening', desc: 'Cervical cancer screening with fast, private results.', price: 120, stay: '15 min', recovery: 'Results in 7 days' },
  { name: 'Contraception & IUD', cat: 'wellness', icon: 'pill', tag: 'Family planning', desc: 'Pill, implant, IUD insertion or removal and advice.', price: 150, stay: '20–30 min', recovery: 'Same day' },
  { name: 'Prenatal Care', cat: 'pregnancy', icon: 'preg', tag: 'Pregnancy', desc: 'Regular check-ups, scans and tests through all 9 months.', price: 2900, stay: '12+ visits', recovery: 'Package price' },
  { name: 'High-Risk Pregnancy', cat: 'pregnancy', icon: 'heartp', tag: 'Specialist', desc: 'Extra monitoring for twins, diabetes, high BP and more.', price: 3900, stay: '15+ visits', recovery: 'Package price' },
  { name: '3D/4D Ultrasound', cat: 'pregnancy', icon: 'scan', tag: 'Imaging', desc: 'See your baby in detail, with prints and video to take home.', price: 199, stay: '30 min', recovery: 'Same day images' },
  { name: 'Fertility Evaluation', cat: 'conditions', icon: 'baby', tag: 'Fertility', desc: 'Hormone tests, ovulation tracking and next-step planning.', price: 350, stay: '45 min', recovery: 'Plan in 2 weeks' },
  { name: 'PCOS Management', cat: 'conditions', icon: 'flower', tag: 'Hormonal', desc: 'Diagnosis and care for irregular periods, acne and weight.', price: 220, stay: '40 min', recovery: 'Ongoing plan' },
  { name: 'Endometriosis & Pelvic Pain', cat: 'conditions', icon: 'heartp', tag: 'Specialist', desc: 'Relief for painful periods, pelvic pain and painful sex.', price: 250, stay: '45 min', recovery: 'Ongoing plan' },
  { name: 'Menopause Care', cat: 'conditions', icon: 'sun', tag: 'Hormone therapy', desc: 'Help with hot flushes, sleep, mood and bone health.', price: 220, stay: '40 min', recovery: 'Ongoing plan' },
  { name: 'Colposcopy', cat: 'procedures', icon: 'scan', tag: 'In-office', desc: 'Closer look at the cervix after an abnormal Pap result.', price: 450, stay: '20 min', recovery: '1 day' },
  { name: 'Laparoscopic Gyne Surgery', cat: 'procedures', icon: 'scan', tag: 'Keyhole', desc: 'Fibroids, cysts and endometriosis treated through tiny cuts.', price: 7900, stay: 'Same day', recovery: '1–2 weeks' }
];

const TECH = [
  { name: 'In-office Ultrasound', tag: 'Same visit', icon: 'scan', img: '1654931800911-7a9cfb3b7c17', short: '2D, 3D and 4D scans by female sonographers.', more: 'Dating, growth and gynecologic scans done in our clinic, explained by your doctor straight away.', stat: '30 min', statLabel: 'typical scan appointment' },
  { name: 'Prenatal Care', tag: 'Pregnancy', icon: 'preg', img: '1711313532327-2f47602eb6ba', short: 'One team from positive test to postnatal check.', more: 'Regular visits, screening tests and a birth plan built around your wishes.', stat: '12+', statLabel: 'visits in your pregnancy plan' },
  { name: 'Gentle Examinations', tag: 'Private', icon: 'heartp', img: '1691139600923-8fba078704b0', short: 'Calm, unhurried, always with your consent.', more: 'We explain every step before it happens, and you can pause or stop at any time.', stat: '100%', statLabel: 'female clinical team' },
  { name: 'Private Consultations', tag: 'Judgement-free', icon: 'chat', img: '1666214277730-e9c7e755e5a3', short: 'Time to talk about anything on your mind.', more: 'Periods, sex, fertility, menopause or mental health: no question is too small.', stat: '30 min', statLabel: 'standard consultation' },
  { name: 'Fertility Support', tag: 'Family planning', icon: 'baby', img: '1758273240360-76b908e7582a', short: 'Clear guidance on your path to parenthood.', more: 'Testing, cycle tracking and medication, with referrals to IVF partners when needed.', stat: '2 weeks', statLabel: 'to your personal plan' },
  { name: 'Postnatal Care', tag: 'After birth', icon: 'flower', img: '1704388159994-98f3889483e8', short: 'Support for your body and mind after baby.', more: 'Healing checks, feeding support and screening for postnatal depression.', stat: '6 weeks', statLabel: 'postnatal check-up' }
];

const PRICES = {
  visits: [
    { name: 'New Patient Visit', desc: '45 minutes', price: 220, unit: '/visit', perks: ['Full history & exam', 'Personal care plan', 'Lab tests ordered'] },
    { name: 'Well-Woman Exam', desc: 'Most booked', price: 180, unit: '', featured: true, perks: ['Breast & pelvic exam', 'Pap smear if due', 'Contraception advice', 'Results in portal'] },
    { name: 'Follow-up Visit', desc: '20 minutes', price: 120, unit: '/visit', perks: ['Results review', 'Treatment changes', 'Prescriptions'] },
    { name: 'Telehealth Visit', desc: '20 minutes, online', price: 95, unit: '/visit', perks: ['From home', 'E-prescriptions', 'Results review'] }
  ],
  packages: [
    { name: 'Complete Pregnancy Care', desc: 'All 9 months', price: 2900, unit: '', featured: true, perks: ['12+ prenatal visits', 'All routine ultrasounds', 'Routine lab tests', 'Birth plan', 'Postnatal check'] },
    { name: 'High-Risk Pregnancy', desc: 'Extra monitoring', price: 3900, unit: '', perks: ['15+ specialist visits', 'Growth scans', 'Glucose & BP monitoring', '24/7 on-call'] },
    { name: 'Fertility Workup', desc: 'Find answers', price: 690, unit: '', perks: ['Consultation', 'Hormone panel', 'Pelvic ultrasound', 'Personal plan'] },
    { name: 'Menopause Package', desc: '6 months', price: 590, unit: '', perks: ['Hormone assessment', 'Bone health check', '3 follow-ups', 'Lifestyle plan'] }
  ]
};

const SURGEONS = [
  { name: 'Dr. Olivia Hart', role: 'Obstetrician & Gynecologist, MD', img: '1584432810601-6c7f27d2362b', bg: '#FCE1EC', skin: '#EBC4A6', hair: '#3A2418', years: 19, langs: 'English', focus: 'High-risk pregnancy', next: 'Tomorrow, 10:00 AM', today: false },
  { name: 'Dr. Sana Malik', role: 'Gynecologist, MD, FACOG', img: '1673865641073-4479f93a7776', bg: '#FDF0D5', skin: '#C99779', hair: '#1D1715', years: 12, langs: 'English, Urdu, Punjabi', focus: 'PCOS, fertility & endometriosis', next: 'Today, 2:45 PM', today: true },
  { name: 'Dr. Rebecca Owens', role: 'Gynecologist, MD', img: '1659353888906-adb3e0041693', bg: '#E2F2E8', skin: '#F0D2BF', hair: '#8B6A4B', years: 15, langs: 'English, Spanish', focus: 'Menopause & laparoscopic surgery', next: 'Today, 4:30 PM', today: true }
];

// NOTE: sample reviews for layout. Replace with real, verified patient reviews.
const REVIEWS = [
  { tag: 'Pregnancy care', text: 'Dr. Hart looked after me through a high-risk pregnancy. I always felt safe, informed and never rushed.', name: 'Patient name', meta: 'Complete Pregnancy Care', bg: '#FCE1EC' },
  { tag: 'PCOS', text: 'After years of being dismissed, Dr. Malik finally diagnosed my PCOS and gave me a plan that works.', name: 'Patient name', meta: 'PCOS management', bg: '#FDF0D5' },
  { tag: 'Menopause', text: 'I was struggling with sleep and hot flushes. Three months later I feel like myself again.', name: 'Patient name', meta: 'Menopause care', bg: '#E2F2E8' },
  { tag: 'First visit', text: 'My first gynecology appointment and I was so nervous. The team explained everything and made it easy.', name: 'Patient name', meta: 'Well-woman exam', bg: '#F3E8F3' },
  { tag: 'Ultrasound', text: 'The 4D scan was magical. We got to see our baby yawn and took home beautiful prints.', name: 'Patient name', meta: '3D/4D ultrasound', bg: '#FCE1EC' }
];

const FAQS = [
  { q: 'When should I have my first gynecology visit?', a: 'A first visit is recommended between ages 13 and 15 for advice and questions. Pelvic exams usually aren’t needed until 21 unless you have symptoms.' },
  { q: 'How often do I need a Pap smear?', a: 'Most women aged 21 to 29 need a Pap test every 3 years. From 30 to 65, a Pap plus HPV test every 5 years is common. Your doctor will advise based on your history.' },
  { q: 'When should I book my first pregnancy appointment?', a: 'Call us when you get a positive test. We usually see you between 6 and 10 weeks for a dating scan and first blood tests.' },
  { q: 'Can I bring my partner or a support person?', a: 'Yes, always. You can also ask for a chaperone during any examination.' },
  { q: 'Are all your doctors women?', a: 'Yes. Our doctors, nurses and sonographers are all women.' },
  { q: 'Where will I deliver my baby?', a: 'Our obstetricians deliver at a top-rated partner maternity hospital nearby, with NICU care available 24/7.' },
  { q: 'Is my visit confidential?', a: 'Yes. Everything you share is private and protected under HIPAA. Teens can also speak with the doctor privately.' }
];

const SLOTS = ['8:30 AM','9:15 AM','10:00 AM','10:45 AM','11:30 AM','1:00 PM','1:45 PM','2:30 PM','3:15 PM','4:00 PM','4:45 PM','5:30 PM'];
const SYMPTOMS = ['Irregular periods', 'Painful periods', 'Pelvic pain', 'Trying to conceive', 'Contraception', 'Menopause symptoms', 'Abnormal Pap', 'Other'];

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
      <div class="pfacts"><span>Visit length<strong>${p.stay}</strong></span><span>Type<strong>${p.tag}</strong></span></div>
      <div class="scard__meta"><span>From <strong>${usd(p.price)}</strong></span><span>${p.recovery}</span></div>
      <button type="button" class="btn btn--blue btn--block" data-book data-reason="${esc(p.name)}">Book now</button>
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

/* ---------- DUE DATE CALCULATOR ---------- */
const lmpEl = $('#lmp'), cycleEl = $('#cycle');
(() => { const t = new Date(), min = new Date(t); min.setDate(t.getDate() - 300); lmpEl.max = t.toISOString().split('T')[0]; lmpEl.min = min.toISOString().split('T')[0]; })();
function renderDue() {
  const out = $('#dueOut');
  if (!lmpEl.value) { out.innerHTML = '<p class="result__empty">Choose a date to see your estimated due date.</p>'; return; }
  const lmp = new Date(lmpEl.value + 'T00:00'), adj = (+cycleEl.value) - 28;
  const due = new Date(lmp); due.setDate(due.getDate() + 280 + adj);
  const today = new Date(); today.setHours(0,0,0,0);
  const daysPreg = Math.max(0, Math.round((today - lmp) / 864e5) - adj);
  const wk = Math.floor(daysPreg / 7), dy = daysPreg % 7;
  const left = Math.max(0, Math.round((due - today) / 864e5));
  const pct = Math.min(100, daysPreg / 280 * 100);
  const tri = wk < 13 ? 'First trimester' : wk < 27 ? 'Second trimester' : 'Third trimester';
  const next = wk < 10 ? 'Book your first prenatal visit and dating scan (weeks 6 to 10).'
    : wk < 14 ? 'Time for first-trimester screening and the nuchal scan (weeks 11 to 14).'
    : wk < 18 ? 'Next up: blood tests and planning your anatomy scan.'
    : wk < 23 ? 'Your detailed anatomy scan is due now (weeks 18 to 22).'
    : wk < 28 ? 'Glucose test coming up (weeks 24 to 28).'
    : wk < 37 ? 'Growth checks every 2 weeks and finalising your birth plan.'
    : 'Weekly visits until baby arrives. Call us with any concerns.';
  const fmt = (d) => d.toLocaleDateString('en-US', { weekday: 'short', month: 'long', day: 'numeric', year: 'numeric' });
  out.innerHTML = `
    <div class="due-big"><strong>${fmt(due)}</strong><span>estimated due date</span></div>
    <div class="due-bar" aria-hidden="true"><i style="--w:${pct}%"></i></div>
    <div class="due-tri" aria-hidden="true"><span>Trimester 1</span><span>Trimester 2</span><span>Trimester 3</span></div>
    <div class="due-stats">
      <div><strong>${wk}w ${dy}d</strong><small>pregnant</small></div>
      <div><strong>${tri.split(' ')[0]}</strong><small>trimester</small></div>
      <div><strong>${left}</strong><small>days to go</small></div>
    </div>
    <p class="due-next"><strong>Next step:</strong> ${next}</p>
    <div class="result__btns"><button type="button" class="btn btn--blue" data-book data-reason="Prenatal Care">Book a prenatal visit</button><a href="tel:+15553201188" class="btn btn--ghost">Call us</a></div>`;
}
lmpEl.addEventListener('change', renderDue); cycleEl.addEventListener('change', renderDue);

/* ---------- LIFE STAGES ---------- */
const AREAS = {
  teens: { label: 'Teens', intro: 'A friendly first visit for questions about periods, puberty and growing up.', list: ['First period questions', 'Painful periods', 'HPV vaccine', 'Acne & hormones', 'Confidential advice', 'Healthy habits'] },
  twenties: { label: '20s & 30s', intro: 'Screening, contraception and support as you plan your future.', list: ['Pap & HPV tests', 'Contraception & IUD', 'PCOS', 'Endometriosis', 'Sexual health', 'Pre-pregnancy planning'] },
  pregnancy: { label: 'Pregnancy', intro: 'Personal care from your positive test to your baby’s arrival.', list: ['Prenatal visits', 'Dating & anatomy scans', 'Genetic screening', 'High-risk care', 'Birth planning', 'Postnatal checks'] },
  fertility: { label: 'Fertility', intro: 'Clear answers and a plan when you’re trying to conceive.', list: ['Hormone testing', 'Ovulation tracking', 'Pelvic ultrasound', 'Medication cycles', 'Recurrent loss care', 'IVF referrals'] },
  menopause: { label: 'Menopause', intro: 'Feel like yourself again through perimenopause and beyond.', list: ['Hot flushes', 'Sleep & mood', 'Hormone therapy', 'Bone health', 'Vaginal dryness', 'Heart health'] }
};
const chips = $('#areaChips'), areaCard = $('#areaCard');
chips.innerHTML = Object.entries(AREAS).map(([k, a]) => `<button type="button" role="tab" data-area="${k}" aria-selected="false">${a.label}</button>`).join('');
function showArea(key) {
  const a = AREAS[key];
  $$('button', chips).forEach(b => b.setAttribute('aria-selected', b.dataset.area === key));
  areaCard.style.animation = 'none'; void areaCard.offsetWidth; areaCard.style.animation = '';
  areaCard.innerHTML = `<h3>${a.label}</h3><p>${a.intro}</p><ul class="area__list">${a.list.map(i => `<li>${i}</li>`).join('')}</ul>
    <button type="button" class="btn btn--blue" data-book data-reason="New Patient Visit">Book a visit</button>`;
}
chips.addEventListener('click', (e) => { const b = e.target.closest('[data-area]'); if (b) showArea(b.dataset.area); });
showArea('twenties');

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
        <span>${icon('heartp')}${d.focus}</span>
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
      <button type="button" class="btn ${p.featured ? 'btn--blue' : 'btn--line'} btn--block" data-book data-reason="${esc(ptab === 'packages' ? ({ 'Complete Pregnancy Care': 'Prenatal Care', 'High-Risk Pregnancy': 'High-Risk Pregnancy', 'Fertility Workup': 'Fertility Evaluation', 'Menopause Package': 'Menopause Care' })[p.name] || p.name : p.name === 'Well-Woman Exam' ? 'Well-Woman Exam' : p.name === 'New Patient Visit' ? 'New Patient Visit' : '')}" data-mode="${p.name === 'Telehealth Visit' ? 'Telehealth' : ''}">Book ${ptab === 'packages' ? 'package' : 'now'}</button>
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
  { name: 'Well-Woman Exam', icon: 'flower', sub: 'Yearly check-up · 30 min' },
  { name: 'New Patient Visit', icon: 'user', sub: 'Get to know us · 45 min' },
  { name: 'Prenatal Care', icon: 'preg', sub: 'Pregnancy visit · 30 min' },
  { name: '3D/4D Ultrasound', icon: 'scan', sub: 'Imaging · 30 min' },
  { name: 'Fertility Evaluation', icon: 'baby', sub: 'Trying to conceive · 45 min' },
  { name: 'Contraception & IUD', icon: 'pill', sub: 'Family planning · 30 min' },
  { name: 'Menopause Care', icon: 'sun', sub: 'Hormones & symptoms · 40 min' },
  { name: 'Follow-up Visit', icon: 'chat', sub: 'Existing patient · 20 min' }
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
const fileInput = $('#fileInput'), FILE_HINT = 'Scans, lab results or reports · PDF, JPG, PNG';
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
    $('#summary').innerHTML = row('Visit', b.reason) + row('Type', b.mode) + row('Doctor', b.doctor) + row('Date', b.date) + row('Time', b.time) + row('Patient', b.name) + row('Scans', b.files ? `${b.files} uploaded` : '');
    $('#doneNote').textContent = b.mode === 'Telehealth'
      ? 'We\'ll text you a secure video link 10 minutes before your appointment.'
      : 'Please arrive 10 minutes early with your ID and insurance card. You are welcome to bring a partner or support person.';
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
