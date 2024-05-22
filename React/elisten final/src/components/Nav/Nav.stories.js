import { Nav } from ".";

export default {
  title: "Components/Nav",
  component: Nav,
  argTypes: {
    property1: {
      options: ["trigger", "source", "save", "response", "account"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "trigger",
    className: {},
  },
};
