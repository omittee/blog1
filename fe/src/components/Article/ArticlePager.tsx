import { useContext } from "react";
import "@/assets/CSS/Article/articlePager.scss";
import { ArticleContext } from "@/GlobalContext/globalContext";
function ArticlePager() {
  const { pageNum, curPage, updatePage } = useContext(ArticleContext);
  const toNextPage = () => {
    if (curPage >= pageNum - 1) return;
    updatePage(curPage + 1);
  };
  const toPrePage = () => {
    if (curPage < 1) return;
    updatePage(curPage - 1);
  };
  const pageItem = new Array(pageNum).fill(0).map((x, i) => (
    <div
      className={
        "page" +
        (Math.abs(curPage - i) < 3 ? "" : " hide") +
        (curPage === i ? " active" : "")
      }
      key={i}
      onClick={() => {
        if (curPage === i) return;
        updatePage(i);
      }}
    >
      {i + 1}
    </div>
  ));
  return (
    <div data-component="articlePager">
      <div className="pages">
        <div
          className={"pre ic i-angle-left" + (curPage <= 1 ? " disable" : "")}
          onClick={toPrePage}
        ></div>
        {pageItem}
        <div
          className={
            "next ic i-angle-right" + (curPage >= pageNum - 1 ? " disable" : "")
          }
          onClick={toNextPage}
        ></div>
      </div>
    </div>
  );
}
export default ArticlePager;
