/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const HeroOutlineCheveronDown28 = ({ color = "#6F747B", className }) => {
  return (
    <svg
      className={`hero-outline-cheveron-down-28 ${className}`}
      fill="none"
      height="25"
      viewBox="0 0 24 25"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M4.29289 9.07073C4.68342 8.6802 5.31658 8.6802 5.70711 9.07073L12 15.3636L18.2929 9.07073C18.6834 8.6802 19.3166 8.6802 19.7071 9.07073C20.0976 9.46125 20.0976 10.0944 19.7071 10.4849L12.7071 17.4849C12.3166 17.8755 11.6834 17.8755 11.2929 17.4849L4.29289 10.4849C3.90237 10.0944 3.90237 9.46125 4.29289 9.07073Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

HeroOutlineCheveronDown28.propTypes = {
  color: PropTypes.string,
};
