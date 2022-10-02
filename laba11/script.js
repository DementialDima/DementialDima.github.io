let windowShowForm = document.querySelector(".modal-window");

let btnByTicket = document.getElementById("concert-map");

let sendFormBtn = document.getElementById("sendForm");

let mainForm = document.querySelector("form");

btnByTicket.addEventListener("click", (event) => {
    event.preventDefault()
    let element = event.target;

    if (element.classList.contains("button")) {
        windowShowForm.style.display = "block";
    }
});

sendFormBtn.addEventListener("click", (event) => {
    event.preventDefault()
    if (!confirm("Відправити дані?")) {
        event.preventDefault();
        alert("Дані не відправлено");
        mainForm.reset();
        windowShowForm.style.display = "none";
    }
});
