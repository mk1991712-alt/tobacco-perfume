/* ============================================================
   TOBACCO PERFUME — SHARED COMPONENTS
   ============================================================ */

/* ---- BOTTLE SVG ---- */
function bottleSVG(color = 'rgba(201,168,76,0.7)') {
  return `<svg viewBox="0 0 50 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="2" width="10" height="5" rx="2.5" fill="${color}" opacity="0.8"/>
    <rect x="17" y="6" width="16" height="9" rx="3" fill="${color}" opacity="0.55"/>
    <path d="M13 15 C8 23 7 38 8 53 C9 66 25 70 25 70 C25 70 41 66 42 53 C43 38 42 23 37 15 Z"
      fill="${color}" opacity="0.15" stroke="${color}" stroke-width="1" stroke-opacity="0.5"/>
    <rect x="14" y="36" width="22" height="16" rx="3"
      fill="${color}" opacity="0.08" stroke="${color}" stroke-width="0.5" stroke-opacity="0.4"/>
    <path d="M17 22 C15 33 15 46 16 56" stroke="white" stroke-width="1.5" stroke-linecap="round" opacity="0.12"/>
  </svg>`;
}

/* ---- STAR SVG ---- */
function starSVG(filled) {
  const fill = filled ? '#F59E0B' : 'none';
  const stroke = filled ? '#F59E0B' : '#374151';
  return `<svg viewBox="0 0 24 24" fill="${fill}" stroke="${stroke}" stroke-width="1.5">
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
  </svg>`;
}

function renderStarsRow(rating) {
  let html = '<div class="stars-row">';
  for (let i = 1; i <= 5; i++) html += starSVG(i <= Math.round(rating));
  html += '</div>';
  return html;
}

/* ---- OLD PRICE / DISCOUNT ---- */
function getOldPriceLocal(price) {
  return ({ 250: 370, 300: 450, 330: 490, 350: 520, 400: 580 })[price] || Math.round(price * 1.45 / 10) * 10;
}
function discountPct(price) {
  return Math.round((1 - price / getOldPriceLocal(price)) * 100);
}

/* ---- REVIEWS (localStorage) ---- */
function getReviews(id) {
  return JSON.parse(localStorage.getItem('tp_rev_' + id) || '[]');
}
function saveReview(id, rev) {
  const arr = getReviews(id);
  arr.unshift(rev);
  localStorage.setItem('tp_rev_' + id, JSON.stringify(arr));
}

/* ---- TOAST ---- */
let _toastTimer;
function showToast(msg, emoji = '✅') {
  let el = document.getElementById('toast');
  if (!el) {
    el = document.createElement('div');
    el.id = 'toast';
    el.className = 'toast';
    document.body.appendChild(el);
  }
  el.textContent = emoji + ' ' + msg;
  el.classList.add('show');
  clearTimeout(_toastTimer);
  _toastTimer = setTimeout(() => el.classList.remove('show'), 2200);
}

/* ---- CART BADGE SYNC ---- */
function syncCartBadges() {
  const total = (JSON.parse(localStorage.getItem('tp_cart') || '[]')).reduce((s, i) => s + i.qty, 0);
  document.querySelectorAll('.cart-count-badge').forEach(el => {
    el.textContent = total;
    el.classList.toggle('show', total > 0);
  });
  document.querySelectorAll('#nav-cart-count').forEach(el => {
    el.textContent = total;
    el.style.display = total > 0 ? 'flex' : 'none';
  });
}

/* ---- BOTTOM NAV ---- */
function buildBottomNav(active) {
  const pages = [
    { key: 'home',    href: 'index.html',    label: 'الرئيسية',
      icon: `<svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>` },
    { key: 'shop',    href: 'shop.html',     label: 'المتجر',
      icon: `<svg viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>` },
    { key: 'cart',    href: 'cart.html',     label: 'السلة', cart: true,
      icon: `<svg viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>` },
    { key: 'search',  href: '#',             label: 'البحث', search: true,
      icon: `<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>` },
  ];

  const nav = document.createElement('nav');
  nav.className = 'bottom-nav';
  nav.innerHTML = `<div class="nav-items">${pages.map(p => `
    <a class="nav-item${p.key === active ? ' active' : ''}"
       href="${p.href}"
       ${p.search ? 'id="nav-search-btn" href="#"' : ''}
       ${p.cart ? 'id="nav-cart-link"' : ''}>
      ${p.icon}
      ${p.cart ? '<span class="nav-badge cart-count-badge"></span>' : ''}
      <span>${p.label}</span>
    </a>
  `).join('')}</div>`;

  document.body.appendChild(nav);

  // Search button
  const srchBtn = document.getElementById('nav-search-btn');
  if (srchBtn) srchBtn.addEventListener('click', e => { e.preventDefault(); openSearch(); });

  syncCartBadges();
}

