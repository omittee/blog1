import React, { FunctionComponent } from "react";
import "@/assets/CSS/Model/model.scss"
interface P {
  isShow: boolean
  setShow: ()=>void
}
const HOC = (WrappedComponent: FunctionComponent<P>) => {
  return function (props: P) {
    if(props.isShow)
      return (
        <div data-component="WrapModel">
          <div className="mask" onClick={()=>props.setShow()}></div>
          <WrappedComponent {...props}/>
        </div>
        
      )
    else return <></>;
  };
};

export default HOC;