const express = require("express");
const router = express.Router();
const MedicalProfile = require("../models/MedicalProfile"); // ✅ EXACT SAME NAME
const protect = require("../middleware/authmiddleware");

// CREATE PROFILE
router.post("/create", protect, async (req, res) => {
  try {
    const profile = await MedicalProfile.create({
      ...req.body,
      user: req.user._id,
    });

    res.status(201).json({
      success: true,
      message: "Profile saved successfully",
      profile,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// GET MY PROFILE
router.get("/myprofile", protect, async (req, res) => {
  try {
    const profile = await MedicalProfile.findOne({
      user: req.user._id,
    });

    if (!profile) {
      return res.status(404).json({
        success: false,
        message: "No profile found",
      });
    }

    res.status(200).json({
      success: true,
      profile,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;