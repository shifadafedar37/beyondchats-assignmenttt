const axios = require("axios");
const cheerio = require("cheerio");
const mongoose = require("mongoose");
require("dotenv").config();

const Article = require("../models/Article");

async function scrape() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("MongoDB connected for scraping");

  const blogListURL = "https://beyondchats.com/blogs/";
  const { data } = await axios.get(blogListURL);
  const $ = cheerio.load(data);

  const links = [];

  $("a[href^='/blogs/']").each((i, el) => {
    const href = $(el).attr("href");
    if (href && href.split("/").length > 2) {
      links.push(href);
    }
  });

  const uniqueLinks = [...new Set(links)];
  const oldestFive = uniqueLinks.slice(-5);

  console.log("Found links:", oldestFive.length);

  for (const link of oldestFive) {
    const fullUrl = `https://beyondchats.com${link}`;

    const page = await axios.get(fullUrl);
    const $$ = cheerio.load(page.data);

    const title = $$("h1").first().text().trim();

    const content = $$("p")
      .map((i, el) => $$(el).text().trim())
      .get()
      .join("\n\n");

    if (!title) {
      console.log("Skipped (no title):", fullUrl);
      continue;
    }

    const exists = await Article.findOne({ original_url: fullUrl });
    if (exists) {
      console.log("Already exists:", title);
      continue;
    }

    await Article.create({
      title,
      content: content || "Content not available",
      original_url: fullUrl,
    });

    console.log("Saved:", title);
  }

  console.log("Scraping complete ✅");
  process.exit();
}

scrape();
