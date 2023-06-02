// Генерируем блок для каждого месяца

// Определяем тэг внутри которого мы будем рендерить все месяцы
const monthsWrapperHtml = document.querySelector(".months-wrapper");
// Создаем массив объектов, каждый объект - отдельный месяц
const calendarKeyword = "Добр";
const ending= ["ый","ая","ое"]
const months = [
	{
		name: "Январь",
		description: `${calendarKeyword}${ending[0]}<br>Новый год`,
	},
	{
		name: "Февраль",
		description: `${calendarKeyword}${ending[0]}<br>Мороз`,
	},
	{
		name: "Март",
		description: `${calendarKeyword}${ending[1]}<br>Слякоть`,
	},
	{
		name: "Апрель",
		description: `${calendarKeyword}${ending[2]}<br>Тепло`,
	},
	{
		name: "Май",
		description: `${calendarKeyword}${ending[0]}<br>День победы`,
	},
	{
		name: "Июнь",
		description: `${calendarKeyword}${ending[0]}<br>Отпуск`,
	},
	{
		name: "Июль",
		description: `${calendarKeyword}${ending[1]}<br>Жара`,
	},
	{
		name: "Август",
		description: `${calendarKeyword}${ending[2]}<br>Море`,
	},
	{
		name: "Сентябрь",
		description: `${calendarKeyword}${ending[0]}<br>День знаний`,
	},
	{
		name: "Октябрь",
		description: `${calendarKeyword}${ending[0]}<br>Дождь`,
	},
	{
		name: "Ноябрь",
		description: `${calendarKeyword}${ending[1]}<br>Простуда`,
	},
	{
		name: "Декабрь",
		description: `${calendarKeyword}${ending[0]}<br>Снег`,
	},
];

