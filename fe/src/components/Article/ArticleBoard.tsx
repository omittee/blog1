import React from "react";
import ArticleNav from "./ArticleNav";
import { Outlet, Route, Routes, Navigate } from "react-router-dom";
import ArticleList from "./ArticleList";
import ArticleContainer from "./ArticleContainer";
import "@/assets/CSS/Article/articleBoard.scss";
function ArticleBoard() {
  return (
    <div className="articleBoard" data-component="ArticleBoard">
      <Routes>
        <Route path="list" element={<ArticleList />} />
        <Route path="article" element={<ArticleContainer />} />
        <Route path='*' element={<Navigate to="list"/>}></Route>
      </Routes>

      <Outlet></Outlet>
      <ArticleNav></ArticleNav>
    </div>
  );
}
export default ArticleBoard;
