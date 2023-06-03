// Добавляем отслеживание переключения ссылок
document.addEventListener("click", handler);
function handler(e) {
	// если элемент, по которому мы кликнули - это ссылка, то вызываем ф-цию route() и передаем в нее атрибут е (event). 
	if (e.target.tagName === "A") {
		route(e);
	}
	// Чтобы браузер не пытался перейти по ссылкам, метод preventDefault() вешаем на все событие
	e.preventDefault();
}

// Опишем ф-цию роутинга, она принимает событие e от function handler, которая в свою очередь получила его от document.addEventListener
const route = (e) => {
// Обращаемся к объекту window и к его свойству history, и вызываем метод pushState

	window.history.pushState({}, "", e.target.href);
};
// Заменяем стандартный роутинг объекта window на наш собственный (кастомный)
window.route = route;
