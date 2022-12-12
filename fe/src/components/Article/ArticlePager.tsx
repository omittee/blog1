import React, { useState } from "react";
import "@/assets/CSS/Article/articlePager.scss";
import { AnimeContext, ArticleContext } from "@/GlobalContext/globalContext";
import { PagerProps } from "@/shared/types";
import { getArticle } from "@/network/request";
function ArticlePager(props: PagerProps) {
  const [curPage, setCurPage] = useState(0);
  return (
    <ArticleContext.Consumer>
      {({ setArticles, regStr }) => {
        return (
          <AnimeContext.Consumer>
            {({ toggleAnime }) => {
              async function updatePage(page: number) {
                toggleAnime();
                setCurPage(() => page);
                const res =
                  (await getArticle(page, 10, regStr)) ?? [];
                setArticles(res);
              }
              const toNextPage = () => {
                if (curPage >= props.pageNum - 1) return;
                updatePage(curPage + 1);
              };
              const toPrePage = () => {
                if (curPage < 1) return;
                updatePage(curPage - 1);
              };
              const pageItem = new Array(props.pageNum).fill(0).map((x, i) => (
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
                      className={
                        "pre ic i-angle-left" + (curPage <= 1 ? " disable" : "")
                      }
                      onClick={toPrePage}
                    ></div>
                    {pageItem}
                    <div
                      className={
                        "next ic i-angle-right" +
                        (curPage >= props.pageNum ? " disable" : "")
                      }
                      onClick={toNextPage}
                    ></div>
                  </div>
                </div>
              );
            }}
          </AnimeContext.Consumer>
        );
      }}
    </ArticleContext.Consumer>
  );
}
export default ArticlePager;
