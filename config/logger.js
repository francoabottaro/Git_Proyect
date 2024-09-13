// * Logger
const morgan = require('morgan');

morgan.token('splitter', () => {
	return '\x1b[36m--------------------------------------------\x1b[0m\n';
});
morgan.token('statusColor', (_req, res, _args) => {
	let status = (
		typeof res.headersSent !== 'boolean' ? Boolean(res.header) : res.headersSent
	)
		? res.statusCode
		: undefined;
	let color =
		status >= 500
			? 31 // rojo
			: status >= 400
			? 33 // amarillo
			: status >= 300
			? 36 // cian
			: status >= 200
			? 32 // verde
			: 0; // incoloro

	return '\x1b[' + color + 'm' + status + '\x1b[0m';
});
module.exports = {
	logger: morgan(
		`:splitter\x1b[33m:method\x1b[0m \x1b[36m:url\x1b[0m :statusColor :response-time ms - length|:res[content-length]`
	),
};
