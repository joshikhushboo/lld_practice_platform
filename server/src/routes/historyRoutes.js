const express = require("express");
const Attempt = require("../models/Attempt");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const attempts = await Attempt.find()
      .populate("problemId", "title difficulty")
      .sort({ createdAt: -1 });

    res.json(attempts);
  } catch (error) {
    console.error("History error:", error);
    res.status(500).json({ message: "Failed to fetch history" });
  }
});

module.exports = router;