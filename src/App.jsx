import { useDispatch, useSelector } from "react-redux";
import AddArticle from "./components/AddArticle";
import ArticleList from "./components/ArticleList";
import { articleActions } from "./store";

const App = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.article.toggleAdd);

  const showAddForm = () => {
    dispatch(articleActions.addShow());
  };

  return (
    <>
      {!show && <button onClick={showAddForm}>Add Article</button>}
      {show && <AddArticle />}

      <ArticleList />
    </>
  );
};

export default App;
