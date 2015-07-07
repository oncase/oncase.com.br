/* var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic('./')).listen(8080); */

var express = require('express');
var rewrite = require('express-urlrewrite');
var app = express();

app.use(rewrite(/^\/about$/, '/#!/about'));
app.use(rewrite(/^\/about\/$/, '/#!/about'));

app.use(express.static('./'));

app.listen(8080);
console.log('Server running at http://localhost:8080/');

module.exports = app;
