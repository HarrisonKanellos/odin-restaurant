import thaliSetImage from "../assets/thali-set.png";
import khajaSetImage from "../assets/khaja-set.jpg";
import momoImage from "../assets/momo.jpeg";
import jerryImage from "../assets/jerry.jpeg";
import sekuwaImage from "../assets/sekuwa.jpg";

export function renderHomeContent() {
    const contentContainer = document.querySelector("#content");

    const homeContentContainer = document.createElement("div");
    homeContentContainer.classList.add("home-content-container");

    const experienceSection = createExperienceSection();
    const descriptionSection = createDescriptionSection();
    const eatSection = createEatSection();

    homeContentContainer.appendChild(experienceSection);
    homeContentContainer.appendChild(descriptionSection);
    homeContentContainer.appendChild(eatSection);

    contentContainer.appendChild(homeContentContainer);
}

function createExperienceSection() {
    const experienceSection = document.createElement("section");
    experienceSection.classList.add("experience-section");

    const leftContainer = document.createElement("div");
    leftContainer.classList.add("left-container");

    const rightContainer = document.createElement("div");
    rightContainer.classList.add("right-container");

    const sectionHeading = document.createElement("h2");
    sectionHeading.classList.add("section-heading");
    sectionHeading.textContent = "EXPERIENCE AUTHENTIC NEPALESE CUISINE";

    const viewMenuBtn = document.createElement("button");
    viewMenuBtn.type = "button";
    viewMenuBtn.classList.add("view-menu-button");
    viewMenuBtn.textContent = "VIEW MENU";

    const image = document.createElement("img");
    image.alt = "Thali Set";
    image.src = thaliSetImage;

    leftContainer.appendChild(sectionHeading);
    leftContainer.appendChild(viewMenuBtn);

    rightContainer.appendChild(image);

    experienceSection.appendChild(leftContainer);
    experienceSection.appendChild(rightContainer);

    return experienceSection;
}

function createDescriptionSection() {
    const descriptionSection = document.createElement("section");
    descriptionSection.classList.add("description-section");

    const leftContainer = document.createElement("div");
    leftContainer.classList.add("left-container");

    const rightContainer = document.createElement("div");
    rightContainer.classList.add("right-container");

    const btnContainer = document.createElement("div");
    btnContainer.classList.add("button-container");

    const sectionHeading = document.createElement("h2");
    sectionHeading.classList.add("section-heading");
    sectionHeading.textContent  = "FRESH INGREDIENTS. NATURAL FLAVOURS. SIMPLE COOKING.";

    const makeBookingBtn = document.createElement("button");
    makeBookingBtn.type = "button";
    makeBookingBtn.classList.add("make-booking-button");
    makeBookingBtn.textContent = "MAKE A BOOKING";

    const orderTABtn = document.createElement("button");
    orderTABtn.type = "button";
    orderTABtn.classList.add("order-button");
    orderTABtn.textContent = "ORDER TAKEAWAY";

    const imageOne = document.createElement("img");
    imageOne.alt = "Khaja Set";
    imageOne.src = khajaSetImage;

    const imageTwo = document.createElement("img");
    imageTwo.alt = "Momo";
    imageTwo.src = momoImage;

    leftContainer.appendChild(imageOne);
    leftContainer.appendChild(imageTwo);
    
    btnContainer.appendChild(makeBookingBtn);
    btnContainer.appendChild(orderTABtn);

    rightContainer.appendChild(sectionHeading);
    rightContainer.appendChild(btnContainer);

    descriptionSection.appendChild(leftContainer);
    descriptionSection.appendChild(rightContainer);

    return descriptionSection;
}

function createEatSection() {
    const eatSection = document.createElement("section");
    eatSection.classList.add("eat-section");

    const leftContainer = document.createElement("div");
    leftContainer.classList.add("left-container");

    const rightContainer = document.createElement("div");
    rightContainer.classList.add("right-container");

    const sectionHeading = document.createElement("h2");
    sectionHeading.classList.add("section-heading");
    sectionHeading.textContent = "EAT WITH US";

    const makeBookingBtn = document.createElement("button");
    makeBookingBtn.type = "button";
    makeBookingBtn.classList.add("make-booking-button");
    makeBookingBtn.textContent = "MAKE A BOOKING";

    const imageOne = document.createElement("img");
    imageOne.alt = "Jerry";
    imageOne.src = jerryImage;

    const imageTwo = document.createElement("img");
    imageTwo.alt = "Sekuwa";
    imageTwo.src = sekuwaImage;

    leftContainer.appendChild(sectionHeading);
    leftContainer.appendChild(makeBookingBtn);

    rightContainer.appendChild(imageOne);
    rightContainer.appendChild(imageTwo);

    eatSection.appendChild(leftContainer);
    eatSection.appendChild(rightContainer);

    return eatSection;
}