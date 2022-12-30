import React, { useEffect, useState } from "react";
import { Outlet, Route, Routes, Navigate } from "react-router-dom";
import ArticleList from "./ArticleList";
import ArticleContainer from "./ArticleContainer";
import NavigatorBar from "../NavigatorBar/NavigatorBar";
import {
  AnimeContext,
  ArticleContext,
  LoginContext,
} from "@/GlobalContext/globalContext";
import {
  getArticle,
  getArticleNum,
  articleNumPerPage,
  getTagsInfo,
  checkLogin,
} from "@/network/request";
import { dataType, tagType } from "@/shared/types";
import "@/assets/CSS/Article/articleBoard.scss";
import ArticleFooter from "./ArticleFooter";

function ArticleBoard() {
  const [articles, setArticles] = useState([] as dataType[]);
  const [pageNum, setPageNum] = useState(1);
  const [curPage, setCurPage] = useState(0);
  const [regStr, setRegStr] = useState("");
  const [tags, setTags] = useState([] as tagType[]);
  const [isLogin, setLogin] = useState(checkLogin());
  const MemoArticleList = React.memo(ArticleList);
  function initAndRefresh() {
    getArticle().then((res) => {
      setArticles(res ?? []);
    });
    getArticleNum(regStr).then((res) => {
      const pNum = Math.ceil((res ? res : 1) / articleNumPerPage);
      setPageNum(pNum);
    });
    getTagsInfo().then((res) => {
      setTags(res ?? []);
    });
  }
  useEffect(() => {
    initAndRefresh();
  }, []);
  useEffect(() => {
    getArticle(0, articleNumPerPage, regStr).then((res) => {
      setArticles(res ?? []);
    });
  }, [regStr]);
  return (
    <div className="articleBoard" data-component="ArticleBoard" id="main">
      <AnimeContext.Consumer>
        {({ toggleAnime }) => {
          function updatePage(page: number) {
            toggleAnime();
            setCurPage(page);
            getArticle(page, articleNumPerPage, regStr).then((res) => {
              setArticles(res ?? []);
            });
          }
          function updateReg(regStr: string) {
            toggleAnime();
            setCurPage(0);
            setRegStr(regStr);
          }
          return (
            <ArticleContext.Provider
              value={{
                tags,
                pageNum,
                curPage,
                updatePage,
                updateReg,
                initAndRefresh,
              }}
            >
              <LoginContext.Provider
                value={{
                  isLogin,
                  setLogin,
                }}
              >
                <NavigatorBar></NavigatorBar>
                <div className="articleBox">
                  <Routes>
                    <Route
                      path="list"
                      element={
                        <MemoArticleList
                          articles={articles}
                        />
                      }
                    />
                    <Route path="article/:_id" element={<ArticleContainer />} />
                    <Route path="*" element={<Navigate to="list" />}></Route>
                  </Routes>

                  <Outlet></Outlet>
                </div>
                ;
                  <ArticleFooter></ArticleFooter>
              </LoginContext.Provider>
            </ArticleContext.Provider>
          );
        }}
      </AnimeContext.Consumer>
    </div>
  );
}
export default ArticleBoard;
