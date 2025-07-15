export function renderContactContent() {
    const contentContainer = document.querySelector("#content");

    const contactContainer = document.createElement("div");
    
    const touchSection = createTouchSection();
    const messageSection = createMessageSection();

    contactContainer.appendChild(touchSection);
    contactContainer.appendChild(messageSection);

    contentContainer.appendChild(contactContainer);
}

function createTouchSection() {
    const leftContainer = document.createElement("section");
    leftContainer.classList.add("touch-container");

    const touchHeading = document.createElement("h2");
    touchHeading.classList.add("section-heading,touch-heading");
    touchHeading.textContent = "GET IN TOUCH";

    const touchDescription = document.createElement("p");
    touchDescription.classList.add("touch-description");
    touchDescription.textContent = "For general enquiries:";

    const emailAdress = document.createElement("span");
    emailAdress.classList.add("email-address");
    emailAdress.textContent = "thisisnepal@email.com";

    const email = document.createElement("p");
    email.classList.add("email");
    email.textContent = "Email us at: ";

    email.appendChild(emailAdress);

    const phoneNumber = document.createElement("span");
    phoneNumber.classList.add("phone-number");
    phoneNumber.textContent = "0412345678";

    const phone = document.createElement("p");
    phone.classList.add("phone");
    phone.textContent = "Call us on: ";

    phone.appendChild(phoneNumber);

    leftContainer.appendChild(touchHeading);
    leftContainer.appendChild(touchDescription);
    leftContainer.appendChild(email);
    leftContainer.appendChild(phone);

    return leftContainer;
}

function createMessageSection() {
    const rightContainer = document.createElement("section");
    rightContainer.classList.add("message-container");

    const messageHeading = document.createElement("h2");
    messageHeading.classList.add("section-heading,message-heading");
    messageHeading.textContent = "SEND US A MESSAGE";

    const form = document.createElement("form");

    const firstNameLabel = document.createElement("label");
    firstNameLabel.for = "first-name";
    firstNameLabel.textContent = "Firstname *";

    const firstNameInput = document.createElement("input");
    firstNameInput.type = "text";
    firstNameInput.name = "first-name";
    firstNameInput.id = "first-name";
    firstNameInput.required = true;

    const lastNameLabel = document.createElement("label");
    lastNameLabel.for = "last-name";
    lastNameLabel.textContent = "Lastname *";

    const lastNameInput = document.createElement("input");
    lastNameInput.type = "text";
    lastNameInput.name = "last-name";
    lastNameInput.id = "last-name";
    lastNameInput.required = true;

    const emailLabel = document.createElement("label");
    emailLabel.for = "email";
    emailLabel.textContent = "Email *"
    
    const emailInput = document.createElement("input");
    emailInput.type = "emai";
    emailInput.name = "email";
    emailInput.id = "email";
    emailInput.required = true;

    const mobileLabel = document.createElement("label");
    mobileLabel.for = "mobile";
    mobileLabel.textContent = "Mobile *";

    const mobileInput = document.createElement("input");
    mobileInput.type = "tel";
    mobileInput.name = "mobile";
    mobileInput.id = "mobile";
    mobileInput.required = true;

    const messageLabel = document.createElement("label");
    messageLabel.for = "message";
    messageLabel.textContent = "Message *";

    const messageInput = document.createElement("textarea");
    messageInput.name = "message";
    messageInput.id = "message";
    messageInput.rows = "7";
    messageInput.cols = "50";
    messageInput.required = true;

    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.value = "SUBMIT";

    form.appendChild(firstNameLabel);
    form.appendChild(firstNameInput);
    form.appendChild(lastNameLabel);
    form.appendChild(lastNameInput);
    form.appendChild(emailLabel);
    form.appendChild(emailInput);
    form.appendChild(mobileLabel);
    form.appendChild(mobileInput);
    form.appendChild(messageLabel);
    form.appendChild(messageInput);
    form.appendChild(submitButton);

    rightContainer.appendChild(messageHeading);
    rightContainer.appendChild(form);

    return rightContainer;
}