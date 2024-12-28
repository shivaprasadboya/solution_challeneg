// Retrieve cart items from local storage or initialize with an empty array
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// Function to update the cart display
function updateCart() {
  const cartItemsList = document.getElementById('cart-items');
  const cartSummaryList = document.querySelector('.cart-items-list');
  const totalPrice = document.getElementById('total-price');

  // Clear existing content
  cartItemsList.innerHTML = '';
  cartSummaryList.innerHTML = '';

  // Calculate total price
  let total = 0;

  // Display each product in the cart
  cartItems.forEach((item, index) => {
    // Create product card in cart
    const cartItem = document.createElement('div');
    cartItem.className = 'col-md-4';
    cartItem.innerHTML = `
      <div class="product-card">
        <img src="${item.image}" alt="${item.name}">
        <div class="product-details">
          <h5>${item.name}</h5>
          <p>${item.description}</p>
          <div class="price">${item.price}</div>
        </div>
      </div>
    `;
    cartItemsList.appendChild(cartItem);

    // Add to cart summary
    const cartSummaryItem = document.createElement('li');
    cartSummaryItem.innerHTML = `
      <span>${item.name}</span> 
      <span>${item.price}</span>
    `;
    cartSummaryList.appendChild(cartSummaryItem);

    // Add to total price
    total += parseFloat(item.price.replace('$', ''));
  });

  // Update the total price
  totalPrice.textContent = `$${total.toFixed(2)}`;
}

// Update cart initially
updateCart();

// You can also add event listeners to handle the "Proceed to Checkout" button if needed
document.querySelector('.checkout-btn').addEventListener('click', () => {
  alert('Proceeding to checkout...');
});
