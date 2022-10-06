import React from "react";
import "@/assets/CSS/About/decorativeArticle.scss";
function DecorativeArticle() {
  return (
    <div className="decoContainer">
      <div className="floor"></div>
      <div className="square">
        <div className="square-1">
          <div className="square-2">
            <div className="square-3">
              <div className="cube"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="pillar"></div>
      <div className="base">
        <div className="base-ud"></div> 
        <div className="base-lr"></div>
        <div className="base-fe"></div>
      </div>
    </div>
  );
}
export default DecorativeArticle;
