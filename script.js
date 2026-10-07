/**
 * ShopSphere - Modern Responsive eCommerce Logic
 * Pure Vanilla JavaScript (No backend or database)
 */

// =============================================================================
// 1. PRODUCT DATASET (18 Products across Electronics, Clothing, Accessories)
// =============================================================================
const PRODUCTS = [
  // --- Electronics ---
  {
    id: 1,
    name: "Aura Bass Wireless Headphones",
    category: "Electronics",
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.9,
    reviews: 320,
    badge: "Bestseller",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700&q=80",
    description: "Industry-leading active noise cancellation with 40-hour battery life, immersive spatial audio, and memory-foam earcups for all-day comfort.",
    features: [
      "Active Noise Cancellation (ANC)",
      "40-hour playtime with Quick Charge",
      "Multipoint Bluetooth 5.3 pairing",
      "Foldable ergonomic design with carry case"
    ]
  },
  {
    id: 2,
    name: "Pulse Ultra Smartwatch Series 6",
    category: "Electronics",
    price: 249.50,
    originalPrice: 299.00,
    rating: 4.8,
    reviews: 184,
    badge: "Hot",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700&q=80",
    description: "Vibrant AMOLED always-on display featuring 24/7 heart-rate, SpO2 tracking, sleep stages, built-in GPS, and 50m water resistance.",
    features: [
      "1.78-inch Super AMOLED Display",
      "ECG and blood oxygen monitoring",
      "Up to 10 days of continuous battery",
      "Over 100 dedicated sports modes"
    ]
  },
  {
    id: 3,
    name: "SoundPod Mini 360 Bluetooth Speaker",
    category: "Electronics",
    price: 59.99,
    originalPrice: 79.99,
    rating: 4.7,
    reviews: 215,
    badge: "Sale",
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=700&q=80",
    description: "Compact waterproof speaker packing deep bass radiators, 360-degree room-filling acoustic sound, and IPX7 adventure-proof design.",
    features: [
      "IPX7 100% waterproof construction",
      "16 hours of continuous playback",
      "Stereo pair capability with two speakers",
      "Durable shockproof braided casing"
    ]
  },
  {
    id: 4,
    name: "Nova mechanical Gaming Keyboard",
    category: "Electronics",
    price: 119.00,
    originalPrice: 149.00,
    rating: 4.8,
    reviews: 98,
    badge: "New",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=700&q=80",
    description: "Tenkeyless mechanical gaming keyboard engineered with hot-swappable tactile switches, per-key RGB illumination, and aircraft-grade aluminum top plate.",
    features: [
      "Custom hot-swappable linear switches",
      "Double-shot PBT keycaps",
      "Per-key RGB backlighting customizable profiles",
      "Detachable USB-C braided cable"
    ]
  },
  {
    id: 5,
    name: "TrueAir Noise Cancelling Earbuds",
    category: "Electronics",
    price: 89.99,
    originalPrice: 119.99,
    rating: 4.6,
    reviews: 140,
    badge: "Sale",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=700&q=80",
    description: "Pocket-sized wireless earbuds with transparency mode, studio-grade audio drivers, quad microphones for clear calls, and Qi wireless charging.",
    features: [
      "Hybrid active noise cancellation",
      "32 total hours with wireless charging case",
      "IPX5 sweat and splash resistance",
      "Touch gesture volume and track controls"
    ]
  },
  {
    id: 6,
    name: "Vantage 4K Ultra Webcam",
    category: "Electronics",
    price: 139.00,
    originalPrice: 169.00,
    rating: 4.7,
    reviews: 86,
    badge: "",
    image: "https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=700&q=80",
    description: "Broadcast-quality 4K streaming webcam with AI auto-framing, dual noise-reducing stereo microphones, and adjustable privacy shutter.",
    features: [
      "4K Ultra HD at 30fps / 1080p at 60fps",
      "AI-driven autofocus and low-light correction",
      "Built-in privacy physical cover",
      "Universal mounting clip for monitors & tripods"
    ]
  },

  // --- Clothing ---
  {
    id: 7,
    name: "Classic Organic Cotton Crewneck",
    category: "Clothing",
    price: 34.50,
    originalPrice: 45.00,
    rating: 4.6,
    reviews: 190,
    badge: "Bestseller",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=700&q=80",
    description: "Sustainably sourced 100% combed organic ring-spun cotton. Pre-shrunk for the ideal tailored drape and everyday relaxed comfort.",
    features: [
      "100% GOTS certified organic cotton",
      "Reinforced double-stitched collar",
      "Breathable heavyweight 220 GSM fabric",
      "Tagless itch-free neckline"
    ]
  },
  {
    id: 8,
    name: "Urban Explorer Windbreaker Jacket",
    category: "Clothing",
    price: 89.00,
    originalPrice: 115.00,
    rating: 4.8,
    reviews: 112,
    badge: "Hot",
    image: "https://images.unsplash.com/photo-1544441893-675973e31985?w=700&q=80",
    description: "Lightweight, weather-resistant shell featuring water-repellent DWR coating, reflective safety accents, and packable stow-away design.",
    features: [
      "Durable water-repellent (DWR) finish",
      "Zippered storm pockets with cable port",
      "Adjustable bungee hood and hem",
      "Packs down neatly into its own left pocket"
    ]
  },
  {
    id: 9,
    name: "Everyday Stretch Chino Pants",
    category: "Clothing",
    price: 54.99,
    originalPrice: 69.99,
    rating: 4.7,
    reviews: 165,
    badge: "Sale",
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=700&q=80",
    description: "Modern slim-tapered chinos tailored with a touch of elastane for complete 4-way flexibility from office hours to weekend getaways.",
    features: [
      "97% Cotton, 3% Spandex stretch twill",
      "Hidden zippered secure passport pocket",
      "Wrinkle-resistant wash & wear fabric",
      "Reinforced belt loops and pockets"
    ]
  },
  {
    id: 10,
    name: "Merino Wool Thermal Knit Sweater",
    category: "Clothing",
    price: 98.00,
    originalPrice: 130.00,
    rating: 4.9,
    reviews: 88,
    badge: "New",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=700&q=80",
    description: "Ultra-fine Australian Merino wool that naturally regulates body temperature, resists odor, and feels exceptionally soft against bare skin.",
    features: [
      "100% pure extra-fine Merino wool",
      "Naturally thermal & odor-resistant",
      "Ribbed cuffs, hem and crew collar",
      "Pill-resistant yarn treatment"
    ]
  },
  {
    id: 11,
    name: "Minimalist Heavyweight Fleece Hoodie",
    category: "Clothing",
    price: 64.00,
    originalPrice: 80.00,
    rating: 4.8,
    reviews: 240,
    badge: "Hot",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=700&q=80",
    description: "Thick 400 GSM brushed fleece with generous kangaroo pocket, double-lined hood, and subtle tailored drop-shoulder silhouette.",
    features: [
      "Heavyweight 400 GSM fleece",
      "Double-lined hood with knotted drawcords",
      "Brushed inner lining for cloud-like softness",
      "Preshrunk colorfast dye"
    ]
  },
  {
    id: 12,
    name: "All-Day Active Training Shorts",
    category: "Clothing",
    price: 38.00,
    originalPrice: 48.00,
    rating: 4.5,
    reviews: 74,
    badge: "",
    image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=700&q=80",
    description: "High-performance moisture-wicking shorts with built-in compression liner, phone sleeve, and 4-way stretch unrestricted range of motion.",
    features: [
      "Quick-dry antimicrobial fabric",
      "Internal compression liner with bounce-free phone pocket",
      "Ventilated laser-cut side perforations",
      "Reflective accents for low-light workouts"
    ]
  },

  // --- Accessories ---
  {
    id: 13,
    name: "Heritage Chronograph Leather Watch",
    category: "Accessories",
    price: 185.00,
    originalPrice: 225.00,
    rating: 4.9,
    reviews: 135,
    badge: "Bestseller",
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=700&q=80",
    description: "Timeless chronograph timepiece with sapphire-coated crystal glass, surgical-grade stainless steel case, and genuine Italian calf leather strap.",
    features: [
      "Japanese quartz chronograph movement",
      "Scratch-resistant sapphire crystal",
      "5 ATM / 50m water resistance",
      "Interchangeable quick-release leather band"
    ]
  },
  {
    id: 14,
    name: "Everyday Commuter Leather Backpack",
    category: "Accessories",
    price: 120.00,
    originalPrice: 160.00,
    rating: 4.8,
    reviews: 198,
    badge: "Hot",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=700&q=80",
    description: "Sleek waterproof backpack with dedicated 16-inch padded laptop compartment, luggage trolley pass-through, and anti-theft hidden pocket.",
    features: [
      "Weatherproof full-grain vegan leather & canvas",
      "Shockproof 16\" laptop and tablet divider",
      "Hidden back passport and card zipper pocket",
      "Ergonomic padded airflow shoulder straps"
    ]
  },
  {
    id: 15,
    name: "Aviator Polarized Sunglasses",
    category: "Accessories",
    price: 68.00,
    originalPrice: 85.00,
    rating: 4.7,
    reviews: 110,
    badge: "Sale",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=700&q=80",
    description: "Classic teardrop aviator frame built with ultra-lightweight titanium alloy and premium UV400 polarized glare-reducing lenses.",
    features: [
      "100% UV400 full ultraviolet protection",
      "Glare-cutting polarized triacetate lenses",
      "Ultra-durable corrosion-proof metal alloy",
      "Includes hard leather protective case and cloth"
    ]
  },
  {
    id: 16,
    name: "RFID-Blocking Slim Bifold Wallet",
    category: "Accessories",
    price: 35.00,
    originalPrice: 45.00,
    rating: 4.8,
    reviews: 310,
    badge: "Hot",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=700&q=80",
    description: "Slim profile wallet crafted with top-grain leather, quick-access thumb slider, cash clip, and built-in RFID shielding to protect personal data.",
    features: [
      "Certified RFID protection against digital skimming",
      "Holds up to 10 cards plus full-length bills",
      "Ultra-slim 0.4\" thickness in pocket",
      "Supple hand-burnished genuine leather"
    ]
  },
  {
    id: 17,
    name: "Insulated Thermal Stainless Tumbler",
    category: "Accessories",
    price: 28.00,
    originalPrice: 35.00,
    rating: 4.9,
    reviews: 245,
    badge: "Bestseller",
    image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=700&q=80",
    description: "Double-wall vacuum insulated 24oz travel tumbler keeping beverages piping hot for 12 hours or ice-cold for 24 hours without sweating.",
    features: [
      "18/8 food-grade stainless steel interior",
      "100% leakproof lockable 2-way lid",
      "Cup-holder friendly tapered base",
      "BPA-free & dishwasher safe"
    ]
  },
  {
    id: 18,
    name: "Handcrafted Braided Leather Belt",
    category: "Accessories",
    price: 42.00,
    originalPrice: 55.00,
    rating: 4.6,
    reviews: 62,
    badge: "",
    image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=700&q=80",
    description: "Artisanal braided belt woven with genuine cowhide leather and solid brass buckle. Features infinitely micro-adjustable comfort sizing.",
    features: [
      "100% full-grain braided leather",
      "Infinitely adjustable no-hole pin latching",
      "Brushed solid antique brass hardware",
      "Hand-finished edge burnish"
    ]
  }
];

