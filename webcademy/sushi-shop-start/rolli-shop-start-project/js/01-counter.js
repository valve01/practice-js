// Добавляем работу счетчика

// План такой: найти кнопки + и - , отследить клик по ним и в случае клика найти элемент с отображением счета и увеличить или уменьшить его значение

// // Сделаем сначала для одного счетчика
// const plusButton = document.querySelector('[data-action="plus"]');
// const minusButton = document.querySelector('[data-action="minus"]');

// // Найдем элемент со значение счетчика
// const counter = document.querySelector("[data-counter]");
// // console.log(counter);

// plusButton.addEventListener("click", counterPlus);
// function counterPlus() {
	//.innerText изменяет значение на указанное, а также возвращает его. Поэтому Чтобы значение счетчика увеличивалось на 1 , к счетчику пишем инкремент(++) и counter.innerText. В левой части выражения .innerText говорит: присваиваем переменной counter значение, которое идет после равно. В правой части выражения говорит: вернуть значение ++counter. Может что-то и неправильно понял, но чтобы увеличить значение счетчика на 1 нужно написать имеенно так. 
// 	counter.innerText = ++counter.innerText;
// }

// minusButton.addEventListener("click", counterMinus);
// function counterMinus() {
// 	// Проверяем чтобы счетчик был больше 1. Метод parseInt парсит передаваемые данные и переводит их в целые числа
// 	if (parseInt(counter.innerText) > 1) {
// 		counter.innerText = --counter.innerText;
// 	}
// }

// // Так тоже работает
// function counterMinus() {
// 	counter.innerText = --counter.innerText;
// 	if (counter.innerText <= 0) {
// 		counter.innerText = 1;
// 	}
// }


// Весь код для одного счетчика
const plusButton = document.querySelector('[data-action="plus"]');
const minusButton = document.querySelector('[data-action="minus"]');
const counter = document.querySelector("[data-counter]");
plusButton.addEventListener("click", counterPlus);
function counterPlus() {
	counter.innerText = ++counter.innerText;
}
minusButton.addEventListener("click", counterMinus);
function counterMinus() {
	if (parseInt(counter.innerText) > 1) {
		counter.innerText = --counter.innerText;
	}
}




