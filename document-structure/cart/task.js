"use strict";

let productQuantity = 1;
let cartProductQuantity = 0;
//кнопки +/-
const productsBtnDec = document.querySelectorAll(".product__quantity-control_dec");
const productsBtnInc = document.querySelectorAll(".product__quantity-control_inc");
for (let btnDec of productsBtnDec) {
  btnDec.addEventListener("click", function (event) {
    productQuantity = btnDec.closest(".product__controls").querySelector(".product__quantity-value");
    productQuantity.textContent--;
    if (productQuantity.textContent < 1) {
      productQuantity.textContent = 1;
    }
  });
}

for (let btnInc of productsBtnInc) {
  btnInc.addEventListener("click", function (event) {
    productQuantity = btnInc.closest(".product__controls").querySelector(".product__quantity-value");
    productQuantity.textContent++;
  });
}
// механизм добавления товаров в корзину
const addsProduct = document.querySelectorAll(".product__add");
const cart = document.querySelector(".cart__products");
for (let add of addsProduct) {
  add.addEventListener("click", function (event) {    
    const cartProducts = cart.querySelectorAll(".cart__product");  
    const searchArr = Array.from(cartProducts).find(elem => elem.dataset.id == add.closest(".product").dataset.id);    
    const addProductId = add.closest(".product").dataset.id;
    const addProductPic = add.closest(".product").querySelector(".product__image").src;
    const addProductCount = add.closest(".product__quantity").querySelector(".product__quantity-value").textContent;
    //если ничего нет в корзине, то добавляем в нее
    if (!searchArr) {                   
      cart.insertAdjacentHTML("beforeEnd",
        `<div class="cart__product" data-id="${addProductId}">
                <img class="cart__product-image" src="${addProductPic}">
                <div class="cart__product-count">${addProductCount}</div>
            </div>`
      ); 
    } else {
    //если есть в корзине, то прибавляем количество
      cartProducts.forEach(item => {       
        if (item.dataset.id == addProductId) {         
          cartProductQuantity = +item.querySelector(".cart__product-count").textContent;
          productQuantity = +addProductCount;
          cartProductQuantity += productQuantity;
          item.querySelector(".cart__product-count").textContent = cartProductQuantity;
        }
      });
    }
  });
}