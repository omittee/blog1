import React, { FunctionComponent } from "react";
import "@/assets/CSS/Model/model.scss"
import { showModelProps } from "@/shared/types";
const HOC = (WrappedComponent: FunctionComponent<showModelProps>) => {
  return function (props: showModelProps) {
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