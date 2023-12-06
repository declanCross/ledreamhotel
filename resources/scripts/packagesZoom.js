function zoomIn(event, img) {
	event.stopPropagation();
	var zoomedImg = document.querySelector(".package-zoom > img");

	// Check if the screen width is larger than 675px
	if (window.matchMedia("(min-width: 675px)").matches) {
		// Change the src to the larger image file
		var imgSrc = img.getAttribute("src");
		var largerImgSrc = imgSrc.replace("mobile_images", "hq_images");
		zoomedImg.src = largerImgSrc;
		document.querySelector(".package-zoom > img").style.maxWidth = "1080px";
	} else {
		// Use the current src
		zoomedImg.src = img.currentSrc;
	}

	// zoomedImg.src = img.currentSrc;
	document.querySelector(".package-zoom").style.visibility = "visible";
	document.querySelector(".package-zoom").style.opacity = "1";
}

function zoomOut() {
	document.querySelector(".package-zoom").style.visibility = "hidden";
	document.querySelector(".package-zoom").style.opacity = "0";
}

document.addEventListener("click", zoomOut);
