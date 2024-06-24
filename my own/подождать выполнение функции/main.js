// ========================== Подождать выполнение функции. Организация Асинхронного кода =======================================================
const secondF = () => console.log('second');
const firstF = () => console.log('first');

const callLis = async () => {
	setTimeout(secondF, 1000);

	let thenable = await {
		then(resolve) {
			setTimeout(() => resolve(firstF()), 3000);
		},
	};

	setTimeout(secondF, 1000);
};
callLis();

// ========================================== Подождать выполнение функции. Организация Асинхронного кода. Еще один пример ==========================
// const summarize = (num1, num2) => num1 + num2;
// const divide = (num1, num2) => num1 / num2;

// let x = 2;
// let y = 6;
// let z = 10;

// const calcAsync = async() => {

//   x = summarize(x, x); // (1шаг) 2 + 2 = 4
//   console.log('(1шаг)', x);

//   x = await {
//     then(resolve) {
//       setTimeout(() => resolve(summarize(x, y)), 1000)
//     }
//   }; // (2шаг) ??? должно получится 4 + 6 = 10
//   console.log('(2шаг)', x);

//   x = divide(x, z); // (3шаг) ??? должно получится 10/10 = 1
//   console.log('(3шаг)', x);
// }

// calcAsync();

// ==========================Подождать выполнение функции. Организация Асинхронного кода. Третий пример (на промисах)==============================

// const summarize = (num1, num2) => num1 + num2;
// const divide = (num1, num2) => num1 / num2;

// let x = 2;
// let y = 6;
// let z = 10;

// const calcAsync = async() => {
//   x = summarize(x, x);

//   console.log(1, x);

//   x = await new Promise((resolve, reject) => {
//     setTimeout(() => resolve(summarize(x, y)));
//   });

//   console.log(2, x);

//   x = divide(x, z);

//   console.log(3, x);
// }

// calcAsync();
