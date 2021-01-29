const MONGOOSE =  require("mongoose");
const SCHEMA = MONGOOSE.Schema;

var farmDetailsSchema = new SCHEMA({

});

const FARM_DETAILS = MONGOOSE.model("farmDetails",farmDetailsSchema);

module.exports = FARM_DETAILS;