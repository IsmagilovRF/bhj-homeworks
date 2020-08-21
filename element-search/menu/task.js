'use strict';

let links = document.getElementsByClassName('menu__link');// получили  элементы класса menu__link 
let arrMenuLinks = Array.from(links);//превратили в массив
for (let i = 0; i < arrMenuLinks.length; i++) {
    const arrMenuLink = arrMenuLinks[i];
    arrMenuLink.onclick = () => {
       const nextElements = arrMenuLink.nextElementSibling;//следующий элемент меню
       nextElements.classList.toggle("menu_active");//Добавляем класс: menu_active
       return false
    }
}