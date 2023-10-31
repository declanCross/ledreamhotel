const handler = async (event) => {
	try {
		const iframeHtml = `<iframe width="100%" height="450" allowfullscreen src="https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_MAPS_API_KEY}&q=17.5575787,120.3807861"></iframe>`;
		return { statusCode: 200, body: iframeHtml };
	} catch (error) {
		return { statusCode: 500, body: error.toString() };
	}
};
module.exports = { handler };

// // Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
// const handler = async (event) => {
// 	try {
// 		const subject = event.queryStringParameters.name || "World";
// 		return {
// 			statusCode: 200,
// 			body: JSON.stringify({ message: `Hello ${subject}` }),
// 			// // more keys you can return:
// 			// headers: { "headerName": "headerValue", ... },
// 			// isBase64Encoded: true,
// 		};
// 	} catch (error) {
// 		return { statusCode: 500, body: error.toString() };
// 	}
// };
// module.exports = { handler };

// exports.handler = async function (event, context) {
// 	const iframeHtml = `<iframe width="100%" height="450" allowfullscreen src="https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_MAPS_API_KEY}&q=17.5575787,120.3807861"></iframe>`;
// 	return { statusCode: 200, body: iframeHtml };
// };

// // EXAMPLE
// exports.handler = async function (event, context) {
// 	const value = process.env.MY_IMPORTANT_VARIABLE;
// 	return {
// 		statusCode: 200,
// 		body: JSON.stringify({
// 			message: `Value of MY_IMPORTANT_VARIABLE is ${value}.`,
// 		}),
// 	};
// };

// // AI EXAMPLE
// exports.handler = async function (event, context) {
// 	const { lat, lng } = event.queryStringParameters;
// 	const iframeHtml = `<iframe width="100%" height="450" loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_MAPS_API_KEY}&q=${lat},${lng}"></iframe>`;
// 	return { statusCode: 200, body: iframeHtml };
// };
