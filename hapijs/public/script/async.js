"use strict";
let time = 0;
let stopClock;
let clock = document.querySelector('#reloj');
const displayTime = () => {
  let hours = Math.floor(time / 3600);
  let minutes = Math.floor((time % 3600) / 60);
  let seconds = Math.floor(time % 60);
  let displayHours = (hours < 10) ? '0' + hours : hours;
  let displayMinutes = (minutes < 10) ? '0' + minutes : minutes;
  let displaySeconds = (seconds < 10) ? '0' + seconds : seconds;
  clock.textContent = `${displayHours}:${displayMinutes}:${displaySeconds}`;
  time++;
};
const start = document.querySelector('#start');
const stops = document.querySelector('#stop');
const restart = document.querySelector('#restart');
start.addEventListener('click', () => {
  stopClock = setInterval(displayTime, 1000);
  start.disabled = true;
});
stops.addEventListener('click', () => {
  clearInterval(stopClock);
  start.disabled = false;
});
restart.addEventListener('click', () => {
  clearInterval(stopClock);
  start.disabled = false;
  time = 0;
  displayTime();
});
displayTime();
