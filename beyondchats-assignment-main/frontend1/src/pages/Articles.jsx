import { useEffect, useState } from "react";
import ArticleCard from "../components/ArticleCard";

export default function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/articles")
      .then(res => res.json())
      .then(data => setArticles(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>BeyondChats – Articles</h1>

      {articles.length === 0 && <p>No articles found</p>}

      {articles.map(article => (
        <ArticleCard key={article._id} article={article} />
      ))}
    </div>
  );
}
