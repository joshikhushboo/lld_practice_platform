const express = require("express");
const Evaluation = require("../models/Evaluation");

const router = express.Router();

router.get("/:attemptId", async (req, res) => {
  try {
    const evaluation = await Evaluation.findOne({
      attemptId: req.params.attemptId,
    });

    if (!evaluation) {
      return res.status(404).json({
        message: "Evaluation not found",
      });
    }

    res.json(evaluation);
  } catch (error) {
    console.error("Evaluation fetch error:", error);

    res.status(500).json({
      message: "Failed to fetch evaluation",
    });
  }
});

module.exports = router;