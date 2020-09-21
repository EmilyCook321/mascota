import React from "react";
import PropTypes from "prop-types";

export default function QuestionBubble({ text }) {
  return (
    <>
      <textarea>{text}</textarea>
    </>
  );
}

QuestionBubble.propTypes = { text: PropTypes.string, onClick: PropTypes.func };
