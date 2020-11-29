class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');

    this.reset();

    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  registerEvents() {
    /*
      TODO:
      Написать обработчик события, который откликается на каждый введённый символ.
      В случае правильного ввода слова вызываем this.success(). При неправильном вводе символа - this.fail();
     */
    document.addEventListener("keydown", (event) => {
      // Получаем DOM-элемент текущего символа, который необходимо ввести (свойство this.currentSymbol) в верхнем регистре:
      let currentSymbolUpperCase = this.currentSymbol.textContent.toUpperCase();
      //Получаем символ, который введён с клавиатуры, тоже в верхнем регистре:
      let keydownSymbolUpperCase = event.key.toUpperCase();
      // если два символа одинаковые то this.success(); иначе  this.fail():
      if (currentSymbolUpperCase == keydownSymbolUpperCase) {
        this.success();
      } else {
        this.fail();
      }       
   });
   

  }

  success() {
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;
    if (this.currentSymbol !== null) {
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();

    this.renderWord(word);
  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game(document.getElementById('game'))

