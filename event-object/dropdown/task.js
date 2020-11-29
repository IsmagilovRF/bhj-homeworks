// Используем метод querySelector() (возвращает первый элемент, который соответствует указанному CSS селектору:
const button = document.querySelector('.dropdown__value'),
	  value = document.querySelector('.dropdown__value'),
	  list = document.querySelector('.dropdown__list'),
	  items = document.querySelectorAll('.dropdown__item');

//Для того, чтобы открыть меню по клику, требуется проставить класс dropdown__list_active:
button.addEventListener('click', () => {            //назначаем обработчики событий -> здесь при нажатии на кнопку выпадает меню
    list.classList.toggle('dropdown__list_active'); // Метод toggle объекта classList чередует заданный CSS класс элемента:
                                                    // добавляет класс, если его нет и удаляет, если есть.  
});
// работаем с выпавшим меню:
for (let i = 0; i < items.length; i++) {
	items[i].addEventListener('click', (e) => {
		e.preventDefault();              //  метод preventDefault() объекта е при вызове отменяет действие события по умолчанию
        const link = e.target.innerText; // Метод innerText позволяет получить CSS элемента
                                         // event.target содержит элемент, на котором сработало событие
		if (list.classList.contains('dropdown__list_active')) { // если у элемента активный класс
			value.innerText = link;      // присваиваем выбранный CSS
			list.classList.remove('dropdown__list_active');//удаляем у элемента указанный класс
		}
	});
}