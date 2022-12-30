import React from "react";
import "@/assets/CSS/Article/articleFooter.scss"
function ArticleFooter() {
  return (
    <div data-component="ArticleFooter">
      <div className="copyright">©2022 @Omittee</div>
      <a href="https://beian.miit.gov.cn/" className="icp" target="_blank" rel="noreferrer">粤ICP备2022156537号</a>
      <div>推荐使用Chrome访问本网页</div>
    </div>
  );
}
export default ArticleFooter;
