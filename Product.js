// Cart functionality
let cart = [];
const cartItemsList = document.querySelector('.cart-items');
const totalPriceElement = document.querySelector('.total-price');
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Function to update the cart
function updateCart() {
  cartItemsList.innerHTML = '';
  let totalPrice = 0;
  
  cart.forEach(item => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <span>${item.name}</span>
      <span>$${item.price}</span>
    `;
    cartItemsList.appendChild(listItem);
    totalPrice += item.price;
  });
  
  totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
}

// Add item to cart
addToCartButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const productCard = button.closest('.product-card');
    const productName = productCard.querySelector('h5').textContent;
    const productPrice = parseFloat(productCard.querySelector('.price').textContent.replace('$', ''));

    cart.push({
      name: productName,
      price: productPrice
    });
    
    updateCart();
    button.innerText = 'Added';
    button.disabled = true; // Disable button after adding to cart
    button.style.backgroundColor = '#28a745';
  });
});
