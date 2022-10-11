// Task 1
document.write("<h1>PR1</h1>");
let first = ["a", "b", "c"];
let second = [1, 2, 3];
document.write("<h2>Завдання 1</h2>");
document.write(`<span>Початковий масив ${first.toString()}</span>`);

document.write(
  `<br><span>Результат об'єднання: ${first.concat(second).toString()}</span>`
);
// Task 2
document.write("<h2>Завдання 2</h2>");
let alpha = ["a", "b", "c"];
document.write(`<span>Початковий масив ${alpha.toString()}</span>`);
alpha.push(1, 2, 3);
document.write(
  `<br><span>Результат додавання 1,2,3: ${alpha.toString()}</span>`
);
// Task 3
document.write("<h2>Завдання 3</h2>");
let arr1 = [1, 2, 3];
document.write(`<span>Початковий масив ${arr1.toString()}</span>`);
document.write(`<br><span>Реверс: ${arr1.reverse().toString()}</span>`);
// Task 4
document.write("<h2>Завдання 4</h2>");
let arr4 = ["js", "css", "jq"];
document.write(
  `<br>Останній елемент масиву ${arr4.toString()} : ${arr4[arr4.length - 1]}`
);

// Task 5
document.write("<h2>Завдання 5</h2>");
let arr5 = [1, 2, 3, 4, 5];
let newArr5 = arr5.splice(3, 2);
document.write(
  `<span>Початковий масив [1, 2, 3, 4, 5] <br>Новий масив : ${newArr5.toString()}</span>`
);

// Task 6
document.write("<h2>Завдання 6</h2>");
let arrSix = [1, 2, 3, 4, 5];
arrSix.splice(1, 2);
document.write(
  `<span>Початковий масив [1, 2, 3, 4, 5] <br>Новий масив : ${arrSix.toString()}</span>`
);

// Task 7
document.write("<h2>Завдання 7</h2>");

let arr7 = [1, 2, 3, 4, 5];
let newArr7 = arr7.splice(1, 3);

document.write(
  `<span>Початковий масив [1, 2, 3, 4, 5] <br>Новий масив : ${newArr7.toString()}</span>`
);
// Task 8
document.write("<h2>Завдання 8</h2>");
let arr8 = [1, 2, 3, 4, 5];
arr8.splice(3, 0, "a", "b", "c");

document.write(
  `<span>Початковий масив [1, 2, 3, 4, 5] <br>Новий масив : ${arr8.toString()}</span>`
);
// Task 9
document.write("<h2>Завдання 9</h2>");

let arr9 = [1, 2, 3, 4, 5];
arr9.splice(1, 0, "a", "b");
arr9.splice(6, 0, "c");
arr9.splice(8, 0, "e");

document.write(
  `<span>Початковий масив [1, 2, 3, 4, 5] <br>Новий масив : ${arr9.toString()}</span>`
);
// Task 10
document.write("<h2>Завдання 10</h2>");
let arr10 = [3, 4, 1, 2, 7];
arr10.sort((a, b) => {
  if (a >= b) return 1;
  else if (a <= b) return -1;
  else return 0;
});
document.write(
  `<span>Початковий масив [3, 4, 1, 2, 7] <br>Новий масив : ${arr10.toString()}</span>`
);
// Task 11
document.write("<h2>Завдання 11</h2>");
const obj1 = {
  js: "test",
  jq: "hello",
  css: "world",
};
document.write("Масив ключів об'єкта: " + Object.keys(obj1).toString());

// Task 12
document.write("<h2>Завдання 12</h2>");
let str1 = "aaa@bbb@ccc";
document.write("Рядок 'aaa@bbb@ccc' після заміни: " + str1.replace(/@/g, "!"));

// Task 13
document.write("<h2>Завдання 13</h2>");
let date = "2025-12-31";
date = date.split("-").reverse().join("/");
document.write("Перетворення дати '2025-12-31' =" + date);
// Task 14
document.write("<h2>Завдання 14</h2>");
let str2 = "я вчу javascript!";
const arr14 = str2.split("");
document.write(
  ` Дано рядок 'я вчу javascript!', записано в масив кожен символ  ${arr14.toString()}`
);

// Task 15
document.write("<h2>Завдання 15</h2>");
let arr15 = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < arr15.length; i++) {
  let x = "";
  for (let j = 0; j < i + 1; j++) {
    x += "x";
  }
  arr15[i] = x;
}
document.write(
  "Заповнили масив індекс елемента= к-сть символів x:<br>Результат на основі масиву з 8-ми елементів " +
    arr15.toString()
);
// Task 16
document.write("<h2>Завдання 16</h2>");
function arrayFill(value, lengthArray) {
  return new Array(lengthArray).fill(value);
}
document.write(
  "Масив розміром 10 елементів заповнено текстом ab:   " +
    arrayFill("ab", 10).toString()
);

