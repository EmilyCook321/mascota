import React from "react";
import { Global, css } from "@emotion/core";
import Montserrat from "./assets/fonts/Montserrat-Medium.ttf";

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        *,
        *:before,
        *:after {
          box-sizing: border-box;
          margin: 0;
        }
        :root {
          --font-montserrat: "Montserrat-Medium";
          --color-purple: #9e38d5;
          --color-orange: #d4561b;
          --color-blue: #4e7fcd;
          --color-white: #ffffff;
        }
        html {
          @font-face {
            font-family: "Montserrat", sans-serif;
            src: url(${Montserrat}) format("ttf");
          }
        }
      `}
    />
  );
};

export default GlobalStyles;
