let cart = [];  // Array para almacenar los productos del carrito

// Función para añadir un producto al carrito
function addToCart(name, price, image) {
    const product = { name, price, image };
    cart.push(product);  // Añadir el producto al carrito
    renderCart();  // Vuelve a renderizar el carrito para mostrar el nuevo artículo
}

// Función para eliminar un producto del carrito
function removeFromCart(index) {
    cart.splice(index, 1);  // Elimina el producto en la posición "index"
    renderCart();  // Vuelve a renderizar el carrito después de eliminar
}

// Función para renderizar el carrito y actualizar el total
function renderCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';  // Limpiar los artículos actuales

    let total = 0;

    cart.forEach((product, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        cartItem.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <div>
                        <div class="product-name">${product.name}</div>
                        <div class="product-price">$${product.price.toFixed(2)}</div>
                    </div>
                    <div class="cart-item-remove" onclick="removeFromCart(${index})">Eliminar</div>
                `;

        cartItemsContainer.appendChild(cartItem);  // Agregar el artículo al contenedor

        total += product.price;  // Sumar el precio del producto al total
    });

    // Actualizar el total en la interfaz
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerHTML = `Total: $${total.toFixed(2)}`;
}

// Función para proceder a la compra (simple mensaje de alerta)
function checkout() {
    if (cart.length > 0) {
        alert('Procediendo al pago...');
    } else {
        alert('El carrito está vacío.');
    }
}