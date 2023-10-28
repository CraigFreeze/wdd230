const visitMessage = document.querySelector("#visitMessage");
const msToDays = 84600000;

let numVisits = Number(localStorage.getItem("numVisits-ls")) || 0;
let lastVisitDate = Number(localStorage.getItem("lastVisit-ls")) || 0;
let today = Date.now();
let daysSince = 0;

console.log(Number(today) - Number(localStorage.getItem("lastVisit-ls")))
daysSince = ((Number(today) - lastVisitDate)) / msToDays || 0;
console.log(daysSince)

if (numVisits == 0) {
    visitMessage.textContent = `Welcome! Let us know if you have any questions.`;
} else if (daysSince < 1) {
    visitMessage.textContent = `Back so soon! Awesome!`;
} else {
    visitMessage.textContent = `You last visited ${daysSince} days ago.`;

}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);
localStorage.setItem("lastVisit-ls", today);