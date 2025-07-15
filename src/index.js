import "./styles.css";
import { renderHomeContent } from "./content-modules/home";
import { renderMenuContent } from "./content-modules/menu";
import { renderContactContent } from "./content-modules/contact-us";

renderHomeContent();

const nav = document.querySelector("nav");
nav.addEventListener(("click"), handleNavClick);

function handleNavClick(e) {
    const id = e.target.id;

    switch (id) {
        case "home":
            clearContent();
            renderHomeContent();
            break;
        case "menu":
            clearContent();
            renderMenuContent();
            break;
        case "contact-us":
            clearContent();
            renderContactContent();
    }
}

function clearContent() {
    const contentContainer = document.querySelector("#content");
    const child = contentContainer.querySelector(":first-child");
    if (child !== null) {
        contentContainer.removeChild(child);
    }
}