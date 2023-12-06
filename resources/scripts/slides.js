//Rooms
//Assign rooms slides, dots variables, and current rooms slide.
let roomsSlides = document.getElementsByClassName("roomsSlides");
let roomsDots = document.getElementsByClassName("roomsDots");
let currentRoomsSlide = 1;
//Returns valid slide number
const returnValidRoomsSlide = (num) => {
	if (num > roomsSlides.length) {
		return 1;
	}
	if (num < 1) {
		return roomsSlides.length;
	}
	return num;
};
//Changes the current slide
const changeRoomsSlide = (n) => {
	currentRoomsSlide = n;
	for (i = 0; i < roomsSlides.length; i++) {
		roomsSlides[i].className = roomsSlides[i].className.replace(" show", "");
	}
	roomsSlides[n - 1].className += " show";
	for (i = 0; i < roomsDots.length; i++) {
		roomsDots[i].className = roomsDots[i].className.replace(" active", "");
	}
	roomsDots[n - 1].className += " active";
};
//Resto + Bar
//Assign slides, dots variables, and current slides
let restoSlides = document.getElementsByClassName("restoSlides");
let restoDots = document.getElementsByClassName("restoDots");
let currentRestoSlide = 1;
//Returns valid slide number
const returnValidRestoSlide = (num) => {
	if (num > restoSlides.length) {
		return 1;
	}
	if (num < 1) {
		return restoSlides.length;
	}
	return num;
};
//Changes the current slide
const changeRestoSlide = (n) => {
	currentRestoSlide = n;
	for (i = 0; i < restoSlides.length; i++) {
		restoSlides[i].className = restoSlides[i].className.replace(" show", "");
	}
	restoSlides[n - 1].className += " show";
	for (i = 0; i < restoDots.length; i++) {
		restoDots[i].className = restoDots[i].className.replace(" active", "");
	}
	restoDots[n - 1].className += " active";
};
//Amenities
//Assign slides, dots variables, and current slides
let amenitiesSlides = document.getElementsByClassName("amenitiesSlides");
let amenitiesDots = document.getElementsByClassName("amenitiesDots");
let currentAmenitiesSlide = 1;
//Returns valid slide number
const returnValidAmenitiesSlide = (num) => {
	if (num > amenitiesSlides.length) {
		return 1;
	}
	if (num < 1) {
		return amenitiesSlides.length;
	}
	return num;
};
//Changes the current slide
const changeAmenitiesSlide = (n) => {
	currentAmenitiesSlide = n;
	for (i = 0; i < amenitiesSlides.length; i++) {
		amenitiesSlides[i].className = amenitiesSlides[i].className.replace(
			" show",
			""
		);
	}
	amenitiesSlides[n - 1].className += " show";
	for (i = 0; i < amenitiesDots.length; i++) {
		amenitiesDots[i].className = amenitiesDots[i].className.replace(
			" active",
			""
		);
	}
	amenitiesDots[n - 1].className += " active";
};
