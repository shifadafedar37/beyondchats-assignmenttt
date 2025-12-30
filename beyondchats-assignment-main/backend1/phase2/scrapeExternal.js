const axios = require("axios");
const cheerio = require("cheerio");

async function scrapeArticle(url) {
  const { data } = await axios.get(url, { timeout: 15000 });
  const $ = cheerio.load(data);

  const content = $("p")
    .map((i, el) => $(el).text())
    .get()
    .join("\n");

  return content.slice(0, 4000); // keep LLM input small
}

module.exports = scrapeArticle;
