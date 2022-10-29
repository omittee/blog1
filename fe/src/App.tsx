import React from "react";
import AboutBoard from "./components/About/AboutBoard";
import ArticleBoard from "./components/Article/ArticleBoard";
import "@/assets/CSS/app.scss"

function App() {
  return (
    <div className="app hideScrollBar">
      <AboutBoard></AboutBoard>
      <ArticleBoard></ArticleBoard>
    </div>
  );
}

export default App;
