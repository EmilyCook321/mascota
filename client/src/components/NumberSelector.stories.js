import React from "react";
import NumberSelector from "../components/NumberSelector";

export default {
  title: "NumberSelector",
  component: NumberSelector,
};

const Template = (args) => <NumberSelector {...args} />;
export const Initial = Template.bind({});
Initial.args = {};
