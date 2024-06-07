import { useSelector } from "react-redux";

const NoArticles = () => {
  const articleLen = useSelector((state) => state.article.articles).length;

  return <>{articleLen === 0 ? null : <p>Nothing to show</p>}</>;
};

export default NoArticles;
