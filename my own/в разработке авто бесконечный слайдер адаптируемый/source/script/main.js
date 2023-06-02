// // =============Простой слайдер на кнопках адаптируемый======================
// // Весь код
// const mainSliderImages = document.querySelectorAll(".slider-item");
// const sliderLine = document.querySelector(".gritting-slider-line");
// const slider = document.querySelector(".gritting-slider");
// const nextSlideBtn = document.querySelector(".next");
// const prevSlideBtn = document.querySelector(".prev");
// let activeSlideNumber = 0;
// let sliderWidth;
// function initialization() {
// 	sliderWidth = slider.offsetWidth;
// 	sliderLine.style.width = sliderWidth * mainSliderImages.length + "px";
// 	mainSliderImages.forEach((image) => {
// 		image.style.width = sliderWidth + "px";
// 		image.style.heigth = "auto";
// 		rollSlider();
// 	});
// }
// function rollSlider() {
// 	sliderLine.style.transform =
// 		"translate(-" + activeSlideNumber * sliderWidth + "px)";
// }
// window.addEventListener("resize", initialization);
// function turnPrevSlider() {
// 	prevSlideBtn.addEventListener("click", () => {
// 		activeSlideNumber--;
// 		if (activeSlideNumber < 0) {
// 			activeSlideNumber = mainSliderImages.length - 1;
// 		}
// 		rollSlider();
// 	});
// }
// function turnNextSlider() {
// 	nextSlideBtn.addEventListener("click", () => {
// 		activeSlideNumber++;
// 		if (activeSlideNumber >= mainSliderImages.length) {
// 			activeSlideNumber = 0;
// 		}
// 		rollSlider();
// 	});
// }
// initialization();
// turnNextSlider();
// turnPrevSlider();
// ========================================================================

// ==============================Код с комментами адаптируемый небесконечный============================
//
// //1 Находим все нужные нам html элементы
// //Коллекция слайдов
// const mainSliderImages = document.querySelectorAll(".gritting-slider-line img");
// // Обертка для склееных слайдов (портянка)
// const sliderLine = document.querySelector(".gritting-slider-line");
// // Сам слайдер
// const slider = document.querySelector(".gritting-slider");
// //  Кнопка next
// const nextSlideBtn = document.querySelector(".next");
// // Кнопка prev
// const prevSlideBtn = document.querySelector(".prev");
// // 2 Объявляем вспомогательные переменные
// // Индекс активного слайда
// let activeSlideNumber = 0;
// // Текущая ширина слайдера
// let sliderWidth;

// // 3 Пишем функцию, которя будет адаптировать размер слайдов под размер слайдера при изменении размеров окна браузера
// function initialization() {
// 	sliderWidth = slider.offsetWidth;
// 	sliderLine.style.width = sliderWidth * mainSliderImages.length + "px";
// 	mainSliderImages.forEach((image) => {
// 		image.style.width = sliderWidth + "px";
// 		image.style.heigth = "auto";
// 		rollSlider();
// 	});
// }
// // 4 Пишем функцию, которая будет прокручивать портянку слайдов
// function rollSlider() {
// 	// 4.1 Обращаемся к Обертке для склееных слайдов, к её css свойству transform и присваиваем ему значение
// 	sliderLine.style.transform =
// 		// 4.2 Смещение по оси х в обратном направлении (влево) на количество пикселей равное произведению индекса активного слайда и текущей ширины слайдера. Причем отсчет ведется от начала координат обертки для склееных слайдов,а анимация прокрутки (если она задана в css) при этом начинается от предыдущего слайда, а не от начала координат.
// 		"translate(-" + activeSlideNumber * sliderWidth + "px)";
// }
// // 5 Вешаем прослушку на изменение размеров окна и запускаем функцию для адаптации размера слайдов, при срабатывании события
// window.addEventListener("resize", initialization);

