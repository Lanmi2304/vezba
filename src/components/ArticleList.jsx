import { useSelector } from "react-redux";
import Article from "./Article";

const ArticleList = () => {
  const articles = useSelector((state) => state.article.articles);

  console.log(articles);

  return (
    <div>
      {articles.map((a) => (
        <Article key={a.id} article={a} />
      ))}
    </div>
  );
};

export default ArticleList;
