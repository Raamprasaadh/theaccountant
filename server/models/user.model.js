const MONGOOSE = require("mongoose");
const SCHEMA = MONGOOSE.Schema;

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

const USERS = MONGOOSE.model("users", usersSchema);

module.exports = USERS;