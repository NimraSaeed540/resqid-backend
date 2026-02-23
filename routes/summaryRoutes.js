const express = require("express");
const router = express.Router();
const Summary = require("../models/summarypage");

router.post("/create", async (req, res) => {
  try {
    const summary = await summary.create(req.body);

    res.json({
      success: true,
      message: "Summary saved successfully",
      summary,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;