import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

export default function QuestionBubble({ question }) {
  return (
    <>
      <Textarea>{question}</Textarea>
    </>
  );
}

QuestionBubble.propTypes = { question: PropTypes.string };

const Textarea = styled.textarea`
  top: 20px;
  background-color: #6c63ff;
  outline: none;
  resize: none;
  text-align: center;
  font-size: 100%;
  color: #ffff;
  border-radius: 3px;
  width: 400px;
  height: 100px;
`;
