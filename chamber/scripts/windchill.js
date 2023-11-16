let temp = document.querySelector("#current-temp").textContent;
let wSpeed = document.querySelector("#windSpeed").textContent;

if(temp<=50 && wSpeed > 3){
    let chill = 35.74 + (0.6215*temp) - (35.75*(wSpeed**.16))+.4275*(temp*(wSpeed**.16))
    document.querySelector("#windChill").textContent = chill.toFixed(4);
}