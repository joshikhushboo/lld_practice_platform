const mongoose = require("mongoose");

const attemptSchema = new mongoose.Schema(
  {
    problemId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Problem",
      required: true,
    },

    status: {
      type: String,
      enum: ["DRAFT", "SUBMITTED", "EVALUATING", "COMPLETED", "FAILED"],
      default: "DRAFT",
    },

    attemptNumber: {
      type: Number,
      default: 1,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Attempt", attemptSchema);