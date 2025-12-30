require("dotenv").config(); // MUST be at top

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express(); // ✅ MISSING LINE (VERY IMPORTANT)

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  });

// Test route (IMPORTANT for checking)
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
const articleRoutes = require("./routes/articleRoutes");
app.use("/api/articles", articleRoutes);
