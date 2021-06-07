const OpenApiValidator = require('express-openapi-validator');

module.exports = function $apiValidatorMiddleware(path) {
	return OpenApiValidator.middleware({
		path,
		validateRequests: true, // (default)
		validateResponses: true, // false by default
	});
};
