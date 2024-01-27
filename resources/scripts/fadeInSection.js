function createObserver(node) {
	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			// entry.isIntersecting is true when the element is visible
			if (entry.isIntersecting) {
				// add the is-visible class to the element
				node.classList.add("is-visible");
			} // else {
			// 	// remove the is-visible class from the element
			// 	node.classList.remove("is-visible");
			// }
		});
	});
	// start observing the node
	observer.observe(node);
	// return the observer instance
	return observer;
}

// select all the elements with the fade-in-section class
const sections = document.querySelectorAll(".fade-in-section");
// loop through each element
sections.forEach((section) => {
	// pass the element to the createObserver function
	createObserver(section);
});
