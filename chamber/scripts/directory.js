const url = 'https://craigfreeze.github.io/wdd230/chamber/data/members.json';
const cards = document.querySelector('#cards');

async function getBusinessData() {
    const response = await fetch(url);
    console.log(await response);
    if (response.ok) {
        const data = await response.json();
        console.table(data);
        displayDirectory(data.businesses);
    } else {
        console.log(response.status);
    }
}

const displayDirectory = (businesses) => {
    businesses.forEach((business) => {
        let card = document.createElement("section");
        let name = document.createElement("h2");
        let paragraph1 = document.createElement("p");
        let paragraph2 = document.createElement("p");
        let paragraph3 = document.createElement("p");
        // let paragraph4 = document.createElement("p");
        let paragraph5 = document.createElement("p");
        let paragraph6 = document.createElement("p");
        // let paragraph7 = document.createElement("p");

        let portrait = document.createElement("img");

        name.textContent = `${business.name}`;
        paragraph1.textContent = `${business.address}`;
        paragraph2.textContent = `${business.phone}`;
        paragraph3.innerHTML = `<a href=${business.website}>${business.website}</a>`;
        // paragraph4.textContent = `imageFile: ${business.imageFile}`;
        paragraph5.textContent = `${business.membershipLevel} Member`;
        paragraph6.textContent = `${business.joinDate}`;


        portrait.setAttribute("src", business.imageFile);
        // portrait.setAttribute("src", "images/directory/1business.webp");
        portrait.setAttribute("alt", `Logo of ${business.name}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "340");
        portrait.setAttribute("height", "440");

        card.appendChild(portrait);
        card.appendChild(name);
        card.appendChild(paragraph1);
        card.appendChild(paragraph2);
        card.appendChild(paragraph3);
        // card.appendChild(paragraph4);
        card.appendChild(paragraph5);
        card.appendChild(paragraph6);
        // card.appendChild(paragraph7);

        card.classList.add("directory")

        cards.append(card)
    });
}

getBusinessData();

// Grid vs List
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#cards");

listbutton.addEventListener("click", () => {
    display.classList.add("list");
    display.classList.remove("grid");
});

gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});


