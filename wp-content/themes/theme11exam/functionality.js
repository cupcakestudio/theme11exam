// const slide = document.getElementsByClassName("slide");
const allSlides = document.querySelectorAll(".slide");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

const pagination_container = document.getElementsByClassName("pagination");
const slides_pagination = document.getElementById("slides_pagination");
const pagination_numbers = document.getElementById("pagination-numbers");
let currentPage = 1; //current page
let paginationLimit = 1; // show 3 items at one page - How many slides are shown/visible on on the current page
let pageLength = Math.ceil(allSlides.length / paginationLimit); // Number of pages available.

//handle next button pagination

nextButton.addEventListener("click", () => {
  setCurrentPage(currentPage + 1);
  //if current page is larger than pagelength +1 because we also want to be able to see pagelength's content
  if (currentPage >= pageLength + 1) {
    setCurrentPage(1); // Reset to the first page
  }
});
//handle prev button pagination

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

  // Add click event listener to pagination dot
  pageNumber.addEventListener("click", () => {
    setCurrentPage(index);
  });
}

// get pagination number trough a forloop function
function getPaginationNumbers() {
  pagination_numbers.innerHTML = ""; // Clear existing pagination dots

  const numberOfDots = Math.ceil(allSlides.length / paginationLimit);

  for (let i = 1; i <= numberOfDots; i++) {
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
window.addEventListener("DOMContentLoaded", () => {
  getPaginationNumbers();
  setCurrentPage(1);
  console.log("this is current page", currentPage);

  // Check screen size on window resize
  window.addEventListener("resize", () => {
    handleWindowSize();
    console.log("checks screen size");
  });

  handleWindowSize();

  function resetCarousel() {
    pagination_numbers.innerHTML = ""; // Clear existing pagination dots
    // getPaginationNumbers();
    setCurrentPage(1);

    //update the pagelength based on the screensize, only if pageLength changes
    const newPageLength = Math.ceil(allSlides.length / paginationLimit);
    if (newPageLength !== pageLength) {
      pageLength = newPageLength; // set pageLength to be new page length
      pagination_numbers.innerHTML = ""; //reset the dots
      getPaginationNumbers();
    }
  }

  function handleWindowSize() {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 700) {
      // Mobile or smaller screens: Show one slide at a time
      paginationLimit = 1; // Change the number of slides shown
    } else {
      // Larger screens: Show multiple slides
      paginationLimit = 3; // Change the number of slides shown
    }
    resetCarousel();
  }

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

//FLIPCARDS

document.addEventListener("DOMContentLoaded", () => {
  // const cards = document.querySelectorAll(".slide");

  flipAnimationBtn();
});
function flipCard(card) {
  card.classList.toggle("flipped");
  console.log("toggle flipped");
}

function flipAnimationBtn() {
  const slideBtn = document.querySelectorAll(".overlay_btn");
  const back_arrows = document.querySelectorAll(".arrow_backside");

  console.log(slideBtn);

  slideBtn.forEach((button) =>
    button.addEventListener("click", () => {
      /* console.log("clicked"); */
      const slide = button.closest(".slide");
      if (slide) {
        flipCard(slide);
      }
    })
  );

  //flip back
  back_arrows.forEach((button) => {
    button.addEventListener("click", () => {
      console.log("flip back");
      const slide = button.closest(".slide");
      if (slide) {
        flipCard(slide);
      }
    });
  });
}

// function flipBack() {

// }
