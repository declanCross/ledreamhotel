fetch("/.netlify/functions/getMapEmbed")
	.then((response) => response.text())
	.then((iframeHtml) => {
		document.getElementById("m-map").innerHTML = iframeHtml;
	});
