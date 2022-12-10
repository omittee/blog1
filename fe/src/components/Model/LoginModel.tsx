import React from "react";
import HOC from "./Model";
import { showModelProps } from "@/shared/types";
import "@/assets/CSS/Model/loginModel.scss";
function LoginModel(props: showModelProps) {
  function confirm() {
    props.setShow();
    props.setLogin?.();
  }
  return (
    <div data-component="LoginModel">
      <div className="inputBox">
        <input type="password" placeholder="输入密码以登录"/>
      </div>

      <div className="confirm" onClick={confirm}>确定</div>
    </div>
  );
}
export default HOC(LoginModel);