//getDay - метод объекта Date, который возвращает индекс дня недели, где 0 - это воскресенье, 6 - суббота
// Создадим собственную фукцию с названием getDay, которая будет возвращать день недели в привычном нам формате - начало недели - с понедельника.
function getDay(date) {
	let day = date.getDay();
	// Здесь getDay это метод объекта Date - получение дня недели
	// Проверяем, если day - воскресенье - то временно присваиваем ему значение 7(и таким образом переносим воскресенье в конец списка дней недели) (на следующем шаге смещаем все индексы влево, чтобы у понедельника он стал 0)
	if (day == 0) day = 7;
	return day - 1;
	// так у нас индекс понедельника сменится с 1 на 0, вторника в 2 на 1 и т.д. а воскресенья 6
}
// Создаем функцию, которая будет рендерить весь контент внутри каждого месяца, она принимает параметры:  год и месяц , для которых мы этот календарь рендерим.
function renderMonthContent(year, month) {
	// Вначале работы функции создаем элемент разметки с классом "month", в который мы в конце работы функции запишем всю сгенерированную разметку
	const monthContent = document.createElement("div");
	monthContent.className = "month";

	// Чтобы более привычно вводить номера месяцев не с 0, а с 1, создим переменную, котрая будет вычитать единицу из каждого номера месяца, что мы ей передадим, таким образом в функцию Date мы будем передавать monthIndex, где январь -имеет индекс 0, при том что захотев получить календарь на январь мы передадим в параметр month - 1.
	let monthIndex = month - 1;
	// new Date(year, month, date, hours, minutes, seconds, ms) - Создать объект Date с заданными компонентами в местном часовом поясе. Обязательны только первые два аргумента. Параметр date здесь представляет собой день месяца. Если параметр не задан, то принимается значение 1. Записываем интересующую дату в переменную date.
	let date = new Date(year, monthIndex);
	// Записываем шаблонную строку, которую мы будем добавлять в разметку в переменную contentTable
	let contentTable = `
	<div class="month-header">${months[monthIndex].description}</div>
	<div class="month-name">${months[monthIndex].name}</div>
	<div class="month-content">
<div class="month__date month-accent">ПН</div>
<div class="month__date month-accent">ВТ</div>
<div class="month__date month-accent">СР</div>
<div class="month__date month-accent">ЧТ</div>
<div class="month__date month-accent">ПТ</div>
<div class="month__date month-accent">СБ</div>
<div class="month__date month-accent">ВС</div>
`;

	// Добавляем пустые ячейки, если месяц начинается не с понедельника. getDay(date) - вернет нам индекс дня недели (0-6)
	for (let i = 0; i < getDay(date); i++) {
		//  И мы будем добавлять пустую ячейку в таблицу на каждой итерации, пока, i не сравняется с индексом дня недели первого дня месяца.
		contentTable += "<div class='month__date'> </div>";
	}
	// Генерируем все дни месяца
	// Цикл while будет выполнятся пока индекс месяца который мы получаем через date.getMonth() совпадет с тем, который хранится в переменной monthIndex
	while (date.getMonth() == monthIndex) {
		// Генерируем число месяца при помощи тэга <td> и конкатенации, внутри тэга прописываем день, получаем его при помощи date.getDate(), сначала это будет день 1.
		contentTable += "<div class='month__date'>" + date.getDate() + "</div>";
		// Добавляем переход на новую строку таблицы. Если getDay(date) - это воскресенье (его индекс 6), то поделив его на 7, получаем в остатке 6 (оператор % - возвращает остаток при делении), если это условие выполняется, то закрываем текущий тэг </tr> и открываем новый <tr>, следующая итерация цикла while начнется с новой строки
		if (getDay(date) % 7 == 6) {
			// contentTable += "<br>";
		}
		// Следующие методы позволяют установить компоненты даты и времени:
		// setFullYear(year, [month], [date])
		// setMonth(month, [date])
		// setDate(date)
		// setHours(hour, [min], [sec], [ms])
		// setMinutes(min, [sec], [ms])
		// setSeconds(sec, [ms])
		// setMilliseconds(ms)
		// Устанавливаем число месяца на следующий день. Таким образом мы позволяем свершиться следующей итерации. На первой итерации date.getDate()==1, (т.к. мы не задавали этот параметр при создании даты). На следующей итерации date.getDate()==2 и т.д. Когда мы подойдем к концу месяца date.setDate() не получится установить на число, которого нет в переданном месяце и месяц переключится на следующий(т.е date.getMonth()увеличится на 1 и условие date.getMonth() == monthIndex не будет работать ) (так как в объекте Date работает автоисправление и например 32января будет распознано как 1 февраля), в таком случае наш цикл while остановится и новое число не будет сгенерировано.
		date.setDate(date.getDate() + 1);
	}
	// Добавляем пустые ячейки, если месяц заканчивается не на воскресенье
	// Пишем условие, если getDay(date) - не понедельник (чтобы не выводить полный ряд пустых ячеек)
	// Т.к. на последней итерации цикла while date.setDate() установилось на 1 число следующего месяца, то getDay(date) вернет нам день недели этого 1 числа
	if (getDay(date) != 0) {
		// Пока getDay(date) не прошел всю неделю (не стал==7) мы будем добавлять пустую ячеку в строку таблицы.
		for (let i = getDay(date); i < 7; i++) {
			contentTable += "<div class='month__date'> </div>";
		}
	}
	//Закрываем month-content и добавляем разметку в выбранный элемент
	contentTable += "</div>";
	monthContent.innerHTML = contentTable;
	// Добавляем вновь созданный элемент monthContent на страницу как дочерний элемент обертки "months-wrapper"
	monthsWrapperHtml.appendChild(monthContent);
	// Делаем так чтобы на странице отображался переданный в качестве параметра функции год, для которого мы генерируем календарь
	const yearContainer=document.querySelector('.year-container');
	yearContainer.innerHTML= year;
}

for (let i = 1; i < 13; i++) {
	renderMonthContent(2024, i);
}
