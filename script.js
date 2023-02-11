// const panels = document.querySelectorAll(".panel");
const panels = $(".panel");

$(".panel").click(function () {
  $(".panel").not(this).removeClass("active");
  $(this).toggleClass("active");
});

// $(".panel").click(function () {
//   $(this).removeClass("active");
// });

// panels.forEach((panel) => {
//   panel.addEventListener("click", () => {
//     removeActiveClasses();
//     panel.classList.add("active");
//   });
// });

// function removeActiveClasses() {
//   panels.forEach((panel) => {
//     panel.classList.remove("active");
//   });
// }
