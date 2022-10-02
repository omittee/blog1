import React from "react";
import "@/assets/CSS/Article/articleCard.scss";
export interface Article {
  id: string;
  title: string;
  tags: string;
  content: string;
  lastModified: string;
}
export interface Props {
  article: Article;
}

function ArticleCard(props: Props) {
  return (
    <div className="articleCard">
      <div className="articleCard-title ellipsis">{props.article.title}</div>
      <div className="articleCard-content ellipsis">{props.article.content}</div>
      <div className="articleCard-tags">
        {props.article.tags.split(" ").map((x) => (
          <span className="tag">{x}</span>
        ))}
      </div>
      <div className="articleCard-lastModified">
        {props.article.lastModified}
      </div>
    </div>
  );
}
export default ArticleCard;
