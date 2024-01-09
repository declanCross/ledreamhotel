function zoomIn(event, img) {
	event.stopPropagation();
	var zoomedImg = document.querySelector(".menu-zoom > img");

	// Use the current src
	zoomedImg.src = img.currentSrc;

	document.querySelector(".menu-zoom").style.visibility = "visible";
	document.querySelector(".menu-zoom").style.opacity = "1";
}

function zoomOut() {
	document.querySelector(".menu-zoom").style.visibility = "hidden";
	document.querySelector(".menu-zoom").style.opacity = "0";
}

document.addEventListener("click", zoomOut);
