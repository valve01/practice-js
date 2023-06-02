// // Функция, которая отображает товары на странице, получая их из json файла.
// // Этот файла нужно подключить самым первым среди js файлов, т.к. если товары не будут отображены их не будет и в разметке, значит мы не сможем с ними взаимодействовать.
// // План такой: Получаем данные товаров из .json, добавляем обертке для товаров id=products-container, удаляем из разметки все карточки товаров, кроме одной. ее мы будем использовать в качестве шаблона, а потом ее тоже удалим.   берем кусок разметки для карточки товара и через интерполяцию и шаблонные строки записываем товары в этот шаблон. Затем отобразить товары в div с id=products-container.

// const productsContainer = document.querySelector("#products-container");

// getProducts();

// // Мы считаем, что json файл хранится на сервере, и чтобы все работало корректно, нужно делать запрос на сервер и продолжать, только после получения ответа от сервера, для этого нужно использовать асинхронную функцию.

// // Опишем функцию для получения продуктов с сервера
// async function getProducts() {
// 	// Для этого используем команду fetch в ней нужно указать путь до json файла. Также нам нужно дождаться пока данные будут получены , поэтому не забываем дописать await.
// 	const response = await fetch("./js/05-products.json");
// 	// Ответ получен. Теперь чтобы извлечь из ответа необходимые данные нужно использовать подходящие методы, для разных данных они разные и нужно знать какой тип данных мы хотим извлечь.( типы данных: файл, текст, json и др.). Нам нужны данные в json формате поэтому используем метод .json . Этот метод заодно сразу сконвертирует данные в js формат.( в массив с объектами внутри). Тут мы тоже используем await и не только для того чтобы дождаться ответа, но еще и потому что await передает результаты работы .json для дальнейшей работы с этим результатом. Запишем полученный массив в productsArray.
// 	// console.log(response)
// 	const productsArray = await response.json();
// 	// console.log(productsArray)
// 	// Мы вызываем функцию renderProducts и передаем в нее массив с продуктами productsArray
// 	renderProducts(productsArray);
// }

// // Функция для отображения товаров на странице. Она делает следующее. Получает массив productsArray и для каждого элемента массива генерирует разметку из константы productHTML, подставляя значения свойств объекта через интерполяцию и затем отображат сгенерированную разметку в конце обертки для товаров (div с id products-container) . Причем эту функцию мы вызываем внутри getProducts, дожидаясь ответа от сервера, чтобы получить нужные данные.
// function renderProducts(productsArray) {
// 	productsArray.forEach(function (item) {
// 		// Создаем константу для разметки под продукты
// 		const productHTML = `<div class="col-md-6">
// 	<div class="card mb-4" data-id="${item.id}">
// 		<img class="product-img" src="./img/roll/${item.imgSrc}" alt="" />
// 		<div class="card-body text-center">
// 			<h4 class="item-title">${item.title}</h4>
// 			<p><small data-items-in-box class="text-muted">${item.itemsInBox} шт</small></p>

// 			<div class="details-wrapper">
// 				<div class="items counter-wrapper">
// 					<div class="items__control" data-action="minus">-</div>
// 					<div class="items__current" data-counter>1</div>
// 					<div class="items__control" data-action="plus">+</div>
// 				</div>

// 				<div class="price">
// 					<div class="price__weight">${item.weight}г.</div>
// 					<div class="price__currency">${item.price} ₽</div>
// 				</div>
// 			</div>

// 			<button data-cart="type" ="button" class="btn btn-block btn-outline-warning">
// 				+ в корзину
// 			</button>
// 		</div>
// 	</div>
// </div>`;
// 		productsContainer.insertAdjacentHTML("beforeend", productHTML);
// 	});
// }

// Весь код сразу

const productsContainer = document.querySelector("#products-container");
getProducts();
async function getProducts() {
	const response = await fetch("./js/05-products.json");
	const productsArray = await response.json();
	renderProducts(productsArray);
}
function renderProducts(productsArray) {
	productsArray.forEach(function (item) {
		const productHTML = `<div class="col-md-6">
	<div class="card mb-4" data-id="${item.id}">
		<img class="product-img" src="./img/roll/${item.imgSrc}" alt="" />
		<div class="card-body text-center">
			<h4 class="item-title">${item.title}</h4>
			<p><small data-items-in-box class="text-muted">${item.itemsInBox} шт</small></p>
			<div class="details-wrapper">
				<div class="items counter-wrapper">
					<div class="items__control" data-action="minus">-</div>
					<div class="items__current" data-counter>1</div>
					<div class="items__control" data-action="plus">+</div>
				</div>
				<div class="price">
					<div class="price__weight">${item.weight}г.</div>
					<div class="price__currency">${item.price} ₽</div>
				</div>
			</div>
			<button data-cart="type" ="button" class="btn btn-block btn-outline-warning">
				+ в корзину
			</button>
		</div>
	</div>
</div>`;
		productsContainer.insertAdjacentHTML("beforeend", productHTML);
	});
}
