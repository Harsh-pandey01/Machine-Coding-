const randomCharatersForPass =
  "X7kYhZ3pQo2mF9jN1rS6cVwT5uG8hY4dEjO3pLmB0rQ1aSdF3gHgJ9kLpQ2wE4rT6yU8iO0iP5mN7bVvC3xZ1aSdF5gHjK7lM9nB2vCxZ0qW1eR3tY5uI7oP0l. K1mN4bVf2cZ0xS8eD7rF5tY3uI9oP6lKjH2gF5d. s2WqP1oI0uY7tR5eD4fS6gH8jK0lM3nB1vC9xZ7qW5eR3tY2uI0oP6lKjH2gF5d. p1s2Q3w4E5r6T7y8U9i0O1p2L3k4J5h6G7f8d9S0a";

const rangeInput = document.querySelector("#range-input");
const passwordText = document.querySelector("#password-text");
const generateBtn = document.querySelector(".generate-pass-btn");
const rangeValueDisplay = document?.querySelector(".range-value");
const copyBtn = document.querySelector(".copy-btn");
let rangeValue = 10;

rangeInput.addEventListener("change", (e) => {
  rangeValue = e.target.value;
  rangeValueDisplay.textContent = e.target.value;
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(passwordText.value);
});

const generateRandomPass = () => {
  let randomPass = "";
  for (let i = 0; i < rangeValue; i++) {
    randomPass += randomCharatersForPass[Math.floor(Math.random() * 100) + 1];
  }

  passwordText.value = randomPass;
};

generateBtn.addEventListener("click", generateRandomPass);

generateRandomPass();
