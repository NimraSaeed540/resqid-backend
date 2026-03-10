const express = require("express");
const router = express.Router();
const multer = require("multer");
const MedicalProfile = require("../models/MedicalProfile");

// ================= FILE UPLOAD SETUP =================

const storage = multer.diskStorage({
  destination: "./uploads",
  filename: (req, file, cb) => {
    cb(null, Date.now() + ".pdf");
  },
});

const upload = multer({ storage });

// ================= SAVE PROFILE =================

router.post("/save", upload.single("checkupFile"), async (req, res) => {
  try {
    const {
      bloodGroup,
      allergy,
      disease,
      age,
      address,
      medicines,
      diseaseYear,
      pastSurgeries,
      additionalInfo,
    } = req.body;

    const email = req.body.email; // IMPORTANT

    if (!email) {
      return res.status(400).json({ success: false, message: "Email required" });
    }

    let profile = await MedicalProfile.findOne({ email });

    if (!profile) {
      profile = new MedicalProfile({ email });
    }

    profile.bloodGroup = bloodGroup;
    profile.allergy = allergy;
    profile.disease = disease;
    profile.age = age;
    profile.address = address;
    profile.medicines = medicines;
    profile.diseaseYear = diseaseYear;
    profile.pastSurgeries = pastSurgeries;
    profile.additionalInfo = additionalInfo;

    if (req.file) {
      profile.checkupFile = req.file.filename;
    }

    await profile.save();

    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false });
  }
});

// ================= GET PROFILE =================

router.get("/get/:email", async (req, res) => {
  try {
    const profile = await MedicalProfile.findOne({
      email: req.params.email,
    });

    res.json({ success: true, profile });
  } catch (error) {
    res.status(500).json({ success: false });
  }
});

module.exports = router;