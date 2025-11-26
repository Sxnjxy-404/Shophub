// Product Data
const products = [
    {
        id: 1,
        name: "iPhone 15 Pro Max",
        category: "mobiles",
        price: 134900,
        originalPrice: 159900,
        discount: "16% OFF",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect fill='%23e0f2fe' width='400' height='400'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='48' fill='%230284c7'%3E📱 iPhone%3C/text%3E%3C/svg%3E",
        specs: {
            "Brand": "Apple",
            "RAM": "8GB",
            "Storage": "256GB",
            "Display": "6.7 inch Super Retina XDR"
        }
    },
    {
        id: 2,
        name: "Samsung Galaxy S24 Ultra",
        category: "mobiles",
        price: 129999,
        originalPrice: 144999,
        discount: "10% OFF",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect fill='%23ddd6fe' width='400' height='400'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='48' fill='%237c3aed'%3E📱 Galaxy%3C/text%3E%3C/svg%3E",
        specs: {
            "Brand": "Samsung",
            "RAM": "12GB",
            "Storage": "512GB",
            "Display": "6.8 inch Dynamic AMOLED"
        }
    },
    {
        id: 3,
        name: "MacBook Pro M3",
        category: "laptops",
        price: 199900,
        originalPrice: 239900,
        discount: "17% OFF",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect fill='%23fee2e2' width='400' height='400'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='42' fill='%23dc2626'%3E💻 MacBook%3C/text%3E%3C/svg%3E",
        specs: {
            "Brand": "Apple",
            "Processor": "M3 Pro",
            "RAM": "16GB",
            "Storage": "512GB SSD"
        }
    },
    {
        id: 4,
        name: "Dell XPS 15",
        category: "laptops",
        price: 154999,
        originalPrice: 179999,
        discount: "14% OFF",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect fill='%23dcfce7' width='400' height='400'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='48' fill='%2316a34a'%3E💻 Dell XPS%3C/text%3E%3C/svg%3E",
        specs: {
            "Brand": "Dell",
            "Processor": "Intel i7 13th Gen",
            "RAM": "16GB",
            "Storage": "1TB SSD"
        }
    },
    {
        id: 5,
        name: "Sony WH-1000XM5",
        category: "headphones",
        price: 29990,
        originalPrice: 34990,
        discount: "14% OFF",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect fill='%23fef3c7' width='400' height='400'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='48' fill='%23ca8a04'%3E🎧 Sony%3C/text%3E%3C/svg%3E",
        specs: {
            "Brand": "Sony",
            "Type": "Over-ear",
            "Battery": "30 hours",
            "Feature": "Active Noise Cancellation"
        }
    },
    {
        id: 6,
        name: "AirPods Pro 2",
        category: "headphones",
        price: 24900,
        originalPrice: 26900,
        discount: "7% OFF",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect fill='%23e0e7ff' width='400' height='400'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='42' fill='%234f46e5'%3E🎧 AirPods%3C/text%3E%3C/svg%3E",
        specs: {
            "Brand": "Apple",
            "Type": "In-ear",
            "Battery": "6 hours",
            "Feature": "Adaptive Audio"
        }
    },
    {
        id: 7,
        name: "Apple Watch Series 9",
        category: "watches",
        price: 45900,
        originalPrice: 49900,
        discount: "8% OFF",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect fill='%23fce7f3' width='400' height='400'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='42' fill='%23db2777'%3E⌚ Apple Watch%3C/text%3E%3C/svg%3E",
        specs: {
            "Brand": "Apple",
            "Display": "Always-On Retina",
            "Size": "45mm",
            "Feature": "ECG + Blood Oxygen"
        }
    },
    {
        id: 8,
        name: "Samsung Galaxy Watch 6",
        category: "watches",
        price: 29999,
        originalPrice: 34999,
        discount: "14% OFF",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect fill='%23fed7aa' width='400' height='400'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='38' fill='%23ea580c'%3E⌚ Galaxy Watch%3C/text%3E%3C/svg%3E",
        specs: {
            "Brand": "Samsung",
            "Display": "Super AMOLED",
            "Size": "44mm",
            "Feature": "Body Composition"
        }
    },
    {
        id: 9,
        name: "OnePlus 12",
        category: "mobiles",
        price: 64999,
        originalPrice: 69999,
        discount: "7% OFF",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect fill='%23cffafe' width='400' height='400'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='42' fill='%2306b6d4'%3E📱 OnePlus%3C/text%3E%3C/svg%3E",
        specs: {
            "Brand": "OnePlus",
            "RAM": "16GB",
            "Storage": "256GB",
            "Display": "6.82 inch AMOLED"
        }
    },
    {
        id: 10,
        name: "Lenovo ThinkPad X1",
        category: "laptops",
        price: 124999,
        originalPrice: 149999,
        discount: "17% OFF",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect fill='%23f3e8ff' width='400' height='400'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='40' fill='%239333ea'%3E💻 ThinkPad%3C/text%3E%3C/svg%3E",
        specs: {
            "Brand": "Lenovo",
            "Processor": "Intel i7 13th Gen",
            "RAM": "16GB",
            "Storage": "512GB SSD"
        }
    }
];

