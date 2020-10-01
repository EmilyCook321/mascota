import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

export default function CongratsBubble({ incPoints }) {
  return (
    <>
      <h1>Herzlichen Glückwunsch!</h1>
      <Textarea>
        Du hast {incPoints} Herzchen gewonnen! Du bist jetzt mit der Kita fertig
        und als Du jetzt 6 Jahre Alt bist, gehst Du jetzt zur Grundschule! Bist
        Du bereit weiter zu lernen?
      </Textarea>
    </>
  );
}

CongratsBubble.propTypes = { incPoints: PropTypes.string };

const Textarea = styled.textarea`
  top: 20px;
  background-color: #4e7fcd;
  outline: none;
  resize: none;
  text-align: center;
  font-size: 100%;
  color: #ffff;
  border-radius: 3px;
  width: 400px;
  height: 100px;
`;
