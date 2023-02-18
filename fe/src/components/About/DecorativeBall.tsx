import {memo} from "react";
import "@/assets/CSS/About/decorativeBall.scss";
function DecorativeBall() {
  return (
      <div className="circle" data-component="DecorativeBall">
        <div className="ud"></div>
        <div className="lr"></div>
        <div className="fe"></div>
      </div>
  );
}
export default memo(DecorativeBall);
