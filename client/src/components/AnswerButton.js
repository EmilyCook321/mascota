import React from "react";
import PropTypes from "prop-types";

export default function AnswerButton({ options }) {
  return (
    <>
      <button>{options}</button>
    </>
  );
}

AnswerButton.propTypes = { options: PropTypes.string };
