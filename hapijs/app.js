'use strict';
const Hapi = require('@hapi/hapi');
const Vision = require('@hapi/vision');
const Inert = require('@hapi/inert');
const Path = require('path');

const page = async () => {
	const server = new Hapi.server({
		port: process.env.PORT || 3000,
		routes: {
			files: {
				relativeTo: Path.join(__dirname, 'public')
			}
		}
	});
	await server.register([Vision, Inert]);
  
	server.views({
		engines: {
			ejs: require('ejs')
		},
		relativeTo: __dirname,
		path: './views'
	});

	server.route([
    {
      method: 'GET',
      path: '/{param*}',
      handler: {
        directory: {
          path: Path.join(__dirname, 'public'),
          index: false,
        }
      }
    },
    {
      method: 'GET',
      path: '/',
      handler: (req, h) => {
        return h.view('index');
      }
    },
    {
      method: 'GET',
      path: '/generate',
      handler: (req, h) => {
        return h.view('generate');
      }
    },
    {
      method: 'GET',
      path: '/list',
      handler: (req, h) => {
        return h.view('list');
      }
    },
    {
      method: 'GET',
      path: '/poema',
      handler: (req, h) => {
        return h.view('poema');
      }
    },
    {
      method: 'GET',
      path: '/youtube',
      handler: (req, h) => {
        return h.view('youtube');
      }
    }
  ]);

	await server.start();
};

page();
