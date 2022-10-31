const field = document.querySelector(".field");
const coordinates = field.getBoundingClientRect();
const ball = document.querySelector("img");
console.dir(coordinates);

field.addEventListener("click", (e) => {
  if (
    e.clientX > coordinates.x &&
    e.clientX < coordinates.x + coordinates.width
  ) {
    let centerCoordinateBallX = e.clientX - coordinates.x - ball.width / 2;
    let centerCoordinateBallY = e.clientY - coordinates.y - ball.height / 2;

     

    if (centerCoordinateBallX < 0) {
      centerCoordinateBallX = 0;
    }

    if (
      centerCoordinateBallY >
      coordinates.bottom - coordinates.top - ball.height
    ) {
      
      centerCoordinateBallY = coordinates.height - ball.height;
    }

    if (e.clientX > coordinates.right - ball.width / 2) {
      centerCoordinateBallX = coordinates.width - ball.width;
    }
    

    if (centerCoordinateBallY < 0) {
      centerCoordinateBallY = 0;
    }

    ball.style.marginLeft = centerCoordinateBallX + "px";
    ball.style.marginTop = centerCoordinateBallY + "px";
  }
});
