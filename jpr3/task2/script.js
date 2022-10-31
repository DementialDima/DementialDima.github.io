const slideLeftBtn = document.getElementById("left-slide");
const slideRightBtn = document.getElementById("right-slide");
const listImages = document.querySelector("ul");
const widthCarousel =
  document.querySelector(".carousel").clientWidth *
  (listImages.children.length - 1);

let step = 0;

slideLeftBtn.addEventListener("click", (e) => {
  if (Math.abs(step) == widthCarousel) {
    step = 0;
  } else step -= 800;
  listImages.style.marginLeft = step + "px";
});

slideRightBtn.addEventListener("click", (e) => {
  step += 800;

  if (step > 0) {
    step = widthCarousel * -1;
  }
  listImages.style.marginLeft = step + "px";
});
