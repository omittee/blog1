import React, { useEffect, useState } from "react";
import ArticleNav from "./ArticleNav";
import ArticleCard from "./ArticleCard";
import ArticlePager from "./ArticlePager";
import DecorativeBall from "../About/DecorativeBall";
import "@/assets/CSS/Article/articleList.scss";
import { getArticle } from "@/network/request";
import { dataType } from "@/shared/types";
import { ArticleContext } from "@/GlobalContext/globalContext";
function ArticleList() {
  const [articles, setArticles] = useState([] as dataType[]);
  const [regStr, setRegStr] = useState("");
  const [listItem, setListItem] = useState([
    <div className="emptyBox" key={"defalut"}>
      <DecorativeBall></DecorativeBall>
      这里空空如也哦～
    </div>,
  ]);
  useEffect(() => {
    getArticle().then((res)=>{
      setArticles(res??[]);
    });
  }, []);
  useEffect(() => {
    if (articles.length) {
      setListItem(
        articles.map((x: dataType, index) => (
          <ArticleCard article={x} index={index} key={x._id}></ArticleCard>
        ))
      );
    } else {
      setListItem([
        <div className="emptyBox" key={"defalut"}>
          <DecorativeBall></DecorativeBall>
          这里空空如也哦～
        </div>,
      ]);
    }
  }, [articles]);
  return (
    <ArticleContext.Provider
      value={{
        articles,
        setArticles,
        regStr,
        setRegStr,
      }}
    >
      <div data-component="ArticleList">
        <div className="list">
          <div className="articleList">{listItem}</div>
          <ArticleNav></ArticleNav>
        </div>
        <ArticlePager pageNum={10}></ArticlePager>
      </div>
      ;
    </ArticleContext.Provider>
  );
}
export default ArticleList;
