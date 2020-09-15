import React from "react";
import ActionButton from "../components/ActionButton";
export default {
  title: "Example/ActionButton",
  component: ActionButton,
};
const Template = (args) => <ActionButton {...args} />;
export const Plus = Template.bind({});
Plus.args = {
  text: "+",
  onClick: () => console.log("clicked +"),
};
export const Minus = Template.bind({});
Minus.args = {
  text: "-",
  onClick: () => console.log("clicked +"),
};
