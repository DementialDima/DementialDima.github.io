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

form.check.addEventListener("click", () => {
  if (aboutPlayer.answearedQuestion) return;

  if (+form.answear.value == num1 * num2) {
    aboutPlayer.countTrue += 1;
    form.lastElementChild.textContent = "Правильно";
  } else {
    aboutPlayer.countFalse += 1;
    form.lastElementChild.textContent = `Не правильно, правильна відповідь ${
      num1 * num2
    }`;
  }
  aboutPlayer.answearedQuestion = true;
  aboutPlayer.countQuestions += 1;
  setRandomValues();
});
form.nextAnswear.addEventListener("click", () => {
  setNewValue();
  aboutPlayer.answearedQuestion = false;
  form.lastElementChild.textContent = "";
});

function setNewValue() {
  num1 = getRandomInt(1, 9);
  num2 = getRandomInt(1, 9);
  questionParagraph.textContent = `${num1} X ${num2}`;
}
