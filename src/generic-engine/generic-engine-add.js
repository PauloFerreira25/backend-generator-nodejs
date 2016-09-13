'use strict';
let user = require('../../mongoose/organism/organism-user');

const callback = require('../utils/action-callback-http-200');

function genericEngineAdd(req, res) {
    console.log("oi")
    let obj = {
        'name': 'teste'
    }
    return user.create(obj, (err, data) => callback(err, data, res));
}
module.exports = genericEngineAdd;
