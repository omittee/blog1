import React from "react";
import { tagType } from "@/shared/types";
export const ThemeContext = React.createContext({
  isDarkTheme: false,
  toggleTheme(){},
});
export const AnimeContext = React.createContext({
  showAnime: false,
  toggleAnime(){},
});
export const ArticleContext = React.createContext({
  tags: [] as tagType[],
  pageNum: 0,
  curPage: 0,
  updatePage(page:number){},
  updateReg(regStr: string){},
  initAndRefresh(){}
}); 
export const LoginContext = React.createContext({
  isLogin: false,
  setLogin(isLogin: boolean){},
}); 