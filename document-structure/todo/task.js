//Необходимо написать простой планировщик дел. В данной версии все дела
// теряются после обновления страницы
"use strict";

//получилим данные с экранных элементов по соответствующим классам
const tasksList = document.querySelector("#tasks__list");   // здесь #tasks__list - позволяет обратиться к уникальному идентификатору элемента id
const taskForm = document.querySelector(".tasks__control");//здесь .tasks__control это селектор класса
const taskInput = taskForm.querySelector("#task__input"); //возвращает первый элемент, который соответствует  CSS селектору

function addTask(e) {    // функция - добавление задач по нажатию клавиши Enter при наличии текста в поле ввода
  e.preventDefault();    // отменяет действие события по умолчанию
  
  if (taskInput.value != "") {                // проверка наличия текста в поле ввода
    tasksList.insertAdjacentHTML("beforeEnd", // вставляем кусочек html. Код вставляется относительно опорного элемента: #tasks__list.
      `<div class="task">
    <div class="task__title">
    ${taskInput.value}
    </div>
    <a href="#" class="task__remove">&times;</a> 
  </div>`
    );                                         // &times - это символ умножения - крестик
    
    tasksList.lastChild.addEventListener("click", function (event) { //метод addEventListener() объекта lastChild 
                                                                     // позволяет зарегистрировать обработчик событий определенного типа для конкретной цели
      this.closest(".task").remove();          //Метод Element.closest(CSS-селектор) возвращает ближайший родительский элемент (или сам элемент), 
                                               // который соответствует заданному CSS-селектору или null,
                                               // если таковых элементов вообще нет.
                                               // Метод remove удаляет выбранные элементы. 
    });
  };
}

taskForm.addEventListener("submit", addTask);//вызов метода addEventListener('click', function ( event)
