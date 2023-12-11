window.addEventListener("DOMContentLoaded", () => flipAnimationBtn());
const cards = document.querySelectorAll(".slide");

function flipCard() {
  this.classList.toggle("flip");
  console.log("toggle flip");
}

function flipAnimationBtn() {
  const cardsBtn = document.querySelectorAll(".overlay_btn");
  console.log(cardsBtn);
  cardsBtn.forEach((button) =>
    button.addEventListener("click", () => {
      flipCard();
    })
  );
}
