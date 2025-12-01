const circles = document.querySelectorAll(".cirle");
const progress = document.querySelector(".progress");
const prev = document.querySelector(".prev-btn");
const next = document.querySelector(".nxt-btn");
let currentPage = 0;
let totalSteps = 4;
circles[currentPage].style.borderColor = "red";

prev.addEventListener("click", (e) => {
  if (currentPage) {
    circles[currentPage].style.borderColor = "gray";
    currentPage--;
    progress.style.width = `${currentPage * (100 / (totalSteps - 1))}%`;
  }
  console.log(currentPage);
});

console.log(currentPage);

next.addEventListener("click", (e) => {
  if (currentPage < totalSteps - 1) {
    currentPage++;
    circles[currentPage].style.borderColor = "red";
    progress.style.width = `${currentPage * (100 / (totalSteps - 1))}%`;
  }
  console.log(`${currentPage * (100 / 3)}%`);
});
