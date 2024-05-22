import { Buttons } from ".";

export default {
  title: "Components/Buttons",
  component: Buttons,
  argTypes: {
    property1: {
      options: ["outline-btn", "small-btn", "lg-btn"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "outline-btn",
    className: {},
    text: "Previous",
    text1: "Continue",
  },
};
