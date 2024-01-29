const mongoose = require("mongoose");

const tableSchema = mongoose.Schema({
  campaign: {
    require: true,
    type: String,
  },
  budget: {
    require: true,
    type: String,
  },
  rupes: {
    require: true,
    type: Number,
  },
  startdate: {
    required: true,
    type: Date,
  },
  customaud: {
    require: true,
    type: String,
  },
  targety: {
    require: true,
    type: String,
  },
});

module.exports = mongoose.model("profile", tableSchema);