/* ================= DATA (edit prices here) ================= */
const SERVICES = [
  { name: 'Skin Consultation', desc: 'A one-to-one skin analysis with a personalised routine plan.', price: 'Rs 1,500', time: '30 min',
    icon: '<circle cx="11" cy="11" r="6"/><path d="M20 20l-4.5-4.5"/>' },
  { name: 'Deep Cleansing Facial', desc: 'Exfoliation, extraction and a calming mask for clear, fresh skin.', price: 'Rs 4,500', time: '60 min',
    icon: '<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z"/>' },
  { name: 'HydraFacial', desc: 'Cleanse, extract and hydrate in one glow-boosting treatment.', price: 'Rs 8,000', time: '45 min',
    icon: '<circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2"/>' },
  { name: 'Acne Treatment', desc: 'Targeted care to calm breakouts and reduce future flare-ups.', price: 'Rs 6,000', time: '50 min',
    icon: '<path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4Z"/>' },
  { name: 'Chemical Peel', desc: 'Smooths texture and fades dark spots for an even skin tone.', price: 'Rs 7,500', time: '40 min',
    icon: '<path d="M4 20c4-1 6-4 8-8s4-7 8-8"/><path d="M4 14c3 0 5-2 6-4"/>' },
  { name: 'Anti-Ageing Facial', desc: 'Firming massage and peptides to lift and plump the skin.', price: 'Rs 9,500', time: '75 min',
    icon: '<path d="M12 21V9"/><path d="M12 13c-4 0-7-3-7-8 4 0 7 3 7 8Z"/><path d="M12 11c0-4 3-7 7-7 0 4-3 7-7 7Z"/>' }
];

const PRODUCTS = [
  { photo: '1620916566398-39f1143ab7be', name: 'Gentle Gel Cleanser', short: 'Cleanser', tag: 'Step 01', desc: 'A low-foam gel that lifts away dirt and makeup without stripping.',
    price: 'Rs 2,499', size: '150 ml', skin: 'All skin types', benefit: 'Deep clean', rating: '4.8',
    tint: '#DCE5DE', cap: '#2F4A3C', capH: 30, body: '#B9CBBE', x: 30, y: 30, w: 60, h: 160, r: 18 },
  { photo: '1764694187667-f28a05a52c0e', name: 'Glow Serum', short: 'Serum', tag: 'Bestseller', desc: 'Niacinamide and vitamin C for brighter, smoother looking skin.',
    price: 'Rs 3,999', old: 'Rs 4,499', size: '30 ml', skin: 'Dull, uneven skin', benefit: 'Brightening', rating: '4.9',
    tint: '#F1E1D8', cap: '#1E3328', capH: 44, body: '#E2BFAF', x: 28, y: 46, w: 64, h: 144, r: 22 },
  { photo: '1585945037805-5fd82c2e60b1', name: 'Barrier Cream', short: 'Cream', tag: 'Step 03', desc: 'Rich yet weightless moisture with ceramides and squalane.',
    price: 'Rs 3,499', size: '50 g', skin: 'Dry, sensitive skin', benefit: 'Barrier repair', rating: '4.8',
    tint: '#E9E1D6', cap: '#A8664F', capH: 26, body: '#F6EDE6', x: 14, y: 70, w: 92, h: 120, r: 20 }
];

/* ================= RENDER CARDS ================= */
const servicesGrid = document.getElementById('servicesGrid');
servicesGrid.innerHTML = SERVICES.map(s => `
  <article class="scard reveal">
    <span class="scard__ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">${s.icon}</svg></span>
    <h3>${s.name}</h3>
    <p>${s.desc}</p>
    <div class="scard__meta"><span class="scard__price">${s.price}</span><span class="scard__time">${s.time}</span></div>
    <button type="button" class="btn btn--blush btn--block scard__book" data-open-booking data-service="${s.name}">Book this treatment</button>
    <span class="scard__hint" aria-hidden="true">Hover for price</span>
  </article>`).join('');

const productsGrid = document.getElementById('productsGrid');
productsGrid.innerHTML = PRODUCTS.map(p => `
  <article class="pcard reveal">
    <div class="pcard__img" style="background:${p.tint}">
      <span class="tag">${p.tag}</span>
      <svg viewBox="0 0 120 200" aria-hidden="true">
        <rect x="46" y="4" width="28" height="${p.capH}" rx="7" fill="${p.cap}"/>
        <rect x="${p.x}" y="${p.y}" width="${p.w}" height="${p.h}" rx="${p.r}" fill="${p.body}"/>
        <rect x="34" y="104" width="52" height="46" rx="5" fill="#fff" opacity=".9"/>
        <text x="60" y="132" text-anchor="middle" font-family="Instrument Serif" font-size="13" fill="#1E3328">${p.short}</text>
      </svg>
      ${p.photo ? `<img class="photo" src="https://images.unsplash.com/photo-${p.photo}?auto=format&fit=crop&q=80&w=700" alt="${p.name}" loading="lazy" onerror="this.remove()">` : ''}
          </div>
    <div class="pcard__body">
      <div class="pcard__row"><h3>${p.name}</h3><span class="rating">★ ${p.rating}</span></div>
      <p>${p.desc}</p>
      <div class="pcard__info">
        <div class="pcard__row">
          <span class="pcard__price">${p.price}${p.old ? `<s>${p.old}</s>` : ''}</span>
          <span class="pcard__size">${p.size}</span>
        </div>
        <div class="chips"><span class="chip">${p.skin}</span><span class="chip chip--warm">${p.benefit}</span></div>
        <button type="button" class="btn btn--dark btn--block" data-add="1" data-name="${p.name}">Add to Bag</button>
      </div>
    </div>
  </article>`).join('');

