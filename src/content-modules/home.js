export function renderHomeContent() {
    const contentContainer = document.querySelector("#content");

    const homeContentContainer = document.createElement("div");

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
    image.src = "src/assets/thali-set.png";

    leftContainer.appendChild(sectionHeading);
    leftContainer.appendChild(viewMenuBtn);

    rightContainer.appendChild(image);

    experienceSection.appendChild(leftContainer);
    experienceSection.appendChild(rightContainer);

    return experienceSection;
}

function createDescriptionSection() {
    const descriptionSection = document.createElement("section");

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
    imageOne.src = "src/assets/khaja-set.jpg";

    const imageTwo = document.createElement("img");
    imageTwo.alt = "Momo";
    imageTwo.src = "src/assets/momo.jpeg";

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
    imageOne.src = "src/assets/jerry.jpeg";

    const imageTwo = document.createElement("img");
    imageTwo.alt = "Sekuwa";
    imageTwo.src = "src/assets/sekuwa.jpg";

    leftContainer.appendChild(sectionHeading);
    leftContainer.appendChild(makeBookingBtn);

    rightContainer.appendChild(imageOne);
    rightContainer.appendChild(imageTwo);

    eatSection.appendChild(leftContainer);
    eatSection.appendChild(rightContainer);

    return eatSection;
}