import React from "react";
import "@/assets/CSS/NavigatorBar/navigatorBar.scss";
import { ThemeContext } from "@/GlobalContext/globalContext";
function NavigatorBar() {
  return (
    <nav className="navigator" data-component="navigator">
      <div className="logo"></div>
      <div className="search"></div>
      <label htmlFor="themeControl">
        <div className="theme">
          <ThemeContext.Consumer>
            {({ isDarkTheme, toggleTheme }) => {
              return (
                <>
                  <input
                    type="checkbox"
                    checked={isDarkTheme}
                    id="themeControl"
                    className="hide"
                    onChange={toggleTheme}
                  />
                  <div className="switch">
                    <div className="pattern">
                        <div className="sun">
                          <div className="sunshine"></div>
                        </div>
                        <div className="moon"></div>
                    </div>
                  </div>
                </>
              );
            }}
          </ThemeContext.Consumer>
        </div>
      </label>
    </nav>
  );
}
export default NavigatorBar;
