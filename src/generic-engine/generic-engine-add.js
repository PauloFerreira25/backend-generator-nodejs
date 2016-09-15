'use strict';
const components = require('../../components/components-list');
const callback = require('../utils/action-callback-http-200');
const querystring = require('querystring');

function genericEngineAdd(req, res) {
    let queryData = '';
    req.on('data', (data) => {
        queryData += data;
    });
    req.on('end', () => {
        const obj = querystring.parse(queryData);
        components[req.params.components].create(obj, (err, data) => callback(err, data, res));
    });
}
module.exports = genericEngineAdd;
