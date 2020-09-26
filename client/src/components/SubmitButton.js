import React from "react";
import PropTypes from "prop-types";

function SubmitButton() {
  return (
    <div>
      <SubmitButton>Submit</SubmitButton>
    </div>
  );
}

export default SubmitButton;

SubmitButton.propTypes = {
  submitanswer: PropTypes.func,
  changepage: PropTypes.func,
};
