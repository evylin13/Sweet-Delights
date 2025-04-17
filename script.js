// Menu kue data
const cakesData = [
    {
        id: 1,
        name: "Strawberry Cupcakes",
        price: 350000,
        description: "Kue cupcake lembut dengan dekorasi strawberry yang lucu dan menyenangkan.",
        image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dW5pY29ybiUyMGNha2V8ZW58MHx8MHx8fDA%3D"
    },
    {
        id: 2,
        name: "Butter Cupcakes",
        price: 15000,
        description: "Cupcake lembut dengan lapisan krim mentega yang cerah. Setiap gigitan membawa kebahagiaan.",
        image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbmJvdyUyMGN1cGNha2V8ZW58MHx8MHx8fDA%3D"
    },
    {
        id: 3,
        name: "Chocolate Drip Cake",
        price: 280000,
        description: "Kue cokelat moist dengan lelehan cokelat di bagian atas.",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hvY29sYXRlJTIwY2FrZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        id: 4,
        name: "Choco Mousse Cup",
        price: 10000,
        description: "Dessert lembut berbasis cokelat dengan tekstur mouse yang creamy.",
        image: "https://images.unsplash.com/photo-1586195831800-24f14c992cea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FrZSUyMHBvcHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        id: 5,
        name: "Red Velvet Cake",
        price: 320000,
        description: "Kue berwarna merah dengan tekstur lembut, dilapisi dengan cream cheese frosting creamy.",
        image: "https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVkJTIwdmVsdmV0JTIwY2FrZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        id: 6,
        name: "Strawberry Cheesecake",
        price: 270000,
        description: "Cheesecake lembut dengan topping strawberry. Perpaduan rasa asam dan manis yang segar.",
        image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3RyYXdiZXJyeSUyMGNoZWVzZWNha2V8ZW58MHx8MHx8fDA%3D"
    },
    {
        id: 7,
        name: "Macarons",
        price: 20000,
        description: "Macarons lucu. Rasa yang beragam dengan tampilan yang menggemaskan.",
        image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYXJvbnN8ZW58MHx8MHx8fDA%3D"
    },
    {
        id: 8,
        name: "Desert Stick Caramel",
        price: 25000,
        description: "Paduan manisnya cream lembut dan saus karamel yang melimpah, disajikan dengan stik renyah.",
        image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGlyYW1pc3V8ZW58MHx8MHx8fDA%3D"
    }
];

// Shopping cart array
let cart = [];

// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            menu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking a link
    const menuLinks = document.querySelectorAll('.menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            menu.classList.remove('active');
        });
    });

    // Populate cakes section
    const cakesContainer = document.getElementById('cakesContainer');
    if (cakesContainer) {
        cakesData.forEach(cake => {
            const cakeCard = document.createElement('div');
            cakeCard.className = 'cake-card';
            cakeCard.innerHTML = `
                <img src="${cake.image}" alt="${cake.name}" class="cake-img">
                <div class="cake-content">
                    <h3 class="cake-title">${cake.name}</h3>
                    <p class="cake-desc">${cake.description}</p>
                    <p class="cake-price">Rp ${formatPrice(cake.price)}</p>
                    <button class="cake-button" onclick="addToCart(${cake.id})">Tambah ke Keranjang</button>
                </div>
            `;
            cakesContainer.appendChild(cakeCard);
        });
    }

    // Show checkout form button
    const showCheckoutBtn = document.getElementById('showCheckoutForm');
    const checkoutForm = document.getElementById('checkoutForm');
    
    if (showCheckoutBtn && checkoutForm) {
        showCheckoutBtn.addEventListener('click', function() {
            if (cart.length === 0) {
                alert('Keranjang belanja Anda kosong. Silakan tambahkan produk terlebih dahulu.');
                return;
            }
            checkoutForm.style.display = 'block';
            this.style.display = 'none';
            document.getElementById('customerName').focus();
        });
    }

    // Confirm order button
    const confirmOrderBtn = document.getElementById('confirmOrder');
    if (confirmOrderBtn) {
        confirmOrderBtn.addEventListener('click', function() {
            const name = document.getElementById('customerName').value;
            const address = document.getElementById('customerAddress').value;
            const phone = document.getElementById('customerPhone').value;
            const email = document.getElementById('customerEmail').value;
            const notes = document.getElementById('customerNotes').value;
            
            if (!name || !address || !phone) {
                alert('Harap isi nama, alamat, dan nomor telepon Anda.');
                return;
            }
            
            // Format WhatsApp message
            let message = `Halo, saya ingin memesan:%0A%0A`;
            
            cart.forEach(item => {
                const cake = cakesData.find(c => c.id === item.id);
                message += `- ${cake.name} (${item.quantity}x) = Rp ${formatPrice(cake.price * item.quantity)}%0A`;
            });
            
            const total = calculateTotal();
            message += `%0ATotal: Rp ${formatPrice(total)}%0A%0A`;
            message += `Nama: ${name}%0A`;
            message += `Alamat: ${address}%0A`;
            message += `Telepon: ${phone}%0A`;
            
            if (email) {
                message += `Email: ${email}%0A`;
            }
            
            if (notes) {
                message += `Catatan: ${notes}%0A`;
            }
            
            // Open WhatsApp with pre-filled message
            window.open(`https://wa.me/6285359681469?text=${message}`, '_blank');
            
            // Reset cart after order
            cart = [];
            localStorage.removeItem('sweetDelightsCart'); // Hapus cart dari localStorage juga
            updateCartDisplay();
            checkoutForm.style.display = 'none';
            showCheckoutBtn.style.display = 'block';
            
            // Reset form
            document.getElementById('customerName').value = '';
            document.getElementById('customerAddress').value = '';
            document.getElementById('customerPhone').value = '';
            document.getElementById('customerEmail').value = '';
            document.getElementById('customerNotes').value = '';
            
            alert('Terima kasih! Pesanan Anda telah dikirim via WhatsApp.');
        });
    }

    // Menangani form kontak
    const contactForm = document.querySelector('.contact-form form, .contact-form .btn');
    if (contactForm) {
        const contactBtn = document.querySelector('.contact-form .btn');
        contactBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            const name = document.querySelector('.contact-form input[type="text"]').value;
            const email = document.querySelector('.contact-form input[type="email"]').value;
            const message = document.querySelector('.contact-form textarea').value;
            
            if (!name || !email || !message) {
                alert('Harap isi semua bidang pada formulir kontak.');
                return;
            }
            
            // Format pesan WhatsApp
            let whatsappMessage = `Halo, saya ${name} ingin menghubungi Sweet Delights:%0A%0A`;
            whatsappMessage += `Pesan: ${message}%0A%0A`;
            whatsappMessage += `Email: ${email}%0A`;
            
            // Buka WhatsApp dengan pesan yang sudah diisi
            window.open(`https://wa.me/6285359681469?text=${whatsappMessage}`, '_blank');
            
            // Reset form
            document.querySelector('.contact-form input[type="text"]').value = '';
            document.querySelector('.contact-form input[type="email"]').value = '';
            document.querySelector('.contact-form textarea').value = '';
            
            alert('Terima kasih! Pesan Anda telah dikirim via WhatsApp.');
        });
    }

    // Load cart from localStorage if available
    const savedCart = localStorage.getItem('sweetDelightsCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartDisplay();
    }
});

