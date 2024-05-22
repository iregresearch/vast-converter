/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const TopBar = ({
  className,
  overlapGroupClassName,
  shape = "/img/shape-1.svg",
  vectorClassName,
  vector = "/img/vector-2.svg",
  text = "Dashboard",
  marleneSasoeurClassName,
  image = "/img/image-3.png",
}) => {
  return (
    <div className={`top-bar ${className}`}>
      <div className="logo-container">
        <div className="logo">
          <div className="text">
            <div className="dashboard">{text}</div>
          </div>
        </div>
      </div>
      <div className="frame-7">
        <div className="group">
          <div className="group-wrapper">
            <div className="overlap-wrapper">
              <div className="overlap">
                <div className="chevron-down">
                  <div className="overlap-group">
                    <div className="alarm-copy">
                      <div className={`shape-wrapper ${overlapGroupClassName}`}>
                        <img className="shape" alt="Shape" src={shape} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ellipse" />
              </div>
            </div>
          </div>
        </div>
        <div className="frame-8">
          <img className="image" alt="Image" src={image} />
          <div className={`marlene-sasoeur ${marleneSasoeurClassName}`}>John</div>
        </div>
        <img className={`vector-2 ${vectorClassName}`} alt="Vector" src={vector} />
      </div>
    </div>
  );
};

TopBar.propTypes = {
  shape: PropTypes.string,
  vector: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.string,
};
