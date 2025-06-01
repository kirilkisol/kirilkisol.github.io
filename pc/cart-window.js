let closeCartBtn = document.querySelector('.close-cart-btn')
let popupShoppingCart = document.querySelector('.popup-shopping-cart');

closeCartBtn.onclick = function () {
    popupShoppingCart.style.opacity = '0';
    setTimeout(() => {
        popupShoppingCart.style.display = 'none'
     },300);
}





// для 1 кнопки
// треба зробити для кожної
let myBtnClick = document.querySelector('.my-btn-click');
myBtnClick.onclick = function () {

    popupShoppingCart.style.display = 'flex'
    setTimeout(() => {
        popupShoppingCart.style.opacity = 1;
    }, 100);
}



