//update current year
let todaysYear = new Date().getFullYear();
document.querySelector('footer span').textContent = todaysYear;

//update last modified
document.querySelector('#lastModified').textContent = "Last Modified: " + document.lastModified

