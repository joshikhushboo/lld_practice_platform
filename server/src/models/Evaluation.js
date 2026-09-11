const mongoose = require("mongoose");

const evaluationSchema = new mongoose.Schema(
  {
    attemptId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Attempt",
      required: true,
    },

    overallScore: {
      type: Number,
      default: 0,
    },

    summary: {
      type: String,
      default: "",
    },

    criteria: [
      {
        name: String,
        score: Number,
        evidence: String,
        concern: String,
        suggestion: String,
        confidence: String,
      },
    ],

    evaluatorType: {
      type: String,
      default: "AI",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Evaluation", evaluationSchema);