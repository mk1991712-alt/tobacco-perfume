/* ============================================================
   TOBACCO PERFUME — CART SYSTEM
   ============================================================ */

function getCart() { return JSON.parse(localStorage.getItem('tp_cart') || '[]'); }
function saveCart(cart) { localStorage.setItem('tp_cart', JSON.stringify(cart)); if (typeof syncCartBadges === 'function') syncCartBadges(); }
function getCartTotal() { return getCart().reduce((s, i) => s + i.price * i.qty, 0); }
function getCartCount() { return getCart().reduce((s, i) => s + i.qty, 0); }
function clearCart() { localStorage.removeItem('tp_cart'); if (typeof syncCartBadges === 'function') syncCartBadges(); }

function addToCartFromCard(productId, btn) {
  const p = typeof getPerfumeById === 'function' ? getPerfumeById(productId) : perfumeCatalog.find(x => x.id === productId);
  if (!p) return;
  const card = btn.closest('.product-card');
  const activeSz = card ? card.querySelector('.size-pill.active') : null;
  const size = activeSz ? activeSz.dataset.size : (p.price50ml ? '50' : '60');
  const price = parseInt(size === '50' ? p.price50ml : p.price60ml);

  const cart = getCart();
  const key = `${productId}-${size}`;
  const ex = cart.find(i => i.key === key);
  if (ex) { ex.qty++; } else {
    cart.push({ key, id: p.id, nameAr: p.nameAr, nameEn: p.nameEn, brand: p.brand || '', category: p.category, size, price, qty: 1 });
  }
  saveCart(cart);

  if (typeof showToast === 'function') showToast('تمت الإضافة للسلة');
  btn.textContent = '✅ تمت الإضافة';
  btn.classList.add('added');
  setTimeout(() => { btn.textContent = '+ أضف للسلة'; btn.classList.remove('added'); }, 1800);
}

function removeFromCart(key) {
  saveCart(getCart().filter(i => i.key !== key));
}

function changeQty(key, delta) {
  const cart = getCart();
  const item = cart.find(i => i.key === key);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) { removeFromCart(key); return; }
  saveCart(cart);
}

function addBundleToCart(bundle, btn) {
  const cart = getCart();
  const key  = 'bundle_' + bundle.id;
  const ex   = cart.find(i => i.key === key);
  if (ex) {
    ex.qty++;
  } else {
    const bundleItems = bundle.productIds.map(pid => {
      const p = typeof getPerfumeById === 'function' ? getPerfumeById(pid) : (perfumeCatalog || []).find(x => x.id === pid);
      return { id: pid, nameAr: p ? p.nameAr : pid, size: bundle.size };
    });
    cart.push({
      key,
      type: 'bundle',
      bundleId: bundle.id,
      nameAr: bundle.title,
      nameEn: 'Bundle',
      category: 'unisex',
      size: bundle.size,
      price: bundle.bundlePrice,
      qty: 1,
      bundleItems
    });
  }
  saveCart(cart);
  if (typeof showToast === 'function') showToast('تمت إضافة الباندل للسلة 🎁');
  if (btn) {
    const orig = btn.textContent;
    btn.textContent = '✅ تمت الإضافة';
    btn.classList.add('added');
    setTimeout(() => { btn.textContent = orig; btn.classList.remove('added'); }, 1800);
  }
}

// legacy alias
function updateCartBadge() { if (typeof syncCartBadges === 'function') syncCartBadges(); }
