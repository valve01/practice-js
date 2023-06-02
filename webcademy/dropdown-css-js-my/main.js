//  IE не поддерживает метод forEach Для nodeList поэтому нужно добавить полифил для IE и таким образом научить IE этому методу.
// // Полифилл для метода forEach для NodeList
if (window.NodeList && !NodeList.prototype.forEach) {
	NodeList.prototype.forEach = function (callback, thisArg) {
		thisArg = thisArg || window;
		for (var i = 0; i < this.length; i++) {
			callback.call(thisArg, this[i], i, this);
		}
	};
}

// document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
// 	const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
// 	const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
// 	const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
// 	const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');

// 	// Клик по кнопке. Открыть/Закрыть select
// 	dropDownBtn.addEventListener('click', function (e) {
// 		dropDownList.classList.toggle('dropdown__list--visible');
//         this.classList.add('dropdown__button--active');
// 	});

// 	// Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
// 	dropDownListItems.forEach(function (listItem) {
// 		listItem.addEventListener('click', function (e) {
// 			e.stopPropagation();
// 			dropDownBtn.innerText = this.innerText;
// 			dropDownBtn.focus();
// 			dropDownInput.value = this.dataset.value;
// 			dropDownList.classList.remove('dropdown__list--visible');
// 		});
// 	});

// 	// Клик снаружи дропдауна. Закрыть дропдаун
// 	document.addEventListener('click', function (e) {
// 		if (e.target !== dropDownBtn) {
// 			dropDownBtn.classList.remove('dropdown__button--active');
// 			dropDownList.classList.remove('dropdown__list--visible');
// 		}
// 	});

// 	// Нажатие на Tab или Escape. Закрыть дропдаун
// 	document.addEventListener('keydown', function (e) {
// 		if (e.key === 'Tab' || e.key === 'Escape') {
// 			dropDownBtn.classList.remove('dropdown__button--active');
// 			dropDownList.classList.remove('dropdown__list--visible');
// 		}
// 	});
// });
// ********************************************************
// *Мой код для одного выпадающего списка (DropDown)      *
// ********************************************************
// План
// Верстаем html разметку для дропдауна
// Задаем стили для дропдауна
// Далее в JS
// Объявляем переменные
// 	// Клик по кнопке. Открыть/Закрыть select
// 	// Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
// 	// Клик снаружи дропдауна. Закрыть дропдаун
// 	// Нажатие на Tab или Escape. Закрыть дропдаун

// // Объявляем переменные
// // Кнопка select
// const selectBtn = document.querySelector(".dropdown__button");
// // Обертка дропдауна
// const dropDownWrapper = document.querySelector(".dropdown__list");
// // Список элементов
// const dropDownListItems = dropDownWrapper.querySelectorAll(
// 	".dropdown__list-item"
// );
// //Инпут для корректной работы бэка
// const dropdown__inputHidden=document.querySelector('.dropdown__input-hidden');

// // 	// Клик по кнопке. Открыть/Закрыть select
// selectBtn.addEventListener("click", function () {
// 	dropDownWrapper.classList.toggle("dropdown__list--visible");
// this.classList.add("dropdown__button--active");// Добавим эту строчку для того чтобы с кнопки не "мигал" визуальный эффект фокуса, при нажатии на элемент списка
// });
// // 	// Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун

