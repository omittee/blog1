import React, { useState } from "react";
import AboutBoard from "./components/About/AboutBoard";
import ArticleBoard from "./components/Article/ArticleBoard";
import { ThemeContext } from "@/GlobalContext/globalContext";
import "@/assets/CSS/app.scss";
function App() {
  const [isDarkTheme, setTheme] = useState(false)
  return (
    <ThemeContext.Provider value={{
      isDarkTheme,
      toggleTheme: ()=>{
        setTheme((pre)=>{
          return !pre
        })
      }
    }}>
      <div
        className="app hideScrollBar"
        data-theme={isDarkTheme ? "dark" : "light"}
      >
        <AboutBoard></AboutBoard>
        <ArticleBoard></ArticleBoard>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
