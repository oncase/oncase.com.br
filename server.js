/* var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic('./')).listen(8080); */

var express = require('express');
var rewrite = require('express-urlrewrite');
var app = express();

//Rewrite rules for URLs
app.use(rewrite(/^\/about\/?$/, '/#!/about'));

app.use(rewrite(/^\/services\/?$/, '/#!/services'));

app.use(rewrite(/^\/products\/?$/, '/#!/products'));

app.use(rewrite(/^\/clients-and-partners\/?$/, '/#!/clients-and-partners'));

app.use(rewrite(/^\/contact\/?$/, '/#!/contact'));
//End of rewrite rules

app.use(express.static('./'));

app.listen(8080);
console.log('Server running at http://localhost:8080/');

module.exports = app;
