// Toggle cart visibility
let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');

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
    var removeCartButtons = document.getElementsByClassName("cart-remove");
    for (var i = 0; i < removeCartButtons.length; i++) {
        var button = removeCartButtons[i];
        button.addEventListener("click", removeCartItem);
    }

    // Quantity change
    var quantityInputs = document.getElementsByClassName('cart-quantity');
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);
    }
}
var addCart= document.getElementsByClassName('add-cart')
for (var i = 0; i < addCart.length; i++)
    var button = addCart[i]
button.addEventListener('click', addCartClicked)

function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updateTotal(); // Fixed name
}

function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateTotal(); // Fixed name
}
function addCartClicked(event) {
    var button = event.target;
    var shoProducts = button.parentElement;
    var title = shoProducts.getElementsByClassName('product-title')[0].innerText;
    var price = shoProducts.getElementsByClassName('price')[0].innerText;
    var productImg = shoProducts.getElementsByClassName('product-img')[0].src;
    addProductToCart(title, price, productImg);
    updateTotal();
}

function addProductToCart(title, price, productImg) {
    var cartshopBox = document.createElement("div");
    cartshopBox.classList.add('cart-box');

    var cartItems = document.getElementsByClassName("cart-content")[0];  // fixed typo "cart-contnet" & added [0]
    var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");

    for (var i = 0; i < cartItemsNames.length; i++) {
        if (cartItemsNames[i].innerText === title) {  // added condition check to prevent duplicates
            alert('You Have ALready added this item to Cart');
            return;
        }
    }

    var cartBoxContent = `                       
        <img src="${productImg}" alt="" class="cart-img">
        <div class="detail-box">
            <div class="cart-product-title">${title}</div>
            <div class="cart-price">${price}</div>
            <input type="number" value="1" class="cart-quantity">
        </div>
        <i class='bx  bxs-trash-alt cart-remove'></i> `;

    cartshopBox.innerHTML = cartBoxContent;
    cartItems.appendChild(cartshopBox);  // use appendChild instead of append for wider support

    cartshopBox.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCartItem);
    cartshopBox.getElementsByClassName('cart-quantity')[0].addEventListener('change', quantityChanged);
}


function updateTotal() {
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    var total = 0;

    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName("cart-price")[0];
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];

        // ✅ Fix: Use correct property and class names
        var price = parseFloat(priceElement.innerText.replace("$", ""));
        var quantity = quantityElement.value;

        total += price * quantity;
    }

    // ✅ Fix: innerText not innertext + move line outside the loop
    document.getElementsByClassName("total-price")[0].innerText = "$" + total.toFixed(2);
}
