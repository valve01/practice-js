// Функция, которая скрывает или показывает/скрывает поля доставка, корзина пуста, оформить заказ, в зависимости от того ести ли товары в корзине.
function toggleCartStatus() {
	// console.log("togge");
	const emptyCartElement = document.querySelector("[data-cart-empty]");
	const cartWrapper = document.querySelector(".cart-wrapper");
	const orderForm = document.querySelector("#order-form");
	const cartDeliveryCost = document.querySelector("[data-cart-delivery-cost]");
	// console.log(cartWrapper.children);
	if (cartWrapper.children.length > 0) {
		emptyCartElement.classList.add("none");
		orderForm.classList.remove("none");
	} else {
		emptyCartElement.classList.remove("none");
		orderForm.classList.add("none");
		cartDeliveryCost.classList.add("none");
		const totalPriceEl = document.querySelector(".total-price");
		totalPriceEl.innerText = parseInt("0");
	}
}
