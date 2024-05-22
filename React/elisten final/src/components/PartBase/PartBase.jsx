/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { HeroOutlineAngleExpandInput } from "../../icons/HeroOutlineAngleExpandInput";
import { HeroOutlineCalendar1 } from "../../icons/HeroOutlineCalendar1";
import { HeroOutlineCheveronDown28 } from "../../icons/HeroOutlineCheveronDown28";
import "./style.css";

export const PartBase = ({
  copy = true,
  flag = true,
  cornerIcon = true,
  placeholderHint = "Hint",
  titleText = true,
  helperText = true,
  inputField = true,
  placeholderHint1 = true,
  labelText = "Label",
  leftIcon = true,
  helper = "Helper",
  labelText1 = true,
  title = "Title",
  rightIcon = true,
  size,
  type,
  iconInTitle,
  className,
  divClassName,
  fieldClassName,
  divClassNameOverride,
  divClassName1,
}) => {
  return (
    <div className={`part-base ${type} ${className}`}>
      {titleText && (
        <div className={`title-text icon-in-title-${iconInTitle}`}>
          {!iconInTitle && <div className={`title ${size} ${divClassName}`}>{title}</div>}

          {iconInTitle && (
            <>
              <div className="title-2">{title}</div>
              <>{flag && <div className="part-flag-marker" />}</>
              <>{copy && <div className="part-flag-marker-2" />}</>
            </>
          )}
        </div>
      )}

      {inputField && (
        <div className={`field size-${size} type-${type} ${fieldClassName}`}>
          {type === "single-line" && (
            <>
              <>{leftIcon && <HeroOutlineCalendar1 className="hero-outline" color="#2C3236" />}</>
            </>
          )}

          {labelText1 && (
            <div className="label-text">
              <div className={`label ${type === "single-line" ? divClassNameOverride : undefined}`}>{labelText}</div>
            </div>
          )}

          {placeholderHint1 && (
            <div className="placeholder-hint">
              <div className="label-hint">{placeholderHint}</div>
            </div>
          )}

          {type === "single-line" && (
            <>
              <>{rightIcon && <HeroOutlineCheveronDown28 className="hero-outline" color="#2C3236" />}</>
            </>
          )}

          {type === "multi-line" && (
            <>
              <>{cornerIcon && <HeroOutlineAngleExpandInput className="hero-outline-angle" />}</>
            </>
          )}
        </div>
      )}

      {helperText && (
        <div className="helper-text">
          <div className={`helper ${divClassName1}`}>{helper}</div>
        </div>
      )}
    </div>
  );
};

PartBase.propTypes = {
  copy: PropTypes.bool,
  flag: PropTypes.bool,
  cornerIcon: PropTypes.bool,
  placeholderHint: PropTypes.string,
  titleText: PropTypes.bool,
  helperText: PropTypes.bool,
  inputField: PropTypes.bool,
  placeholderHint1: PropTypes.bool,
  labelText: PropTypes.string,
  leftIcon: PropTypes.bool,
  helper: PropTypes.string,
  labelText1: PropTypes.bool,
  title: PropTypes.string,
  rightIcon: PropTypes.bool,
  size: PropTypes.oneOf(["large", "medium", "small"]),
  type: PropTypes.oneOf(["multi-line", "single-line"]),
  iconInTitle: PropTypes.bool,
};
