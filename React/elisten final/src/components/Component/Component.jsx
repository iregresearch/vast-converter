/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Component = ({ property1, className, text = "Add files to sign" }) => {
  return (
    <div className={`component ${property1} ${className}`}>
      <div className="sign">
        {["button-small-primary", "button-small-secondary"].includes(property1) && <>Sign</>}

        {property1 === "button-large" && <>{text}</>}
      </div>
    </div>
  );
};

Component.propTypes = {
  property1: PropTypes.oneOf(["button-large", "button-small-secondary", "button-small-primary"]),
  text: PropTypes.string,
};