// State
let cart = [];
let wishlist = [];
let currentProduct = null;

// Navigation
function navigateTo(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(page).classList.add('active');
    
    if (page === 'cart') {
        renderCart();
    } else if (page === 'checkout') {
        renderCheckoutSummary();
    }
}

// Render Products
function renderProducts(container, productsToRender) {
    const html = productsToRender.map(product => {
        const priceWhole = Math.floor(product.price);
        const priceDecimal = '00';
        const savings = product.originalPrice - product.price;
        const savingsPercent = Math.round((savings / product.originalPrice) * 100);
        
        return `
        <div class="product-card">
            <span class="product-badge">${savingsPercent}% OFF</span>
            <span class="prime-badge">Prime</span>
            <img src="${product.image}" alt="${product.name}" class="product-image" onclick="viewProduct(${product.id})">
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-rating-small">
                    <span class="stars">★★★★☆</span>
                    <span class="rating-count">${Math.floor(Math.random() * 5000 + 1000)}</span>
                </div>
                <div class="product-price">
                    <span class="price-symbol">₹</span>
                    <span class="price-current">${priceWhole.toLocaleString()}</span>
                    <span class="price-decimal">${priceDecimal}</span>
                </div>
                <div style="margin-bottom: 8px;">
                    <span class="price-original">M.R.P: ₹${product.originalPrice.toLocaleString()}</span>
                    <span class="discount-badge"> (${product.discount})</span>
                </div>
                <div class="delivery-info">
                    <span class="free-delivery">FREE Delivery</span> by Tomorrow
                </div>
                <div class="product-actions">
                    <button class="btn btn-primary" onclick="viewProduct(${product.id})">View Details</button>
                    <button class="btn btn-add-cart" onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            </div>
        </div>
    `}).join('');
    
    document.getElementById(container).innerHTML = html;
}

// Filter by category
function filterByCategory(category) {
    const filtered = products.filter(p => p.category === category);
    navigateTo('products');
    renderProducts('allProducts', filtered);
}

// View Product Details
function viewProduct(id) {
    currentProduct = products.find(p => p.id === id);
    if (!currentProduct) return;

    document.getElementById('detailName').textContent = currentProduct.name;
    document.getElementById('detailPrice').textContent = `₹${currentProduct.price.toLocaleString()}`;
    document.getElementById('detailOriginalPrice').textContent = `₹${currentProduct.originalPrice.toLocaleString()}`;
    document.getElementById('detailDiscount').textContent = currentProduct.discount;

    // Set images
    document.getElementById('detailMainImage').src = currentProduct.image;
    document.querySelectorAll('.thumbnail').forEach(thumb => {
        thumb.src = currentProduct.image;
    });

    // Render specifications
    const specsHtml = Object.entries(currentProduct.specs).map(([key, value]) => `
        <tr>
            <td class="spec-label">${key}</td>
            <td>${value}</td>
        </tr>
    `).join('');
    document.getElementById('specTable').innerHTML = specsHtml;

    navigateTo('productDetail');
}

