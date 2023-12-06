//Load or remove dropdown content when clicking the three lines on the navbar.
document.getElementById("nav-more").addEventListener("click", (event) => {
	event.preventDefault();
	let dropdownContent = document.getElementById("dropdown-content");
	let mNav = document.getElementById("nav");
	if (dropdownContent.style.display === "flex") {
		dropdownContent.style.display = "none";
		mNav.style.backgroundColor = "rgba(251, 252, 254, 0.8)";
	} else {
		dropdownContent.style.display = "flex";
		mNav.style.backgroundColor = "rgba(251, 252, 254, 1)";
	}
});
//Remove dropdown content when clicking the x within dropdown content.
document.getElementById("dropdown-exit").addEventListener("click", (event) => {
	event.preventDefault();
	let dropdownContent = document.getElementById("dropdown-content");
	let mNav = document.getElementById("nav");
	dropdownContent.style.display = "none";
	mNav.style.backgroundColor = "rgba(251, 252, 254, 0.8)";
});
