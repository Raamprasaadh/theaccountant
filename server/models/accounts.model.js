const MONGOOSE = require("mongoose");
const SCHEMA = MONGOOSE.Schema;

var accountsSchema = new SCHEMA({
date:{
    type: Date,
    required:true
},
type:{
    type:String,
    required : true
},
amount:{
    type:Number,
},
eir:{
    type:String,
    required:true
},
varapu:{
    type:String,
    required:true
},
tree:{
    type:Number,
},
typeOfAttack:{
    type:String
},
desc:{
    type:String
}


});

const ACCOUNTS = MONGOOSE.model("accounts",accountsSchema);

module.exports = ACCOUNTS;