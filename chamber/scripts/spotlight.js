const url = 'https://craigfreeze.github.io/wdd230/chamber/data/members.json';
const cards = document.querySelector('#cards');

async function getBusinessData() {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        displaySpotlight(data.businesses);
    } else {
        console.log(response.status);
    }
}

// Member Spotlight
const displaySpotlight = (businesses) => {
    businesses.forEach((business) => {
        if(business.membershipLevel == 'Silver' || business.membershipLevel == 'Gold'){
            console.log(business.name)
        }

        // let card = document.createElement("section");
        // let name = document.createElement("h2");
        // let paragraph1 = document.createElement("p");
        // let paragraph2 = document.createElement("p");
        // let paragraph3 = document.createElement("p");
        // let paragraph5 = document.createElement("p");
        // let paragraph6 = document.createElement("p");

        // let portrait = document.createElement("img");

        // name.textContent = `${business.name}`;
        // paragraph1.textContent = `${business.address}`;
        // paragraph2.textContent = `${business.phone}`;
        // paragraph3.innerHTML = `<a href=${business.website}>${business.website}</a>`;
        // paragraph5.textContent = `${business.membershipLevel} Member`;
        // paragraph6.textContent = `${business.joinDate}`;


        // portrait.setAttribute("src", business.imageFile);
        // portrait.setAttribute("alt", `Logo of ${business.name}`);
        // portrait.setAttribute("loading", "lazy");
        // portrait.setAttribute("width", "340");
        // portrait.setAttribute("height", "440");

        // card.appendChild(portrait);
        // card.appendChild(name);
        // card.appendChild(paragraph1);
        // card.appendChild(paragraph2);
        // card.appendChild(paragraph3);
        // card.appendChild(paragraph5);
        // card.appendChild(paragraph6);

        // card.classList.add("directory")

        // cards.append(card)
    });
}

getBusinessData();