// // Для каждого элемента списка мы слушаем клик и если он происходит записываем в текст кнопки select текст элемента списка, по которому кликнули.
// dropDownListItems.forEach(function (listItem) {
// 	listItem.addEventListener("click", function (event) {
// event.stopPropagation();// Останавливаем передачу события наверх, чтобы корректно сделать закрытие дропдауна по клику вне его. .stopPropagation() это метод объекта event.
// 		// selectBtn.innerText = listItem.innerText;
// 		selectBtn.innerText = this.innerText;// Можно и через this
// 		selectBtn.focus();// Добавим фокус кнопке select после нажатия на элемент списка. Фокус возвращается но визуальный эффект "мигает". Решили это в блоке клик по кнопке.
// 		dropDownWrapper.classList.remove("dropdown__list--visible");
// dropdown__inputHidden.value = this.innerText;// Сделаем чтобы строчки попадали в истиный инпут, чтобы можно было с ним корректно работать на бэке.
// dropdown__inputHidden.value = this.dataset.value// А так в инпут попадет значение атрибуа data-value того элемента, по которому мы кликнули
// 	});
// });
// // 	// Клик снаружи дропдауна. Закрыть дропдаун. Оператор !== обозначает не равно.
// // Получается что мы слушаем клик по всему окну и если он приходится не по кнопке select, то мы закрываем dropdown. Цель (target) мы находим , обращаясь к объекту event, который создается в момент клика и мы его передаем в нашу функцию, которая будет выполняться по этому клику. Аналогично действуем в случае с отслеживанием нажатий кнопок на клавиатуре.
// window.addEventListener("click", function (event) {
// 	if (event.target !== selectBtn) {
// 		dropDownWrapper.classList.remove("dropdown__list--visible");
// 		selectBtn.classList.remove("dropdown__button--active");// Убираем визуальный эффект фокуса, который мы добавили в момент нажатия на select, чтобы не "он не моргал"
// 	}
// });
// // 	// Нажатие на Tab или Escape. Закрыть дропдаун
// document.addEventListener("keydown", function (event) {
// 	if (event.key === "Tab" || event.key === "Escape") {
// 		dropDownWrapper.classList.remove("dropdown__list--visible");
// 		selectBtn.classList.remove("dropdown__button--active");
// 	}
// });

// Весь код для одного дропдауна

// const selectBtn = document.querySelector(".dropdown__button");
// const dropDownWrapper = document.querySelector(".dropdown__list");
// const dropDownListItems = dropDownWrapper.querySelectorAll(
// 	".dropdown__list-item"
// );
// const dropdown__inputHidden=document.querySelector('.dropdown__input-hidden');

// selectBtn.addEventListener("click", function () {
// 	dropDownWrapper.classList.toggle("dropdown__list--visible");
// 	this.classList.add("dropdown__button--active");
// });

// dropDownListItems.forEach(function (listItem) {
// 	listItem.addEventListener("click", function (event) {
// 		event.stopPropagation();
// 		selectBtn.innerText = this.innerText;
// 		selectBtn.focus();
// 		dropDownWrapper.classList.remove("dropdown__list--visible");
// 		dropdown__inputHidden.value = this.dataset.value
// 	});
// });

// document.addEventListener("click", function (event) {
// 	if (event.target !== selectBtn) {
// 		dropDownWrapper.classList.remove("dropdown__list--visible");
// 		selectBtn.classList.remove("dropdown__button--active");
// 	}
// });

// document.addEventListener("keydown", function (event) {
// 	if (event.key === "Tab" || event.key === "Escape") {
// 		dropDownWrapper.classList.remove("dropdown__list--visible");
// 		selectBtn.classList.remove("dropdown__button--active");
// 	}
// });

// Улучшим код. Сделаем чтобы у нас было много таких списков и чтобы они все корректно работали. Для этого в верстку накопируем наших дропдаунов
// Создаем нодлист из наших дропдаунов и записываем его в const dropdowns. И выполняем код для каждого элемента нодлиста
const dropdowns=document.querySelectorAll('.dropdown')

dropdowns.forEach(function(item){

	const selectBtn = item.querySelector(".dropdown__button");
	const dropDownWrapper = item.querySelector(".dropdown__list");
	const dropDownListItems = dropDownWrapper.querySelectorAll(
		".dropdown__list-item"
	);
	const dropdown__inputHidden = item.querySelector(".dropdown__input-hidden");
	
	selectBtn.addEventListener("click", function () {
		dropDownWrapper.classList.toggle("dropdown__list--visible");
		this.classList.add("dropdown__button--active");
	});
	
	dropDownListItems.forEach(function (listItem) {
		listItem.addEventListener("click", function (event) {
			event.stopPropagation();
			selectBtn.innerText = this.innerText;
			selectBtn.focus();
			dropDownWrapper.classList.remove("dropdown__list--visible");
			dropdown__inputHidden.value = this.dataset.value;
		});
	});
	
	document.addEventListener("click", function (event) {
		if (event.target !== selectBtn) {
			dropDownWrapper.classList.remove("dropdown__list--visible");
			selectBtn.classList.remove("dropdown__button--active");
		}
	});
	
	document.addEventListener("keydown", function (event) {
		if (event.key === "Tab" || event.key === "Escape") {
			dropDownWrapper.classList.remove("dropdown__list--visible");
			selectBtn.classList.remove("dropdown__button--active");
		}
	});
})

