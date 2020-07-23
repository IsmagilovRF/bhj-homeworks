const counterValue =  document.getElementById('clicker__counter');
cookie.onclick = function() {
    counterValue.textContent = Number(counterValue.textContent) + 1;
    cookie.width = counterValue.textContent % 2 ? 500 : 200;
};
