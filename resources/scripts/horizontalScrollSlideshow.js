// Get the container element
const scrollContainers = document.querySelectorAll(".scroll-container");
// Loop through the containers
scrollContainers.forEach((scrollContainer) => {
	// Get the width of the container element
	const scrollContainerWidth = scrollContainer.offsetWidth;
	// Get the width of the scrollable content
	const scrollContainerHalfWidth = scrollContainerWidth / 2;
	const scrollContainerCenter = scrollContainer.scrollWidth / 2;
	// Scroll the container to the center
	const scrollContainerCenterOffset =
		scrollContainerCenter - scrollContainerHalfWidth;
	// scroll the container to the center
	scrollContainer.scrollLeft = scrollContainerCenterOffset;
	// add an event listener for mouse wheel or touch movement
	scrollContainer.addEventListener("wheel", scrollHorizontally);
	scrollContainer.addEventListener("touchstart", touchStart);
	scrollContainer.addEventListener("touchmove", touchMove);
	// declare the initial touch position variable
	let touchStartX;
	// define the scroll function
	function scrollHorizontally(event) {
		// prevent the default behavior
		event.preventDefault();
		// get the delta value of the mouse wheel or touch movement
		const delta = event.deltaY || event.deltaX;
		// get the direction of the movement
		const direction = delta > 0 ? 1 : -1;
		// calculate the scroll speed based on the container width and the delta value
		const scrollSpeed = (scrollContainerWidth * Math.abs(delta)) / 1000;
		// scroll the container
		scrollContainer.scrollLeft += direction * scrollSpeed;
		// check the scrollLeft value and limit it to the maximum or minimum value
		if (
			scrollContainer.scrollLeft >
			scrollContainer.scrollWidth - scrollContainerWidth
		) {
			scrollContainer.scrollLeft =
				scrollContainer.scrollWidth - scrollContainerWidth;
		}
		if (scrollContainer.scrollLeft < 0) {
			scrollContainer.scrollLeft = 0;
		}
	}
	// define the touch start function
	function touchStart(event) {
		// get the initial touch position
		touchStartX = event.touches[0].pageX;
	}
	// define the touch move function
	function touchMove(event) {
		// prevent the default behavior
		event.preventDefault();
		// get the current touch position
		const touchX = event.touches[0].pageX;
		// get the delta value of the touch movement
		const delta = touchX - touchStartX;
		// get the direction of the movement
		const direction = delta > 0 ? -1 : 1;
		// scroll the container by the width of the image container
		const imgElement = scrollContainer.querySelector(".food-image-container");
		const style = window.getComputedStyle(imgElement);
		const margin = parseFloat(style.marginLeft) + parseFloat(style.marginRight);
		const imageWidthIncludingMargins = imgElement.offsetWidth + margin;
		const scrollAmount = imageWidthIncludingMargins;
		scrollContainer.scrollLeft += direction * scrollAmount;
		// check the scrollLeft value and limit it to the maximum or minimum value
		if (
			scrollContainer.scrollLeft >
			scrollContainer.scrollWidth - scrollContainerWidth
		) {
			scrollContainer.scrollLeft =
				scrollContainer.scrollWidth - scrollContainerWidth;
		}
		if (scrollContainer.scrollLeft < 0) {
			scrollContainer.scrollLeft = 0;
		}
		// update the initial touch position
		touchStartX = touchX;
	}

	// make the scroll smooth
	scrollContainer.style.scrollBehavior = "smooth";
});
