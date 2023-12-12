const buttons = document.querySelectorAll(".carousel-btn");
const images = document.querySelectorAll(".slide");
const descriptionEl = document.querySelector(".carousel-description");
let index = 0;

function descriptionExists(){
    if (descriptionEl) {
        descriptionEl.textContent = document.querySelector(".img-active img").alt;
    }
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        images[index].classList.remove("img-active");
        if (button.classList.contains("prev")) {
            if (index == 0) {
                index = images.length - 1;
            } else {
                index--;
            }
            images[index].classList.add("img-active");
        } else if (button.classList.contains("next")) {
            if (index == (images.length - 1)) {
                index = 0;
            } else {
                index++;
            }
            images[index].classList.add("img-active");
        }
        descriptionExists()
    });
});

descriptionExists()