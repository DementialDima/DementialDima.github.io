let btnsHide = document.querySelectorAll(".wrapper_item");

const mainContainer = document.querySelector(".wrapper");

mainContainer.addEventListener("click", (e) => {
  let clickedElement = e.target;
  if (clickedElement.classList.contains("btn")) {
    clickedElement.parentElement.style.display = "none";
  }
});