/* ---- SEARCH OVERLAY ---- */
function buildSearchOverlay() {
  const el = document.createElement('div');
  el.id = 'search-overlay';
  el.className = 'search-overlay';
  el.innerHTML = `
    <div class="search-bar-wrap">
      <input id="search-input" type="text" placeholder="ابحث عن عطر..." />
      <button class="search-close-btn" id="search-close">إغلاق</button>
    </div>
    <div class="search-results" id="search-results"></div>
  `;
  document.body.appendChild(el);

  document.getElementById('search-close').addEventListener('click', closeSearch);
  el.addEventListener('click', e => { if (e.target === el) closeSearch(); });

  const inp = document.getElementById('search-input');
  inp.addEventListener('input', () => renderSearchResults(inp.value.trim()));
}

function openSearch() {
  const ov = document.getElementById('search-overlay');
  if (!ov) { buildSearchOverlay(); }
  document.getElementById('search-overlay').classList.add('open');
  setTimeout(() => { const inp = document.getElementById('search-input'); if (inp) inp.focus(); }, 100);
  document.body.style.overflow = 'hidden';
}
function closeSearch() {
  const ov = document.getElementById('search-overlay');
  if (ov) ov.classList.remove('open');
  document.body.style.overflow = '';
}

function renderSearchResults(q) {
  const el = document.getElementById('search-results');
  if (!q) { el.innerHTML = ''; return; }
  const lq = q.toLowerCase();
  const results = perfumeCatalog.filter(p =>
    p.nameAr.includes(q) || p.nameEn.toLowerCase().includes(lq) || (p.brand || '').toLowerCase().includes(lq)
  ).slice(0, 10);

  if (!results.length) {
    el.innerHTML = `<p class="text-center text-muted mt-16">لا توجد نتائج</p>`;
    return;
  }
  const catEmoji = { men: '🔷', women: '🌸', unisex: '✨' };
  el.innerHTML = results.map(p => {
    const price = p.price50ml || p.price60ml;
    return `<div class="search-result-item" onclick="closeSearch(); openModal(${p.id})">
      <div class="search-result-thumb ${p.category}">${catEmoji[p.category]}</div>
      <div class="search-result-info">
        <h4>${p.nameAr}</h4>
        <p>${p.nameEn}${p.brand ? ' · ' + p.brand : ''}</p>
      </div>
      <div class="search-result-price">${price} جنيه</div>
    </div>`;
  }).join('');
}

/* ============================================================
   PRODUCT MODAL
   ============================================================ */
let _modalProductId = null;
let _modalSelectedSize = null;

function buildModal() {
  if (document.getElementById('modal-backdrop')) return;
  const bd = document.createElement('div');
  bd.id = 'modal-backdrop';
  bd.className = 'modal-backdrop';
  bd.addEventListener('click', closeModal);
  document.body.appendChild(bd);

  const sheet = document.createElement('div');
  sheet.id = 'modal-sheet';
  sheet.className = 'modal-sheet';
  sheet.innerHTML = `
    <div class="modal-handle"></div>
    <div class="modal-scroll" id="modal-scroll"></div>
  `;
  document.body.appendChild(sheet);

  // Touch swipe down to close
  let startY = 0;
  sheet.addEventListener('touchstart', e => { startY = e.touches[0].clientY; }, { passive: true });
  sheet.addEventListener('touchmove', e => {
    const dy = e.touches[0].clientY - startY;
    if (dy > 80 && document.getElementById('modal-scroll').scrollTop <= 0) closeModal();
  }, { passive: true });
}

function openModal(id) {
  buildModal();
  const p = getPerfumeById(id);
  if (!p) return;
  _modalProductId = id;
  _modalSelectedSize = p.price50ml ? '50' : '60';

  document.getElementById('modal-backdrop').classList.add('open');
  document.getElementById('modal-sheet').classList.add('open');
  document.body.style.overflow = 'hidden';
  renderModalContent(p);
}

