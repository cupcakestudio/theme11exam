const slide = document.getElementsByClassName("slide");
const allSlides = document.querySelectorAll("li");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

const pagination_container = document.getElementsByClassName("pagination");
const slides_pagination = document.getElementById("slides_pagination");
const pagination_numbers = document.getElementById("pagination-numbers");
let currentPage = 1; //current page
const paginationLimit = 3; // show 3 items at one page - How many slides are shown/visible on on the current page
const pageLength = Math.ceil(allSlides.length / paginationLimit); // Number of pages available.

//handle next button pagination
nextButton.addEventListener("click", () => {
  setCurrentPage(currentPage + 1);
  console.log("next", currentPage);
  //set page  to first page
  if (currentPage >= paginationLimit) {
    currentPage = 1;
    console.log(currentPage);
  }
});

//handle prev button pagination
prevButton.addEventListener("click", () => {
  setCurrentPage(currentPage - 1);
  console.log("prev", currentPage);
  //set page  to last page
  if (currentPage <= paginationLimit - 2) {
    currentPage = paginationLimit;
    console.log(currentPage);
  }
});

// Function to make dots possible to click through
function appendPagination(index) {
  const pageNumber = document.createElement("button");
  pageNumber.className = "pagination_dot";
  pageNumber.innerHTML = index;
  pageNumber.setAttribute("page_index", index); // sets an attribute to the html element
  pageNumber.setAttribute("aria_label", "page" + index); // sets an attribute to the html element

  pagination_numbers.appendChild(pageNumber);
}

// get pagination number trough a forloop function
function getPaginationNumbers() {
  for (let i = 1; i <= pageLength; i++) {
    appendPagination(i);
  }
}

//when a button is pressed, change the content in carousel, with the list item
//set the curent page
function setCurrentPage(pageNumber) {
  currentPage = pageNumber;

  //handle when a user clicks on an arbitrary page-button (en cirkel i bunden)

  // Defines a range for how many slides is shown at a time

  const prevRange = (pageNumber - 1) * paginationLimit;
  const currRange = pageNumber * paginationLimit;

  // loop trough all slides and hide other slides
  allSlides.forEach((item, index) => {
    item.classList.add("hidden");
    if (index >= prevRange && index < currRange) {
      item.classList.remove("hidden");
    }
  });
  console.log("this is current page", currentPage);
}

// waits for the page to load the content before making functionality available
window.addEventListener("load", () => {
  getPaginationNumbers();
  setCurrentPage(1);
  console.log("this is current page", currentPage);
});

// makes pagination dots clickable
/* document.querySelectorAll(""); */
