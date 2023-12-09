const slide_container = document.getElementsByClassName("slide_container");
const slide = document.getElementsByClassName("slide");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const pagination_container = document.getElementsByClassName("pagination");

let currentPage = 1; //current page
const maxPages = 3; //max number of pagination slides

//handle next
nextButton.addEventListener("click", () => {
  setCurrentPage(currentPage + 1);
  console.log("next", currentPage);
  if (currentPage > maxPages) {
    currentPage = 0;
    console.log(currentPage);
  }
});

//handle prev
prevButton.addEventListener("click", () => {
  setCurrentPage(currentPage - 1);
  console.log("prev", currentPage);
  if (currentPage < 1) {
    currentPage = maxPages;
    console.log(currentPage);
  }
});

//when a button is pressed, change the content in carousel, with the list item

//set the curent page
function setCurrentPage(pageNumber) {
  currentPage = pageNumber;
}
