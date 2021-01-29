const ROUTER = require("express").Router();

const FD = require('../models/farmDetails.model');

ROUTER.route('/').get((req,res)=>{
    FD.find()
    .then((data)=>{res.json(data)})
    .catch((err=>res.status(400).json("error:"+err)));
});

module.exports=ROUTER;