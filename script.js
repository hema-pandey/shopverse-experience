// DELIEVR TO INDIA MEIN PINCODE LENE KA CODE---------------------------------------
const locationBox = document.getElementById('location-box');
const modalOverlay = document.getElementById('modal-overlay');
const submitBtn = document.getElementById('submit-pincode');
const locationText = document.getElementById('location-text');
const modalInput = document.getElementById('modal-pincode');

locationBox.addEventListener('click', () => {
  modalOverlay.style.display = 'flex';
});

submitBtn.addEventListener('click', () => {
  const pincode = modalInput.value.trim();
  if (pincode.length === 6 && /^\d+$/.test(pincode)) {
    locationText.textContent = `Deliver to ${pincode}`;
    modalOverlay.style.display = 'none';
    modalInput.value = '';
  } else {
    alert("Please enter a valid 6-digit pincode.");
  }
});


// NAVBAR SELECT ALL KI JS---------------------------------------------------- 
// 🧠 Auto-populate category dropdown from shop section
const categorySelect = document.getElementById('category-select');

// Get all box headings
const boxHeadings = document.querySelectorAll('.shop-section .box h2');

// Use a Set to avoid duplicates
const categories = new Set();

boxHeadings.forEach(heading => {
  categories.add(heading.textContent.trim());
});

// Add each category to the dropdown
categories.forEach(category => {
  const option = document.createElement('option');
  option.value = category.toLowerCase().replace(/\s+/g, '-'); // e.g. "Home & Kitchen" → "home-&-kitchen"
  option.textContent = category;
  categorySelect.appendChild(option);
});



// SIGN IN MODAL JS ACCOUNT AND SETTING IN NAVBAR--------------------------------------

  document.addEventListener('DOMContentLoaded', () => {
    const accountBtn = document.getElementById('account-btn');
    const signinModal = document.getElementById('signin-modal');
    const closeModal = document.getElementById('close-modal');
    const continueBtn = document.getElementById('continue-btn');

    // Show modal
    accountBtn.addEventListener('click', () => {
      signinModal.style.display = 'flex';
    });

    // Close modal on X
    closeModal.addEventListener('click', () => {
      signinModal.style.display = 'none';
    });

    // Close modal on Continue
    continueBtn.addEventListener('click', () => {
      const userInput = document.getElementById('user-input').value.trim();
      if (userInput) {
        alert(`Welcome, ${userInput}!`);
        signinModal.style.display = 'none';
      } else {
        alert('Please enter your mobile number or email.');
      }
    });

    // Close modal on outside click
    window.addEventListener('click', (e) => {
      if (e.target === signinModal) {
        signinModal.style.display = 'none';
      }
    });
  });


//  RETURN IN NAVBAR ------------------------------------------------

  // Get elements
  const returnsBtn = document.getElementById('returns-btn');
  const returnsModal = document.getElementById('returns-modal');
  const closeReturns = document.getElementById('close-returns');

  // Show modal on Returns click
  returnsBtn.addEventListener('click', () => {
    returnsModal.style.display = 'flex';
  });

  // Close modal on ❌ click
  closeReturns.addEventListener('click', () => {
    returnsModal.style.display = 'none';
  });

  // Optional: Close modal on outside click
  window.addEventListener('click', (e) => {
    if (e.target === returnsModal) {
      returnsModal.style.display = 'none';
    }
  });



// CART FUNCTIONALITY JS ------------------------------------------------

const cartBtn = document.querySelector('.sv-cart');
const cartModal = document.getElementById('cart-modal');
const closeCart = document.getElementById('close-cart');
const cartItemsList = document.getElementById('cart-items-list');
const cartTotal = document.getElementById('cart-total');

let cartItems = [];

// 🖱️ Show cart modal
cartBtn.addEventListener('click', () => {
  updateCartDisplay();
  cartModal.style.display = 'flex';
});

// ❌ Close cart modal
closeCart.addEventListener('click', () => {
  cartModal.style.display = 'none';
});

// 🧠 Update cart display
function updateCartDisplay() {
  cartItemsList.innerHTML = '';
  let total = 0;

  if (cartItems.length === 0) {
    cartItemsList.innerHTML = '<li>No items in cart</li>';
  } else {
    cartItems.forEach((item, index) => {
      const li = document.createElement('li');
      li.innerHTML = `${item.name} - ₹${item.price} 
        <button onclick="removeFromCart(${index})">❌</button>`;
      cartItemsList.appendChild(li);
      total += item.price;
    });
  }

  cartTotal.textContent = `Total: ₹${total}`;
}

// ➕ Add item to cart (call this from product buttons)
function addToCart(name, price) {
  cartItems.push({ name, price });
  updateCartDisplay();
}

// ❌ Remove item
function removeFromCart(index) {
  cartItems.splice(index, 1);
  updateCartDisplay();
}

//  PROCEED TO CHECKOUT BUTTON IN CART-----------------------------------

const checkoutBtn = document.getElementById('checkout-btn');

checkoutBtn.addEventListener('click', () => {
  if (cartItems.length === 0) {
    alert("Your cart is empty. Add items before checkout.");
  } else {
    alert("Thank you for shopping with ShopVerse! Your order has been placed.");
    cartItems = []; // Clear cart
    updateCartDisplay(); // Refresh cart UI
    cartModal.style.display = 'none'; // Close modal
  }
});















