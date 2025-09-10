const hrsHand = document.querySelector(".hrs-hand");
const secHand = document.querySelector(".sec-hand");
const minHand = document.querySelector(".mins-hand");
setInterval(() => {
  const date = new Date();
  const secdeg = (date.getSeconds() / 60) * 360;
  const minDeg = (date.getMinutes() / 60) * 360;
  const hrsDeg = (date.getHours() / 12) * 360;
  secHand.style.transform = `rotate(${secdeg}deg)`;
  minHand.style.transform = `rotate(${minDeg}deg)`;
  hrsHand.style.transform = `rotate(${hrsDeg}deg)`;
}, 1000);
