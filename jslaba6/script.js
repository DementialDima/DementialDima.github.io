//10. За допомогою javascript помістити 1-й абзац в елемент таблиці No7; другий - в комірку
//таблиці No8; третій - в клітинку таблиці No9. Заголовки помістити відповідно в 1,2 і 3 комірки,
//які об'єднати з комірками 4,5,6 відповідно.

let elementP = document.querySelectorAll("p");
let btnChangePositionElements = document.getElementById("btn");
let table = document.querySelector("table");
let elementH = document.querySelectorAll("h2");

btnChangePositionElements.addEventListener("click", () => {
    let rows = table.tBodies[0].rows;
    
    for (let i = 0; i < rows.length; i++) {
       
        rows[0].cells[i].insertAdjacentElement("afterbegin", elementH[i]);
        rows[2].cells[i].insertAdjacentElement("afterbegin", elementP[i]);
    }

});