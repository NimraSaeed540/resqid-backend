const mongoose = require("mongoose");

const medicalProfileSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },

    bloodGroup: String,
    allergy: String,
    disease: String,
    age: String,
    address: String,

    medicines: String,
    diseaseYear: String,
    pastSurgeries: String,
    additionalInfo: String,

    checkupFile: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Profile", profileSchema);