const googleIt = require("google-it");

async function searchGoogle(query) {
  const results = await googleIt({ query, limit: 5 });

  // filter blogs/articles only
  const links = results
    .filter(r => r.link && r.link.startsWith("http"))
    .slice(0, 2)
    .map(r => r.link);

  return links;
}

module.exports = searchGoogle;
