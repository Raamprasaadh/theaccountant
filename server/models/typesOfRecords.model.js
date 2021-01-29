const MONGOOSE = require("mongoose");
const SCHEMA = MONGOOSE.Schema;

const COLLECTION_NAME ="typesOfRecords";

var typesOfRecordsSchema = new SCHEMA({

});

const TYPES_OF_RECORDS = MONGOOSE.model("typesOfRecords",typesOfRecordsSchema,COLLECTION_NAME);

module.exports = TYPES_OF_RECORDS;