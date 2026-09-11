const express = require("express");
const Attempt = require("../models/Attempt");
const Problem = require("../models/problem");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { problemId } = req.body;

    const problem = await Problem.findById(problemId);

    if (!problem) {
      return res.status(404).json({
        message: "Problem not found",
      });
    }

    const attempt = await Attempt.create({
      problemId,
      status: "DRAFT",
      attemptNumber: 1,
    });

    res.status(201).json(attempt);
  } catch (error) {
    console.error("Create attempt error:", error);
    res.status(500).json({
      message: "Failed to create attempt",
    });
  }
});

module.exports = router;