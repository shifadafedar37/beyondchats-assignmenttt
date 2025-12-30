const axios = require("axios");
const cheerio = require("cheerio");

async function scrapeArticle(url) {
  try {
    const { data } = await axios.get(url, { timeout: 8000 });
    const $ = cheerio.load(data);

    return $("p")
      .map((i, el) => $(el).text())
      .get()
      .join("\n")
      .slice(0, 3000);
  } catch {
    return "";
  }
}

module.exports = scrapeArticle;
