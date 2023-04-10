export default class СreateElement {
  constructor(element) {
    this.template = element.template;
    this.options = element.options;
    this.mods = element.mods;
    this.text = element.text;
    this.event = element.event;
  }

  changeColor(el) {
    el.parentElement.classList.toggle("card_color");
  }

  getStarWarsName(el) {
    if (document.querySelector(".card__text_name")) {
      document.querySelector(".card__text_name").remove();
    }
    if (document.querySelector(".spiner")) {
      return;
    }
    const random = Math.floor(Math.random() * (82 - 1) + 1);
    const output = document.createElement("p");
    const spiner = document.createElement("span");
    spiner.classList.add("spiner");
    el.parentElement.append(spiner);

    output.classList.add("card__text_name");

    fetch(`https://swapi.dev/api/people/${random}`, {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (res.detail === "Not found") {
          return (output.textContent = "Имя не найдено, попробуй ещё раз");
        }
        output.textContent = res.name;
      })
      .catch((err) => {
        output.textContent = String(err);
      })
      .finally(() => {
        el.parentElement.append(output);
        spiner.remove();
      });
  }

  getElement() {
    if (this.template === "button" || this.template === "p") {
      const element = document.createElement(this.template);

      element.classList.add(
        this.options,
        this.template === "button" ? `card__btn` : null
      );

      element.textContent = this.text;

      if (typeof this.mods === "object") {
        Object.keys(this.mods).map((item) => {
          element.style[item] = this.mods[item];
        });
      }

      if (this.template === "button" && this.event && this[this.event]) {
        element.addEventListener("click", () => this[this.event](element));
      }

      return element;
    } else {
      throw new TypeError("The element must be a button or a paragraph");
    }
  }
}
