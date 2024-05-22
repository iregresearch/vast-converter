/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const WhatsappOr = ({
  property1,
  className,
  groupClassName,
  divClassName,
  text = "Choose Field",
  vector = "/img/vector-78.svg",
  dataDestinationClassName,
  text1 = "Enter Inputs / Select File",
  dataDestinationClassNameOverride,
  divClassNameOverride,
  text2 = "Choose Condition",
}) => {
  return (
    <div className={`whatsapp-or ${property1} ${className}`}>
      {property1 === "default" && (
        <>
          <div className={`group-2 ${groupClassName}`}>
            <div className="div-2">Or Continue if</div>
            <div className="data-destination">
              <div className={`div-3 ${divClassName}`}>{text}</div>
              <img className="vector-7" alt="Vector" src={vector} />
            </div>
          </div>
          <div className={`enter-inputs-select-wrapper ${dataDestinationClassName}`}>
            <p className="div-3">{text1}</p>
          </div>
          <div className={`data-destination-2 ${dataDestinationClassNameOverride}`}>
            <div className={`choose-condition ${divClassNameOverride}`}>{text2}</div>
            <img className="vector-7" alt="Vector" src="/img/vector-78.svg" />
          </div>
        </>
      )}

      {["variant-2", "variant-3", "variant-4"].includes(property1) && (
        <div className="group-2">
          <div className="div-2">
            {property1 === "variant-2" && <>Only Continue if</>}

            {["variant-3", "variant-4"].includes(property1) && <>Or Continue if</>}
          </div>
          <div className="data-destination">
            <div className="div-3">
              {property1 === "variant-2" && <>Select Parameter</>}

              {["variant-3", "variant-4"].includes(property1) && <>{text}</>}
            </div>
            <img
              className="vector-7"
              alt="Vector"
              src={property1 === "variant-3" ? "/img/vector-78.svg" : "/img/vector-80.svg"}
            />
          </div>
        </div>
      )}

      {property1 === "variant-4" && (
        <div className="data-destination-3">
          <p className="div-3">{text1}</p>
        </div>
      )}

      {["variant-2", "variant-3", "variant-4"].includes(property1) && (
        <div className="data-destination-4">
          {["variant-2", "variant-3"].includes(property1) && <p className="div-3">{text1}</p>}

          {property1 === "variant-4" && (
            <>
              <div className="choose-condition">{text2}</div>
              <img className="vector-7" alt="Vector" src="/img/vector-80.svg" />
            </>
          )}
        </div>
      )}

      {property1 === "variant-4" && (
        <>
          <div className="options">
            <div className="div-4">Is any of</div>
            <img className="line" alt="Line" src="/img/line-73.svg" />
            <div className="div-5">Is none of</div>
            <img className="line" alt="Line" src="/img/line-73.svg" />
            <div className="div-5">Exists</div>
            <img className="line" alt="Line" src="/img/line-73.svg" />
            <div className="div-5">Does not exist</div>
            <img className="line" alt="Line" src="/img/line-73.svg" />
            <div className="div-5">Exactly matches</div>
            <img className="line" alt="Line" src="/img/line-73.svg" />
            <div className="div-5">Does not exactly match</div>
            <img className="line" alt="Line" src="/img/line-73.svg" />
            <div className="div-5">Contains</div>
            <img className="line" alt="Line" src="/img/line-73.svg" />
            <div className="div-5">Does not contain</div>
            <img className="line" alt="Line" src="/img/line-80.svg" />
            <div className="div-5">Starts with</div>
            <img className="line" alt="Line" src="/img/line-80.svg" />
            <div className="div-5">Does not start with</div>
            <img className="line" alt="Line" src="/img/line-80.svg" />
            <div className="div-5">Ends with</div>
            <img className="line" alt="Line" src="/img/line-80.svg" />
            <div className="div-5">Does not end with</div>
            <img className="line" alt="Line" src="/img/line-80.svg" />
            <div className="div-5">Greater then</div>
            <img className="line" alt="Line" src="/img/line-85.svg" />
            <div className="div-5">Less than</div>
            <img className="line" alt="Line" src="/img/line-85.svg" />
            <div className="div-5">Equal to</div>
            <img className="line" alt="Line" src="/img/line-85.svg" />
            <div className="div-5">Not equal to</div>
            <img className="line" alt="Line" src="/img/line-85.svg" />
            <div className="div-5">Matches regex</div>
            <img className="line" alt="Line" src="/img/line-85.svg" />
            <div className="div-5">Does not match regex</div>
            <img className="line" alt="Line" src="/img/line-85.svg" />
            <div className="div-5">Has Type</div>
          </div>
          <div className="options-2">
            <div className="div-4">Country Code</div>
            <img className="line" alt="Line" src="/img/line-73.svg" />
            <div className="div-5">Phone Number</div>
            <img className="line" alt="Line" src="/img/line-73.svg" />
            <div className="div-5">Link</div>
            <img className="line" alt="Line" src="/img/line-73.svg" />
            <div className="div-5">Language</div>
            <img className="line" alt="Line" src="/img/line-73.svg" />
            <div className="div-5">Poll</div>
            <img className="line" alt="Line" src="/img/line-73.svg" />
            <div className="div-5">Hashtag</div>
            <img className="line" alt="Line" src="/img/line-73.svg" />
            <div className="div-5">Mention</div>
            <img className="line" alt="Line" src="/img/line-80.svg" />
            <div className="div-5">Body</div>
            <img className="line" alt="Line" src="/img/line-80.svg" />
            <div className="div-5">Attachment</div>
          </div>
        </>
      )}

      {["variant-2", "variant-3"].includes(property1) && (
        <>
          <div className="data-destination-2">
            <div className="choose-condition">{text2}</div>
            <img
              className="vector-7"
              alt="Vector"
              src={property1 === "variant-3" ? "/img/vector-80.svg" : "/img/vector-78.svg"}
            />
          </div>
          <div className="options-3">
            <div className="div-4">
              {property1 === "variant-3" && <>Is any of</>}

              {property1 === "variant-2" && <>Country Code</>}
            </div>
            <img className="line" alt="Line" src="/img/line-73.svg" />
            <div className="div-5">
              {property1 === "variant-2" && <>Phone Number</>}

              {property1 === "variant-3" && <>Is none of</>}
            </div>
            <img className="line" alt="Line" src="/img/line-73.svg" />
            <div className="div-5">
              {property1 === "variant-2" && <>Link</>}

              {property1 === "variant-3" && <>Exists</>}
            </div>
            <img className="line" alt="Line" src="/img/line-73.svg" />
            <div className="div-5">
              {property1 === "variant-3" && <>Does not exist</>}

              {property1 === "variant-2" && <>Language</>}
            </div>
            <img className="line" alt="Line" src="/img/line-73.svg" />
            <div className="div-5">
              {property1 === "variant-2" && <>Poll</>}

              {property1 === "variant-3" && <>Exactly matches</>}
            </div>
            <img className="line" alt="Line" src="/img/line-73.svg" />
            <div className="div-5">
              {property1 === "variant-2" && <>Hashtag</>}

              {property1 === "variant-3" && <>Does not exactly match</>}
            </div>
            <img className="line" alt="Line" src="/img/line-73.svg" />
            <div className="div-5">
              {property1 === "variant-2" && <>Mention</>}

              {property1 === "variant-3" && <>Contains</>}
            </div>
            <img
              className="line"
              alt="Line"
              src={property1 === "variant-3" ? "/img/line-73.svg" : "/img/line-80.svg"}
            />
            <div className="div-5">
              {property1 === "variant-2" && <>Body</>}

              {property1 === "variant-3" && <>Does not contain</>}
            </div>
            <img className="line" alt="Line" src="/img/line-80.svg" />
            <div className="div-5">
              {property1 === "variant-2" && <>Attachment</>}

              {property1 === "variant-3" && <>Starts with</>}
            </div>
            {property1 === "variant-3" && (
              <>
                <img className="line" alt="Line" src="/img/line-80.svg" />
                <div className="div-5">Does not start with</div>
                <img className="line" alt="Line" src="/img/line-80.svg" />
                <div className="div-5">Ends with</div>
                <img className="line" alt="Line" src="/img/line-80.svg" />
                <div className="div-5">Does not end with</div>
                <img className="line" alt="Line" src="/img/line-80.svg" />
                <div className="div-5">Greater then</div>
                <img className="line" alt="Line" src="/img/line-85.svg" />
                <div className="div-5">Less than</div>
                <img className="line" alt="Line" src="/img/line-85.svg" />
                <div className="div-5">Equal to</div>
                <img className="line" alt="Line" src="/img/line-85.svg" />
                <div className="div-5">Not equal to</div>
                <img className="line" alt="Line" src="/img/line-85.svg" />
                <div className="div-5">Matches regex</div>
                <img className="line" alt="Line" src="/img/line-85.svg" />
                <div className="div-5">Does not match regex</div>
                <img className="line" alt="Line" src="/img/line-85.svg" />
                <div className="div-5">Has Type</div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

WhatsappOr.propTypes = {
  property1: PropTypes.oneOf(["variant-4", "variant-2", "variant-3", "default"]),
  text: PropTypes.string,
  vector: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
};
