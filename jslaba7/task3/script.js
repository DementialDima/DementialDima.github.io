let num1;
let num2;
const aboutPlayer = {
  countTrue: 0,
  countFalse: 0,
  countQuestions: 0,
  answearedQuestion: false,
};
const questionParagraph = document.querySelector(".question");

const resultParagraph = document.querySelector(".statistic");

const form = document.querySelector("form");

document.addEventListener("DOMContentLoaded", () => {
  setNewValue();
});

function setRandomValues() {
  const percentProgress =
    aboutPlayer.countTrue != 0
      ? Math.floor(aboutPlayer.countTrue * 100) / aboutPlayer.countQuestions
      : 0;

  resultParagraph.textContent = `Загальний рахунок ${percentProgress} (${aboutPlayer.countTrue} правильних відповідей з ${aboutPlayer.countQuestions})`;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

form.variantAnswear.forEach((el) => {
  el.addEventListener("click", (e) => {
    if (aboutPlayer.answearedQuestion) return;

    if (el.value == num1 * num2) {
      aboutPlayer.countTrue += 1;
      form.lastElementChild.textContent = "Правильно";
    } else {
      form.lastElementChild.textContent = `Не правильно, правильний варіант ${
        num1 * num2
      }`;
      aboutPlayer.countFalse += 1;
    }

    aboutPlayer.countQuestions++;
    aboutPlayer.answearedQuestion = true;
    setRandomValues();
  });
});

form.nextAnswear.addEventListener("click", () => {
  setNewValue();
  aboutPlayer.answearedQuestion = false;
  form.lastElementChild.textContent = "";
  form.reset();
});

function setNewValue() {
  num1 = getRandomInt(1, 9);
  num2 = getRandomInt(1, 9);

  let trueAnswear = num1 * num2;

  questionParagraph.textContent = `${num1} X ${num2}`;

  const answears = [
    trueAnswear,
    getRandomInt(trueAnswear - 10, trueAnswear - 1),
    getRandomInt(trueAnswear + 1, trueAnswear + 10),
    getRandomInt(trueAnswear + 1, trueAnswear + 5),
  ];
  shuffle(answears);
  trueAnswear = 0;
  form.variantAnswear.forEach((el) => {
    el.nextElementSibling.textContent = answears[trueAnswear];
    el.value = answears[trueAnswear];
    trueAnswear++;
  });
}

function shuffle(arr) {
  const count = getRandomInt(3, 24);

  for (let k = 0; k < count; k++) {
    let lastElement = arr[arr.length - 1];
    for (let i = arr.length - 1; i > 0; i--) {
      arr[i] = arr[i - 1];
    }
    arr[0] = lastElement;
  }
}
