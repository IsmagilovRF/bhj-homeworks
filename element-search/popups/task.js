

let links = document.getElementsByClassName('modal__close'); // получили три элемента класса modal__close

document.getElementById('modal_main').style.display = "block";//показать окно modal_main при загрузке

let element = links[0];
element.onclick = function() {
    document.getElementById('modal_main').style.display = "none";//по клику на крестик - скрыть окно modal_main
};

element = links[1];
element.onclick = function() {
    document.getElementById('modal_success').style.display = "block";//по клику на кпасное (Сделать хорошо) - показать окно modal_success };
    document.getElementById('modal_main').style.display = "none";//по клику на кпасное (Сделать хорошо)- скрыть окно modal_main
};

element = links[2];
element.onclick = function() {
    document.getElementById('modal_success').style.display = "none";//по клику на крестик - скрыть окно modal_success
};

