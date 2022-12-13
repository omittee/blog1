import React, { useEffect } from "react";
import ArticleNav from "./ArticleNav";
import ArticleCard from "./ArticleCard";
import ArticlePager from "./ArticlePager";
import DecorativeBall from "../About/DecorativeBall";
import "@/assets/CSS/Article/articleList.scss";
import { ArticleListProps, dataType } from "@/shared/types";
function ArticleList(props: ArticleListProps) {
  const listItem = props.articles.length ? (
    props.articles.map((x: dataType, index) => (
      <ArticleCard article={x} index={index} key={x._id}></ArticleCard>
    ))
  ) : (
    <div className="emptyBox" key={"defalut"}>
      <DecorativeBall></DecorativeBall>
      这里空空如也哦～
    </div>
  );
  useEffect(() => {
    props.initAndRefresh();
  }, []);
  return (
    <div data-component="ArticleList">
      <div className="list">
        <div className="articleList">{listItem}</div>
        <ArticleNav></ArticleNav>
      </div>
      <ArticlePager></ArticlePager>
    </div>
  );
}
export default ArticleList;
