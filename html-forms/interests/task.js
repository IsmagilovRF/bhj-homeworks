"use strict";
//

const allInterests = document.querySelectorAll(".interest__check");

for (let interest of allInterests) {
  const subInterests = interest.closest(".interest").querySelectorAll(".interest__check");
  interest.addEventListener("click", () => {
    if (interest.checked) {
      if (subInterests) {        
        for (let subInterest of subInterests) {
          subInterest.checked = true;
        }
      }      
    } else {
      if (subInterests) {
        for (let subInterest of subInterests) {
          subInterest.checked = false;
        }
      }
    }
  }
  );
}