const express = require("express");
const Submission = require("../models/Submission");
const Attempt = require("../models/Attempt");
const Problem = require("../models/problem");
const Evaluation = require("../models/Evaluation");
const { evaluateSubmission } = require("../services/aiEvaluator");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const {
      attemptId,
      requirements,
      classes,
      responsibilities,
      relationships,
      explanation,
    } = req.body;

    const attempt = await Attempt.findById(attemptId);

    if (!attempt) {
      return res.status(404).json({
        message: "Attempt not found",
      });
    }

    const problem = await Problem.findById(attempt.problemId);

    if (!problem) {
      return res.status(404).json({
        message: "Problem not found",
      });
    }

    // Save submission first
    const submission = await Submission.create({
      attemptId,
      requirements,
      classes,
      responsibilities,
      relationships,
      explanation,
    });

    // Start evaluation
    attempt.status = "EVALUATING";
    await attempt.save();

    try {
      const feedback = await evaluateSubmission(problem, submission);

      const evaluation = await Evaluation.create({
        attemptId,
        overallScore: feedback.overallScore,
        summary: feedback.summary,
        criteria: feedback.criteria,
        evaluatorType: "AI",
      });

      attempt.status = "COMPLETED";
      await attempt.save();

      res.status(201).json({
        message: "Solution evaluated successfully",
        submission,
        evaluation,
      });
    } catch (evaluationError) {
      console.error("AI evaluation failed:", evaluationError);

      attempt.status = "FAILED";
      await attempt.save();

      res.status(500).json({
        message: "Submission saved, but AI evaluation failed",
        submission,
      });
    }
  } catch (error) {
    console.error("Submission error:", error);

    res.status(500).json({
      message: "Failed to submit solution",
    });
  }
});

module.exports = router;