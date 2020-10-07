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
          --font-color-white: #ffffff;
          --font-color-orange: #d4561b;
          --wrong-answer-red: #ff3371;
          --answer-bubble-blue: #4e7fcd;
          --correct-answer-green: #33ffbb;
          --base-bg-purple: #9e38d5;
          --button-blue: #6c63ff;
          --button-orange: #d4561b;
          --submit-btn-color: #4e7fcd;
          --answer-bubble-color: #4e7fcd;
          --heart-counter-color: #ff33b2;
        }
        html {
          @font-face {
            font-family: "Montserrat", sans-serif;
            src: url(${Montserrat}) format("ttf");
            background-image: url("hexagon_background.jpg");
          }
          font-family: "Montserrat";
          height: 100vh;
          width: 100vw;
        }
        body {
          background-color: var(--base-bg-purple);
        }

        h1 {
          font-family: "Montserrat";

          color: var(--font-color-white);
        }

        h2 {
          font-family: "Montserrat";

          color: var(--font-color-white);
        }

        p {
          color: var(--font-color-white);
        }

        button {
          font-family: "Montserrat";
          background-color: var(--button-blue);
        }

        textarea {
          font-family: "Montserrat";
          width: 100%;
          height: auto;
        }
      `}
    />
  );
};

export default GlobalStyles;
