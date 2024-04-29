const circles = document.querySelectorAll(".circle");
const progress = document.querySelector("#progress");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const actives = document.querySelectorAll(".active");

let currentactive = 1;

next.addEventListener("click", () => {
  currentactive++;
  if (currentactive > circles.length) {
    currentactive = circles.length;
  }
  update();
});

prev.addEventListener("click", () => {
  currentactive--;
  if (currentactive < 1) {
    currentactive = 1;
  }
  update();
});

function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentactive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  if (currentactive === 1) {
    prev.disabled = true;
  } else if (currentactive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}

progress.style.width =
  ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
