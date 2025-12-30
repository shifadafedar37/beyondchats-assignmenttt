require("dotenv").config();
const mongoose = require("mongoose");

const Article = require("../models/Article");
const searchGoogle = require("./googleSearch");
const scrapeArticle = require("./scrapeExternal");
const rewriteArticle = require("./rewriteWithLLM");

async function run() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("MongoDB connected for Phase 2");

  const articles = await Article.find({ isUpdated: false });

  for (const article of articles) {
    console.log("Processing:", article.title);

    const links = await searchGoogle(article.title);
    if (links.length < 2) continue;

    const ref1 = await scrapeArticle(links[0]);
    const ref2 = await scrapeArticle(links[1]);

    const updated = await rewriteArticle(
      article.content,
      ref1,
      ref2
    );

    article.updatedContent = updated;
    article.references = links;
    article.isUpdated = true;
    await article.save();

    console.log("Updated:", article.title);
  }

  console.log("Phase 2 complete ✅");
  process.exit();
}

run();
