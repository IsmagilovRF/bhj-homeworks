"use strict";

const fontSizes = document.querySelectorAll(".font-size");
const book = document.querySelector(".book");
for (const size of fontSizes) {  
  size.addEventListener('click', function (event) {
    fontSizes.forEach(size => size.classList.remove("font-size_active"));    
    this.classList.add("font-size_active");    
    if (this.classList.contains("font-size_small")) {
      book.classList.add("book_fs-small");
      book.classList.remove("book_fs-big");
    } else if (this.classList.contains("font-size_big")) {
      book.classList.remove("book_fs-small");
      book.classList.add("book_fs-big");
    } else {
      book.classList.remove("book_fs-small");
      book.classList.remove("book_fs-big");
    }
    event.preventDefault();
  });
}