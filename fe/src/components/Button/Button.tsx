import React, { useState } from "react";
import ArticleModel from "../Model/ArticleModel";
import { EditContext } from "@/GlobalContext/globalContext";
import "@/assets/CSS/Button/button.scss";
import { dataType } from "@/shared/types";
function Button(props: { data: dataType }) {
  const [isShow, setShow] = useState(false);
  function deleteArticle() {
    if(window.confirm("确定要删除本文章吗？")) {
      console.log(true)
    }
    else {
      console.log(false);
    }
  }
  return (
    <EditContext.Consumer>
      {({ isLogin }) => {
        if (isLogin) {
          return (
            <>
              <ArticleModel
                isShow={isShow}
                setShow={() => {
                  setShow((pre) => !pre);
                }}
                {...props}
              />
              <div data-component="ButtonControl">
                <div
                  className="edit btn"
                  onClick={() => setShow((pre) => !pre)}
                >
                  <span>编辑</span>
                </div>
                <div className="delete btn" onClick={deleteArticle}>
                  <span>删除</span>
                </div>
              </div>
            </>
          );
        } else return <div></div>;
      }}
    </EditContext.Consumer>
  );
}
export default Button;
