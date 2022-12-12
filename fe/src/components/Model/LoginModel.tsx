import React, { useState } from "react";
import HOC from "./Model";
import { showModelProps } from "@/shared/types";
import { login } from "@/network/request";
import "@/assets/CSS/Model/loginModel.scss";
function LoginModel(props: showModelProps) {
  const [ipt, setIpt] = useState("");
  async function confirm() {
    props.setShow();
    await login({
      pwd: ipt,
    });
  }
  return (
    <div data-component="LoginModel">
      <div className="inputBox">
        <input
          type="password"
          placeholder="输入密码以登录"
          value={ipt}
          onChange={(e) => setIpt(e.target.value)}
        />
      </div>

      <div className="confirm" onClick={confirm}>
        确定
      </div>
    </div>
  );
}
export default HOC(LoginModel);
