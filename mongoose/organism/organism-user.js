'use strict';

const mongoose = require('mongoose');
const Molecule = require('./molecules/molecule-user');
const Organism = mongoose.model('User', Molecule);
const create = require('./actions/action-create')(Organism);
const count = require('./actions/action-count')(Organism);
const find = require('./actions/action-find')(Organism);
const findOne = require('./actions/action-findOne')(Organism);
const update = require('./actions/action-update')(Organism);
const remove = require('./actions/action-remove')(Organism);
const getModel = require('./actions/action-getModel')(Organism);

const CRUD = {
    create,
    count,
    find,
    findOne,
    update,
    remove,
    getModel
};
module.exports = CRUD;
