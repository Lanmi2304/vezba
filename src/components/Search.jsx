import { useDispatch, useSelector } from "react-redux";
import { articleActions } from "../store";

const Search = () => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.article.search);
  const articleLen = useSelector((state) => state.article.articles).length;

  const searchHandler = (e) => {
    dispatch(articleActions.searchByTitle(e.target.value));
  };

  return (
    <>
      {articleLen > 0 && (
        <input value={search} type="text" onChange={(e) => searchHandler(e)} />
      )}
    </>
  );
};

export default Search;
