import React from "react";
import PropTypes from "prop-types";

export default function QuestionBubble({ question }) {
  return (
    <>
      <textarea>{question}</textarea>
    </>
  );
}

QuestionBubble.propTypes = { question: PropTypes.string };
