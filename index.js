const express = require("express");
const connectDb = require("./db");
const Survey = require("./models/Survey");
const PORT = 5000;

// Init express
const app = express();
app.use(express.json());

// Connect to database
connectDb();

// Create a new survey and save to Database
app.post("/survey", async (req, res) => {
  const { name, survey } = req.body;

  try {
    const surveys = new Survey({
      name,
      survey,
    });

    // Save survey to database
    surveys
      .save()
      .then((item) => res.send("Survey was saved to database"))
      .catch((err) => {
        err.status(400).send("Unable to save to database");
      });
  } catch (err) {
    console.error(err);
  }
});

// Read surveys from db and display in a list
app.get("/survey", async (req, res) => {
  try {
    const surveys = await Survey.find().sort({ date: -1 });
    res.json(surveys);
  } catch (err) {
    console.error(err);
  }
});

// Read single survey from db
app.get("/survey/:id", async (req, res) => {
  try {
    const surveys = await Survey.findById(req.params.id);
    res.json(surveys);
  } catch (err) {
    console.error(err);
  }
});

// Delete survey depending on ID
app.delete("/survey/:id", async (req, res) => {
  try {
    await Survey.findByIdAndDelete(req.params.id);
    res.json({ msg: "Survey was removed" });
  } catch (err) {
    console.error(err);
  }
});

// Edit survey depending on ID
app.put("/survey/:id", async (req, res) => {
  const { name, survey } = req.body;

  // Build Item object
  const surveyFields = {};
  if (name) surveyFields.name = name;
  if (survey) surveyFields.survey = survey;

  try {
    // update
    let updatedSurvey = await Survey.findByIdAndUpdate(
      req.params.id,
      {
        $set: surveyFields,
      },
      { new: true }
    ); // if the item doesnt exist create it

    res.json(updatedSurvey);
  } catch (err) {
    console.error(err);
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
