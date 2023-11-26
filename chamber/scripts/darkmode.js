const modeButton = document.querySelector("#dark-mode");
const main = document.querySelector("body");
const h2s = document.querySelectorAll("h2");
const h3s = document.querySelectorAll("h3");
// const h2s = document.querySelectorAll("section h2");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		main.style.background = "#9c9e98";
		main.style.color = "#fff";
		h2s.forEach((element) => {
			element.style.color = "#fff";
		});
		h3s.forEach((element) => {
			element.style.color = "#fff";
		});
		modeButton.style.fontSize = "2rem"
		modeButton.textContent = "🔆";
	} else {
		main.style.background = "#fff";
		main.style.color = "#000";
		h2s.forEach(element => {
			element.style.color = "#000";
		});
		h3s.forEach(element => {
			element.style.color = "#000";
		});
		modeButton.style.fontSize = "3rem"
		modeButton.textContent = "🕶️";
	}
});