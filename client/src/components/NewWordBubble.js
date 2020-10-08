import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

export default function NewWordBubble() {
  return (
    <>
      <Textarea>8</Textarea>
    </>
  );
}

NewWordBubble.propTypes = { question: PropTypes.string };

const Textarea = styled.textarea`
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 5%;
  margin-bottom: 5%;
  resize: none;
  background-color: #6c63ff;
  padding-top: 5%;
  padding-bottom: 3%;
  outline: none;
  resize: none;
  text-align: center;
  font-size: 30px;
  color: #ffff;
  border-radius: 5px;
  width: 70px;
  height: 70px;
  border: none;
`;
