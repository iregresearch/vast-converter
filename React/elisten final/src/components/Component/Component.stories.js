import { Component } from ".";

export default {
  title: "Components/Component",
  component: Component,
  argTypes: {
    property1: {
      options: ["button-large", "button-small-secondary", "button-small-primary"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "button-large",
    className: {},
    text: "Add files to sign",
  },
};
