import React from "react";
import PropTypes from "prop-types";

function SubmitButton({ onClick }) {
  return <button onClick={onClick}>Submit</button>;
}

export default SubmitButton;

SubmitButton.propTypes = {
  submitanswer: PropTypes.func,
  changepage: PropTypes.func,
  onClick: PropTypes.func,
};
