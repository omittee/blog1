import React from "react";
import { dataType } from "@/shared/types";
export const ThemeContext = React.createContext({
  isDarkTheme: false,
  toggleTheme: () => { },
});
export const AnimeContext = React.createContext({
  showAnime: false,
  toggleAnime: () => { },
});
export const ArticleContext = React.createContext({
  articles: [] as dataType[],
  setArticles: (data: dataType[]) => { },
  regStr: "",
  setRegStr: (x: string) => {}
}); 