// Format price with thousand separator
function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// Add to cart function
function addToCart(id) {
    const existingItem = cart.find(item => item.id === id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: id,
            quantity: 1
        });
    }
    
    // Save to localStorage
    localStorage.setItem('sweetDelightsCart', JSON.stringify(cart));
    
    updateCartDisplay();
    showAddedToCartNotification(id);
}

// Show "Added to cart" notification
function showAddedToCartNotification(id) {
    const cake = cakesData.find(cake => cake.id === id);
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.right = '20px';
    notification.style.backgroundColor = '#FF1493';
    notification.style.color = 'white';
    notification.style.padding = '15px';
    notification.style.borderRadius = '10px';
    notification.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    notification.style.zIndex = '1000';
    notification.style.opacity = '0';
    notification.style.transition = 'opacity 0.3s ease';
    notification.innerHTML = `<strong>${cake.name}</strong> telah ditambahkan ke keranjang!`;
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.style.opacity = '1';
    }, 100);
    
    // Hide notification after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Update cart display
function updateCartDisplay() {
    const cartItems = document.getElementById('cartItems');
    const cartEmpty = document.getElementById('cartEmpty');
    const totalPrice = document.getElementById('totalPrice');
    const cartCount = document.querySelector('.cart-count');
    const showCheckoutBtn = document.getElementById('showCheckoutForm');
    
    if (!cartItems || !totalPrice || !cartCount) return;
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="cart-empty" id="cartEmpty">Keranjang belanja Anda kosong.</div>';
        totalPrice.textContent = 'Total: Rp 0';
        cartCount.textContent = '0';
        
        // Pastikan tombol checkout tersembunyi jika keranjang kosong
        if (showCheckoutBtn) {
            showCheckoutBtn.style.display = 'none';
        }
        return;
    }
    
    cartItems.innerHTML = '';
    
    cart.forEach(item => {
        const cake = cakesData.find(c => c.id === item.id);
        if (!cake) return;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-info">
                <img src="${cake.image}" alt="${cake.name}" class="cart-item-img">
                <div>
                    <p class="cart-item-name">${cake.name}</p>
                    <p class="cart-item-price">Rp ${formatPrice(cake.price)} x ${item.quantity}</p>
                </div>
            </div>
            <div class="cart-item-controls">
                <div class="quantity-control">
                    <button class="quantity-btn" onclick="decreaseQuantity(${item.id})">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn" onclick="increaseQuantity(${item.id})">+</button>
                </div>
                <button class="remove-btn" onclick="removeFromCart(${item.id})">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>
        `;
        
        cartItems.appendChild(cartItem);
    });
    
    const total = calculateTotal();
    totalPrice.textContent = `Total: Rp ${formatPrice(total)}`;
    
    // Update cart counter
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Tampilkan tombol checkout jika keranjang tidak kosong
    if (showCheckoutBtn) {
        showCheckoutBtn.style.display = 'block';
    }
}

// Calculate total price
function calculateTotal() {
    return cart.reduce((total, item) => {
        const cake = cakesData.find(c => c.id === item.id);
        return total + (cake ? cake.price * item.quantity : 0);
    }, 0);
}

// Increase item quantity
function increaseQuantity(id) {
    const item = cart.find(item => item.id === id);
    if (item) {
        item.quantity += 1;
        localStorage.setItem('sweetDelightsCart', JSON.stringify(cart));
        updateCartDisplay();
    }
}

// Decrease item quantity
function decreaseQuantity(id) {
    const item = cart.find(item => item.id === id);
    if (item) {
        item.quantity -= 1;
        if (item.quantity <= 0) {
            removeFromCart(id);
        } else {
            localStorage.setItem('sweetDelightsCart', JSON.stringify(cart));
            updateCartDisplay();
        }
    }
}

// Remove item from cart
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem('sweetDelightsCart', JSON.stringify(cart));
    updateCartDisplay();
}