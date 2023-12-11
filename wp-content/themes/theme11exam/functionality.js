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
  //if current page is larger than pagelength +1 because we also want to be able to see pagelength's content
  if (currentPage >= pageLength + 1) {
    setCurrentPage(1); // Reset to the first page
  }
});
// //handle prev button pagination

prevButton.addEventListener("click", () => {
  if (currentPage <= 1) {
    setCurrentPage(pageLength); //Reset to last page
  } else {
    setCurrentPage(currentPage - 1);
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
// set pagination dots active
function handleActiveDot() {
  document.querySelectorAll(".pagination_dot").forEach((button) => {
    button.classList.remove("active");
    button.classList.remove("active_dot");
    const pageIndex = Number(button.getAttribute("page_index"));

    if (pageIndex === currentPage) {
      button.classList.add("active");
      button.classList.add("active_dot");

      console.log("active dot");
    }
  });
}

//when a button is pressed, change the content in carousel, with the list item
//set the curent page
function setCurrentPage(pageNumber) {
  currentPage = pageNumber;

  //handle when a user clicks on an arbitrary page-button (en cirkel i bunden)
  handleActiveDot();
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

  // makes pagination dots clickable
  document.querySelectorAll(".pagination_dot").forEach((button) => {
    const pageIndex = Number(button.getAttribute("page_index"));

    if (pageIndex) {
      button.addEventListener("click", () => {
        setCurrentPage(pageIndex);
        console.log("this is current page", currentPage);
      });
    }
  });
});
