import React from "react";
import ArticleNav from "./ArticleNav";
import ArticleCard from "./ArticleCard";
import ArticlePager from "./ArticlePager";
import data from "@/constants/data";
import "@/assets/CSS/Article/articleList.scss";
function ArticleList() {
  const listItem = data.map((x, index) => (
    <ArticleCard article={x} index={index} key={x.id}></ArticleCard>
  ));
  return (
    <div data-component="ArticleList">
      <div className="list">
        <div className="articleList">{listItem}</div>
        <ArticleNav></ArticleNav>
      </div>
      <ArticlePager pageNum={10}></ArticlePager>
    </div>
  );
}
export default ArticleList;
