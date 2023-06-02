"use strict";
// Шапка, меню, подменю
//1 Определяем что сайт открыт на мобильном устройстве
const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	Blackberry: function () {
		return navigator.userAgent.match(/Blackberry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.Blackberry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows()
		);
	},
};
//2 Мы хотим чтобы стрелочки подменю были видни только на мобильных устройствах
//3  Пишем условие, что если открыто на мобильном, то
if (isMobile.any()) {
	//4 Добавляем на body класс touch
	document.body.classList.add("touch");
	// 5 Находим все стрелочки на странице, записываем этот нод лист в menuArrows
	const menuArrows = document.querySelectorAll(".menu__arrow");
	// 6 Обходим каждую стрелочку и вешам прослушку на клик
	menuArrows.forEach((item) => {
		item.addEventListener("click", function (e) {
			// 7 По клику переключаем на родителе стрелочки класс _active
			// В css описываем поведение элементов с участием этого класса
			e.target.parentElement.classList.toggle("_active");
		});
	});
} else {
	//8 Иначе добавляем класс pc
	document.body.classList.add("pc");
}

// =====================================================================
// Сделаем чтобы меню выезжало по нажатию на бургер и бургер становился крестиком
const menuIcon = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");
const toggleMenu = function () {
	menuBody.classList.toggle("_active");
	menuIcon.classList.toggle("_active");
	document.body.classList.toggle("lock");
};

menuIcon.addEventListener("click", toggleMenu);
// ===============================================================================
// Прокрутка при клике
//1 Собираем в нодлист все элементы, которые мы хотим сделать ссылками определенные места на странице, это будут элементы с классом .menu__link, у которых есть атрибут data-goto
const menuLinks = document.querySelectorAll(".menu__link[data-goto]");
//2 Обходим каждый элемент и вешам на каждый прослушку. По клику будет выполняться функция onMenuLinkClick
menuLinks.forEach((menuLink) => {
	menuLink.addEventListener("click", onMenuLinkClick);
});

// 3 Опишем эту функцию
function onMenuLinkClick(e) {
	const menuLink = e.target;
	//4 Выполняем проверку заполненности дата атрибута goto и проверку наличия элемента, на который мы хотим перейти
	if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
		//5 Получаем элемент, на который хотим перейти
		const gotoElement = document.querySelector(menuLink.dataset.goto);
		//6 Высчитываем положение объекта
		//7 getBoundingClientRect().top - возвращает расстояние в пикселях от верхнего края элемента до края документа, scrollY -возвращает прокрученных по оси Y пикселей, .offsetHeight -возвращает высоту элемента в пикселях (мы вычитаем высоту шапки (header))
		const gotoElementValue =
			gotoElement.getBoundingClientRect().top +
			scrollY -
			document.querySelector("header").offsetHeight;

		if (menuIcon.classList.contains("_active")) {
			menuBody.classList.remove("_active");
			menuIcon.classList.remove("_active");
			document.body.classList.remove("lock");
		}

		// 8  метод scrollTo, глобального объекта window скролит страницу на указанное значение пикселей
		// scrollTo(x-coord, y-coord)
		// scrollTo(options)

		// window.scrollTo(0,gotoElementValue) // Пример

		// Параметры
		// x-coordэто пиксель вдоль горизонтальной оси документа, который вы хотите отобразить в левом верхнем углу.
		// y-coordэто пиксель вдоль вертикальной оси документа, который вы хотите отобразить в левом верхнем углу.
		// - или -

		// options
		// Словарь, содержащий следующие параметры:

		// top
		// Указывает количество пикселей по оси Y для прокрутки окна или элемента.

		// left
		// Задает количество пикселей по оси X для прокрутки окна или элемента.

		// behavior
		// Определяет, является ли прокрутка мгновенной или плавной. Эта опция представляет собой строку, которая должна принимать одно из следующих значений:

		// smooth: прокрутка должна плавно анимироваться
		// instant: прокрутка должна происходить мгновенно одним прыжком
		// auto: поведение прокрутки определяется вычисленным значением scroll-behavior
		// 9 Но мы пойдем дальше и кроме координаты зададим еще и плавное поведение
		window.scrollTo({
			top: gotoElementValue,
			behavior: "smooth",
		});
	}
	//10 Не даем возможности ссылке работать по назначению и переходить по href
	// Метод preventDefault()интерфейса Event сообщает пользовательскому агенту , что если событие не обрабатывается явно, его действие по умолчанию не должно выполняться, как обычно.
	e.preventDefault();
}
