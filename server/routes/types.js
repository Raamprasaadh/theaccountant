const { Router } = require("express");

const ROUTERS = require("express").Router();
//TOA == types of attacks
const TOA = require('../models/typesOfAttack.model');
//TOA == types of records
const TOR = require('../models/typesOfRecords.model');

//returns all the data in TOA collection
ROUTERS.route('/toa').get((req,res)=>{
    
    TOA.find()
    .then((data)=>{
           res.json(data)})
    .catch((err)=>res.status(400).json("error:"+err));
});

//returns all the data in TOR collection
ROUTERS.route('/tor').get((req,res)=>{
    TOR.find()
    .then((data)=>{res.json(data)})
    .catch((err)=>{res.status(400).json("error:"+err)});
})


module.exports= ROUTERS;