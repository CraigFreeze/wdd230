// Weather for Cozumel
const lat = '20.5083';
const lon = '-86.9458';
const key = '6aca58bf95247acb2c0c73a156837509';
const units = 'imperial';
const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=${units}`;
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=${units}`;


// const URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=${units}`;



const curTemp = document.querySelector('#cur-temp');
const curHumidity = document.querySelector('#cur-humidity');
const weatherIcon = document.querySelector('#cur-weather-icon');
const curFeelsLike = document.querySelector('#cur-feelsLike');
const curWindSpeed = document.querySelector('#cur-windSpeed');
const curVisibility = document.querySelector('#cur-visibility');
const curMainDesc = document.querySelector('#cur-main-description');
const maxTemp = document.querySelector('#maxTemp');



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

function displayWeather(data) {
    curTemp.innerHTML = `${Math.round(data.main.temp)}&deg;F`;
    curHumidity.innerHTML = `${Math.round(data.main.humidity)}%`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', capitalizeFirst(desc));
    curFeelsLike.innerHTML = `${Math.round(data.main.feels_like)}&deg;F`;
    curWindSpeed.innerHTML = `${Math.round(data.wind.speed)} mph`;
    curVisibility.innerHTML = `${Math.round(data.visibility) / 1000} km`;
    curMainDesc.innerHTML = `(${data.weather[0].main} - ${capitalizeFirst(data.weather[0].description)})`;

    // Display Banner max temp
    maxTemp.innerHTML = `Today's highest temperature is ${Math.round(data.main.temp_max)}&deg;F!`;
}

// 3 Day weather forecast creation
async function forecastFetch() {
    try {
        const response = await fetch(forecastURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function formatDate(dateTime) {
    let date = "";
    let monthPart =  dateTime.substring(5, 7);
    const months = ["Jan.", "Feb.", "March", "April", "May", "June", "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."];
    let dayPart =  dateTime.substring(8, 10);
    date = date + months[monthPart - 1] + " " + dayPart;
    return date;
}

function displayForecast(data) {
    data.list.forEach(weatherDay => {
        if (weatherDay.dt_txt.substring(11) == "15:00:00") {
            let temp = weatherDay.main.temp;
            let main = weatherDay.weather[0].main;
            let desc = weatherDay.weather[0].description;
            let iconsrc = `https://openweathermap.org/img/w/${weatherDay.weather[0].icon}.png`;
            let date = formatDate(weatherDay.dt_txt);

            let ul = document.querySelector("#forecastList");
            let container = document.createElement("li");
            let tempSpan = document.createElement("span");
            let imgIcon = document.createElement("img");
            let detailsSpan = document.createElement("span");

            tempSpan.innerHTML = `${date}: ${Math.round(temp)}&deg;F`;
            detailsSpan.innerHTML = `(${main} - ${capitalizeFirst(desc)})`;
            imgIcon.setAttribute('src', iconsrc);
            imgIcon.setAttribute('alt', capitalizeFirst(desc));

            container.append(tempSpan);
            container.append(imgIcon);
            container.append(detailsSpan);
            ul.append(container);
        }
    });
}


function capitalizeFirst(str) {
    const arr = str.split(" ");
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const str2 = arr.join(" ");
    return str2;
}

// Dismiss Buttons
const dismissBtn = document.querySelector(".banner-btn");
const banner = document.querySelector(".banner");
dismissBtn.addEventListener("click", () => {
    banner.classList.toggle("none");
});

weatherFetch();
forecastFetch();