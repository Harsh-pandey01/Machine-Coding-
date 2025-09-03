const inputs = document.querySelectorAll(".otp-input");

window?.addEventListener("load", () => {
  inputs[0].focus();
});

inputs.forEach((input, index) => {
  input.addEventListener("input", (e) => {
    if (e.target.value.length > 0 && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace" && !input.value && index > 0) {
      inputs[index - 1].focus();
    }
  });
});
