const express = require('express')
const Tables = require('../model/table')
const router = express.Router()
const app = express();
app.use(express.json());

router.post('/createcamp', async (req, res) => {
    const table = new Tables({
      campaign: req.body.campaign,
      budget: req.body.budget,
      rupes: req.body.rupes,
      startdate: new Date(req.body.startdate),
      customaud: req.body.customaud,
      targety: req.body.targety,
    }); 
  console.log("body",table)


    try {
      const tableDataTosave = await table.save();
      res.status(201).json({ message: "Data saved successfully", table: tableDataTosave });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });

  router.get('/createcamp',async(req, res)=>{
    try{
        const tableDataToget = await Tables.find()
        res.json(tableDataToget)
    }
    catch (error) {
        res.status(500).json({message:error.message})
    }
  })
  


module.exports = router