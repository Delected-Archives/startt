/*
  * update.js
  *
  * hacky way of updating the time every second
  * and setting the weather once
*/

/* YOU MUST SET THESE OR THE WEATHER 
WILL NOT WORK! */

// your OpenWeather API key (free)
// read the wiki for more info
const apiKey = 'key here'

// your city ID (see https://openweathermap.org/find)
// read the wiki for more info 
const cityId = 0

// unit, available options are 'metric', 'imperial'
// tip: most countries use metric, USA and some others uses imperial
const unit = 'metric'


window.onload = function updateTimeAndWeather() {
  updateTime()
  setInterval(updateTime, 1000)
  
  // update weather once
  updateWeather()
}

/* TIME */
const clock = document.getElementById('clock')

function updateTime() {
  const date = new Date()
  use12hTime(date);
  // use24hTime(date);
}

function use12hTime(date) {  
  clock.innerText = date.toLocaleString('en-US', {
    hour: 'numeric', 
	minute: '2-digit', 
	hour12: true 
  })
}

function use24hTime(date) {
  clock.innerText = date.getHours() + ":" + date.getMinutes()
}

/* WEATHER */

const requestUrl = `https://api.openweathermap.org/data/2.5/
weather?id=${cityId}&appid=${apiKey}&units=${unit}`

const iconUrl = 'https://openweathermap.org/img/wn/'

function updateWeather() {
  fetch(new Request(requestUrl))
  .then(response => response.json())
  .then(response => {
    document.getElementById('weather').innerText
	  = response.main.temp + '°'
	
	let root = document.documentElement;
    root.style.setProperty('--img-url', 'url(\'' + iconUrl + 
	  response.weather[0].icon + '.png\')')
  })
}

