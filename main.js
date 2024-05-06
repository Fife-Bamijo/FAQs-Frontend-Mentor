const summaryEls = document.querySelectorAll("summary");
const iconEl = document.querySelectorAll(".icon-image");

summaryEls.forEach(function (summaryEl, index) {
  let clicked = false;

  summaryEl.addEventListener("click", function () {
    clicked = !clicked;

    if (clicked) {
      iconEl[index].src = "assets/images/icon-minus.svg";
    } else {
      iconEl[index].src = "assets/images/icon-plus.svg";
    }
  });
});
