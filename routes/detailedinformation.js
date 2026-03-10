const express = require("express");
const router = express.Router();
const MedicalProfile = require("../models/MedicalProfile");

// GET Detailed Information
router.get("/getDetailedInfo/:email", async (req, res) => {
  try {
    const profile = await MedicalProfile.findOne({
      email: req.params.email,
    });

    if (!profile) {
      return res.json({
        success: false,
        message: "Profile not found",
      });
    }

    res.json({
      success: true,
      details: {
        currentMedicines: profile.currentMedicines,
        diseaseYear: profile.diseaseYear,
        pastSurgeries: profile.pastSurgeries,
        additionalNotes: profile.additionalNotes,
        checkupFile: profile.checkupFile,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false });
  }
});

module.exports = router;