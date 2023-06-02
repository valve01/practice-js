// ======34:42

// Найдем наши заголовки. Тут используем селектор по атрибуту data-name: для этого пишем его в кавычках и квадратных скобках и при этом кавычки для значения атрибута не должны пересекаться с кавычками селектора. Если у селектора " ", то у атрибута должны быть ' ' и наоборот. В результате мы получим NodeList, т.е. коллекцию элементов по нашему селектору.
// const headers = document.querySelectorAll('[data-name="accordeon-title"]');

// Нельзя навесить AddEventListener на переменную headers, потому что это колеекция. Этот метод можно применять только к элементам. Поэтому далее нужно обойти NodeList методом for each, чтобы на каждый элемент навесить AddEventListener.

// В параметрах функции для forEach можно объявить item и index. Но индекс нам сейчас не нужен.
// headers.forEach(function(item,index){})

// Таким образом мы повесили прослушку на каждый элемент. По клику на любой заголовок в консоле появится "click"
//// Получается из forEach каждый элемент попадает в параметр функции, а оттуда уже подставляется внутри блока кода. Поэтому addEventListner навешивается каждому////
// headers.forEach(function(item){
// 	item.addEventListener('click', function(){console.log("click")})
// })

// Теперь сделаем открытие/скрытие ближайшего блока текста при клике на заголовок.
// headers.forEach(function (item) {
// 	item.addEventListener("click", showHideText);
// });

// Опишем функцию showHideText, которая будет скрывать/окрывать текст.
// Существует ключевое слово this, которое всегда ссылается на элемент, по которому произошло, отслеживаемое событие (по которому мы кликнули). Напрмер при записи (console.log(this)), кликнув на любой заголовок мы получим в консоль именно тот объект, по на который кликнули. Свойство .nextElementSibling - возвращает следующий по коду соседний элемент
// function showHideText() {
// console.log(this)
// console.log(this.nextElementSibling)
// }

// И теперь обращаясь к объекту .classList, того элемента, по которому мы кликаем используем метод .toggle, чтобы переключать класс hidden у наших текстовых блоков.
// function showHideText() {
// 	this.nextElementSibling.classList.toggle("hidden");
// }

// Весь код сразу
const headers = document.querySelectorAll('[data-name="accordeon-title"]');
headers.forEach(function (item) {
	item.addEventListener("click", showHideText);
});
function showHideText() {
	this.nextElementSibling.classList.toggle("hidden");
}
