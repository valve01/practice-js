// Урок. Скрытие и открытие блока по клику на кнопку с изменением надписи на кнопке.

// .querySelector - это метод объекта document, который находит html элементы по селектору.
// объект document отвечает за HTML документ, загруженный в окно или вкладку браузера.

// Ищем кнопку
// const buttonElement = document.querySelector("#button");

// Ищем блок с текстом
// const contentElement = document.querySelector("#content");

// Навешиваем прослушку клика для кнопки, и говорим чтобы по событию выполнялась функция showHide
// buttonElement.addEventListener("click", showHide);

// Свойство classList содержит псевдомассив CSS классов элемента. Используем это свойство, обращаясь к нашему элементу, чтобы получить доступ к его классам. И используем метод toggle, который есть у .classList чтобы указанный в круглых скобках класс "переключался". Метод toggle возвращает true или false в зависимости от того добавил он или убрал класс, следовательно можно это использовать в логических операциях.
// function showHide() {
// 	contentElement.classList.toggle("content-hidden");
// }

// Теперь сделаем чтобы текст на кнопке зависел от того скрыт блок или открыт.
// У элемента button есть свойство .textContent , которое позволяет менять текст внутри этого элемента.
// Используя метод мы записывали в скобки() класс, который нужно было переключать
// Используя свойсто мы присваивали значение контента для элемента, поэтому использовали знак присвоения (=).

// function showHide() {
// 	if (contentElement.classList.toggle("content-hidden")) {
// 		buttonElement.textContent = "Открыть блок";
// 	} else {
// 		buttonElement.textContent = "Закрыть блок";
// 	}
// }

// Можно и менее изящно. Обращаем к свойству .classList и используем метод .contains. Он возвращает true или false в зависимости есть ли указанный класс на элементе, к которому мы обращаемся или нет.

// function showHide() {
// 	contentElement.classList.toggle("content-hidden");
// 	if (contentElement.classList.contains("content-hidden")) {
// 		buttonElement.textContent = "Открыть блок";
// 	} else {
// 		buttonElement.textContent = "Закрыть блок";
// 	}
// }

// Весь код сразу

const buttonElement = document.querySelector("#button");
const contentElement = document.querySelector("#content");
buttonElement.addEventListener("click", showHide);
function showHide() {
	if (contentElement.classList.toggle("content-hidden")) {
		buttonElement.textContent = "Открыть блок";
	} else {
		buttonElement.textContent = "Закрыть блок";
	}
}