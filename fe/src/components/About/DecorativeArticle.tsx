import React, { useEffect, useRef } from "react";
import "@/assets/CSS/About/decorativeArticle.scss";
function DecorativeArticle() {
  const circleRef = useRef(null);
  useEffect(()=>{
    console.log((circleRef.current as unknown as HTMLElement).style);
  })
  return (
    <div className="decoContainer">
      <div className="floor"></div>
      <div className="square squareBox">
        <div className="square-front"></div>
        <div className="square-back"></div>
        <div className="square-top"></div>
        <div className="square-bottom"></div>
        <div className="square-left"></div>
        <div className="square-right"></div>
        <div className="square square-1">
          <div className="square-front"></div>
          <div className="square-back"></div>
          <div className="square-top"></div>
          <div className="square-bottom"></div>
          <div className="square-left"></div>
          <div className="square-right"></div>
          <div className="square square-2">
            <div className="square-front"></div>
            <div className="square-back"></div>
            <div className="square-top"></div>
            <div className="square-bottom"></div>
            <div className="square-left"></div>
            <div className="square-right"></div>
            <div className="square square-3">
              <div className="square-front"></div>
              <div className="square-back"></div>
              <div className="square-top"></div>
              <div className="square-bottom"></div>
              <div className="square-left"></div>
              <div className="square-right"></div>
              <div className="square square-4">
                <div className="square-front"></div>
                <div className="square-back"></div>
                <div className="square-top"></div>
                <div className="square-bottom"></div>
                <div className="square-left"></div>
                <div className="square-right"></div>
                <div className="circle" ref={circleRef}>
                  <div className="circle-ud"></div>
                  <div className="circle-lr"></div>
                  <div className="circle-fe"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="pillar"></div>
      <div className="base">
        <div className="base-ud"></div> 
        <div className="base-lr"></div>
        <div className="base-fe"></div>
      </div> */}
    </div>
  );
}
export default DecorativeArticle;
