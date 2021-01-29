const MONGOOSE = require("mongoose");
const SCHEMA = MONGOOSE.Schema;

const COLLECTION_NAME = "users";
var usersSchema = new SCHEMA({
userName:{
    type:String,
    required:true
},
password:{
    type:String,
    required:true,
    minlength:8
},
role:{
    type:String,
    required:true
}
});

const USERS = MONGOOSE.model("users", usersSchema,COLLECTION_NAME);

module.exports = USERS;