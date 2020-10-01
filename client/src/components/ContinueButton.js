import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

function ContinueButton({ onClick }) {
  return <Button onClick={onClick}>Continue</Button>;
}

export default ContinueButton;

ContinueButton.propTypes = {
  changepage: PropTypes.func,
  onClick: PropTypes.func,
};

const Button = styled.button`
  margin: 0 auto;
  justify-content: center;
  color: #ffffff;
  border-radius: 5px;
`;
