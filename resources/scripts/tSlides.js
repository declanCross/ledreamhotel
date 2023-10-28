//Rooms
//Assign slides, select variables, and current rooms slide
let tRoomsSlides = document.getElementsByClassName("tRoomsSlides");
let tCurrentRoomsSlide = 1;
//Changes the current slide
const tChangeRoomsSlide = (n) => {
	tCurrentRoomsSlide = n;
	for (let i = 0; i < tRoomsSlides.length; i++) {
		tRoomsSlides[i].className = tRoomsSlides[i].className.replace(" show", "");
	}
	tRoomsSlides[n - 1].className += " show";
};
//Resto
//Assign slides, select variables, and current rooms slide
let tRestoSlides = document.getElementsByClassName("tRestoSlides");
let tCurrentRestoSlide = 1;
//Returns valid slide number
const tReturnValidRestoSlide = (num) => {
	if (num > tRestoSlides.length) {
		return 1;
	}
	if (num < 1) {
		return tRestoSlides.length;
	}
	return num;
};
//Changes the current slide
const tChangeRestoSlide = (n) => {
	tCurrentRestoSlide = n;
	for (let i = 0; i < tRestoSlides.length; i++) {
		tRestoSlides[i].className = tRestoSlides[i].className.replace(" show", "");
	}
	tRestoSlides[n - 1].className += " show";
};
//Amenities
//Assign slides, select variables, and current rooms slide
let tAmenitiesSlides = document.getElementsByClassName("tAmenitiesSlides");
let tCurrentAmenitiesSlide = 1;
//Changes the current slide
const tChangeAmenitiesSlide = (n) => {
	tCurrentAmenitiesSlide = n;
	for (let i = 0; i < tAmenitiesSlides.length; i++) {
		tAmenitiesSlides[i].className = tAmenitiesSlides[i].className.replace(
			" show",
			""
		);
	}
	tAmenitiesSlides[n - 1].className += " show";
};
