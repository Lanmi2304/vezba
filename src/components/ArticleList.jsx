import { useSelector } from "react-redux";

import Article from "./Article";
import Search from "./Search";
import NoArticles from "./NoArticles";

const ArticleList = () => {
  const searchTerm = useSelector((state) => state.article.search);
  const articles = useSelector((state) => state.article.articles);

  const filteredArticles = articles.filter((a) =>
    a.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Search />
      <div className="flex-container">
        {filteredArticles.length > 0 ? (
          filteredArticles.map((a) => <Article key={a.id} article={a} />)
        ) : (
          <NoArticles />
        )}
      </div>
    </>
  );
};

export default ArticleList;
