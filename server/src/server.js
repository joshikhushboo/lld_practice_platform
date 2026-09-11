const express = require("express");
const cors = require("cors");

require("dotenv").config();
const mongoose = require("mongoose");
const app = express();
const problemRoutes = require("./routes/problemRoutes");
const attemptRoutes = require("./routes/attemptRoutes");const submissionRoutes = require("./routes/submissionRoutes");
const evaluationRoutes = require("./routes/evaluationRoutes");
const historyRoutes = require("./routes/historyRoutes");
app.use(cors());
app.use(express.json());
app.use("/api/problems", problemRoutes);
app.use("/api/attempts", attemptRoutes);
app.use("/api/submissions", submissionRoutes);
app.use("/api/history", historyRoutes);
app.use("/api/evaluations", evaluationRoutes);
app.get("/", (req, res) => {
  res.json({ message: "LLD Practice Platform API is running" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB connection failed:", err));