// =============================================================================
// 2. STATE MANAGEMENT
// =============================================================================
const state = {
  products: [...PRODUCTS],
  filteredProducts: [...PRODUCTS],
  currentCategory: 'all',
  minPrice: null,
  maxPrice: null,
  searchQuery: '',
  sortBy: 'featured',
  cart: [],
  activeDetailProduct: null
};

// LocalStorage Cart Key
const CART_STORAGE_KEY = 'shopsphere_cart_v1';

// =============================================================================
// 3. INITIALIZATION & DOM SELECTION
// =============================================================================
document.addEventListener('DOMContentLoaded', () => {
  loadCartFromStorage();
  initDOMElements();
  bindEvents();
  renderProducts();
  updateCartUI();
});

// Cache elements
let el = {};
function initDOMElements() {
  el = {
    productGrid: document.getElementById('product-grid'),
    emptyState: document.getElementById('empty-state'),
    emptyResetBtn: document.getElementById('empty-reset-btn'),
    categoryPills: document.querySelectorAll('.filter-pill'),
    sortSelect: document.getElementById('sort-select'),
    minPriceInput: document.getElementById('min-price-input'),
    maxPriceInput: document.getElementById('max-price-input'),
    applyPriceBtn: document.getElementById('apply-price-btn'),
    resetFiltersBtn: document.getElementById('reset-filters-btn'),
    priceDisplayRange: document.getElementById('price-display-range'),
    productCountDisplay: document.getElementById('product-count-display'),
    globalSearch: document.getElementById('global-search'),
    clearSearchBtn: document.getElementById('clear-search-btn'),
    
    // Product Details Modal
    productModal: document.getElementById('product-modal'),
    modalCloseBtn: document.getElementById('modal-close-btn'),
    modalImage: document.getElementById('modal-image'),
    modalCategory: document.getElementById('modal-category'),
    modalTitle: document.getElementById('modal-title'),
    modalRatingVal: document.getElementById('modal-rating-val'),
    modalReviewsCount: document.getElementById('modal-reviews-count'),
    modalSku: document.getElementById('modal-sku'),
    modalPrice: document.getElementById('modal-price'),
    modalOriginalPrice: document.getElementById('modal-original-price'),
    modalDiscountTag: document.getElementById('modal-discount-tag'),
    modalDescription: document.getElementById('modal-description'),
    modalFeaturesList: document.getElementById('modal-features-list'),
    modalQtyMinus: document.getElementById('modal-qty-minus'),
    modalQtyPlus: document.getElementById('modal-qty-plus'),
    modalQtyInput: document.getElementById('modal-qty-input'),
    modalAddToCartBtn: document.getElementById('modal-add-to-cart-btn'),

    // Cart Elements
    cartCountBadge: document.getElementById('cart-count-badge'),
    mobileCartCount: document.getElementById('mobile-cart-count'),
    openCartBtn: document.getElementById('open-cart-btn'),
    closeCartBtn: document.getElementById('close-cart-btn'),
    cartDrawer: document.getElementById('cart-drawer'),
    cartDrawerOverlay: document.getElementById('cart-drawer-overlay'),
    cartDrawerCount: document.getElementById('cart-drawer-count'),
    cartDrawerBody: document.getElementById('cart-drawer-body'),
    cartEmptyState: document.getElementById('cart-empty-state'),
    cartItemsList: document.getElementById('cart-items-list'),
    cartDrawerFooter: document.getElementById('cart-drawer-footer'),
    cartSubtotalPrice: document.getElementById('cart-subtotal-price'),
    cartShippingStatus: document.getElementById('cart-shipping-status'),
    cartGrandTotal: document.getElementById('cart-grand-total'),
    checkoutBtn: document.getElementById('checkout-btn'),
    clearCartBtn: document.getElementById('clear-cart-btn'),
    cartStartShoppingBtn: document.getElementById('cart-start-shopping-btn'),

    // Checkout Modal
    checkoutModal: document.getElementById('checkout-modal'),
    checkoutDoneBtn: document.getElementById('checkout-done-btn'),
    checkoutSummaryBox: document.getElementById('checkout-summary-box'),
    orderReferenceId: document.getElementById('order-reference-id'),

    // Mobile Nav
    mobileMenuToggle: document.getElementById('mobile-menu-toggle'),
    mobileNavDrawer: document.getElementById('mobile-nav-drawer'),
    mobileNavBackdrop: document.getElementById('mobile-nav-backdrop'),
    closeMobileNavBtn: document.getElementById('close-mobile-nav-btn'),
    mobileCartLink: document.getElementById('mobile-cart-link'),

    // Toast
    toastContainer: document.getElementById('toast-container')
  };
}

