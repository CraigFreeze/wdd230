const baseURL = "https://craigfreeze.github.io/wdd230/";
const linksURL = "https://craigfreeze.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.lessons);
}

function displayLinks(weeks) {
    let ul = document.querySelector(".card1 ul");

    weeks.forEach((week) => {
        const weekEl = document.createElement("li");
        let weekHTML = `${week.lesson}`
        let isFirst = true;
        week.links.forEach((element) => {
            if (!isFirst) {
                weekHTML += " | "
            } else {
                isFirst = false;
            }
            weekHTML += ` <a href="${element.url}">${element.title}</a>`;
        });
        weekEl.innerHTML = weekHTML;
        ul.append(weekEl)
    });
}

getLinks();

