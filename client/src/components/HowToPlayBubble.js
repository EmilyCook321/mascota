import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

export default function HowToPlayBubble() {
  return (
    <>
      <Textarea>Rules</Textarea>
    </>
  );
}

HowToPlayBubble.propTypes = { question: PropTypes.string };

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
