const numbers = [
  {
    3: {
      row1: [true, true, true],
      row2: [false, false, true],
      row3: [false, true, false],
      row4: [false, false, true],
      row5: [true, true, true],
    },
    4: {
      row1: [true, false, true],
      row2: [true, false, true],
      row3: [true, true, true],
      row4: [false, false, true],
      row5: [false, false, true],
    },
    5: {
      row1: [true, true, true],
      row2: [true, false, false],
      row3: [true, true, true],
      row4: [false, false, true],
      row5: [true, true, true],
    },
    6: {
      row1: [true, true, true],
      row2: [true, false, false],
      row3: [true, true, true],
      row4: [true, false, true],
      row5: [true, true, true],
    },
    7: {
      row1: [true, true, true],
      row2: [false, false, true],
      row3: [false, true, false],
      row4: [false, true, false],
      row5: [false, true, false],
    },
  },
];
let correctValue = "";
const inputCaptcha = document.querySelector("input");

document.addEventListener("DOMContentLoaded", () => {
  startInitializeCaptcha(getRandomInt(1, 3));
});

inputCaptcha.addEventListener("keyup", (e) => {
  if (e.target.value.length != correctValue.length) return;

  let paragraphResult = e.target.nextElementSibling;
  paragraphResult.removeAttribute("class");
  
  if (correctValue == e.target.value) {
    paragraphResult.textContent = "Правильно";
    paragraphResult.classList.add("correct");
  } else {
    paragraphResult.textContent = "Не правильно";
    paragraphResult.classList.add("incorrect");
  }
  console.log("key");
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createCaptcha(selectedNumber) {
  let mainContainer = document.createElement("div");
  mainContainer.classList.add("row");
  let res;

  for (let i = 0; i < numbers.length; i++) {
    res = numbers[i][selectedNumber];
  }

  for (let key in res) {
    let containerForSpans = document.createElement("div");

    res[key].forEach((el) => {
      let span = document.createElement("span");

      if (el) span.classList.add("selected");

      containerForSpans.appendChild(span);
    });

    mainContainer.appendChild(containerForSpans);
  }
  document.querySelector("#main").appendChild(mainContainer);
}

function startInitializeCaptcha(countNumbers) {
  for (let i = 0; i < countNumbers; i++) {
    let randomNumber = getRandomInt(3, 7);

    correctValue += randomNumber;
    createCaptcha(randomNumber);
  }
  console.log(correctValue);
}
