/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const AndOperation = ({
  property1,
  className,
  groupClassName,
  hasDiv = true,
  dataDestinationClassName,
  text = "Select Parameter",
  dataDestinationClassNameOverride,
  text1 = "Enter Inputs / Select File",
  divClassName,
  text2 = "Choose Condition",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div className={`and-operation property-1-1-${state.property1} ${className}`}>
      {state.property1 === "default" && (
        <>
          <div className={`group-3 ${groupClassName}`}>
            {hasDiv && <div className="text-wrapper-10">Only Continue if</div>}

            <div className={`data-destination-5 ${dataDestinationClassName}`}>
              <div className="text-wrapper-11">{text}</div>
              <img className="vector-8" alt="Vector" src="/img/vector-78.svg" />
            </div>
          </div>
          <div className={`data-destination-6 ${dataDestinationClassNameOverride}`}>
            <p className="text-wrapper-11">{text1}</p>
          </div>
        </>
      )}

      {["variant-2", "variant-3", "variant-4"].includes(state.property1) && (
        <div className="group-3">
          <div className="text-wrapper-10">Only Continue if</div>
          <div
            className="data-destination-5"
            onClick={() => {
              dispatch("click");
            }}
          >
            <div className="text-wrapper-11">Choose Field</div>
            <img
              className="vector-8"
              alt="Vector"
              src={state.property1 === "variant-3" ? "/img/vector-78.svg" : "/img/vector-80.svg"}
            />
          </div>
        </div>
      )}

      {["default", "variant-2", "variant-3"].includes(state.property1) && (
        <div className="data-destination-7">
          {["variant-2", "variant-3"].includes(state.property1) && <p className="text-wrapper-11">{text1}</p>}

          {state.property1 === "default" && (
            <>
              <div className={`choose-condition-2 ${divClassName}`}>{text2}</div>
              <img className="vector-8" alt="Vector" src="/img/vector-78.svg" />
            </>
          )}
        </div>
      )}

      {state.property1 === "variant-4" && (
        <div className="data-destination-8">
          <p className="text-wrapper-11">{text1}</p>
        </div>
      )}

      {["variant-2", "variant-3", "variant-4"].includes(state.property1) && (
        <>
          <div
            className="data-destination-9"
            onClick={() => {
              dispatch("click_2812");
            }}
          >
            <div className="choose-condition-2">{text2}</div>
            <img
              className="vector-8"
              alt="Vector"
              src={state.property1 === "variant-2" ? "/img/vector-78.svg" : "/img/vector-80.svg"}
            />
          </div>
          <div className="options-4">
            <div className="div-6">
              {state.property1 === "variant-2" && <>Domain</>}

              {["variant-3", "variant-4"].includes(state.property1) && <>Is any of</>}
            </div>
            <img className="line-2" alt="Line" src="/img/line-73.svg" />
            <div className="div-7">
              {["variant-3", "variant-4"].includes(state.property1) && <>Is none of</>}

              {state.property1 === "variant-2" && <>Email Address</>}
            </div>
            <img className="line-2" alt="Line" src="/img/line-73.svg" />
            <div className="div-7">
              {["variant-3", "variant-4"].includes(state.property1) && <>Exists</>}

              {state.property1 === "variant-2" && <>Subject</>}
            </div>
            <img className="line-2" alt="Line" src="/img/line-73.svg" />
            <div className="div-7">
              {state.property1 === "variant-2" && <>Keyword</>}

              {["variant-3", "variant-4"].includes(state.property1) && <>Does not exist</>}
            </div>
            <img className="line-2" alt="Line" src="/img/line-73.svg" />
            <div className="div-7">
              {["variant-3", "variant-4"].includes(state.property1) && <>Exactly matches</>}

              {state.property1 === "variant-2" && <>Tags</>}
            </div>
            <img className="line-2" alt="Line" src="/img/line-73.svg" />
            <div className="div-7">
              {["variant-3", "variant-4"].includes(state.property1) && <>Does not exactly match</>}

              {state.property1 === "variant-2" && <>To Address</>}
            </div>
            <img className="line-2" alt="Line" src="/img/line-73.svg" />
            <div className="div-7">
              {["variant-3", "variant-4"].includes(state.property1) && <>Contains</>}

              {state.property1 === "variant-2" && <>Geolocation</>}
            </div>
            <img className="line-2" alt="Line" src="/img/line-73.svg" />
            <div className="div-7">
              {["variant-3", "variant-4"].includes(state.property1) && <>Does not contain</>}

              {state.property1 === "variant-2" && <>Language</>}
            </div>
            <img className="line-2" alt="Line" src="/img/line-80.svg" />
            <div className="div-7">
              {["variant-3", "variant-4"].includes(state.property1) && <>Starts with</>}

              {state.property1 === "variant-2" && <>Body</>}
            </div>
            <img className="line-2" alt="Line" src="/img/line-80.svg" />
            <div className="div-7">
              {["variant-3", "variant-4"].includes(state.property1) && <>Does not start with</>}

              {state.property1 === "variant-2" && <>Attachment</>}
            </div>
            {["variant-3", "variant-4"].includes(state.property1) && (
              <>
                <img className="line-2" alt="Line" src="/img/line-80.svg" />
                <div className="div-7">Ends with</div>
                <img className="line-2" alt="Line" src="/img/line-80.svg" />
                <div className="div-7">Does not end with</div>
                <img className="line-2" alt="Line" src="/img/line-80.svg" />
                <div className="div-7">Greater then</div>
                <img className="line-2" alt="Line" src="/img/line-85.svg" />
                <div className="div-7">Less than</div>
                <img className="line-2" alt="Line" src="/img/line-85.svg" />
                <div className="div-7">Equal to</div>
                <img className="line-2" alt="Line" src="/img/line-85.svg" />
                <div className="div-7">Not equal to</div>
                <img className="line-2" alt="Line" src="/img/line-85.svg" />
                <div className="div-7">Matches regex</div>
                <img className="line-2" alt="Line" src="/img/line-85.svg" />
                <div className="div-7">Does not match regex</div>
                <img className="line-2" alt="Line" src="/img/line-85.svg" />
                <div className="div-7">Has Type</div>
              </>
            )}
          </div>
        </>
      )}

      {state.property1 === "variant-4" && (
        <div className="options-5">
          <div className="div-6">Domain</div>
          <img className="line-2" alt="Line" src="/img/line-73.svg" />
          <div className="div-7">Email Address</div>
          <img className="line-2" alt="Line" src="/img/line-73.svg" />
          <div className="div-7">Subject</div>
          <img className="line-2" alt="Line" src="/img/line-73.svg" />
          <div className="div-7">Keyword</div>
          <img className="line-2" alt="Line" src="/img/line-73.svg" />
          <div className="div-7">Tags</div>
          <img className="line-2" alt="Line" src="/img/line-73.svg" />
          <div className="div-7">To Address</div>
          <img className="line-2" alt="Line" src="/img/line-73.svg" />
          <div className="div-7">Geolocation</div>
          <img className="line-2" alt="Line" src="/img/line-73.svg" />
          <div className="div-7">Language</div>
          <img className="line-2" alt="Line" src="/img/line-80.svg" />
          <div className="div-7">Body</div>
          <img className="line-2" alt="Line" src="/img/line-80.svg" />
          <div className="div-7">Attachment</div>
        </div>
      )}

      {state.property1 === "variant-5" && (
        <div className="div-8">
          <div className="group-3">
            <div className="text-wrapper-10">Only Continue if</div>
            <div
              className="data-destination-5"
              onClick={() => {
                dispatch("click_2955");
              }}
            >
              <div className="text-wrapper-11">Domain</div>
              <img className="vector-9" alt="Vector" src="/img/vector-86.svg" />
            </div>
          </div>
          <div className="data-destination-8">
            <p className="text-wrapper-11">{text1}</p>
          </div>
          <div className="data-destination-9">
            <div className="choose-condition-2">{text2}</div>
            <img className="vector-10" alt="Vector" src="/img/vector-86.svg" />
          </div>
          <div className="options-6">
            <div className="div-6">Is any of</div>
            <img className="line-2" alt="Line" src="/img/line-73.svg" />
            <div className="div-7">Is none of</div>
            <img className="line-2" alt="Line" src="/img/line-73.svg" />
            <div className="div-7">Exists</div>
            <img className="line-2" alt="Line" src="/img/line-73.svg" />
            <div className="div-7">Does not exist</div>
            <img className="line-2" alt="Line" src="/img/line-73.svg" />
            <div className="div-7">Exactly matches</div>
            <img className="line-2" alt="Line" src="/img/line-73.svg" />
            <div className="div-7">Does not exactly match</div>
            <img className="line-2" alt="Line" src="/img/line-73.svg" />
            <div className="div-7">Contains</div>
            <img className="line-2" alt="Line" src="/img/line-73.svg" />
            <div className="div-7">Does not contain</div>
            <img className="line-2" alt="Line" src="/img/line-80.svg" />
            <div className="div-7">Starts with</div>
            <img className="line-2" alt="Line" src="/img/line-80.svg" />
            <div className="div-7">Does not start with</div>
            <img className="line-2" alt="Line" src="/img/line-80.svg" />
            <div className="div-7">Ends with</div>
            <img className="line-2" alt="Line" src="/img/line-80.svg" />
            <div className="div-7">Does not end with</div>
            <img className="line-2" alt="Line" src="/img/line-80.svg" />
            <div className="div-7">Greater then</div>
            <img className="line-2" alt="Line" src="/img/line-85.svg" />
            <div className="div-7">Less than</div>
            <img className="line-2" alt="Line" src="/img/line-85.svg" />
            <div className="div-7">Equal to</div>
            <img className="line-2" alt="Line" src="/img/line-85.svg" />
            <div className="div-7">Not equal to</div>
            <img className="line-2" alt="Line" src="/img/line-85.svg" />
            <div className="div-7">Matches regex</div>
            <img className="line-2" alt="Line" src="/img/line-85.svg" />
            <div className="div-7">Does not match regex</div>
            <img className="line-2" alt="Line" src="/img/line-85.svg" />
            <div className="div-7">Has Type</div>
          </div>
        </div>
      )}
    </div>
  );
};

function reducer(state, action) {
  if (state.property1 === "variant-2") {
    switch (action) {
      case "click":
        return {
          property1: "default",
        };

      case "click_2812":
        return {
          property1: "variant-4",
        };
    }
  }

  if (state.property1 === "variant-3") {
    switch (action) {
      case "click":
        return {
          property1: "variant-4",
        };
    }
  }

  if (state.property1 === "variant-4") {
    switch (action) {
      case "click_2886":
        return {
          property1: "variant-3",
        };

      case "click_2892":
        return {
          property1: "variant-2",
        };
    }
  }

  if (state.property1 === "variant-5") {
    switch (action) {
      case "click_2955":
        return {
          property1: "variant-4",
        };
    }
  }

  return state;
}

AndOperation.propTypes = {
  property1: PropTypes.oneOf(["default", "variant-5", "variant-2", "variant-3", "variant-4"]),
  hasDiv: PropTypes.bool,
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
};
