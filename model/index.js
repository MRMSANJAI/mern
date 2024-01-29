const  mongoose = require('mongoose');
 
const dataSchema = new mongoose.Schema({
   
    adname:{
        required:true,
        type:String,
    },
    campaignname :{
        required:true,
        type:String, 
    },
    bidstrategy:{
        required:true,
        type:String, 
    },
    budget:{
        required:true,
        type:String,
    },
    objective:{
        required:true,
        type:String,
    }
});

module.exports = mongoose.model('marketing',dataSchema);

