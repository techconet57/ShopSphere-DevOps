let cart = 0;

async function loadProducts() {
  const response = await fetch('/api/products');
  const products = await response.json();
  const root = document.getElementById('products');

  root.innerHTML = products.map(product => `
    <article class="card">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <strong>$${Number(product.price).toFixed(2)}</strong>
      <button onclick="addToCart()">Add to cart</button>
    </article>
  `).join('');
}

function addToCart() {
  cart += 1;
  document.getElementById('cart-count').textContent = cart;
}

loadProducts().catch(() => {
  document.getElementById('products').textContent = 'Unable to load products.';
});
