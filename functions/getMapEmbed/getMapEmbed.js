// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
exports.handler = async function (event, context) {
	try {
		const iframeHtml = `<iframe allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_MAPS_API_KEY}&q=Le+Dream+Hotel,Tamag,Vigan+City,Ilocos+Sur,Philippines"></iframe>`;
		return { statusCode: 200, body: iframeHtml };
	} catch (error) {
		return { statusCode: 500, body: error.toString() };
	}
};
