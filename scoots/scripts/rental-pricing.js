rentals.forEach(rental => {
    //Create
    let table = document.querySelector("#forecastList");
    let tr = document.createElement("tr");
    let tdType = document.createElement("td");
    let tdPersons = document.createElement("td");
    let tdHalfR = document.createElement("td");
    let tdFullR = document.createElement("td");
    let tdHalfW = document.createElement("td");
    let tdFullW = document.createElement("td");

    //Assign Values
    tdType.textContent = rental.rentalType;
    tdPersons.textContent = rental.maxPeople;
    tdHalfR.textContent = rental.reserveHalf;
    tdFullR.textContent = rental.reserveFull;
    tdHalfW.textContent = rental.walkInHalf;
    tdFullW.textContent = rental.walkInFull;

    //Append
    tr.append(tdType);
    tr.append(tdPersons);
    tr.append(tdHalfR);
    tr.append(tdFullR);
    tr.append(tdHalfW);
    tr.append(tdFullW);
    //Append row to table
    table.append(tr);
});


