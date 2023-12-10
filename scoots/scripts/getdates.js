//update current year
let todaysYear = new Date().getFullYear();
document.querySelector('#year').textContent = todaysYear;

//update last modified
document.querySelector('#lastModified').textContent = "Last Modified: " + document.lastModified

