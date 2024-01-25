// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", initVideo);

// Define the initVideo function
function initVideo() {
	// Get the video element by its id
	var video = document.getElementById("ytplayer");

	// Create a new IntersectionObserver instance
	var observer = new IntersectionObserver(
		function (entries) {
			// Loop through the entries array
			entries.forEach(function (entry) {
				// If the video is intersecting the viewport
				if (entry.isIntersecting) {
					// Load the video by setting the src attribute
					video.src = video.dataset.src;
					// Unobserve the video element
					observer.unobserve(video);
				}
			});
		},
		{
			// Set the root margin to trigger the observer earlier
			rootMargin: "0px 0px -200px 0px",
		}
	);

	// Observe the video element
	observer.observe(video);
}
