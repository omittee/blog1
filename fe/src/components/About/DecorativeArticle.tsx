import React from "react";
import { isMobile } from "react-device-detect";
import DecorativeBall from "./DecorativeBall";
import "@/assets/CSS/About/decorativeArticle.scss";
function DecorativeArticle() {
  return (
    <div data-component="DecorativeArticle">
      <div className={isMobile ? "decoContainer" : "decoContainer rolling"}>
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
      </div>
    </div>
  );
}
export default DecorativeArticle;