/* ================= NAVBAR ================= */
const nav = document.getElementById('nav');
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');

function setMenu(open) {
  menu.classList.toggle('open', open);
  burger.classList.toggle('open', open);
  burger.setAttribute('aria-expanded', open);
  burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  document.body.classList.toggle('no-scroll', open);
}
burger.addEventListener('click', () => setMenu(!menu.classList.contains('open')));
menu.querySelectorAll('a, button').forEach(el => el.addEventListener('click', () => setMenu(false)));
window.addEventListener('resize', () => { if (window.innerWidth > 900) setMenu(false); });
window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 10), { passive: true });

/* ================= SCROLL REVEAL ================= */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.transitionDelay = (i % 3) * 0.1 + 's';
  io.observe(el);
});

/* ================= TOAST / BAG ================= */
const toast = document.getElementById('toast');
let bag = 0, toastTimer;
function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2400);
}
document.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-add]');
  if (!btn) return;
  bag += Number(btn.dataset.add);
  showToast(`${btn.dataset.name || 'Ritual set'} added to bag (${bag} item${bag > 1 ? 's' : ''})`);
});

/* ================= BOOKING MODAL ================= */
const modal = document.getElementById('booking');
const bookingForm = document.getElementById('bookingForm');
const formWrap = document.getElementById('bookingFormWrap');
const booked = document.getElementById('bookedMsg');
const serviceSelect = document.getElementById('serviceSelect');
const dateInput = document.getElementById('dateInput');
let lastFocus = null;

serviceSelect.innerHTML = '<option value="">Select a service</option>' +
  SERVICES.map(s => `<option value="${s.name}">${s.name} · ${s.price}</option>`).join('') +
  '<option value="Glow membership">Glow membership · Rs 11,999/month</option>';

const today = new Date();
dateInput.min = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().split('T')[0];

function openBooking(service) {
  lastFocus = document.activeElement;
  formWrap.hidden = false;
  booked.hidden = true;
  bookingForm.reset();
  if (service) serviceSelect.value = service;
  modal.hidden = false;
  document.body.classList.add('no-scroll');
  setTimeout(() => bookingForm.querySelector('input').focus(), 50);
}
function closeBooking() {
  modal.hidden = true;
  if (!menu.classList.contains('open')) document.body.classList.remove('no-scroll');
  if (lastFocus) lastFocus.focus();
}

document.addEventListener('click', (e) => {
  const open = e.target.closest('[data-open-booking]');
  if (open) { e.preventDefault(); openBooking(open.dataset.service); return; }
  if (e.target.closest('[data-close-booking]')) closeBooking();
});
modal.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeBooking();
  if (e.key === 'Tab') { // keep focus inside the modal
    const f = [...modal.querySelectorAll('button, input, select, textarea')].filter(el => el.offsetParent !== null);
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
});

bookingForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const d = Object.fromEntries(new FormData(bookingForm));
  const date = new Date(d.date + 'T00:00').toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' });
  document.getElementById('bookedText').textContent =
    `Thanks ${d.name.split(' ')[0]}! Your ${d.service} is booked for ${date} at ${d.time}. We'll confirm on ${d.phone}.`;
  formWrap.hidden = true;
  booked.hidden = false;
  booked.querySelector('button').focus();
  // TODO: send `d` to your backend, GHL webhook or WhatsApp API here
});

/* ================= CONTACT FORM ================= */
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  contactForm.querySelector('.form__ok').hidden = false;
  contactForm.reset();
  // TODO: send form data to your backend or email service here
});

document.getElementById('year').textContent = new Date().getFullYear();

/* ================= ACTIVE NAV LINK ON SCROLL ================= */
const navLinks = [...document.querySelectorAll('.nav__menu > a')];
const spy = new IntersectionObserver((entries) => {
  entries.forEach(en => { if (en.isIntersecting) navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + en.target.id)); });
}, { rootMargin: '-45% 0px -50% 0px' });
navLinks.forEach(a => { const sec = document.querySelector(a.getAttribute('href')); if (sec) spy.observe(sec); });

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
