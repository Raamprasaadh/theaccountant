const MONGOOSE = require('mongoose');

const SCHEMA = MONGOOSE.Schema;

var typesOfAttacksSchema = new SCHEMA({

});

const TYPES_OF_ATTACKS = MONGOOSE.model("typesOfAttacks",typesOfAttacksSchema);

module.exports = TYPES_OF_ATTACKS;