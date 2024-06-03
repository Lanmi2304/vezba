import { useDispatch, useSelector } from "react-redux";

import { articleActions } from "../store";
import { useRef } from "react";

const AddArticle = () => {
  const dispatch = useDispatch();
  //   const show = useSelector((state) => state.article.toggleAdd);

  const inpRef = useRef();
  const textRef = useRef();

  const addArticleHandler = (e) => {
    e.preventDefault();

    dispatch(
      articleActions.addArticle({
        title: inpRef.current.value,
        content: textRef.current.value,
      })
    );

    e.target.reset();
  };
  return (
    <form className="addArticle-wrapper" onSubmit={(e) => addArticleHandler(e)}>
      <label htmlFor="">Title</label>
      <input type="text" ref={inpRef} />

      <label htmlFor="">Content</label>
      <textarea ref={textRef} rows="7" cols="50"></textarea>
      <button type="submit">Add an Article</button>
    </form>
  );
};

export default AddArticle;
