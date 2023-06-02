// // Теперь сделаем универсальный код для счетчиков.

// // Будем отслеживать клик вообще по окну и проверять куда он пришелся. Чтобы это сделать передадим в функцию параметр event, так мы сможем применять методы и свойства к нашему событию (ловить target например (элемент по которому пришелся клик))
// window.addEventListener("click", function (event) {
// 	// console.log("click window");//Проверка
// 	// console.log(event)//Проверка
// 	// Так мы получим элемент по которому мы кликнули
// 	// console.log(event.target)//Проверка
// 	// Так мы получим значение атрибута data-action
// 	// console.log(event.target.dataset.action) //Проверка
// 	// Пишем условие
// 	// Проверяем является ли элемент, по которому пришелся клик кнопкой + или -
// 	const changeCounter = event.target.dataset.action;
// 	// Метод closest находит ближайшего родителя для указанного в селекторе элемента. Таким образом мы найдем обертку счетчика внутри которого кликали. Как только мы кликнули по экрану, уже можно найти необходимые нам элементы (родителя и div со значением счетчика). Значит не нужно их прописывать в условиях для plus и minus.

// 	// Проверяем пришелся ли клик четко по кнопкам плюс или минус
// 	if (changeCounter === "plus" || changeCounter === "minus") {
// 		// console.log("true")
// 		const counterWrapper = event.target.closest(".counter-wrapper");
// 		// Ищем у нашего родителя элемент с указанным атрибутом, т.е. наш div со значением счетчика. Т.Е. ищем родителя от нажатой кнопки , и потом у родителя находим элемент с классом data-counter

// 		const counter = counterWrapper.querySelector("[data-counter]");
// 		if (changeCounter === "plus") {
// 			// console.log("+");//Проверка
// 			// const counter = counterWrapper.querySelector("[data-counter]");
// 			counter.innerText = ++counter.innerText;
// 			// console.log(counterWrapper); //Проверка
// 		}

// 		// if (
// && - логическое И
// 		// 	event.target.closest(".cart-wrapper") &&
// 		// 	parseInt(counter.innerText) === 1
// 		// ) {
// 		// 	// console.log("Удалить из корзины"); //Проверка
// 		// 	// Метод .remove() удалит из верстки элемент к которому мы обратились
// 		// 	event.target.closest(".cart-item").remove();
// 		// }

// 		// Так тоже работает. Можно и без parseInt обойтись, тогда нужно нестрогое равенство
// 		// if (event.target.closest(".cart-wrapper")) {
// 		// 	if (counter.innerText == 1) {
// 		// 		console.log("Удалить из корзины"); //Проверка
// 		// 		event.target.closest(".cart-item").remove();
// 		// 	}
// 		// }

// 		// Если предыдущее условие написать после этого блока, то если значение было 2 сначала оно уменьшится до 1 и тут же удалиться. т.о. нельзя будет выставить на счетчике 1. Поэтому мы уже переделали ниже код, и добавили else if чтобы связать логически 2 блока
// 		if (changeCounter === "minus") {
// 			if (counter.innerText > 1) {
// 				// console.log("-");//Проверка

// 				counter.innerText = --counter.innerText;
// 				// console.log(counterWrapper); //Проверка
// 				// Если отработает if то else if уже не отработает и все будет четко
// 			} else if (
// 				event.target.closest(".cart-wrapper") &&
// 				parseInt(counter.innerText) === 1
// 			) {
// 				event.target.closest(".cart-item").remove();
// 			}
// 		}
// 	}
// });

// Ура. Счетчик работает. Но в консоли теперь возникает ошибка, если кликнуть не по счетчику, это происходит потому что браузер пытается найти в родителя  элемента по которому мы кликнули с классом .counter-wrapper и не находит его и возвращает Null, пытается запустить querySelector, а у Null такого метода нет. Чтобы этого избежать - добавим проверку того что клик пришелся именно на наши кнопки + или -. Соответсвенно весь дальнейший код нужно вложить в это условие. Можно и объявить let переменную counter и не вкладывать в проверку последние 2 условия

// Весь код
// window.addEventListener("click", function (event) {
// 	const changeCounter = event.target.dataset.action;

// 	if (changeCounter === "plus" || changeCounter === "minus") {
// 		const counterWrapper = event.target.closest(".counter-wrapper");

// 		const counter = counterWrapper.querySelector("[data-counter]");
// 		if (changeCounter === "plus") {
// 			counter.innerText = ++counter.innerText;
// 		}

// 		if (counter.innerText > 1) {
// 			if (changeCounter === "minus") {
// 				counter.innerText = --counter.innerText;
// 			}
// 		}
// 	}
// });

// Весь код сразу с удалением из корзины

window.addEventListener("click", function (event) {
	const changeCounter = event.target.dataset.action;

	if (changeCounter === "plus" || changeCounter === "minus") {
		const counterWrapper = event.target.closest(".counter-wrapper");
		const counter = counterWrapper.querySelector("[data-counter]");
		if (changeCounter === "plus") {
			counter.innerText = ++counter.innerText;
		}

		if (changeCounter === "minus") {
			if (counter.innerText > 1) {
				counter.innerText = --counter.innerText;
			} else if (
				event.target.closest(".cart-wrapper") &&
				parseInt(counter.innerText) === 1
			) {
				event.target.closest(".cart-item").remove();
				toggleCartStatus();
				calcCartPriceAndDelivery();

			}
		}
	}
	// Проверяем пришелся ли клик на + или - внутри корзины
	if (
		event.target.hasAttribute("data-action") &&
		event.target.closest(".cart-wrapper")
	) {
		// Запускаем функцию пересчета стоимости заказа и доставки
		calcCartPriceAndDelivery();
	}
});
