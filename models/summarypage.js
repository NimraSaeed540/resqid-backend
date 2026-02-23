const mongoose = require("mongoose");

const summarySchema = new mongoose.Schema({
  diseaseName: String,
  sinceWhen: String,
  medicines: String,
  hospital: String,
  notes: String,
});

module.exports = mongoose.model("summary", summarySchema);