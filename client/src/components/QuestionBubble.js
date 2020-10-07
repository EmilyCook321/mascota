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
  background-color: #6c63ff;
  text-align: center;
  outline: none;
  font-size: 100%;
  border: none;
  color: #ffff;
  margin-left: 10%;
  margin-right: 10%;
  border-radius: 5px;
  padding-top: 3%;
  padding-left: 3%;
  padding-right: 3%;
  width: 400px;
  height: 120px;
`;
