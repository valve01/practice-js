// Форматированию под локаль подвержены числа, даты и строки. Используется объект Intl (интернационализация)

// ================Форматирование чисел=========================

const sum1 = 514426;
const sum2 = 4898468746;
const sum3 = 54558.58;
const string = new String();
const toLocale = new Intl.NumberFormat("ru", {
	style: "currency", //"percent", "decimal" (default)
	currency: "rub",
	currencyDisplay: "name", //  "code","name","symbol"(default)
	useGrouping: false,
	minimumFractionDigits: 0,
	minimumSignificantDigits: 5,
	maximumSignificantDigits: 8,
	minimumIntegerDigits: 10,
	// localeMatcher://"lookup"//"best-fit"(default)
});
document.getElementById("app").innerHTML = `
<h1> Форматирование чисел с помощью js </h1>
<div>
${sum1.toLocaleString("ru", {
	style: "currency", //"percent", "decimal" (default)
	currency: "rub",
	currencyDisplay: "name", //  "code","name","symbol"(default)
	useGrouping: false,
	minimumFractionDigits: 0,
	minimumSignificantDigits: 5,
	minimumIntegerDigits: 10,
	// localeMatcher://"lookup"//"best-fit"(default)
})}  


<br>
${new Intl.NumberFormat("ru", {
	style: "currency", //"percent", "decimal" (default)
	currency: "rub",
	currencyDisplay: "name", //  "code","name","symbol"(default)
	useGrouping: false,
	minimumFractionDigits: 0,
	minimumSignificantDigits: 5,
	minimumIntegerDigits: 10,
	// localeMatcher://"lookup"//"best-fit"(default)
}).format(sum3)}

<br>
${toLocale.format(sum2)}

</div>
`;

// Метод toLocaleString преобразует объект (число или дату) в строку, используя настройки локали. Язык по умолчанию зависит от настройки локали на вашем компьютере.
// Первым аргументом принимает локаль, список около 50 шт. При этом меняются/удаляются разделители разрядов, меняются местами дни и месяцы и т.д.
// Второй аргумент - это опции. Это целый объект и меняя значения свойств, мы меняем форматирование нашего
// Локаль формуруется из 2х частей: 1 - язык, 2 - регион. Например en-US (английский-соединенные штаты)
// currencyDisplay влиет на тип отображнения валюты: значок, код( как в currency) и буквенное обозначение.
// useGrouping влияет на отображение разделителей разрядов. По умолчанию true

// minimumFractionDigits отвечает за минимальное количество цифр после запятой
// minimumSignificantDigits минимальное количество ЗНАЧАЩИХ цифр
// minimumIntegerDigits минимальное количество целых цифр

// maximumFractionDigits
// maximumSignificantDigits

// Метод первый не всегда удобен, для некоторых случаев лучше подойдет второй
// Второй вариант с использованием Intl позволяет передавать любое число как аргумент для метода format, а сами свойства при этом можно записать в переменную, и в переменной их при желании менять (что впрочем возможно и в 1 варианте)
// Метод format объекта Intl. форматирует данные, переданные в качестве аргумента, в формат, прописанный в объкте Intl.Collator Intl.DateTimeFormat Intl.NumberFormat

// ================Форматирование дат=========================

// Создадим объект текущая дата
const now = new Date();
// Создаем новый объект Intl.DateTimeFormat и описываем в нем свойства формата даты
const ruDate = new Intl.DateTimeFormat("ru", {
day:"2-digit",
month:"long",
year:"numeric",
hour:'2-digit',
minute:"2-digit",
second:"2-digit",
era:"narrow",
timeZone:"Europe/Moscow",
timeZoneName:"long",
weekday:"long",
});

// Для другой локали создадим свой объект Intl
const usDate = new Intl.DateTimeFormat("en-US", {
	day:"2-digit",//2-digit, numeric (default)
	month:"short",//2-digit, numeric(default), narrow, short, long
	year:"numeric",//2-digit, numeric(default)
	hour:'2-digit',//2-digit, numeric
	minute:"2-digit",//2-digit, numeric
	second:"2-digit",//2-digit, numeric
	era:"long",//narrow, short, long
	hour12:"true",//true  -- 12-часовой формат, false -- 24-часовой
	timeZone:"America/Los_Angeles",//Временная зона
	timeZoneName:"short",//short, long
	weekday:"long",//narrow, short, long
	});
// Теперь обращаясь к нашим объектам, и вызывая у них метод format передаем ему значения дат и он их форматирует согласно описанию.
// Отформатируем дату

document.getElementById("app2").innerHTML = `
<h1> Форматирование дат с помощью js </h1>
<ul>
<li> ${ruDate.format(now)}</li>
<li> ${usDate.format(now)}</li>

</ul>
`;
