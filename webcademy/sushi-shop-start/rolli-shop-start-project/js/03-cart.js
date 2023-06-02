// Тут код из прошлого урока, но мы добавим удаление товара из корзины, если мы сбрасывам счетчик товара в корзине на 0. 

// Находим на странице обертку карточек товаров положенных в корзину. В нее мы будем вносить все положенные в корзину товары
const cartWrapper = document.querySelector(".cart-wrapper");

window.addEventListener("click", function (event) {
	if (event.target.hasAttribute("data-cart")) {
		// console.log("в корзину")// Проверка
		// Теперь ищем карточку с товаром в котором произошел клик. Т.е. ближайшего родителя с классом .card.
		const targetCard = event.target.closest(".card");
		// console.log(targetCard)// Проверка
		// Собираем все нужные данные с этой карточки и записываем их в объект productInfo
		const productInfo = {
			id: targetCard.dataset.id,
			imgSrc: targetCard.querySelector(".product-img").getAttribute("src"),
			title: targetCard.querySelector(".item-title").innerText,
			itemInBox: targetCard.querySelector("[data-items-in-box]").innerText,
			weight: targetCard.querySelector(".price__weight").innerText,
			priсe: targetCard.querySelector(".price__currency").innerText,
			quantity: targetCard.querySelector("[data-counter]").innerText,
		};
		// console.log(productInfo); //Проверка
		// Мы собрали все данные товара в объект,теперь мы можем проверить есть ли уже добавляемый товар в корзине. И если нет, то добавляем карточку с этим товаром в корзину, если есть-меняем значение счетчика. Проверять будем по id и искать этот id в cartWrapper
		// Получаем id
		const idInCart = productInfo.id;
		// console.log(idInCart)//Проверка
		// Теперь проверяем есть ли этот уже этот id в корзине (т.е. в cartWrapper)
		const goodsInCart = cartWrapper.querySelector(`[data-id="${idInCart}"]`);
		if (goodsInCart) {
			// console.log('message')
		// Находим на странице счетчик положенного в корзину товара
			const cartCounter = goodsInCart.querySelector("[data-counter]");
		// Присваиваем значение счетчику его прошлое значение + значение счетчика из основной карточки товара. Не забываем использовать parseInt, потому что изначально свойство innerText возвращает строку.
			cartCounter.innerText=parseInt(productInfo.quantity) + parseInt(cartCounter.innerText);
		} else {
			// Создаем шаблонную строку с карточкой товара для корзины. И туда мы будем подставлять значения элементов из объекта productInfo, обращаясь к ним.

			const cartItemHtml = `
<!-- Cart item -->
<div class="cart-item" data-id=${productInfo.id}>
	<div class="cart-item__top">
		<div class="cart-item__img">
			<img src=${productInfo.imgSrc} alt="${productInfo.title}">
		</div>
		<div class="cart-item__desc">
			<div class="cart-item__title">${productInfo.title}</div>
			<div class="cart-item__weight">${productInfo.itemInBox} / ${productInfo.weight}</div>

			<!-- cart-item__details -->
			<div class="cart-item__details">

				<div class="items items--small counter-wrapper">
					<div class="items__control" data-action="minus">-</div>
					<div class="items__current" data-counter="">${productInfo.quantity}</div>
					<div class="items__control" data-action="plus">+</div>
				</div>

				<div class="price">
					<div class="price__currency">${productInfo.priсe}</div>
				</div>

			</div>
			<!-- // cart-item__details -->

		</div>
	</div>
</div>`;
			// Теперь прикажем добавлять нашу шаблонную строку в обертку для товаров корзины, каждый раз, когда будем кликать на кнопку "Добавить в корзину". Соответственно в корзину будет добавляться очередной товар в конец обертки.
			cartWrapper.insertAdjacentHTML("beforeend", cartItemHtml);
		}
		// Добавим сбрасывание счетчика в основной карточке товара, который мы добавили
		targetCard.querySelector('[data-counter]').innerText="1";

		// Переключение статуса корзины полная /пустая, поля оформить заказ, поля доставка
		toggleCartStatus()

		// Пересчет общей стоимости товаров в корзине и стоимости доставки
		calcCartPriceAndDelivery()
	}
});