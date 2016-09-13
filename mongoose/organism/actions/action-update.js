'use strict';
module.exports = (Organism) => {
    return (query, mod, callback) => {
        let queryData = '';

        req.on('data', (data) => {
            queryData += data;
        });

        req.on('end', () => {
            Organism.update(query, mod, callback);
        });
    };
};
