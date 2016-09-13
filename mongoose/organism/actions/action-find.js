'use strict';
module.exports = (Organism) => {
    return (query, skip, limit, callback) => {
        Organism.find(query, callback).skip(skip).limit(limit)
    };
};
