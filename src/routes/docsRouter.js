const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

module.exports = function docsRouter(path) {
	const apiSpec = YAML.load(path);

	const SwaggerOptions = {
		customCss: `
    .swagger-ui .topbar {
      display: none;
    }`,

		customSiteTitle: 'Seedy FIUBA API',
	};

	return express
		.Router()
		.use('/api-docs', swaggerUi.serve)
		.get('/api-docs', swaggerUi.setup(apiSpec, SwaggerOptions));
};
