import React from "react";
import PropTypes from "prop-types";

export default function ActionButton({ text, onClick }) {
  return (
    <>
      <button onClick={() => onClick()}>{text}</button>
    </>
  );
}

ActionButton.propTypes = { text: PropTypes.string, onClick: PropTypes.func };
