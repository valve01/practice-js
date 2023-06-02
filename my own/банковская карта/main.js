const card = {
	// cardNumberWrapper: document.querySelector('.card__middle'),
	cardNumber: document.querySelectorAll(".card__middle input"),
	holder: document.querySelector("#holder"),
	month: document.querySelector("#month"),
	year: document.querySelector("#year"),
};
// Работаем с номером карты
// Сдалаем перенос курсора к первой или последей введенной цифре, при постановке фокуса в любое место номера карты
// И сделаем автоматический перенос фокуса на следущий инпут, при вводе одной цифры в предыдущем инпуте
// 1 Создаем переменную для записи индекса последнего инпута, в который вводили значение +1
{
	let cardNumberIndex = 0;
	// 2 Обходим массив и каждому инпуту задаем функционал
	card.cardNumber.forEach((item) => {
		// 3 Слушаем устанвку фокуса в любой инпут
		item.addEventListener("focus", () => {
			// 4 Переставляем курсор: по умолчанию в начало; если введены симвлы - на первое незаполненное поле
			card.cardNumber[cardNumberIndex].focus();
		});
		// 5 Слушаем изменение значения в любом инпуте
		item.oninput = () => {
			// 6 Проверяем: если мы что-то вводим и это цифра)
			if (item.value && /\d/g.test(item.value)) {
				// 7 И текущее значение переменной для номера индекса элемента массива меньше 15 (т.е это не последний элемент) то увеличиваем значение переменной на 1, иначе - оставляем значение переменной прежней
				cardNumberIndex = cardNumberIndex < 16 ? cardNumberIndex + 1 : cardNumberIndex;
				// 4 Переставляем курсор: по умолчанию в начало; если введены симвлы - на первое незаполненное поле. Таком образом у нас курсор будет перемещатся в следующий инпут при вводе одной цифры в предыдущий
				card.cardNumber[cardNumberIndex].focus();
			} else {
				// 7 Иначе возвращаем пустую строку
				return (item.value = "");
			}
		};
		// 8 Отслеживаем событие нажатия на клавишу
		item.addEventListener("keydown", (e) => {
			// 9 И если нажатая клавиша - "Backspace",то уменьшаем значение переменной для номера индекса элемента массива на 1, если она больше 0.
			if (e.code == "Backspace") {
				// if (e.keyCode=="8") || if (e.key == "Backspace")
				cardNumberIndex = cardNumberIndex > 0 ? cardNumberIndex - 1 : cardNumberIndex; // || (cardNumberIndex--) вместо (cardNumberIndex = cardNumberIndex - 1)
				//10 Очищаем значение предыдущего инпута
				card.cardNumber[cardNumberIndex].value = "";
				// 11 И ставим фокус на инпут с которого мы только что удалили значение
				card.cardNumber[cardNumberIndex].focus();
			}
		});
	});
}
// Работаем с полем card holder
{
	//1 Создаем переменную для хранения значения, которое мы будем выводить
	let holderValue = "";
	// 2 Отслеживаем событие изменения значения свойства holder объекта card
	card.holder.oninput = () => {
		// 3 Записываем в постоянную значение нашего инпута
		const value = card.holder.value;
		if (
			//4 Проверяем регулярным выражением значение инпута, чтобы там писались только латинские буквы и пробелы (есть баг в середину можно вписать и скопировать квадратные скобки)
			/^(\b[a-zA-z]+\b)? ?(\b[a-zA-z]+\b)? ?(\b[a-zA-z]+\b)? ?(\b[a-zA-z]+\b)?$/.test(
				value
			) &&
			// 4 Дебажим
			!/[\[\]]/.test(value)
		) {
			// 5 Если проходит проверку, то отображам в инпуте введенное значение
			holderValue = value;
		} else {
			// 6 Иначе отображаем пустую строку
			card.holder.value = holderValue;
		}
	};

	// /^([a-zA-z]+)? ?([a-zA-z]+)?$/
	//  /^(\b[a-zA-z]+\b)? ?(\b[a-zA-z]+\b)?$/
}
// Работаем с датой
// Требования следующие:проверка что введены цифры, при вводе 2 цифр в месяц переводить курсор на поле год, проверка что в месяц введены цифры от 01 до 12, проверка что в год введены цифры от текущий год до +5 лет от текущего
{
	let monthValue = "";
	let yearValue = "";
	let minYear = new Date().getFullYear();
	let maxYear = minYear + 5;

	card.month.oninput = () => {
		if (card.month.value && /^\d{0,2}$/.test(card.month.value)) {
			if (card.month.value > "12") {
				card.month.value = "12";
			}
			monthValue = card.month.value;
		} else {
			card.month.value = monthValue;
		}
		if (card.month.value.length == 2) {
			card.year.focus();
		}
	};

	card.year.oninput = () => {
		if (card.year.value && /^\d{0,2}$/.test(card.year.value)) {
			if (
				Number(card.year.value) > Number(String(maxYear).substr(2, 2)) &&
				card.year.value.length == 2
			) {
				card.year.value = String(maxYear).substr(2, 2);
			}
			if (
				Number(card.year.value) < Number(String(minYear).substr(2, 2)) &&
				card.year.value.length == 2
			) {
				card.year.value = String(minYear).substr(2, 2);
			}
			yearValue = card.year.value;
		} else {
			card.year.value = yearValue;
		}
	};

	card.month.addEventListener("keydown", (e) => {
		if (card.month.value.length == 1 && e.code == "Backspace") {
			monthValue = "";
			card.month.value = monthValue;
		}
	});
	card.year.addEventListener("keydown", (e) => {
		if (card.year.value.length < 1 && e.code == "Backspace") {
			card.month.focus();
		}
	});
	card.year.addEventListener("keydown", (e) => {
		if (card.year.value.length == 1 && e.code == "Backspace") {
			yearValue = "";
			card.year.value = yearValue;
		}
	});
}
