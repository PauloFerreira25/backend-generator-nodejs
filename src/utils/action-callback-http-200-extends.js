'use strict';

module.exports = (err, data, res, pagination, organism) => {
    if (err) return console.log('Erro:', err);

    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    let retorno = {};
    //  console.log(organism.schema.paths)
    ///let body = JSON.parse(organism);
    ///for (let key in body) {
    //console.log(organism.schema.paths);
    ///  }
    let key = {};
    for (let k in organism.schema.paths) {
        key[k] = {};
        key[k]['instance'] = organism.schema.paths[k]['instance'];
        key[k]['isRequired'] = organism.schema.paths[k]['isRequired'];
    }

    retorno['schema'] = key;
    retorno['data'] = data;
    return res.end(JSON.stringify(retorno));
};
