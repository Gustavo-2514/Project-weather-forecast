let appKey = 'd3880b3543b0a5754af70c464ad8c6ca'
let nameCity: string = 'São Paulo'
const searchBtn = document.querySelector('#searchBtn')
const inputCity = document.querySelector('#searchInput')
const cityName = document.querySelector('#cityName')
const iconFlag = document.querySelector('#iconFlag')
const weather = document.querySelector('#weather')
const weatherDescription = document.querySelector('#weatherDescription')
const imgIcon = document.querySelector('#img-icon')

const humidityIcon = document.querySelector('#humidityIcon')
const humiditySpan = document.querySelector('#humidity')

const division = document.querySelector('#division')

const airIcon = document.querySelector('#airIcon')
const airSpan = document.querySelector('#air')

async function getCity() {
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity.value}&appid=${appKey}&units=metric&lang=pt_br`)
  if(res.ok === true){
    const city = await res.json()
    return city
  } else {
    const err = new Error('Erro ao buscar a cidade')
    throw err
  }
  
}

async function showCity(){
  document.querySelector('.error').textContent = ''
try {
  const containerForm = document.querySelector('.form')
  containerForm.style.height = '400px'
  containerForm.style.transition = '0.5s'
  const cityData = await getCity()


  cityName.textContent = ` ${cityData.name} `
  iconFlag.setAttribute('src', `https://flagsapi.com/${cityData.sys.country}/flat/32.png`)
  weather.textContent = `${Math.floor(cityData.main.temp)}°C`
  weatherDescription.textContent = `${cityData.weather[0].description}`
  imgIcon.setAttribute('src', `https://openweathermap.org/img/wn/${cityData.weather[0].icon}@2x.png`)

  humidityIcon.classList.add('material-symbols-outlined')
  humidityIcon.textContent = 'humidity_high'
  humiditySpan.textContent = `${cityData.main.humidity}%`

  division.textContent ='|'

  airIcon.classList.add('material-symbols-outlined')
  airIcon.textContent = 'air'
  airSpan.textContent = `${cityData.wind.speed}km/h`
} catch (error) {
  document.querySelector('.error').textContent = 'Verifique o nome e tente novamente...'
}

  
}


searchBtn.addEventListener('click', showCity)