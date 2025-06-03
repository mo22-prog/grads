// Toggle cart visibility
const cartIcon = document.querySelector('#cart-icon');
const cart = document.querySelector('.cart');
const closeCart = document.querySelector('#close-cart');

cartIcon.onclick = () => {
    cart.classList.add("active");
};
closeCart.onclick = () => {
    cart.classList.remove("active");
};

// Wait until document is fully loaded
if (document.readyState === "loading") {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

function ready() {
    // Remove items from cart
    const removeCartButtons = document.getElementsByClassName("cart-remove");
    for (let button of removeCartButtons) {
        button.addEventListener("click", removeCartItem);
    }

    // Quantity change
    const quantityInputs = document.getElementsByClassName('cart-quantity');
    for (let input of quantityInputs) {
        input.addEventListener("change", quantityChanged);
    }

    // Add to cart
    const addCartButtons = document.getElementsByClassName('add-cart');
    for (let button of addCartButtons) {
        button.addEventListener('click', addCartClicked);
    }
}

function removeCartItem(event) {
    const buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updateTotal();
}

function quantityChanged(event) {
    const input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateTotal();
}

function addCartClicked(event) {
    const button = event.target;
    const shoProducts = button.parentElement;
    const title = shoProducts.getElementsByClassName('product-title')[0].innerText;
    const price = shoProducts.getElementsByClassName('price')[0].innerText;
    const productImg = shoProducts.getElementsByClassName('product-img')[0].src;
    addProductToCart(title, price, productImg);
    updateTotal();
}

function addProductToCart(title, price, productImg) {
    const cartItems = document.getElementsByClassName("cart-content")[0];
    const cartBoxes = cartItems.getElementsByClassName("cart-box");

    for (let cartBox of cartBoxes) {
        const cartTitle = cartBox.getElementsByClassName("cart-product-title")[0].innerText;
        if (cartTitle === title) {
            const quantityInput = cartBox.getElementsByClassName("cart-quantity")[0];
            quantityInput.value = parseInt(quantityInput.value) + 1;
            return;
        }
    }

    const cartBox = document.createElement("div");
    cartBox.classList.add('cart-box');

    const cartBoxContent = `
        <img src="${productImg}" alt="" class="cart-img">
        <div class="detail-box">
            <div class="cart-product-title">${title}</div>
            <div class="cart-price">${price}</div>
            <input type="number" value="1" class="cart-quantity">
        </div>
        <i class='bx bxs-trash-alt cart-remove'></i>`;

    cartBox.innerHTML = cartBoxContent;
    cartItems.appendChild(cartBox);

    cartBox.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCartItem);
    cartBox.getElementsByClassName('cart-quantity')[0].addEventListener('change', quantityChanged);
}

function updateTotal() {
    const cartContent = document.getElementsByClassName("cart-content")[0];
    const cartBoxes = cartContent.getElementsByClassName("cart-box");
    let total = 0;

    for (let cartBox of cartBoxes) {
        const priceElement = cartBox.getElementsByClassName("cart-price")[0];
        const quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        const price = parseFloat(priceElement.innerText.replace("$", ""));
        const quantity = quantityElement.value;
        total += price * quantity;
    }

    document.getElementsByClassName("total-price")[0].innerText = "$" + total.toFixed(2);
}
