'use strict';
module.exports = (Organism) => {
    return (query, callback) => {
        Organism.remove(query, callback)
    };
};
