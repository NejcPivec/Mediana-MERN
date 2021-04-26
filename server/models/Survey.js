const mongoose = require("mongoose");

const SurveysSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  survey: {
    type: Object,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("surveys", SurveysSchema);
