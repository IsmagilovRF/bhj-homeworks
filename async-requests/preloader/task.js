
const loader = document.getElementById('loader');
const items = document.getElementById('items');

const xhr = new XMLHttpRequest();
//После создания объекта XMLHttpRequest можно отправлять запросы к серверу. 
//Но для начала надо вызвать метод open() для инициализации запроса:
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
//Метод open() принимает три параметра: тип запроса (GET, POST, HEAD, PUT), 
   //адрес запроса и третий необязательный параметр - 
   //логическое значение true или false, указывающее, будет ли запрос в асинхронном режиме.
   //(для асинхронного режима указывается значение true) и по умолчанию тоже true видимо

xhr.responseType = 'json'; //свойство .responseType возвращает тип ответа

xhr.onload = () => {
    loader.classList.remove('loader_active');
    console.log(xhr.response.response.Valute);
    const valutes = xhr.response.response.Valute;
    // разметка внутри items изменена чтобы было похоже на то как в задании, 
    // одна валюта - одна строка
    for (valute in valutes) {
        items.innerHTML += `
        <div class="item">
        <span class="item__code"> ${valutes[valute].CharCode} </span>
        <span class="item__value"> ${valutes[valute].Value} </span>
        <span class="item__currency"> ${valutes[valute].Name} </span>
        </div>
        `
    }
}
// необходимо отправить запрос с помощью метода send():
xhr.send();

