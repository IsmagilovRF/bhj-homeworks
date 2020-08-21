'use strict';

let slides = document.getElementsByClassName('slider__item');//получили элементы класса slider__item (это все слайды)
let arrSlides = Array.from(slides);//превратили в массив
let len = arrSlides.length;
const prev = document.querySelector('.slider__arrow_prev');
const next = document.querySelector('.slider__arrow_next');

let position = 0;
for (let k = 0; k < len; k++) {
    next.onclick = function () { return function () {
        arrSlides[position].classList.remove("slider__item_active");//убираем класс: slider__item_active
        position = position + 1;
        if (position >=len) {position = 0;}
        arrSlides[position].classList.add("slider__item_active");//добавляем класс: slider__item_active
    }(k);
    };
}

let aposition = len - 1;
for (let k = 0; k < len; k++) {
    prev.onclick = function () { return function () {
        arrSlides[aposition].classList.remove("slider__item_active");//убираем класс: slider__item_active
        aposition = aposition - 1;
        if (aposition < 0) {aposition = len -1;}
        arrSlides[aposition].classList.add("slider__item_active");//добавляем класс: slider__item_active
    }(k);
    };
    
}


  