// Thumbnail click handler
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.thumbnail').forEach(thumb => {
        thumb.addEventListener('click', function() {
            document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            document.getElementById('detailMainImage').src = this.src;
        });
    });
});

// Cart Functions
function addToCart(id) {
    const product = products.find(p => p.id === id);
    const existing = cart.find(item => item.id === id);
    
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCartCount();
    showNotification('Added to cart!');
}

function addToCartFromDetail() {
    if (currentProduct) {
        addToCart(currentProduct.id);
    }
}

function buyNow() {
    if (currentProduct) {
        cart = [{ ...currentProduct, quantity: 1 }];
        updateCartCount();
        navigateTo('checkout');
    }
}

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').textContent = count;
}

function renderCart() {
    const container = document.getElementById('cartContent');
    
    if (cart.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">🛒</div>
                <div class="empty-text">Your cart is empty</div>
                <button class="btn btn-primary btn-large" onclick="navigateTo('products')">Start Shopping</button>
            </div>
        `;
        return;
    }

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.18;
    const total = subtotal + tax;

    const cartItemsHtml = cart.map((item, index) => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">₹${item.price.toLocaleString()}</div>
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="updateQuantity(${index}, -1)">-</button>
                    <input type="text" class="quantity-input" value="${item.quantity}" readonly>
                    <button class="quantity-btn" onclick="updateQuantity(${index}, 1)">+</button>
                    <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
                </div>
            </div>
        </div>
    `).join('');

    container.innerHTML = `
        <div style="display: grid; grid-template-columns: 1fr 400px; gap: 24px;">
            <div class="cart-items">${cartItemsHtml}</div>
            <div class="cart-summary">
                <h3 style="margin-bottom: 20px;">Order Summary</h3>
                <div class="summary-row">
                    <span>Subtotal:</span>
                    <span>₹${subtotal.toLocaleString()}</span>
                </div>
                <div class="summary-row">
                    <span>Shipping:</span>
                    <span style="color: var(--color-success);">FREE</span>
                </div>
                <div class="summary-row">
                    <span>Tax (18%):</span>
                    <span>₹${tax.toLocaleString()}</span>
                </div>
                <div class="summary-row" style="border-bottom: none;">
                    <span style="font-weight: 700;">Total:</span>
                    <span class="summary-total">₹${total.toLocaleString()}</span>
                </div>
                <button class="btn btn-primary btn-large" style="width: 100%; margin-top: 20px;" onclick="navigateTo('checkout')">
                    Proceed to Checkout
                </button>
            </div>
        </div>
    `;
}

function updateQuantity(index, change) {
    cart[index].quantity += change;
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }
    updateCartCount();
    renderCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartCount();
    renderCart();
}

function renderCheckoutSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.18;
    const total = subtotal + tax;

    document.getElementById('checkoutSubtotal').textContent = `₹${subtotal.toLocaleString()}`;
    document.getElementById('checkoutTax').textContent = `₹${tax.toLocaleString()}`;
    document.getElementById('checkoutTotal').textContent = `₹${total.toLocaleString()}`;
}

function processPayment() {
    alert('🎉 Payment Successful!\n\nThis is a demo payment. Your order has been placed successfully.\n\nOrder ID: SHOP' + Math.floor(Math.random() * 100000));
    cart = [];
    updateCartCount();
    navigateTo('home');
}

