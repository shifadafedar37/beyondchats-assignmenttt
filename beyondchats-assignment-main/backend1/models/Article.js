const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema(
  {
    title: String,
    content: String,
    original_url: String,

    // Phase 2 fields
    updatedContent: String,
    references: [String],
    isUpdated: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Article", articleSchema);
