const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
const error = document.querySelector('#error')

let counter = 0; //"A" Level Application and Service
// Shows error message on screen if tries adding more than 10 items

// Event Listners
button.addEventListener('click', () => {
    if (input.value != '' && counter < 10) {
        //removes error if they are doing the right input
        if (!error.classList.contains('hide')) {
            error.classList.toggle('hide');
        }
        counter += 1;
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        li.innerHTML = input.value;
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.append(li);
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });
        input.focus();
        input.value = '';
    } else if (counter >= 10) {
        error.innerHTML = "Amount of Chapters is already 10";
        if (error.classList.contains('hide')) {
            error.classList.toggle('hide');
        }
        console.log("Amount of Chapters is already 10")
    } else {
        error.innerHTML = "Enter a book and chapter";
        if (error.classList.contains('hide')) {
            error.classList.toggle('hide');
        }
        console.log("Enter a book and chapter")
        input.focus(); //I added a focus to encourage the user to type something
    }
});

