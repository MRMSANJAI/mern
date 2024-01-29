const express = require('express');
const Model = require('../model');

const router = express.Router();

router.post('/profileinfo',async (req, res) => { 

    const data = new Model({
     adname:req.body.adname,
     campaignname:req.body.campaignname,
     bidstrategy:req.body.bidstrategy,
     budget:req.body.budget,
     objective:req.body.objective,

    });

    try{
      const dataToSave =  await data.save();
      res.status(201).json(dataToSave);  

    }catch(error){
       res.status(400).json({message:error.message})
    }
});

router.get('/profileinfo',async (req, res) => { 
    try{
    const dataToget=  await Model.find();
    res.status(201).json(dataToget);  

  }catch(error){
     res.status(400).json({message:error.message})
  }
});
module.exports = router;