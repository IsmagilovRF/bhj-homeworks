"use strict";
//механизм смены текстовых объявлений

const rotatorCases = document.querySelectorAll(".rotator__case");// это все элементы класса .rotator__case
let currentCaseNumber = 0;

function setRotatorCase(caseNumber) {
  rotatorCases[caseNumber].classList.add("rotator__case_active"); // добавляем класс активности для элемента с номером caseNumber
  rotatorCases.forEach((item, index) => {
    if (index !== caseNumber) {
      rotatorCases[index].classList.remove("rotator__case_active");
    }
  })
}

const rotation = setInterval(() => {
  if (currentCaseNumber < rotatorCases.length - 1) {
    currentCaseNumber++;
    setRotatorCase(currentCaseNumber);
  } else {
    currentCaseNumber = 0;
    setRotatorCase(currentCaseNumber);
  }
}, 1000);