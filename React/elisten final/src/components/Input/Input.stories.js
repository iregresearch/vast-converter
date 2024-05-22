import { Input } from ".";

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {
    type: {
      options: ["multi-line", "single-line"],
      control: { type: "select" },
    },
    size: {
      options: ["large", "medium", "small"],
      control: { type: "select" },
    },
    stateProp: {
      options: ["default", "focused", "error", "disabled"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "multi-line",
    size: "large",
    placeholder: true,
    stateProp: "default",
    className: {},
    partBaseDivClassName: {},
    partBaseLabelText: "Label",
    partBaseHelperText: true,
    partBaseDivClassNameOverride: {},
    partBaseFieldClassName: {},
    partBaseLeftIcon: true,
    partBaseTitle: "Title",
  },
};
