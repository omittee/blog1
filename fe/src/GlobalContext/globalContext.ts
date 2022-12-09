import React from "react";
export const ThemeContext = React.createContext({
  isDarkTheme: false,
  toggleTheme: () => { },
});
export const SwitchContext = React.createContext({
  showSwitch: false,
  toggleSwitch: () => { },
});
export const EditContext = React.createContext({
  isLogin: false,
});
