'use strict';
const Koa = require('koa');
const koaRouter = require('@koa/router');
const views = require('koa-views');
const staticFile = require('koa-static');
const path = require('path');
const router = require('./router.js');

const render = views(__dirname + '/views', { extension: 'ejs' });

const routes = new koaRouter();
routes
  .get('/', router.home)
  .get('/worker', router.worker)
  .get('/list', router.list)
  .get('/poema', router.poema)
  .get('/youtube', router.youtube);

const app = new Koa();
app
  .use(staticFile(path.join(__dirname, 'public')))
  .use(render)
  .use(routes.routes())
  .use(routes.allowedMethods())
  .listen({ port: process.env.PORT || 3000 });
