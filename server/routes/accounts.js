const ROUTER = require('express').Router();

const ACCOUNTS = require('../models/accounts.model');

ROUTER.route('/').get((req,res)=>{
    ACCOUNTS.find()
    .then((data)=>{res.json(data)})
    .catch((err)=>res.status(400).json("error:"+err));
});
ROUTER.route("/add").post((req,res)=>{
    var newRecord={};
    //mandatory
    newRecord.date = new Date(req.body.date);
    newRecord.type = req.body.tor;
    newRecord.eir = req.body.eir;
    newRecord.partition = req.body.partition;
    //optional
    if(req.body.amt){
        newRecord.amount = parseFloat(req.body.amt).toFixed(2);
    }
    if(req.body.desc){
        newRecord.desc = req.body.desc;
    }
    if(req.body.treeNo){
        newRecord.tree = req.body.treeNo;
    }
    if(req.body.toa){
        newRecord.typeOfAttack = req.body.toa;
        }
    const RECORD = new ACCOUNTS(newRecord);

    RECORD.save()
    .then(()=>{res.json("Record Added successfully")})
    .catch((err)=>{res.status(400).json("error:"+err)});

});

module.exports = ROUTER;