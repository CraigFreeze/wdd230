let latestVisitDate = Number(localStorage.getItem("latestVisitDate-ls")) || 0;

// var mockDate = new Date("10/31/2023 16:00:00"); // some mock date
// var milliseconds = mockDate.getTime(); 
//latestVisitDate

if (latestVisitDate === 0) {
        visitMessage.textContent = `Welcome! Let us know if you have any questions.`;
    } else if (Date.now() - latestVisitDate < 84600000) {
        visitMessage.textContent = `Back so soon! Awesome!`;
    } else {
        let daysSince = (Date.now() - latestVisitDate) / 84600000
        visitMessage.textContent = `You last visited ${daysSince.toFixed(1)} days ago.`;
    }


let newVisitDate = Date.now()
localStorage.setItem("latestVisitDate-ls", newVisitDate);