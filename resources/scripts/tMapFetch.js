fetch("/.netlify/functions/getMapEmbed")
	.then((response) => response.text())
	.then((iframeHtml) => {
		document.getElementById("t-map").innerHTML = iframeHtml;
	});