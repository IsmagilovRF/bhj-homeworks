
getHole = Index => document.getElementById(`hole${Index}`);

let dead =  document.getElementById('dead');
let lost =  document.getElementById('lost');

for (let i = 1; i <= 9; i++) {
    getHole(i).onclick = function() {
        let boolVar = getHole(i).className.includes('hole hole_has-mole');
        if (boolVar) {
            dead.textContent = Number(dead.textContent) + 1 ; 
            if (dead.textContent >= 10) { 
                alert('Вы выиграли');
                lost.textContent = 0;
                dead.textContent = 0;
                return
            }
        } else {
            lost.textContent = Number(lost.textContent) + 1 ; 
            if (lost.textContent >= 5) {
                lost.textContent = 0;
                dead.textContent = 0;
                alert('Вы проиграли');
                return 
            }
        }
    }
}


