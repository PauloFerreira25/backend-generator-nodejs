'use strict';
const logger = require('../logger/logger.js');
const path = require('path');
const filename = path.basename(__filename);
const dirname = path.dirname(__filename)


const countP = (Organism, query) => new Promise((resolve, reject) => {
    Organism.count(query, (err, data) => {
        if (err) throw err;
        logger.debug(dirname + "/" + filename + " - countP" + ": " + data)
        resolve(data);
    });
});

const findP = (Organism, query, currentPage, perPage) => new Promise((resolve, reject) => {
    Organism.find(query, currentPage, perPage, (err, data) => {
        if (err) throw err;
        logger.debug(dirname + "/" + filename + " - findP" + ": " + JSON.stringify(data).toString());
        resolve(data);
    });
});


const schemaP = Organism => new Promise((resolve, reject) => {
    let key = {};
    for (let k in Organism.getModel.schema.paths) {
        key[k] = {};
        key[k]['instance'] = Organism.getModel.schema.paths[k]['instance'];
        key[k]['isRequired'] = Organism.getModel.schema.paths[k]['isRequired'];
    }
    logger.debug(dirname + "/" + filename + " - schemaP" + ": " + JSON.stringify(key).toString())
    resolve(key);
});

const onEndP = (result, currentPage, perPage, callback) => (
    callback(null, {
        pagination: {
            total: result[1],
            per_page: perPage,
            current_page: currentPage,
            last_page: Math.round(result[1] / perPage)
        },
        data: result[2],
        schema: result[0]
    }));

const countAndFindUsers = (Organism, query, currentPage, perPage, callback) => {
    const promises = [schemaP(Organism), countP(Organism, query), findP(Organism, query, currentPage, perPage)];
    Promise.all(promises).then(result => onEndP(result, currentPage, perPage, callback))
};

module.exports = countAndFindUsers
