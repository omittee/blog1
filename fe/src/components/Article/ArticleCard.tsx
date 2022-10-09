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
  index: number;
}

function ArticleCard(props: Props) {
  return (
    <div className="articleCard">
      <div className="cover">
        <img
          src={"https://api.yimian.xyz/img?type=wallpaper&random=" + props.index}
          alt=""
        />
      </div>
      <div className="info">
        <div className="info-title title-ellipsis">{props.article.title}<hr className="divider" /></div>
        
        <div className="info-content content-ellipsis">
          {props.article.content}
        </div>
        <div className="footer">
          <div className="tags hideScrollBar">
            {props.article.tags.trim().split(" ").map((x, i) => (
              <span className="tag" key={i}>{x}</span>
            ))}
          </div>
          <div className="lastModified">
            {props.article.lastModified}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ArticleCard;
