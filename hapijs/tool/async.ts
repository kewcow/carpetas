let time: number = 0;
let stopClock: any;
let clock: any = document.querySelector('#reloj');

const displayTime = () => {
  let hours: number = Math.floor(time/3600);
  let minutes: number = Math.floor((time % 3600)/60);
  let seconds: number = Math.floor(time % 60);

  let displayHours = (hours < 10)? '0' + hours: hours;
  let displayMinutes = (minutes < 10)? '0' + minutes: minutes;
  let displaySeconds = (seconds < 10)? '0' + seconds: seconds;

  clock.textContent = `${displayHours}:${displayMinutes}:${displaySeconds}`;
  time++;
}

const start: any = document.querySelector('#start');
const stops: any = document.querySelector('#stop');
const restart: any = document.querySelector('#restart');

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
