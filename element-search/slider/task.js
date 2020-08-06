'use strict';

const slides = document.getElementsByClassName('slider__item');//получили элементы класса slider__item (это все слайды)
const arrSlides = Array.from(slides);//превратили в массив элементов

const prev = document.querySelector('.slider__arrow_prev');
const next = document.querySelector('.slider__arrow_next');

let position = 0;
let i = 0;

arrSlides.forEach( function(item, i, arr) {
    //console.log(i, item, arr);
    next.onclick = function(){
        position = position + i;
        if (position >= arrSlides.length) {
            position = 0;
            //console.log('i = ' + i + 'position = ' + position    + '   position >= arrSlides.length');
        } else {
            //console.log(i + '   ' + position);
            const arrSlide = arrSlides[position];
            arrSlide.classList.add("slider__item_active");//Добавляем класс: slider__item_active
        }
    }
    position = arrSlides.length
    i = 1;
    prev.onclick = function(){
        position = position - i;
        if (position < 0) {
            console.log('position < 0');
        } else {
        console.log(i + '   ' + position);
        const arrSlide = arrSlides[position];
        arrSlide.classList.add("slider__item_active");//Добавляем класс: slider__item_active
        }
    }
});


