const videoElement = document.getElementById("greeting-video");

videoElement.addEventListener("click", () => {
	if (videoElement.paused) {
		videoElement.play();
	} else {
		videoElement.pause();
	}
});
