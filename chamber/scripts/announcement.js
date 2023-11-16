const dismissButton = document.querySelector(".announcement-button");
const announcement = document.querySelector(".announcement");

// Key for what days to display message
let displayDays = {
    0: false, // Sunday
    1: true, // Monday
    2: true, // Tuesday
    3: true, // Wednesday
    4: false, // Thursday
    5: false, // Friday
    6: false // Saturday
}

let dayOfWeek = new Date() // Get today's date
dayOfWeek = dayOfWeek.getDay() //Gets the day of the week 0 = Sunday and 6 = Saturday

if (!displayDays[dayOfWeek]) { // Look up display boolean
    announcement.classList.toggle("none");
}

dismissButton.addEventListener("click", () => {
    announcement.classList.toggle("none");
});




