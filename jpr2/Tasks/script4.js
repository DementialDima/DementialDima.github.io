let bet = +prompt("Введіть ставку");

while (bet <= 0 || isNaN(bet)) {
  alert("Введіть коректну суму");
  bet = +prompt("Введіть ставку");
}

setTimeout(() => {
  if (randNumber <= 0) document.write("You don't win");
  else document.write(`You win ${bet * randNumber}`);
}, 1000);

const randNumber = Math.floor(Math.random() * (5 - -5 + 1) - 5);
console.log(randNumber);
