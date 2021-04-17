const express = require("express");
const connectDb = require("./db");
const PORT = 5000;

// Init express
const app = express();
app.use(express.json());

// Connect to database
connectDb();

// TODO: Create a new survey and save to Database
// TODO: Read surveys from db and display in a list
// TODO: Delete survey depending on ID
// TODO: Edit survey depending on ID

// Start server
app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});