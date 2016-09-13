'use strict';
module.exports = (Organism) => {
    return (query, callback) => {
        Organism.findOne(query, callback)
    };
};
