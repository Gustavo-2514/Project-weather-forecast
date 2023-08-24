var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let appKey = 'd3880b3543b0a5754af70c464ad8c6ca';
let nameCity = 'São Paulo';
const searchBtn = document.querySelector('#searchBtn');
const inputCity = document.querySelector('#searchInput');
const cityName = document.querySelector('#cityName');
const iconFlag = document.querySelector('#iconFlag');
const weather = document.querySelector('#weather');
const weatherDescription = document.querySelector('#weatherDescription');
const imgIcon = document.querySelector('#img-icon');
const humidityIcon = document.querySelector('#humidityIcon');
const humiditySpan = document.querySelector('#humidity');
const division = document.querySelector('#division');
const airIcon = document.querySelector('#airIcon');
const airSpan = document.querySelector('#air');
function getCity() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity.value}&appid=${appKey}&units=metric&lang=pt_br`);
        if (res.ok === true) {
            const city = yield res.json();
            return city;
        }
        else {
            const err = new Error('Erro ao buscar a cidade');
            throw err;
        }
    });
}
function showCity() {
    return __awaiter(this, void 0, void 0, function* () {
        document.querySelector('.error').textContent = '';
        try {
            const test = document.querySelector('.form');
            test.style.height = '400px';
            test.style.transition = '0.5s';
            const cityData = yield getCity();
            cityName.textContent = ` ${cityData.name} `;
            iconFlag.setAttribute('src', `https://flagsapi.com/${cityData.sys.country}/flat/32.png`);
            // get na api de flags/ trocar pelo BR, icone de local do lado do nome da cidade, fazer rapido e já ir pra uma aula
            // get na api de flags/ trocar pelo BR, icone de local do lado do nome da cidade, fazer rapido e já ir pra uma aula
            // get na api de flags/ trocar pelo BR, icone de local do lado do nome da cidade, fazer rapido e já ir pra uma aula
            // get na api de flags/ trocar pelo BR, icone de local do lado do nome da cidade, fazer rapido e já ir pra uma aula
            weather.textContent = `${Math.floor(cityData.main.temp)}°C`;
            weatherDescription.textContent = `${cityData.weather[0].description}`;
            imgIcon.setAttribute('src', `https://openweathermap.org/img/wn/${cityData.weather[0].icon}@2x.png`);
            humidityIcon.classList.add('material-symbols-outlined');
            humidityIcon.textContent = 'humidity_high';
            humiditySpan.textContent = `${cityData.main.humidity}%`;
            division.textContent = '|';
            airIcon.classList.add('material-symbols-outlined');
            airIcon.textContent = 'air';
            airSpan.textContent = `${cityData.wind.speed}km/h`;
        }
        catch (error) {
            document.querySelector('.error').textContent = 'Verifique o nome e tente novamente...';
        }
    });
}
searchBtn.addEventListener('click', showCity);
