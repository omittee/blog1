import React from "react";
import { useNavigate } from "react-router-dom";
import "@/assets/CSS/Article/articleCard.scss";
import { ArticleCardProps } from "@/shared/types";
import { AnimeContext, ArticleContext } from "@/GlobalContext/globalContext";
function ArticleCard(props: ArticleCardProps) {
  const navigate = useNavigate();
  const date = new Date(props.article.lastModified);
  const timeStr = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${date.getMinutes().toString().padStart(2,'0')}`;
  return (
    <AnimeContext.Consumer>
      {({toggleAnime}) => {
        return (
          <ArticleContext.Consumer>
            {({ updateReg }) => {
              return (
                <div
                  className="articleCard"
                  data-component="articleCard"
                  onClick={() => {
                    toggleAnime();
                    navigate(`/article/${props.article._id}`);
                  }}
                >
                  <div className="cover">
                    <img
                      src={
                        "https://api.yimian.xyz/img?type=wallpaper&random=" +
                        props.article._id
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
                      {props.article.abstract}
                    </div>
                    <div className="footer">
                      <div className="tags hideScrollBar">
                        {props.article.tags
                          .trim()
                          .split(" ")
                          .map((x, i) => (
                            <div
                              className="tag ic i-tag"
                              key={i}
                              onClick={(e) => {
                                e.stopPropagation();
                                updateReg(x);
                              }}
                            >
                              {x}
                            </div>
                          ))}
                      </div>

                      <div className="lastModified">
                        {timeStr}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }}
          </ArticleContext.Consumer>
        );
      }}
    </AnimeContext.Consumer>
  );
}
export default ArticleCard;
