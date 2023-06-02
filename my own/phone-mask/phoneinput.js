// document.addEventListener("DOMContentLoaded", function () {
//     var phoneInputs = document.querySelectorAll('input[data-tel-input]');

//     var getInputNumbersValue = function (input) {
//         // Return stripped input value — just numbers
//         return input.value.replace(/\D/g, '');
//     }

//     var onPhonePaste = function (e) {
//         var input = e.target,
//             inputNumbersValue = getInputNumbersValue(input);
//         var pasted = e.clipboardData || window.clipboardData;
//         if (pasted) {
//             var pastedText = pasted.getData('Text');
//             if (/\D/g.test(pastedText)) {
//                 // Attempt to paste non-numeric symbol — remove all non-numeric symbols,
//                 // formatting will be in onPhoneInput handler
//                 input.value = inputNumbersValue;
//                 return;
//             }
//         }
//     }

//     var onPhoneInput = function (e) {
//         var input = e.target,
//             inputNumbersValue = getInputNumbersValue(input),
//             selectionStart = input.selectionStart,
//             formattedInputValue = "";

//         if (!inputNumbersValue) {
//             return input.value = "";
//         }

//         if (input.value.length != selectionStart) {
//             // Editing in the middle of input, not last symbol
//             if (e.data && /\D/g.test(e.data)) {
//                 // Attempt to input non-numeric symbol
//                 input.value = inputNumbersValue;
//             }
//             return;
//         }

//         if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
//             if (inputNumbersValue[0] == "9") inputNumbersValue = "7" + inputNumbersValue;
//             var firstSymbols = (inputNumbersValue[0] == "8") ? "8" : "+7";
//             formattedInputValue = input.value = firstSymbols + " ";
//             if (inputNumbersValue.length > 1) {
//                 formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
//             }
//             if (inputNumbersValue.length >= 5) {
//                 formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
//             }
//             if (inputNumbersValue.length >= 8) {
//                 formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
//             }
//             if (inputNumbersValue.length >= 10) {
//                 formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
//             }
//         } else {
//             formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
//         }
//         input.value = formattedInputValue;
//     }
//     var onPhoneKeyDown = function (e) {
//         // Clear input after remove last symbol
//         var inputValue = e.target.value.replace(/\D/g, '');
//         if (e.keyCode == 8 && inputValue.length == 1) {
//             e.target.value = "";
//         }
//     }
//     for (var phoneInput of phoneInputs) {
//         phoneInput.addEventListener('keydown', onPhoneKeyDown);
//         phoneInput.addEventListener('input', onPhoneInput, false);
//         phoneInput.addEventListener('paste', onPhonePaste, false);
//     }
// })

// Пишем сами

