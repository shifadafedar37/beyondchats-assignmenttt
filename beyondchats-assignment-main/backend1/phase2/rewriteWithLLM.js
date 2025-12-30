const fetch = require("node-fetch");

async function rewriteArticle(original, ref1, ref2) {
  const response = await fetch(
    "https://api-inference.huggingface.co/models/google/flan-t5-large",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.HF_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inputs: `
Rewrite the following article by improving structure, tone, and clarity.
Use ideas from reference articles but keep it original.

ORIGINAL:
${original}

REFERENCE 1:
${ref1}

REFERENCE 2:
${ref2}
        `,
      }),
    }
  );

  const result = await response.json();
  return result[0]?.generated_text || original;
}

module.exports = rewriteArticle;
