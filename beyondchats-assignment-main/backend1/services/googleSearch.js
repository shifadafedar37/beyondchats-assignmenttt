const axios = require("axios");
const cheerio = require("cheerio");

async function searchArticles(query) {
  const url = `https://duckduckgo.com/html/?q=${encodeURIComponent(query)}`;
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);

  const links = [];

  $("a.result__a").each((i, el) => {
    if (links.length < 2) {
      links.push($(el).attr("href"));
    }
  });

  return links;
}

module.exports = searchArticles;
