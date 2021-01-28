//required dependencies
const EXPRESS = require("express");
const CORS = require("cors");
const MONGOOSE = require("mongoose");
const ROUTER = EXPRESS.Router();

//required variables
const URI = "mongodb://localhost/accountant";
const PORT = process.env.port||3001;

//initialising application
const APP = EXPRESS();
APP.use(CORS);
APP.use(EXPRESS.json());

//connect DB
MONGOOSE.connect(URI,{useNewUrlParser:true,useCreateIndex:true, useUnifiedTopology:true})
.then(console.log("DB connected successfully"))
.catch(err=>console.error(err));

//Deploying server
APP.listen(PORT,()=>console.log(`App running on port : ${PORT}`))

//samplerouter
ROUTER.route('/').get((req,res)=>{
    res.json("app working");
    console.log("hit")
});

