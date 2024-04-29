const panels = document.querySelectorAll(".headpanel");
panels.forEach((headpanel) => {
  headpanel.addEventListener("click", () => {
    removeavtiveclasses();
    headpanel.classList.add("active");
  });
});
function removeavtiveclasses() {
  panels.forEach((headpanel) => {
    headpanel.classList.remove("active");
  });
}
