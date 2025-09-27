const textWrapper = document.querySelector(".content-container");

const contents = ["Developer", "Coder", "Youtuber", "Artist"];

let currentChosenWord = 0;
let chosenWordCurrentIndex = 0;
let reverseTyping = false;

function startTypingAnimation() {
  var timerId = setInterval(() => {
    if (chosenWordCurrentIndex == contents[currentChosenWord].length) {
      reverseTyping = true;
    }
    // for revertyping
    if (reverseTyping && textWrapper.textContent.length) {
      textWrapper.textContent = textWrapper.textContent.slice(
        0,
        textWrapper.textContent.length - 1
      );
    } else if (reverseTyping && textWrapper.textContent.length == 0) {
      reverseTyping = false;
      chosenWordCurrentIndex = 0;
      currentChosenWord =
        currentChosenWord === contents.length - 1 ? 0 : currentChosenWord + 1;
    } else {
      textWrapper.textContent =
        textWrapper.textContent +
        contents[currentChosenWord][chosenWordCurrentIndex];
      chosenWordCurrentIndex += 1;
    }
  }, 200);
}

// startTypingAnimation();