// Wishlist
function toggleWishlist(id) {
    const index = wishlist.indexOf(id);
    if (index > -1) {
        wishlist.splice(index, 1);
        showNotification('Removed from wishlist');
    } else {
        wishlist.push(id);
        showNotification('Added to wishlist!');
    }
}

// Chat Bot
function openChatBot() {
    alert('💬 Support Bot\n\nHello! How can I help you today?\n\n1. Track Order\n2. Return Policy\n3. Payment Issues\n4. Product Inquiry\n\n(This is a demo chatbot)');
}

// Notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: #00b4d8;
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProducts('featuredProducts', products.slice(0, 6));
    renderProducts('allProducts', products);
    renderProducts('dealsProducts', products.filter(p => parseInt(p.discount) >= 14));
});

/* =================== PersonaSense Behaviour Tracking (SalesIQ v3 FINAL VERSION) ===================== */

document.addEventListener("DOMContentLoaded", function () {

  // Wait until SalesIQ widget is fully ready
  $zoho.salesiq.ready = function () {
    console.log("SalesIQ FULLY ready — tracking activated!");

    function trackEvent(name, meta) {
      try {
        if (window.$zoho && $zoho.salesiq && typeof $zoho.salesiq.sendEvent === "function") {
          $zoho.salesiq.sendEvent(name, meta || {});
          console.log("Tracked:", name, meta);
        }
      } catch (e) {
        console.warn("SalesIQ track error:", e);
      }
    }

    /* ---------- 1) Deep scroll detection ---------- */
    let deepScrollSent = false;
    window.addEventListener("scroll", () => {
      if (deepScrollSent) return;
      let scrollPercent =
        (window.scrollY + window.innerHeight) / document.body.scrollHeight;
      if (scrollPercent > 0.7) {
        deepScrollSent = true;
        trackEvent("deep_scroll", { percent: Math.round(scrollPercent * 100) });
      }
    });

    /* ---------- 2) Hover on price ---------- */
    function attachHoverEvents() {
      document
        .querySelectorAll(".product-card .product-price, .product-card img")
        .forEach((el) => {
          el.addEventListener("mouseover", () => {
            let pid = el.closest(".product-card")?.dataset.id || null;
            trackEvent("hover_price", { productId: pid });
          });
        });
    }
    attachHoverEvents();

    /* ---------- 3) Offer page visit ---------- */
    if (window.location.href.toLowerCase().includes("offers")) {
      trackEvent("offer_page_visit", { url: window.location.href });
    }

    /* ---------- 4) Wishlist ---------- */
    document.addEventListener("click", (e) => {
      if (e.target.closest(".wishlist-btn")) {
        let pid = e.target.closest(".product-card")?.dataset.id || null;
        trackEvent("wishlist_click", { productId: pid });
      }
    });

    /* ---------- 5) Compare products ---------- */
    document.addEventListener("click", (e) => {
      if (e.target.closest(".compare-btn")) {
        let pid = e.target.closest(".product-card")?.dataset.id || null;
        trackEvent("compare_products", { productId: pid });
      }
    });

    /* ---------- 6) Add to cart ---------- */
    let originalAddToCart = window.addToCart;
    window.addToCart = function (id) {
      trackEvent("add_to_cart_event", { productId: id });
      return originalAddToCart(id);
    };

    /* ---------- 7) Fast navigation ---------- */
    let pageStart = Date.now();
    window.addEventListener("beforeunload", () => {
      let stay = Date.now() - pageStart;
      if (stay < 8000) {
        trackEvent("fast_navigation", { stayTimeMs: stay });
      }
    });

    /* ---------- 8) Idle user ---------- */
    let idleTimer;
    function resetIdle() {
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        trackEvent("idle_user", { idleSec: 20 });
      }, 20000);
    }

    ["mousemove", "keydown", "scroll", "click"].forEach((evt) =>
      window.addEventListener(evt, resetIdle)
    );
    resetIdle();
  };
});
