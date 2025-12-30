export default function ArticleCard({ article }) {
  if (!article || !article.original_url) {
    return null; // prevents crash
  }

  return (
    <div style={{
      border: "1px solid #ddd",
      padding: "16px",
      marginBottom: "16px",
      borderRadius: "6px",
    }}>
      <h2>{article.title}</h2>

      <button
        onClick={() => window.open(article.original_url, "_blank")}
        style={{
          marginTop: "10px",
          padding: "10px 16px",
          backgroundColor: "#2563eb",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontWeight: "500",
        }}
      >
        View Original Article
      </button>
    </div>
  );
}
