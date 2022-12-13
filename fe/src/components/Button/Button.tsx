import React, { useState } from "react";
import ArticleModel from "../Model/ArticleModel";
import "@/assets/CSS/Button/button.scss";
import { ButtonProps } from "@/shared/types";
import { checkLogin, deleteArticle } from "@/network/request";
import { useNavigate, useParams } from "react-router-dom";
import { LoginContext } from "@/GlobalContext/globalContext";
function Button(props: ButtonProps) {
  const [isShow, setShow] = useState(false);
  const navigate = useNavigate();
  const params = useParams();
  function onDelete() {
    if (window.confirm("确定要删除本文章吗？")) {
      deleteArticle(params._id ?? "");
      navigate("/");
    } else {
      console.log(false);
    }
  }
  return (
    <LoginContext.Consumer>
      {({ isLogin }) => {
        return isLogin && checkLogin() ? (
          <>
            <ArticleModel
              isShow={isShow}
              setShow={() => {
                setShow((pre) => !pre);
              }}
              {...props}
            />
            <div data-component="ButtonControl">
              <div className="edit btn" onClick={() => setShow((pre) => !pre)}>
                <span>编辑</span>
              </div>
              <div className="delete btn" onClick={onDelete}>
                <span>删除</span>
              </div>
            </div>
          </>
        ) : (
          <div></div>
        );
      }}
    </LoginContext.Consumer>
  );
}
export default Button;
