let imagesList = [
  {
    url: "https://travel.24tv.ua/resources/photos/news/202012/1493985_14769241.jpg?202012201109&w=768&h=474&fit=cover",
    title: "Тадж-Махал",
    description: "Індія",
  },
  {
    url: "https://travel.24tv.ua/resources/photos/news/202012/1493985_14769235.jpg?202012200150&w=768&h=511&fit=cover",
    title: "Колізей",
    description: "Італія",
  },
  {
    url: "https://travel.24tv.ua/resources/photos/news/202012/1493985_14769237.jpg?202012200401&w=768&h=432&fit=cover",
    title: "Чичен-Іца",
    description: "Мексика",
  },
];

function initPhotoRotator(identificator, list) {
  let i = 0;

  const rotator = document.getElementById(identificator);

  const headerRotator = document.createElement("div");
  const numberPhotoFromList = document.createElement("p");
  const image = document.createElement("img");

  const leftSide = document.createElement("div");
  const rightSide = document.createElement("div");

  const btnPrev = document.createElement("button");
  const btnNext = document.createElement("button");
  const titleParagraph = document.createElement("p");
  const descriptionParagraph = document.createElement("p");

  headerRotator.classList.add("container_picture");
  leftSide.classList.add("algin_items_center");
  rightSide.classList.add("algin_items_center");
  titleParagraph.classList.add("title");
  descriptionParagraph.classList.add("description");

  numberPhotoFromList.textContent = `Фотографія ${i + 1} з ${list.length}`;
  titleParagraph.textContent = list[0].title;
  descriptionParagraph.textContent = list[0].description;
  btnPrev.textContent = "Назад";
  btnNext.textContent = "Вперед";
  image.src = list[0].url;

  btnPrev.disabled = true;

  btnPrev.addEventListener("click", () => {
    btnNext.disabled = false;
    i--;

    if (i == 0) btnPrev.disabled = true;
    numberPhotoFromList.textContent = `Фотографія ${i + 1} з ${list.length}`;
    titleParagraph.textContent = list[i].title;
    descriptionParagraph.textContent = list[i].description;

    image.src = list[i].url;
  });

  btnNext.addEventListener("click", () => {
    btnPrev.disabled = false;
    i++;
    if (i == list.length - 1) btnNext.disabled = true;

    numberPhotoFromList.textContent = `Фотографія ${i + 1} з ${list.length}`;

    titleParagraph.textContent = list[i].title;
    descriptionParagraph.textContent = list[i].description;

    image.src = list[i].url;
  });

  leftSide.appendChild(btnPrev);
  rightSide.appendChild(btnNext);

  headerRotator.appendChild(numberPhotoFromList);
  headerRotator.appendChild(image);
  headerRotator.appendChild(titleParagraph);
  headerRotator.appendChild(descriptionParagraph);

  rotator.appendChild(leftSide);
  rotator.appendChild(headerRotator);
  rotator.appendChild(rightSide);
}

initPhotoRotator("rotator", imagesList);