// =============================================================================
// 4. EVENT BINDINGS
// =============================================================================
function bindEvents() {
  // Category Pill Filter buttons
  el.categoryPills.forEach(pill => {
    pill.addEventListener('click', (e) => {
      const category = pill.getAttribute('data-category');
      setActiveCategory(category);
    });
  });

  // Sort Selection
  el.sortSelect.addEventListener('change', (e) => {
    state.sortBy = e.target.value;
    applyAllFilters();
  });

  // Price Filter Apply
  el.applyPriceBtn.addEventListener('click', () => {
    handlePriceFilterChange();
  });

  // Price filter on Enter key
  el.minPriceInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handlePriceFilterChange();
  });
  el.maxPriceInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handlePriceFilterChange();
  });

  // Reset Filters Button
  el.resetFiltersBtn.addEventListener('click', resetAllFilters);
  if (el.emptyResetBtn) {
    el.emptyResetBtn.addEventListener('click', resetAllFilters);
  }

  // Search Input live typing
  el.globalSearch.addEventListener('input', (e) => {
    state.searchQuery = e.target.value.trim().toLowerCase();
    if (state.searchQuery.length > 0) {
      el.clearSearchBtn.style.display = 'block';
    } else {
      el.clearSearchBtn.style.display = 'none';
    }
    applyAllFilters();
  });

  // Clear Search button
  el.clearSearchBtn.addEventListener('click', () => {
    el.globalSearch.value = '';
    state.searchQuery = '';
    el.clearSearchBtn.style.display = 'none';
    applyAllFilters();
  });

  // Modal interactions
  el.modalCloseBtn.addEventListener('click', closeProductModal);
  el.productModal.addEventListener('click', (e) => {
    if (e.target === el.productModal) closeProductModal();
  });

  // Modal Quantity Stepper
  el.modalQtyMinus.addEventListener('click', () => {
    let val = parseInt(el.modalQtyInput.value, 10) || 1;
    if (val > 1) {
      el.modalQtyInput.value = val - 1;
    }
  });

  el.modalQtyPlus.addEventListener('click', () => {
    let val = parseInt(el.modalQtyInput.value, 10) || 1;
    if (val < 99) {
      el.modalQtyInput.value = val + 1;
    }
  });

  // Modal Add To Cart
  el.modalAddToCartBtn.addEventListener('click', () => {
    if (state.activeDetailProduct) {
      const qty = parseInt(el.modalQtyInput.value, 10) || 1;
      addToCart(state.activeDetailProduct.id, qty);
      closeProductModal();
    }
  });

  // Cart Drawer open/close
  el.openCartBtn.addEventListener('click', openCart);
  el.closeCartBtn.addEventListener('click', closeCart);
  el.cartDrawerOverlay.addEventListener('click', closeCart);
  el.cartStartShoppingBtn.addEventListener('click', () => {
    closeCart();
    document.getElementById('products-section').scrollIntoView({ behavior: 'smooth' });
  });

  // Clear Cart
  el.clearCartBtn.addEventListener('click', () => {
    if (state.cart.length === 0) return;
    if (confirm('Are you sure you want to clear all items from your cart?')) {
      state.cart = [];
      saveCartToStorage();
      updateCartUI();
      showToast('Cart has been cleared', 'info');
    }
  });

  // Checkout
  el.checkoutBtn.addEventListener('click', handleCheckout);
  el.checkoutDoneBtn.addEventListener('click', () => {
    el.checkoutModal.classList.remove('open');
    closeCart();
  });

  // Mobile Nav Drawer
  el.mobileMenuToggle.addEventListener('click', openMobileNav);
  el.closeMobileNavBtn.addEventListener('click', closeMobileNav);
  el.mobileNavBackdrop.addEventListener('click', closeMobileNav);
  el.mobileCartLink.addEventListener('click', (e) => {
    e.preventDefault();
    closeMobileNav();
    openCart();
  });

  // Close modals on ESC key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProductModal();
      closeCart();
      closeMobileNav();
      el.checkoutModal.classList.remove('open');
    }
  });
}

