import React, { useState } from "react";
import AboutBoard from "./components/About/AboutBoard";
import ArticleBoard from "./components/Article/ArticleBoard";
import { ThemeContext, SwitchContext } from "@/GlobalContext/globalContext";
import "@/assets/CSS/app.scss";
import SwitchAnimation from "./components/SwitchAnimation";
function App() {
  const [isDarkTheme, setTheme] = useState(false);
  const [showSwitch, setSwitch] = useState(false);
  return (
    <SwitchContext.Provider value={{
      showSwitch,
      toggleSwitch(){
        setSwitch(true);
        setTimeout(()=>setSwitch(false), 2000);
      }
    }}>
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          toggleTheme: () => {
            setTheme((pre) => {
              return !pre;
            });
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
    </SwitchContext.Provider>
  );
}

export default App;
