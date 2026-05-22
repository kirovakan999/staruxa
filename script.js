// ---------- ТОВАРЫ (30 штук с категориями) ----------
const products = [
    // Усилители
    { id: 1, name: "Усилитель Audison SR 4.300", brand: "Audison", price: 27990, category: "amplifiers", image: "images/orig.jpg", specs: "4 x 75 Вт, Class AB", isNew: true },
    { id: 2, name: "Усилитель Helix M FOUR DSP", brand: "Helix", price: 49990, category: "amplifiers", image: "images/helix.jpg", specs: "4 x 120 Вт, DSP", isNew: true },
    { id: 3, name: "Усилитель Hertz HCP 4D", brand: "Hertz", price: 18990, category: "amplifiers", image: "images/hertz.jpg", specs: "4 x 80 Вт, Class D", isNew: false },
    { id: 4, name: "Моноблок JL Audio JD1000/1", brand: "JL Audio", price: 35990, category: "amplifiers", image: "images/jlaudio.jpg", specs: "1000 Вт, Class D", isNew: false },
    { id: 5, name: "Усилитель Alpine S2-A55V", brand: "Alpine", price: 15990, category: "amplifiers", image: "images/alpine.jpg", specs: "4 x 50 Вт", isNew: false },
    { id: 6, name: "Усилитель Kicx STM 4.300", brand: "Kicx", price: 12990, category: "amplifiers", image: "images/kicx.jpg", specs: "4 x 80 Вт", isNew: false },
    // Головные устройства
    { id: 7, name: "Магнитола Pioneer MVH-S520BT", brand: "Pioneer", price: 14990, category: "headunits", image: "images/pioneer.jpg", specs: "Bluetooth, USB, 1 DIN", isNew: true },
    { id: 8, name: "ГУ Sony XAV-AX5650", brand: "Sony", price: 39990, category: "headunits", image: "images/sony.jpg", specs: "CarPlay, Android Auto, 6.95''", isNew: true },
    { id: 9, name: "Магнитола Kenwood DMX8021DABS", brand: "Kenwood", price: 54990, category: "headunits", image: "images/kenwood.jpg", specs: "CarPlay, DAB+, 6.8''", isNew: false },
    { id: 10, name: "ГУ Alpine iLX-W690D", brand: "Alpine", price: 47990, category: "headunits", image: "images/alpine_gu.jpg", specs: "CarPlay, Android Auto, 7''", isNew: false },
    { id: 11, name: "Магнитола JVC KW-M560BT", brand: "JVC", price: 24990, category: "headunits", image: "images/jvc.jpg", specs: "CarPlay, 6.8''", isNew: false },
    // Сабвуферы
    { id: 12, name: "Сабвуфер JL Audio 12W3v3-4", brand: "JL Audio", price: 35990, category: "subwoofers", image: "images/jl_sub.jpg", specs: "12'', 500 Вт, 4 Ом", isNew: true },
    { id: 13, name: "Сабвуфер Kicx ICQ 301BA", brand: "Kicx", price: 12990, category: "subwoofers", image: "images/kicx_sub.jpg", specs: "12'', 300 Вт, активный", isNew: false },
    { id: 14, name: "Сабвуфер Hertz MPS 250 S4", brand: "Hertz", price: 21990, category: "subwoofers", image: "images/hertz_sub.jpg", specs: "10'', 400 Вт, 4 Ом", isNew: false },
    { id: 15, name: "Сабвуфер Alpine SWE-815", brand: "Alpine", price: 18990, category: "subwoofers", image: "images/alpine_sub.jpg", specs: "8'', 150 Вт, активный", isNew: false },
    { id: 16, name: "Сабвуфер Pioneer TS-WX130DA", brand: "Pioneer", price: 15990, category: "subwoofers", image: "images/pioneer_sub.jpg", specs: "8'', 160 Вт, активный", isNew: false },
    // Динамики
    { id: 17, name: "Компонентная акустика Hertz MPK 165.3", brand: "Hertz", price: 18990, category: "speakers", image: "images/hertz_comp.jpg", specs: "16.5 см, 100 Вт", isNew: true },
    { id: 18, name: "Коаксиальная акустика Morel Maximo 6", brand: "Morel", price: 12990, category: "speakers", image: "images/morel.jpg", specs: "16.5 см, 80 Вт", isNew: false },
    { id: 19, name: "Компонентная акустика Focal ISU 165", brand: "Focal", price: 24990, category: "speakers", image: "images/focal.jpg", specs: "16.5 см, 120 Вт", isNew: false },
    { id: 20, name: "Широкополосные динамики JL Audio C2-650", brand: "JL Audio", price: 15990, category: "speakers", image: "images/jl_speaker.jpg", specs: "16.5 см, 60 Вт", isNew: false },
    { id: 21, name: "Пищалки Audison AP 1", brand: "Audison", price: 5990, category: "speakers", image: "images/audison_tweet.jpg", specs: "1'', 50 Вт, шелк", isNew: false },
    { id: 22, name: "Динамики Pioneer TS-G1320F", brand: "Pioneer", price: 3990, category: "speakers", image: "images/pioneer_speaker.jpg", specs: "13 см, 200 Вт", isNew: false },
    // Шумоизоляция
    { id: 23, name: "Шумоизоляция STP Silver", brand: "STP", price: 3490, category: "sounddeadening", image: "images/stp_silver.jpg", specs: "Лист 0.5м x 0.75м, 2 мм", isNew: true },
    { id: 24, name: "Шумоизоляция Silent Coat 2mm", brand: "Silent Coat", price: 2990, category: "sounddeadening", image: "images/silentcoat.jpg", specs: "Лист 0.5м x 0.75м, 2 мм", isNew: false },
    { id: 25, name: "Вибропоглотитель Shumoff M2", brand: "Shumoff", price: 2490, category: "sounddeadening", image: "images/shumoff.jpg", specs: "Лист 0.5м x 0.7м, 2 мм", isNew: false },
    { id: 26, name: "Шумоизоляция комплект на 4 двери", brand: "STP", price: 12990, category: "sounddeadening", image: "images/stp_kit.jpg", specs: "4 листа + ролик", isNew: false },
    // Провода
    { id: 27, name: "Акустический кабель 2x2.5 мм² (10м)", brand: "Daxx", price: 1890, category: "wires", image: "images/cable_audio.jpg", specs: "10 м, OFC медь", isNew: false },
    { id: 28, name: "Силовой кабель 4 GA (10м)", brand: "Daxx", price: 2990, category: "wires", image: "images/cable_power.jpg", specs: "10 м, 25 мм², OFC", isNew: false },
    { id: 29, name: "RCA кабель 5м (2 канала)", brand: "Audison", price: 1490, category: "wires", image: "images/cable_rca.jpg", specs: "5 м, экранированный", isNew: false },
    { id: 30, name: "Комплект проводов для усилителя", brand: "Kicx", price: 3990, category: "wires", image: "images/kicx_kit.jpg", specs: "4 GA, 5м + RCA", isNew: false }
];

