import React from "react";
import DecorativeBall from "./DecorativeBall";
import "@/assets/CSS/About/decorativeArticle.scss";
function DecorativeArticle() {
  return (
    <div data-component="DecorativeArticle">
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
                  <DecorativeBall></DecorativeBall>
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
    </div>
  );
}
export default DecorativeArticle;
