/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const CardIcons = ({ color = "url(#paint0_linear_7_1409)", className }) => {
  return (
    <svg
      className={`card-icons ${className}`}
      fill="none"
      height="136"
      viewBox="0 0 102 136"
      width="102"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M50.9997 10C38.9373 10 29.1508 19.7422 29.1508 31.75V68C29.1508 80.0078 38.9373 89.75 50.9997 89.75C63.0622 89.75 72.8487 80.0078 72.8487 68V31.75C72.8487 19.7422 63.0622 10 50.9997 10ZM21.8678 58.9375C21.8678 55.9242 19.4326 53.5 16.4056 53.5C13.3786 53.5 10.9434 55.9242 10.9434 58.9375V68C10.9434 88.1867 26.01 104.862 45.5375 107.512V115.125H34.613C31.5861 115.125 29.1508 117.549 29.1508 120.563C29.1508 123.576 31.5861 126 34.613 126H50.9997H67.3864C70.4134 126 72.8487 123.576 72.8487 120.563C72.8487 117.549 70.4134 115.125 67.3864 115.125H56.462V107.512C75.9895 104.862 91.0561 88.1867 91.0561 68V58.9375C91.0561 55.9242 88.6209 53.5 85.5939 53.5C82.5669 53.5 80.1317 55.9242 80.1317 58.9375V68C80.1317 84.018 67.0906 97 50.9997 97C34.9089 97 21.8678 84.018 21.8678 68V58.9375Z"
        fill={color}
      />
      <defs className="defs">
        <linearGradient
          className="linear-gradient"
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_7_1415"
          x1="10.9434"
          x2="91.0561"
          y1="68"
          y2="68"
        >
          <stop className="stop" offset="0.095" stopColor="#EF8B33" />
          <stop className="stop" offset="1" stopColor="#FA6220" />
        </linearGradient>
      </defs>
    </svg>
  );
};

CardIcons.propTypes = {
  color: PropTypes.string,
};
