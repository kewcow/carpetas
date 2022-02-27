'use strict';

const koa = require('koa');
const koaRouter = require('@koa/router');
const views = require('koa-views');
const stac = require('koa-static');
const path = require('path');

const app = new koa();
const router = new koaRouter();

const render = views(__dirname + '/views', { extension: 'ejs' });

app.use(render);
router.get('/', async ctx => ctx.render('index'));

app.use(stac(path.join(__dirname, 'public')));
app.use(router.routes());
app.use(router.allowedMethods());

app.listen({port: 3000});
