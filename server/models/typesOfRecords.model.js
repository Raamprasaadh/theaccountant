const MONGOOSE = require("mongoose");
const SCHEMA = MONGOOSE.Schema;

var typesOfRecordsSchema = new SCHEMA({

});

const TYPES_OF_RECORDS = MONGOOSE.model("typesOfRecords",typesOfRecordsSchema);

module.exports = TYPES_OF_RECORDS;