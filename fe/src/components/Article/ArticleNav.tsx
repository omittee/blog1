import React from "react";
import { tag } from "@/constants/data";
import "@/assets/CSS/Article/articleNav.scss"
function ArticleNav() {
  return (
    <div data-component="articleNav">
      <div className="articleTag ic i-tags">文章标签</div>
      <div className="tags">
        {tag
          .trim()
          .split(" ")
          .map((x, i) => (
            <a className="tag ic i-tag" key={i} href={"#"}>
              {x}
            </a>
          ))}
      </div>
    </div>
  );
}
export default ArticleNav;
