const express = require("express");
const Problem = require("../models/problem");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const problems = await Problem.find();
    res.json(problems);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch problems" });
  }
});

router.post("/", async (req, res) => {
  try {
    const problem = await Problem.create(req.body);
    res.status(201).json(problem);
  } catch (error) {
    res.status(500).json({ message: "Failed to create problem" });
  }
});

module.exports = router;