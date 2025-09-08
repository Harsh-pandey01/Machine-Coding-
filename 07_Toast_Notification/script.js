const successBtn = document.querySelector(".success-btn");
const errorBtn = document.querySelector(".error-btn");
const toastContainer = document.querySelector(".toasts-container");
const toastConfig = {
  success: "Your Msg send successfully",
  error: "Some error occured",
};

const generateToast = (status) => {
  // create a toast container
  const toast = document.createElement("div");
  toast.setAttribute(
    "class",
    ` min-w-60 p-2 bg-white  animate-slide transition rounded-sm rounded-b-none text-black relative after:content-[''] after:absolute after:w-full after:h-1 after:-bottom-1 ${
      status === "success" ? "after:bg-green-600" : "after:bg-red-500"
    } after:left-0 after:animate-progress after:transition`
  );
  toastContainer.append(toast);
  toast.innerHTML = `
   <h1 class=${status == "success" ? "text-green-600" : "text-red-600"}>${
    status.charAt(0).toUpperCase() + String(status).slice(1)
  }</h1>
   <p>${toastConfig[status]}</p>
  `;

  setTimeout(() => {
    toast.remove();
  }, 3000);
};

successBtn.addEventListener("click", (e) => {
  generateToast("success");
});

errorBtn.addEventListener("click", (e) => {
  generateToast("error");
});
