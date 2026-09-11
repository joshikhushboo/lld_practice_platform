const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema(
  {
    attemptId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Attempt",
      required: true,
    },

    requirements: {
      type: String,
      default: "",
    },

    classes: {
      type: String,
      default: "",
    },

    responsibilities: {
      type: String,
      default: "",
    },

    relationships: {
      type: String,
      default: "",
    },

    explanation: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Submission", submissionSchema);