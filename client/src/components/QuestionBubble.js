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

// styling

const Textarea = styled.textarea`
  background-color: #4e7fcd;
  outline: none;
  resize: none;
  text-align: center;
  font-size: 100%;
  color: #ffffff;
  border-radius: 5px;
`;
