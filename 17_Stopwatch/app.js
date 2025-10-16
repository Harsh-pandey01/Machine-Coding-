const mins = document.querySelector(".mins");
const hrs = document.querySelector(".hours");
const secs = document.querySelector(".secs");
const start = document.querySelector(".start-btn");
const pause = document.querySelector(".pause-btn");
const reset = document.querySelector(".reset-btn");

let second = 0;
let minutes = 0;
let hour = 0;
let timerId = null;

const updateDisplay = () => {
  secs.textContent = String(second).padStart(2, "0");
  mins.textContent = String(minutes).padStart(2, "0");
  hrs.textContent = String(hour).padStart(2, "0");
};

const handleTime = () => {
  second++;
  if (second === 60) {
    second = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hour++;
    }
  }
  updateDisplay();
};

function startWatch() {
  if (!timerId) {
    timerId = setInterval(handleTime, 10);
  }
}

function pauseWatch() {
  clearInterval(timerId);
  timerId = null;
}

function resetWatch() {
  pauseWatch();
  second = 0;
  minutes = 0;
  hour = 0;
  updateDisplay();
}

// Attach event listeners
start.onclick = startWatch;
pause.onclick = pauseWatch;
reset.onclick = resetWatch;
