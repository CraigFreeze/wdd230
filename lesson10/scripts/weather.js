// For Reno
// const lat = '39.530';
// const lon = '-119.814';
// const key = '6aca58bf95247acb2c0c73a156837509';
// const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const lat = '49.756';
const lon = '6.639';
const units = 'imperial';
const key = '6aca58bf95247acb2c0c73a156837509';
const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${key}`;

async function apiFetch() {
    try {
        const response = await fetch(URL);
        if (response.ok) {
            const data = await response.json();
            displayResults(data)
            console.log(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function capitalizeFirst(str){
    const arr = str.split(" ");

    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    
    }
    
    const str2 = arr.join(" ");
    return str2;
}

function displayResults(data){
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', capitalizeFirst(desc));
    captionDesc.textContent = `${capitalizeFirst(desc)}`;
}

apiFetch();