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
	scrollContainer.scrollLeft = scrollContainerCenterOffset;
	// add an event listener for mouse wheel or touch movement
	scrollContainer.addEventListener("wheel", scrollHorizontally);
	scrollContainer.addEventListener("touchstart", touchStart);
	scrollContainer.addEventListener("touchmove", touchMove);
	// define the scroll function
	function scrollHorizontally(event) {
		// prevent the default behavior
		event.preventDefault();
		// get the delta value of the mouse wheel or touch movement
		const delta = event.deltaY || event.deltaX;
		// get the direction of the movement
		const direction = delta > 0 ? 1 : -1;
		// calculate the scroll speed based on the container width and the delta value
		const scrollSpeed = (scrollContainerWidth * Math.abs(delta)) / 500; // Increase the divisor to make it faster
		// scroll the container
		scrollContainer.scrollLeft += direction * scrollSpeed;
	}
	// // declare the initial touch position variable
	// let touchStartX;
	// // define the touch start function
	// function touchStart(event) {
	// 	// get the initial touch position
	// 	touchStartX = event.touches[0].pageX;
	// }
	// // define the touch move function
	// function touchMove(event) {
	// 	// prevent the default behavior
	// 	event.preventDefault();
	// 	// get the current touch position
	// 	const touchX = event.touches[0].pageX;
	// 	// get the delta value of the touch movement
	// 	const delta = touchX - touchStartX;
	// 	// get the direction of the movement
	// 	const direction = delta > 0 ? -1 : 1;
	// 	// scroll the container by the width of the image container
	// 	const imgElement = scrollContainer.querySelector(".food-image-container");
	// 	const style = window.getComputedStyle(imgElement);
	// 	const margin = parseFloat(style.marginLeft) + parseFloat(style.marginRight);
	// 	const imageWidthIncludingMargins = imgElement.offsetWidth + margin;
	// 	const scrollAmount = imageWidthIncludingMargins;
	// 	scrollContainer.scrollLeft += direction * scrollAmount;
	// 	// update the initial touch position
	// 	touchStartX = touchX;
	// }

	// declare the initial touch position variables
	let touchStartX;
	let touchStartTime;
	// define the touch start function
	function touchStart(event) {
		// get the initial touch position and time
		touchStartX = event.touches[0].pageX;
		touchStartTime = Date.now();
	}
	// define the touch move function
	function touchMove(event) {
		// prevent the default behavior
		event.preventDefault();
		// get the current touch position and time
		const touchX = event.touches[0].pageX;
		const touchTime = Date.now();
		// calculate the distance and duration of the swipe
		const delta = touchX - touchStartX;
		const duration = touchTime - touchStartTime;
		// calculate the swipe speed
		const speed = Math.abs(delta / duration);
		// get the direction of the movement
		const direction = delta > 0 ? -1 : 1;
		// calculate the scroll amount based on the swipe speed and direction
		const scrollAmount = speed * direction * 100; // Adjust the multiplier to control the scroll speed
		// scroll the container
		scrollContainer.scrollLeft += scrollAmount;
		// update the initial touch position and time
		touchStartX = touchX;
		touchStartTime = touchTime;
	}

	// make the scroll smooth
	scrollContainer.style.scrollBehavior = "smooth";
});
