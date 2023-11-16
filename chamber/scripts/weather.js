// Weather for Reno
const lat = '39.530';
const lon = '-119.814';
const key = '6aca58bf95247acb2c0c73a156837509';
const units = 'imperial';
const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=${units}`;
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=${units}`;


// const URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=${units}`;



const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const day1Forcast = document.querySelector('#day1Forcast');
const day2Forcast = document.querySelector('#day2Forcast');
const day3Forcast = document.querySelector('#day3Forcast');
const day4Forcast = document.querySelector('#day4Forcast');
const day1ForcastDate = document.querySelector('#day1ForcastDate');
const day2ForcastDate = document.querySelector('#day2ForcastDate');
const day3ForcastDate = document.querySelector('#day3ForcastDate');
const day4ForcastDate = document.querySelector('#day4ForcastDate');


//Current weather
async function weatherFetch() {
    try {
        const response = await fetch(weatherURL);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            displayWeather(data)
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayWeather(data){
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', capitalizeFirst(desc));
    captionDesc.textContent = `${capitalizeFirst(desc)}`;
}

// 3 Day weather forecast creation
async function forecastFetch() {
    try {
        const response = await fetch(forecastURL);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            displayForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function formatDate(date){
    return date.substring(6, 11).replace(/-/g, '/')
}

function displayForecast(data){
    let time = new Date(data.list[0].dt);

    day1Forcast.innerHTML = `${data.list[0].main.temp}&deg;F`;
    day1ForcastDate.innerHTML = `${formatDate(data.list[0].dt_txt)}`;

    day2Forcast.innerHTML = `${data.list[8].main.temp}&deg;F`;
    day2ForcastDate.innerHTML = `${formatDate(data.list[8].dt_txt)}`;

    day3Forcast.innerHTML = `${data.list[16].main.temp}&deg;F`;
    day3ForcastDate.innerHTML = `${formatDate(data.list[16].dt_txt)}`;

    day4Forcast.innerHTML = `${data.list[24].main.temp}&deg;F`;
    day4ForcastDate.innerHTML = `${formatDate(data.list[24].dt_txt)}`;
}


function capitalizeFirst(str){
    const arr = str.split(" ");
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    
    }
    const str2 = arr.join(" ");
    return str2;
}

weatherFetch();
forecastFetch();