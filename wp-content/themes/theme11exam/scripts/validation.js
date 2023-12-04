//EXTRACT THE FORM'S DATA AND SAVE IN OBJECT:

function getFormfromData(form) {
  //iterate through the form's inputs, select and textarea values
  const bookingFormData = {};
  for (const element of form.elements) {
    if (element.id) {
      if (element.tagName === "Select") {
        //chatgpt's suggestion
        // For select elements, get all selected options' values
        // it creates an array (selectedOptions) containing all selected option values.
        // This array is then assigned to the corresponding bookingFormData property.
        const selectedOptions = [...element.selectedOptions].map(
          (option) => option.value
        );
        bookingFormData[element.id] = selectedOptions;
      } else if (element.tagName === "Textarea") {
        bookingFormData[element.id] = element.valueOf;
      } else {
        // Add the element's id and value to the formData object
        bookingFormData[element.id] = element.value;
      }
    }
  }
  return bookingFormData;
}

//vars to get booking form from html.
const booking = document.getElementById("booking-skema");
console.log("this is", booking);
//BOOKING CONFIRMATION SEND PAYLOAD TO DB
// booking.removeEventListener("submit", confirmReservation);
// setTimeout(function () {
//   console.log("set time");
// }, 100);

// booking.addEventListener("onsubmit", confirmReservation);

function confirmReservation(e) {
  console.log("here we are");
  e.preventDefault();

  const isValid = validateForm();
  // console.log(isValid);
  if (isValid) {
    console.log("form is valid");
  }

  console.log("this is payload", payload);
}
//VALIDATION OF FORM
function validateForm() {
  //personal info validation
  // array of validation rules
  const validationRules = [
    { field: "#fornavn", errorMessage: "Indtast dit fornavn" },
    { field: "#efternavn", errorMessage: "Indtast dit efternavn" },
    { field: "#email", errorMessage: "Indtast din email" },
    { field: "#behandlingstype", errorMessage: "Vælg en behandling" },
    { field: "#behandler", errorMessage: "Vælg en behandler" },
  ];

  for (const rule of validationRules) {
    const fieldValue = document.querySelector(rule.field).value.trim();
    //check if any fields are empty
    if (fieldValue === "") {
      console.log(rule.field, rule.errorMessage);
      showErrorScrollTo(rule.field, rule.errorMessage);
      return false;
    }
    //check for valid mail
    else if (
      rule.field === "#email" &&
      !fieldValue.match(/^[^s@]+@[^s@]+.[^s@]+$/)
    ) {
      showErrorScrollTo(rule.field, "Indtast en gyldig email");
      return false;
    } else if (rule.field.tagName === "SELECT" && fieldValue === "none") {
      // Display an error message and scroll to the input field
      showErrorAndScroll(rule.field, rule.errorMessage);
      return false;
    }
  }
  return true;
}

function showErrorScrollTo(selector, errorMessage) {
  const inputElement = document.querySelector(selector);
  const errorElement = document.createElement("span");

  errorElement.className = "error";
  errorElement.textContent = errorMessage;

  //insert error after input field
  inputElement.insertAdjacentElement("afterend", errorElement);

  //scroll to field
  inputElement.scrollIntoView({ behavior: "smooth", block: "center" });
}

//clear messages
function clearErrorMessages() {
  // Remove all error messages from the DOM
  const errorMessages = document.querySelectorAll(".error");
  errorMessages.forEach((errorMessage) => errorMessage.remove());
}
