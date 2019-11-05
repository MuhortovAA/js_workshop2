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

const btnCart = document.getElementById('cart'),
    modalCart = document.querySelector('.cart'),
    closebtn = document.querySelector('.cart-close');
btnCart.addEventListener('click', () => {
    modalCart.style.display = 'flex';
    document.body.style.overflow = 'hidden';
});
closebtn.addEventListener('click', () => {
    modalCart.style.display = 'none';
    document.body.style.overflow = '';
});
const cards = document.querySelectorAll('.goods .card'),
    cartWrapper = document.querySelector('.cart-wrapper'),
    cartEmpty = document.getElementById('cart-empty'),
    countGoods = document.querySelector('.counter');

cards.forEach((card) => {
    const btn = card.querySelector('button');
    btn.addEventListener('click', () => {
        const cardClone = card.cloneNode(true);
        cartWrapper.appendChild(cardClone);
        cartEmpty.remove();
        showData();

        const removeBtn=cardClone.querySelector('.btn');
        removeBtn.textContent='удалить из корзины';
        removeBtn.addEventListener('click', ()=>{
            cardClone.remove();
        showData();

        });
    });

});

function showData() {
    const cardsCart = cartWrapper.querySelectorAll('.card'),
    cardsPrice=cartWrapper.querySelectorAll('.card-price'),
    cardTotal=document.querySelector('.cart-total span');
    let sum=0;
    countGoods.textContent = cardsCart.length;
    cardsPrice.forEach((cardPrice)=>{
        let price = parseFloat(cardPrice.textContent);
        sum+=price;
    });
    cardTotal.textContent=sum;

};