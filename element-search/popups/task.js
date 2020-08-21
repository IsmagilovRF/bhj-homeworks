'use strict';

let main = document.getElementById('modal_main');
let success = document.getElementById('modal_success');
let arrModalLinks = Array.from(document.getElementsByClassName('modal__close'));

main.classList.toggle("modal_active");

for (let i = 0; i < arrModalLinks.length; i++) {
    let arrModalLink = arrModalLinks[i];
    arrModalLink.onclick = function() {
        if (this.closest('div') === this) {
            main.classList.remove("modal_active");
        }
        if (this.closest('a') === this) {
            success.classList.toggle("modal_active");  
            main.classList.remove("modal_active");
        }
        if (this.closest('div') === this) {
            success.classList.remove("modal_active");
        }
    };
}