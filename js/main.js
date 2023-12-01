// Smooth scroll
const links = document.querySelectorAll(".btn-arrow");

for (const link of links) {
	link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
	e.preventDefault();
	const href = this.getAttribute("href");

	document.querySelector(href).scrollIntoView({
		behavior: "smooth"
	});
}

// Menu

function openModal() {
	document.getElementById("modal").style.top = "5%";
}

function closeModal() {
	document.getElementById("modal").style.top = "-600px";
}