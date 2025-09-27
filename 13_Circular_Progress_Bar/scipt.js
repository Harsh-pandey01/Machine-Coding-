const outerDiv = document.querySelector(".outer");
let currentProgress = 0;

const timerID = setInterval(() => {
  currentProgress += 1;

  outerDiv.style.background = `conic-gradient(
      blue 0deg ${currentProgress}deg,
      white ${currentProgress}deg 360deg
    )`;

  if (currentProgress >= 360) clearInterval(timerID);
}, 20);
