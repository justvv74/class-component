import СreateElement from "./createElement.js";

const firstCard = document.getElementById("firstCard");
const secondCard = document.getElementById("secondCard");
const thirdCard = document.getElementById("thirdCard");
const fourthCard = document.getElementById("fourthCard");

// Создаём кнопку с основными параметрами и модификаторами. По клику запрашивает данные с внешнего Api.
const firstBtn = new СreateElement({
  template: "button",
  text: "Нажми меня",
  options: "coloredBtn",
  mods: {
    padding: "20px",
  },
  event: "getStarWarsName",
});
firstCard.append(firstBtn.getElement());

// Создаём параграф с основными параметрами и модификатором
const secondBtn = new СreateElement({
  template: "p",
  text: "Я параграф",
  options: "card__text",
  mods: {
    padding: "10px",
    textAlign: "right",
  },
});
secondCard.append(secondBtn.getElement());

// Создаём кнопку с альтернативными основными параметрами. По клику меняет цвет в родительском блоке
const thirdBtn = new СreateElement({
  template: "button",
  text: "Клик",
  options: "borderBtn",
  event: "changeColor",
});
thirdCard.append(thirdBtn.getElement());

// Создаём самый простой вариант кнопки
const fourthBtn = new СreateElement({ template: "button", text: "Клик" });
fourthCard.append(fourthBtn.getElement());
