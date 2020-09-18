import React from "react";
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "fullscreen",
};
const AppDecorator = (Story, context) => {
  return <Story {...context} />;
};
export const decorators = [AppDecorator];
