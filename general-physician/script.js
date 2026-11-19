/* =========================================================
   CarePoint Family Clinic — script
   All content is dummy data. Edit prices and text below.
   ========================================================= */
(() => {
'use strict';

/* ---------- DATA ---------- */
const ICONS = {
  steth: '<path d="M6 3v6a4 4 0 0 0 8 0V3"/><path d="M10 13v3a5 5 0 0 0 10 0v-2"/><circle cx="20" cy="12" r="2"/>',
  thermo: '<path d="M14 14.8V4a2 2 0 1 0-4 0v10.8a4 4 0 1 0 4 0Z"/><path d="M12 9v7"/>',
  clipboard: '<path d="M8 3h8v4H8Z"/><path d="M16 5h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2M9 12l2 2 4-4"/>',
  syringe: '<path d="M18 2l4 4M17 7l-9 9-4 1 1-4 9-9M14 4l6 6M7 13l4 4"/>',
  heart: '<path d="M12 21s-8-5-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 6-8 11-8 11Z"/><path d="M7 12h3l1-2 2 4 1-2h3"/>',
  drop: '<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z"/><path d="M9 14h6M12 11v6"/>',
  lungs: '<path d="M12 4v8M12 12c-2-1-4 0-4 3v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3c0-5 3-9 5-9 1 0 2 1 2 2M12 12c2-1 4 0 4 3v4a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3c0-5-3-9-5-9-1 0-2 1-2 2"/>',
  baby: '<circle cx="12" cy="8" r="5"/><path d="M10 8h.01M14 8h.01M10.5 10.5q1.5 1 3 0M6 21c0-3 3-5 6-5s6 2 6 5"/>',
  female: '<circle cx="12" cy="9" r="5"/><path d="M12 14v7M9 18h6"/>',
  brain: '<path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 6 1V5a2 2 0 0 0-3-1ZM15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-6 1"/>',
  plane: '<path d="M2 16l20-8-6 12-3-5-5-1Z"/><path d="M13 15l-2 4"/>',
  scalpel: '<path d="M20 4L9 15l-3 1 1-3L18 2Z"/><path d="M3 21l4-4"/>',
  pill: '<rect x="4" y="9" width="16" height="6" rx="3" transform="rotate(-45 12 12)"/><path d="M9 9l6 6"/>',
  flask: '<path d="M9 3h6M10 3v6L4 19a1 1 0 0 0 1 2h14a1 1 0 0 0 1-2l-6-10V3"/><path d="M7 15h10"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
  lang: '<path d="M4 5h8M8 3v2M6 5c0 4 3 7 6 8M10 5c0 3-3 7-6 8M13 21l4-10 4 10M14.5 17h5"/>'
};

const SERVICES = [
  { name: 'Same-day Sick Visits', cat: 'everyday', icon: 'thermo', desc: 'Colds, flu, infections, rashes and sudden illness.', price: 95, mins: 15, incl: ['Exam and diagnosis', 'Prescriptions if needed', 'Sick note on request'] },
  { name: 'Annual Physical', cat: 'prevent', icon: 'clipboard', desc: 'A full yearly check-up to stay ahead of your health.', price: 180, mins: 40, incl: ['Full physical exam', 'Blood pressure & BMI', 'Basic blood panel'] },
  { name: 'Diabetes Care', cat: 'chronic', icon: 'drop', desc: 'Ongoing management, monitoring and medication reviews.', price: 120, mins: 30, incl: ['HbA1c monitoring', 'Diet & lifestyle plan', 'Foot and eye checks'] },
  { name: 'Blood Pressure & Heart', cat: 'chronic', icon: 'heart', desc: 'Hypertension, cholesterol and heart health checks.', price: 110, mins: 30, incl: ['BP monitoring', 'ECG on site', 'Cholesterol testing'] },
  { name: 'Vaccinations', cat: 'prevent', icon: 'syringe', desc: 'Flu, COVID-19, tetanus, HPV, shingles and more.', price: 35, mins: 10, incl: ['Adult & child vaccines', 'Flu shots in season', 'Vaccine records'] },
  { name: 'Child & Baby Health', cat: 'family', icon: 'baby', desc: 'Well-baby checks, growth tracking and childhood illness.', price: 95, mins: 20, incl: ['Growth checks', 'Childhood vaccines', 'School forms'] },
  { name: 'Women’s Health', cat: 'family', icon: 'female', desc: 'Pap smears, contraception, menopause and more.', price: 120, mins: 30, incl: ['Cervical screening', 'Contraception advice', 'Menopause support'] },
  { name: 'Mental Health', cat: 'chronic', icon: 'brain', desc: 'Support for stress, anxiety, low mood and sleep.', price: 120, mins: 30, incl: ['Confidential assessment', 'Treatment plan', 'Therapy referrals'] },
  { name: 'Asthma & Allergies', cat: 'chronic', icon: 'lungs', desc: 'Inhaler reviews, allergy management and testing.', price: 105, mins: 20, incl: ['Lung function test', 'Inhaler technique', 'Action plan'] },
  { name: 'Lab Tests & ECG', cat: 'prevent', icon: 'flask', desc: 'On-site blood draws and ECG with fast results.', price: 45, mins: 10, incl: ['Blood tests on site', 'Results in portal', 'Doctor review'] },
  { name: 'Minor Procedures', cat: 'everyday', icon: 'scalpel', desc: 'Stitches, wound care, mole checks and ear cleaning.', price: 150, mins: 30, incl: ['Wound care & stitches', 'Skin tag removal', 'Ear wax removal'] },
  { name: 'Travel Medicine', cat: 'prevent', icon: 'plane', desc: 'Travel vaccines and advice before you go abroad.', price: 85, mins: 20, incl: ['Destination advice', 'Travel vaccines', 'Malaria prevention'] }
];

const NEEDS = [
  { id: 'sick', label: 'New illness or symptom', icon: 'thermo' },
  { id: 'chronic', label: 'Ongoing condition', icon: 'heart' },
  { id: 'check', label: 'Check-up or screening', icon: 'clipboard' },
  { id: 'rx', label: 'Prescription refill', icon: 'pill' },
  { id: 'vaccine', label: 'Vaccine', icon: 'syringe' },
  { id: 'child', label: 'My child is unwell', icon: 'baby' },
  { id: 'mind', label: 'Stress, mood or sleep', icon: 'brain' },
  { id: 'results', label: 'Test results', icon: 'flask' }
];
const URGENCY = [{ id: 'today', label: 'Today' }, { id: 'week', label: 'This week' }, { id: 'any', label: 'No rush' }];

function recommend(need, urg) {
  const R = {
    sick:    { today: ['urgent', 'Same-day sick visit', 'Come in today. We keep slots free every day for new illness. If symptoms are mild, a video call is also an option.', 'Same-day Sick Visit', 'In clinic'],
               week:  ['warn', 'Standard GP appointment', 'Book a regular visit this week. If you get worse before then, call us for a same-day slot.', 'Same-day Sick Visit', 'In clinic'],
               any:   ['ok', 'Video consultation', 'A quick video call is a convenient way to get advice on mild symptoms.', 'Same-day Sick Visit', 'Video call'] },
    chronic: { any:   ['ok', 'Chronic care review', 'Book a 30-minute review with your usual doctor to check your condition and medication.', 'Chronic Condition Review', 'In clinic'] },
    check:   { any:   ['ok', 'Annual physical', 'Book a 40-minute check-up. Please fast for 8 hours if you want blood tests the same day.', 'Annual Physical', 'In clinic'] },
    rx:      { any:   ['ok', 'Repeat prescription request', 'Existing patients can request refills online. Most are ready within 2 working days.', 'RX', ''] },
    vaccine: { any:   ['ok', 'Nurse vaccine appointment', 'A quick 10-minute visit with our nurse. Bring your vaccine record if you have it.', 'Vaccination', 'In clinic'] },
    child:   { today: ['urgent', 'Same-day child appointment', 'We prioritise unwell children. If your child has trouble breathing, is very drowsy or has a rash that does not fade when pressed, call 911.', 'Child Health Visit', 'In clinic'],
               any:   ['warn', 'Child health visit', 'Book a visit with one of our family doctors. We see babies, children and teens.', 'Child Health Visit', 'In clinic'] },
    mind:    { any:   ['ok', 'Mental health consultation', 'A confidential 30-minute appointment in clinic or by video. If you are in crisis, call or text 988 any time.', 'Mental Health Consultation', 'Video call'] },
    results: { any:   ['ok', 'Results call with your doctor', 'A short video or phone appointment to go through your results and next steps.', 'Test Results Review', 'Video call'] }
  };
  const set = R[need]; return set[urg] || set.any || set.today;
}

const PRICES = {
  visits: [
    { name: 'Standard Visit', desc: '15 minutes, in clinic', price: 95, unit: '/visit', perks: ['One health concern', 'Exam and diagnosis', 'Prescriptions if needed'] },
    { name: 'Long Visit', desc: '30 minutes, in clinic', price: 150, unit: '/visit', featured: true, perks: ['Multiple concerns', 'Chronic care reviews', 'Detailed treatment plan', 'Referrals included'] },
    { name: 'Video Consult', desc: '15 minutes, online', price: 65, unit: '/visit', perks: ['From home or work', 'E-prescriptions', 'Sick notes'] },
    { name: 'Home Visit', desc: 'Within 10 miles', price: 180, unit: '/visit', perks: ['Elderly and housebound', 'Full exam at home', 'Same-day when possible'] }
  ],
  checks: [
    { name: 'Essential Check', desc: 'Basic yearly screening', price: 149, unit: '', perks: ['Physical exam', 'Blood pressure & BMI', 'Cholesterol & glucose', 'Doctor summary'] },
    { name: 'Complete Check', desc: 'Our most popular package', price: 299, unit: '', featured: true, perks: ['Everything in Essential', 'Full blood count', 'Kidney, liver & thyroid', 'ECG', '30-min results review'] },
    { name: 'Women’s Check', desc: 'Tailored for women', price: 249, unit: '', perks: ['Physical exam', 'Cervical screening', 'Iron, B12 & vitamin D', 'Breast exam'] },
    { name: 'Senior 60+ Check', desc: 'For healthy ageing', price: 349, unit: '', perks: ['Complete Check tests', 'Bone & memory screen', 'Falls risk review', 'Vaccine review'] }
  ]
};

const DOCTORS = [
  { photo: '1659353888906-adb3e0041693', name: 'Dr. Rachel Morgan', role: 'Family Physician, MD', bg: '#DCE7FB', skin: '#E7BFA2', hair: '#2C2320', years: 18, langs: 'English', focus: 'Chronic care', next: 'Today, 2:30 PM', today: true },
  { photo: '1612349317150-e413f6a5b16d', name: 'Dr. Omar Siddiqui', role: 'General Physician, MD', bg: '#E2F2E8', skin: '#C9946F', hair: '#1A1513', years: 12, langs: 'English, Urdu, Arabic', focus: 'Men’s health', next: 'Today, 4:15 PM', today: true },
  { photo: '1624727828489-a1e03b79bba8', name: 'Dr. Linda Chen', role: 'Family Physician, DO', bg: '#FDF0D5', skin: '#EFD2B8', hair: '#151112', years: 15, langs: 'English, Mandarin', focus: 'Women’s health', next: 'Tomorrow, 9:00 AM', today: false },
  { photo: '1666887360361-d4e8487f0026', name: 'Dr. James Carter', role: 'General Physician, MD', bg: '#EDE4FB', skin: '#F0CDB5', hair: '#8B6A4B', years: 9, langs: 'English, Spanish', focus: 'Pediatrics', next: 'Today, 5:45 PM', today: true }
];

// NOTE: sample reviews for layout. Replace with real, verified patient reviews.
const REVIEWS = [
  { tag: 'Same-day visit', text: 'Called at 9am with a high fever and was seeing a doctor by 11. Quick, thorough and very kind.', name: 'Patient name', meta: 'Patient since 2019', bg: '#DCE7FB' },
  { tag: 'Diabetes care', text: 'Dr. Morgan actually listens. My diabetes is finally under control and I understand my treatment.', name: 'Patient name', meta: 'Patient since 2015', bg: '#E2F2E8' },
  { tag: 'Family doctor', text: 'The whole family comes here, from our toddler to grandma. Everyone feels looked after.', name: 'Patient name', meta: 'Family of five', bg: '#FDF0D5' },
  { tag: 'Video consult', text: 'The video appointment was so convenient. Got my prescription sent to the pharmacy within the hour.', name: 'Patient name', meta: 'New patient', bg: '#EDE4FB' },
  { tag: 'Annual physical', text: 'Very organised check-up. Results came to the portal in two days with a clear explanation.', name: 'Patient name', meta: 'Patient since 2021', bg: '#DCE7FB' }
];

const FAQS = [
  { q: 'Are you accepting new patients?', a: 'Yes. Book a "New Patient Registration" appointment online or call us. Bring a photo ID, insurance card and a list of your current medications.' },
  { q: 'Can I get a same-day appointment?', a: 'Yes. We keep same-day slots open every morning and evening for new illness. Book online early in the day or call when we open at 8am.' },
  { q: 'Do you accept walk-ins?', a: 'We accept walk-ins for urgent problems when slots are available. Booking online first saves you waiting time.' },
  { q: 'Which insurance plans do you accept?', a: 'We are in-network with most major plans including Aetna, Blue Cross, Cigna, UnitedHealthcare, Medicare and Medicaid. Self-pay prices are shown on this page.' },
  { q: 'How do I get my test results?', a: 'Results are posted to your secure patient portal, usually within 1 to 3 days. Your doctor will contact you directly if anything needs follow-up.' },
  { q: 'How do repeat prescriptions work?', a: 'Use the "Request Prescription" button. Requests are reviewed by your doctor and usually ready within 2 working days at your chosen pharmacy.' },
  { q: 'What if I need to cancel?', a: 'Please cancel or reschedule at least 24 hours ahead so another patient can use the slot. You can do this online or by phone.' }
];

const SLOTS = ['8:00 AM','8:30 AM','9:15 AM','10:00 AM','10:45 AM','11:30 AM','12:15 PM','1:30 PM','2:30 PM','3:15 PM','4:15 PM','5:00 PM','5:45 PM','6:30 PM','7:15 PM'];

/* ---------- HELPERS ---------- */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const icon = (n) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[n]}</svg>`;
const esc = (s) => String(s).replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
const usd = (n) => '$' + n.toLocaleString('en-US');

/* ---------- WAIT TIME (demo: varies by hour) ---------- */
(() => { const h = new Date().getHours(); const w = h < 10 ? 10 : h < 13 ? 20 : h < 17 ? 15 : 25; $('#waitTime').textContent = `~${w} min`; })();

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

/* ---------- APPOINTMENT HELPER ---------- */
const helper = { need: null, urg: null };
$('#needOpts').innerHTML = NEEDS.map(n => `<button type="button" class="opt" data-need="${n.id}" aria-pressed="false">${icon(n.icon)}${n.label}</button>`).join('');
$('#urgOpts').innerHTML = URGENCY.map(u => `<button type="button" class="opt" data-urg="${u.id}" aria-pressed="false">${u.label}</button>`).join('');
function renderHelper() {
  const box = $('#helperResult');
  if (!helper.need) { box.innerHTML = '<p class="result__empty">Choose an option above to see our recommendation.</p>'; return; }
  const [level, title, text, reason, mode] = recommend(helper.need, helper.urg || 'any');
  const tag = { ok: ['result__tag--ok', 'Routine'], warn: ['result__tag--warn', 'Soon'], urgent: ['result__tag--urgent', 'Today'] }[level];
  const btn = reason === 'RX'
    ? '<button type="button" class="btn btn--blue" data-rx>Request Prescription</button>'
    : `<button type="button" class="btn btn--blue" data-book data-reason="${esc(reason)}" data-mode="${esc(mode)}">Book ${esc(title.toLowerCase())}</button>`;
  box.innerHTML = `<div class="result__card"><span class="result__tag ${tag[0]}">${tag[1]}</span><h3>${title}</h3><p>${text}</p>
    <div class="result__btns">${btn}<a href="tel:+15552468100" class="btn btn--ghost">Call the clinic</a></div></div>`;
}
$('#needOpts').addEventListener('click', (e) => { const b = e.target.closest('[data-need]'); if (!b) return; helper.need = b.dataset.need; $$('#needOpts .opt').forEach(x => x.setAttribute('aria-pressed', x === b)); renderHelper(); });
$('#urgOpts').addEventListener('click', (e) => { const b = e.target.closest('[data-urg]'); if (!b) return; helper.urg = b.dataset.urg; $$('#urgOpts .opt').forEach(x => x.setAttribute('aria-pressed', x === b)); renderHelper(); });

/* ---------- DOCTORS ---------- */
const docSvg = (d) => `
  <svg viewBox="0 0 200 200" aria-hidden="true">
    <path d="M30 200c0-46 30-72 70-72s70 26 70 72Z" fill="#fff"/>
    <path d="M78 130l22 46 22-46" fill="${d.bg}"/>
    <path d="M86 118h28v20H86Z" fill="${d.skin}"/>
    <path d="M100 22c-28 0-46 22-46 52 0 34 20 56 46 56s46-22 46-56c0-30-18-52-46-52Z" fill="${d.skin}"/>
    <path d="M52 72c-2-36 20-56 50-56 32 0 52 22 46 58-8-20-26-32-48-32-20 0-38 10-48 30Z" fill="${d.hair}"/>
    <circle cx="84" cy="80" r="3.5" fill="${d.hair}"/><circle cx="116" cy="80" r="3.5" fill="${d.hair}"/>
    <path d="M90 102q10 7 20 0" stroke="#9C5A4E" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M70 144c-6 18 0 30 12 32M82 176a6 6 0 1 0 0-1" stroke="#0F2A4A" stroke-width="3.5" fill="none" stroke-linecap="round"/>
  </svg>`;
$('#docGrid').innerHTML = DOCTORS.map(d => `
  <article class="doc reveal">
    <div class="doc__photo" style="background:${d.bg}" role="img" aria-label="Photo placeholder for ${esc(d.name)}">
      ${docSvg(d)}
      ${d.photo ? `<img class="photo" src="https://images.unsplash.com/photo-${d.photo}?auto=format&fit=crop&q=80&w=600" alt="" loading="lazy" onerror="this.remove()">` : ''}
      <span class="doc__badge ${d.today ? '' : 'doc__badge--off'}"><span class="live" aria-hidden="true"></span>${d.today ? 'Available today' : 'Next: tomorrow'}</span>
    </div>
    <div class="doc__body">
      <h3>${d.name}</h3>
      <p class="doc__role">${d.role}</p>
      <div class="doc__meta">
        <span>${icon('clock')}${d.years} years experience</span>
        <span>${icon('steth')}Special interest: ${d.focus}</span>
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
    <div class="plan ${p.featured ? 'plan--featured' : ''}" style="animation-delay:${i * 0.07}s">
      ${p.featured ? '<span class="plan__badge">Most popular</span>' : ''}
      <h3>${p.name}</h3>
      <p class="plan__desc">${p.desc}</p>
      <p class="plan__price"><strong>${usd(p.price)}</strong><span>${p.unit}</span></p>
      <ul>${p.perks.map(x => `<li>${x}</li>`).join('')}</ul>
      <button type="button" class="btn ${p.featured ? 'btn--blue' : 'btn--line'} btn--block" data-book data-reason="${esc(ptab === 'checks' ? p.name : '')}" data-mode="${p.name === 'Video Consult' ? 'Video call' : p.name === 'Home Visit' ? 'Home visit' : ''}">Book ${ptab === 'checks' ? 'check-up' : 'now'}</button>
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
  const items = $$('.rev', stage), prev = rev;
  rev = (n + items.length) % items.length;
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

/* ---------- HOURS: open now + highlight today ---------- */
(() => {
  const d = new Date(), day = d.getDay(), h = d.getHours() + d.getMinutes() / 60;
  const open = (day >= 1 && day <= 5 && h >= 8 && h < 20) || (day === 6 && h >= 9 && h < 15);
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

/* ---------- MODALS ---------- */
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

/* Prescription */
const rxModal = $('#rxModal'), rxForm = $('#rxForm');
rxForm.dob.max = new Date().toISOString().split('T')[0];
rxForm.addEventListener('submit', (e) => {
  e.preventDefault(); if (!validate(rxForm)) return;
  // TODO: send refill request to your EMR / CRM
  $('.form__ok', rxForm).hidden = false; $('button[type=submit]', rxForm).hidden = true;
});
function openRx() { rxForm.reset(); $('.form__ok', rxForm).hidden = true; $('button[type=submit]', rxForm).hidden = false; $$('.invalid', rxForm).forEach(x => x.classList.remove('invalid')); openModal(rxModal); }

/* Booking */
const bookModal = $('#bookModal'), form = $('#bookForm');
const nextBtn = $('#nextBtn'), backBtn = $('#backBtn'), selText = $('#selText');
const state = { step: 1, reason: '', doctor: 'First available', date: null, time: '' };
form.dob.max = new Date().toISOString().split('T')[0];

const REASONS = [
  { name: 'Same-day Sick Visit', icon: 'thermo', sub: 'New illness · 15 min' },
  { name: 'Annual Physical', icon: 'clipboard', sub: 'Check-up · 40 min' },
  { name: 'Chronic Condition Review', icon: 'heart', sub: 'Diabetes, BP, asthma · 30 min' },
  { name: 'Vaccination', icon: 'syringe', sub: 'Nurse visit · 10 min' },
  { name: 'Child Health Visit', icon: 'baby', sub: 'Babies to teens · 20 min' },
  { name: 'Mental Health Consultation', icon: 'brain', sub: 'Confidential · 30 min' },
  { name: 'Test Results Review', icon: 'flask', sub: 'Results call · 10 min' },
  { name: 'New Patient Registration', icon: 'user', sub: 'First visit · 40 min' }
];
const reasonGrid = $('#reasonGrid');
function renderReasons(extra) {
  const list = extra && !REASONS.some(r => r.name === extra) ? [{ name: extra, icon: 'steth', sub: 'Selected service' }, ...REASONS] : REASONS;
  reasonGrid.innerHTML = list.map(r => `<label class="choice"><input type="radio" name="reason" value="${esc(r.name)}"><span class="choice__ic">${icon(r.icon)}</span><span><strong>${r.name}</strong><small>${r.sub}</small></span></label>`).join('');
}
reasonGrid.addEventListener('change', (e) => { state.reason = e.target.value; $('#err1').hidden = true; updateSel(); });

$('#docPick').innerHTML = [{ name: 'First available', role: 'Fastest appointment', bg: '#EDF2FB' }, ...DOCTORS].map((d, i) => `
  <label class="dp"><input type="radio" name="doctor" value="${esc(d.name)}" ${i === 0 ? 'checked' : ''}>
    <span><i style="background:${d.bg}">${i === 0 ? '⚡' : d.name.split(' ')[1][0]}</i><span><strong>${d.name}</strong><small>${d.role}</small></span></span></label>`).join('');
$('#docPick').addEventListener('change', (e) => { state.doctor = e.target.value; state.time = ''; renderTimes(); updateSel(); });

const datesEl = $('#dates'), timesEl = $('#times');
const days = Array.from({ length: 14 }, (_, i) => { const d = new Date(); d.setHours(0,0,0,0); d.setDate(d.getDate() + i); return d; });
datesEl.innerHTML = days.map((d, i) => `<button type="button" class="date" data-i="${i}" aria-pressed="false" ${d.getDay() === 0 ? 'disabled aria-label="Closed on Sunday"' : ''}><small>${i === 0 ? 'Today' : d.toLocaleDateString('en-US', { weekday: 'short' })}</small><strong>${d.getDate()}</strong><span>${d.toLocaleDateString('en-US', { month: 'short' })}</span></button>`).join('');
function renderTimes() {
  if (!state.date) { timesEl.innerHTML = '<p class="times__empty">Pick a date to see available times.</p>'; return; }
  const d = state.date, sat = d.getDay() === 6, today = d.toDateString() === new Date().toDateString();
  const now = new Date().getHours() + new Date().getMinutes() / 60, seed = d.getDate() + state.doctor.length;
  timesEl.innerHTML = SLOTS.map((t, i) => {
    const [hm, ap] = t.split(' '); let [h, m] = hm.split(':').map(Number); if (ap === 'PM' && h !== 12) h += 12; const hh = h + m / 60;
    const outside = sat ? (hh < 9 || hh >= 15) : (hh < 8 || hh >= 20);
    const dis = outside || (today && hh <= now + .5) || (i * 3 + seed) % 4 === 0; // demo: fake booked slots
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
    const fd = Object.fromEntries(new FormData(form));
    const b = { ...fd, reason: state.reason, doctor: state.doctor, date: fmtDate(state.date), time: state.time };
    // TODO: POST `b` to your EMR / GHL calendar / webhook here
    const row = (k, v) => v ? `<div><dt>${k}</dt><dd>${esc(v)}</dd></div>` : '';
    $('#summary').innerHTML = row('Visit', b.reason) + row('Type', b.mode) + row('Doctor', b.doctor) + row('Date', b.date) + row('Time', b.time) + row('Patient', b.name) + row('Payment', b.payment);
    $('#doneNote').textContent = b.mode === 'Video call'
      ? 'We\'ll text you a secure video link 10 minutes before your appointment.'
      : b.mode === 'Home visit'
        ? 'Our team will call to confirm your address and arrival window.'
        : 'Please arrive 10 minutes early with your photo ID, insurance card and medication list.';
    showStep(4); nextBtn.focus();
  } else closeModal(bookModal);
});
backBtn.addEventListener('click', () => showStep(state.step - 1));

function openBooking({ reason, mode, doctor } = {}) {
  form.reset(); Object.assign(state, { step: 1, reason: '', doctor: 'First available', date: null, time: '' });
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
  if (e.target.closest('[data-rx]')) { e.preventDefault(); openRx(); return; }
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
