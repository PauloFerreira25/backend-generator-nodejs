'use strict';
module.exports = (Organism) => {
    return (query, callback) => {
        Organism.count(query, callback);
    };
};
