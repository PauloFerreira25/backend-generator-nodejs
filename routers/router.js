'use strict';
// Controle de rotas

const logger = require('../src/logger/logger.js');
const path = require('path');
const filename = path.basename(__filename);
const dirname = path.dirname(__filename)
const genericEngineList = require('../src/generic-engine/generic-engine-list');
const genericEngineModel = require('../src/generic-engine/generic-engine-model');
const genericEngineAdd = require('../src/generic-engine/generic-engine-add');

function routes(server) {

    // Tratativa generica para os components
    server.get('/:components/list/:current_page/:per_page', function create(req, res, next) {
        logger.debug(dirname + "/" + filename + " - get - list" + ": " + req.params.components + "/" + req.params.current_page + "/" + req.params.per_page)
        genericEngineList(req, res);
        return next();
    });

    // Tratativa retorna o modelo do objeto para post
    server.get('/:components/model', function create(req, res, next) {
        logger.debug(dirname + "/" + filename + " - get - model" + ": " + req.params.components)
        genericEngineModel(req, res);
        return next();
    });

    // Tratativa generica para os components
    server.post('/:components/add', function create(req, res, next) {
        req.headers.accept = 'application/json'; // screw you client!
        logger.debug(dirname + "/" + filename + " - post" + ": ")
        genericEngineAdd(req, res);
        return next();
    });

}

module.exports = routes;
