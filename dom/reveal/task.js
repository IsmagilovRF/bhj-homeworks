"use strict";

const revealDivs = document.querySelectorAll(".reveal");// Это все div-ы класса .reveal, которые в прокрутке

const isInViewport = function (element) {                 //функция Отслеживает изменение координат элемента
  const viewportHeight = window.innerHeight;              //innerHeight() возвращает значение высоты элемента
  const elementTop = element.getBoundingClientRect().top; //Метод getBoundingClientRect содержит объект координат элемента. 
                                                          //Координаты рассчитываются относительного видимой части страницы
                                                          // без учета прокрутки (относительно окна).
  return (elementTop < viewportHeight && elementTop >= 0) ? true : false;
};

window.addEventListener('scroll', () => {
  for (const div of revealDivs) {    // для каждого div-a из прокрутки 
    isInViewport(div) ? div.classList.add("reveal_active") : false; // прокрутка дошла - значит надо сделать блок активным
  }
});
