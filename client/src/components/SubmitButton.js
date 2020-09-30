import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

function SubmitButton() {
  let history = useHistory();

  function handleClick() {
    history.push("/questions/:id");
  }
  return <SubmitButton onClick={handleClick}>Submit</SubmitButton>;
}

export default SubmitButton;

SubmitButton.propTypes = {
  submitanswer: PropTypes.func,
  changepage: PropTypes.func,
};
