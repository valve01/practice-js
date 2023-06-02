// Вешаем прослушку на все окно и проверяем был ли клик осуществлен по кнопке добавить в корзину. dataset - меняет или возвращает значение data атрибута, а нам нужно проверить налиличе самого атрибута, тут нужно использовать метод hasAttribute. Этот метод подразумевает передачу атрибута, поэтому квадратные [] скобки писать не нужно.

// Находим на странице обертку карточек товаров положенных в корзину. В нее мы будем вносить все положенные в корзину товары
// const cartWrapper= document.querySelector('.cart-wrapper')

// window.addEventListener("click",function(event){
// 	if (event.target.hasAttribute("data-cart")){
// 		// console.log("в корзину")// Проверка
// 		// Теперь ищем карточку с товаром в котором произошел клик. Т.е. ближайшего родителя с классом .card.
// 	const targetCard=	event.target.closest(".card")
// 	// console.log(targetCard)// Проверка
// 	// Собираем все нужные данные с этой карточки и записываем их в объект productInfo
// 	const productInfo = {
// id:targetCard.dataset.id,
// imgSrc: targetCard.querySelector('.product-img').getAttribute("src"),
// title: targetCard.querySelector('.item-title').innerText,
// itemInBox: targetCard.querySelector('[data-items-in-box]').innerText,
// weight: targetCard.querySelector('.price__weight').innerText,
// priсe:targetCard.querySelector(".price__currency").innerText,
// quantity: targetCard.querySelector("[data-counter]").innerText
// 	}
// 	console.log(productInfo)//Проверка

// 	// Создаем шаблонную строку с карточкой товара для корзины. И туда мы будем подставлять значения элементов из объекта productInfo, обращаясь к ним.

// 	const cartItemHtml=`
// 	<!-- Cart item -->
// 	<div class="cart-item" data-id=${productInfo.id}>
// 		<div class="cart-item__top">
// 			<div class="cart-item__img">
// 				<img src=${productInfo.imgSrc} alt="${productInfo.title}">
// 			</div>
// 			<div class="cart-item__desc">
// 				<div class="cart-item__title">${productInfo.title}</div>
// 				<div class="cart-item__weight">${productInfo.itemInBox} / ${productInfo.weight}</div>

// 				<!-- cart-item__details -->
// 				<div class="cart-item__details">

// 					<div class="items items--small counter-wrapper">
// 						<div class="items__control" data-action="minus">-</div>
// 						<div class="items__current" data-counter="">${productInfo.quantity}</div>
// 						<div class="items__control" data-action="plus">+</div>
// 					</div>

// 					<div class="price">
// 						<div class="price__currency">${productInfo.priсe}</div>
// 					</div>

// 				</div>
// 				<!-- // cart-item__details -->

// 			</div>
// 		</div>
// 	</div>`;
// 	// Теперь прикажем добавлять нашу шаблонную строку в обертку для товаров корзины, каждый раз, когда будем кликать на кнопку "Добавить в корзину". Соответственно в корзину будет добавляться очередной товар.
// cartWrapper.insertAdjacentHTML('beforeend',cartItemHtml)
// 	}
// })

// Весь код

const cartWrapper = document.querySelector(".cart-wrapper");

window.addEventListener("click", function (event) {
	if (event.target.hasAttribute("data-cart")) {
		const targetCard = event.target.closest(".card");

		const productInfo = {
			id: targetCard.dataset.id,
			imgSrc: targetCard.querySelector(".product-img").getAttribute("src"),
			title: targetCard.querySelector(".item-title").innerText,
			itemInBox: targetCard.querySelector("[data-items-in-box]").innerText,
			weight: targetCard.querySelector(".price__weight").innerText,
			priсe: targetCard.querySelector(".price__currency").innerText,
			quantity: targetCard.querySelector("[data-counter]").innerText,
		};

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

		cartWrapper.insertAdjacentHTML("beforeend", cartItemHtml);
	}
});