// ---------- КОРЗИНА (localStorage) ----------
let cart = JSON.parse(localStorage.getItem('carAudioCart') || '[]');

function saveCart() {
    localStorage.setItem('carAudioCart', JSON.stringify(cart));
    updateCartCountDisplay();
}

function updateCartCountDisplay() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const countSpan = document.getElementById('cartCount');
    if (countSpan) countSpan.innerText = totalItems;
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    const existing = cart.find(item => item.id === productId);
    if (existing) existing.quantity += 1;
    else cart.push({ id: product.id, name: product.name, price: product.price, quantity: 1 });
    saveCart();
    showToast(`${product.name} добавлен в корзину`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
}

function updateQuantity(productId, delta) {
    const idx = cart.findIndex(item => item.id === productId);
    if (idx !== -1) {
        const newQty = cart[idx].quantity + delta;
        if (newQty <= 0) cart.splice(idx, 1);
        else cart[idx].quantity = newQty;
        saveCart();
    }
}

function clearCart() {
    cart = [];
    saveCart();
    showToast("Корзина очищена");
}

function showToast(msg) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = msg;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
}

// Локальная SVG-заглушка (без внешних запросов)
function getPlaceholderSVG(productName) {
    const shortName = productName.split(' ').slice(0,2).join(' ');
    return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180' viewBox='0 0 180 180'%3E%3Crect width='180' height='180' fill='%23333'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23aaa' font-size='14'%3E${encodeURIComponent(shortName)}%3C/text%3E%3C/svg%3E`;
}

// ---------- ОТРИСОВКА НА ГЛАВНОЙ (новинки) ----------
function renderNewProducts() {
    const grid = document.getElementById('newProductsGrid');
    if (!grid) return;
    const newProducts = products.filter(p => p.isNew === true);
    grid.innerHTML = newProducts.map(p => `
        <div class="product-card">
            <div class="product-img">
                <img src="${p.image}" alt="${p.name}" onerror="this.onerror=null; this.src='${getPlaceholderSVG(p.name)}'">
            </div>
            <div class="product-info">
                <div class="product-title-wrapper">
                    <div class="product-title">${p.name}</div>
                    <div class="product-brand">${p.brand} | ${p.specs}</div>
                </div>
                <div class="product-price">${p.price.toLocaleString()} ₽</div>
                <button class="btn-add-to-cart" data-id="${p.id}">В корзину</button>
            </div>
        </div>
    `).join('');
    document.querySelectorAll('#newProductsGrid .btn-add-to-cart').forEach(btn =>
        btn.addEventListener('click', () => addToCart(parseInt(btn.dataset.id)))
    );
}

// ---------- ОТРИСОВКА КАТАЛОГА (фильтр) ----------
function renderCatalog(category = 'all') {
    const grid = document.getElementById('catalogGrid');
    const countSpan = document.getElementById('productsCount');
    if (!grid) return;
    let filtered = category === 'all' ? products : products.filter(p => p.category === category);
    if (countSpan) countSpan.innerText = `Показано: ${filtered.length} товаров`;
    if (filtered.length === 0) {
        grid.innerHTML = '<div style="text-align:center;padding:3rem;color:#888;">Товаров в этой категории пока нет</div>';
        return;
    }
    grid.innerHTML = filtered.map(p => `
        <div class="product-card">
            <div class="product-img">
                <img src="${p.image}" alt="${p.name}" onerror="this.onerror=null; this.src='${getPlaceholderSVG(p.name)}'">
            </div>
            <div class="product-info">
                <div class="product-title-wrapper">
                    <div class="product-title">${p.name}</div>
                    <div class="product-brand">${p.brand} | ${p.specs}</div>
                </div>
                <div class="product-price">${p.price.toLocaleString()} ₽</div>
                <button class="btn-add-to-cart" data-id="${p.id}">В корзину</button>
            </div>
        </div>
    `).join('');
    document.querySelectorAll('#catalogGrid .btn-add-to-cart').forEach(btn =>
        btn.addEventListener('click', () => addToCart(parseInt(btn.dataset.id)))
    );
}

// ---------- ОТРИСОВКА СТРАНИЦЫ КОРЗИНЫ ----------
function renderCartPage() {
    const container = document.getElementById('cartItemsList');
    const totalSpan = document.getElementById('cartTotal');
    if (!container) return;
    if (cart.length === 0) {
        container.innerHTML = '<li style="color:#888;text-align:center;">Корзина пуста</li>';
        if (totalSpan) totalSpan.innerText = "Итого: 0 ₽";
        return;
    }
    let total = 0;
    container.innerHTML = cart.map(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        return `<li class="cart-item">
            <div class="cart-item-info">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">${item.price.toLocaleString()} ₽ × ${item.quantity} = ${itemTotal.toLocaleString()} ₽</div>
            </div>
            <div class="cart-item-actions">
                <button class="qty-minus" data-id="${item.id}">-</button>
                <span>${item.quantity}</span>
                <button class="qty-plus" data-id="${item.id}">+</button>
                <button class="remove-btn" data-id="${item.id}">✖</button>
            </div>
        </li>`;
    }).join('');
    if (totalSpan) totalSpan.innerText = `Итого: ${total.toLocaleString()} ₽`;
    // обработчики
    document.querySelectorAll('.qty-minus').forEach(btn =>
        btn.addEventListener('click', () => {
            updateQuantity(parseInt(btn.dataset.id), -1);
            renderCartPage();
            updateCartCountDisplay();
        })
    );
    document.querySelectorAll('.qty-plus').forEach(btn =>
        btn.addEventListener('click', () => {
            updateQuantity(parseInt(btn.dataset.id), 1);
            renderCartPage();
            updateCartCountDisplay();
        })
    );
    document.querySelectorAll('.remove-btn').forEach(btn =>
        btn.addEventListener('click', () => {
            removeFromCart(parseInt(btn.dataset.id));
            renderCartPage();
            updateCartCountDisplay();
        })
    );
}

// ---------- ОТПРАВКА ЗАЯВКИ (PHP) ----------
function submitOrderRequest() {
    const name = document.getElementById('orderName')?.value.trim();
    const phone = document.getElementById('orderPhone')?.value.trim();
    const message = document.getElementById('orderMessage')?.value.trim();
    if (!name || !phone) {
        showToast('❌ Заполните имя и телефон');
        return;
    }
    const cartData = cart.map(item => ({
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        total: item.price * item.quantity
    }));
    fetch('send_request.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, message, cart: cartData })
    })
    .then(res => res.json())
    .then(data => {
        if (data.success) {
            showToast('✅ Спасибо что заказали у нас товар!');
            clearCart();
            renderCartPage();
            updateCartCountDisplay();
            document.getElementById('orderName').value = '';
            document.getElementById('orderPhone').value = '';
            document.getElementById('orderMessage').value = '';
        } else {
            showToast('❌ Ошибка отправки. Попробуйте позже.');
        }
    })
    .catch(() => showToast('❌ Ошибка соединения с сервером'));
}


function initPage() {
    updateCartCountDisplay();
    if (document.getElementById('newProductsGrid')) renderNewProducts();
    if (document.getElementById('catalogGrid')) {
        let currentCategory = 'all';
        renderCatalog(currentCategory);
        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentCategory = btn.dataset.category;
                renderCatalog(currentCategory);
            });
        });
    }
    if (document.getElementById('cartItemsList')) {
        renderCartPage();
        const clearBtn = document.getElementById('clearCartBtn');
        if (clearBtn) clearBtn.addEventListener('click', () => { clearCart(); renderCartPage(); updateCartCountDisplay(); });
        const submitBtn = document.getElementById('submitOrderBtn');
        if (submitBtn) submitBtn.addEventListener('click', submitOrderRequest);
    }
}
document.addEventListener('DOMContentLoaded', initPage);