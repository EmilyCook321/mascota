import React from "react";
import NumberDisplay from "../components/NumberDisplay";

export default {
  title: "Example/NumberDisplay",
  component: NumberDisplay,
};

const Template = (args) => <NumberDisplay {...args} />;
export const value = Template.bind({});
value.args = {
  value: "+1",
};
