const MONGOOSE = require('mongoose');
const { collection } = require('./typesOfRecords.model');

const SCHEMA = MONGOOSE.Schema;

var typesOfAttacksSchema = new SCHEMA({

    name:{
    type:String,
    required:true
}
});
var collectionName = "typesOfAttacks";
const TYPES_OF_ATTACKS = MONGOOSE.model("typesOfAttacks",typesOfAttacksSchema, collectionName);

module.exports = TYPES_OF_ATTACKS;