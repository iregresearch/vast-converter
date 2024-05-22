/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { PartBase } from "../PartBase";
import "./style.css";

export const Input = ({
  type,
  size,
  placeholder,
  stateProp,
  className,
  partBaseDivClassName,
  partBaseLabelText = "Label",
  partBaseHelperText,
  partBaseDivClassNameOverride,
  partBaseFieldClassName,
  partBaseLeftIcon,
  partBaseTitle = "Title",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    type: type || "single-line",
    size: size || "large",
    placeholder: placeholder || true,
    state: stateProp || "disabled",
  });

  return (
    <div
      className={`input ${state.state} type-4-${state.type} ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      <PartBase
        className={`${state.type === "multi-line" ? "class-3" : "class-4"}`}
        divClassName={partBaseDivClassNameOverride}
        divClassName1={`${state.state === "error" && "class"} ${state.state === "focused" && "class-2"}`}
        divClassNameOverride={partBaseDivClassName}
        fieldClassName={partBaseFieldClassName}
        helper="Helper"
        helperText={partBaseHelperText}
        iconInTitle={false}
        labelText={partBaseLabelText}
        labelText1={state.placeholder ? false : undefined}
        leftIcon={partBaseLeftIcon}
        placeholderHint={state.placeholder ? "Hint label" : undefined}
        placeholderHint1={!state.placeholder ? false : undefined}
        size={state.size === "medium" ? "medium" : state.size === "small" ? "small" : "large"}
        title={partBaseTitle}
        type={state.type === "multi-line" ? "multi-line" : "single-line"}
      />
    </div>
  );
};

function reducer(state, action) {
  if (
    state.placeholder === true &&
    state.size === "large" &&
    state.state === "focused" &&
    state.type === "single-line"
  ) {
    switch (action) {
      case "click":
        return {
          placeholder: true,
          size: "large",
          state: "default",
          type: "single-line",
        };
    }
  }

  if (
    state.placeholder === true &&
    state.size === "medium" &&
    state.state === "focused" &&
    state.type === "single-line"
  ) {
    switch (action) {
      case "click":
        return {
          placeholder: true,
          size: "medium",
          state: "default",
          type: "single-line",
        };
    }
  }

  if (
    state.placeholder === true &&
    state.size === "small" &&
    state.state === "focused" &&
    state.type === "single-line"
  ) {
    switch (action) {
      case "click":
        return {
          placeholder: true,
          size: "small",
          state: "default",
          type: "single-line",
        };
    }
  }

  if (
    state.placeholder === true &&
    state.size === "medium" &&
    state.state === "focused" &&
    state.type === "multi-line"
  ) {
    switch (action) {
      case "click":
        return {
          placeholder: true,
          size: "medium",
          state: "default",
          type: "multi-line",
        };
    }
  }

  if (
    state.placeholder === true &&
    state.size === "small" &&
    state.state === "focused" &&
    state.type === "multi-line"
  ) {
    switch (action) {
      case "click":
        return {
          placeholder: true,
          size: "small",
          state: "default",
          type: "multi-line",
        };
    }
  }

  if (
    state.placeholder === false &&
    state.size === "large" &&
    state.state === "focused" &&
    state.type === "single-line"
  ) {
    switch (action) {
      case "click":
        return {
          placeholder: false,
          size: "large",
          state: "default",
          type: "single-line",
        };
    }
  }

  if (
    state.placeholder === false &&
    state.size === "medium" &&
    state.state === "focused" &&
    state.type === "single-line"
  ) {
    switch (action) {
      case "click":
        return {
          placeholder: false,
          size: "medium",
          state: "default",
          type: "single-line",
        };
    }
  }

  if (
    state.placeholder === false &&
    state.size === "small" &&
    state.state === "focused" &&
    state.type === "single-line"
  ) {
    switch (action) {
      case "click":
        return {
          placeholder: false,
          size: "small",
          state: "default",
          type: "single-line",
        };
    }
  }

  if (
    state.placeholder === false &&
    state.size === "medium" &&
    state.state === "focused" &&
    state.type === "multi-line"
  ) {
    switch (action) {
      case "click":
        return {
          placeholder: false,
          size: "medium",
          state: "default",
          type: "multi-line",
        };
    }
  }

  if (
    state.placeholder === false &&
    state.size === "small" &&
    state.state === "focused" &&
    state.type === "multi-line"
  ) {
    switch (action) {
      case "click":
        return {
          placeholder: false,
          size: "small",
          state: "default",
          type: "multi-line",
        };
    }
  }

  if (
    state.placeholder === true &&
    state.size === "large" &&
    state.state === "default" &&
    state.type === "single-line"
  ) {
    switch (action) {
      case "click":
        return {
          placeholder: true,
          size: "large",
          state: "focused",
          type: "single-line",
        };
    }
  }

  if (
    state.placeholder === true &&
    state.size === "medium" &&
    state.state === "default" &&
    state.type === "single-line"
  ) {
    switch (action) {
      case "click":
        return {
          placeholder: true,
          size: "medium",
          state: "focused",
          type: "single-line",
        };
    }
  }

  if (
    state.placeholder === true &&
    state.size === "small" &&
    state.state === "default" &&
    state.type === "single-line"
  ) {
    switch (action) {
      case "click":
        return {
          placeholder: true,
          size: "small",
          state: "focused",
          type: "single-line",
        };
    }
  }

  if (
    state.placeholder === true &&
    state.size === "medium" &&
    state.state === "default" &&
    state.type === "multi-line"
  ) {
    switch (action) {
      case "click":
        return {
          placeholder: true,
          size: "medium",
          state: "focused",
          type: "multi-line",
        };
    }
  }

  if (
    state.placeholder === true &&
    state.size === "small" &&
    state.state === "default" &&
    state.type === "multi-line"
  ) {
    switch (action) {
      case "click":
        return {
          placeholder: true,
          size: "small",
          state: "focused",
          type: "multi-line",
        };
    }
  }

  if (
    state.placeholder === false &&
    state.size === "large" &&
    state.state === "default" &&
    state.type === "single-line"
  ) {
    switch (action) {
      case "click":
        return {
          placeholder: false,
          size: "large",
          state: "focused",
          type: "single-line",
        };
    }
  }

  if (
    state.placeholder === false &&
    state.size === "medium" &&
    state.state === "default" &&
    state.type === "single-line"
  ) {
    switch (action) {
      case "click":
        return {
          placeholder: false,
          size: "medium",
          state: "focused",
          type: "single-line",
        };
    }
  }

  if (
    state.placeholder === false &&
    state.size === "small" &&
    state.state === "default" &&
    state.type === "single-line"
  ) {
    switch (action) {
      case "click":
        return {
          placeholder: false,
          size: "small",
          state: "focused",
          type: "single-line",
        };
    }
  }

  if (
    state.placeholder === false &&
    state.size === "medium" &&
    state.state === "default" &&
    state.type === "multi-line"
  ) {
    switch (action) {
      case "click":
        return {
          placeholder: false,
          size: "medium",
          state: "focused",
          type: "multi-line",
        };
    }
  }

  if (
    state.placeholder === false &&
    state.size === "small" &&
    state.state === "default" &&
    state.type === "multi-line"
  ) {
    switch (action) {
      case "click":
        return {
          placeholder: false,
          size: "small",
          state: "focused",
          type: "multi-line",
        };
    }
  }

  return state;
}

Input.propTypes = {
  type: PropTypes.oneOf(["multi-line", "single-line"]),
  size: PropTypes.oneOf(["large", "medium", "small"]),
  placeholder: PropTypes.bool,
  stateProp: PropTypes.oneOf(["default", "focused", "error", "disabled"]),
  partBaseLabelText: PropTypes.string,
  partBaseHelperText: PropTypes.bool,
  partBaseLeftIcon: PropTypes.bool,
  partBaseTitle: PropTypes.string,
};
