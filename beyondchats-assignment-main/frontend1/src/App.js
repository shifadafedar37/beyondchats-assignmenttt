import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/articles")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading articles...</h2>;
  }

  return (
    <div style={{ padding: "20px", maxWidth: "1000px", margin: "auto" }}>
      <h1 style={{ textAlign: "center" }}>BeyondChats – Articles</h1>

      {articles.map((article) => (
        <div
          key={article._id}
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            marginBottom: "30px",
            borderRadius: "8px",
            backgroundColor: "#fafafa",
          }}
        >
          <h2>{article.title}</h2>

          {/* Original */}
          <section style={{ marginTop: "15px" }}>
            <h3 style={{ color: "#1f4ed8" }}>Original Article</h3>
            <p style={{ whiteSpace: "pre-line" }}>
              {article.content.slice(0, 1500)}...
            </p>
          </section>

          {/* Updated */}
          {article.isUpdated && (
            <section style={{ marginTop: "20px" }}>
              <h3 style={{ color: "#15803d" }}>
                Updated Article (AI Enhanced)
              </h3>
              <p style={{ whiteSpace: "pre-line" }}>
                {article.updatedContent}
              </p>
            </section>
          )}

          {/* References */}
          {article.references?.length > 0 && (
            <section style={{ marginTop: "15px" }}>
              <h4>References</h4>
              <ul>
                {article.references.map((ref, idx) => (
                  <li key={idx}>
                    <a href={ref} target="_blank" rel="noreferrer">
                      {ref}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      ))}
    </div>
  );
}

export default App;
