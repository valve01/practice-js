// // Создаем функцию для подсчета итоговой суммы в корзине
// function calcCartPriceAndDelivery() {
// 	// Объявляем переменную, которой будет храниться итоговая сумма, она будет изменяться постоянно, поэтому через let
// 	let totalPrice = 0;
// 	const cartWrapper = document.querySelector(".cart-wrapper");
// 	const cartItems = cartWrapper.querySelectorAll(".cart-item");
// 	const totalPriceEl = document.querySelector(".total-price");
// 	const deliveryCost = document.querySelector(".delivery-cost");
// 	const cartDeliveryCost=document.querySelector('[data-cart-delivery-cost]')
// 	cartItems.forEach(function (item) {
// 		// Находим значение счетчика товара в корзине
// 		const counter = item.querySelector("[data-counter]").innerText;
// 		// Находим стоимось одной единицы товара в корзине.
// 		const price = item.querySelector(".price__currency").innerText;

// 		// Так получим стоимость заказа по конкретной позиции
// 		const currentPrice = parseInt(counter) * parseInt(price);
// 		// Просуммируем значения по всем позициям
// 		// totalPrice=totalPrice+currentPrise
// 		// Оператор += говорит: берем значение из левой части и прибавляем к нему значение правой части и присваиваем переменной из левой части полученный результат
// 		totalPrice += currentPrice;
// 		// console.log(totalPrice)//Проверка

// 		// Отображаем цену на странеце
// 		totalPriceEl.innerText = totalPrice;

// 		// Работаем с ценой доставки. У нас ТЗ: при стоимости заказа свыше 600 р - доставка бесплатно. Если нет - 250 р.

// 		if (totalPrice >= 600) {
// 			deliveryCost.innerText = "бесплатно";
// 			deliveryCost.classList.add("free");
// 			cartDeliveryCost.classList.remove("none")
// 		} else {
// 			deliveryCost.innerText = "250 ₽";
// 			deliveryCost.classList.remove("free");
// 			cartDeliveryCost.classList.remove("none")
// 		}
// 	});
// }

// Весь код сразу

function calcCartPriceAndDelivery() {
	let totalPrice = 0;
	const cartWrapper = document.querySelector(".cart-wrapper");
	const cartItems = cartWrapper.querySelectorAll(".cart-item");
	const totalPriceEl = document.querySelector(".total-price");
	const deliveryCost = document.querySelector(".delivery-cost");
	const cartDeliveryCost = document.querySelector("[data-cart-delivery-cost]");
	cartItems.forEach(function (item) {
		const counter = item.querySelector("[data-counter]").innerText;
		const price = item.querySelector(".price__currency").innerText;
		const currentPrice = parseInt(counter) * parseInt(price);
		totalPrice += currentPrice;
		totalPriceEl.innerText = totalPrice;
		if (totalPrice >= 600) {
			deliveryCost.innerText = "бесплатно";
			deliveryCost.classList.add("free");
			cartDeliveryCost.classList.remove("none");
		} else {
			deliveryCost.innerText = "250 ₽";
			deliveryCost.classList.remove("free");
			cartDeliveryCost.classList.remove("none");
		}
	});
}
