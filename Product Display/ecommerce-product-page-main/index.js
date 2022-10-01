const add = document.getElementById("add");
const minus = document.getElementById("minus");
const quantity = document.getElementById("input");
const price = document.querySelector("#price");
const f_price = document.querySelector("#price h3");
const o_price = document.getElementById("orig_price");
const productName = document.querySelector("#product-detail h1");
const productInfo = document.querySelector("#product-detail p");
const cart = document.querySelector("#element");
const cartIcon = document.querySelector("#cartIcon");

add.addEventListener("click", purchaseQuantity);
minus.addEventListener("click", purchaseQuantity);
cartIcon.addEventListener("mouseover", ()=>{console.log("Hi")})

function purchaseQuantity(e) {
  if (e.target.id == "add") {
    quantity.innerHTML = Number(quantity.innerHTML) + 1;
    f_price.innerHTML = "$" + Number(quantity.innerHTML) * 125;
    o_price.innerHTML = "$" + Number(quantity.innerHTML) * 250;
  } else {
    if (quantity.innerHTML < 1){
      //do nothing
    } else {
      quantity.innerHTML = Number(quantity.innerHTML) - 1;
      if (quantity.innerHTML == "0") {
        f_price.innerHTML = "$125";
        o_price.innerHTML = "$250";
      } else {
        f_price.innerHTML = "$" + Number(quantity.innerHTML) * 125;
        o_price.innerHTML = "$" + Number(quantity.innerHTML) * 250;
      }
    }
}
}
