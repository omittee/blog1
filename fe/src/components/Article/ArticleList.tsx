import React from 'react';
import ArticleCard from './ArticleCard';
import data from "@/constants/data"
import "@/assets/CSS/Article/articleList.scss";
function ArticleList() {
  const listItem = data.map((x, index)=><ArticleCard article={x} index={index} key={x.id}></ArticleCard>)
  return (
    <div className="articleList" data-component="ArticleList">
      {listItem}
    </div>
  );
}
export default ArticleList