window.addEventListener("DOMContentLoaded", () => {
  flipAnimationBtn();
  flipBack(); // Call the flipBack function to set up the click event for flip back
});

const cards = document.querySelectorAll(".slide");

function flipCard(card) {
  card.classList.toggle("flipped");
  console.log("toggle flipped");
}

function flipAnimationBtn() {
  const slideBtn = document.querySelectorAll(".overlay_btn");
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
}

//flip back
function flipBack() {
  const back_arrows = document.querySelectorAll(".arrow_backside");
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
