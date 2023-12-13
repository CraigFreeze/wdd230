//update current year in footer
let todaysYear = new Date().getFullYear();
document.querySelector('#year').textContent = todaysYear;

// Store the selected elements that we are going to use. 
const mainnav = document.querySelector('.nav-links-container')
const hambutton = document.querySelector('#menu');
const reserve = document.querySelector('#reserve');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});