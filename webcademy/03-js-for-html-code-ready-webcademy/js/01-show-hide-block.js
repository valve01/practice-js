const button = document.querySelector('#button');
const content = document.querySelector('#content');

button.addEventListener("click", function () {

	if (content.classList.toggle('content-hidden')) {
		button.textContent = 'Открыть блок';
	} else {
		button.textContent = 'Закрыть блок';
	}

    /*
    content.classList.toggle('content-hidden')

    if (content.classList.contains('content-hidden')) {
        button.textContent = "Открыть блок";
    } else {
        button.textContent = 'Закрыть блок';
    }
    */

});