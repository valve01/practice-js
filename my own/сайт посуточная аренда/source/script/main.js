// =======================Главный слайдер===============================
const mainSliderImages = document.querySelectorAll(".gritting-slider-line img");
const sliderLine = document.querySelector(".gritting-slider-line");
const slider = document.querySelector(".gritting-slider");
let activeSlideNumber = 0;
let sliderWidth;
function initialization() {
	sliderWidth = slider.offsetWidth;
	sliderLine.style.width = sliderWidth * mainSliderImages.length + "px";
	mainSliderImages.forEach((image) => {
		image.style.width = sliderWidth + "px";
		image.style.heigth = "auto";
		rollSlider();
	});
}
function rollSlider() {
	sliderLine.style.transform =
		"translate(-" + activeSlideNumber * sliderWidth + "px)";
}
window.addEventListener("resize", initialization);
function turnPrevSlider() {
	prevSlideBtn.addEventListener("click", () => {
		activeSlideNumber--;
		if (activeSlideNumber < 0) {
			activeSlideNumber = mainSliderImages.length - 1;
		}
		rollSlider();
	});
}

initialization();
function nextSlider() {
	activeSlideNumber++;
	if (activeSlideNumber >= mainSliderImages.length) {
		activeSlideNumber = 0;
	}
	rollSlider();
}
setInterval(nextSlider, 10000);

// ===================================================================
// Подсветка названий категорий
{
	const categoryCards = document.querySelectorAll(".category-card");

	categoryCards.forEach((categoryCard) => {
		categoryCard.addEventListener("mouseover", function (e) {
			e.target.closest(".category-card").children[0].style.opacity = "100%";
		});
	});
	categoryCards.forEach((categoryCard) => {
		categoryCard.addEventListener("mouseout", function (e) {
			e.target.closest(".category-card").children[0].style.opacity = "70%";
		});
	});
}
// ========================================================================
