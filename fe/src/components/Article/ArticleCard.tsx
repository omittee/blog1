import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "@/assets/CSS/Article/articleCard.scss";
export interface Article {
  id: string;
  title: string;
  tags: string;
  content: string;
  lastModified: string;
}
interface Props {
  article: Article;
  index: number;
}

function ArticleCard(props: Props) {
  const navigate = useNavigate();
  return (
    <div className="articleCard" data-component="articleCard" onClick={()=>navigate("/article")}>
        <div className="cover">
          <img
            src={
              "https://api.yimian.xyz/img?type=wallpaper&random=" + props.index
            }
            alt=""
          />
        </div>
        <div className="info">
          <div className="info-title title-ellipsis">
            {props.article.title}
            <hr className="divider" />
          </div>

          <div className="info-content content-ellipsis">
            {props.article.content}
          </div>
          <div className="footer">
            <div className="tags hideScrollBar">
              {props.article.tags
                .trim()
                .split(" ")
                .map((x, i) => (
                  <a className="tag ic i-tag" key={i} href={"#"}>
                    {x}
                  </a>
                ))}
            </div>
            <div className="lastModified">{props.article.lastModified}</div>
          </div>
        </div>
    </div>
  );
}
export default ArticleCard;
