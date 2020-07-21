
const timer = document.getElementById("timer");
let add = setInterval(addTime, 1000);
function addTime() {
    timer.textContent -= 1;
    if (timer.textContent == 0 ) { 
        alert('Вы победили в конкурсе!');
        clearInterval(add);
        }
}
    
