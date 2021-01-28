const { Router } = require("express");

const ROUTERS = require("express").Router();

ROUTERS.route('/').get((req,res)=>{
    res.status(200).json("Types route Here!")
});


module.exports= ROUTERS;