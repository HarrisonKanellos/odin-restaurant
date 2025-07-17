export function renderMenuContent() {
    const contentContainer = document.querySelector("#content");

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");

    const entreeContainer = document.createElement("div");
    entreeContainer.classList.add("entree-container");
    const mainContainer = document.createElement("div");
    mainContainer.classList.add("main-container");
    const desertContainer = document.createElement("div");
    desertContainer.classList.add("desert-container");
    
    const menuHeading = document.createElement("h2");
    menuHeading.classList.add("section-heading", "menu-heading");
    menuHeading.textContent = "MENU";
    menuContainer.appendChild(menuHeading);
    
    addMenuItems(entreeContainer, mainContainer, desertContainer);

    menuContainer.appendChild(entreeContainer);
    menuContainer.appendChild(mainContainer);
    menuContainer.appendChild(desertContainer);

    contentContainer.appendChild(menuContainer);
}

function addMenuItems(entreeContainer, mainContainer, desertContainer) {
    menu.forEach((item) => {
        const itemContainer = document.createElement("div");
        itemContainer.classList.add("item-container");

        const name = document.createElement("p");
        name.classList.add("item-name");
        name.textContent = item.name;

        const description = document.createElement("description");
        description.classList.add("item-description");
        description.textContent = item.description.toLowerCase();

        const price = document.createElement("p");
        price.classList.add("item-price");
        price.textContent = item.price;

        itemContainer.appendChild(name);
        itemContainer.appendChild(description);
        itemContainer.appendChild(price);

        switch (item.type) {
            case "entree":
                entreeContainer.appendChild(itemContainer);
                break;

            case "main":
                mainContainer.appendChild(itemContainer);
                break;

            case "desert":
                desertContainer.appendChild(itemContainer);
        }
    })
}

const menu = [
    createMenuItem("Sekuwa", "Marinated and barbequed chicken, goat, or buffalo", "24.00", "entree"),
    createMenuItem("Momos", "Steamed dumplings with chicken or buffalo", "22.00", "entree"),
    createMenuItem("Sukuti", "Marinated and dried buffalo, chicken or fish", "32.00", "main"),
    createMenuItem("Khaja Set", "Spicy and grilled buffalo with beaten rice, chutney and cucumber", "32.00", "main"),
    createMenuItem("Thali Set", "Curry of chicken, mutton, veg with rice, lentil daal, pickle, potato, chutney and cucumber", "35.00", "main"),
    createMenuItem("Jerry", "Deep-fried sugar bread with a spicy potato curry", "18.00", "desert"),
];

function createMenuItem(name, description, price, type) {
    
    return { name, description, price, type };
}