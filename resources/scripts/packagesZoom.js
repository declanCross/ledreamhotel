function zoomIn(event, img) {
	event.stopPropagation();
	var zoomedImg = document.querySelector(".package-zoom > img");
	zoomedImg.src = img.src;
	document.querySelector(".package-zoom").style.visibility = "visible";
	document.querySelector(".package-zoom").style.opacity = "1";
}

function zoomOut() {
	document.querySelector(".package-zoom").style.visibility = "hidden";
	document.querySelector(".package-zoom").style.opacity = "0";
}

document.addEventListener("click", zoomOut);
