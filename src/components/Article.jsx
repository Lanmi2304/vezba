import { useDispatch } from "react-redux";
import { articleActions } from "../store";

const Article = ({ article }) => {
  const dispatch = useDispatch();
  const { id, title, content, favorite } = article;

  const favoriteHandler = () => {
    dispatch(articleActions.addToFavorite(id));
  };
  return (
    <div className="addArticle-wrapper">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={favoriteHandler}>
        {!favorite ? "Add to Favorites" : "Remove from Favorites"}
      </button>
    </div>
  );
};

export default Article;
