import React from 'react';
import ArticleCard from './ArticleCard';
import data from "@/constants/data"
import "@/assets/CSS/Article/articleList.scss"
console.log(data);

function ArticleList() {
  const listItem = data.map(x=><ArticleCard article={x}></ArticleCard>)
  return (
    <div className='articleList'>{listItem}</div>
  )
}
export default ArticleList