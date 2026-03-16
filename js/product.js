const products = [
  {id:1, name:'Bridal Lace', category:'laces', price:2500, stock:10, img:'images/laces1.jpg', desc:'Elegant bridal lace.'},
  {id:2, name:'Cotton Patch', category:'patches', price:500, stock:15, img:'images/patches1.jpg', desc:'Designer cotton patch.'},
  {id:3, name:'Badge Classic', category:'badges', price:300, stock:20, img:'images/badges1.jpg', desc:'Stylish badge.'},
  {id:4, name:'Neckwear Silk', category:'neckwear', price:1200, stock:5, img:'images/neckwear1.jpg', desc:'Luxury silk neckwear.'},
];
const featuredContainer = document.getElementById('featured-products');
if(featuredContainer){
  products.forEach(p=>{
    const div = document.createElement('div');
    div.innerHTML = `<img src="${p.img}" alt="${p.name}"><h3>${p.name}</h3><p>₹${p.price}</p><button onclick="addToCart(${p.id})">Add to Cart</button>`;
    featuredContainer.appendChild(div);
  });
}