// // 6 Пишем функцию прокрутки при клике на кнопку предыдущий
// function turnPrevSlider() {
// 	prevSlideBtn.addEventListener("click", () => {
// 		// 6.1 Уменьшаем индекс активного слайда на 1
// 		activeSlideNumber--;
// 		// 6.2 Делаем проверку, если мы были на начальном слайде и щекаем предыдущий-то
// 		if (activeSlideNumber < 0) {
// 			// 6.3 Присваиваем индексу активного слайда-значение последнего слайда в списке (и тогда слайдер прокрутится в самый конец, если мы запустим прокрутку)
// 			activeSlideNumber = mainSliderImages.length - 1;
// 		}
// 		// 6.4 Запускаем прокрутку с новым значением индекса активного слайда
// 		rollSlider();
// 	});
// }
// // 7 Пишем функцию прокрутки при клике на кнопку следующий
// function turnNextSlider() {
// 	nextSlideBtn.addEventListener("click", () => {
// 		// 7.1 Увеличиваем индекс активного слайда
// 		activeSlideNumber++;
// 		// 7.2 Проверка если индекс активного слайда больше или равен длинне коллекции слайдов (помним что индексы слайдов начинаются с 0, а длинна массива с 1) (т.е. если мы докрутили до следующего за последним слайдом(которого нет), то присваиваем индексу активного слайда значение первого слайда,(и тогда слайдер прокрутится в самое начало, если мы запустим прокрутку))
// 		if (activeSlideNumber >= mainSliderImages.length) {
// 			activeSlideNumber = 0;
// 		}
// 		// 7.3 Запускаем прокрутку с новым значением индекса активного слайда
// 		rollSlider();
// 	});
// }
// // 8 Запускаем все нужные ф-ции
// initialization();
// turnNextSlider();
// turnPrevSlider();

// =========================МОЙ КОД==============================
const gritSlider = document.querySelector(".gritting-slider");
// Коллекция слайдов
const mainSliderImages = document.querySelectorAll(".slider-item");
// Сюда мы будет вставлять вновь создаваемые слайды
const sliderLine = document.querySelector(".gritting-slider-line");
// Отсюда будем брать текущую ширину слайдера
const slider = document.querySelector(".gritting-slider-line-wrapper");
// Индекс текущего слайда
let activeSlideNumber = 0;
// Текущая ширина слайдера
let sliderWidth;
// Текущая высота слайдера
let sliderHeight;
// 2 Объявляем переменную и присваиваем ей массив, это будет массив url адресов наших слайдов
let sliderArray = [];

// 3 Обходим коллекцию слайдов
mainSliderImages.forEach((image, i) => {
	// 4 И каждому элементу массива, начиная с элемента с индексом 0, присваиваем url адрес слайда в порядке соответстующем расположению в html
	sliderArray[i] = image.src;
	// 5 А также удаляем каждую картинку из разметки
	image.remove();
});
//6 Задаем высоту слайдеру ту же что была до удаления картинов из разметки, чтобы он не схлопывался

// 	// 6 Объявляем вспомогательные переменные

// 	// Вспомогательная переменная offset
let offset;

initialization();
// 	//7 Пишем функцию, которая будет отрисовывать слайды на странице
function render() {
	for (let i = 0; i < 2; i++) {
		offset = i;

		// 		// Определяем текущую ширину слайдера и записываем ее в sliderWidth
		sliderWidth = slider.offsetWidth;
		// 		// Создаем новый html элемент img и записываем его в переменную img
		let img = document.createElement("img");
		// 		// Добавляем вновь созданному элементу класс slider-item
		img.classList.add("slider-item");
		// 		// Присваиваем вновь созданному элементу значение src из массива sliderArray (сначала будет присвоен адрес элемента массива с индексом 0, ведь мы же объявили activeSlideNumber = 0)
		img.src = sliderArray[activeSlideNumber];
		// 		// Задаем слайду ширину, равную ширине слайдера
		img.style.width = sliderWidth + "px";
		img.style.left = sliderWidth * offset + "px";
		img.style.height = "auto";
		// 		// Задаем слайду смещение от левого края на расстояние равное произведению ширины слайдера и вспомогательной переменной offset (которая объявлена перед функцией и ей присвоено offset = 0. Таким образом смещение первого слайда будет 0)

		// console.log(sliderWidth);
		// 		// Добавляем вновь созданный элемент на страницу дочерним элементом слайдера (в конец html элемента с классом gritting-slider-line-wrapper)
		sliderLine.appendChild(img);
		// console.log(mainSliderImages);
		sliderHeight = img.offsetHeight;
		slider.style.height = sliderHeight + "px";
		// Пишем проверку, если при увеличении индекса массива, он становится равным длинне коллекции (это значит что мы начнем ссылаться на несуществующий элемент массива)
		if (activeSlideNumber + 1 == mainSliderImages.length) {
			// Тогда мы присваиваем переменной значение 0, которое соответсвует первому слайду в массиве
			activeSlideNumber = 0;
			// Иначе увеличиваем значение индекса на 1 (чтобы отрендерить при следующем запуске функции следующий слайд)
		} else {
			activeSlideNumber++;
		}
		// В конце итерации присваиваем вспомогательной переменной значение 1 чтобы смещение второго слайда было (sliderWidth*1+"px")

		//8 Теперь запустив функцию один раз у нас отрендерится первый слайд, запустив второй раз, у нас отрендериться ещё и второй слайд справа от первого, запустив третий раз, отрендериться первый слайд, второй, а третий наложится на втрой и перекроет его (справа от не отобразится, т.к. для этого требуется offset = 2)
	}
}

