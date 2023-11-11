const modeButton = document.querySelector("#dark-mode");
const main = document.querySelector("body");
const h2s = document.querySelectorAll("section h2");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		main.style.background = "#AAAAA9";
		main.style.color = "#fff";
		h2s.forEach((element) => {
			element.style.color = "#fff";
		});
		modeButton.style.fontSize = "2rem"
		modeButton.textContent = "🔆";
	} else {
		main.style.background = "#fff";
		main.style.color = "#A9A9A9";
		h2s.forEach(element => {
			element.style.color = "#041157";
		});
		modeButton.style.fontSize = "4rem"
		modeButton.textContent = "🕶️";
	}
});