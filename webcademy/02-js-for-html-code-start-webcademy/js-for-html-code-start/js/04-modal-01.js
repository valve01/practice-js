// // Работа с одним модальным окном

// // Сделаем чтобы по нажатию на кнопку всплывало окно

// // Найдем все необходимые элементы
// const modalButton = document.querySelector('[data-modal-button="modal-1"]');
// const modalArea = document.querySelector("#modal-1");

// // Найдем кнопку закрыть модальное окно
// const modalButtonClose = modalArea.querySelector("[data-modal-close]");

// // Вешаем прослушку. Снимаем скрытие по клику.
// modalButton.addEventListener("click", openModalWindow);
// function openModalWindow() {
// 	modalArea.classList.remove("hidden");
// }

// // Закрываем окно по клику
// modalButtonClose.addEventListener("click", closeModalWindow);
// function closeModalWindow() {
// 	modalArea.classList.add("hidden");
// }
// // Закрываем окно по заднему фону. При такой записи модальное окно закроется при клике по любому месту экрана, т.к. modalArea занимает весь экран и под самим окном оно тоже есть. Это связано с тем что события в JS передаются вверх по вложенности. Т.е. любое событие у дочернего элемента слышит родитель. т.о. получается что даже при клике внутри самого окна, например на текст - модальное окно закроется.
// modalArea.addEventListener("click", closeModalWindow);

// // Чтобы модальное окно не закрывалось при кликах просто внутри самого окна нужно остановить передачу события "click" вверх по вложенности от элемента, который оборачивает само модальное окно. В нашем случае это div с классом "modal-window". Для этого используем метод .stopPropagation() - он предотвращает передачу указанного события выше по вложенности.

// // Найдем наше окно, выше которого не должно передаваться событие.
// const modalWindow = modalArea.querySelector(".modal-window");
// console.log(modalWindow); //Проверка

// // Получается что наше модальное окно слушает click и когда он происходит включает код, который блокирует передачу этого клика выше по вложенности. При этом .stopPropagation() работает с объектом event, потому что в него записываются все данные о событии. .stopPropagation() это метод объекта event. Поэтому не забываем указать его (event) в параметрах функции. (Можно обозвать его как угодно, главное обращаться к нему в коде так же как обозвали, вызывая .stopPropagation())
// modalWindow.addEventListener("click", function (event) {
// 	event.stopPropagation();
// });

// Весь код сразу
const modalButton = document.querySelector('[data-modal-button="modal-1"]');
const modalArea = document.querySelector("#modal-1");
const modalButtonClose = modalArea.querySelector("[data-modal-close]");
const modalWindow = modalArea.querySelector(".modal-window");
modalButton.addEventListener("click", openModalWindow);
function openModalWindow() {
	modalArea.classList.remove("hidden");
}
modalButtonClose.addEventListener("click", closeModalWindow);
function closeModalWindow() {
	modalArea.classList.add("hidden");
}
modalArea.addEventListener("click", closeModalWindow);
modalWindow.addEventListener("click", function (event) {
	event.stopPropagation();
});
