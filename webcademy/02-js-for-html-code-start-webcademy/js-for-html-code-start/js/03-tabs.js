// План действий:
// Найти все элементы списка с переключателями. Навесить на них прослушку. Во время клика проверяем значение data-tab у элмемента по которому произошло событие,-> скрываем все элмементы, затем показываем блок с соответсвующим id

// Находим все элементы списка с переключателями. Будем искать по атрибуту data-tab. Просто его наличие. Значение нам не важно, поэтому мы его не проверяем.
// const TabList = document.querySelectorAll("[data-tab]");
// console.log(TabList); //Проверка
// Тип атрибутов data-...- это особый тип атрибутов. Мы сами его создаем для своих целей. Он обязательно должен начинаться с "data-" при этом дальше мы можем писать что угодно.

// Находим все элементы с блоками текста, которые нужно показывать. Будем искать по атрибуту data-tab-content. Просто его наличие. Значение нам не важно, поэтому мы его не проверяем.
// const contentList = document.querySelectorAll("[data-tab-content]");

// Теперь навесим прослушку на каждый элемент. Для этого обойдем коллекцию при помощи forEach
// TabList.forEach(function (item) {
// 	item.addEventListener("click", showHideText);
// });

// function showHideText() {
// console.log("message"); //Проверка
// 	console.log(this); //По клику вывалится элемент по которому мы кликнули
// 	console.log(this.dataset.tab); ////По клику вывалится значение определенного атрибута data-. В данном случае с атрибутом data-tab. ///Свойство .dataset. - возвращает значение data-атрибутов, после точки нужно обратиться к конкретному data-атрибуту, при этом не писать data-. Т.к. и так подразумевается что мы обращамеся к data-атрибуту.

// Скрываем все блоки текста по клику
// contentList.forEach(function (item) {
// 	item.classList.add("hidden");
// });

// Показываем нужный блок.

// Находим блок который нужно вывести. Для этого создаем необходимый селектор, используя конкатенацию. На выходе мы получим ID, важно помнить что в верстке у нас id каждого блока с контентом такой же как значение data-tab у соответсвующего заголовка.
// const contentBox = document.querySelector("#" + this.dataset.tab);

// Выводим блок
// 	console.log(contentBox); //Проверка
// 	contentBox.classList.remove("hidden");
// }

// Весь код сразу

const TabList = document.querySelectorAll("[data-tab]");

const contentList = document.querySelectorAll("[data-tab-content]");

TabList.forEach(function (item) {
	item.addEventListener("click", showHideText);
});

function showHideText() {
	contentList.forEach(function (item) {
		item.classList.add("hidden");
	});
	const contentBox = document.querySelector("#" + this.dataset.tab);
	contentBox.classList.remove("hidden");
}
