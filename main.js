const newYear = "1/1/2024";

const daysEl = document.querySelector('.day');
const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');

function timeCountDown() {
  console.log("timeCouontDown()");

  // pak huidige datum/tijd
  const nowDate = new Date();

  // maak datum van nieuwjaar
  const newYearDate = new Date(newYear);

  // totaal aantal seconden tussen nu en nieuwjaar
  const totalSeconds = (newYearDate - nowDate) / 1000;

  // aantal dagen naar beneden afgerond
  const days = Math.floor(totalSeconds / 3600 / 24);
  
  // aantal resterende uren 
  const hours = Math.floor(totalSeconds / 3600) % 24;
  
  // aantal resterende minuten
  const minutes = Math.floor(totalSeconds / 60) % 60;
  
  // aantal resterende seconden
  const seconds = Math.floor(totalSeconds) % 60;

  // de tijden weergeven in html
  daysEl.textContent = formatTime(days);
  hourEl.textContent = formatTime(hours);
  minuteEl.textContent = formatTime(minutes);
  secondEl.textContent = formatTime(seconds);
}

function formatTime(time) {
  // als cijfer 1 karakter heeft, dan een 0 ervoor zetten
  return time >= 10 ? time : `0${time}`;
}

// functie aanroep
timeCountDown();

// interval van 1 sec. aanroep countdown functie
setInterval(timeCountDown, 1000);