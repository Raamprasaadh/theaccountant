//required dependencies
const EXPRESS = require("express");
const CORS = require("cors");
const MONGOOSE = require("mongoose");


//required variables
const URI = "mongodb://localhost/accountant";
const PORT = process.env.port||3001;

//routes
const TYPES_ROUTE = require('./routes/types');
const FD_ROUTE = require('./routes/farmDetails');
const ACCOUNTS_ROUTE = require('./routes/accounts');

//initialising application
const APP = EXPRESS();
APP.use(CORS());
APP.use(EXPRESS.json());

APP.use('/types',TYPES_ROUTE);
APP.use('/farmDetails',FD_ROUTE);
APP.use('/accounts',ACCOUNTS_ROUTE);

//connect DB
MONGOOSE.connect(URI,{useNewUrlParser:true,useCreateIndex:true, useUnifiedTopology:true})
.then(console.log("DB connected successfully"))
.catch(err=>console.error(err));

//Deploying server
APP.listen(PORT,()=>console.log(`App running on port : ${PORT}`))



