const mongoose = require("mongoose");

const medicalProfileSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",   // ✅ Capital U same as model name
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    age: Number,
    bloodGroup: String,
    disease: String,
    allergy: String,
    emergencyContact: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("MedicalProfile", medicalProfileSchema);