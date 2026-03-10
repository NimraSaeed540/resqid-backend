const mongoose = require("mongoose");

const detailedInformationSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },

    currentMedicines: String,
    diseaseYear: String,
    pastSurgeries: String,
    additionalNotes: String,

    checkupFile: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "DetailedInformation",
  detailedInformationSchema
);