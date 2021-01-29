const MONGOOSE =  require("mongoose");
const SCHEMA = MONGOOSE.Schema;

const COLLECTION_NAME = "farmDetails";
var farmDetailsSchema = new SCHEMA({

});

const FARM_DETAILS = MONGOOSE.model("farmDetails",farmDetailsSchema,COLLECTION_NAME);

module.exports = FARM_DETAILS;