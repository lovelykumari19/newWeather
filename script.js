const inputBox = document.querySelector('.input-box')
const searchBtn = document.getElementById('searchbtn');
const weather_img = document.querySelector('.weather-img');
const temp = document.querySelector('.temp');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');
const error = document.querySelector('.error');
const weatherbody = document.querySelector('.weather-body');
async function checkweather(city) {
    const api = "a6e5094c94a8cbdc14eea37375defa47";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());

    if(weather_data.cod === `404`){
        error.style.display = "flex";
        weatherbody.style.display = "none";
        // console.log("error");
        return;

    }
    
    weatherbody.style.display = "flex";
    error.style.display = "none";


    temp.innerHTML = `${Math.round(weather_data.main.temp - 273.15)} °C`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind.innerHTML = `${weather_data.wind.speed}Km/H`;
    description.innerHTML = `${weather_data.weather[0].description}`

    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src = "/cloud.png";
            break;
        case 'Clear':
            weather_img.src = "/clear.png";
            break;
        case 'Rain':
            weather_img.src = "/rain.png";
            break;
        case 'Mist':
            weather_img.src = "/mist.png";
            break;
        case 'Snow':
            weather_img.src = "/snow.png";
            break;

    }




}
searchBtn.addEventListener('click', () => {
    checkweather(inputBox.value);
})
