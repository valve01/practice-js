// // =============Простой слайдер на кнопках ======================
// // Весь код
// {
// 	const mainSliderImages = document.querySelectorAll(".gritting-slider-line img");
// 	const sliderLine = document.querySelector(".gritting-slider-line");
// 	const slider = document.querySelector(".gritting-slider");
// 	const nextSlideBtn = document.querySelector(".next");
// 	const prevSlideBtn = document.querySelector(".prev");
// 	let activeSlideNumber = 0;
// 	let sliderWidth;

// 	function resizeSlider() {
// 		sliderWidth = slider.offsetWidth;
// 		sliderLine.style.width = sliderWidth * mainSliderImages.length + "px";
// 		mainSliderImages.forEach((image) => {
// 			image.style.width = sliderWidth + "px";
// 			image.style.heigth = "auto";
// 			rollSlider();
// 		});
// 	}

// 	function rollSlider() {
// 		sliderLine.style.transform =
// 			"translate(-" + activeSlideNumber * sliderWidth + "px)";
// 	}

// 	window.addEventListener("resize", resizeSlider);
// 	resizeSlider();

// 	function turnPrevSlider() {
// 		prevSlideBtn.addEventListener("click", () => {
// 			activeSlideNumber--;
// 			if (activeSlideNumber < 0) {
// 				activeSlideNumber = mainSliderImages.length - 1;
// 			}
// 			rollSlider();
// 		});
// 	}

// 	function turnNextSlider() {
// 		nextSlideBtn.addEventListener("click", () => {
// 			activeSlideNumber++;
// 			if (activeSlideNumber >= mainSliderImages.length) {
// 				activeSlideNumber = 0;
// 			}
// 			rollSlider();
// 		});
// 	}

// 	turnNextSlider();
// 	turnPrevSlider();
// }
// ========================================================================

// ==============================Код с комментами============================

//1 Находим все нужные нам html элементы
//Коллекция слайдов
const mainSliderImages = document.querySelectorAll(".gritting-slider-line img");
// Обертка для склееных слайдов (портянка)
const sliderLine = document.querySelector(".gritting-slider-line");
// Сам слайдер
const slider = document.querySelector(".gritting-slider");
//  Кнопка next
const nextSlideBtn = document.querySelector(".next");
// Кнопка prev
const prevSlideBtn = document.querySelector(".prev");
// 2 Объявляем вспомогательные переменные
// Индекс активного слайда
let activeSlideNumber = 0;
// Текущая ширина слайдера
let sliderWidth;

// 3 Пишем функцию, которя будет адаптировать размер слайдов под размер слайдера при изменении размеров окна браузера
function initialization() {
	sliderWidth = slider.offsetWidth;
	sliderLine.style.width = sliderWidth * mainSliderImages.length + "px";
	mainSliderImages.forEach((image) => {
		image.style.width = sliderWidth + "px";
		image.style.heigth = "auto";
		rollSlider();
	});
}
// 4 Пишем функцию, которая будет прокручивать портянку слайдов
function rollSlider() {
	// 4.1 Обращаемся к Обертке для склееных слайдов, к её css свойству transform и присваиваем ему значение
	sliderLine.style.transform =
		// 4.2 Смещение по оси х в обратном направлении (влево) на количество пикселей равное произведению индекса активного слайда и текущей ширины слайдера. Причем отсчет ведется от начала координат обертки для склееных слайдов,а анимация прокрутки (если она задана в css) при этом начинается от предыдущего слайда, а не от начала координат.
		"translate(-" + activeSlideNumber * sliderWidth + "px)";
}
// 5 Вешаем прослушку на изменение размеров окна и запускаем функцию для адаптации размера слайдов, при срабатывании события
window.addEventListener("resize", initialization);

// 6 Пишем функцию прокрутки при клике на кнопку предыдущий
function turnPrevSlider() {
	prevSlideBtn.addEventListener("click", () => {
		// 6.1 Уменьшаем индекс активного слайда на 1
		activeSlideNumber--;
		// 6.2 Делаем проверку, если мы были на начальном слайде и щекаем предыдущий-то
		if (activeSlideNumber < 0) {
			// 6.3 Присваиваем индексу активного слайда-значение последнего слайда в списке (и тогда слайдер прокрутится в самый конец, если мы запустим прокрутку)
			activeSlideNumber = mainSliderImages.length - 1;
		}
		// 6.4 Запускаем прокрутку с новым значением индекса активного слайда
		rollSlider();
	});
}
// 7 Пишем функцию прокрутки при клике на кнопку следующий
function turnNextSlider() {
	nextSlideBtn.addEventListener("click", () => {
		// 7.1 Увеличиваем индекс активного слайда
		activeSlideNumber++;
		// 7.2 Проверка если индекс активного слайда больше или равен длинне коллекции слайдов (помним что индексы слайдов начинаются с 0, а длинна массива с 1) (т.е. если мы докрутили до следующего за последним слайдом(которого нет), то присваиваем индексу активного слайда значение первого слайда,(и тогда слайдер прокрутится в самое начало, если мы запустим прокрутку))
		if (activeSlideNumber >= mainSliderImages.length) {
			activeSlideNumber = 0;
		}
		// 7.3 Запускаем прокрутку с новым значением индекса активного слайда
		rollSlider();
	});
}
// 8 Запускаем все нужные ф-ции
initialization();
turnNextSlider();
turnPrevSlider();
