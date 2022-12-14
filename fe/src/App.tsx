import React, { useState } from "react";
import AboutBoard from "./components/About/AboutBoard";
import ArticleBoard from "./components/Article/ArticleBoard";
import { ThemeContext, AnimeContext } from "@/GlobalContext/globalContext";
import "@/assets/CSS/app.scss";
import SwitchAnimation from "./components/SwitchAnimation";
import { DarkTheme } from "./constants/constants";
function App() {
  const [isDarkTheme, setTheme] = useState(localStorage.getItem(DarkTheme) === "dark");
  const [showSwitch, setSwitch] = useState(false);
  return (
    <AnimeContext.Provider
      value={{
        showAnime: showSwitch,
        toggleAnime() {
          setSwitch(true);
          setTimeout(() => setSwitch(false), 1500);
        },
      }}
    >
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          toggleTheme: () => {
            setTheme((pre) => !pre);
          },
        }}
      >
        <div
          className="app hideScrollBar"
          data-theme={isDarkTheme ? "dark" : "light"}
        >
          <AboutBoard></AboutBoard>
          <ArticleBoard></ArticleBoard>
          <SwitchAnimation></SwitchAnimation>
        </div>
      </ThemeContext.Provider>
    </AnimeContext.Provider>
  );
}

export default App;
