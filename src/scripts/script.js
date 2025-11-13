const form = document.querySelector('#form');

console.log('alskra');

form.addEventListener('submit', (evt) => {
	evt.preventDefault();

	console.log(form.name.value);
});
