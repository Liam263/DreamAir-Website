const items = document.querySelectorAll('.item');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
// const checkoutButton = document.getElementById('checkout');

let cart = [];

items.forEach(item => {
	const addToCartButton = item.querySelector('.add-to-cart');
	const itemName = item.querySelector('.item-name').innerText;
	const itemPrice = parseFloat(item.querySelector('.item-price').innerText.slice(1));
	
	addToCartButton.addEventListener('click', () => {
		const cartItem = cart.find(item => item.name === itemName);
		
		if (cartItem) {
			cartItem.quantity++;
		} else {
			cart.push({name: itemName, price: itemPrice, quantity: 1});
		}
		
		updateCart();
	});
});

cartItems.addEventListener('click', event => {
	if (event.target.classList.contains('remove-from-cart')) {
		const itemName = event.target.parentElement.querySelector('.item-name').innerText;
		
		const cartItem = cart.find(item => item.name === itemName);
		
		if (cartItem.quantity > 1) {
			cartItem.quantity--;
		} else {
			cart = cart.filter(item => item.name !== itemName);
		}
		
		updateCart();
	}
});

// checkoutButton.addEventListener('click', () => {

// 	console.log(cart)
// 	// alert(`Total: $${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}`);
	
// });

function updateCart() {
	cartItems.innerHTML = '';
	
	cart.forEach(item => {
		const cartItem = document.createElement('li');
		cartItem.classList.add('cart-item');
		
		const itemName = document.createElement('div');
		itemName.classList.add('item-name');
		itemName.innerText = item.name;
		cartItem.appendChild(itemName);
		
		const itemQuantity = document.createElement('div');
		itemQuantity.classList.add('item-quantity');
		itemQuantity.innerText = item.quantity;
		cartItem.appendChild(itemQuantity);
		
		const itemPrice = document.createElement('div');
		itemPrice.classList.add('item-price');
		itemPrice.innerText = `$${(item.price * item.quantity).toFixed(2)}`;
		cartItem.appendChild(itemPrice);
		
	
		const removeButton = document.createElement('button');
		removeButton.classList.add('remove-from-cart');
		removeButton.innerText = 'Remove';
		cartItem.appendChild(removeButton);
		
		cartItems.appendChild(cartItem);
	});
	
	cartTotal.innerText = `$${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}`;
}

export { cart };
