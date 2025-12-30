import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function UpdatedArticle() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/articles/${id}`)
      .then(res => res.json())
      .then(data => setArticle(data));
  }, [id]);

  if (!article) return <p>Loading...</p>;

  return (
    <div className="updated-page">
      <h1>{article.title}</h1>
      <p>{article.updatedContent}</p>

      <h3>References</h3>
      <ul>
        {article.references.map((ref, i) => (
          <li key={i}>
            <a href={ref} target="_blank">{ref}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
