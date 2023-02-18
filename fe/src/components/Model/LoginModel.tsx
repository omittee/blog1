import { useContext, useState } from "react";
import HOC from "./Model";
import { showModelProps } from "@/shared/types";
import { login } from "@/network/request";
import "@/assets/CSS/Model/loginModel.scss";
import { LoginContext } from "@/GlobalContext/globalContext";
function LoginModel(props: showModelProps) {
  const [ipt, setIpt] = useState("");

  const { setLogin } = useContext(LoginContext);
  async function confirm() {
    props.setShow();
    const res = await login({
      pwd: ipt,
    });
    setLogin(res ?? false);
  }
  return (
    <div data-component="LoginModel">
      <div className="inputBox">
        <input
          type="password"
          placeholder="输入密码以登录"
          value={ipt}
          onChange={(e) => setIpt(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === "Enter") confirm();
          }}
        />
      </div>

      <div className="confirm" onClick={confirm}>
        确定
      </div>
    </div>
  );
}
export default HOC(LoginModel);
