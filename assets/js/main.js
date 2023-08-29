const menuToggles = document.getElementsByClassName('menu-toggle');
const closeButton = document.getElementById("close-button");
const globalHeader = document.getElementById('global-header');

const contentSectionCss = document.querySelector('#content');

const homeButtonCss = document.querySelector('.home-button');
const aboutButtonCss = document.querySelector('.about-button');
const contactButtonCss = document.querySelector('.contact-button');

const overlayCss = document.querySelector('.overlay');
const lateralMenuCss = document.querySelector('#menu');
const closeButtonCss = document.querySelector("#menu .close-button");
const bannerCss = document.querySelector('.banner');

function closeMenu() {
	overlayCss.classList.toggle('open');
	lateralMenuCss.classList.toggle('open');
	closeButtonCss.classList.toggle("open");
}

[...menuToggles, closeButton].forEach(menuToggle => {
	menuToggle.addEventListener('click', () => {
        closeMenu()
	});
});

homeButtonCss.addEventListener('click', function(event) {
	event.preventDefault();
	closeMenu()
	window.scrollTo({
	  top: 0,
	  behavior: "smooth"
	});
});

contactButtonCss.addEventListener('click', function(event) {
	event.preventDefault();
	closeMenu()
	const documentHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
	window.scrollTo({
	  top: documentHeight,
	  behavior: "smooth"
	});
});

window.addEventListener('scroll', () => {
    if (window.scrollY > bannerCss.offsetHeight) {
		globalHeader.classList.remove('scrolled');
	} else {
		globalHeader.classList.add('scrolled');
    }
});

const title = document.getElementById("title");
title.textContent = innerWidth
window.addEventListener('resize', () => {
    title.textContent = innerWidth
});