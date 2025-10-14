const pages = document.querySelectorAll(".page");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const submitBtn = document.querySelector(".submit-btn");
const steps = document.querySelectorAll(".step");
const progressBar = document.querySelector(".progress-bar");
const form = document.querySelector("#form");

let currentPage = 0;

function updateUI() {
  // Show current page
  pages.forEach((page, index) => {
    page.classList.toggle("hidden", index !== currentPage);
  });

  // Highlight steps
  steps.forEach((step, index) => {
    if (index <= currentPage) {
      step.classList.add("bg-green-400", "text-neutral-700");
    } else {
      step.classList.remove("bg-amber-400", "text-black");
    }
  });

  // Update progress bar width
  const progressPercent = (currentPage / (pages.length - 1)) * 100;

  progressBar.style.width = `${progressPercent}%`;

  // Toggle button visibility
  prevBtn.classList.toggle("hidden", currentPage === 0 || currentPage == 3);
  nextBtn.classList.toggle(
    "hidden",
    currentPage === pages.length - 2 || currentPage == 3
  );
  submitBtn.classList.toggle(
    "hidden",
    currentPage !== pages.length - 2 || currentPage == 3
  );
}

// Event: Next
nextBtn.addEventListener("click", () => {
  if (currentPage < pages.length - 1) {
    currentPage++;
    updateUI();
  }
});

// Event: Previous
prevBtn.addEventListener("click", () => {
  if (currentPage > 0) {
    currentPage--;
    updateUI();
  }
});

// Event: Submit
submitBtn.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent actual form submission

  const data = new FormData(form);
  const formDataObj = Object.fromEntries(data.entries());

  currentPage++;
  updateUI();
});

// Initial UI state
updateUI();
