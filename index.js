const restify = require('restify');
const server = restify.createServer();
const route = require('./routers/router')(server);
const mongooseConf = require('./mongoose/config');
//console.log(server);

server.listen(8000, function() {
    console.log('%s listening at %s', server.name, server.url);
});
