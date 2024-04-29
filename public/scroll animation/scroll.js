const cards = document.querySelectorAll(".card");
const show = document.querySelectorAll(".show");

addEventListener("scroll", () => {
  const triggerBottom = innerHeight / 1.15;
  //   console.log(triggerBottom);
  cards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;
    // console.log(cardTop);
    if (cardTop < triggerBottom) {
      card.classList.add("show");
    } else {
      card.classList.remove("show");
    }
  });
});
