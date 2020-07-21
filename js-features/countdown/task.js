/*
const addTime = function() {
    const timer = document.getElementById("timer");
    timer.textContent -= 1;
    if (timer.textContent < 0) { 
        alert('Вы победили в конкурсе!');
        return}
    return
}

    setInterval(addTime, 100);
*/
const timer = document.getElementById("timer");

let add = setInterval(addTime, 100);

function addTime(){
    timer.textContent -= 1;
    if (timer.textContent == 0 ) { 
        //timer.textContent = 0;
        alert('Вы победили в конкурсе!');
        clearInterval(add);
        }
}
    
