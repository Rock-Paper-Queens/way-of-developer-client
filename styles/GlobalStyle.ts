import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
  }

  body {
    box-sizing: border-box;
    font-family: 'Noto Sans', 'sans-serif';
    text-rendering: optimizeLegibility;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