// render();

// Теперь пишем функцию, которая будет адаптировать размеры слайдера при изменении размеров окна браузер

function initialization() {
	let SliderOfTwoImages = document.querySelectorAll(".slider-item");
	SliderOfTwoImages.forEach((image) => {
		image.remove();
	});

	render();
	// rollSlider();
	// nextSlide()
}

function renderNew() {
	offset = 1;

	// 		// Определяем текущую ширину слайдера и записываем ее в sliderWidth
	sliderWidth = slider.offsetWidth;
	// 		// Создаем новый html элемент img и записываем его в переменную img
	let img = document.createElement("img");
	// 		// Добавляем вновь созданному элементу класс slider-item
	img.classList.add("slider-item");
	// 		// Присваиваем вновь созданному элементу значение src из массива sliderArray (сначала будет присвоен адрес элемента массива с индексом 0, ведь мы же объявили activeSlideNumber = 0)
	img.src = sliderArray[activeSlideNumber];
	// 		// Задаем слайду ширину, равную ширине слайдера
	img.style.width = sliderWidth + "px";
	img.style.left = sliderWidth * offset + "px";
	img.style.height = "auto";
	// 		// Задаем слайду смещение от левого края на расстояние равное произведению ширины слайдера и вспомогательной переменной offset (которая объявлена перед функцией и ей присвоено offset = 0. Таким образом смещение первого слайда будет 0)

	// console.log(sliderWidth);
	// 		// Добавляем вновь созданный элемент на страницу дочерним элементом слайдера (в конец html элемента с классом gritting-slider-line-wrapper)
	sliderLine.appendChild(img);
	// console.log(mainSliderImages);
	sliderHeight = img.offsetHeight;
	slider.style.height = sliderHeight + "px";
	// Пишем проверку, если при увеличении индекса массива, он становится равным длинне коллекции (это значит что мы начнем ссылаться на несуществующий элемент массива)
	if (activeSlideNumber + 1 == mainSliderImages.length) {
		// Тогда мы присваиваем переменной значение 0, которое соответсвует первому слайду в массиве
		activeSlideNumber = 0;
		// Иначе увеличиваем значение индекса на 1 (чтобы отрендерить при следующем запуске функции следующий слайд)
	} else {
		activeSlideNumber++;
	}
	// В конце итерации присваиваем вспомогательной переменной значение 1 чтобы смещение второго слайда было (sliderWidth*1+"px")

	//8 Теперь запустив функцию один раз у нас отрендерится первый слайд, запустив второй раз, у нас отрендериться ещё и второй слайд справа от первого, запустив третий раз, отрендериться первый слайд, второй, а третий наложится на втрой и перекроет его (справа от не отобразится, т.к. для этого требуется offset = 2)
}

window.onresize = initialization;

function rollSlider() {
	sliderLine.style.transform = "translate(-" + sliderWidth + "px)";
}

function nextSlide() {
	rollSlider();
	let sliderTwoImages = document.querySelectorAll(".slider-item");
	setTimeout(function () {
		sliderTwoImages[0].remove();
		// sliderTwoImages[1].remove();
		render();
	}, 1000);
}

setInterval(nextSlide,5000)