const axios = require("axios");
const searchArticles = require("../services/googleSearch");
const scrapeArticle = require("../services/scraper");
const rewriteWithLLM = require("../services/llm");

const API = "http://localhost:5000/api/articles";

async function runPhase2() {
  const { data: articles } = await axios.get(API);

  console.log(`Fetched ${articles.length} articles`);

  for (const article of articles) {
    if (article.isUpdated) {
      console.log("Already updated:", article.title);
      continue;
    }

    console.log("Processing:", article.title);

    const links = await searchArticles(article.title);
    if (links.length < 2) {
      console.log("Not enough references, skipping");
      continue;
    }

    const ref1 = await scrapeArticle(links[0]);
    const ref2 = await scrapeArticle(links[1]);

    const updatedContent = await rewriteWithLLM(
      article.content,
      ref1,
      ref2
    );

    await axios.put(`${API}/${article._id}`, {
      updatedContent,
      references: links,
      isUpdated: true,
    });

    console.log("Updated:", article.title);
  }

  console.log("Phase 2 automation complete ✅");
}

runPhase2();
