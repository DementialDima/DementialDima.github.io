const text = "Hello friend".split("");
const outputElement = document.getElementById("showText");
let i = 0;

let idInterval = setInterval(() => {
  outputElement.textContent = outputElement.textContent + text[i];
  i++;
}, 1000);

setTimeout(() => {
  clearInterval(idInterval);
}, text.length * 1000);
