import { AndOperation } from ".";

export default {
  title: "Components/AndOperation",
  component: AndOperation,
  argTypes: {
    property1: {
      options: ["default", "variant-5", "variant-2", "variant-3", "variant-4"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "default",
    className: {},
    groupClassName: {},
    hasDiv: true,
    dataDestinationClassName: {},
    text: "Select Parameter",
    dataDestinationClassNameOverride: {},
    text1: "Enter Inputs / Select File",
    divClassName: {},
    text2: "Choose Condition",
  },
};
