const OpenApiValidator = require('express-openapi-validator');
const YAML = require('yamljs');

module.exports = function $apiValidatorMiddleware(path) {
	const apiSpec = await YAML.load(path);

	return OpenApiValidator.middleware({
		apiSpec,
		validateRequests: true, // (default)
		validateResponses: true, // false by default
	});
};
