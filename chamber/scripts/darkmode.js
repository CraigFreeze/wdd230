const modeButton = document.querySelector("#dark-mode");
const main = document.querySelector("main");
const h2s = document.querySelectorAll("section h2");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		h2s.forEach(element => {
			element.style.color = "#fff";
		});
		modeButton.style.fontSize = "2rem"
		modeButton.textContent = "🔆";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		h2s.forEach(element => {
			element.style.color = "#041157";
		});
		modeButton.style.fontSize = "4rem"
		modeButton.textContent = "🕶️";
	}
});