import "bootstrap";

const comptebtn = document.querySelector('.moncomptebutton')
const dropdown = document.querySelector('.dropdown-menu')

comptebtn.addEventListener('click', (event) => {
	dropdown.classList.toggle('display-flex')
})




const searchline = document.querySelector('#site-search')
const loupebutton = document.querySelector('.loupebutton')

loupebutton.addEventListener('click', (event) => {
	searchline.classList.toggle('display-flex')
})

// Caroussel Netflix

const containers = document.querySelectorAll('.caroussel-wrapper');

containers.forEach((container) => {
	let position = 0;
	const caroussel = container.querySelector('.imgcaroussel');
	const leftScroll = container.querySelector('#left-scroll');
	const rightScroll = container.querySelector('#right-scroll');

	leftScroll.addEventListener('click', (e) => {
		if (position !== 0) {
			position = position + 500;
			caroussel.style.transform = `translateX(${position}px)`;
		}
	});
	rightScroll.addEventListener('click', (e) => {
		position = position - 500;
		caroussel.style.transform = `translateX(${position}px)`;
	});
});

