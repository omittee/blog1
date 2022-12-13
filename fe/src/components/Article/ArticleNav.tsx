import React from "react";
import "@/assets/CSS/Article/articleNav.scss";
import { ArticleContext } from "@/GlobalContext/globalContext";
function ArticleNav() {
  return (
    <ArticleContext.Consumer>
      {({ tags, updateReg }) => {
        return (
          <div data-component="articleNav">
            <div className="articleTag ic i-tags">文章标签</div>
            <div className="tags">
              {tags.map((x, i) => (
                <div
                  className="tag ic i-tag"
                  key={i}
                  onClick={() => {
                    updateReg(x[0]);
                  }}
                >
                  {`${x[0]}  ${x[1]}`}
                </div>
              ))}
            </div>
          </div>
        );
      }}
    </ArticleContext.Consumer>
  );
}
export default ArticleNav;
