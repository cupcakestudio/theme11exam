window.addEventListener("DOMContentLoaded", () => flipAnimationBtn());
const cards = document.querySelectorAll(".slide");

function flipCard(card) {
  card.classList.toggle("flipped");
  console.log("toggle flipped");
  // if ("flipped") {
  //   // const hiddenContent = card.querySelector(".back");

  //   // hiddenContent.style.display =
  //   //   hiddenContent.style.display === "none" ? "none" : "flex";

  // }
  // if (!"flipped") {
  //   console.log("back to front");
  // }
}

function flipAnimationBtn() {
  const slideBtn = document.querySelectorAll(".overlay_btn");
  console.log(slideBtn);
  slideBtn.forEach((button) =>
    button.addEventListener("click", () => {
      console.log("clicked");
      const slide = button.closest(".slide");
      if (slide) {
        flipCard(slide);
      }
    })
  );
}
