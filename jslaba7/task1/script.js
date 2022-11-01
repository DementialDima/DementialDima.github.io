const farangeitTemp = document.getElementById("farangeit");
const celsiumTemp = document.getElementById("celsium");

farangeitTemp.addEventListener("input", (e) => {
  celsiumTemp.value = ((+e.target.value - 32) * (5 / 9)).toFixed(2);
});

celsiumTemp.addEventListener("input", (e) => {
  farangeitTemp.value = (+e.target.value * (9 / 5) + 32).toFixed(2);
});
