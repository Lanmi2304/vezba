const Article = ({ article }) => {
  const { title, content } = article;
  return (
    <div className="addArticle-wrapper">
      <h1>{title}</h1>
      <p>{content}</p>
      {/* <button>Add to favorite</button> */}
    </div>
  );
};

export default Article;