function closeModal() {
  const bd = document.getElementById('modal-backdrop');
  const sh = document.getElementById('modal-sheet');
  if (bd) bd.classList.remove('open');
  if (sh) sh.classList.remove('open');
  document.body.style.overflow = '';
  _modalProductId = null;
}

function renderModalContent(p) {
  const reviews = getReviews(p.id);
  const selSize = _modalSelectedSize;
  const price = selSize === '50' ? p.price50ml : p.price60ml;
  const oldP = getOldPriceLocal(price);
  const disc = discountPct(price);
  const catLabel = { men: 'رجالي', women: 'نسائي', unisex: 'يونيسكس' }[p.category];

  const avgRating = reviews.length
    ? (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1)
    : p.rating;
  const ratingCount = reviews.length || Math.floor(p.rating * 12);

  const scroll = document.getElementById('modal-scroll');
  scroll.innerHTML = `
    <!-- Image -->
    <div class="modal-thumb ${p.category}">
      ${p.image
        ? `<img src="${p.image}" class="modal-bottle-img" alt="${p.nameEn}" onerror="this.style.display='none'; this.nextElementSibling.style.display='block'"><span style="display:none">${bottleSVG()}</span>`
        : bottleSVG()
      }
    </div>

    <!-- Header -->
    <div class="modal-header">
      <div class="modal-header-text">
        <h2>${p.nameAr}</h2>
        <p>${p.nameEn}${p.brand ? ' · ' + p.brand : ''} · ${catLabel}</p>
      </div>
    </div>

    <!-- Rating -->
    <div class="modal-rating-row">
      ${renderStarsRow(avgRating)}
      <span class="rating-num">${avgRating}</span>
      <span class="rating-count-text">(${ratingCount} تقييم)</span>
    </div>

    <!-- Size -->
    <div class="modal-sizes" id="modal-sizes">
      ${p.price50ml ? `<button class="modal-size-btn${selSize==='50'?' active':''}" onclick="selectModalSize(50)">
        <span class="sz-ml">50 مل</span><span class="sz-price">${p.price50ml} جنيه</span>
      </button>` : ''}
      ${p.price60ml ? `<button class="modal-size-btn${selSize==='60'?' active':''}" onclick="selectModalSize(60)">
        <span class="sz-ml">60 مل</span><span class="sz-price">${p.price60ml} جنيه</span>
      </button>` : ''}
    </div>

    <!-- Price -->
    <div class="modal-price-row">
      <span class="modal-price-new" id="modal-price-new">${price} جنيه</span>
      <span class="modal-price-old" id="modal-price-old">${oldP} جنيه</span>
      <span class="modal-discount">-${disc}%</span>
    </div>

    <!-- Add Button -->
    <button class="btn-gold wide" id="modal-add-btn" onclick="modalAddToCart()">
      أضف للسلة 🛒
    </button>

    <!-- تنبيه الزجاجة -->
    <div class="bottle-notice" style="margin-top:10px">
      <span class="bn-icon">ℹ️</span>
      <span>الصورة المعروضة هي للمنتج الأصلي المستوحى منه العطر · عند الاستلام ستجد عطرك داخل <strong>زجاجة Tobacco Perfume</strong> الأنيقة الخاصة بنا</span>
    </div>

    <!-- Notes -->
    <div class="modal-divider"><span>نوتات العطر</span></div>
    <div class="notes-grid">
      <div class="note-row">
        <span class="note-label">🌿 العليا</span>
        <div class="note-items">${(p.notes.top.map(n => `<span class="note-item">${n}</span>`)).join('')}</div>
      </div>
      <div class="note-row">
        <span class="note-label">🌸 القلب</span>
        <div class="note-items">${(p.notes.heart.map(n => `<span class="note-item">${n}</span>`)).join('')}</div>
      </div>
      <div class="note-row">
        <span class="note-label">🌲 القاعدة</span>
        <div class="note-items">${(p.notes.base.map(n => `<span class="note-item">${n}</span>`)).join('')}</div>
      </div>
    </div>

    <!-- Description -->
    <div class="modal-divider"><span>عن العطر</span></div>
    <p class="modal-desc">${p.description}</p>

    <!-- Reviews -->
    <div class="modal-divider"><span>التقييمات (${ratingCount})</span></div>
    <div id="reviews-list">
      ${reviews.length ? reviews.map(r => `
        <div class="review-card">
          <div class="review-card-top">
            <span class="reviewer-name">${r.name}</span>
            <span class="review-date">${r.date}</span>
          </div>
          ${renderStarsRow(r.rating)}
          <p class="review-text">${r.comment}</p>
        </div>
      `).join('') : `<p class="text-muted text-center mb-20">كن أول من يقيّم هذا العطر!</p>`}
    </div>

    <!-- Add Review -->
    <div class="modal-divider"><span>أضف تقييمك</span></div>
    <div class="review-form">
      <input class="form-input" id="rev-name" placeholder="اسمك (اختياري)" />
      <div style="display:flex;align-items:center;gap:8px;">
        <span style="font-size:12px;color:var(--text-2);">تقييمك:</span>
        <div class="star-input" id="star-input" data-val="0">
          ${[1,2,3,4,5].map(i => `<svg viewBox="0 0 24 24" fill="none" stroke="#374151" stroke-width="1.5" data-val="${i}" onclick="setRevStar(${i})" style="cursor:pointer">
            <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
          </svg>`).join('')}
        </div>
      </div>
      <textarea class="form-input" id="rev-comment" placeholder="شاركنا رأيك في هذا العطر..."></textarea>
      <button class="btn-gold" onclick="submitReview(${p.id})" style="align-self:flex-start">نشر التقييم</button>
    </div>
    <div style="height:20px"></div>
  `;
  scroll.scrollTop = 0;
}

