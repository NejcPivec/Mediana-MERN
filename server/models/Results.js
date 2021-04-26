const mongoose = require("mongoose");

const ResultsSchema = mongoose.Schema({
  surveyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "surveys",
  },
  respondent: {
    type: Number,
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

module.exports = mongoose.model("results", ResultsSchema);
