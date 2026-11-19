/* =========================================================
   HeartWise Cardiology — script
   All content is dummy data. Edit prices and text below.
   Photos: free Unsplash images (unsplash.com/license).
   ========================================================= */
(() => {
'use strict';

const IMG = (id, w = 800) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=${w}`;
const photo = (id, alt = '', w) => id ? `<img class="photo" src="${IMG(id, w)}" alt="${alt}" loading="lazy" decoding="async" onerror="this.remove()">` : '';

/* ---------- DATA ---------- */
const ICONS = {
  heart: '<path d="M12 21s-8-5-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 6-8 11-8 11Z"/>',
  pulse: '<path d="M2 12h4l3-8 4 16 3-8h6"/>',
  pain: '<path d="M12 21s-8-5-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 6-8 11-8 11Z"/><path d="M12 8l-2 4h4l-2 4"/>',
  gauge: '<path d="M4 18a8 8 0 1 1 16 0"/><path d="M12 18l4-6"/>',
  drop: '<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z"/>',
  rhythm: '<path d="M2 12h3l2-4 3 8 2-6 2 4h3l2-2h3"/>',
  lungs: '<path d="M12 4v8M12 12c-2-1-4 0-4 3v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3c0-5 3-9 5-9 1 0 2 1 2 2M12 12c2-1 4 0 4 3v4a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3c0-5-3-9-5-9-1 0-2 1-2 2"/>',
  device: '<rect x="6" y="3" width="12" height="18" rx="4"/><path d="M9 12h2l1-2 1 4 1-2h1"/>',
  shield: '<path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4Z"/><path d="M9 12l2 2 4-4"/>',
  apple: '<path d="M12 7c-2-2-6-1.5-6 3 0 5 3 10 6 10s6-5 6-10c0-4.5-4-5-6-3Z"/><path d="M12 7c0-2 1-3 3-4"/>',
  video: '<rect x="2" y="6" width="14" height="12" rx="2"/><path d="M16 10l6-3v10l-6-3"/>',
  doc: '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  steth: '<path d="M6 3v6a4 4 0 0 0 8 0V3"/><path d="M10 13v3a5 5 0 0 0 10 0v-2"/><circle cx="20" cy="12" r="2"/>',
  lang: '<path d="M4 5h8M8 3v2M6 5c0 4 3 7 6 8M10 5c0 3-3 7-6 8M13 21l4-10 4 10M14.5 17h5"/>',
  echo: '<path d="M4 12a8 8 0 0 1 16 0"/><path d="M7 12a5 5 0 0 1 10 0"/><path d="M10 12a2 2 0 0 1 4 0"/><path d="M12 12v8"/>',
  run: '<circle cx="15" cy="4" r="2"/><path d="M6 21l4-7 3 2 1 5M10 14l2-6 5 3 3-3M12 8l-4 1-2 3"/>'
};

const SERVICES = [
  { name: 'Cardiology Consultation', cat: 'consult', icon: 'steth', desc: 'A full specialist assessment of your heart health.', price: 250, mins: 45, incl: ['History & exam', 'ECG included', 'Written plan for your GP'] },
  { name: 'Chest Pain Clinic', cat: 'clinic', icon: 'pain', desc: 'Fast-track assessment of chest pain and tightness.', price: 295, mins: 60, incl: ['Same-week slots', 'ECG & blood tests', 'Stress test if needed'] },
  { name: 'Hypertension Clinic', cat: 'clinic', icon: 'gauge', desc: 'Get high blood pressure under control for good.', price: 220, mins: 40, incl: ['24-hr BP monitoring', 'Medication review', 'Lifestyle plan'] },
  { name: 'Palpitations & AFib', cat: 'clinic', icon: 'rhythm', desc: 'Diagnosis and treatment of irregular heartbeats.', price: 260, mins: 45, incl: ['Holter monitoring', 'Stroke risk review', 'Rhythm control options'] },
  { name: 'Cholesterol Clinic', cat: 'prevent', icon: 'drop', desc: 'Lipid testing and tailored treatment to protect your arteries.', price: 190, mins: 30, incl: ['Advanced lipid panel', 'Statin guidance', 'Diet coaching'] },
  { name: 'Heart Failure Clinic', cat: 'clinic', icon: 'lungs', desc: 'Ongoing care to manage symptoms and stay out of hospital.', price: 240, mins: 45, incl: ['Echo monitoring', 'Medication titration', 'Nurse follow-up'] },
  { name: 'Pacemaker Follow-up', cat: 'clinic', icon: 'device', desc: 'Device checks and remote monitoring for pacemakers and ICDs.', price: 180, mins: 30, incl: ['Device interrogation', 'Battery check', 'Remote monitoring'] },
  { name: 'Preventive Heart Check', cat: 'prevent', icon: 'shield', desc: 'Know your risk early, even if you feel fine.', price: 349, mins: 60, incl: ['ECG & echo', 'Cholesterol & glucose', 'Risk score & plan'] },
  { name: 'Sports Cardiology', cat: 'prevent', icon: 'run', desc: 'Heart screening for athletes and active adults.', price: 320, mins: 60, incl: ['Exercise ECG', 'Echo', 'Training advice'] },
  { name: 'Second Opinion', cat: 'consult', icon: 'doc', desc: 'Expert review of your diagnosis or treatment plan.', price: 280, mins: 45, incl: ['Review of reports', 'Consultation', 'Written opinion'] },
  { name: 'Video Consultation', cat: 'consult', icon: 'video', desc: 'Follow-ups and results reviews from home.', price: 160, mins: 20, incl: ['Secure video call', 'E-prescriptions', 'Results review'] },
  { name: 'Heart-Healthy Living', cat: 'prevent', icon: 'apple', desc: 'Nutrition and exercise programs led by our cardiac team.', price: 120, mins: 45, incl: ['Dietitian session', 'Exercise plan', 'Progress tracking'] }
];

const TESTS = [
  { name: 'ECG (Electrocardiogram)', tag: 'Results in 10 min', icon: 'pulse', img: '1625134673337-519d4d10b313', short: 'Records your heart’s electrical activity.', more: 'Quick, painless test that checks heart rhythm and signs of strain or past heart attack.', price: 75, time: '10 min' },
  { name: 'Echocardiogram', tag: 'Most requested', icon: 'echo', img: '1758691462353-36b215702253', short: 'Ultrasound of your heart’s structure and pumping.', more: 'Shows heart valves, chamber size and how strongly your heart pumps. No radiation.', price: 350, time: '45 min' },
  { name: 'Exercise Stress Test', tag: 'Same week', icon: 'run', img: '1758691462123-8a17ae95d203', short: 'ECG while you walk on a treadmill.', more: 'Checks how your heart copes with effort and helps find narrowed arteries.', price: 295, time: '60 min' },
  { name: 'Holter Monitor', tag: '24 to 72 hours', icon: 'device', img: '1532938911079-1b06ac7ceec7', short: 'Wearable ECG to catch irregular beats.', more: 'A small recorder you wear at home to capture palpitations and rhythm problems.', price: 220, time: '24–72 hrs' },
  { name: '24-hr Blood Pressure', tag: 'Accurate readings', icon: 'gauge', img: '1758691462878-6edc3d3da1be', short: 'Ambulatory BP monitoring through day and night.', more: 'Gives a true picture of your blood pressure away from the clinic.', price: 180, time: '24 hrs' },
  { name: 'Cardiac Blood Tests', tag: 'On-site lab', icon: 'drop', img: '1618939304347-e91b1f33d2ab', short: 'Cholesterol, glucose, troponin and more.', more: 'Fast lab tests that help assess heart risk and damage.', price: 95, time: '10 min' }
];

const PRICES = {
  visits: [
    { name: 'New Patient Consult', desc: '45 minutes', price: 250, unit: '/visit', perks: ['Full cardiac assessment', 'ECG included', 'Written report'] },
    { name: 'Consult + Echo', desc: 'Most popular first visit', price: 549, unit: '', featured: true, perks: ['Cardiology consultation', 'Echocardiogram', 'ECG included', 'Same-day results'] },
    { name: 'Follow-up Visit', desc: '20 minutes', price: 160, unit: '/visit', perks: ['Review progress', 'Medication changes', 'Test results'] },
    { name: 'Video Consult', desc: '20 minutes, online', price: 160, unit: '/visit', perks: ['From home', 'E-prescriptions', 'Results review'] }
  ],
  packages: [
    { name: 'Basic Heart Check', desc: 'Screening essentials', price: 299, unit: '', perks: ['Cardiology review', 'ECG', 'Cholesterol & glucose', 'BP check'] },
    { name: 'Complete Heart Check', desc: 'Best for over 40s', price: 699, unit: '', featured: true, perks: ['Everything in Basic', 'Echocardiogram', 'Exercise stress test', 'Advanced lipids', 'Personal risk plan'] },
    { name: 'Athlete Screen', desc: 'For active adults', price: 499, unit: '', perks: ['Sports cardiology review', 'Exercise ECG', 'Echocardiogram', 'Training advice'] },
    { name: 'Executive Cardiac', desc: 'Our most detailed check', price: 1199, unit: '', perks: ['Complete Heart Check', '24-hr Holter & BP', 'Coronary calcium referral', 'Priority follow-up'] }
  ]
};

const DOCTORS = [
  { name: 'Dr. Michael Grant', role: 'Interventional Cardiologist, MD', img: '1612349317150-e413f6a5b16d', bg: '#FBE1E5', skin: '#E2B897', hair: '#2B2420', years: 22, langs: 'English', focus: 'Coronary disease', next: 'Tomorrow, 10:30 AM', today: false },
  { name: 'Dr. Sofia Alvarez', role: 'Preventive Cardiologist, MD', img: '1659353888906-adb3e0041693', bg: '#E8EEF8', skin: '#EBC4A6', hair: '#3A2418', years: 14, langs: 'English, Spanish', focus: 'Prevention & women’s heart health', next: 'Today, 3:00 PM', today: true },
  { name: 'Dr. Hassan Raza', role: 'Electrophysiologist, MD', img: '1625134673337-519d4d10b313', bg: '#E2F2E8', skin: '#C9946F', hair: '#1A1513', years: 11, langs: 'English, Urdu', focus: 'AFib & arrhythmia', next: 'Today, 4:45 PM', today: true }
];

// NOTE: sample reviews for layout. Replace with real, verified patient reviews.
const REVIEWS = [
  { tag: 'Chest pain clinic', text: 'Seen within two days for chest pain. ECG, echo and a stress test in one visit, and a clear answer by the end of it.', name: 'Patient name', meta: 'Chest pain clinic', bg: '#FBE1E5' },
  { tag: 'AFib', text: 'Dr. Raza explained my AFib in a way I finally understood. My palpitations are under control and I feel safe.', name: 'Patient name', meta: 'Patient since 2022', bg: '#E2F2E8' },
  { tag: 'Blood pressure', text: 'After years of high blood pressure, the hypertension clinic got my numbers to normal in three months.', name: 'Patient name', meta: 'Hypertension clinic', bg: '#E8EEF8' },
  { tag: 'Heart check', text: 'The complete heart check gave me real peace of mind. Organised, on time and very thorough.', name: 'Patient name', meta: 'Complete Heart Check', bg: '#FDF0D5' },
  { tag: 'Family care', text: 'They looked after my father after his heart attack with so much patience. We trust them completely.', name: 'Patient name', meta: 'Family member', bg: '#FBE1E5' }
];

const FAQS = [
  { q: 'Do I need a referral to see a cardiologist?', a: 'No, you can book directly. Some insurance plans need a referral to cover the visit, so check your policy. If you have a referral or previous reports, you can upload them when booking.' },
  { q: 'How should I prepare for my first visit?', a: 'Bring a photo ID, insurance card, a list of medications and any previous heart test results. Wear comfortable clothes and shoes in case you have a stress test.' },
  { q: 'Can I eat before my tests?', a: 'For most tests, yes. For fasting blood tests, avoid food for 8 to 12 hours. For a stress test, have a light meal 2 hours before and avoid caffeine on the day.' },
  { q: 'How soon will I get my results?', a: 'ECG and blood pressure results are reviewed during your visit. Echo and stress test results are usually explained the same day. Holter results take 3 to 5 days.' },
  { q: 'Do you accept insurance?', a: 'Yes. We are in-network with most major plans including Medicare. Self-pay prices are listed on this page and payment plans are available.' },
  { q: 'What if I need a procedure like a stent?', a: 'Our interventional cardiologists perform procedures at partner hospitals and will guide you through every step, from preparation to recovery.' },
  { q: 'What is your cancellation policy?', a: 'Please give at least 24 hours notice to cancel or reschedule, so another patient can use the appointment.' }
];

const AGES = [{ id: 0, label: 'Under 40' }, { id: 1, label: '40–54' }, { id: 2, label: '55–64' }, { id: 3, label: '65+' }];
const RISKS = [
  { id: 'bp', label: 'High blood pressure', pts: 2 },
  { id: 'chol', label: 'High cholesterol', pts: 2 },
  { id: 'diab', label: 'Diabetes', pts: 2 },
  { id: 'smoke', label: 'I smoke or vape', pts: 2 },
  { id: 'family', label: 'Family history of heart disease', pts: 1 },
  { id: 'weight', label: 'Overweight', pts: 1 },
  { id: 'inactive', label: 'Little regular exercise', pts: 1 },
  { id: 'stress', label: 'High stress or poor sleep', pts: 1 },
  { id: 'chest', label: 'Chest discomfort on exertion', pts: 0, symptom: true },
  { id: 'palp', label: 'Palpitations or skipped beats', pts: 0, symptom: true }
];

const SLOTS = ['8:00 AM','8:45 AM','9:30 AM','10:30 AM','11:15 AM','12:00 PM','1:30 PM','2:15 PM','3:00 PM','3:45 PM','4:45 PM','5:30 PM'];
const SYMPTOMS = ['Chest pain', 'Shortness of breath', 'Palpitations', 'Dizziness', 'Swollen ankles', 'High BP readings', 'Fatigue', 'None'];

/* ---------- HELPERS ---------- */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const icon = (n) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[n]}</svg>`;
const esc = (s) => String(s).replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
const usd = (n) => '$' + n.toLocaleString('en-US');

/* ---------- LIVE BPM (decorative) ---------- */
setInterval(() => { const el = $('#bpm'); if (el) el.textContent = 68 + Math.round(Math.random() * 8); }, 2200);

/* ---------- SERVICES ---------- */
const sgrid = $('#sgrid');
sgrid.innerHTML = SERVICES.map(s => `
  <article class="scard reveal" data-cat="${s.cat}" tabindex="0" aria-label="${esc(s.name)}, from ${usd(s.price)}">
    <span class="scard__ic">${icon(s.icon)}</span>
    <h3>${s.name}</h3>
    <p class="scard__desc">${s.desc}</p>
    <p class="scard__price">From <strong>${usd(s.price)}</strong></p>
    <div class="scard__more">
      <ul>${s.incl.map(i => `<li>${i}</li>`).join('')}</ul>
      <div class="scard__meta"><span><strong>${usd(s.price)}</strong></span><span>${s.mins} min</span></div>
      <button type="button" class="btn btn--blue btn--block" data-book data-reason="${esc(s.name)}">Book now</button>
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

/* ---------- TESTS ---------- */
$('#testsGrid').innerHTML = TESTS.map(t => `
  <article class="test reveal" tabindex="0">
    <div class="test__art" aria-hidden="true">${icon(t.icon)}</div>
    ${photo(t.img, '', 700)}
    <span class="test__tag">${t.tag}</span>
    <h3>${t.name}</h3>
    <p class="test__short">${t.short}</p>
    <div class="test__more"><div>
      <p>${t.more}</p>
      <div class="test__row"><span><strong>${usd(t.price)}</strong> self-pay</span><span>${t.time}</span></div>
      <button type="button" class="btn btn--white btn--block" data-book data-reason="${esc(t.name)}">Book this test</button>
    </div></div>
  </article>`).join('');

/* ---------- HEART CHECK ---------- */
const check = { age: null, risks: new Set() };
$('#ageOpts').innerHTML = AGES.map(a => `<button type="button" class="opt" data-age="${a.id}" aria-pressed="false">${a.label}</button>`).join('');
$('#riskOpts').innerHTML = RISKS.map(r => `<label class="risk"><input type="checkbox" value="${r.id}"><span>${r.label}</span></label>`).join('');
function renderCheck() {
  const arc = $('#meterArc'), needle = $('#needle'), tag = $('#meterTag'), title = $('#meterTitle'), body = $('#meterBody'), btn = $('#meterBtn');
  if (check.age === null && !check.risks.size) return;
  let score = check.age || 0, symptom = false;
  check.risks.forEach(id => { const r = RISKS.find(x => x.id === id); score += r.pts; if (r.symptom) symptom = true; });
  const pct = Math.min(score / 10, 1) * 100;
  let level, color;
  if (symptom || score >= 6) { level = 'high'; color = '#D7263D'; }
  else if (score >= 3) { level = 'mid'; color = '#F59E0B'; }
  else { level = 'low'; color = '#15803D'; }
  const shown = symptom ? Math.max(pct, 75) : pct;
  arc.setAttribute('stroke', color);
  arc.setAttribute('stroke-dasharray', `${shown} 100`);
  needle.style.transform = `rotate(${-90 + shown * 1.8}deg)`;
  const copy = {
    low:  ['result__tag--ok', 'Low concern', 'Keep up the healthy habits', 'Few risk factors selected. A routine heart check every few years is still a good idea, especially as you get older.', 'Preventive Heart Check', 'Book a heart check'],
    mid:  ['result__tag--warn', 'Worth checking', 'A heart check is recommended', 'You have some risk factors that add up. A preventive check with ECG and cholesterol testing can catch problems early.', 'Preventive Heart Check', 'Book a preventive check'],
    high: ['result__tag--urgent', symptom ? 'See a cardiologist soon' : 'Higher concern', symptom ? 'Your symptoms should be checked' : 'Please see a cardiologist', symptom ? 'Chest discomfort or palpitations should be assessed by a cardiologist. If pain is severe, lasts more than a few minutes or comes with breathlessness or sweating, call 911 now.' : 'Several risk factors together raise the chance of heart problems. A full assessment will give you a clear picture and a plan.', symptom ? 'Chest Pain Clinic' : 'Cardiology Consultation', 'Book a priority visit']
  }[level];
  tag.className = 'result__tag ' + copy[0]; tag.textContent = copy[1];
  title.textContent = copy[2]; body.textContent = copy[3];
  btn.dataset.reason = copy[4]; btn.textContent = copy[5];
}
$('#ageOpts').addEventListener('click', (e) => { const b = e.target.closest('[data-age]'); if (!b) return; check.age = +b.dataset.age; $$('#ageOpts .opt').forEach(x => x.setAttribute('aria-pressed', x === b)); renderCheck(); });
$('#riskOpts').addEventListener('change', (e) => { const v = e.target.value; e.target.checked ? check.risks.add(v) : check.risks.delete(v); renderCheck(); });

/* ---------- DOCTORS ---------- */
const docFallback = (d) => `<svg viewBox="0 0 200 200" preserveAspectRatio="xMidYMax slice" aria-hidden="true"><rect width="200" height="200" fill="${d.bg}"/><path d="M30 200c0-46 30-72 70-72s70 26 70 72Z" fill="#fff"/><path d="M78 130l22 46 22-46" fill="${d.bg}"/><path d="M86 118h28v20H86Z" fill="${d.skin}"/><path d="M100 22c-28 0-46 22-46 52 0 34 20 56 46 56s46-22 46-56c0-30-18-52-46-52Z" fill="${d.skin}"/><path d="M52 72c-2-36 20-56 50-56 32 0 52 22 46 58-8-20-26-32-48-32-20 0-38 10-48 30Z" fill="${d.hair}"/><circle cx="84" cy="80" r="3.5" fill="${d.hair}"/><circle cx="116" cy="80" r="3.5" fill="${d.hair}"/><path d="M90 102q10 7 20 0" stroke="#9C5A4E" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M70 144c-6 18 0 30 12 32M82 176a6 6 0 1 0 0-1" stroke="#1B2B40" stroke-width="3.5" fill="none" stroke-linecap="round"/></svg>`;
$('#docGrid').innerHTML = DOCTORS.map(d => `
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
        <span>${icon('heart')}${d.focus}</span>
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
      <button type="button" class="btn ${p.featured ? 'btn--blue' : 'btn--line'} btn--block" data-book data-reason="${esc(ptab === 'packages' ? p.name : p.name === 'Consult + Echo' ? 'Consult + Echo' : '')}" data-mode="${p.name === 'Video Consult' ? 'Video consult' : ''}">Book ${ptab === 'packages' ? 'package' : 'now'}</button>
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
  const f = $$('button:not([hidden]):not(:disabled), input:not([type=radio]):not([type=file]), input[type=file], input[type=radio]:checked, select, textarea', m).filter(el => el.offsetParent !== null);
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
  { name: 'Cardiology Consultation', icon: 'steth', sub: 'New patient · 45 min' },
  { name: 'Chest Pain Clinic', icon: 'pain', sub: 'Fast-track · 60 min' },
  { name: 'Palpitations & AFib', icon: 'rhythm', sub: 'Rhythm clinic · 45 min' },
  { name: 'Hypertension Clinic', icon: 'gauge', sub: 'Blood pressure · 40 min' },
  { name: 'Preventive Heart Check', icon: 'shield', sub: 'Screening · 60 min' },
  { name: 'Echocardiogram', icon: 'echo', sub: 'Heart ultrasound · 45 min' },
  { name: 'Follow-up Visit', icon: 'user', sub: 'Existing patient · 20 min' },
  { name: 'Second Opinion', icon: 'doc', sub: 'Report review · 45 min' }
];
const reasonGrid = $('#reasonGrid');
function renderReasons(extra) {
  const list = extra && !REASONS.some(r => r.name === extra) ? [{ name: extra, icon: 'heart', sub: 'Selected' }, ...REASONS] : REASONS;
  reasonGrid.innerHTML = list.map(r => `<label class="choice"><input type="radio" name="reason" value="${esc(r.name)}"><span class="choice__ic">${icon(r.icon)}</span><span><strong>${r.name}</strong><small>${r.sub}</small></span></label>`).join('');
}
reasonGrid.addEventListener('change', (e) => { state.reason = e.target.value; $('#err1').hidden = true; updateSel(); });

$('#docPick').innerHTML = [{ name: 'First available', role: 'Fastest appointment', bg: '#F6ECEE' }, ...DOCTORS].map((d, i) => `
  <label class="dp"><input type="radio" name="doctor" value="${esc(d.name)}" ${i === 0 ? 'checked' : ''}>
    <span><i style="background:${d.bg}">${i === 0 ? '⚡' : d.name.split(' ')[1][0]}</i><span><strong>${d.name}</strong><small>${d.role.split(',')[0]}</small></span></span></label>`).join('');
$('#docPick').addEventListener('change', (e) => { state.doctor = e.target.value; state.time = ''; renderTimes(); updateSel(); });

$('#symptoms').innerHTML = SYMPTOMS.map(s => `<label class="sym"><input type="checkbox" name="symptoms" value="${s}"><span>${s}</span></label>`).join('');
const fileInput = $('#fileInput');
fileInput.addEventListener('change', () => { const n = fileInput.files.length; $('#fileText').textContent = n ? `${n} file${n > 1 ? 's' : ''} selected: ${[...fileInput.files].map(f => f.name).join(', ')}` : 'PDF, JPG or PNG · tap to choose files'; });

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
    const b = { reason: state.reason, mode: fd.get('mode'), doctor: state.doctor, date: fmtDate(state.date), time: state.time, name: fd.get('name'), payment: fd.get('payment'), symptoms: fd.getAll('symptoms').join(', '), files: fileInput.files.length };
    // TODO: POST booking data (and uploaded files) to your secure backend / GHL calendar here
    const row = (k, v) => v ? `<div><dt>${k}</dt><dd>${esc(v)}</dd></div>` : '';
    $('#summary').innerHTML = row('Visit', b.reason) + row('Type', b.mode) + row('Cardiologist', b.doctor) + row('Date', b.date) + row('Time', b.time) + row('Patient', b.name) + row('Documents', b.files ? `${b.files} uploaded` : '');
    $('#doneNote').textContent = b.mode === 'Video consult'
      ? 'We\'ll text you a secure video link 10 minutes before your appointment.'
      : 'Please arrive 15 minutes early with your ID, insurance card and medication list. Wear comfortable shoes in case a stress test is needed.';
    showStep(4); nextBtn.focus();
  } else closeModal(bookModal);
});
backBtn.addEventListener('click', () => showStep(state.step - 1));

function openBooking({ reason, mode, doctor } = {}) {
  form.reset(); Object.assign(state, { step: 1, reason: '', doctor: 'First available', date: null, time: '' });
  $('#fileText').textContent = 'PDF, JPG or PNG · tap to choose files';
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
