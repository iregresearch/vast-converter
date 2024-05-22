import { PartBase } from ".";

export default {
  title: "Components/PartBase",
  component: PartBase,
  argTypes: {
    size: {
      options: ["large", "medium", "small"],
      control: { type: "select" },
    },
    type: {
      options: ["multi-line", "single-line"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    copy: true,
    flag: true,
    cornerIcon: true,
    placeholderHint: "Hint",
    titleText: true,
    helperText: true,
    inputField: true,
    placeholderHint1: true,
    labelText: "Label",
    leftIcon: true,
    helper: "Helper",
    labelText1: true,
    title: "Title",
    rightIcon: true,
    size: "large",
    type: "multi-line",
    iconInTitle: true,
    className: {},
    divClassName: {},
    fieldClassName: {},
    divClassNameOverride: {},
    divClassName1: {},
  },
};
