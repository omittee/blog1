import React from "react";
import ArticleList from "./ArticleList";
import "@/assets/CSS/Article/articleBoard.scss";
function ArticleBoard() {
  return (
    <div className="articleBoard" data-component="ArticleBoard">
      <ArticleList></ArticleList>
    </div>
  );
}
export default ArticleBoard;
