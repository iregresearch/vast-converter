/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Nav = ({ property1, className }) => {
  return (
    <div className={`nav ${className}`}>
      <div className={`text-wrapper-3 property-1-${property1}`}>Source</div>
      <div className={`text-wrapper-4 property-1-0-${property1}`}>Account</div>
      <div className={`text-wrapper-5 property-1-1-${property1}`}>Trigger</div>
      <div className={`text-wrapper-6 property-1-2-${property1}`}>Response</div>
      <div className={`save-run-2 property-1-3-${property1}`}>Save &amp; Run</div>
    </div>
  );
};

Nav.propTypes = {
  property1: PropTypes.oneOf(["trigger", "source", "save", "response", "account"]),
};
