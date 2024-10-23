const products = [
    { id: 1, name: 'Eco Golf Balls', price: 20.00, image: 'https://via.placeholder.com/150/28a745' },
    { id: 2, name: 'Recycled Golf Tees', price: 10.00, image: 'https://via.placeholder.com/150/28a745' },
    { id: 3, name: 'Bamboo Golf Clubs', price: 250.00, image: 'https://via.placeholder.com/150/28a745' },
    { id: 4, name: 'Sustainable Golf Bag', price: 150.00, image: 'https://via.placeholder.com/150/28a745' },
];

let cart = [];

document.addEventListener('DOMContentLoaded', function() {
    const productList = document.getElementById('product-list');
    const cartModal = document.getElementById('cart-modal');
    const cartButton = document.getElementById('cart-button');
    const cartItems = document.getElementById('cart-items');
    const totalPriceEl = document.getElementById('total-price');
    const cartCountEl = document.getElementById('cart-count');
    const checkoutButton = document.getElementById('checkout');
    const closeModal = document.querySelector('.close');

    // Display products
    products.forEach(product => {
        const productEl = document.createElement('div');
        productEl.className = 'product';
        productEl.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: $${product.price.toFixed(2)}</p>
            <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
        `;
        productList.appendChild(productEl);
    });

    // Add to cart
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            const product = products.find(p => p.id === productId);
            cart.push(product);
            updateCart();
        });
    });

    // Open cart modal
    cartButton.addEventListener('click', function() {
        cartModal.style.display = 'block';
        displayCartItems();
    });

    // Close modal
    closeModal.addEventListener('click', function() {
        cartModal.style.display = 'none';
    });

    // Update cart
    function updateCart() {
        cartCountEl.textContent = cart.length;
        let totalPrice = 0;
        cart.forEach(item => totalPrice += item.price);
        totalPriceEl.textContent = totalPrice.toFixed(2);
    }

    // Display cart items
    function displayCartItems() {
        cartItems.innerHTML = '';
        cart.forEach(item => {
            const cartItem = document.createElement('li');
            cartItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            cartItems.appendChild(cartItem);
        });
    }

    // Checkout
    checkoutButton.addEventListener('click', function() {
        alert('Checkout functionality will be implemented here.');
        cart = [];
        updateCart();
        cartModal.style.display = 'none';
    });
});
