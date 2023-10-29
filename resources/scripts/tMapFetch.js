fetch("/.netlify/functions/getMapEmbed?lat=17.5575787&lng=120.3807861")
	.then((response) => response.text())
	.then((iframeHtml) => {
		document.getElementById("map").innerHTML = iframeHtml;
	});
