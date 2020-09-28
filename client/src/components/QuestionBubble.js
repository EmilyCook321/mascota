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
  width: 250px;
  height: 80px;
  text-align: center;
  font-size: 15px;
  font-family: Roboto;
  color: #ffffff;
  border-radius: 5px;
`;

// const Button = styled.button`
//   background-color: #9e38d5;
// `;
