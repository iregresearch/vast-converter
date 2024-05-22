/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Buttons = ({ property1, className, text = "Previous", text1 = "Continue" }) => {
  return (
    <div className={`buttons ${property1} ${className}`}>
      <div className="continue">
        {["lg-btn", "small-btn"].includes(property1) && <>{text1}</>}

        {property1 === "outline-btn" && <>{text}</>}
      </div>
    </div>
  );
};

Buttons.propTypes = {
  property1: PropTypes.oneOf(["outline-btn", "small-btn", "lg-btn"]),
  text: PropTypes.string,
  text1: PropTypes.string,
};
