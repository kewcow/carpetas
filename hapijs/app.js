'use strict';

const Hapi = require('@hapi/hapi');
const Vision = require('@hapi/vision');
const Inert = require('@hapi/inert');
const Path = require('path');

const page = async () => {

	const server = Hapi.server({
		port: 3000,
		routes: {
			files: {
				relativeTo: Path.join(__dirname, 'public')
			}
		}
	});

	await server.register([Vision, Inert]);

	server.views({
		engines: {
			html: require('pug')
		},
		relativeTo: __dirname,
		path: './views'
	});

	server.route([{
		method: 'GET',
		path: '/{param*}',
		handler: {
			directory: {
				path: '.',
				listing: false,
        index: false,
				redirectToSlash: true
			}
		}
	},
	{
		method: 'GET',
		path: '/',
		handler: (req, h) => {
			return h.view('index');
		}
	}]);

	await server.start();
};

page();
