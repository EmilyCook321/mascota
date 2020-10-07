import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

export default function CongratsBubble() {
  return (
    <>
      <h2>Herzlichen Glückwunsch!</h2>
      <Textarea>
        Dino kann jetzt stehen! Lerne weiter, damit er fliegen kann.
      </Textarea>
    </>
  );
}

CongratsBubble.propTypes = { incPoints: PropTypes.string };

const Textarea = styled.textarea`
  margin-top: 2%;
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 2%;
  padding-top: 8%;
  background-color: #6c63ff;
  outline: none;
  border: none;
  resize: none;
  text-align: center;
  font-size: 100%;
  color: #ffff;
  border-radius: 5px;
  width: 250px;
  height: 100px;
`;
