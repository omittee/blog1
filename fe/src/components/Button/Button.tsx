import React from "react";
import { EditContext } from "@/GlobalContext/globalContext";
import "@/assets/CSS/Button/button.scss"
function Button() {
  return (
    <EditContext.Consumer>
      {({ isLogin }) => {
        if (isLogin) {
          return (
            <div data-component="ButtonControl">
              <div className="edit btn">
                <span>编辑</span>
              </div>
              <div className="delete btn">
                <span>删除</span>
              </div>
            </div>
          );
        } else return <div></div>;
      }}
    </EditContext.Consumer>
  );
}
export default Button;
