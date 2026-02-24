const mongoose = require("mongoose");

const medicalProfileSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    fullName: String,
    age: Number,
    bloodGroup: String,
    disease: String,
    allergy: String,
    emergencyContact: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("MedicalProfile", medicalProfileSchema);
