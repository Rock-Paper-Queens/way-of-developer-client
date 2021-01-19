import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import GlobalStyles from "../components/GlobalStyles";

console.log(theme);
export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  ),
  withKnobs,
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
  controls: { expanded: true },
};
