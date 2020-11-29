"use strict";

const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab__content");

for (let i = 0; i < tabs.length; i++) {
  tabs.item(i).addEventListener('click', function (event) { //Зарегистрировал обработчик событий на переключателях вкладок
    for (let j = 0; j < tabs.length; j++) {
      tabs.item(j).className = "tab";
      tabContents.item(j).className = "tab__content";
    }
    if (event.target.className == "tab") {
      tabs.item(i).className += " tab_active";
      tabContents.item(i).className += " tab__content_active";
    }    
  });
}
