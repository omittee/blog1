import React from "react";
import { Outlet, Route, Routes, Navigate } from "react-router-dom";
import ArticleList from "./ArticleList";
import ArticleContainer from "./ArticleContainer";
import NavigatorBar from "../NavigatorBar/NavigatorBar";
import "@/assets/CSS/Article/articleBoard.scss";
function ArticleBoard() {
  return (
    <div className="articleBoard" data-component="ArticleBoard">
      <NavigatorBar></NavigatorBar>
      <div className="articleBox">
        <Routes>
          <Route path="list" element={<ArticleList />} />
          <Route path="article" element={<ArticleContainer />} />
          <Route path="*" element={<Navigate to="list" />}></Route>
        </Routes>

        <Outlet></Outlet>
      </div>
    </div>
  );
}
export default ArticleBoard;
