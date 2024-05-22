/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const InputVariants = ({
  property1,
  text = "Reply To Email:",
  text1 = "Select Email Template",
  className,
  text2 = "Label Email:",
  text3 = "Enter Label Name",
  text4 = "Forward Email:",
  text5 = "Select Email List",
}) => {
  return (
    <div className={`input-variants ${property1} ${className}`}>
      <div className="frame-9">
        {["simple-drop-down", "simple"].includes(property1) && (
          <>
            <div className="label-email">
              {property1 === "simple" && <>{text2}</>}

              {property1 === "simple-drop-down" && <>{text4}</>}
            </div>
            <img
              className="vector-28"
              alt="Vector"
              src={property1 === "simple-drop-down" ? "/img/frame-1000005915.svg" : "/img/vector-9.svg"}
            />
            <div className="frame-10">
              {property1 === "simple" && <div className="enter-label-name">{text3}</div>}

              {property1 === "simple-drop-down" && (
                <>
                  <div className="select-email-list">{text5}</div>
                  <div className="vector-wrapper">
                    <img className="vector-3" alt="Vector" src="/img/vector-11.svg" />
                  </div>
                </>
              )}
            </div>
          </>
        )}

        {property1 === "browse" && (
          <>
            <div className="reply-to-email">{text}</div>
            <img className="vector-4" alt="Vector" src="/img/vector-10.svg" />
            <div className="rectangle" />
            <img className="vector-5" alt="Vector" src="/img/vector-11.svg" />
            <div className="div-wrapper">
              <div className="text-wrapper-7">Browse</div>
            </div>
            <div className="select-email">{text1}</div>
          </>
        )}

        {property1 === "multiple" && (
          <>
            <div className="field-2">
              <p className="speech-to-text-with">Speech To Text With Translation:</p>
              <img className="vector-4" alt="Vector" src="/img/vector-10.svg" />
              <div className="rectangle-2" />
              <div className="text-wrapper-8">Choose Language</div>
              <img className="vector-6" alt="Vector" src="/img/vector-11.svg" />
            </div>
            <div className="frame-11">
              <div className="frame-12">
                <div className="text-wrapper-7">Browse</div>
              </div>
              <div className="text-wrapper-9">Choose File Location</div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

InputVariants.propTypes = {
  property1: PropTypes.oneOf(["simple-drop-down", "multiple", "simple", "browse"]),
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  text5: PropTypes.string,
};
