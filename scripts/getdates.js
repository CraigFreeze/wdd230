// https://video.byui.edu/media/t/0_r6j1mjz1 <--- demonstration in the course
// let options = { year: "numeric"};
// let todaysDate = new Date().toLocaleDateString('en-US', options);
// console.log(todaysDate);

//What I found on MDN
let todaysYear = new Date().getFullYear();
document.querySelector('footer span').textContent = todaysYear;

document.querySelector('#lastModified').textContent = "Last Modified: " + document.lastModified