// Task 17
document.write("<h2>Завдання 17</h2>");
let arr17 = [
  [
    [1, 2],
    [3, 4],
  ],
  [
    [5, 6],
    [7, 8],
    [5, 6],
    [7, 8],
    [5, 6],
    [7, 8],
  ],
];
let sum = 0;
arr17.forEach((el1) => {
  el1.forEach((el2) => {
    el2.forEach((el3) => {
      sum += el3;
    });
  });
});
document.write("Сума елементів тривимірного масиву :" + sum);

// Task 18
document.write(`<h2>Завдання 18</h2><br>Масив з елементами "Jazz","Blues" `);
let styles = ["Jazz", "Blues"];
document.write("<br>Додано елемент Rock-n-Roll");
styles.push("Rock-n-Roll");
styles[Math.ceil(styles.length / 2)] = "Classics";
document.write("<br>Видалено перший елемент:" + styles.shift());
styles.unshift("Rap", "Reggae");
document.write("<br> Поточні елементи масиву " + styles.toString());

// Task 19
document.write("<h2>Завдання 19</h2>");
let str19 = "-webkit-transition";
function camelize(str) {
  str = str.split("-");

  for (let i = 1; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }

  return str.join("");
}
document.write(
  `Функція, яка перетворює рядки типу “my-short-string” в  “myShortString”<br>Результат на основі прикладу -webkit-transition  ${camelize(
    str19
  )}`
);

// Task 20
document.write("<h2>Завдання 20</h2>");
const filterRange = (arr, a, b) => {
  return arr.filter((el) => el >= a && el <= b);
};
document.write(
  "Пошук в масиві [8, 2, 3, 4, 5, 9, 8, 42, 21, 14] елементів >=4 і  <=9 :  "
);
document.write(filterRange([8, 2, 3, 4, 5, 9, 8, 42, 21, 14], 4, 9));

// Task 21
document.write("<h2>Завдання 21</h2>");
const copySorted = (arr) => {
  let copyArray = arr.slice();
  return copyArray.sort((a, b) => {
    if (a >= b) return 1;
    else if (a <= b) return -1;
    else return 0;
  });
};
let arr21 = ["HTML", "JavaScript", "CSS"];
document.write(`<br>Початковий масив ${arr21.toString()}`);
document.write(`<br>Відсортована копія масиву: ${copySorted(arr21)}`);

// Task 22
document.write("<h2>Завдання 22</h2>");
let Ivan = { name: "Іван", age: 25 };
let Petro = { name: "Петро", age: 30 };
let Mariya = { name: "Марія", age: 28 };

const sortByAge = (users) => {
  return users.sort((a, b) => {
    if (a.age > b.age) return 1;
    else if (a.age < b.age) return -1;
    else return 0;
  });
};
document.write(
  `Сортування масиву об'єктів за полем age:  ${JSON.stringify(
    sortByAge([Petro, Ivan, Mariya])
  )}`
);

// Task 23
document.write("<h2>Завдання 23</h2>");
const getAverageAge = (users) => {
  let ages = 0;
  users.forEach((user) => (ages += user.age));
  return Math.ceil(ages / users.length);
};
document.write(
  `Функція, яка повертає середній вік на основі масиву об'єктів : ${JSON.stringify(
    getAverageAge([Ivan, Petro, Mariya])
  )} `
);

// Task 24
document.write("<h2>Завдання 24</h2>");
let users = [
  { id: "іван", name: "Іван Іванко", age: 20 },
  { id: "ганна", name: "Ганна Іванко", age: 20 },
  { id: "петро", name: "Петро Петренко", age: 20 },
];

const groupById = (arr) => {
  return arr.reduce((acc, el) => {
    acc[el.id] = el;
    return acc;
  }, {});
};
document.write(
  `Функція groupById(arr), яка створює з масиву об’єкт із ключом id та елементами масиву як значеннями
   ${JSON.stringify(groupById(users))}`
);

// Task 25
document.write("<h2>Завдання 25</h2>");
const salaries = {
  Іван: 100,
  Петро: 300,
  Марія: 250,
};

const sumSalaries = (salaries) => {
  let arrSalaries = Object.values(salaries);
  if (arrSalaries.length == 0) return 0;
  sum = 0;
  for (key of arrSalaries) {
    sum += key;
  }
  return sum;
};
document.write(
  `Функція sumSalaries(salaries), що повертає суму всіх зарплат =${sumSalaries(
    salaries
  )}`
);
