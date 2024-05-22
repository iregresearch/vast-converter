import { WhatsappOr } from ".";

export default {
  title: "Components/WhatsappOr",
  component: WhatsappOr,
  argTypes: {
    property1: {
      options: ["variant-4", "variant-2", "variant-3", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "variant-4",
    className: {},
    groupClassName: {},
    divClassName: {},
    text: "Choose Field",
    vector: "/img/vector-78.svg",
    dataDestinationClassName: {},
    text1: "Enter Inputs / Select File",
    dataDestinationClassNameOverride: {},
    divClassNameOverride: {},
    text2: "Choose Condition",
  },
};
