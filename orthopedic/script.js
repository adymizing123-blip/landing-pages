/* =========================================================
   OrthoPlus Orthopedic Center — script
   All content is dummy data. Edit prices and text below.
   Photos: free Unsplash images (unsplash.com/license).
   ========================================================= */
(() => {
'use strict';

const IMG = (id, w = 800) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=${w}`;
const photo = (id, alt = '', w) => id ? `<img class="photo" src="${IMG(id, w)}" alt="${alt}" loading="lazy" decoding="async" onerror="this.remove()">` : '';

/* ---------- DATA ---------- */
const ICONS = {
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
  { name: 'Knee Replacement', cat: 'joint', icon: 'knee', tag: 'Robotic-assisted', desc: 'Total or partial knee replacement for arthritis pain.', price: 18500, stay: '1–2 nights', recovery: '6–12 weeks' },
  { name: 'Hip Replacement', cat: 'joint', icon: 'hip', tag: 'Anterior approach', desc: 'Muscle-sparing hip replacement for a faster return to walking.', price: 19500, stay: '1 night', recovery: '6–8 weeks' },
  { name: 'Shoulder Replacement', cat: 'joint', icon: 'shoulder', tag: 'Specialist', desc: 'Anatomic or reverse shoulder replacement for severe arthritis.', price: 21000, stay: '1 night', recovery: '3–6 months' },
  { name: 'ACL Reconstruction', cat: 'sports', icon: 'run', tag: 'Arthroscopic', desc: 'Rebuild a torn ACL and get back to sport safely.', price: 9800, stay: 'Same day', recovery: '6–9 months' },
  { name: 'Knee Arthroscopy', cat: 'sports', icon: 'knee', tag: 'Keyhole', desc: 'Meniscus repair or trimming through tiny incisions.', price: 5200, stay: 'Same day', recovery: '2–6 weeks' },
  { name: 'Rotator Cuff Repair', cat: 'sports', icon: 'shoulder', tag: 'Arthroscopic', desc: 'Repair torn shoulder tendons to restore strength and motion.', price: 8900, stay: 'Same day', recovery: '4–6 months' },
  { name: 'Spine & Disc Surgery', cat: 'spine', icon: 'spine', tag: 'Minimally invasive', desc: 'Microdiscectomy and decompression for sciatica and nerve pain.', price: 14500, stay: '0–1 night', recovery: '4–6 weeks' },
  { name: 'Carpal Tunnel Release', cat: 'spine', icon: 'hand', tag: 'Local anaesthetic', desc: 'Relieve hand numbness and tingling in a 20-minute procedure.', price: 2400, stay: 'Same day', recovery: '2–4 weeks' },
  { name: 'Fracture Fixation', cat: 'spine', icon: 'bone', tag: 'Trauma care', desc: 'Plates, screws or casting for broken bones of all kinds.', price: 3500, stay: 'Same day to 2 nights', recovery: '6–12 weeks' },
  { name: 'Foot & Ankle Surgery', cat: 'spine', icon: 'foot', tag: 'Specialist', desc: 'Bunions, ankle ligament repair and Achilles injuries.', price: 6400, stay: 'Same day', recovery: '6–12 weeks' },
  { name: 'PRP & Joint Injections', cat: 'nonsurg', icon: 'syringe', tag: 'Non-surgical', desc: 'Ultrasound-guided PRP, steroid or gel injections for pain relief.', price: 450, stay: '30 min', recovery: '1–2 days' },
  { name: 'Sports Injury Clinic', cat: 'nonsurg', icon: 'run', tag: 'Non-surgical', desc: 'Sprains, strains and tendon injuries assessed and treated.', price: 195, stay: '30 min', recovery: 'Varies' }
];

const TECH = [
  { name: 'Same-day Digital X-ray', tag: 'Results in 15 min', icon: 'xray', img: '1564725075388-cc8338732289', short: 'Low-dose imaging read during your visit.', more: 'Your surgeon reviews your X-ray with you on screen, so you leave with answers, not another appointment.', stat: '15 min', statLabel: 'from scan to diagnosis' },
  { name: 'Robotic-assisted Replacement', tag: 'Precision', icon: 'robot', img: '1640876777002-badf6aee5bcc', short: 'Joint implants placed to the millimetre.', more: '3D planning and robotic guidance help position knee and hip implants precisely for a natural feel.', stat: '±1 mm', statLabel: 'implant placement accuracy' },
  { name: 'Arthroscopic Surgery', tag: 'Keyhole', icon: 'knee', img: '1715531785980-ce9b3bf1c38d', short: 'Fix joints through tiny incisions.', more: 'A small camera lets us repair knees, shoulders and ankles with less pain and faster recovery.', stat: '5 mm', statLabel: 'typical incision size' },
  { name: 'Hip & Joint Imaging', tag: 'MRI access', icon: 'hip', img: '1763198302745-57cb94135f11', short: 'Fast MRI for soft tissue and cartilage.', more: 'Rapid MRI appointments help us diagnose ligament, cartilage and disc problems accurately.', stat: '48 hrs', statLabel: 'typical MRI wait' },
  { name: 'Casting & Bracing', tag: 'Walk-in', icon: 'bone', img: '1706777248191-3e6bec8d2123', short: 'Fracture care without the ER wait.', more: 'Lightweight casts, splints and custom braces fitted on site by our orthopedic technicians.', stat: '6 days', statLabel: 'walk-in clinic, Mon to Sat' },
  { name: 'In-house Rehab', tag: 'Physiotherapy', icon: 'run', img: '1645005513713-9e2b92a687d3', short: 'Recovery led by physios who know your surgery.', more: 'Your physiotherapist works side by side with your surgeon so every exercise matches your healing.', stat: '1 team', statLabel: 'surgeon and physio together' }
];

// Typical milestones (days). Approximate guide only.
const PLANNER = {
  'Knee Replacement':     { stay: '1–2 nights', anaesthesia: 'Spinal or general', m: [['Walking with aid', 1], ['Walking unaided', 28], ['Driving', 42], ['Desk work', 42], ['Golf, cycling', 84]] },
  'Hip Replacement':      { stay: '1 night', anaesthesia: 'Spinal or general', m: [['Walking with aid', 1], ['Walking unaided', 21], ['Driving', 35], ['Desk work', 28], ['Golf, cycling', 70]] },
  'ACL Reconstruction':   { stay: 'Same day', anaesthesia: 'General', m: [['Walking with brace', 1], ['Desk work', 14], ['Driving', 28], ['Running', 112], ['Return to sport', 240]] },
  'Knee Arthroscopy':     { stay: 'Same day', anaesthesia: 'General or spinal', m: [['Walking', 1], ['Desk work', 5], ['Driving', 10], ['Gym & cycling', 28], ['Running', 42]] },
  'Rotator Cuff Repair':  { stay: 'Same day', anaesthesia: 'General + nerve block', m: [['Sling', 1], ['Desk work', 14], ['Driving', 42], ['Lifting arm', 84], ['Full strength', 180]] },
  'Carpal Tunnel Release':{ stay: 'Same day', anaesthesia: 'Local', m: [['Using hand lightly', 1], ['Desk work', 7], ['Driving', 10], ['Gripping', 21], ['Full strength', 42]] }
};

const PRICES = {
  visits: [
    { name: 'New Consultation', desc: '30 minutes', price: 250, unit: '/visit', perks: ['Examination', 'Same-day X-ray review', 'Treatment options'] },
    { name: 'Consult + X-ray', desc: 'Most popular first visit', price: 349, unit: '', featured: true, perks: ['Specialist consultation', 'Digital X-ray', 'Results same visit', 'Written plan'] },
    { name: 'Walk-in Injury Visit', desc: 'No appointment', price: 195, unit: '/visit', perks: ['Sprains & strains', 'Simple fractures', 'Casting if needed'] },
    { name: 'Second Opinion', desc: '45 minutes', price: 295, unit: '', perks: ['Full imaging review', 'Non-surgical options', 'Written opinion'] }
  ],
  packages: [
    { name: 'Knee Replacement', desc: 'Robotic-assisted', price: 18500, unit: '', featured: true, perks: ['Surgeon & anaesthetist', 'Hospital stay', 'Implant', '6 physio sessions', 'Follow-up visits'] },
    { name: 'Hip Replacement', desc: 'Anterior approach', price: 19500, unit: '', perks: ['Surgeon & anaesthetist', 'Hospital stay', 'Implant', '6 physio sessions'] },
    { name: 'ACL Reconstruction', desc: 'Arthroscopic', price: 9800, unit: '', perks: ['Surgeon & anaesthetist', 'Facility fees', 'Knee brace', 'Rehab plan'] },
    { name: 'PRP Injection', desc: 'Ultrasound-guided', price: 450, unit: '', perks: ['Blood draw & prep', 'Guided injection', 'Follow-up call', '3-pack from $1,200'] }
  ]
};

const SURGEONS = [
  { name: 'Dr. Andrew Collins', role: 'Joint Replacement Surgeon, MD', img: '1612349317150-e413f6a5b16d', bg: '#E0E4FF', skin: '#E2B897', hair: '#2B2420', years: 20, langs: 'English', focus: 'Robotic knee & hip replacement', next: 'Tomorrow, 9:00 AM', today: false },
  { name: 'Dr. Priya Nair', role: 'Sports Medicine Surgeon, MD', img: '1659353888906-adb3e0041693', bg: '#FDF0D5', skin: '#C99779', hair: '#1D1715', years: 13, langs: 'English, Hindi, Urdu', focus: 'ACL, shoulder & sports injuries', next: 'Today, 3:30 PM', today: true },
  { name: 'Dr. Marcus Reed', role: 'Spine & Hand Surgeon, MD', img: '1666887360361-d4e8487f0026', bg: '#E2F2E8', skin: '#B9835F', hair: '#151112', years: 16, langs: 'English, Spanish', focus: 'Spine, hand & wrist', next: 'Today, 5:00 PM', today: true }
];

// NOTE: sample reviews for layout. Replace with real, verified patient reviews.
const REVIEWS = [
  { tag: 'Knee replacement', text: 'Walking my dog pain-free six weeks after my knee replacement. The robotic surgery and in-house physio made all the difference.', name: 'Patient name', meta: 'Knee replacement', bg: '#E0E4FF' },
  { tag: 'ACL', text: 'Dr. Nair got me back on the basketball court after my ACL tear. Clear plan, great rehab team.', name: 'Patient name', meta: 'ACL reconstruction', bg: '#FDF0D5' },
  { tag: 'Second opinion', text: 'I was told I needed back surgery elsewhere. Here, targeted physio and an injection fixed it.', name: 'Patient name', meta: 'Spine second opinion', bg: '#E2F2E8' },
  { tag: 'Walk-in clinic', text: 'Twisted my ankle on Saturday, walked in, had an X-ray and a brace within the hour. No ER wait.', name: 'Patient name', meta: 'Walk-in injury', bg: '#F3E8F3' },
  { tag: 'Hip replacement', text: 'Home the day after my hip replacement and driving in five weeks. Wish I had done it sooner.', name: 'Patient name', meta: 'Hip replacement', bg: '#E0E4FF' }
];

const FAQS = [
  { q: 'Do I need a referral to see an orthopedic surgeon?', a: 'No. You can book directly or use our walk-in injury clinic. Some insurance plans need a referral, so check your policy. You can upload X-rays and MRI scans when you book.' },
  { q: 'Will I definitely need surgery?', a: 'No. Most patients improve with physiotherapy, bracing or injections. We only recommend surgery when it is clearly the best option for your goals.' },
  { q: 'Do you treat sports injuries and fractures?', a: 'Yes. Our walk-in clinic sees sprains, strains and simple fractures Monday to Saturday, with same-day X-ray and casting on site.' },
  { q: 'How long do joint replacements last?', a: 'Modern knee and hip replacements last 20 years or more for most patients. Your surgeon will discuss what to expect for your age and activity level.' },
  { q: 'What does a surgery package include?', a: 'Surgeon and anaesthetist fees, the hospital or surgery center, implants where needed, follow-up visits and the listed physio sessions.' },
  { q: 'Do you accept Workers’ Comp and Medicare?', a: 'Yes. We accept Medicare, Workers’ Compensation and most major insurance plans, and offer 0% payment plans for self-pay patients.' },
  { q: 'When should I go to the ER instead?', a: 'Go to the ER for an obviously broken or deformed limb, bone through the skin, numbness or loss of movement, or a serious head or neck injury.' }
];

const SLOTS = ['8:30 AM','9:15 AM','10:00 AM','10:45 AM','11:30 AM','1:00 PM','1:45 PM','2:30 PM','3:15 PM','4:00 PM','4:45 PM','5:30 PM'];
const SYMPTOMS = ['Knee', 'Hip', 'Shoulder', 'Back or neck', 'Hand or wrist', 'Foot or ankle', 'Recent injury', 'Other'];

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
$('#procOpts').innerHTML = procNames.map((n, i) => `<button type="button" class="opt" data-proc="${esc(n)}" aria-pressed="${i === 0}">${n}</button>`).join('');
function renderPlanner(name) {
  const p = PLANNER[name], max = Math.max(...PLANNER[name].m.map(x => x[1]));
  const label = (d) => d === 0 ? 'Same day' : d === 1 ? 'Day 1' : d < 14 ? `${d} days` : `${Math.round(d / 7)} weeks`;
  $('#planOut').innerHTML = `
    <h3>${name}</h3>
    <p>Typical milestones after a straightforward procedure with our rehab program.</p>
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

/* ---------- JOINT MAP ---------- */
const AREAS = {
  shoulder: { label: 'Shoulder', intro: 'Pain lifting your arm, reaching overhead or sleeping on your side.', list: ['Rotator cuff tear', 'Frozen shoulder', 'Impingement', 'Dislocation', 'Shoulder arthritis', 'Labral tear'], book: 'Rotator Cuff Repair' },
  spine: { label: 'Back & neck', intro: 'Back or neck pain, sciatica and nerve pain down the arms or legs.', list: ['Herniated disc', 'Sciatica', 'Spinal stenosis', 'Pinched nerve', 'Degenerative disc', 'Neck pain'], book: 'Spine & Disc Surgery' },
  hand: { label: 'Elbow, wrist & hand', intro: 'Numbness, weak grip or pain with typing and lifting.', list: ['Carpal tunnel', 'Tennis elbow', 'Trigger finger', 'Wrist fracture', 'Ganglion cyst', 'Arthritis'], book: 'Carpal Tunnel Release' },
  hip: { label: 'Hip', intro: 'Groin or hip pain when walking, climbing stairs or getting up.', list: ['Hip arthritis', 'Labral tear', 'Bursitis', 'Hip fracture', 'Avascular necrosis', 'Hip impingement'], book: 'Hip Replacement' },
  knee: { label: 'Knee', intro: 'Pain, swelling, locking or giving way in the knee.', list: ['Knee arthritis', 'ACL tear', 'Meniscus tear', 'Runner’s knee', 'Patellar tendinitis', 'Knee instability'], book: 'Knee Replacement' },
  foot: { label: 'Foot & ankle', intro: 'Pain standing, walking or running, including heel pain.', list: ['Ankle sprain', 'Achilles tendon', 'Bunions', 'Plantar fasciitis', 'Ankle fracture', 'Flat feet'], book: 'Foot & Ankle Surgery' }
};
const chips = $('#areaChips'), areaCard = $('#areaCard');
chips.innerHTML = Object.entries(AREAS).map(([k, a]) => `<button type="button" role="tab" data-area="${k}" aria-selected="false">${a.label}</button>`).join('');
function showArea(key) {
  const a = AREAS[key];
  $$('.spot').forEach(sp => sp.classList.toggle('active', sp.dataset.area === key));
  $$('button', chips).forEach(b => b.setAttribute('aria-selected', b.dataset.area === key));
  areaCard.style.animation = 'none'; void areaCard.offsetWidth; areaCard.style.animation = '';
  areaCard.innerHTML = `<h3>${a.label} pain</h3><p>${a.intro}</p><ul class="area__list">${a.list.map(i => `<li>${i}</li>`).join('')}</ul>
    <button type="button" class="btn btn--blue" data-book data-reason="New Orthopedic Consultation">Book a ${a.label.toLowerCase()} assessment</button>`;
}
$('#body').addEventListener('click', (e) => { const sp = e.target.closest('.spot'); if (sp) showArea(sp.dataset.area); });
chips.addEventListener('click', (e) => { const b = e.target.closest('[data-area]'); if (b) showArea(b.dataset.area); });
showArea('knee');

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
        <span>${icon('bone')}${d.focus}</span>
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
  { name: 'New Orthopedic Consultation', icon: 'bone', sub: 'Joint or bone problem · 30 min' },
  { name: 'Consult + X-ray', icon: 'xray', sub: 'Same-day imaging · 45 min' },
  { name: 'Second Opinion', icon: 'doc', sub: 'Review a recommendation · 45 min' },
  { name: 'Knee Replacement', icon: 'knee', sub: 'Robotic · from $18,500' },
  { name: 'Hip Replacement', icon: 'hip', sub: 'Anterior · from $19,500' },
  { name: 'ACL Reconstruction', icon: 'run', sub: 'Arthroscopic · from $9,800' },
  { name: 'PRP & Joint Injections', icon: 'syringe', sub: 'Non-surgical · from $450' },
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
const fileInput = $('#fileInput'), FILE_HINT = 'X-ray, MRI, CT or reports · PDF, JPG, PNG';
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
    $('#summary').innerHTML = row('Reason', b.reason) + row('Type', b.mode) + row('Specialist', b.doctor) + row('Date', b.date) + row('Time', b.time) + row('Patient', b.name) + row('Scans', b.files ? `${b.files} uploaded` : '');
    $('#doneNote').textContent = b.mode === 'Video consult'
      ? 'We\'ll text you a secure video link 10 minutes before your appointment. Have your X-rays and MRI ready.'
      : 'Please arrive 15 minutes early with your ID, insurance card and any X-rays or MRI. Wear loose clothing so we can examine the joint.';
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