// Global Category Filter Trigger (from cards/links)
window.filterByCategory = function(categoryName) {
  setActiveCategory(categoryName);
  const target = document.getElementById('products-section');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
};

function setActiveCategory(categoryName) {
  state.currentCategory = categoryName;

  // Update pill styles
  el.categoryPills.forEach(pill => {
    const pCat = pill.getAttribute('data-category');
    if (pCat === categoryName) {
      pill.classList.add('active');
    } else {
      pill.classList.remove('active');
    }
  });

  applyAllFilters();
}

function handlePriceFilterChange() {
  const minVal = parseFloat(el.minPriceInput.value);
  const maxVal = parseFloat(el.maxPriceInput.value);

  state.minPrice = !isNaN(minVal) ? minVal : null;
  state.maxPrice = !isNaN(maxVal) ? maxVal : null;

  // Validation
  if (state.minPrice !== null && state.maxPrice !== null && state.minPrice > state.maxPrice) {
    showToast('Min price cannot be greater than Max price', 'warning');
    return;
  }

  // Update label
  updatePriceFilterLabel();
  applyAllFilters();
}

function updatePriceFilterLabel() {
  const minStr = state.minPrice !== null ? `$${state.minPrice}` : '$0';
  const maxStr = state.maxPrice !== null ? `$${state.maxPrice}` : '$1,000+';
  el.priceDisplayRange.textContent = `${minStr} – ${maxStr}`;
}

