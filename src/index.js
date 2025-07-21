import "./styles.css";
import { renderHomeContent } from "./content-modules/home";
import { renderMenuContent } from "./content-modules/menu";
import { renderContactContent } from "./content-modules/contact-us";

const homeTab = document.querySelector("#home");
homeTab.classList.add("selected-tab");
renderHomeContent();
addMenuBtnEvent();

const nav = document.querySelector("nav");
nav.addEventListener(("click"), handleNavClick);

function handleNavClick(e) {
    removePreviousSelect();

    e.target.classList.add("selected-tab");

    const id = e.target.id;
    switch (id) {
        case "home":
            clearContent();
            renderHomeContent();
            addMenuBtnEvent();
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

function removePreviousSelect() {
    const previousTab = document.querySelector(".selected-tab");
    if (previousTab) {
        previousTab.classList.remove("selected-tab");
    }
}

function addMenuBtnEvent() {
    const viewMenuBtn = document.querySelector(".view-menu-button");
    viewMenuBtn.addEventListener("click", handleViewMenuClick);
}

function handleViewMenuClick() {
    removePreviousSelect();

    const menuTab = document.querySelector("#menu");
    menuTab.classList.add("selected-tab");

    clearContent();
    renderMenuContent();
} 