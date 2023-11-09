const url = 'https://craigfreeze.github.io/wdd230/chamber/data/members.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    console.log(await response);
    if (response.ok){
        const data = await response.json();
        console.table(data);
        displayProphets(data.prophets);
    } else {
        console.log(response.status);
    }
}

const displayProphets = (prophets) => {
    console.log("test:");
    prophets.forEach((prophet) => {
        let card = document.createElement("section");
        let fullName = document.createElement("h2");
        let paragraph1 = document.createElement("p");
        let paragraph2 = document.createElement("p");

        let portrait = document.createElement("img");

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        paragraph1.textContent = `Date of Birth: ${prophet.birthdate}`;
        paragraph2.textContent = `Place of Birth: ${prophet.birthplace}`;
        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "340");
        portrait.setAttribute("height", "440");

        card.appendChild(fullName);
        card.appendChild(paragraph1);
        card.appendChild(paragraph2);
        card.appendChild(portrait);

        cards.append(card)
    });
  }

getProphetData();