function selectModalSize(size) {
  const p = getPerfumeById(_modalProductId);
  if (!p) return;
  _modalSelectedSize = String(size);
  const price = size === 50 ? p.price50ml : p.price60ml;
  const old = getOldPriceLocal(price);

  document.querySelectorAll('.modal-size-btn').forEach(b => b.classList.remove('active'));
  event.currentTarget.classList.add('active');

  document.getElementById('modal-price-new').textContent = price + ' جنيه';
  document.getElementById('modal-price-old').textContent = old + ' جنيه';
}

function modalAddToCart() {
  const p = getPerfumeById(_modalProductId);
  if (!p) return;
  const size = _modalSelectedSize;
  const price = size === '50' ? p.price50ml : p.price60ml;

  const cart = JSON.parse(localStorage.getItem('tp_cart') || '[]');
  const key = `${p.id}-${size}`;
  const ex = cart.find(i => i.key === key);
  if (ex) { ex.qty++; } else {
    cart.push({ key, id: p.id, nameAr: p.nameAr, nameEn: p.nameEn, brand: p.brand || '', category: p.category, size, price, qty: 1 });
  }
  localStorage.setItem('tp_cart', JSON.stringify(cart));
  syncCartBadges();
  showToast('تمت الإضافة للسلة');
  const btn = document.getElementById('modal-add-btn');
  if (btn) { btn.textContent = '✅ تمت الإضافة!'; btn.style.background = 'linear-gradient(135deg,#2d6a2d,#4caf50)'; setTimeout(() => { btn.textContent = 'أضف للسلة 🛒'; btn.style.background = ''; }, 2000); }
}

let _revRating = 0;
function setRevStar(val) {
  _revRating = val;
  document.querySelectorAll('#star-input svg').forEach((s, i) => {
    const filled = i < val;
    s.setAttribute('fill', filled ? '#F59E0B' : 'none');
    s.setAttribute('stroke', filled ? '#F59E0B' : '#374151');
  });
}

function submitReview(id) {
  const name = document.getElementById('rev-name').value.trim() || 'مجهول';
  const comment = document.getElementById('rev-comment').value.trim();
  if (!comment) { showToast('الرجاء كتابة تعليقك', '⚠️'); return; }
  if (!_revRating) { showToast('الرجاء اختيار تقييم', '⭐'); return; }
  const rev = { name, rating: _revRating, comment, date: new Date().toLocaleDateString('ar-EG') };
  saveReview(id, rev);
  showToast('شكرًا على تقييمك!');
  _revRating = 0;
  const p = getPerfumeById(id);
  if (p) renderModalContent(p);
}

/* ---- INIT KEYBOARD CLOSE ---- */
document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeModal(); closeSearch(); } });
