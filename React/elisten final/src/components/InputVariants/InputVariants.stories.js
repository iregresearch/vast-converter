import { InputVariants } from ".";

export default {
  title: "Components/InputVariants",
  component: InputVariants,
  argTypes: {
    property1: {
      options: ["simple-drop-down", "multiple", "simple", "browse"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "simple-drop-down",
    text: "Reply To Email:",
    text1: "Select Email Template",
    className: {},
    text2: "Label Email:",
    text3: "Enter Label Name",
    text4: "Forward Email:",
    text5: "Select Email List",
  },
};
