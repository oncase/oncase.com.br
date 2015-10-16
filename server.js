/* var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic('./')).listen(8080); */

var express = require('express');
var rewrite = require('express-urlrewrite');
var app = express();


app.use(rewrite(/^\/(en|pt)\/about\/?$/,                  '/#!/$1/about'));
app.use(rewrite(/^\/(en|pt)\/services\/?$/,               '/#!/$1/services'));
app.use(rewrite(/^\/(en|pt)\/products\/?$/,               '/#!/$1/products'));
app.use(rewrite(/^\/(en|pt)\/clients-and-partners\/?$/,   '/#!/$1/clients-and-partners'));
app.use(rewrite(/^\/(en|pt)\/contact\/?$/,                '/#!/$1/contact'));



app.use(rewrite(/^\/about\/?$/,                         '/#!/about'));
app.use(rewrite(/^\/services\/?$/,                      '/#!/services'));
app.use(rewrite(/^\/products\/?$/,                      '/#!/products'));
app.use(rewrite(/^\/clients-and-partners\/?$/,          '/#!/clients-and-partners'));
app.use(rewrite(/^\/contact\/?$/,                       '/#!/contact'));



app.use(rewrite(/^\/(en|pt)\/?$/,                '/#!/$1'));
app.use(rewrite(/^\/?$/,                         '/#!/'));
app.use(express.static('./'));

app.listen(8080);
console.log('Server running at http://localhost:8080/');

module.exports = app;
