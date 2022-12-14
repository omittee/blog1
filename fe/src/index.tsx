import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@/assets/CSS/global.scss";
document.addEventListener("visibilitychange", ()=>{
  if(document.visibilityState === "visible") {
    document.title = "欢迎回来！"
    setTimeout(()=>{
       document.title = "Omittee的个人博客"
    },1000);
  }
  else document.title = "拜拜喽～"
})
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
