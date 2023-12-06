fetch("/.netlify/functions/getMapEmbed")
	.then((response) => response.text())
	.then((iframeHtml) => {
		document.getElementById("map").innerHTML = iframeHtml;
	});