//1- Событие DOMContentLoaded – DOM готов, так что обработчик может искать DOM-узлы и инициализировать интерфейс.
// Проще говоря маякует, что все DOM-элементы прогрузились и можно приступать к манипуляциям с ними. На это событие не влияют внешние ресурсы, такие, как картинки и стили, а также async функции
document.addEventListener("DOMContentLoaded", function () {
	//2- Искать формы ввода будем по атрибуту data-tel-input
	const phoneInputs = document.querySelectorAll("[data-tel-input]");
	// console.log(phoneInputs);
	//5 Создаем функцию, которая принимает введенное значение, а возвращает только числа (т.е. вырезаем из написанного все символы кроме цифр)(\D - обозначает все символы кроме цифр, флаг g - поиск происходит по всем совпадениям)
	let getInputNumbersValue = function (input) {
		return input.value.replace(/\D/g, "");
	};

	//4 Описываем функцию обработчик инпута для телефона
	const phoneInputHandler = function (e) {
		//6 Получаем введенное значение
		//6 Записываем в переменную цель (куда был введен номер телефона) (мы находим эти данные у объекта e , который передает нам phoneInput.addEventListener)
		let input = e.target;
		//7 Записываем значение с удаленными лишними символами в переменную inputNumbersValue
		let inputNumbersValue = getInputNumbersValue(input);
		// console.log("inputvalue", inputNumbersValue);

		// 15 Создаем переменную для хранения итогового значения, которое мы  будем выводить в поле
		let formatedPhoneNumber = "";
		//23 Делаем так чтобы можно было редактировать номер в любом месте строки и курсор при этом не улетал в конец
		// 23 Создаем переменную - положение курсора(каретки)
		let selectionStart = input.selectionStart;
		// 24 Проверяем если курсор находится не в конце строки, то выполняем проверку если введено не число-преобразуем в число и в итоге возвращаем все. т.к. сработал return то весь на обработчик phoneInputHandler дальше не отрабатывает
		if (input.value.length !== selectionStart) {
			// console.log("редактирование без форматирования",e)
			//Метод test() выполняет поиск сопоставления регулярного выражения указанной строке. Возвращает true или false.
			// 25 Проверяем если мы что-то вводим и введенное значение не цифра,
			if (e.data && /\D/g.test(e.data)) {
				// 26 То присваиваем полю ввода только введенные цифры
				input.value = inputNumbersValue;
			}
			return;
		}
		// Проверяем чтобы в форме не отображались никакие вводимые символы кроме цифр
		// input.value = inputNumbersValue;
		// 12 Делаем так чтобы при отсутствии введеных символов - поле очищалось
		if (!inputNumbersValue) {
			return (input.value = "");
		}

		//8 Если пользователь вводит номер, начиная с 7||8||9 то признаем этот номер российским
		//9 Метод indexOf ищет указанное в круглых скобках число среди значений массива, через который мы к нему обращаемся, начиная с указанного индекса (в нашем случае мы его не указываем). ( При этом в качестве искомого числа у нас выступает значение ключа с индексом 0 объекта inputNumbersValue )
		if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
			// console.log("это российский номер");
			//13 Прописываем форматирование для российского номера
			if (inputNumbersValue[0] == "9") {
				inputNumbersValue = "7" + inputNumbersValue; // Вместо 7 тут может быть любой символ, нам просто нужна заглушка, чтобы 9, которую мы вводим оказалась под индексом 1 , чтобы в substring указать одинаковые для всех параметры, с какой бы цифры пользователь не начинал вводить номер
			}
			// 14 Создадим переменную для хранения первого символа, и уловимся , если это 8, то отобразить 8, если нет - то отобразить +7.
			let firstSymbols = inputNumbersValue[0] == "8" ? "8" : "+7";
			//17 Собираем наше итоговое значение, нарезая его из введенного, добавляя форматирование по ходу внесения символов
			formatedPhoneNumber = firstSymbols + " ";
			if (inputNumbersValue.length >= 1) {
				formatedPhoneNumber += "(" + inputNumbersValue.substring(1, 4);
			}
			if (inputNumbersValue.length >= 5) {
				formatedPhoneNumber += ")" + " " + inputNumbersValue.substring(4, 7);
			}
			if (inputNumbersValue.length >= 8) {
				formatedPhoneNumber += "-" + inputNumbersValue.substring(7, 9);
			}
			if (inputNumbersValue.length >= 10) {
				formatedPhoneNumber += "-" + inputNumbersValue.substring(9, 11);
			}
			//18 На этом сама маска готова. Теперь избавимся от багов

			//10 В противном случае признаем его не российским
		} else {
			// console.log("это не российский номер");
			//11 substring - Один из методов получения подстроки ( путем обрезки начального варианта). str.substring(start , end) Возвращает часть строки между start и end (не включая) end.(где start и end - номер индекса соответсвующих символов объекта string). Дополнительно ограничим длинну вводимой строки
			formatedPhoneNumber = "+" + inputNumbersValue.substring(0, 16);
			// 16 Присваиваем нашему инпуту отформатированный номер телефона
		}
		input.value = formatedPhoneNumber;
	};
	//21 Описываем функцию очистки формы
	const clearInput = function (e) {
		//20 Ищем код нажимаемой клавиши. e.keyCode - выводит код нажатой клавиши
		// console.log(e.keyCode, e.target.value);
		// 22 Если число введенных цифр в форму =1 и нажимаем backspase, то очищам поле ввода
		if (getInputNumbersValue(e.target).length == 1 && e.keyCode == 8) {
			e.target.value = "";
		}
	};
	// 28 Пишем обработчик для события вставки
	const phoneInputPaste = function (e) {
		// 29 В pasted записываем данные из буфера обмена, оба варианта валидные
		const pasted = e.clipboardData || window.clipboardData;
		const input = e.target;
		//30 Записываем значение с удаленными лишними символами в переменную inputNumbersValue
		let inputNumbersValue = getInputNumbersValue(input);

		// 31 Получаем текст из данных в буфере обмена
		if (pasted) {
			let pastedText = pasted.getData("Text");
			// 32 Проверяем текст из буфера обмена на наличие любых символов кроме цифр и еслии такие есть, вырезаем их
			if (/\D/g.test(pastedText)) {
				input.value = inputNumbersValue;
			}
		}
	};
	// 3 Обходим каждую форму ввода и навешиваем на них наш обработчик
	phoneInputs.forEach((phoneInput) => {
		// console.log(phoneInput);
		phoneInput.addEventListener("input", phoneInputHandler);
		//19 Добавляем очистку поля ввода, когда жмем backspase, если ничего не написано (чтобы удалить +7)
		phoneInput.addEventListener("keydown", clearInput);
		// 27 Добавляем форматирование для вставляемого текста
		// 27 События: cut, copy, paste. Они относятся к классу ClipboardEvent и обеспечивают доступ к копируемым/вставляемым данным. Свойство event.clipboardData предоставляет доступ на чтение/запись в буфер обмена…
		phoneInput.addEventListener("paste", phoneInputPaste);
	});
});
