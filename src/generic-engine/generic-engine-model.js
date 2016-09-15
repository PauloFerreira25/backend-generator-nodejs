'use strict';
const components = require('../../components/components-list');
const findAndPagination = require('../utils/findAndPagination');
const callback = require('../utils/action-callback-http-200');

function genericEngineModel(req, res) {
    let organism = components[req.params.components]
    let key = {};
    for (let k in organism.getModel.schema.paths) {
        key[k] = {};
        key[k]['instance'] = organism.getModel.schema.paths[k]['instance'];
        key[k]['isRequired'] = organism.getModel.schema.paths[k]['isRequired'];
    }

    callback(null, key, res);

}
module.exports = genericEngineModel;
