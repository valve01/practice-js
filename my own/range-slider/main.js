const rangeInput = document.querySelectorAll(".range-input input");
const priceInput = document.querySelectorAll(".price-input input");
const progress = document.querySelector(".slider .progress");
const priceGap = 100;

priceInput.forEach((input) => {
	input.addEventListener("input", (e) => {
		let minValue = parseInt(priceInput[0].value);
		let maxValue = parseInt(priceInput[1].value);

		if (maxValue - minValue >= priceGap && maxValue <= priceInput[1].max) {
			if (e.target.className === "input-min") {
				rangeInput[0].value = minValue;
				progress.style.left = (minValue / rangeInput[0].max) * 100 + "%";
			} else {
				rangeInput[1].value = maxValue;
				progress.style.right = 100 - (maxValue / rangeInput[1].max) * 100 + "%";
			}
		}
	});
});

rangeInput.forEach((input) => {
	input.addEventListener("input", (e) => {
		let minValue = parseInt(rangeInput[0].value);
		let maxValue = parseInt(rangeInput[1].value);

		if (maxValue - minValue < priceGap) {
			if (e.target.className === "range-input-min") {
				rangeInput[0].value = maxValue - priceGap;
			} else {
				rangeInput[1].value = minValue + priceGap;
			}
		} else {
			priceInput[0].value = minValue;
			priceInput[1].value = maxValue;
			progress.style.left = (minValue / rangeInput[0].max) * 100 + "%";
			progress.style.right = 100 - (maxValue / rangeInput[1].max) * 100 + "%";
		}
	});
});
