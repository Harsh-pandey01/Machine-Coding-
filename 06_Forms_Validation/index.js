const form = document.querySelector("Form");
const submitBtn = document.querySelector(".SubmitBtn");
let errorObj = {};

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

const getFormData = () => {
  const data = new FormData(form);
  const formData = {};
  for (const [key, value] of data) {
    formData[key] = value;
  }
  return formData;
};

const validateConfig = {
  FirstName: [
    {
      required: true,
      errorMsg: "Please Enter the FirstName",
    },
  ],
  LastName: [
    {
      required: true,
      errorMsg: "Please Enter the LastName",
    },
  ],
  ParentFirstName: [
    {
      required: true,
      errorMsg: "Please Enter the LasParentFirstNametName",
    },
  ],
  ParentLastName: [
    {
      required: true,
      errorMsg: "Please Enter the LasParentFirstNametName",
    },
  ],
  ParentLastName: [
    {
      required: true,
      errorMsg: "Please Enter the LasParentFirstNametName",
    },
  ],
  Phone: [
    {
      required: true,
      errorMsg: "Please Enter the Phone",
    },
    {
      phoneLength: 10,
      errorMsg: "Enter a valid contact",
    },
  ],
  Email: [
    {
      required: true,
      errorMsg: "Please Enter the Email",
    },
    {
      emailRegaxPattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      errorMsg: "Please Enter Valid Email",
    },
  ],
  Password: [
    { required: true, errorMsg: "Please enter a password" },
    { minLength: 6, errorMsg: "Password must be at least 6 characters" },
  ],
};

const validateForm = (formData) => {
  Object.entries(validateConfig).forEach(([key, rules]) => {
    for (const rule of rules) {
      if (rule.required && !formData[key]) {
        errorObj[key] = rule.errorMsg;
        break;
      }

      if (rule.phoneLength && formData[key]?.length !== rule.phoneLength) {
        errorObj[key] = rule.errorMsg;
        break;
      }

      if (rule.emailRegaxPattern instanceof RegExp) {
        if (!rule.emailRegaxPattern.test(formData[key])) {
          errorObj[key] = rule.errorMsg;
          break;
        }
      }

      if (rule.minLength && formData[key]?.length < rule.minLength) {
        errorObj[key] = rule.errorMsg;
        break;
      }
    }
  });

  return errorObj;
};

const showErrors = (errors) => {
  document.querySelectorAll("Form p").forEach((elem) => {
    elem.textContent = "";
  });
  errorObj = {};
  Object.entries(errors).forEach(([key, errMsg]) => {
    const errorEl = document.querySelector(`.${key}Error`);
    errorEl.textContent = errMsg;
  });
};

submitBtn.addEventListener("click", (e) => {
  const formData = getFormData();

  const error = validateForm(formData);
  showErrors(error);
});
