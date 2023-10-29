exports.handler = async function (event, context) {
	const { lat, lng } = event.queryStringParameters;
	const iframeHtml = `<iframe width="100%" height="450" loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_MAPS_API_KEY}&q=${lat},${lng}"></iframe>`;
	return { statusCode: 200, body: iframeHtml };
};
