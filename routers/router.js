const genericEngineList = require('../src/generic-engine/generic-engine-list');
const genericEngineAdd = require('../src/generic-engine/generic-engine-add');


function routes(server) {


    // Tratativa generica para os components
    server.get('/:components/list/:current_page/:per_page', function create(req, res, next) {
        genericEngineList(req, res);
        return next();
    });

    // Tratativa generica para os components
    server.post('/:components/add', function create(req, res, next) {
        genericEngineAdd(req, res);
        return next();
    });

}

module.exports = routes;
