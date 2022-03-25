const home = async ctx => ctx.render('index');
const worker = async ctx => ctx.render('worker');
const list = async ctx => ctx.render('list');
const poema = async ctx => ctx.render('poema');

module.exports = {
  home,
  worker,
  list,
  poema
}
