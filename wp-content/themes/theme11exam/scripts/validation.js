document.addEventListener("DOMContentLoaded", function () {
  const booking = document.getElementById("booking-skema");

  if (booking) {
    const bookingFormDataValues = getFormfromData(booking);
    console.log("Form data:", bookingFormDataValues);

    booking.addEventListener("submit", function (e) {
      const submittedFormValues = getFormfromData(booking);
      e.preventDefault();
      console.log("Form submitted. Data:", submittedFormValues);

      //send it to db
      connecttoDB(submittedFormValues);
    });
  } else {
    console.error("Element with ID 'booking-skema' not found.");
  }
});

// EXTRACT THE FORM'S DATA AND SAVE IN OBJECT:
function getFormfromData(form) {
  //iterate through the form's inputs, select and textarea values
  const bookingFormData = {};
  for (const element of form.elements) {
    if (element.id && element.id !== "next" && element.id !== "previous") {
      if (element.tagName === "select") {
        //chatgpt's suggestion
        // For select elements, get all selected options' values
        // it creates an array (selectedOptions) containing all selected option values.
        // This array is then assigned to the corresponding bookingFormData property.
        const selectedOptions = [...element.selectedOptions].map(
          (option) => option.value
        );
        bookingFormData[element.id] = selectedOptions;
      } else if (element.tagName === "textarea") {
        bookingFormData[element.id] = element.value;
      } else {
        // Add the element's id and value to the formData object
        bookingFormData[element.id] = element.value;
      }
    }
  }
  return bookingFormData;
}

// const bookingFormDataValues = getFormfromData(booking);

// // console.log("Form input values:", bookingFormData);
// function connecttoDB(formData) {
//   const payload = {
//     Date: formData.date,
//     PatientName: `${formData.fornavn + " " + formData.efternavn}`,
//     Email: formData.email,
//     Behandler: formData.behandler,
//     Behandlingstype: formData.behandlingstype,
//     Kommentar: `${formData.kommentar}`,
//   };

//   /* Fetcher fra api "confirm-booking" */
//   fetch("/api/confirm-booking", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(payload),
//   })
//     .then((res) => res.json())
//     .then((data) => console.log(data, "hej"));

//   console.log("THIS IS PAYLOAD", payload);
// }

// const booking = document.getElementById("booking-skema");

// if (booking) {
//   const bookingFormDataValues = getFormfromData(booking);
//   console.log("this is", booking, bookingFormDataValues);
//   booking.addEventListener("submit", function (e) {
//     e.preventDefault();
//     console.log(booking, bookingFormDataValues, "gotten");
//   });
// } else {
//   console.error("Element with ID 'booking-skema' not found.");
// }

// // vars to get booking form from html.
// const booking = document.getElementById("booking-skema");

// const bookingFormDataValues = getFormfromData(booking);
// console.log("this is", booking, bookingFormDataValues);
//BOOKING CONFIRMATION SEND PAYLOAD TO DB
// booking.removeEventListener("submit", confirmReservation);
// setTimeout(function () {
//   console.log("set time");
// }, 100);

// booking.addEventListener("onsubmit", confirmReservation);

// function confirmReservation(e) {
//   console.log("here we are");
//   e.preventDefault();

//   const isValid = validateForm();
//   // console.log(isValid);
//   if (isValid) {
//     console.log("form is valid");
//   }

//   console.log("this is payload", payload);
// }
// //VALIDATION OF FORM
// function validateForm() {
//   //personal info validation
//   // array of validation rules
//   const validationRules = [
//     { field: "#fornavn", errorMessage: "Indtast dit fornavn" },
//     { field: "#efternavn", errorMessage: "Indtast dit efternavn" },
//     { field: "#email", errorMessage: "Indtast din email" },
//     { field: "#behandlingstype", errorMessage: "Vælg en behandling" },
//     { field: "#behandler", errorMessage: "Vælg en behandler" },
//   ];

//   for (const rule of validationRules) {
//     const fieldValue = document.querySelector(rule.field).value.trim();
//     //check if any fields are empty
//     if (fieldValue === "") {
//       console.log(rule.field, rule.errorMessage);
//       showErrorScrollTo(rule.field, rule.errorMessage);
//       return false;
//     }
//     //check for valid mail
//     else if (
//       rule.field === "#email" &&
//       !fieldValue.match(/^[^s@]+@[^s@]+.[^s@]+$/)
//     ) {
//       showErrorScrollTo(rule.field, "Indtast en gyldig email");
//       return false;
//     } else if (rule.field.tagName === "SELECT" && fieldValue === "none") {
//       // Display an error message and scroll to the input field
//       showErrorAndScroll(rule.field, rule.errorMessage);
//       return false;
//     }
//   }
//   return true;
// }

// function showErrorScrollTo(selector, errorMessage) {
//   const inputElement = document.querySelector(selector);
//   const errorElement = document.createElement("span");

//   errorElement.className = "error";
//   errorElement.textContent = errorMessage;

//   //insert error after input field
//   inputElement.insertAdjacentElement("afterend", errorElement);

//   //scroll to field
//   inputElement.scrollIntoView({ behavior: "smooth", block: "center" });
// }

// //clear messages
// function clearErrorMessages() {
//   // Remove all error messages from the DOM
//   const errorMessages = document.querySelectorAll(".error");
//   errorMessages.forEach((errorMessage) => errorMessage.remove());
// }
