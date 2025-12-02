const faqsWrapper = document.querySelectorAll(".faq");

faqsWrapper.forEach((faq) => {
  const question = faq.querySelector(".question-wrapper");
  question.addEventListener("click", () => {
    const ans = faq.querySelector(".answer");
    ans.classList.toggle("active");
  });
});
