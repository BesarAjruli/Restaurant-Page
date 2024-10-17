import { restaurantName, aboutHome } from "./content";
import { aboutTitle, about } from "./about";
import { menu } from "./menu";

const mainContainer = document.querySelector("#content");

mainContainer.append(restaurantName, aboutHome);

document.querySelector("#home").addEventListener("click", () => {
  mainContainer.innerHTML = "";
  mainContainer.append(restaurantName, aboutHome);
});

document.querySelector("#about").addEventListener("click", () => {
  mainContainer.innerHTML = "";
  mainContainer.append(aboutTitle, about);
});

document.querySelector("#menu").addEventListener("click", () => {
  mainContainer.innerHTML = "";

  for (let i = 0; i < menu.length; i++) {
    const container = document.createElement("div");
    const name = document.createElement("h3");
    const description = document.createElement("p");
    const price = document.createElement("span");

    name.textContent = menu[i].name;
    description.textContent = menu[i].description;
    price.textContent = `${menu[i].price}$`;

    container.append(name, description, price)
    mainContainer.appendChild(container)
  }
});