function resetAllFilters() {
  state.currentCategory = 'all';
  state.minPrice = null;
  state.maxPrice = null;
  state.searchQuery = '';
  state.sortBy = 'featured';

  // Reset Inputs
  el.minPriceInput.value = '';
  el.maxPriceInput.value = '';
  el.globalSearch.value = '';
  el.clearSearchBtn.style.display = 'none';
  el.sortSelect.value = 'featured';
  el.priceDisplayRange.textContent = '$0 – $1,000';

  // Reset Pills
  el.categoryPills.forEach(pill => {
    if (pill.getAttribute('data-category') === 'all') {
      pill.classList.add('active');
    } else {
      pill.classList.remove('active');
    }
  });

  applyAllFilters();
  showToast('Filters reset to default', 'info');
}

// =============================================================================
// 5. FILTERING & SORTING ENGINE
// =============================================================================
function applyAllFilters() {
  let list = [...state.products];

  // 1. Category Filter
  if (state.currentCategory !== 'all') {
    list = list.filter(item => item.category.toLowerCase() === state.currentCategory.toLowerCase());
  }

  // 2. Price Filter
  if (state.minPrice !== null) {
    list = list.filter(item => item.price >= state.minPrice);
  }
  if (state.maxPrice !== null) {
    list = list.filter(item => item.price <= state.maxPrice);
  }

  // 3. Search Query Filter (Title, description, category)
  if (state.searchQuery) {
    list = list.filter(item => {
      const inTitle = item.name.toLowerCase().includes(state.searchQuery);
      const inDesc = item.description.toLowerCase().includes(state.searchQuery);
      const inCat = item.category.toLowerCase().includes(state.searchQuery);
      return inTitle || inDesc || inCat;
    });
  }

  // 4. Sorting
  switch (state.sortBy) {
    case 'price-low':
      list.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      list.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      list.sort((a, b) => b.rating - a.rating);
      break;
    case 'name-asc':
      list.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'featured':
    default:
      list.sort((a, b) => a.id - b.id);
      break;
  }

  state.filteredProducts = list;
  renderProducts();
}

