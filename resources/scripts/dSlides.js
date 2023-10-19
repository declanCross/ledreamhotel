//Rooms
//Assign slides, select variables, and current rooms slide
let dRoomsSlides = document.getElementsByClassName("dRoomsSlides");
let dCurrentRoomsSlide = 1;
//Changes the current slide
const dChangeRoomsSlide = (n) => {
	dCurrentRoomsSlide = n;
	for (let i = 0; i < dRoomsSlides.length; i++) {
		dRoomsSlides[i].className = dRoomsSlides[i].className.replace(" show", "");
	}
	dRoomsSlides[n - 1].className += " show";
};
//Collapse and expand text container
let dRoomsText = document.getElementById("d-feature-card-rooms-text-container");
let dRoomsHidden = document.getElementById(
	"d-feature-card-rooms-text-hidden-container"
);
const dRoomsCollapse = () => {
	dRoomsText.className += " hide";
	dRoomsHidden.className = dRoomsHidden.className.replace(" hide", "");
};
const dRoomsExpand = () => {
	dRoomsHidden.className += " hide";
	dRoomsText.className = dRoomsText.className.replace(" hide", "");
};
//Resto
//Assign slides, select variables, and current rooms slide
let dRestoSlides = document.getElementsByClassName("dRestoSlides");
let dCurrentRestoSlide = 1;
//Returns valid slide number
const dReturnValidRestoSlide = (num) => {
	if (num > dRestoSlides.length) {
		return 1;
	}
	if (num < 1) {
		return dRestoSlides.length;
	}
	return num;
};
//Changes the current slide
const dChangeRestoSlide = (n) => {
	dCurrentRestoSlide = n;
	for (let i = 0; i < dRestoSlides.length; i++) {
		dRestoSlides[i].className = dRestoSlides[i].className.replace(" show", "");
	}
	dRestoSlides[n - 1].className += " show";
};
//Collapse and expand text container
let dRestoText = document.getElementById("d-feature-card-resto-text-container");
let dRestoHidden = document.getElementById(
	"d-feature-card-resto-text-hidden-container"
);
const dRestoCollapse = () => {
	dRestoText.className += " hide";
	dRestoHidden.className = dRestoHidden.className.replace(" hide", "");
};
const dRestoExpand = () => {
	dRestoHidden.className += " hide";
	dRestoText.className = dRestoText.className.replace(" hide", "");
};
//Amenities
//Assign slides, select variables, and current rooms slide
let dAmenitiesSlides = document.getElementsByClassName("dAmenitiesSlides");
let dCurrentAmenitiesSlide = 1;
//Changes the current slide
const dChangeAmenitiesSlide = (n) => {
	dCurrentRoomsSlide = n;
	for (let i = 0; i < dAmenitiesSlides.length; i++) {
		dAmenitiesSlides[i].className = dAmenitiesSlides[i].className.replace(
			" show",
			""
		);
	}
	dAmenitiesSlides[n - 1].className += " show";
};
//Collapse and expand text container
let dAmenitiesText = document.getElementById(
	"d-feature-card-amenities-text-container"
);
let dAmenitiesHidden = document.getElementById(
	"d-feature-card-amenities-text-hidden-container"
);
const dAmenitiesCollapse = () => {
	dAmenitiesText.className += " hide";
	dAmenitiesHidden.className = dAmenitiesHidden.className.replace(" hide", "");
};
const dAmenitiesExpand = () => {
	dAmenitiesHidden.className += " hide";
	dAmenitiesText.className = dAmenitiesText.className.replace(" hide", "");
};
