let cart = JSON.parse(localStorage.getItem('cart')) || [];
function addToCart(id){
  const product = products.find(p=>p.id===id);
  const item = cart.find(c=>c.id===id);
  if(item){ item.qty +=1; } else{ cart.push({id:product.id, name:product.name, price:product.price, qty:1}); }
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${product.name} added to cart`);
}
const loginForm = document.getElementById('login-form');
if(loginForm){
  loginForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const user = document.getElementById('username').value;
    alert(`Logged in as ${user} (demo only)`);
  });
}
