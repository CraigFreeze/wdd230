const pass1 = document.querySelector("#password1");
const pass2 = document.querySelector("#password2");
const message = document.querySelector("#formmessage");

pass2.addEventListener("focusout", checkSame);

//Password Validation
function checkSame() {
	if (pass1.value !== pass2.value) {
		message.textContent = "❗Passwords DO NOT MATCH!";
		message.style.display = "block";
		pass2.style.backgroundColor = "#fff0f3";
		pass2.value = "";
		pass2.focus();
	} else {
		message.style.display = "none";
		pass2.style.backgroundColor = "#fff";
		pass2.style.color = "#000";
	}
}

//Range Values
const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("rating");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}

displayRatingValue()