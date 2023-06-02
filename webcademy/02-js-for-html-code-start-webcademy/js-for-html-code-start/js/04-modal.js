// // Сделаем универсальный код для любого количества модалок с одинаковой структурой.

// // Ищем все кнопки для открытия модалок
// const openModalButtons = document.querySelectorAll("[data-modal-button]");
// // console.log(openModal)//Проверка

// // Ищем все кнопки для закрытия модалок
// const closeModalButtons = document.querySelectorAll("[data-modal-close]");
// // console.log(closeModalButtons)//Проверка

// // Найдем все модалки
// const allModals = document.querySelectorAll("[data-modal]");
// // console.log(allModals)//Проверка

// // Обходим нодлист из кнопок и навешиваем прослушку и функцию, которая будет открывать окно по событию
// openModalButtons.forEach(function (item) {
// 	item.addEventListener("click", openModalWindow);
// });

// function openModalWindow() {
// 	// console.log("click")//Проверка
// 	// Ищем все модалки
// 	// console.log(this.dataset.modalButton)//Проверка. Это даст нам вернет значение атрибута data-modal-button у кнопки, которую мы нажали. Это позволит нам создать нужный селектор ниже.
// 	//  JS не поддерживает использование "-" в переменных. Поэтому необходимо трансформировать переменные, содержащие тире в CamelCase стиль. Например modal-button в modalButton.
// 	const modal = document.querySelector("#" + this.dataset.modalButton);
// 	modal.classList.remove("hidden");
// 	// Блокируем передачу события вверх по вложенности. Находим в модалке непосредственно само окно по классу modal-window, слушаем, и когда событие наступает блокируем передачу при помощи .stopPropagation()
// 	modal
// 		.querySelector(".modal-window")
// 		.addEventListener("click", function (event) {
// 			event.stopPropagation();
// 		});
// }

// // Кнопки закрыть модалку
// closeModalButtons.forEach(function (item) {
// 	item.addEventListener("click", function () {
// 		const currentModal = this.closest("[data-modal]");
// 		// console.log(currentModal)//Проверка
// 		currentModal.classList.add("hidden");
// 	});
// });

// // Закрытие по fade

// allModals.forEach(function (item) {
// 	item.addEventListener("click", function () {
// 		this.classList.add("hidden");
// 		// console.log(this)//Проверка
// 	});
// });

// Так тоже работает
// allModals.forEach(function (item) {
// 	item.addEventListener("click", function () {
// 		const currentModal = this.closest("[data-modal]");
// 		console.log(currentModal)//Проверка
// 		currentModal.classList.add("hidden");
// 	});
// });

// Весь код

const openModalButtons = document.querySelectorAll("[data-modal-button]");
const closeModalButtons = document.querySelectorAll("[data-modal-close]");
const allModals = document.querySelectorAll("[data-modal]");

openModalButtons.forEach(function (item) {
	item.addEventListener("click", openModalWindow);
});

function openModalWindow() {
	const modal = document.querySelector("#" + this.dataset.modalButton);
	modal.classList.remove("hidden");
	modal
		.querySelector(".modal-window")
		.addEventListener("click", function (event) {
			event.stopPropagation();
		});
}

closeModalButtons.forEach(function (item) {
	item.addEventListener("click", function () {
		const currentModal = this.closest("[data-modal]");
		currentModal.classList.add("hidden");
	});
});

allModals.forEach(function (item) {
	item.addEventListener("click", function () {
		this.classList.add("hidden");
	});
});
