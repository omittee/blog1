import React from "react";
import ArticleNav from "./ArticleNav";
import ArticleCard from "./ArticleCard";
import ArticlePager from "./ArticlePager";
import DecorativeBall from "../About/DecorativeBall";
import data from "@/constants/data";
import "@/assets/CSS/Article/articleList.scss";
import { dataType } from "@/shared/types";
function ArticleList() {
  const listItem = data.length ? (
    data.map((x: dataType, index) => (
      <ArticleCard article={x} index={index} key={x._id}></ArticleCard>
    ))
  ) : (
    <div className="emptyBox">
      <DecorativeBall></DecorativeBall>
      这里空空如也哦～
    </div>
  );
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
