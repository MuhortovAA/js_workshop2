'use strict';
//checkbox
const checkbox = document.querySelectorAll('.filter-check_checkbox');

checkbox.forEach((elem) => {
    elem.addEventListener('change', function() {
        if (this.checked) {
            this.nextElementSibling.classList.add('checked');
        } else {
            this.nextElementSibling.classList.remove('checked');
        }
    });
});

// корзина

const btnCart = document.getElementById('cart');
const modalCart = document.querySelector('.cart');

btnCart.addEventListener('click', () => {
    modalCart.style.display = 'block';

})