// =============================================================================
// 6. PRODUCT GRID RENDERING
// =============================================================================
function renderProducts() {
  const items = state.filteredProducts;
  el.productCountDisplay.textContent = items.length;

  if (items.length === 0) {
    el.productGrid.style.display = 'none';
    el.emptyState.style.display = 'block';
    return;
  }

  el.emptyState.style.display = 'none';
  el.productGrid.style.display = 'grid';

  el.productGrid.innerHTML = items.map(product => {
    const badgeHTML = product.badge ? `
      <span class="product-badge ${product.badge.toLowerCase()}">${product.badge}</span>
    ` : '';

    return `
      <article class="product-card" data-id="${product.id}">
        <div class="product-image-container" onclick="openProductDetails(${product.id})">
          <img 
            src="${product.image}" 
            alt="${escapeHtml(product.name)}" 
            class="product-image" 
            loading="lazy"
            onerror="this.src='https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700&q=80'"
          >
          <span class="product-category-tag">${product.category}</span>
          ${badgeHTML}
        </div>

        <div class="product-card-body">
          <div class="product-rating-row">
            <span class="product-stars"><i class="fa-solid fa-star"></i></span>
            <span class="product-rating-score">${product.rating}</span>
            <span class="product-reviews-count">(${product.reviews})</span>
          </div>

          <h3 class="product-name" onclick="openProductDetails(${product.id})" title="${escapeHtml(product.name)}">
            ${escapeHtml(product.name)}
          </h3>

          <div class="product-price-row">
            <span class="product-price">$${product.price.toFixed(2)}</span>
            ${product.originalPrice ? `<span class="product-original-price">$${product.originalPrice.toFixed(2)}</span>` : ''}
          </div>

          <div class="product-card-actions">
            <button class="btn-card-details" onclick="openProductDetails(${product.id})">
              <i class="fa-regular fa-eye"></i> View Details
            </button>
            <button class="btn-card-add" onclick="addToCart(${product.id}, 1)">
              <i class="fa-solid fa-cart-plus"></i> Add to Cart
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// =============================================================================
// 7. PRODUCT DETAILS MODAL
// =============================================================================
window.openProductDetails = function(productId) {
  const product = state.products.find(p => p.id === productId);
  if (!product) return;

  state.activeDetailProduct = product;

  // Fill in content
  el.modalImage.src = product.image;
  el.modalImage.alt = product.name;
  el.modalCategory.textContent = product.category;
  el.modalTitle.textContent = product.name;
  el.modalRatingVal.textContent = product.rating;
  el.modalReviewsCount.textContent = `(${product.reviews} reviews)`;
  el.modalSku.textContent = `SKU: SP-${String(product.id).padStart(4, '0')}`;
  el.modalPrice.textContent = `$${product.price.toFixed(2)}`;

  if (product.originalPrice) {
    el.modalOriginalPrice.style.display = 'inline';
    el.modalDiscountTag.style.display = 'inline-block';
    el.modalOriginalPrice.textContent = `$${product.originalPrice.toFixed(2)}`;
    const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
    el.modalDiscountTag.textContent = `Save ${discount}%`;
  } else {
    el.modalOriginalPrice.style.display = 'none';
    el.modalDiscountTag.style.display = 'none';
  }

  el.modalDescription.textContent = product.description;

  // Features list
  el.modalFeaturesList.innerHTML = (product.features || []).map(f => `
    <li>${escapeHtml(f)}</li>
  `).join('');

  // Reset Quantity Input
  el.modalQtyInput.value = 1;

  // Open modal
  el.productModal.classList.add('open');
  document.body.style.overflow = 'hidden';
};

function closeProductModal() {
  el.productModal.classList.remove('open');
  document.body.style.overflow = '';
  state.activeDetailProduct = null;
}

// =============================================================================
// 8. SHOPPING CART LOGIC
// =============================================================================
window.addToCart = function(productId, quantity = 1) {
  const product = state.products.find(p => p.id === productId);
  if (!product) return;

  const existingItemIndex = state.cart.findIndex(item => item.productId === productId);

  if (existingItemIndex > -1) {
    state.cart[existingItemIndex].quantity += quantity;
  } else {
    state.cart.push({
      productId: product.id,
      quantity: quantity
    });
  }

  saveCartToStorage();
  updateCartUI();
  triggerBadgeBounce();
  showToast(`Added ${quantity > 1 ? quantity + 'x ' : ''}"${product.name}" to cart!`, 'success');
};

window.updateCartQuantity = function(productId, delta) {
  const itemIndex = state.cart.findIndex(item => item.productId === productId);
  if (itemIndex === -1) return;

  const newQty = state.cart[itemIndex].quantity + delta;

  if (newQty <= 0) {
    removeFromCart(productId);
  } else {
    state.cart[itemIndex].quantity = newQty;
    saveCartToStorage();
    updateCartUI();
  }
};

window.removeFromCart = function(productId) {
  const itemIndex = state.cart.findIndex(item => item.productId === productId);
  if (itemIndex === -1) return;

  const removedProduct = state.products.find(p => p.id === productId);
  const productName = removedProduct ? removedProduct.name : 'Item';

  state.cart.splice(itemIndex, 1);
  saveCartToStorage();
  updateCartUI();
  showToast(`Removed "${productName}" from cart`, 'info');
};

function updateCartUI() {
  const totalItemCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);

  // Update Badges
  el.cartCountBadge.textContent = totalItemCount;
  el.mobileCartCount.textContent = totalItemCount;
  el.cartDrawerCount.textContent = `${totalItemCount} ${totalItemCount === 1 ? 'item' : 'items'}`;

  // If cart empty
  if (state.cart.length === 0) {
    el.cartEmptyState.style.display = 'block';
    el.cartItemsList.style.display = 'none';
    el.cartDrawerFooter.style.display = 'none';
    return;
  }

  el.cartEmptyState.style.display = 'none';
  el.cartItemsList.style.display = 'flex';
  el.cartDrawerFooter.style.display = 'flex';

  let subtotal = 0;

  el.cartItemsList.innerHTML = state.cart.map(item => {
    const product = state.products.find(p => p.id === item.productId);
    if (!product) return '';

    const itemTotal = product.price * item.quantity;
    subtotal += itemTotal;

    return `
      <div class="cart-item" data-id="${product.id}">
        <img 
          src="${product.image}" 
          alt="${escapeHtml(product.name)}" 
          class="cart-item-img"
          onerror="this.src='https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700&q=80'"
        >
        <div class="cart-item-info">
          <span class="cart-item-category">${product.category}</span>
          <h4 class="cart-item-title">${escapeHtml(product.name)}</h4>
          <span class="cart-item-price">$${product.price.toFixed(2)} each</span>
        </div>
        <div class="cart-item-actions">
          <div class="cart-item-qty">
            <button class="cart-qty-btn" onclick="updateCartQuantity(${product.id}, -1)" aria-label="Decrease quantity">
              <i class="fa-solid fa-minus"></i>
            </button>
            <span class="cart-qty-value">${item.quantity}</span>
            <button class="cart-qty-btn" onclick="updateCartQuantity(${product.id}, 1)" aria-label="Increase quantity">
              <i class="fa-solid fa-plus"></i>
            </button>
          </div>
          <button class="cart-item-remove-btn" onclick="removeFromCart(${product.id})" title="Remove item" aria-label="Remove item">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>
    `;
  }).join('');

  // Shipping calculation: Free over $50, else $0 as per store offer
  const shipping = subtotal >= 50 || subtotal === 0 ? 0 : 5.00;
  const grandTotal = subtotal + shipping;

  el.cartSubtotalPrice.textContent = `$${subtotal.toFixed(2)}`;
  el.cartShippingStatus.textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
  el.cartGrandTotal.textContent = `$${grandTotal.toFixed(2)}`;
}

function openCart() {
  el.cartDrawer.classList.add('open');
  el.cartDrawerOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  el.cartDrawer.classList.remove('open');
  el.cartDrawerOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

function triggerBadgeBounce() {
  el.cartCountBadge.classList.add('bounce');
  setTimeout(() => {
    el.cartCountBadge.classList.remove('bounce');
  }, 350);
}

// LocalStorage Helper
function saveCartToStorage() {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.cart));
  } catch (err) {
    console.warn('Storage failed:', err);
  }
}

function loadCartFromStorage() {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    if (raw) {
      state.cart = JSON.parse(raw);
    }
  } catch (err) {
    console.warn('Storage read failed:', err);
    state.cart = [];
  }
}

// =============================================================================
// 9. CHECKOUT SIMULATION
// =============================================================================
function handleCheckout() {
  if (state.cart.length === 0) return;

  const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = el.cartGrandTotal.textContent;
  const randomRef = 'SP-' + Math.floor(100000 + Math.random() * 900000);

  el.orderReferenceId.textContent = '#' + randomRef;
  el.checkoutSummaryBox.innerHTML = `
    <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
      <span>Total Items:</span>
      <strong>${totalCount} items</strong>
    </div>
    <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
      <span>Shipping Method:</span>
      <strong>Standard Complimentary</strong>
    </div>
    <div style="display: flex; justify-content: space-between; font-size: 1.05rem; padding-top: 0.5rem; border-top: 1px solid #cbd5e1;">
      <span>Amount Paid:</span>
      <strong style="color: #4f46e5;">${totalAmount}</strong>
    </div>
  `;

  // Clear cart after checkout
  state.cart = [];
  saveCartToStorage();
  updateCartUI();

  // Show checkout modal
  el.checkoutModal.classList.add('open');
}

// =============================================================================
// 10. MOBILE NAVIGATION DRAWER
// =============================================================================
function openMobileNav() {
  el.mobileNavDrawer.classList.add('open');
  el.mobileNavBackdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeMobileNav() {
  el.mobileNavDrawer.classList.remove('open');
  el.mobileNavBackdrop.classList.remove('open');
  document.body.style.overflow = '';
}

// =============================================================================
// 11. TOAST NOTIFICATIONS
// =============================================================================
window.showToast = function(message, type = 'info') {
  if (!el.toastContainer) return;

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;

  let icon = 'fa-circle-info';
  if (type === 'success') icon = 'fa-circle-check';
  if (type === 'warning') icon = 'fa-triangle-exclamation';

  toast.innerHTML = `
    <i class="fa-solid ${icon}"></i>
    <span>${escapeHtml(message)}</span>
  `;

  el.toastContainer.appendChild(toast);

  // Trigger animation
  setTimeout(() => {
    toast.classList.add('show');
  }, 10);

  // Auto remove after 3.2 seconds
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 300);
  }, 3200);
};

// =============================================================================
// 12. UTILITY FUNCTIONS
// =============================================================================
function escapeHtml(text) {
  if (!text) return '';
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
